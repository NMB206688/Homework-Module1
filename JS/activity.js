$(document).ready(function() {
    // Function to update the display box visibility and content
    function updateDisplayBox() {
        var selectedActivities = $('.highlighted');
        var displayBox = $('#displaySelected');
        var resultBox = $('#result');
        
        // Clear the current list in the display box
        resultBox.empty();
        
        // Check if there are any selected activities
        if (selectedActivities.length > 0) {
            // Show the display box
            displayBox.css('visibility', 'visible');
            
            // Add a header to the display box
            resultBox.append('<h4>My Selected activities to enquire:</h4>');
            
            // Loop through each selected activity and add it to the display box
            selectedActivities.each(function() {
                var activityName = $(this).text();
                var columnIndex = $(this).index();
                var cliffSite = $('table thead th').eq(columnIndex).text();
                resultBox.append('<p>' + activityName + ' - at ' + cliffSite + '</p>');
            });
        } else {
            // Hide the display box if no activities are selected
            displayBox.css('visibility', 'hidden');
        }
    }

    // Add hover effect to change cursor to hand for selectable cells
    $('.selectable').hover(
        function() { // Function to run when the mouse enters the element
            $(this).css('cursor', 'pointer'); // Change the cursor to a pointer (hand)
        }, 
        function() { // Function to run when the mouse leaves the element
            $(this).css('cursor', 'default'); // Change the cursor back to default
        }
    );

    // Event handler for selecting/deselecting activities
    $('.selectable').click(function() {
        // Toggle the highlighted class on the clicked element
        $(this).toggleClass('highlighted');
        
        // Update the display box based on the current selection
        updateDisplayBox();
    });

    // Initialize the display box as hidden
    $('#displaySelected').css('visibility', 'hidden');
});
