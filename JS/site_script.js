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
    partnersSection.id = "partners"; // Set the ID for the section
    partnersSection.className = "container"; // Add Bootstrap container class

    // Create a new <div> element to hold the partner items with a row class
    const partnersRow = document.createElement('div');
    partnersRow.className = "row"; // Add Bootstrap row class

    // Iterate over the partnersData array to create individual partner items
    partnersData.forEach(partner => {
        // Create a new <div> element for each partner
        const partnerCol = document.createElement('div');
        partnerCol.className = 'col-6 col-sm-4 col-md-3 col-lg-2 partner-col'; // Add Bootstrap column classes

        // Create a new <img> element for the partner's logo
        const partnerImg = document.createElement('img');
        partnerImg.src = partner.src; // Set the image source
        partnerImg.alt = partner.alt; // Set the alt text for accessibility
        partnerImg.className = "img-fluid"; // Add Bootstrap img-fluid class for responsive images

        // Append the <img> element to the <div> element
        partnerCol.appendChild(partnerImg);
        // Append the <div> element to the <div class="row"> element
        partnersRow.appendChild(partnerCol);
    });

    // Append the <div class="row"> element to the <section> element
    partnersSection.appendChild(partnersRow);
    // Append the <section> element to the <main> element in the document
    document.querySelector('main').appendChild(partnersSection);

    // Function to update the layout based on the screen width
    function updatePartnersLayout() {
        const width = window.innerWidth; // Get the current window width
        const partnerCols = document.querySelectorAll('.partner-col'); // Get all partner column elements

        // Apply different Bootstrap classes based on the screen width
        if (width >= 992) {
            // For screens 992px and above, use the original design
            partnerCols.forEach(col => {
                col.className = 'col-6 col-sm-4 col-md-3 col-lg-2 partner-col';
            });
        } else if (width >= 576) {
            // For screens between 576px and 991px, use 3 columns and 2 rows
            partnerCols.forEach(col => {
                col.className = 'col-6 col-sm-6 col-md-4 partner-col';
            });
        } else {
            // For screens below 576px, use 1 column layout
            partnerCols.forEach(col => {
                col.className = 'col-12 partner-col'; // Single column layout
            });
        }
    }

    // Add an event listener to update the layout on window resize
    window.addEventListener('resize', updatePartnersLayout);
    // Initial call to set the layout based on the initial screen size
    updatePartnersLayout();
});
