
/* basic screen ig*/
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 


// Keep this only if it's for opening/closing your navigation menu.
function myFunction() {
  document.getElementById("myTopnav").classList.toggle("responsive");
}

const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");
const toggle = document.querySelector("#theme-toggle");
let manuallyToggled = false;

function applyTheme(isDark) {
  document.documentElement.classList.toggle("dark", isDark);
}

applyTheme(systemPrefersDark.matches);

systemPrefersDark.addEventListener("change", (event) => {
  if (!manuallyToggled) applyTheme(event.matches);
});

toggle.addEventListener("click", () => {
  manuallyToggled = true;
  applyTheme(!document.documentElement.classList.contains("dark"));
});
