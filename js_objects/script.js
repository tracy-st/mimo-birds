let chipping = {
    name: "Chipping Sparrow",
    head:"Rusty cap, white stripe over eye, black line through eye",
    breast: "Plain, no streaks or dark central spot",
    image: "https://www.massaudubon.org/var/site/storage/images/9/3/5/4/1604539-1-eng-US/79d64c123089-DFkforesto-2329.jpg"
}

let tree = {
    name: "American Tree Sparrow",
    head: "Rusty cap, bill dark above and yellow below",
    breast: "Plain with a dark central spot",
    image: "https://www.massaudubon.org/var/site/storage/images/4/7/4/6/1606474-1-eng-US/28309e92eaa8-KForesto-6058.jpg"
}

let house = {
    name: "House Sparrow",
    head:"Gray crown and rusty on back of head; conspicuous black throat",
    breast: "Plain underparts without streaks; conspicuous single white bar on the wing",
    image: "https://www.massaudubon.org/var/site/storage/images/4/8/9/8/1628984-1-eng-US/d82e5c4bcf1e-4377Mary_Boucher19097-1200x801.jpg"
}

const gridTemplate = (bird) => `
<div class="container">
    <p id="name">Name: ${bird.name}</p>
    <p id="head">Head: ${bird.head}</p>
    <p id="breast">Breast: ${bird.breast}</p>
    </div>
`

let grid = document.getElementById("grid");

grid.innerHTML = gridTemplate(chipping) + gridTemplate(tree) +  gridTemplate(house);