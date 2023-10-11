import Handlebars from "handlebars";
import menuCardHtml from "./menucard.html"

interface MenuCardData {
    defaultGrossProfitMargin: number;
}

export function renderMenuCard() {
    const menuCardTemplate = Handlebars.compile(menuCardHtml);
    const menuCardData: MenuCardData = {
        defaultGrossProfitMargin: 28, // TODO: get value from storage
    }
    document.getElementsByTagName('body')?.[0]?.insertAdjacentHTML('beforeend', menuCardTemplate(menuCardData))
}