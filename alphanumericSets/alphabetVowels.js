const upperLettersVowelsSet = ["A", "E", "I", "O", "U"];
const lowerLettersVowelsSet = ["a", "e", "i", "o", "u"];
let lettersVowelsSet = [];

let lettersVowelsSetExample = [];
let lettersVowelsSetExampleImg = [];

let currentLetter = 0;

const letter = window.document.getElementsByClassName("letter")[0];
const letterExample = window.document.getElementsByClassName("letterExample")[0];

function selectCase() {
    const radCase = window.document.getElementsByName("radCase");
    const upperCase = radCase[0];
    const lowerCase = radCase[1];

    const firstLetter = window.document.getElementById("firstLetter");
    const lastLetter = window.document.getElementById("lastLetter");

    lettersVowelsSet = verifyCase(upperCase, lowerCase)[0];
    lettersVowelsSetExample = verifyExampleCase(verifyCase(upperCase, lowerCase)[1]);
    lettersVowelsSetExampleImg = verifyExampleImg();

    currentLetter = 0;

    letter.innerHTML = `<h2><span>${lettersVowelsSet[currentLetter]}</span></h2>`;

    letterExample.innerHTML = `<img src="../alphabetLettersImg/${verifyExampleImg()}" class="img">`;
    letterExample.innerHTML += `<p>${lettersVowelsSetExample[currentLetter]}</p>`;

    firstLetter.innerHTML = `<p>${lettersVowelsSet[0]}</p>`;
    lastLetter.innerHTML = `<p>${lettersVowelsSet[lettersVowelsSet.length - 1]}</p>`;
}

function goPreviousLetter() {
    if (verifyPreviousLetter()) {
        currentLetter--;
        letter.innerHTML = `<h2><span>${lettersVowelsSet[currentLetter]}</span></h2>`;
        letterExample.innerHTML = `<img src="../alphabetLettersImg/${verifyExampleImg()}" class="img">`;
        letterExample.innerHTML += `<p>${lettersVowelsSetExample[currentLetter]}</p>`;
    }
}

function goNextLetter() {
    if (verifyNextLetter()) {
        currentLetter++;
        letter.innerHTML = `<h2><span>${lettersVowelsSet[currentLetter]}</span></h2>`;
        letterExample.innerHTML = `<img src="../alphabetLettersImg/${verifyExampleImg()}" class="img">`;
        letterExample.innerHTML += `<p>${lettersVowelsSetExample[currentLetter]}</p>`;
    }
}

function goFirstLetter() {
    currentLetter = 0;
    letter.innerHTML = `<h2><span>${lettersVowelsSet[currentLetter]}</span></h2>`;
    letterExample.innerHTML = `<img src="../alphabetLettersImg/${verifyExampleImg()}" class="img">`;
    letterExample.innerHTML += `<p>${lettersVowelsSetExample[currentLetter]}</p>`;
}

function goLastLetter() {
    currentLetter = lettersVowelsSet.length - 1;
    letter.innerHTML = `<h2><span>${lettersVowelsSet[currentLetter]}</span></h2>`;
    letterExample.innerHTML = `<img src="../alphabetLettersImg/${verifyExampleImg()}" class="img">`;
    letterExample.innerHTML += `<p>${lettersVowelsSetExample[currentLetter]}</p>`;
}

function verifyCase(upperCase, lowerCase) {
    if (upperCase.checked) return [upperLettersVowelsSet, 1];
    else if (lowerCase.checked) return [lowerLettersVowelsSet, 0];
}

function verifyExampleCase(resultVerifyCase) {
    if (resultVerifyCase) return ["<span>A</span>belha", "<span>E</span>lefante", "<span>I</span>greja", "<span>O</span>vo", "<span>U</span>va"];
    return ["<span>a</span>belha", "<span>e</span>lefante", "<span>i</span>greja", "<span>o</span>vo", "<span>u</span>va"];
}

function verifyExampleImg() {
    switch (currentLetter) {
        case 0:
            return "Abelha.png";
        case 1:
            return "Elefante.png";
        case 2:
            return "Igreja.png";
        case 3:
            return "Ovo.png";
        case 4:
            return "Uva.png";
    }
}

function verifyPreviousLetter() {
    return (currentLetter - 1 >= 0);
}

function verifyNextLetter() {
    return (currentLetter + 1 <= lettersVowelsSet.length - 1);
}