async function init() {
  let json = await fetch("db.json").then((res) => res.json());

  document.querySelector("#cards").innerHTML = "";
  json.forEach((element) => {
    document.querySelector("#cards").innerHTML += `
    <div class="card mb-3" style="width: 25%; cursor: pointer">
      <a href='${element.link}'>
        <div class="card-body">
          <div class="card mb-3" href="${element.image}">
            <img src="${element.image}"/>
          </div>
        </div>
        <div class="card-footer text-muted">
          <h4 class="card-title">${element.name}</h4>
            <h6 class="card-subtitle mb-2 text-muted">${element.description}</h6>
        </div>
      </a>
    </div>

    `;
  });
}
init();
