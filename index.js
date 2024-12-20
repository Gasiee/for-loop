const x = "hello world";

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.margin = "0";
document.body.style.backgroundColor = "#282c34";

for (let y of x) {
    const div = document.createElement("div");
    div.textContent = y;
    div.style.width = "60px";
    div.style.height = "60px";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.border = "2px solid #61dafb";
    div.style.margin = "8px";
    div.style.backgroundColor = "#61dafb";
    div.style.color = "#282c34";
    div.style.fontSize = "24px";
    div.style.fontWeight = "bold";
    div.style.borderRadius = "10px";
    div.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";
    div.style.transition = "transform 0.3s, background-color 0.3s";

    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "#f09";
        div.style.transform = "scale(1.2)";
    });

    div.addEventListener("mouseleave", () => {
        div.style.backgroundColor = "#61dafb";
        div.style.transform = "scale(1)";
    });

    document.body.appendChild(div);
}