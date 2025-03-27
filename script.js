let input = document.getElementById(`input`).value;
console.log(input)

function popsnap() {
    input = document.getElementById(`input`).value;
    console.log(input)
    if (input == 0) {
        console.log(`no input given`)
    } else if (input % 4 == 0 && input % 6 == 0) {
        document.getElementById(`output`).innerHTML = "PopSnap"
    } else if (input % 4 == 0) {
        document.getElementById(`output`).innerHTML ="Pop"
    } else if (input % 6 == 0){
        document.getElementById(`output`).innerHTML ="Snap"
    } else if (typeof(input) == Number) {
        document.getElementById(`output`).innerHTML = input
    } else if (input == `chicken` || input == `Chicken`) {
        document.getElementById(`body`).style.backgroundImage = "url(egg.png)";
    }
}