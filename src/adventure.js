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
  
  renderAdventure() {
    return `
    <div data-id=${this.id}>
    <h3>${this.title}</h3>
    <img src=${this.image_url} height="200" width="250">
    <p><strong>Location:</strong> ${this.location}</p>
    <p><strong>Description:</strong> ${this.description}</p>
    <p><strong>Category:</strong> ${this.category.name}</p>
    <button data-id=${this.id} id="delete-btn" type="button" class="delete-btn">Delete Adventure</button>
    </div>    
    <br><br>`;     
  }
}

Adventure.all = [];