let barsIcon = document.getElementById("barsIcon");
let timesIcon = document.getElementById("timesIcon");
let nav = document.getElementById("nav");

barsIcon.onclick = function() {
  nav.id = "nav-active";
};

timesIcon.onclick = function() {
  nav.id = "nav";
};
