import AbstractView from "./abstract-view.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home-page");
    }

    async getHtml() {
        return `
            <section class="film-cards">
              <h1>Home-page</h1>
                <div class="container">
                  <ul class="film-cards__list list"></ul>
                </div>
            </section>
        `;
    }
}