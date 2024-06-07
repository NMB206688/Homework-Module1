$(document).ready(function() { // Ensure the script runs only after the document is fully loaded
    // Add hover effect to change cursor to hand for selectable cells
    $('.selectable').hover(
        function() { // Function to run when the mouse enters the element
            $(this).css('cursor', 'pointer'); // Change the cursor to a pointer (hand)
        }, 
        function() { // Function to run when the mouse leaves the element
            $(this).css('cursor', 'default'); // Change the cursor back to default
        }
    );

    
});
