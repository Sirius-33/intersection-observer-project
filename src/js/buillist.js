function buildList(result) {
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
}