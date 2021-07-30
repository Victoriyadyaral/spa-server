import AbstractView from "./abstract-view.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home-page");
    }

    async getHtml() {
        return `
            <section class="library">
               <div class="container">
                 <h1>Library page content</h1>
                  <ul class="filters-list "></ul>
                  </div>
            </section>
        `;
    }
}