import { pageLoad } from "./pageLoad";
import { renderHomePage } from "./home";
import { renderMenuPage } from "./menu.js";
import { renderContactPage } from "./contact";
import "./styles.css";

const tabBrowsing = (() => {
    const tabs = document.querySelectorAll("[data-tab-target]");
    const tabContents = document.querySelectorAll("[data-tab-content]");
    const placeOrderBtn = document.querySelector("#place-order");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.tabTarget);
            tabContents.forEach((tabContent) => {
                tabContent.classList.remove("active");
            });
            tabs.forEach((tab) => {
                tab.classList.remove("active");
            });
            tab.classList.add("active");
            target.classList.add("active");
        });
    });
    placeOrderBtn.addEventListener("click", () => {
        tabs[1].classList.add("active");
    });
})();
