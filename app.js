//Mitarbeiter 1
let htmlObj = document.getElementById("steckbrief1");
htmlObj.innerHTML =
    `<strong>Tierheimtätigkeit:</strong> ${mitarbeiter1.profession}<br>` +
    `<strong>Ausbildung:</strong> ${mitarbeiter1.ausbildung}<br>` +
    `<strong>Haustier:</strong> ${mitarbeiter1.firstname} hat selbst ${mitarbeiter1.Haustier} als Haustier <br>`;

htmlObj = document.getElementById("mitarbeiter1");
htmlObj.innerHTML =
    `${mitarbeiter1.firstname} ` +
    `${mitarbeiter1.lastname}<br>`;

htmlObj = document.getElementById("besschrieb1");
htmlObj.innerHTML =
    `${mitarbeiter1.showMore} `;

htmlObj = document.getElementById("kontakt1");
htmlObj.innerHTML =
    `<br><strong>Telefon:</strong> ${mitarbeiter1.kontakt.telefon} <br>` +
    `<strong>Email:</strong> ${mitarbeiter1.kontakt.email} <br>`;

//Show more / Show less
let content = document.getElementById("besschrieb1");
let button = document.getElementById("show-more1");

button.onclick = function () {
    if (content.className == "open") {
        //shrink the box
        content.className = "close";
        button.innerHTML = "Show More";
    } else {
        //expand the box
        content.className = "open";
        button.innerHTML = "Show Less";
    }
}

//Bild wechseln
let xchange = 1;

function changePicture1() {
    let current = document.getElementById("pic1");

    if (xchange) {
        current.src = "assets/bild09.png"
        xchange = 0;
    } else {
        current.src = "assets/bild10.png"
        xchange = 1;
    }
}

//Mitarbeiter 2

htmlObj = document.getElementById("mitarbeiter2");
htmlObj.innerHTML =
    `${mitarbeiter2.firstname} ` +
    `${mitarbeiter2.lastname}<br>`;

htmlObj = document.getElementById("steckbrief2");
htmlObj.innerHTML =
    `<strong>Tierheimtätigkeit:</strong> ${mitarbeiter2.profession}<br>` +
    `<strong>Ausbildung:</strong> ${mitarbeiter2.ausbildung}<br>` +
    `<strong>Haustier:</strong> ${mitarbeiter2.firstname} hat selbst ${mitarbeiter2.Haustier} als Haustier <br>`

htmlObj = document.getElementById("besschrieb2");
htmlObj.innerHTML =
    `${mitarbeiter2.showMore} `;

htmlObj = document.getElementById("kontakt2");
htmlObj.innerHTML =
    `<br><strong>Telefon:</strong> ${mitarbeiter2.kontakt.telefon} <br>` +
    `<strong>Email:</strong> ${mitarbeiter2.kontakt.email} <br>`;

//Show more / Show less
let content2 = document.getElementById("besschrieb2");
let button2 = document.getElementById("show-more2");

button2.onclick = function () {
    if (content2.className == "open") {
        //shrink the box
        content2.className = "close";
        button2.innerHTML = "Show More";
    } else {
        //expand the box
        content2.className = "open";
        button2.innerHTML = "Show Less";
    }
}

//Bild wechseln (abgeändert von Lehrer wegen mehreren Bildern)
let xchange2 = 1;

function changePicture2() {
    let current2 = document.getElementById("pic2");

    if (xchange2) {
        current2.src = "assets/bild05.png"
        xchange2 = 0;
    } else {
        current2.src = "assets/bild06.png"
        xchange2 = 1;
    }
}

//Mitarbeiter 3

htmlObj = document.getElementById("mitarbeiter3");
htmlObj.innerHTML =
    `${mitarbeiter3.firstname} ` +
    `${mitarbeiter3.lastname}<br>`;

htmlObj = document.getElementById("steckbrief3");
htmlObj.innerHTML =
    `<strong>Tierheimtätigkeit:</strong> ${mitarbeiter3.profession}<br>` +
    `<strong>Ausbildung:</strong> ${mitarbeiter3.ausbildung}<br>` +
    `<strong>Haustier:</strong> ${mitarbeiter3.firstname} hat selbst ${mitarbeiter3.Haustier} als Haustier <br>`

