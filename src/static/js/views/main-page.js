import AbstractView from "./abstract-view.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Page");
    }

    async getHtml() {
        return `
            <section class="film-cards">
              <h1>Main-page</h1>
                <div class="container">
                  <ul class="popular-film-cards__list list"></ul>
                </div>
            </section>
        `;
    }
}