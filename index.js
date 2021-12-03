const table = document.querySelector("#newWorld");
const picaxe = document.querySelector(".num1");
const axe = document.querySelector(".num2");
const shovel = document.querySelector(".num3");
const storage = document.querySelector(".inside-inventory");
const invHover = document.querySelector(".inventory");
const generate = document.querySelector(".restart");

export const materials = {
  wood: "oak",
  dirt: "dirt",
  grass: "grass",
  cloud: "cloud",
  leaves: "leaves",
  stone: "stone",
  green: "green",
  red: "red",
  sun: "sun",
  cobblestone: "Cobblestone",
};
const inventory = [];
const cloudEsterEgg = [];

table.addEventListener("click", (event) => {
  mine(event);
  redBorder(event);
  // console.log(inventory);
  console.log(event.target);
});

// the tools functions

let clickedPicax = false;
picaxe.addEventListener("click", () => {
  picaxe.classList.add(materials.green);
  axe.classList.remove(materials.green);
  shovel.classList.remove(materials.green);
  invHover.classList.remove(materials.green);
  clickedPicax = true;
  clickedAxe = false;
  clickedShovel = false;
  clickInventory = false;
});

let clickedAxe = false;
axe.addEventListener("click", () => {
  axe.classList.add(materials.green);
  picaxe.classList.remove(materials.green);
  shovel.classList.remove(materials.green);
  invHover.classList.remove(materials.green);
  clickedAxe = true;
  clickedPicax = false;
  clickedShovel = false;
  clickInventory = false;
});

let clickedShovel = false;
shovel.addEventListener("click", () => {
  shovel.classList.add(materials.green);
  picaxe.classList.remove(materials.green);
  axe.classList.remove(materials.green);
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
  if (storage.classList.length > 1) {
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
  }
});

// when the user mines, this function removes the block, adds to the storage and holds all the
// block that the user removed inside the inventory
//todo add inventory that the user can see and use all the blocks that the user removed
const ifMine = (event) => {
  if (event.target.classList[1] !== "stone") {
    console.log(event.target.classList.value);
    console.log("woks");
    inventory.push(event.target.classList.value);
    event.target.classList.remove(event.target.classList[1]);
    storage.classList = "";
    storage.classList.add(
      "inside-inventory",
      inventory[inventory.length - 1].split(" ")[1]
    );
  } else {
    inventory.push(materials.cobblestone);
    event.target.classList.remove(event.target.classList[1]);
    storage.classList = "";
    storage.classList.add("inside-inventory", materials.cobblestone);
    console.log(storage.classList);
  }
};

// when the user clicks the inventory, all the selection on the tools are removed
const removeSelection = () => {
  clickedShovel = false;
  clickedPicax = false;
  clickedAxe = false;
  shovel.classList.remove(materials.green);
  picaxe.classList.remove(materials.green);
  axe.classList.remove(materials.green);
};

// checking what the user can mine with the tools
const mine = (event) => {
  if (event.target.classList.value !== "block") {
    if (
      clickedPicax &&
      (event.target.classList[1] == materials.stone ||
        event.target.classList[1] == materials.cobblestone)
    ) {
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
      picaxe.classList.add(materials.red);
      setTimeout(function () {
        picaxe.classList.remove(materials.red);
      }, 500);
    } else if (clickedAxe && event.target.classList.value !== "") {
      axe.classList.add(materials.red);
      setTimeout(function () {
        axe.classList.remove(materials.red);
      }, 500);
    } else if (clickedShovel && event.target.classList.value !== "") {
      shovel.classList.add(materials.red);
      setTimeout(function () {
        shovel.classList.remove(materials.red);
      }, 500);
    }
  }
};

//creating a base. dirt grass and the sky
const base = () => {
  for (let i = 0; i <= 19; i++) {
    const tr = document.createElement("tr");
    table.appendChild(tr);
    for (let j = 0; j <= 25; j++) {
      const td = document.createElement("td");
      const div = document.createElement("div");
      div.id = "x:" + j + "_" + "y:" + i;
      div.className = "block";
      td.appendChild(div);
      tr.appendChild(td);
      if (i === 17) {
        div.className = "block grass";
      }
      if (i >= 18) {
        div.className = "block dirt";
      }
    }
  }
};
base();

// restart button
generate.addEventListener("click", () => {
  inventory.splice(0, inventory.length);
  storage.classList.remove(storage.classList[1]);
  removeAllClasses();
  base();
  removeSelection();
  randomTree();
  randomhouse();
  randomCloud();
  sun();
});
const removeAllClasses = () => {
  table.innerHTML = "";
};

//creating a an elements like clouds stones and et..
function create(x, y, type) {
  if (type === "stone") {
    document.getElementById(`x:${x}_y:${y}`).classList.add(materials.stone);
  } else if (type === "wood") {
    document.getElementById(`x:${x}_y:${y}`).classList.add(materials.wood);
  } else if (type === "leaves") {
    document.getElementById(`x:${x}_y:${y}`).classList.add(materials.leaves);
  } else if (type === "cloud") {
    cloudEsterEgg.push([x,y])
    document.getElementById(`x:${x}_y:${y}`).id = materials.cloud;
  } else if (type === "sun") {
    document.getElementById(`x:${x}_y:${y}`).classList.add(materials.sun);

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

// todo Find a way to nake the sun move every couple seconds to the right..
// warning. dont use for loops, it will crush the chrome!!
let time = 0;
let dt = new Date();
const sun = () => {
  if (dt.getSeconds() > 1 && time < 20) {
    time++;
    document
      .getElementById(`x:0_y:${time - 1}`)
      .classList.remove(materials.sun);
    create(time, 0, "sun");
  } else {
    time = 0;
  }
};
sun();

if(clickedShovel){
  cloudEsterEgg.forEach((cloud,i)=>{
    console.log(cloud);
  })
}
