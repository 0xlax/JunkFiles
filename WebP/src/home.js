function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const chefImage = document.createElement("img");
    chefImage.src = "images/chef.png";
    chefImage.alt = "Chef";

    home.appendChild(createParagraph("Best Pizza in your Country"));
    home.appendChild(createParagraph("Made with passion"));
    home.appendChild(chefImage);
    home.appendChild(createParagraph("Order online or Visit us"));
    
    return home;
}

function createParagrah(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome);
}

export default loadHome;