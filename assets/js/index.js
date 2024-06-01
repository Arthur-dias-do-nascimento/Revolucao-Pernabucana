const icon_active_side_bar = document.querySelector("#icon-active-side-bar");
const icon_exit_side_bar = document.querySelector("#icon-exit-side-bar");

const side_bar = document.querySelector(".side-bar");

icon_active_side_bar.addEventListener("click", () => {
    if (side_bar.classList.contains("hidden")) {
        side_bar.classList.remove("hidden");

        side_bar.classList.add("active");
    } else {
        side_bar.classList.add("active");
    }
});

icon_exit_side_bar.addEventListener("click", () => {
    if (side_bar.classList.contains("active")) {
        side_bar.classList.remove("active");

        side_bar.classList.add("hidden");
    } else {
        side_bar.classList.add("hidden");
    }
});