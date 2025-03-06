const parent = document.getElementById("parent");
const child = document.getElementById("child");
const grandparent = document.getElementById("grandparent");

child.addEventListener(
  "click",
  () => {
    console.log("Button Clicked, child");
  },
  true
);

parent.addEventListener(
  "click",
  () => {
    console.log("Parent Clicked, parent");
  },
  true
);

grandparent.addEventListener(
  "click",
  () => {
    console.log("GrandParent Clicked, grandparent");
  },
  true
);
