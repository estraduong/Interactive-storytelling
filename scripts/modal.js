// Variabler for åbne og lukkeknap og selve modalerne
const exploreMars = document.getElementById('mars-modal-btn');
const exploreEarth = document.getElementById('jorden-modal-btn');

const closeBtn = document.getElementById('mars-close')
const closeBtnEarth = document.getElementById('earth-close')

const marsModal = document.querySelector('.mars-modal')
const jordenModal = document.querySelector('.jorden-modal')

exploreMars.onclick = openModal;
exploreEarth.onclick = openModalEarth;
closeBtn.onclick = closeModal;
closeBtnEarth.onclick = closeModalEarth

// Jorden modal
function openModalEarth() {
    jordenModal.style.display = "flex";
}

function closeModalEarth() {
    jordenModal.style.display = "none"
}


// Mars modal
function openModal() {
    marsModal.style.display = "flex";
}

function closeModal() {
    marsModal.style.display = "none"
}


// Onclick event, hvis der bliver klikket udenfor modalets grænser lukkes det
window.onclick = function (event) {
    if (event.target == marsModal) {
        marsModal.style.display = "none";
    };
    if (event.target == jordenModal) {
        jordenModal.style.display = "none";
    }
}