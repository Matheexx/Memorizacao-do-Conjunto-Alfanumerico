const digitsSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let currentDigit = 0;

const digit = window.document.getElementsByClassName("digit")[0];
const firstDigit = window.document.getElementById("firstDigit");
const lastDigit = window.document.getElementById("lastDigit");

function fLoad() {
    digit.innerHTML = `<h2>${digitsSet[currentDigit]}</h2>`;
    firstDigit.innerHTML = `<p>${digitsSet[0]}</p>`;
    lastDigit.innerHTML = `<p>${digitsSet[digitsSet.length - 1]}</p>`;
}

function goPreviousDigit() {
    if (verifyPreviousDigit()) {
        currentDigit--;
        digit.innerHTML = `<h2>${digitsSet[currentDigit]}</h2>`;
    }
}

function goNextDigit() {
    if (verifyNextDigit()) {
        currentDigit++;
        digit.innerHTML = `<h2>${digitsSet[currentDigit]}</h2>`;
    }
}

function goFirstDigit() {
    currentDigit = 0;
    digit.innerHTML = `<h2>${digitsSet[currentDigit]}</h2>`;
}

function goLastDigit() {
    currentDigit = digitsSet.length - 1;
    digit.innerHTML = `<h2>${digitsSet[currentDigit]}</h2>`;
}

function verifyPreviousDigit() {
    return (currentDigit - 1 >= 0);
}

function verifyNextDigit() {
    return (currentDigit + 1 <= digitsSet.length - 1);
}