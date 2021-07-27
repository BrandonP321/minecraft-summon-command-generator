const idToSummonEle = document.getElementById("idToSummon");
const passengersEle = document.getElementById("passengers");
const numbPassengersEle = document.getElementById("numbPassengers");
const form = document.getElementById("mineForm");
const outputEle = document.getElementById("output");

let outputText = "";

form.onsubmit = (e) => {
    e.preventDefault();

    const idToSummon = idToSummonEle.value;
    const passengersField = passengersEle.value;
    const numbPassengers = parseInt(numbPassengersEle.value);

    const passengers = `{Passengers:[{${passengersField}${generatePassengers(passengersField, numbPassengers)}}]}`

    outputText = `/summon ${idToSummon} ${passengers}`;
    outputEle.innerText = outputText;
}

document.getElementById("copy").onclick = () => {
    navigator.clipboard.writeText(outputText);
}

const generatePassengers = (passengerField, countLeft) => {
    if (countLeft === 0) return "";

    return `,Passengers:[{${passengerField}${generatePassengers(passengerField, countLeft - 1, )}}]`
}