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

    renderAdventureCard() {
        return `
          <div data-id=${this.id}>
            <img src=${this.image_url} height="200" width="250">
            <h3>${this.title}</h3>
            <p><strong>Location:</strong> ${this.location}</p>
            <p><strong>Description:</strong> ${this.description}</p>
            <p><strong>Category:</strong> ${this.category.name}</p>
            <button class="delete-btn" data-id=${this.id}>Delete Adventure</button>
          </div>
          <br><br>`;     
      }
}

Adventure.all = [];