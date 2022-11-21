const getText = () => {
    fetch("sample.txt")
        .then((response) => response.text())
        .then()
        .catch()   
}
document.querySelector("#ageText").addEventListener("click", getText);