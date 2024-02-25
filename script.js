const colorItem = document.querySelectorAll(".color");

colorItem.forEach(onColorClick);

function onColorClick(item) {
    item.addEventListener("click", function () {
        let currentColor = item;

        if (!currentColor.classList.contains("active")) {
            colorItem.forEach(function (item) {
                item.classList.remove("active");
            });
            currentColor.classList.add("active");
        }
    });
};

document.querySelector(".color").click();