htmlObj = document.getElementById("besschrieb3");
htmlObj.innerHTML =
    `${mitarbeiter3.showMore} `;

htmlObj = document.getElementById("kontakt3");
htmlObj.innerHTML =
    `<br><strong>Telefon:</strong> ${mitarbeiter3.kontakt.telefon} <br>` +
    `<strong>Email:</strong> ${mitarbeiter3.kontakt.email} <br>`;

//Show more / Show less
let content3 = document.getElementById("besschrieb3");
let button3 = document.getElementById("show-more3");

button3.onclick = function () {
    if (content3.className == "open") {
        //shrink the box
        content3.className = "close";
        button3.innerHTML = "Show More";
    } else {
        //expand the box
        content3.className = "open";
        button3.innerHTML = "Show Less";
    }
}

//Bild wechseln (abgeändert von Lehrer wegen mehreren Bildern)
let xchange3 = 1;

function changePicture3() {
    let current3 = document.getElementById("pic3");

    if (xchange3) {
        current3.src = "assets/bild07.png"
        xchange3 = 0;
    } else {
        current3.src = "assets/bild08.png"
        xchange3 = 1;
    }
}

//Mitarbeiter 4

htmlObj = document.getElementById("mitarbeiter4");
htmlObj.innerHTML =
    `${mitarbeiter4.firstname} ` +
    `${mitarbeiter4.lastname}<br>`;

htmlObj = document.getElementById("steckbrief4");
htmlObj.innerHTML =
    `<strong>Tierheimtätigkeit:</strong> ${mitarbeiter4.profession}<br>` +
    `<strong>Ausbildung:</strong> ${mitarbeiter4.ausbildung}<br>` +
    `<strong>Haustier:</strong> ${mitarbeiter4.firstname} hat selbst ${mitarbeiter4.Haustier} als Haustier <br>`

htmlObj = document.getElementById("besschrieb4");
htmlObj.innerHTML =
    `${mitarbeiter4.showMore} `;

htmlObj = document.getElementById("kontakt4");
htmlObj.innerHTML =
    `<br><strong>Telefon:</strong> ${mitarbeiter4.kontakt.telefon} <br>` +
    `<strong>Email:</strong> ${mitarbeiter4.kontakt.email} <br>`;

//Show more / Show less
let content4 = document.getElementById("besschrieb4");
let button4 = document.getElementById("show-more4");

button4.onclick = function () {
    if (content4.className == "open") {
        //shrink the box
        content4.className = "close";
        button4.innerHTML = "Show More";
    } else {
        //expand the box
        content4.className = "open";
        button4.innerHTML = "Show Less";
    }
}

//Bild wechseln (abgeändert von Lehrer wegen mehreren Bildern)
let xchange4 = 1;

function changePicture4() {
    let current4 = document.getElementById("pic4");

    if (xchange4) {
        current4.src = "assets/bild03.png"
        xchange4 = 0;
    } else {
        current4.src = "assets/bild04.png"
        xchange4 = 1;
    }
}

filterSelection("all")

function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

//objekt Literale
let adress = {
    street: "Tierheimstrasse 23",
    city: "8400 Winterthur",
    country: "Schweiz",
    getfulladress() {
        return `${this.street} <br> ${this.city} <br> ${this.country}`;
    }
}

htmlObj = document.getElementById("adress");
htmlObj.innerHTML =
    `${adress.getfulladress()} <br>`;

let kontact = {
    telefon: "052 253 35 43",
    email: "rosenberg@neuetierhilfe.ch",
    verein: "Neue Tierhilfe Schweiz",
    getfullkontact() {
        return `${this.telefon} <br> ${this.email} <br> ${this.verein}`;
    }
}

htmlObj = document.getElementById("kontact");
htmlObj.innerHTML =
    `${kontact.getfullkontact()} <br>`;