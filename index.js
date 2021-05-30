const endPoint = "http://localhost:3000/api/v1/adventures"

document.addEventListener('DOMContentLoaded', () => {
    getAdventures()

    const createAdventureForm = document.querySelector ("#create-adventure-form")

    createAdventureForm.addEventListener("submit", (e) => createFormHandler(e))
})


function getAdventures() {
    fetch(endPoint)
    .then(response => response.json())
    .then(get_adventures => {
      get_adventures.data.forEach(adventure => {
        
        const adventureMarkup = `
          <div data-id=${adventure.id}>
            <img src=${adventure.attributes.image_url} height="200" width="250">
            <h3>${adventure.attributes.title}</h3>
            <p>Category: ${adventure.attributes.category.name}</p>
            <button data-id=${adventure.id}>edit</button>
          </div>
          <br><br>`;

          document.querySelector('#adventure-container').innerHTML += adventureMarkup
      })
    })
}


function createFormHandler(e) {
  e.preventDefault()
  const titleInput = document.querySelector('#input-title').value
  const locationInput = document.querySelector('#input-location').value
  const descriptionInput = document.querySelector('#input-description').value
  const imageInput = document.querySelector('#input-url').value
  const categoryId = parseInt(document.querySelector('#categories').value)
  postFetch (titleInput, locationInput, descriptionInput, imageInput, categoryId)
}

function postFetch(title, location, description, image_url, category_id) {
  let bodyObj = {title, location, description, image_url, category_id}
  
  fetch(endPoint, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyObj)
  })
  .then(response => response.json())
  .then(post_adventure => {
    const adventureData = post_adventure.data.attributes
    // render JSON response
    const adventureMarkup = `
    <div data-id=${adventure.id}>
      <img src=${adventureData.image_url} height="200" width="250">
      <h3>${adventureData.title}</h3>
      <p>${adventureData.category.name}</p>
      <button data-id=${adventureData.id}>edit</button>
    </div>
    <br><br>`;

    document.querySelector('#adventure-container').innerHTML += adventureMarkup;
  })
}