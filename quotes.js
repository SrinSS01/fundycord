const aboutTxt = 
`<p>This is a website that allows you to search for funny quotes from fundycord people.</p>
<p>The quotes images are made by Astria.</p>`
const images_users = {
    "water": [1],
    "a1a|awa": [2],
    "pighy|pighybrow": [3],
    "flame|fwame|flem|fwem": [5, 6, 7],
    "doki|sadoki": [8],
    "fondu|nud": [9]
}
const home = document.getElementById("home");
const about = document.getElementById("about");
// const contact = document.getElementById("contact");
const display = document.querySelector(".display");
const discord = document.querySelector(".discord");
const search_bar = document.getElementById("search");
let images = "<div class=\"row\">";
let width = 17 * 25
let height = 8 * 25
for (let i = 1; i <= 9; i++) {
    if (i == 4) continue;
    images += `<img class="quotes" src="./images/img${i}.png" alt="img${i}.png" width="${width}" height="${height}">`;
}
images += "</div>";
// console.log(images);
display.innerHTML = images;
function search() {
    const text = search_bar.value.toLowerCase();
    // check if text is empty
    if (text == "") {
        return;
    }
    for (const key in images_users) {
        if (key.includes(text)) {
            display.innerHTML = `<div class="row">`;
            for (const user of images_users[key]) {
                display.innerHTML += `<img class="quotes" src="./images/img${user}.png" alt="img${user}.png" width="${width}" height="${height}">`;
            }
            display.innerHTML += `</div>`;
        }
    }
}
window.onclick = e => {
    switch (e.target.id) {
        case "home":
            home.classList.contains("active") ? null : home.classList.add("active");
            // remove class from other elements
            about.classList.remove("active");
            // contact.classList.remove("active");
            // display home page
            display.innerHTML = images;
            if (discord.hidden == false) {
                discord.hidden = true;
            }
            break;
        case "about":
            about.classList.contains("active") ? null : about.classList.add("active");
            // show about text in display in a paragraph
            display.innerHTML = aboutTxt;
            // remove class from other elements
            home.classList.remove("active");
            discord.hidden = false;
            // contact.classList.remove("active");
            break;
        // case "contact":
        //     // set class to active
        //     // check if class is active, if false, set class to active, else do nothing
        //     contact.classList.contains("active") ? null : contact.classList.add("active");
        //     // remove class from other elements
        //     home.classList.remove("active");
        //     about.classList.remove("active");
        //     // display contact page
        //     display.innerHTML = `<p>Contact us at`
        //     break;
    }
}