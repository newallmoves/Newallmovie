const movies=[
{name:"The Silent Horizon",year:2026,genre:"Thriller",rating:"8.4",type:"Movie",desc:"A fictional thriller demo title. Replace this with content you are legally authorized to publish.",watch:"https://www.youtube.com/"},
{name:"City Lights Again",year:2025,genre:"Drama",rating:"8.1",type:"Movie",desc:"A fictional drama demo title for the template.",watch:"https://www.youtube.com/"},
{name:"Rocket Kids",year:2026,genre:"Animation",rating:"8.7",type:"Movie",desc:"A fictional family animation demo title.",watch:"https://www.youtube.com/"},
{name:"Laugh Track",year:2025,genre:"Comedy",rating:"7.9",type:"Movie",desc:"A fictional comedy demo title.",watch:"https://www.youtube.com/"},
{name:"Final Mission",year:2026,genre:"Action",rating:"8.2",type:"Movie",desc:"A fictional action demo title.",watch:"https://www.youtube.com/"},
{name:"Dark Evidence",year:2025,genre:"Thriller",rating:"8.0",type:"Movie",desc:"A fictional mystery/thriller demo title.",watch:"https://www.youtube.com/"}
];
const series=[
{name:"Beyond Tomorrow",year:2026,genre:"Drama",rating:"8.5",type:"Series",desc:"A fictional web-series demo title.",watch:"https://www.youtube.com/"},
{name:"Code Zero",year:2025,genre:"Action",rating:"8.3",type:"Series",desc:"A fictional series demo title.",watch:"https://www.youtube.com/"}
];
let current=[...movies];
function card(x){return `<article class="card" onclick='openModal(${JSON.stringify(x)})'><div class="poster">${x.name}</div><div class="info"><div class="title">${x.name}</div><div class="meta">${x.year} • ${x.genre} • ⭐ ${x.rating}</div></div></article>`}
function render(list,target){document.getElementById(target).innerHTML=list.map(card).join("")}
function renderAll(){render(current,"movieGrid");render(series,"seriesGrid");document.getElementById("count").textContent=current.length+" titles"}
function searchMovies(){const q=document.getElementById("searchInput").value.toLowerCase().trim();current=movies.filter(x=>[x.name,x.genre,x.year,x.type].join(" ").toLowerCase().includes(q));renderAll()}
function filterCategory(cat){current=cat==="All"?[...movies]:movies.filter(x=>x.genre===cat);document.getElementById("searchInput").value="";renderAll();location.hash="movies"}
function openModal(x){document.getElementById("modalContent").innerHTML=`<h2>${x.name}</h2><p class="meta">${x.year} • ${x.genre} • ⭐ ${x.rating}</p><p>${x.desc}</p><a class="watch" href="${x.watch}" target="_blank" rel="noopener">▶ Watch Official / Trailer</a>`;document.getElementById("modal").classList.add("show")}
function closeModal(){document.getElementById("modal").classList.remove("show")}
function toggleNav(){document.querySelector("nav").style.display=document.querySelector("nav").style.display==="flex"?"none":"flex"}
window.onclick=e=>{if(e.target.id==="modal")closeModal()}
renderAll();