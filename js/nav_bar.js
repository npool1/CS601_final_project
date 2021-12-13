// run this function when the document is loaded
window.onload = function() {

// create header
const header = document.getElementById("nav-bar");
const header_h1 = document.createElement("h1");
const header_text = document.createTextNode("Welcome to The Crowded Kitchen!");
header_h1.appendChild(header_text);
header.append(header_h1);


//create nav bar
const nav = document.createElement("nav");
const ul = document.createElement("ul");
ul.className = "nav-bar";

const links= ["index.html", "blog.html", "recipes.html", "contact_us.html"];
const link_text = ["Home", "Blog", "Recipes", "Contact Us"];

for (i =0; i <= links.length -1; i++){
  const a = document.createElement("a")
  a.href = links[i];
  a.appendChild(document.createTextNode(link_text[i]));
  const li = document.createElement("li");
  li.className = "nav-bar";

  li.appendChild(a);
  ul.appendChild(li);
}
nav.appendChild(ul);
header.append(nav)
}
