let postsArray = []
const titleInput = document.getElementById('post-title')
const bodyInput = document.getElementById('post-body')

function renderPosts() {
    let html = ""
    for (let post of postsArray) {
        html += `
            <h3 class="title" id="title">${post.title}</h3>
            <p class="article" id="article">${post.body}</p>
            <hr />
        `
    }
    document.getElementById('blog').innerHTML = html

}

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 5)
        renderPosts()
    }) 


document.getElementById('new-post').addEventListener('click', function(e) {
    e.preventDefault()
    const postTitle = titleInput.value
    const postBody = bodyInput.value
    const data = {
        title: postTitle,
        body: postBody,
    }
    
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch('https://apis.scrimba.com/jsonplaceholder/posts', options)
        .then(res => res.json())
        .then(post => {
            postsArray.unshift(post)
            renderPosts()
            titleInput.value = ''
            bodyInput.value = ''
        })
})

