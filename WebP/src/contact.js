function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");
    
    
    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "📞 123 456 789"


    const address = document.createElement('p');
    address.textContent = "🏠 Hollywood Boulevard 42, Los Angeles, USA"


    const restrauntLocation = document.createElement("img");
    restaurantLocation.src = 'images/restaurant-location.png';
    restaurantLocation.alt = 'Mozzafiato restaurant location';

    contact.appendChild(phoneNumber)
    contact.appendChild(address)
    contact.appendChild(restrauntLocation)
    

    return contact;
}

function loadContact() {
    const main = document.createElement("main");
    main.textContent = ""
    main.appendChild(createContact())
}

export default loadContact
