document.addEventListener("DOMContentLoaded", function () {
    const partnersData = [
        { src: "images/partners/partner-bustour.png", alt: "Partner Bus Tours" },
        { src: "images/partners/partner-cabinrental.png", alt: "Partner Cabin Rental" },
        { src: "images/partners/partner-campingadv.png", alt: "Partner Camping Adventure" },
        { src: "images/partners/partner-collegetours.png", alt: "Partner College Tours" },
        { src: "images/partners/partner-rentalbike.png", alt: "Partner Bike Rentals" },
        { src: "images/partners/partner-tourgroup.png", alt: "Partner Tour Group" }
    ];

    const partnersSection = document.createElement('section');
    partnersSection.id = "partners";
    const partnersList = document.createElement('ul');
    partnersList.id = "partners";

    partnersData.forEach(partner => {
        const partnerItem = document.createElement('li');
        partnerItem.className = 'partner';
        const partnerImg = document.createElement('img');
        partnerImg.src = partner.src;
        partnerImg.alt = partner.alt;
        partnerItem.appendChild(partnerImg);
        partnersList.appendChild(partnerItem);
    });

    partnersSection.appendChild(partnersList);
    document.querySelector('main').appendChild(partnersSection);
});
