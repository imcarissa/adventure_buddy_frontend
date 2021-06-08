const endPoint = "http://localhost:3000/api/v1/adventures"

document.addEventListener('DOMContentLoaded', () => {
    getAdventures()

    const createAdventureForm = document.querySelector ("#create-adventure-form")

    createAdventureForm.addEventListener("submit", (e) => createFormHandler(e))

})


function getAdventures() {
    fetch(endPoint)
    .then(response => response.json())
    .then(adventures => {
      adventures.data.forEach(adventure => {

        let newAdventure = new Adventure(adventure, adventure.attributes)

        document.querySelector('#adventure-container').innerHTML += newAdventure.renderAdventureCard()
      })
    })
}


function createFormHandler() {
  event.preventDefault()
  const titleInput = document.querySelector('#input-title').value
  const locationInput = document.querySelector('#input-location').value
  const descriptionInput = document.querySelector('#input-description').value
  const imageInput = document.querySelector('#input-url').value
  const categoryId = parseInt(document.querySelector('#categories').value)
  postAdventures (titleInput, locationInput, descriptionInput, imageInput, categoryId)
}


function postAdventures(title, location, description, image_url, category_id) {
  let bodyObj = {title, location, description, image_url, category_id}
  
  fetch(endPoint, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyObj)
  })
  .then(response => response.json())
  .then(adventure => {
    const adventureData = adventure.data
    
    let newAdventure = new Adventure(adventureData, adventureData.attributes)

    document.querySelector('#adventure-container').innerHTML += newAdventure.renderAdventureCard()
  })
}

function deleteAdventure() {

  let adventureId = parseInt(event.target.dataset.id)

  fetch(endPoint + `/${adventureId}`, {
      method: 'DELETE'
  })

  this.location.reload()
}