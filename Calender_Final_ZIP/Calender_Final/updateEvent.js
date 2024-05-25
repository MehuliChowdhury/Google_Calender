var eventId = "3tauf3bccntkn30iq76e5g92f5";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
  method: "put",
  headers: myHeaders,
  redirect: "follow",
  body: JSON.stringify({
    summary: "Event summary",
    location: "Event location details",
    description: "Event description",
    start: { dateTime: "2021-02-21T21:00:00+05:30", timeZone: "IST" },
    end: { dateTime: "2021-02-21T21:30:00+05:30", timeZone: "IST" },
    recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
    sendNotifications: true,
    attendees: [{ email: "hello@example.com" }, { email: "sales@example.com" }],
  }),
};

fetch(
  "https://v1.nocodeapi.com/amitabha27/calendar/dzmbGYduivUaKWux/event?eventId" +
    eventId,
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));






var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
  method: "put",
  headers: myHeaders,
  redirect: "follow",
  body: JSON.stringify(
   
    {"summary":"Java Full Stack2","location":"undefined","description":"undefined","start":{"dateTime":"2024-05-21T20:00:00+05:30","timeZone":"IST"},"end":{"dateTime":"2024-05-15T21:30:00+05:30","timeZone":"IST"},"recurrence":["RRULE:FREQ=DAILY;COUNT=2"],"sendNotifications":true,"attendees":[{"email":"hello@example.com"},{"email":"sales@example.com"}]}
  ),
};

fetch(
  "https://v1.nocodeapi.com/amitabha27/calendar/dzmbGYduivUaKWux/event?eventId=3tauf3bccntkn30iq76e5g92f5",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));




  {
    "summary": "Event summary",
    "location": "Event location details",
    "description": "Event description",
    "start": {
      "dateTime": "2021-02-21T21:00:00+05:30",
      "timeZone": "IST"
    },
    "end": {
      "dateTime": "2021-02-21T21:30:00+05:30",
      "timeZone": "IST"
    },
    "recurrence": [
      "RRULE:FREQ=DAILY;COUNT=2"
    ],
    "sendNotifications": true,
    "attendees": [
      {
        "email": "hello@example.com"
      },
      {
        "email": "sales@example.com"
      }
    ]
  }
