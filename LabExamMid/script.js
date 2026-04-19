console.log("Connected");
function press(value) {
    if (value === '%') value = '/100';
    document.getElementById("display").value += value;
}
function calculate() {
    let exp = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(exp);
    } catch {
        document.getElementById("display").value = "Error";
    }
}
function clearLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
function clearAll() {
    document.getElementById("display").value = "";
}