import AbstractView from "./abstract-view.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Page");
    }

    async getHtml() {
        return `
            <section class="film-cards">
                <div class="container">
                <h1>Main-page</h1>
                  <ul class="film-cards__list js-pop-film-list"></ul>
                </div>
            </section>
        `;
    }
}