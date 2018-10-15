imgBorder = document.querySelector("#image1");

imgBorder.addEventListener("mouseover", function imgBorder(event) {
    event.target.style.border = "3px solid red"
})

imgBorder.addEventListener("mouseout", function imgBorderBack(event) {
    event.target.style.border = "none"
})