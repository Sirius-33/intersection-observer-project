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

                var img = clone.querySelector(".pokeImg");

                name.innerText = result.name;


                getImage(result.url)
                    .then(function (imageURL) {
                        img.dataset.src = imageURL;
                        imageObserver.observe(img);
                    })

                ul.appendChild(clone);
            });
            var lastChild = document.querySelector(".pokeList li:last-child");

            observer.observe(lastChild);
        });
};

// Så tilføjer vi en intersection observer

catchThemAll(offset);