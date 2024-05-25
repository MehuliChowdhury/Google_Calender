var data = [];
let body = {
  summary: "Event summary",
  location: "Event location details",
  description: "Event description",
  start: {
    dateTime: "2024-05-15T21:00:00+05:30",
    timeZone: "IST",
  },
  end: {
    dateTime: "2024-05-15T21:30:00+05:30",
    timeZone: "IST",
  },
  recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
  sendNotifications: true,
  attendees: [
    {
      email: "hello@example.com",
    },
    {
      email: "sales@example.com",
    },
  ],
};
fetchEvents();

/* Create Operation */
 function addItem() {
  const summary = document.getElementById("summary").value;
  const description = document.getElementById("description").value;
  const location = document.getElementById("location").value;
  const startTime = document.getElementById("startTime").value;
  const endTime = document.getElementById("endTime").value;

  /* name, country and salary must be present - then allow to entry */

  if (summary && description && location && startTime && endTime) {
    /* Step 1: Add event data in google calendar*/

    body.summary = summary;
    body.description = description;
    body.location = location;
    body.start.dateTime = startTime + ":00+05:30";
    body.end.dateTime = endTime + ":00+05:30";

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "post",
      headers: myHeaders,
      redirect: "follow",
      body: JSON.stringify(body),
    };

    fetch(
      "https://v1.nocodeapi.com/amitabha27/calendar/dzmbGYduivUaKWux/event",
      requestOptions
    )
      .then((response) => response.text())
      .then((data) => console.log(data)) // result>data
      .catch((error) => console.log("error", error));

    /* Step 2: Fetch updated data*/
     fetchEvents();
    clearForm();
  } else {
    /* if anyone of name, country and salary is missing - then don't allow to entry */
    alert("Please fill in all fields.");
  }
}

function fetchEvents() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  //Fetch data from API
  fetch(
    "https://v1.nocodeapi.com/amitabha27/calendar/dzmbGYduivUaKWux/listEvents",
    requestOptions
  )
    .then((response) => response.json())
    .then((d) => {
      /*Extracted data is availabe=le in the data variable*/
      console.log(d);

      data = d;
      /* Display data on the webpage*/
      const tableBody = document.getElementById("table-body");
      tableBody.innerHTML = "";

      d.items.forEach((item) => {
        const row = document.createElement("tr"); // <tr>innerHTML</tr>
        row.innerHTML = `
                <td>${item.id.split('_')[0]}</td>
                <td>${item.summary}</td>
                <td>${item.description}</td>
                <td>${item.location}</td>
                <td>${item.start.dateTime}</td>
                <td>${item.end.dateTime}</td>
                <td>
                <button onclick="editItem('${item.id}')">Edit</button>
                <button onclick="deleteItem('${item.id}')">Delete</button>
                </td>
            `;
        // <tr> <td></td> <td></td> <td></td> <td></td> </tr>

        tableBody.appendChild(row);
      });
    })

    .catch((error) => console.log("error", error));
}

/* Read Operation */

// function renderTable() {
//   const tableBody = document.getElementById("table-body");
//   tableBody.innerHTML = "";

//   data.forEach((item) => {
//     //changes done like id,summary....
//     const row = document.createElement("tr"); // <tr>innerHTML</tr>
//     row.innerHTML = `
//         <td>${item.id}</td>
//         <td>${item.summary}</td>
//         <td>${item.description}</td>
//         <td>${item.location}</td>
//         <td>${item.start.dateTime}</td>
//         <td>${item.end.dateTime}</td>
//         <td>
//         <button onclick="editItem('${item.id}')">Edit</button>
//         <button onclick="deleteItem('${item.id}')">Delete</button>
//         </td>
//     `;
//     // <tr> <td></td> <td></td> <td></td> <td></td> </tr>

//     tableBody.appendChild(row);
//   });
// }

function clearForm() {
  document.getElementById("id").value = "";
  document.getElementById("summary").value = "";
  document.getElementById("description").value = "";
  document.getElementById("location").value = "";
  document.getElementById("startTime").value = "";
  document.getElementById("endTime").value = "";
}

/* Update Operation */
function editItem(id) {
  // Fetch that data where item id (Passed in Edit Button) is matched with Data Array (id value).

  const selectedItem = data.items.find((item) => item.id === id); //d.items.find???

  if (selectedItem) {
    document.getElementById("id").value = selectedItem.id;
    document.getElementById("summary").value = selectedItem.summary;
    document.getElementById("description").value = selectedItem.description;
    document.getElementById("location").value = selectedItem.location;
    document.getElementById("startTime").value =
      selectedItem.start.dateTime.slice(0, 16);
    document.getElementById("endTime").value = selectedItem.end.dateTime.slice(
      0,
      16
    );
    const formContainer = document.getElementById("form-container");
    const addButton = formContainer.querySelector("button");
    addButton.textContent = "Save";
    addButton.onclick = () => saveEdit(id);
  }
}

function saveEdit(id) {
  const eventIdentity = document.getElementById("id").value.split('_')[0];
  const summary = document.getElementById("summary").value;
  const description = document.getElementById("description").value;
  const location = document.getElementById("location").value;
  const startTime = document.getElementById("startTime").value;
  const endTime = document.getElementById("endTime").value;

  if (summary && description && location && startTime && endTime) {
    body.summary = summary;
    body.description = description;
    body.location = location;
    body.start.dateTime = startTime + ":00+05:30";
    body.end.dateTime = endTime + ":00+05:30";
    //Call API with body and id
    console.log(body);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "put",
      headers: myHeaders,
      redirect: "follow",
      body: JSON.stringify(body),
    };

    fetch(
      "https://v1.nocodeapi.com/amitabha27/calendar/dzmbGYduivUaKWux/event?eventId=" +
        eventIdentity,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

     fetchEvents();
  } else {
    alert("Please fill in all fields.");
  }
}

/* Delete Operation */
 function deleteItem(id) {
  // const index = data.findIndex(item => item.id === id);
  // if (index !== -1) {
  //     data.splice(index, 1);
  //     renderTable();//fetchevent?
  // }

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "delete",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("https://v1.nocodeapi.com/amitabha27/calendar/dzmbGYduivUaKWux/event?eventId=" + id, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  alert("Event delete successfully");
  fetchEvents();
}
