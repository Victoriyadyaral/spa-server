import AbstractView from "./abstract-view.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Page");
    }

    async getHtml() {
        return `
            <section class="container">
            <h1>Page</h1>
            <p>
                Урааааааааа!
            </p>
            
            </section>
        `;
    }
}