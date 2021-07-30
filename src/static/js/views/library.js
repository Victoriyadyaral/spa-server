import AbstractView from "./abstract-view.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("LIBRARY");
    }

    async getHtml() {
        return `
            <section class="library">
            <h1>MY-LIBRARY</h1>
             <div class="container">
              <h1 class="visually-hidden">Library page content</h1>
             <ul class="filters-list ">
            </ul>
              </div>
              </section>
        `;
    }
}