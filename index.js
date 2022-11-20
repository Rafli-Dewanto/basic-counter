const tambahButton = document.querySelector("#increase-btn");
const kurangButton = document.querySelector("#decrease-btn");
const counter = document.querySelector(".num-counter");
const reset = document.querySelector(".reset");


tambahButton.addEventListener("click", () => {
    let currNumber = parseInt(counter.innerHTML);
    currNumber++;
    counter.innerHTML = currNumber;
});

kurangButton.addEventListener("click", () => {
    let currNumber = parseInt(counter.innerHTML);
    if (currNumber !== 0) {
        currNumber--;
    }
    counter.innerHTML = currNumber;
});

reset.addEventListener("click", () => counter.innerHTML = 0);