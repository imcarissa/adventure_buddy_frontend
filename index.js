const endPoint = "http://localhost:3000/api/v1/adventures"

document.addEventListener('DOMContentLoaded', () => {
    getAdventures()

    const createAdventureForm = document.querySelector ("#create-adventure-form")

    createAdventureForm.addEventListener("submit", (e) => 
    createFormHandler(e))
})


function getAdventures() {
    fetch(endPoint)
    .then(response => response.json())
    .then(adventures => {
      adventures.data.forEach(adventure => {
        const adventureMarkup = `
          <div data-id=${adventure.id}>
          <h1>Adventures Available</h1>
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
  const categoryInput = document.querySelector('#categories').value
}