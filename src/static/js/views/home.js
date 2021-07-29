import AbstractView from "./abstract-view.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home-page");
    }

    async getHtml() {
        return `
            <section class="container">
            <h1>Home-page</h1>
            <p>
                Урааааааааа!
            </p>
            
            </section>
        `;
    }
}