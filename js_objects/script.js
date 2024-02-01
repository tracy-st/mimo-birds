let chipping = {
    name: "Chipping Sparrow",
    head:"Rusty cap, white stripe over eye, black line through eye",
    breast: "Plain, no streaks or dark central spot",
    image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/297632331/1800"
}

let tree = {
    name: "American Tree Sparrow",
    head: "Rusty cap, bill dark above and yellow below",
    breast: "Plain with a dark central spot",
    image: "https://www.allaboutbirds.org/guide/assets/photo/64971271-480px.jpg"
}

let house = {
    name: "House Sparrow",
    head: "Gray crown and rusty on back of head; conspicuous black throat",
    breast: "Plain underparts without streaks; conspicuous single white bar on the wing",
    image: "https://www.allaboutbirds.org/guide/assets/photo/305874191-480px.jpg"
}

let song = {
    name: "Song Sparrow",
    head: "Thick brown throat and mustache stripes, ",
    breast: "Coarse brown streaks",
    image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/66116691/1800"
}

const gridTemplate = (bird) => `
<div class="container">
    <div class="image">
        <img src="${bird.image}">
    </div>
    <p id="name"><strong>Name:</strong> ${bird.name}</p>
    <p id="head"><strong>Head:</strong> ${bird.head}</p>
    <p id="breast"><strong>Breast:</strong> ${bird.breast}</p>
    </div>
`

let grid = document.getElementById("grid");

grid.innerHTML = gridTemplate(chipping) + gridTemplate(tree) + gridTemplate(house) + gridTemplate(song);