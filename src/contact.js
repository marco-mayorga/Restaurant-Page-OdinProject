const renderContactPage = (() => {
    const contentContainer = document.querySelector("body");

    const contactUs = document.createElement("div");

    contactUs.setAttribute("id", "contact-us");
    contactUs.setAttribute("class", "");
    contactUs.setAttribute("data-tab-content", "");

    contactUs.innerHTML = `
    <h1>Contact Us</h1>
    <div id="contact-info">
        <div id="location-container" class="contact-info-container">
            <h2>We are located at:</h2>
            <p>563 random Adress St New York, NY, 10001</p>
        </div>
        <div
            id="hours-open-container"
            class="contact-info-container">
            <h2>Hours Open:</h2>
            <p>Mon-Thu: 7:00 AM - 11:00 PM</p>
            <p>Fri-Sun: 6:00 Am - 1:00 Am</p>
        </div>
        <div id="email-container" class="contact-info-container">
            <h2>Email:</h2>
            <a href="mailto: email@email.com"> email@email.com</a>
        </div>
        <div
            id="phone-number-container"
            class="contact-info-container">
            <h2>Phone Number:</h2>
            <a href="tel:5555555555"> 555-555-5555</a>
        </div>
    </div>`;
    contentContainer.appendChild(contactUs);
})();

export { renderContactPage };
