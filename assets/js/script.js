// elements
const tableEvents = document.getElementById("tableEvents");
const loading = document.getElementById("loading");

// Web API
const apiUrl =
"";

// get data
fetch(`${apiUrl}?request=events`)
.then((res) => {
  return res.json();
})
.then((data) => {
  data.body.data.forEach((e) => {
      const row = tableEvents.querySelector(".skeleton .row").cloneNode(true);
      const time = e.updateTime;
      const type = e.eventType;
      const userName = e.displayName;
      const msg = e.message;

      row.querySelector(".time").textContent = time;
      row.querySelector(".type").textContent = type;
      row.setAttribute("data-type", type);
      row.querySelector(".userName").textContent = userName;
      row.querySelector(".msg").textContent = msg;

      tableEvents.appendChild(row);
    });
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    loading.classList.add("is-hide");
  });

// filter
const filter = document.getElementById("filter");
filter.addEventListener("change", (e) => {
  const type = e.target.value;
  console.log(type);
  const rows = tableEvents.querySelectorAll(".row");
  rows.forEach((row) => {
    if (type === "all" || row.getAttribute("data-type") === type || row.classList.contains("header")) {
      row.classList.remove("is-hide");
    } else {
      row.classList.add("is-hide");
    }
  });
})
