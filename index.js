async function init() {
  let json = await fetch("db.json").then((res) => res.json());

  document.querySelector("#cards").innerHTML = "";
  json.forEach((element) => {
    document.querySelector("#cards").innerHTML += `
    <div class="card mb-3" style="width: 25%; cursor: pointer">
    <a href='${element.link}' class="m-0 w-100 h-100">
  <div class="card-body h-75 m-0 w-100">
    <div class="card mb-3 " href="${element.image}">
    <img src="${element.image}"/>
  </div>
  </div>
  <div class="card-footer text-muted h-25 m-0 w-100">
    <h4 class="card-title">${element.name}</h4>
       <h6 class="card-subtitle mb-2 text-muted">${element.description}</h6>
  </div>
  </a>
</div>

    `;
  });
}
init();
