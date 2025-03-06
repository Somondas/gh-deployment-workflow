const parent = document.getElementById("parent");
const child = document.getElementById("child");
const grandparent = document.getElementById("grandparent");

child.addEventListener(
  "click",
  (e) => {
    // e.stopPropagation();
    console.log("Button Clicked, child");
  },
  true
);

parent.addEventListener(
  "click",
  () => {
    console.log("Parent Clicked, parent");
  },
  false
);

grandparent.addEventListener(
  "click",
  (e) => {
    console.log("Grandparent Clicked, grandparent");
  },
  true
);
