function catchThemAll(offset) {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
        .then()
        .then(function (data) {

            count = data.count;

            data.results.forEach(buildList);
            var lastChild = document.querySelector(".pokeList li:last-child");

            observer.observe(lastChild);
        });
};