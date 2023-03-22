const pageLoad = (() => {
    const contentContainer = document.querySelector("body");
    const nav = document.createElement("nav");

    nav.innerHTML = `
            <ul class="tabs">
                <div id="name-of-store" class="tab">Taco Shack</div>
                <img
                    id="logo"
                    src="./dest/tacoFullSize.png"
                    alt="Taco Logo" />
                <li data-tab-target="#home" id="home-button" class="active tab">
                    Home
                </li>
                <li data-tab-target="#menu" class="tab">Menu</li>
                <li data-tab-target="#contact-us" class="tab">Contact Us</li>
            </ul>
    `;
    contentContainer.appendChild(nav);
})();

export { pageLoad };
