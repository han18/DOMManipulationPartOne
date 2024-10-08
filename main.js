// this is part one
// Menu data structure
let menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// part 1
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;
mainEl.classList.add("flex-ctr");

/// part 2 Creating a Menu Bar

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
topMenuEl.classList.add("flex-around");

// Part 3: Adding Menu Buttons

// iterating through
for (let i = 0; i < menuLinks.length; i++) {
  const aMenu = document.createElement("a");
  aMenu.setAttribute("href", menuLinks[i].href);
  aMenu.innerHTML = menuLinks[i].text;
  topMenuEl.appendChild(aMenu);
  
}
console.log(menuLinks);


