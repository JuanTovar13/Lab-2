document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container');

    fetch('./posts.json')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postCard = document.createElement('post-card');
                postCard.setAttribute('title', post.title);
                postCard.setAttribute('category', post.category);
                postCard.setAttribute('author', post.authors.map(a => a.name).join(', '));
                postCard.setAttribute('date', post.date);
                postCard.setAttribute('content', post.description.substring(0, 100) + '...'); 
                postCard.setAttribute('image', post.image || ''); 

                postsContainer.appendChild(postCard);
            });
        })
        .catch(error => console.error("Error cargando los posts:", error));
});