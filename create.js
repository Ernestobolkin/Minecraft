//creating a an elements like clouds stones and et..
function create(x, y, type) {
  if (type === "stone") {
    document.getElementById(`x:${x}_y:${y}`).classList.add(materials.stone);
  } else if (type === "wood") {
    document.getElementById(`x:${x}_y:${y}`).classList.add(materials.wood);
  } else if (type === "leaves") {
    document.getElementById(`x:${x}_y:${y}`).classList.add(materials.leaves);
  } else if (type === "cloud") {
    cloudEsterEgg.push([x, y]);
    document.getElementById(`x:${x}_y:${y}`).id = materials.cloud;
  } else if (type === "sun") {
    document.getElementById(`x:${x}_y:${y}`).classList.add(worldMaterials.sun);
  } else if (type === "moon") {
    document.getElementById(`x:${x}_y:${y}`).classList.add(worldMaterials.moon);
  }
}
// random functions to create random xAxis for the trees
function randomTree() {
  let x = Math.floor(Math.random() * (11 - 0 + 1)) + 0;
  // wood
  create(x + 2, 16, "wood");
  create(x + 2, 15, "wood");
  create(x + 2, 13, "wood");
  create(x + 2, 14, "wood");
  create(x + 2, 15, "wood");
  create(x + 2, 16, "wood");
  // leaves
  create(x, 12, "leaves");
  create(x + 1, 12, "leaves");
  create(x + 2, 12, "leaves");
  create(x + 3, 12, "leaves");
  create(x + 4, 12, "leaves");
  create(x, 11, "leaves");
  create(x + 1, 11, "leaves");
  create(x + 2, 11, "leaves");
  create(x + 3, 11, "leaves");
  create(x + 4, 11, "leaves");
  create(x, 10, "leaves");
  create(x + 1, 10, "leaves");
  create(x + 2, 10, "leaves");
  create(x + 3, 10, "leaves");
  create(x + 4, 10, "leaves");
  create(x + 1, 9, "leaves");
  create(x + 2, 9, "leaves");
  create(x + 3, 9, "leaves");
}
randomTree();

// random functions to create random xAxis for the house
function randomhouse() {
  let x = Math.floor(Math.random() * (22 - 15 + 1)) + 15;

  create(x, 14, "stone");
  create(x + 1, 14, "stone");
  create(x + 2, 14, "stone");
  create(x, 15, "stone");
  create(x + 1, 15, "wood");
  create(x + 2, 15, "stone");
  create(x, 16, "stone");
  create(x + 1, 16, "wood");
  create(x + 2, 16, "stone");

  create(x + 1, 12, "wood");
  create(x, 13, "wood");
  create(x + 1, 13, "leaves");
  create(x + 2, 13, "wood");
  create(x - 1, 14, "wood");
  create(x + 3, 14, "wood");
}
randomhouse();
// random functions to create random xAxis for the clouds
function randomCloud() {
  function clouds1() {
    let x = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    create(x + 1, 2, "cloud");
    create(x + 2, 2, "cloud");
    create(x + 3, 2, "cloud");
    create(x, 3, "cloud");
    create(x + 1, 3, "cloud");
    create(x + 2, 3, "cloud");
    create(x + 3, 3, "cloud");
    create(x + 4, 3, "cloud");
  }
  clouds1();
  function clouds2() {
    let x = Math.floor(Math.random() * (21 - 12 + 1)) + 12;
    create(x + 1, 5, "cloud");
    create(x + 2, 5, "cloud");
    create(x + 3, 5, "cloud");
    create(x, 6, "cloud");
    create(x + 1, 6, "cloud");
    create(x + 2, 6, "cloud");
    create(x + 3, 6, "cloud");
    create(x + 4, 6, "cloud");
  }
  clouds2();
}
randomCloud();