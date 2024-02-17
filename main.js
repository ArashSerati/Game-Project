const BASE_URL = `https://rawg.io`;
const API_KEY = `6300f309a29a49b29e4b7933fb23fc75`;
const GAMES_API = `${BASE_URL}/api/games?key=${API_KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7`;
const root = document.getElementById("root");

(async function handlegames() {
    let data = await fetch(GAMES_API);
    let result = await data.json();
    console.log(result);
    result.results.forEach(element => {
        let name = element.name;
        let div = document.createElement("div");
        div.className = "col-9 col-sm-6 col-md-4 my-3";
        div.innerHTML = 
            `<div class="card card-h bg-info-subtle">
             <div class="card-body shadow">
             <img src="${element.background_image}" class="card-img-top img-fluid ax">
             <h5 class="card-title text-danger">${name}</h5>
             <p class="${element.slug}</p>
             </div>
             <ul class="list-group list-group-flush">
             ${
                element.platforms.map(item => `<li class="list-group-item list-unstyled">${item.platform.name}</li>`)
             }
             </ul>
             <div class="card-body">
             <a href="#" className="card-link">Card link</a>
             <a href="#" className="card-link">Another link</a>
             </div>
             </div>`;
             root.appendChild(div);
    });
})();
  