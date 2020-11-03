var offset = 0;
var count;

function catchThemAll(offset) {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var template = document.getElementById("template");
            var ul = document.querySelector(".pokeList");

            count = data.count;

            data.results.forEach(function (result) {
                /* console.log(result.name); */
                var clone = template.content.cloneNode(true);

                clone.querySelector("li").innerText = result.name;
                ul.appendChild(clone);
            });
            var lastChild = document.querySelector(".pokeList li:last-child");

            observer.observe(lastChild);
        });
};

function catchAllTheImages(offset) {
    fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${offset}.png`)
}
/* getThePokemons(0);
getThePokemons(10);
getThePokemons(20); */

// Så tilføjer vi en intersection observer
var observer = new IntersectionObserver(function (entries) {
    if (entries[0].intersectionRatio <= 0) return;
    observer.unobserve(entries[0].target)
    /*  console.log(entries[0]); */
    offset = offset + 10;

    if (offset > count) return;

    catchThemAll(offset)
}, {
    threshold: 1
});


catchThemAll(offset);