import Handlebars from "handlebars";
import menuCardHtml from "./menucard.html"

export function renderMenuCard() {
    const menuCardTemplate = Handlebars.compile(menuCardHtml);
    document.getElementsByTagName('body')?.[0]?.insertAdjacentHTML('beforeend', menuCardTemplate({}))
}