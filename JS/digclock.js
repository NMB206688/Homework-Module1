function getTimeZone(adjTimeDiff) {
    const timeZones = {
        0: 'GMT',
        1: 'CET',
        2: 'EET',
        3: 'MSK',
        4: 'GST',
        5: 'PKT',
        6: 'BST',
        7: 'THA',
        8: 'CST',
        9: 'JST',
        10: 'AEST',
        11: 'SBT',
        12: 'NZST',
        13: 'CVT',
        14: 'GST',
        15: 'ART',
        16: 'AST',
        17: 'EST',
        18: 'CST',
        19: 'MST',
        20: 'PST',
        21: 'AKST',
        22: 'HST',
        23: 'SST',
        24: 'BIT'

    };
    return timeZones[adjTimeDiff] || 'Unknown';
}

function CurrentTime() {
    // Declare variables
    var d = new Date(); //Get Current Date
    var hr = d.getHours(); //Get Current Hours
    var min = d.getMinutes(); //Get Current Minutes
    var sec = d.getSeconds(); //Get Current seconds
    var ampm; //Declare Empty variable to store AM or PM
    var utchr = d.getUTCHours();
    var timeDiff = hr - utchr;
    //convert time difference to positive if negitive
    var adjTimeDiff = timeDiff;  // Adjust for negitive deifference
    if (timeDiff < 0){
        adjTimeDiff = timeDiff + 24 ;
    }


    var timeZone = getTimeZone(timeDiff); // Determine time Zone
    

    //Add 0to single digits for seconds
    if (sec < 10){
        sec = "0" + sec;
    }
    //Add 0 to single digits for minutes
    if(min <10){
        min = "0" + min;
    }

    //Determine Am or PM
    if(hr == 12){
        ampm = "PM"; // set to PM
    }else if (hr > 12) {
        hr -= 12; // Deduct 12 from hours greater than 12(miltary time)
        ampm = "PM"; //Set to PM
    }else {
        ampm = "AM"; // set to AM
    }

    // Adjust Hour for 12Am Case
    if(hr == 0){
        hr = 12; // set hour to 12 for 12Am case
    }

    // Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

    //Display current local time and time  zone on HTML Elements
    document.getElementById("clock").innerText = time; // addding time           
}
// Initial run of time data function.
CurrentTime();
//Runtime data function every 1 Second
setInterval(CurrentTime, 1000); // setting timer
