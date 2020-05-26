const wraper = doc.querySelector(".wraper");
const img_area = doc.querySelector(".img-area");
const box = doc.querySelectorAll(".img");

const box1 = doc.querySelector("#box-1");



img_area.addEventListener("mouseenter", () => {
box.forEach((e, i) => {
        let elemento = e.parentElement.parentElement;
        elemento.classList.remove(`box-${i+1}`);
        elemento.classList.add(`box-${i+1}b`)
    })
})
img_area.addEventListener("mouseleave", () => {
   box.forEach((e, i) => {
        let elemento = e.parentElement.parentElement;
        elemento.classList.add(`box-${i+1}`);
        elemento.classList.remove(`box-${i+1}b`)
    })
})
