function add() {}
const instance = "";

const user = add(instance, {
  read: () => ({
    name: "",
  }),
  create: () => ({
    name: "",
  }),
  delete: () => ({
    name: "",
  }),
  update: () => ({
    name: "",
  }),
});

const $mainSidebar = document.querySelector(".main-sidebar");
const currentPosition = parseInt($mainSidebar.style.top);
$mainSidebar.transition = "1s";

window.addEventListener("scroll", function () {
  const position = window.scrollTop;
  Object.assign($mainSidebar.style, {
    transition: "1s",
    top: position + currentPosition + "px",
  });
  $mainSidebar.style.transition = "1s";
  $mainSidebar.style.top;
});
document.querySelector(window).scroll(() => {
  document
    .querySelector(".main-sidebar")
    .stop()
    .animate({ top: position + currentPosition + "px" }, 1000);
});
