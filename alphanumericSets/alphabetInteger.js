const upperLettersAlphabetSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerLettersAlphabetSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let lettersAlphabetSet = [];

let lettersAlphabetSetExample = [];
let lettersAlphabetSetExampleImg = [];

let currentLetter = 0;

const letter = window.document.getElementsByClassName("letter")[0];
const letterExample = window.document.getElementsByClassName("letterExample")[0];

function selectCase() {
    const radCase = window.document.getElementsByName("radCase");
    const upperCase = radCase[0];
    const lowerCase = radCase[1];

    const firstLetter = window.document.getElementById("firstLetter");
    const lastLetter = window.document.getElementById("lastLetter");

    lettersAlphabetSet = verifyCase(upperCase, lowerCase)[0];
    lettersAlphabetSetExample = verifyExampleCase(verifyCase(upperCase, lowerCase)[1]);
    lettersAlphabetSetExampleImg = verifyExampleImg();

    currentLetter = 0;

    letter.innerHTML = `<h2><span>${lettersAlphabetSet[currentLetter]}</span></h2>`;

    letterExample.innerHTML = `<img src="../alphabetLettersImg/${verifyExampleImg()}" class="img">`;
    letterExample.innerHTML += `<p>${lettersAlphabetSetExample[currentLetter]}</p>`;

    firstLetter.innerHTML = `<p>${lettersAlphabetSet[0]}</p>`;
    lastLetter.innerHTML = `<p>${lettersAlphabetSet[lettersAlphabetSet.length - 1]}</p>`;
}

function goPreviousLetter() {
    if (verifyPreviousLetter()) {
        currentLetter--;
        letter.innerHTML = `<h2><span>${lettersAlphabetSet[currentLetter]}</span></h2>`;
        letterExample.innerHTML = `<img src="../alphabetLettersImg/${verifyExampleImg()}" class="img">`;
        letterExample.innerHTML += `<p>${lettersAlphabetSetExample[currentLetter]}</p>`;
    }
}

function goNextLetter() {
    if (verifyNextLetter()) {
        currentLetter++;
        letter.innerHTML = `<h2><span>${lettersAlphabetSet[currentLetter]}</span></h2>`;
        letterExample.innerHTML = `<img src="../alphabetLettersImg/${verifyExampleImg()}" class="img">`;
        letterExample.innerHTML += `<p>${lettersAlphabetSetExample[currentLetter]}</p>`;
    }
}

function goFirstLetter() {
    currentLetter = 0;
    letter.innerHTML = `<h2><span>${lettersAlphabetSet[currentLetter]}</span></h2>`;
    letterExample.innerHTML = `<img src="../alphabetLettersImg/${verifyExampleImg()}" class="img">`;
    letterExample.innerHTML += `<p>${lettersAlphabetSetExample[currentLetter]}</p>`;
}

function goLastLetter() {
    currentLetter = lettersAlphabetSet.length - 1;
    letter.innerHTML = `<h2><span>${lettersAlphabetSet[currentLetter]}</span></h2>`;
    letterExample.innerHTML = `<img src="../alphabetLettersImg/${verifyExampleImg()}" class="img">`;
    letterExample.innerHTML += `<p>${lettersAlphabetSetExample[currentLetter]}</p>`;
}

function verifyCase(upperCase, lowerCase) {
    if (upperCase.checked) return [upperLettersAlphabetSet, 1];
    else if (lowerCase.checked) return [lowerLettersAlphabetSet, 0];
}

function verifyExampleCase(resultVerifyCase) {
    if (resultVerifyCase) return ["<span>A</span>belha", "<span>B</span>ola", "<span>C</span>achorro", "<span>D</span>inossauro", "<span>E</span>lefante", "<span>F</span>oca", "<span>G</span>ato", "<span>H</span>ipopótamo", "<span>I</span>greja", "<span>J</span>acaré", "<span>K</span>iwi", "<span>L</span>imão", "<span>M</span>acaco", "<span>N</span>avio", "<span>O</span>vo", "<span>P</span>ato", "<span>Q</span>ueijo", "<span>R</span>elógio", "<span>S</span>apo", "<span>T</span>atu", "<span>U</span>va", "<span>V</span>aca", "<span>W</span>afer", "<span>X</span>ícara", "<span>Y</span>outube", "<span>Z</span>ebra"];
    return ["<span>a</span>belha", "<span>b</span>ola", "<span>c</span>achorro", "<span>d</span>inossauro", "<span>e</span>lefante", "<span>f</span>oca", "<span>g</span>ato", "<span>h</span>ipopótamo", "<span>i</span>greja", "<span>j</span>acaré", "<span>k</span>iwi", "<span>l</span>imão", "<span>m</span>acaco", "<span>n</span>avio", "<span>o</span>vo", "<span>p</span>ato", "<span>q</span>ueijo", "<span>r</span>elógio", "<span>s</span>apo", "<span>t</span>atu", "<span>u</span>va", "<span>v</span>aca", "<span>w</span>afer", "<span>x</span>ícara", "<span>y</span>outube", "<span>z</span>ebra"];
}

function verifyExampleImg() {
    switch (currentLetter) {
        case 0:
            return "Abelha.png";
        case 1:
            return "Bola.png";
        case 2:
            return "Cachorro.png";
        case 3:
            return "Dinossauro.png";
        case 4:
            return "Elefante.png";
        case 5:
            return "Foca.png";
        case 6:
            return "Gato.png";
        case 7:
            return "Hipopotamo.png";
        case 8:
            return "Igreja.png";
        case 9:
            return "Jacare.png";
        case 10:
            return "Kiwi.png";
        case 11:
            return "Limao.png";
        case 12:
            return "Macaco.png";
        case 13:
            return "Navio.png";
        case 14:
            return "Ovo.png";
        case 15:
            return "Pato.png";
        case 16:
            return "Queijo.png";
        case 17:
            return "Relogio.png";
        case 18:
            return "Sapo.png";
        case 19:
            return "Tatu.png";
        case 20:
            return "Uva.png";
        case 21:
            return "Vaca.png";
        case 22:
            return "Wafer.png";
        case 23:
            return "Xicara.png";
        case 24:
            return "Youtube.png";
        case 25:
            return "Zebra.png";
    }
}

function verifyPreviousLetter() {
    return (currentLetter - 1 >= 0)
}

function verifyNextLetter() {
    return (currentLetter + 1 <= lettersAlphabetSet.length - 1)
}
