// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {

    // Array of partner data, each object contains the image source and alt text
    const partnersData = [
        { src: "images/partners/partner-bustour.png", alt: "Partner Bus Tours" },
        { src: "images/partners/partner-cabinrental.png", alt: "Partner Cabin Rental" },
        { src: "images/partners/partner-campingadv.png", alt: "Partner Camping Adventure" },
        { src: "images/partners/partner-collegetours.png", alt: "Partner College Tours" },
        { src: "images/partners/partner-rentalbike.png", alt: "Partner Bike Rentals" },
        { src: "images/partners/partner-tourgroup.png", alt: "Partner Tour Group" }
    ];

    // Create a new <section> element for the partners section
    const partnersSection = document.createElement('section');
    partnersSection.id = "partners"; // Set the ID to "partners" to match the CSS

    // Create a new <ul> element to hold the partner items
    const partnersList = document.createElement('ul');
    partnersList.id = "partners"; // Set the ID to "partners" to match the CSS

    // Iterate over the partnersData array to create individual partner items
    partnersData.forEach(partner => {
        // Create a new <li> element for each partner
        const partnerItem = document.createElement('li');
        partnerItem.className = 'partner'; // Add the class "partner" to match the CSS

        // Create a new <img> element for the partner's logo
        const partnerImg = document.createElement('img');
        partnerImg.src = partner.src; // Set the image source
        partnerImg.alt = partner.alt; // Set the alt text for accessibility

        // Append the <img> element to the <li> element
        partnerItem.appendChild(partnerImg);
        // Append the <li> element to the <ul> element
        partnersList.appendChild(partnerItem);
    });

    // Append the <ul> element to the <section> element
    partnersSection.appendChild(partnersList);
    // Append the <section> element to the <main> element in the document
    document.querySelector('main').appendChild(partnersSection);
});
