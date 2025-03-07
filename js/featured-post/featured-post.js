class FeaturedPost extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h2>Featured Post</h2>
      <p>This is a featured post.</p>
    `;
  }
}