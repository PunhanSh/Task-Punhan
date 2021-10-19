let btn = document.getElementById("icon")
let bag = document.getElementById("bag");
let open1 = document.getElementsByClassName("open")[0];

btn.addEventListener("click", () => {
    bag.classList.toggle("active");
});