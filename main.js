const div = document.createElement("div");
document.body.appendChild(div);

let size = 10;
let flag = true;

document.body.style.height = "10000px";
div.style.width = "100%";
div.style.height = size + "px";
div.style.position = "fixed";
div.style.left = "0";
div.style.top = "0";
div.style.backgroundColor = "green";

const changeHeight = () => {
  if (size >= window.innerWidth / 2) {
    flag = !flag;
  } else if (size <= 0) {
    flag = !flag;
  }

  if (flag === true) {
    size += 10;
    div.style.height = size + "px";
    div.style.backgroundColor = "green";
  } else {
    size -= 10;
    div.style.height = size + "px";
    div.style.backgroundColor = "red";
  }
};

window.addEventListener("scroll", changeHeight);
