const url = "https://api.adviceslip.com/advice";
const btn = document.querySelector("#btn");

function fetchAdvices() {
    const index = document.querySelector("#index");
    const advice = document.querySelector("#advice");
    fetch(url)
        .then(res => res.json())
        .then(res => {
            index.innerText = `ADVICE  #${res.slip.id}`;
            advice.innerText = `"${res.slip.advice}"`;
        })
}
btn.addEventListener('click', () => {
    fetchAdvices();
});
window.onload = function () {
    fetchAdvices();
}
