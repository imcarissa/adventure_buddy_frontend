class Adventure {

    constructor(adventure, adventureAttributes) {
        this.id = adventure.id
        this.title = adventureAttributes.title
        this.location = adventureAttributes.location
        this.description = adventureAttributes.description
        this.image_url = adventureAttributes.image_url
        this.category = adventureAttributes.category
        Adventure.all.push(this)
    }

    function render(adventure) {
        const adventureMarkup = `
          <div data-id=${adventure.id}>
            <img src=${adventure.attributes.image_url} height="200" width="250">
            <h3>${adventure.attributes.title}</h3>
            <p><strong>Location:</strong> ${adventure.attributes.location}</p>
            <p><strong>Description:</strong> ${adventure.attributes.description}</p>
            <p><strong>Category:</strong> ${adventure.attributes.category.name}</p>
            <button data-id=${adventure.id}>edit</button>
          </div>
          <br><br>`;
      
        document.querySelector('#adventure-container').innerHTML += adventureMarkup
      }
}

Adventure.all = [];