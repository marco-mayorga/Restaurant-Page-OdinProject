const renderHomePage = (() => {
    const contentContainer = document.querySelector("body");
    const home = document.createElement("div");

    home.setAttribute("id", "home");
    home.setAttribute("class", "active");
    home.setAttribute("data-tab-content", "");
    home.innerHTML = `
                <h1>Fresh tortillas made every day!</h1>
                <p>Number 1 Mexican Restaurant In NY 12 Years Running.</p>
                <button
                    id="place-order"
                    data-tab-target="#menu"
                    class="place-order">
                    Place Order
                </button>
    `;
    contentContainer.appendChild(home);
})();

export { renderHomePage };
