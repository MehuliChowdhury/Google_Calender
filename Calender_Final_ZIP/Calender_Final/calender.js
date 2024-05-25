let data = [];

/*Create Operation */
function addItem() {
  const name = document.getElementById("name").value;
  const summary = document.getElementById("summary").value;
  const organizer = document.getElementById("organizer").value;
  const time = document.getElementById("time").value;

  if (name && summary && organizer && time) {
    const newItem = {
      id: data.length + 1,
      name,
      summary,
      organizer,
      time,
    };

    data.push(newItem);
    renderTable();
    clearForm();
    // console.log(data);
  } else {
    alert("Please fill in all fields.");
  }
}

/*Read Operation */
function renderTable() {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.summary}</td>
      <td>${item.organizer}</td>
      <td>${item.time}</td>
      <td>
        <button onclick="editItem(${item.id})">Edit</button>
        <button onclick="deleteItem(${item.id})">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}


function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("summary").value = "";
  document.getElementById("organizer").value = "";
  document.getElementById("time").value = "";
}

/*Update Operation */
function editItem(id) {
  const selectedItem = data.find((item) => item.id === id);
  if (selectedItem) {
    document.getElementById("name").value = selectedItem.name;
    document.getElementById("summary").value = selectedItem.summary;
    document.getElementById("organizer").value = selectedItem.organizer;
    document.getElementById("time").value = selectedItem.time;
    const formContainer = document.getElementById("form-container");
    const addButton = formContainer.querySelector("button");
    addButton.textContent = "Save";
    addButton.onclick = () => saveEdit(id);
  }
}

/*Delete Operation */
function saveEdit(id) {
  const name = document.getElementById("name").value;
  const summary = document.getElementById("summary").value;
  const organizer = document.getElementById("organizer").value;
  const time = document.getElementById("time").value;

  if (name && summary && organizer && time) {
    const selectedItem = data.find((item) => item.id === id);
    if (selectedItem) {
      selectedItem.name = name;
      selectedItem.summary = summary;
      selectedItem.organizer = organizer;
      selectedItem.time = time;
      renderTable();
      clearForm();
      const formContainer = document.getElementById("form-container");
      const addButton = formContainer.querySelector("button");
      addButton.textContent = "Add";
      addButton.onclick = addItem;
    }
  } else {
    alert("Please fill in all fields.");
  }
}

function deleteItem(id) {
  const index = data.findIndex((item) => item.id === id);
  if (index !== -1) {
    data.splice(index, 1);
    renderTable();
  }
}