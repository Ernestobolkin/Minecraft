const table = document.querySelector("#newWorld");

const inventory = [];
for (let i = 0; i < 20; i++) {
  const tr = document.createElement("tr");
  table.appendChild(tr);

  for (let j = 0; j < 20; j++) {
    const td = document.createElement("td");
    const div = document.createElement("div");
    div.id = "x:" + j + "_" + "y:" + i ;
    div.className = "block";
    td.appendChild(div);
    div.sy
    div.addEventListener("click", () => {
      if(div.classList.value !== "block"){
      inventory.push(div.classList.value)
      console.log(div.classList.value);
      console.log(inventory);
      div.classList= ""
      }
    });
    tr.appendChild(td);
    if (i === 15) {
      div.className = "grass";
      div.style.cursor = "pointer"
    }
    if (i >= 16) {
      div.className = "dirt";
      div.style.cursor = "pointer"
    }
  }
}

// const matirials = {
//   let cloud = document.className = "cloud"
// }

// console.log(document.getElementById("x:8_y:3"));
document.getElementById("x:3_y:5").id = "cloud";
document.getElementById("x:4_y:5").id = "cloud";
document.getElementById("x:5_y:5").id = "cloud";
document.getElementById("x:2_y:6").id = "cloud";
document.getElementById("x:3_y:6").id = "cloud";
document.getElementById("x:4_y:6").id = "cloud";
document.getElementById("x:5_y:6").id = "cloud";
document.getElementById("x:6_y:6").id = "cloud";


