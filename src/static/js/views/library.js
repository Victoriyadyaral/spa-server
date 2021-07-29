import AbstractView from "./abstract-view.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("LIBRARY");
    }

    async getHtml() {
        return `
            <section class="container">
            <h1>MY-LIBRARY</h1>
            <p>
                Урааааааааа!
            </p>
            
            </section>
        `;
    }
}