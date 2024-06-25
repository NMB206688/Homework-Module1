$(document).ready(function() {
    let selectedActivities = [];

    $('.selectable').click(function() {
        var selectedActivity = $(this).text();
        var index = selectedActivities.indexOf(selectedActivity);

        if (index === -1) {
            // Activity is not in the list, so add it
            selectedActivities.push(selectedActivity);
        } else {
            // Activity is already in the list, so remove it
            selectedActivities.splice(index, 1);
        }

        updateModal();
    });

    $('#backToActivities').click(function() {
        $('#activityModal').modal('hide');
    });

    function updateModal() {
        let resultHtml = '';
        selectedActivities.forEach(activity => {
            resultHtml += '<p><strong>' + activity + '</strong></p>';
        });
        $('#result').html(resultHtml);
        $('#activityModal').modal('show');
    }
});
