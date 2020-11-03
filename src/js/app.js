var offset = 0;

function getThePokemons(offset) {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var template = document.getElementById("template");
            var ul = document.querySelector(".pokeList");

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

/* getThePokemons(0);
getThePokemons(10);
getThePokemons(20); */

// Så tilføjer vi en intersection observer
var observer = new IntersectionObserver(function (entries) {
    /*  console.log(entries[0]); */
    offset = offset + 10;
    getThePokemons(offset)
}, {
    threshold: 1
});


getThePokemons(offset);