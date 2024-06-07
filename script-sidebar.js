document.getElementById("toggle-btn").addEventListener("click", function() {
let sidebar = document.getElementById("sidebar");
let toggleBtn = document.getElementById("toggle-btn");
let content = document.getElementById("content");

if (sidebar.style.width === "250px") {
sidebar.style.width = "0";
content.style.marginLeft = "0";
toggleBtn.style.left = "15px";
} else {
sidebar.style.width = "250px";
content.style.marginLeft = "250px";
toggleBtn.style.left = "265px";
}
});
