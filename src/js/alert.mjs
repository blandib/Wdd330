import { renderListWithTemplate } from "./utils.mjs";

function alertItem(alert) {
    return `<p style="background:${alert.background}; 
    color:${alert.color};">${alert.message}</p>`;
}

export default class Alert {
    constructor() {
        this.alert = fetch("../json/alerts.json");
    }
    async init() {
        const alert = await this.alert;
        const data = await alert.json();
        this.displayAlert(data);
    }
    displayAlert(data) {
        const parentElement = document.querySelector("main");
        console.log("parent element", parentElement);
        if(data.length === 0) {
            console.log("json file empty");
        } else {
            const alertList = document.createElement("section");
            alertList.setAttribute("class", "alert-list");
            parentElement.appendChild(alertList);
            renderListWithTemplate(alertItem, alertList, data);
        }
    }
}