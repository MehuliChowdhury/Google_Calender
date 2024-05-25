var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
    method: "post",
    headers: myHeaders,
    redirect: "follow",
    body: JSON.stringify(body)
};

fetch("https://v1.nocodeapi.com/amitabha/calendar/IywijwMOgqDNwSIh/event", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    //{"summary":"Event summary","location":"Event location details","description":"Event description","start":{"dateTime":"2021-02-21T21:00:00+05:30","timeZone":"IST"},"end":{"dateTime":"2021-02-21T21:30:00+05:30","timeZone":"IST"},"recurrence":["RRULE:FREQ=DAILY;COUNT=2"],"sendNotifications":true,"attendees":[{"email":"hello@example.com"},{"email":"sales@example.com"}]}