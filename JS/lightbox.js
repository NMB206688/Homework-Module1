$(document).ready(function() {

    // Function to handle the opening of the lightbox when an image is clicked
    $('.lightbox-toggle').click(function() {
        // Show the backdrop with a fade-in animation
        $('.backdrop').animate({'opacity': '.50'}, 300, 'linear').css('display', 'block');
        
        // Show the lightbox with the image
        $('.box').fadeIn();

        // Check if the lightbox already contains an image
        if ($('.box').contents('img')) {
            // If it does, remove the existing image
            $('.box').contents().remove('img');
        }

        // Get the alt attribute value of the clicked image
        var $altvalue = $(this).attr('alt');

        // Clone the clicked image to insert it into the lightbox
        var img = $(this).clone();

        // Append the cloned image to the lightbox
        $('.box').append(img);
    });

    // Function to handle the closing of the lightbox
    $('.close, .backdrop').click(function() {
        // Hide the backdrop with a fade-out animation
        $('.backdrop').animate({'opacity': '0'}, 300, 'linear', function() {
            // Set the display of the backdrop to none after the animation
            $('.backdrop').css('display', 'none');
        });

        // Hide the lightbox
        $('.box').fadeOut();
    });
});
