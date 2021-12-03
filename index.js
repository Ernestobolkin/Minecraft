const table = document.querySelector("#newWorld");
// const picaxe = document.querySelector(".picaxe");
const picHover = document.querySelector(".num1");
// const axe = document.querySelector(".axe");
const axHover = document.querySelector(".num2");
// const shovel = document.querySelector(".shovel");
const shHover = document.querySelector(".num3");
const storage = document.querySelector(".inside-inventory");
const invHover = document.querySelector(".inventory");

export const materials = {
  wood: "oak",
  clouds: "cloud",
  dirt: "dirt",
  grass: "grass",
  cloud: "cloud",
  leaves: "leaves",
  stone: "stone",
  green: "green",
  red: "red",
};

const inventory = [];

table.addEventListener("click", (event) => {
  mine(event);
  redBorder(event);
});

// the tools functions

let clickedPicax = false;
picHover.addEventListener("click", () => {
  picHover.classList.add(materials.green);
  axHover.classList.remove(materials.green);
  shHover.classList.remove(materials.green);
  invHover.classList.remove(materials.green);
  clickedPicax = true;
  clickedAxe = false;
  clickedShovel = false;
  clickInventory = false;
});

let clickedAxe = false;
axHover.addEventListener("click", () => {
  axHover.classList.add(materials.green);
  picHover.classList.remove(materials.green);
  shHover.classList.remove(materials.green);
  invHover.classList.remove(materials.green);
  clickedAxe = true;
  clickedPicax = false;
  clickedShovel = false;
  clickInventory = false;
});

let clickedShovel = false;
shHover.addEventListener("click", () => {
  shHover.classList.add(materials.green);
  picHover.classList.remove(materials.green);
  axHover.classList.remove(materials.green);
  invHover.classList.remove(materials.green);
  clickedShovel = true;
  clickedPicax = false;
  clickedAxe = false;
  clickInventory = false;
});

// gives the user to build back the last element that he removed
//todo add an inventory instade one storage place!!!
let clickInventory = false;
storage.addEventListener("click", () => {
  invHover.classList.add(materials.green);
  removeSelection();
  let clickInventory = true;
    table.addEventListener("click", (event) => {
      if (clickInventory && event.target.classList[1] == undefined) {
        event.target.classList.add(storage.classList[1]);
        storage.classList.remove(storage.classList[1]);
        invHover.classList.remove(materials.green);
        clickInventory = false;
      }
    });
});

// when the user mines, this function removes the block, adds to the storage and holds all the
// block that the user removed inside the inventory
//todo add inventory that the user can see and use all the blocks that he removed
const ifMine = (event) => {
  inventory.push(event.target.classList.value);
  event.target.classList.remove(event.target.classList[1])
  console.log(storage.classList);
  storage.classList = "";
  storage.classList.add(
    "inside-inventory",
    inventory[inventory.length - 1].split(" ")[1]
  );
};

// when the user clicks the inventory, all the selection on the tools are removed
const removeSelection = () => {
  clickedShovel = false;
  clickedPicax = false;
  clickedAxe = false;
  shHover.classList.remove(materials.green);
  picHover.classList.remove(materials.green);
  axHover.classList.remove(materials.green);
};

// checking what the user can mine with the tools
const mine = (event) => {
  if (event.target.classList.value !== "block") {
    if (clickedPicax && event.target.classList[1] == materials.stone) {
      ifMine(event);
    } else if (
      clickedAxe &&
      (event.target.classList[1] == materials.wood ||
        event.target.classList[1] == materials.leaves)
    ) {
      ifMine(event);
    } else if (
      clickedShovel &&
      (event.target.classList[1] == materials.dirt ||
        event.target.classList[1] == materials.grass)
    ) {
      ifMine(event);
    }
  }
};

// when the user tries to remove block wuth the wrong tool, this fuunction shows a red border on the tool.
const redBorder = (event) => {
  if (event.target.classList.value !== "block") {
    if (clickedPicax && event.target.classList.value !== "") {
      picHover.classList.add(materials.red);
      setTimeout(function () {
        picHover.classList.remove(materials.red);
      }, 500);
    } else if (clickedAxe && event.target.classList.value !== "") {
      axHover.classList.add(materials.red);
      setTimeout(function () {
        axHover.classList.remove(materials.red);
      }, 500);
    } else if (clickedShovel && event.target.classList.value !== "") {
      shHover.classList.add(materials.red);
      setTimeout(function () {
        shHover.classList.remove(materials.red);
      }, 500);
    }
  }
};

//creating a world
// todo: add a random numbers so every time the world will be random
for (let i = 0; i < 20; i++) {
  const tr = document.createElement("tr");
  table.appendChild(tr);
  for (let j = 0; j < 20; j++) {
    const td = document.createElement("td");
    const div = document.createElement("div");
    div.id = "x:" + j + "_" + "y:" + i;
    div.className = "block";
    td.appendChild(div);
    tr.appendChild(td);
    if (i === 15) {
      div.className = "block grass";
    }
    if (i >= 16) {
      div.className = "block dirt";
    }
  }
}



//creating a an elements like clouds stones and et..
// todo: add a random numbers so every time the world will be random
function create(x, y, type) {
  if (type === "stone") {
    document.getElementById(`x:${x}_y:${y}`).classList.add(materials.stone);
  } else if (type === "wood") {
    document.getElementById(`x:${x}_y:${y}`).classList.add(materials.wood);
  } else if (type === "leaves") {
    document.getElementById(`x:${x}_y:${y}`).classList.add(materials.leaves);
  } else if (type === "cloud") {
    document.getElementById(`x:${x}_y:${y}`).id = materials.cloud;
  }
}
// stone
create(15, 14, "stone");
create(16, 14, "stone");
create(17, 14, "stone");
create(17, 13, "stone");
create(17, 12, "stone");
create(16, 12, "stone");
create(15, 12, "stone");
create(15, 13, "stone");
create(16, 13, "wood");
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
