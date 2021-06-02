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
}

Adventure.all = [];