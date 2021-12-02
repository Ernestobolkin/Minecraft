const table = document.querySelector("#newWorld");

const picaxe = document.querySelector(".picaxe");
const picHover = document.querySelector(".num1")

const axe = document.querySelector(".axe");
const axHover = document.querySelector(".num2");

const shovel = document.querySelector(".shovel");
const shHover = document.querySelector(".num3");

const storage = document.querySelector(".inside-inventory");

const materials = {
  wood: "oak",
  clouds: "cloud",
  dirt: "dirt",
  grass: "grass",
  cloud: "cloud",
  leaves: "leaves",
  stone: "stone",
  green:"green",
  red:"red"
};
const inventory = [];

let clickedPicax = false;
picaxe.addEventListener("click", () => {
  picHover.classList.add(materials.green)
  axHover.classList.remove(materials.green)
  shHover.classList.remove(materials.green)
  clickedPicax = true;
  clickedAxe = false;
  clickedShovel = false;
});
let clickedAxe = false;
axe.addEventListener("click", () => {
  axHover.classList.add(materials.green)
  picHover.classList.remove(materials.green)
  shHover.classList.remove(materials.green)
  clickedAxe = true;
  clickedPicax = false;
  clickedShovel = false;
});
let clickedShovel = false;
shovel.addEventListener("click", () => {
  shHover.classList.add(materials.green)
  picHover.classList.remove(materials.green)
  axHover.classList.remove(materials.green)
  clickedShovel = true;
  clickedPicax = false;
  clickedAxe = false;
});

const mine = (event) => {
  if (event.target.classList.value !== "block") {
    if (clickedPicax && event.target.classList[1] == materials.stone) {
      ifMine(event)
    } else if (clickedAxe && (event.target.classList[1] == materials.wood || event.target.classList[1] == materials.leaves)){
      ifMine(event)
    } else if (clickedShovel && (event.target.classList[1] == materials.dirt || event.target.classList[1] == materials.grass)) {
      ifMine(event)
    }
  }
};

const ifMine = (event) =>{
  inventory.push(event.target.classList.value);
  event.target.classList = "";
  storage.classList = "";
  storage.classList.add("inside-inventory",inventory[inventory.length -1].split(' ')[1])
}

storage.addEventListener('click',(event)=>{
  storage.classList[1]
  // console.log(inventory);
  console.log(storage.classList[1]);
})

const redBorder = (event) =>{
  if (event.target.classList.value !== "block") {
    if (clickedPicax && event.target.classList.value !== "") {
      console.log("picax red");
      picHover.classList.add(materials.red);
      setTimeout(function(){picHover.classList.remove(materials.red)},500)
    } else if (clickedAxe && event.target.classList.value !== ""){
      console.log("axe red");
      axHover.classList.add(materials.red);
      setTimeout(function(){axHover.classList.remove(materials.red)},500)
    } else if (clickedShovel && event.target.classList.value !== ""){
      console.log("shovle red");
      shHover.classList.add(materials.red);
      setTimeout(function(){shHover.classList.remove(materials.red)},500)
    }
  }
}


for (let i = 0; i < 20; i++) {
  const tr = document.createElement("tr");
  table.appendChild(tr);

  for (let j = 0; j < 20; j++) {
    const td = document.createElement("td");
    const div = document.createElement("div");
    div.id = "x:" + j + "_" + "y:" + i;
    div.className = "block";
    td.appendChild(div);
    div.addEventListener("click", (event) => {
      mine(event);
      redBorder(event);
    });
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
