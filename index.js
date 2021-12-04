const table = document.querySelector("#newWorld");
const picaxe = document.querySelector(".num1");
const axe = document.querySelector(".num2");
const shovel = document.querySelector(".num3");
const storage = document.querySelector(".inside-of-block");
const invHover = document.querySelector(".last-block");
const generate = document.querySelector(".restart");
const chest = document.querySelector(".chest");
const hidenInventory = document.querySelector(".inventory-container");
const inventorySibling = document.querySelector(".inventory");
const items = inventorySibling.querySelectorAll(".item");
const worldBackground = document.querySelector(".world-Container");

const materials = {
  wood: "oak",
  dirt: "dirt",
  grass: "grass",
  cloud: "cloud",
  leaves: "leaves",
  stone: "stone",
  cobblestone: "Cobblestone",
};

const worldElements = {
  green: "green",
  red: "red",
  sun: "sun",
  moon: "moon",
};

const inventory = [];

table.addEventListener("click", (event) => {
  mine(event);
  redBorder(event);
});

// the tools functions
let clickedPicax = false;
picaxe.addEventListener("click", () => {
  picaxe.classList.add(worldElements.green);
  axe.classList.remove(worldElements.green);
  shovel.classList.remove(worldElements.green);
  invHover.classList.remove(worldElements.green);
  clickedPicax = true;
  clickedAxe = false;
  clickedShovel = false;
  clickInventory = false;
});

let clickedAxe = false;
axe.addEventListener("click", () => {
  axe.classList.add(worldElements.green);
  picaxe.classList.remove(worldElements.green);
  shovel.classList.remove(worldElements.green);
  invHover.classList.remove(worldElements.green);
  clickedAxe = true;
  clickedPicax = false;
  clickedShovel = false;
  clickInventory = false;
});

let clickedShovel = false;
shovel.addEventListener("click", () => {
  shovel.classList.add(worldElements.green);
  picaxe.classList.remove(worldElements.green);
  axe.classList.remove(worldElements.green);
  invHover.classList.remove(worldElements.green);
  clickedShovel = true;
  clickedPicax = false;
  clickedAxe = false;
  clickInventory = false;
});

// gives the user optin to build back the last element that he removed
//todo add an inventory instade one storage place!!!
let clickInventory = false;
storage.addEventListener("click", () => {
  if (storage.classList.length > 1) {
    invHover.classList.add(worldElements.green);
    removeSelection();
    let clickInventory = true;
    table.addEventListener("click", (event) => {
      if (clickInventory && event.target.classList[1] == undefined) {
        event.target.classList.add(storage.classList[1]);
        storage.classList.remove(storage.classList[1]);
        invHover.classList.remove(worldElements.green);
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
    inventory.push(event.target.classList.value);
    event.target.classList.remove(event.target.classList[1]);
    storage.classList = "";
    storage.classList.add(
      "inside-of-block",
      inventory[inventory.length - 1].split(" ")[1]
    );
  } else {
    inventory.push(materials.cobblestone);
    event.target.classList.remove(event.target.classList[1]);
    storage.classList = "";
    storage.classList.add("inside-of-block", materials.cobblestone);
  }
};

// when the user clicks the inventory, all the selection on the tools are removed
const removeSelection = () => {
  clickedShovel = false;
  clickedPicax = false;
  clickedAxe = false;
  shovel.classList.remove(worldElements.green);
  picaxe.classList.remove(worldElements.green);
  axe.classList.remove(worldElements.green);
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
      pushInsideChest();
    } else if (
      clickedAxe &&
      (event.target.classList[1] == materials.wood ||
        event.target.classList[1] == materials.leaves)
    ) {
      ifMine(event);
      pushInsideChest();
    } else if (
      clickedShovel &&
      (event.target.classList[1] == materials.dirt ||
        event.target.classList[1] == materials.grass)
    ) {
      ifMine(event);
      pushInsideChest();
    }
  }
};

// when the user tries to remove block with the wrong tool, this fuunction shows a red border on the tool.
const redBorder = (event) => {
  if (event.target.classList.value !== "block") {
    if (clickedPicax && event.target.classList.value !== "") {
      picaxe.classList.add(worldElements.red);
      setTimeout(function () {
        picaxe.classList.remove(worldElements.red);
      }, 500);
    } else if (clickedAxe && event.target.classList.value !== "") {
      axe.classList.add(worldElements.red);
      setTimeout(function () {
        axe.classList.remove(worldElements.red);
      }, 500);
    } else if (clickedShovel && event.target.classList.value !== "") {
      shovel.classList.add(worldElements.red);
      setTimeout(function () {
        shovel.classList.remove(worldElements.red);
      }, 500);
    }
  }
};

//creating a base. dirt grass and the sky
const base = () => {
  for (let i = 0; i <= 20; i++) {
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
  myRandom();
});
const removeAllClasses = () => {
  table.innerHTML = "";
};

// create day and night
let time = 0;
let sunSwitch = true;
const sun = () => {
  if (sunSwitch && time <= 24) {
    time++;
    document
      .getElementById(`x:${time - 1}_y:0`)
      .classList.remove(worldElements.sun);
    create(time, 0, "sun");
    worldBackground.style.background = "lightblue";
  } else {
    document.getElementById(`x:25_y:0`).classList.remove(worldElements.sun);
    time = 0;
    sunSwitch = false;
    moonSwitch = true;
  }
};

let moonSwitch = true;
const moon = () => {
  if (moonSwitch && time <= 24) {
    time++;
    document
      .getElementById(`x:${time - 1}_y:0`)
      .classList.remove(worldElements.moon);
    create(time, 0, "moon");
    worldBackground.style.background = "rgb(32, 38, 77)";
  } else {
    document.getElementById(`x:25_y:0`).classList.remove(worldElements.moon);
    time = 0;
    moonSwitch = false;
    sunSwitch = true;
  }
};

// loop function
setInterval(() => {
  if (sunSwitch) {
    sun();
  } else {
    moon();
  }
}, 500);

// todo finnish the chest part
// chest inventory prototype
chest.addEventListener("click", () => {
  if (hidenInventory.style.display === "none") {
    hidenInventory.style.display = "block";
  } else {
    hidenInventory.style.display = "none";
  }
});

const pushInsideChest = () => {
  if (inventory.length !== 0) {
    if (items[0].classList.length < 3) {
      // item number 0
      items[0].classList.add(inventory[inventory.length - 1].split(" ")[1]);
      console.log(items[0].classList);
      // item number 1
    } else if (items[0].classList != items[1].classList) {
      items[1].classList.add(inventory[inventory.length - 1].split(" ")[1]);
      // item number 2
    }
  }
};

// else if(items[1].classList.length > 2){
// else if()
//   console.log(inventory[inventory.length - 1].split(" ")[1]);
//   items[1].classList.add(inventory[inventory.length - 1].split(" ")[1])
