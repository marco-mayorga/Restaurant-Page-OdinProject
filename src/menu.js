const renderMenuPage = (() => {
    const contentContainer = document.querySelector("body");
    const menu = document.createElement("div");

    menu.setAttribute("id", "menu");
    menu.setAttribute("class", "");
    menu.setAttribute("data-tab-content", "");

    menu.innerHTML = `
    <h1>Menu</h1>
    <div class="cards">
        <div class="card">
            <img
                src="./dest/taco1.jpg"
                alt="menu-item"
                width="240"
                height="180" />
            <div class="card-info">
                <h4><b>#1 Taco - 5.99</b></h4>
                <p>1 Taco and a drink.</p>
            </div>
        </div>
        <div class="card">
            <img
                src="./dest/taco2.jpg"
                alt="menu-item"
                width="240"
                height="180" />
            <div class="card-info">
                <h4><b>#2 Tacos - $9.99</b></h4>
                <p>2 Tacos a side of rice and a drink.</p>
            </div>
        </div>
        <div class="card">
            <img
                src="./dest/taco3.jpg"
                alt="menu-item"
                width="240"
                height="180" />
            <div class="card-info">
                <h4><b>#3 Tacos - $12.99</b></h4>
                <p>3 Tacos a side of rice and a drink.</p>
            </div>
        </div>
        <div class="card">
            <img
                src="./dest/taco4.jpg"
                alt="menu-item"
                width="240"
                height="180" />
            <div class="card-info">
                <h4><b>#4 Tacos - $14.99</b></h4>
                <p>4 Tacos a side of rice and a drink.</p>
            </div>
        </div>
        <div class="card">
            <img
                src="./dest/taco5.jpg"
                alt="menu-item"
                width="240"
                height="180" />
            <div class="card-info">
                <h4><b>#5 Tacos - $16.99</b></h4>
                <p>5 Tacos a side of rice and a drink.</p>
            </div>
        </div>
        <div class="card">
            <img
                src="./dest/taco6.jpg"
                alt="menu-item"
                width="240"
                height="180" />
            <div class="card-info">
                <h4><b>#6 Tacos - $18.99</b></h4>
                <p>6 Tacos a side of rice and a drink.</p>
            </div>
        </div>
    </div>`;

    contentContainer.appendChild(menu);
})();

export { renderMenuPage };
