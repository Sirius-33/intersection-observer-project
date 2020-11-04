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