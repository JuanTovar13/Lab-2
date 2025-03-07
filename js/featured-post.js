class FeaturedPost extends HTMLElement {
  connectedCallback() {
    const postData = {
      image: this.getAttribute("image") || "assets/images/featured.jpg",
      title: this.getAttribute("title") || "Featured Post Title",
      description: this.getAttribute("description") || "This is a featured post description...",
      link: this.getAttribute("link") || "#"
    };

    this.innerHTML = `
      <section class="featured-post">
        <div class="featured-image">
          <img src="${postData.image}" alt="Featured Post Image">
        </div>
        <div class="featured-content">
          <h2 class="featured-title">${postData.title}</h2>
          <p class="featured-description">${postData.description}</p>
          <a href="${postData.link}" class="featured-link">Continue reading...</a>
        </div>
      </section>
    `;
  }
}

// Registrar el componente
customElements.define('featured-post', FeaturedPost);