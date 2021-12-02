const table = document.querySelector("#newWorld");
const picaxe = document.querySelector(".picaxe");
const axe = document.querySelector(".axe");
const shovel = document.querySelector(".shovel");
const storage = document.querySelector(".inside-inventory");

const materials = {
  wood: "oak",
  clouds: "cloud",
  dirt: "dirt",
  grass: "grass",
  cloud: "cloud",
  leaves: "leaves",
  stone: "stone",
};
const inventory = [];

let clickedPicax = false;
picaxe.addEventListener("click", () => {
  clickedPicax = true;
  clickedAxe = false;
  clickedShovel = false;
});
let clickedAxe = false;
axe.addEventListener("click", () => {
  clickedAxe = true;
  clickedPicax = false;
  clickedShovel = false;
});
let clickedShovel = false;
shovel.addEventListener("click", () => {
  clickedShovel = true;
  clickedPicax = false;
  clickedAxe = false;
});

const brake = (e) => {
  if (e.target.classList.value !== "block") {
    if (clickedPicax && e.target.classList[1] == materials.stone) {
      inventory.push(e.target.classList.value);
      console.log(inventory);
      e.target.classList = "";
      storage.classList = "";
      storage.classList.add("inside-inventory",inventory[inventory.length -1].split(' ')[1])
    } else if (clickedAxe && (e.target.classList[1] == materials.wood || e.target.classList[1] == materials.leaves)){
      inventory.push(e.target.classList.value);
      e.target.classList = "";
      storage.classList = ""
      storage.classList.add("inside-inventory",inventory[inventory.length -1].split(' ')[1])
    } else if (clickedShovel && (e.target.classList[1] == materials.dirt || e.target.classList[1] == materials.grass)) {
      inventory.push(e.target.classList.value);
      e.target.classList = "";
      storage.classList = ""
      storage.classList.add("inside-inventory",inventory[inventory.length -1].split(' ')[1])
    }
  }
};

for (let i = 0; i < 20; i++) {
  const tr = document.createElement("tr");
  table.appendChild(tr);

  for (let j = 0; j < 20; j++) {
    const td = document.createElement("td");
    const div = document.createElement("div");
    div.id = "x:" + j + "_" + "y:" + i;
    div.className = "block";
    td.appendChild(div);
    div.addEventListener("click", brake);
    tr.appendChild(td);
    if (i === 15) {
      div.className = "block grass";
    }
    if (i >= 16) {
      div.className = "block dirt";
    }
  }
}

const create = (x, y, type) => {
  if (type === "stone") {
    document.getElementById(`x:${x}_y:${y}`).classList.add(materials.stone);
  } else if (type === "wood") {
    document.getElementById(`x:${x}_y:${y}`).classList.add(materials.wood);
  } else if (type === "leaves") {
    document.getElementById(`x:${x}_y:${y}`).classList.add(materials.leaves);
  } else if (type === "cloud") {
    document.getElementById(`x:${x}_y:${y}`).id = materials.cloud;
  }
};

// stone
create(13, 13, "stone");
create(13, 14, "stone");
create(14, 13, "stone");
create(14, 14, "stone");
// wood
create(4, 11, "wood");
create(4, 12, "wood");
create(4, 13, "wood");
create(4, 14, "wood");
// leaves
create(2, 10, "leaves");
create(3, 10, "leaves");
create(4, 10, "leaves");
create(5, 10, "leaves");
create(6, 10, "leaves");
create(2, 9, "leaves");
create(3, 9, "leaves");
create(4, 9, "leaves");
create(5, 9, "leaves");
create(6, 9, "leaves");
create(2, 8, "leaves");
create(3, 8, "leaves");
create(4, 8, "leaves");
create(5, 8, "leaves");
create(6, 8, "leaves");
create(3, 7, "leaves");
create(4, 7, "leaves");
create(5, 7, "leaves");
// clouds
create(3, 2, "cloud");
create(4, 2, "cloud");
create(5, 2, "cloud");
create(2, 3, "cloud");
create(3, 3, "cloud");
create(4, 3, "cloud");
create(5, 3, "cloud");
create(6, 3, "cloud");
