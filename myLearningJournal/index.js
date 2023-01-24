const viewMore = document.getElementById('view-more')
const wrapper = document.getElementById('wrapper')

viewMore.addEventListener('click', function() {
    let moreBlogs = ``
    moreBlogs += `
    <div class="flex-row-item">
    <img class="blog-img" src="/images/1.jpg" alt="">
    <div class="wrapper-info">
        <p class="data-wrapper">24.12.2022</p>
        <h1 class="h1-wrapper">How</h1>
        <p class="blog-wrapper">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
    </div>
    </div>

    <div class="flex-row-item">
        <img class="blog-img" src="/images/2.jpg" alt="">
        <div class="wrapper-info">
            <p class="data-wrapper">24.12.2022</p>
            <h1 class="h1-wrapper">are</h1>
            <p class="blog-wrapper">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
        </div>
    </div>

    <div class="flex-row-item">
        <img class="blog-img" src="/images/4.jpg" alt="">
        <div class="wrapper-info">
            <p class="data-wrapper">24.12.2022</p>
            <h1 class="h1-wrapper">you?</h1>
            <p class="blog-wrapper">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
        </div>
    </div>
    </div>
    `
    wrapper.innerHTML += moreBlogs
})


