
import {createHeading} from '../components.js';

// All contact options
const contactOptions = {
    Phone: '408-991-3934',
    Email: 'ghiblidelights@gmail.com',
    Address: '1730 Fox Drive, San Jose, California, 95131'
}

// Create a contact div for each method of contact
// Debate whether to turn into a class
function createContactOption(contactMethod, contact) {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact');

    const h2 = document.createElement('h2');
    h2.innerText = contactMethod;
    contactContainer.append(h2)

    const description = document.createElement('p');
    description.innerText = contact;
    contactContainer.append(description);

    return contactContainer;
}
// Render contact page
function renderContact() {
    createHeading('Contact Us');
    const main = document.querySelector("main");
    Object.entries(contactOptions).forEach(([contactMethod, contact]) => {
        main.append(createContactOption(contactMethod, contact));
        console.log(contactMethod, contact)
    })
}

export default renderContact;