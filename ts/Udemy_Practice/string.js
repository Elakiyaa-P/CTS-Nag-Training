var Movie = {
    title: "O My Kadavule",
    releaseYear: 2020,
    rating: 4.9,
    director: "GVM"
};
showProperties(Movie);
function showProperties(obj) {
    for (var key in obj)
        if (typeof obj[key] === 'string')
            console.log(key + ":", obj[key]);
}
