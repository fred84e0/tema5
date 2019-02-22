let navSlide = () => {

    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.nav_links');
    let navLinks = document.querySelectorAll('.nav_links li');

    //toggle Nav

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav_active');

    });

    console.log("Burgerslide");


}

navSlide();



document.addEventListener("DOMContentLoaded", hentJson);

let mineRetter;
let filter = "alle";
let dest = document.querySelector("#liste");

async function hentJson() {
    const myJson = await fetch("https://mandalskeawebspace.dk/claude_php/clean_up_spreadsheet.php?id=1FcGbuiRqsZQez5wt-gbncR8ocx-s0l-p-CTqDFN5Xmg");
    console.log(myJson);

    mineRetter = await myJson.json();
    console.log(mineRetter);

    start();
}

function start() {

    dest.innerHTML = "";
    mineRetter.forEach(ret => {

        if (filter == "alle" || filter == ret.kategori) {
            let template = ` <div class="kasse"> <div class="tekst"> <h2>${ret.navn}</h2> <p>${ret.kort}</p>  <h3> Pris ${ret.pris}.-</h3></div> <div class="madpic"> <img src="italien/${ret.billede}" </div> </div>`;


            dest.insertAdjacentHTML("beforeend", template);
            dest.lastElementChild.addEventListener("click", () => {
                visSingle(ret);
            });
        }
    });

}


document.querySelectorAll(".filter").forEach(elm => {
    elm.addEventListener("click", filtering);
});


function filtering() {
    filter = this.getAttribute("data-hold");
    document.querySelector("h1").textContent = this.textContent;
    document.querySelectorAll(".filter").forEach(elm => {
        elm.classList.remove("valgt");
    });
    this.classList.add("valgt");
    start();
}

function visSingle(ret) {
    document.querySelector("#indhold").innerHTML = `<article class="ret"> <h2>${ret.navn}</h2> <h3> Pris ${ret.pris}.-</h3> <img class="billede" src="italien/${ret.billede}" alt="${ret.navn}"><p>${ret.lang}</p> </article>`;

    document.querySelector("#popup").style.display = "block";
    document.querySelector("#popup #luk").addEventListener("click", close);
}

function close() {
    document.querySelector("#popup").style.display = "none";
}
