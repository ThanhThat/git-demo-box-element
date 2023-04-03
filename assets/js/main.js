const arrColor = ["red", "blue", "green"];
const listBox = document.querySelectorAll(".grid-item");

const handleBgColor = (e) => {
  let temp = arrColor[2];
  arrColor[2] = arrColor[1];
  arrColor[1] = arrColor[0];
  arrColor[0] = temp;

  let i = 0;

  listBox.forEach((box) => {
    box.style.backgroundColor = arrColor[i];
    ++i;
  });
};

(() => {
  if (!listBox) return -1;
  listBox.forEach((box) => {
    box.addEventListener("click", handleBgColor);
  });
})();
