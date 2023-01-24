// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }
    
    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
            <div class="feature-suggestion">
                <div>
                    <img class="badge-like hidden" id="badge-like" src="/images/badge-like.png"
                </div>       
                <div>
                    <img class="badge-dislike hidden" id="badge-dislike" src="/images/badge-nope.png"
                </div>
                <div class="dog-info" id="dog-info">
                    <h4> ${name}, ${age} </h4>
                    <div class="dog-bio">
                        ${bio}
                    </div>
                </div>
                <img class="dog-img" src="${avatar}">
            </div>`
    }
}

export default Dog