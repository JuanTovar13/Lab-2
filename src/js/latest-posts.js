import posts from './posts.json';

document.addEventListener('DOMContentLoaded', () => {
    const latestSection = document.getElementById('latest-posts');

    posts.forEach(post => {
        const postCard = document.createElement('post-card');
        postCard.setAttribute('title', post.title);
        postCard.setAttribute('category', post.category);
        postCard.setAttribute('author', post.authors.join(', ')); 
        postCard.setAttribute('date', post.date);
        postCard.setAttribute('content', post.description); 

        latestSection.appendChild(postCard);
    });
});
