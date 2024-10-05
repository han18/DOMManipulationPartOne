// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
        {text: 'all', href: '/catalog/all'},
        {text: 'top selling', href: '/catalog/top'},
        {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
        {text: 'new', href: '/orders/new'},
        {text: 'pending', href: '/orders/pending'},
        {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
        {text: 'profile', href: '/account/profile'},
        {text: 'sign out', href: '/account/signout'},
    ]},
];

// Setting up the main content
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;
mainEl.classList.add("flex-ctr");

// Creating the menu bar
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Submenu element
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.position = "absolute"; 

// Adding menu
menuLinks.forEach(link => {
    const aMenu = document.createElement("a");
    aMenu.setAttribute("href", link.href);
    aMenu.innerHTML = link.text;
    topMenuEl.appendChild(aMenu);
});

// Select and cache all <a> elements 
const topMenuLinks = topMenuEl.querySelectorAll('a');

// used a function for the sublinks
function buildSubmenu(subLinks) {
    subMenuEl.innerHTML = ''; 
    subLinks.forEach(subLink => {
        const subMenuItem = document.createElement("a");
        subMenuItem.setAttribute("href", subLink.href);
        subMenuItem.innerHTML = subLink.text;
        subMenuEl.appendChild(subMenuItem);
    });
}

//event listener to topMenuEl
topMenuEl.addEventListener('click', function(event) {
    // Prevent default action
    event.preventDefault();

    if (event.target.tagName !== 'A') return;

   
    console.log(event.target.textContent);

    // Removing active classs
    topMenuLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Toggleing active class
    const clickedLink = event.target;
    const linkObject = menuLinks.find(link => link.text.toLowerCase() === clickedLink.textContent.toLowerCase());

    if (!clickedLink.classList.contains('active')) {
        clickedLink.classList.add('active');

        if (linkObject.subLinks) {
            subMenuEl.style.top = '100%'; 
            buildSubmenu(linkObject.subLinks); 
        } else {
            subMenuEl.style.top = '0'; 
        }
    } else {
        clickedLink.classList.remove('active');
        subMenuEl.style.top = '0'; // Hiding submenu again
    }
});
