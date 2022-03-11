console.log("This website is working");

document.getElementById("menu").addEventListener("click", dropMenu)

function dropMenu() {
    document.getElementById("dropdown").classList.toggle("active");
}