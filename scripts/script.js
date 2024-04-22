
// Knapper til de forskellige muligheder af valg
const jordenBtn = document.getElementById('jorden-btn');
const solenBtn = document.getElementById('solen-btn');
const marsBtn = document.getElementById('mars-btn');
const venusBtn = document.getElementById('venus-btn');
const saturnBtn = document.getElementById('saturn-btn');
const jupiterBtn = document.getElementById('jupiter-btn');
const uranusBtn = document.getElementById('uranus-btn');
const neptunBtn = document.getElementById('neptun-btn');
const merkurBtn = document.getElementById('merkur-btn');

// Sektioner af de forskellige planeter
const solenSektion = document.querySelector('.solen-section')
const venusSektion = document.querySelector('.venus-section');
const saturnSektion = document.querySelector('.saturn-section');
const jupiterSektion = document.querySelector('.jupiter-section');
const uranusSektion = document.querySelector('.uranus-section');
const neptunSektion = document.querySelector('.neptun-section');
const merkurSektion = document.querySelector('.merkur-section');
const marsSektion = document.querySelector('.mars-section');
const jordenSektion = document.querySelector('.jorden-section');

// Elementer der fader ud inden planeterne

// Solen elementer
const solenNavigation = document.querySelector('.solen-overview')
const solenNext = document.querySelector('.solen-next-planet')
const solenInfo = document.querySelector('.info-section-solen')

// Jorden elementer
const jordenNavigation = document.querySelector('.overview');
const planetChoice = document.querySelector('.next-planet');
const planetInfo = document.querySelector('.info-section-earth');

// Mars elementer
const marsInfo = document.querySelector('.info-section-mars');
const marsNavigation = document.querySelector('.mars-overview');
const marsNext = document.querySelector('.mars-next-planet')

// Venus elementer
const venusNavigation = document.querySelector('.venus-overview')
const venusNext = document.querySelector('.venus-next-planet')
const venusInfo = document.querySelector('.info-section-venus')

// Merkur elementer
const merkurNavigation = document.querySelector('.merkur-overview')
const merkurNext = document.querySelector('.merkur-next-planet')
const merkurInfo = document.querySelector('.info-section-merkur')


// Saturn elementer
const saturnNavigation = document.querySelector('.saturn-overview')
const saturnNext = document.querySelector('.saturn-next-planet')
const saturnInfo = document.querySelector('.info-section-saturn')


// Jupiter elementer
const jupiterNavigation = document.querySelector('.jupiter-overview')
const jupiterNext = document.querySelector('.jupiter-next-planet')
const jupiterInfo = document.querySelector('.info-section-jupiter')


// Uranus elementer
const uranusNavigation = document.querySelector('.uranus-overview')
const uranusNext = document.querySelector('.uranus-next-planet')
const uranusInfo = document.querySelector('.info-section-uranus')


// Neptun elementer
const neptunNavigation = document.querySelector('.neptun-overview')
const neptunNext = document.querySelector('.neptun-next-planet')
const neptunInfo = document.querySelector('.info-section-neptun')


// Animationer

const fadeOut = [
    { opacity: "1" },
    { opacity: "0" },
];

const fadeOutDuration = {
    duration: 1000,
    fill: "both"
};

const transitionUd = ({
    opacity: [1, 0],
    transform: ["translate(-1500px, 600px)"],
    scale: [1, 0]
})

const transitionUdDuration = {
    duration: 1500,
    delay: 400,
    fill: "both",
    easing: "ease-in"
}

const transitionInd = ({
    opacity: [0, 1],
    transform: ["translate(1500px, -600px)", "translate(0, 0)"],
    scale: [0, 1]
})

const transitionIndDuration = {
    duration: 3500,
    fill: "both",
    delay: 1000,
    easing: "ease-out"
}

let isAnimating = false;

solenBtn.onclick = function () { 
    if (isAnimating) return;
    isAnimating = true;

    jordenNavigation.animate(fadeOut, fadeOutDuration)
    planetChoice.animate(fadeOut, fadeOutDuration)
    planetInfo.animate(fadeOut, fadeOutDuration).onfinish = function () {
        shuttle.animate(shuttleAnimation, shuttleAnimationTiming)
    }
        .onfinish = function () {
            isAnimating = false;

            jordenSektion.animate(transitionUd, transitionUdDuration).onfinish = function () {
                jordenSektion.style.visibility = "hidden";
                solenSektion.style.display = "flex";
                solenSektion.animate(transitionInd, transitionIndDuration)
            }
        }
    isAnimating = false;
}

merkurBtn.onclick = function () {
    if (isAnimating) return;
    isAnimating = true;

    solenNavigation.animate(fadeOut, fadeOutDuration)
    solenNext.animate(fadeOut, fadeOutDuration)
    solenInfo.animate(fadeOut, fadeOutDuration).onfinish = function () {
        isAnimating = false;

        solenSektion.animate(transitionUd, transitionUdDuration).onfinish = function () {
            solenSektion.style.visibility = "hidden";
            merkurSektion.style.display = "flex";
            merkurSektion.animate(transitionInd, transitionIndDuration)
        }
    }
    isAnimating = false;
}

venusBtn.onclick = function () {
    if (isAnimating) return;
    isAnimating = true;

    merkurNavigation.animate(fadeOut, fadeOutDuration)
    merkurInfo.animate(fadeOut, fadeOutDuration)
    merkurNext.animate(fadeOut, fadeOutDuration).onfinish = function () {
        isAnimating = false;

        merkurSektion.animate(transitionUd, transitionUdDuration).onfinish = function () {
            merkurSektion.style.visibility = "hidden";
            venusSektion.style.display = "flex";
            venusSektion.animate(transitionInd, transitionIndDuration)
        }
    }
    isAnimating = false;
}

marsBtn.onclick = function () { 
    if (isAnimating) return;
    isAnimating = true;

    venusNavigation.animate(fadeOut, fadeOutDuration)
    venusNext.animate(fadeOut, fadeOutDuration)
    venusInfo.animate(fadeOut, fadeOutDuration).onfinish = function () {
        shuttle.animate(shuttleAnimation, shuttleAnimationTiming)
    }
        .onfinish = function () {
            isAnimating = false;

            venusSektion.animate(transitionUd, transitionUdDuration).onfinish = function () {
                venusSektion.style.visibility = "hidden";
                marsSektion.style.display = "flex";
                marsSektion.animate(transitionInd, transitionIndDuration)
            }
        }
    isAnimating = false;
}

jupiterBtn.onclick = function () {
    if (isAnimating) return;
    isAnimating = true;

    marsNavigation.animate(fadeOut, fadeOutDuration)
    marsNext.animate(fadeOut, fadeOutDuration)
    marsInfo.animate(fadeOut, fadeOutDuration).onfinish = function () {
        isAnimating = false;

        marsSektion.animate(transitionUd, transitionUdDuration).onfinish = function () {
            marsSektion.style.visibility = "hidden";
            jupiterSektion.style.display = "flex";
            jupiterSektion.animate(transitionInd, transitionIndDuration)
        }
    }
    isAnimating = false;
}

saturnBtn.onclick = function () {
    if (isAnimating) return;
    isAnimating = true;

    jupiterNavigation.animate(fadeOut, fadeOutDuration)
    jupiterNext.animate(fadeOut, fadeOutDuration)
    jupiterInfo.animate(fadeOut, fadeOutDuration).onfinish = function () {
        isAnimating = false;

        jupiterSektion.animate(transitionUd, transitionUdDuration).onfinish = function () {
            jupiterSektion.style.visibility = "hidden";
            saturnSektion.style.display = "flex";
            saturnSektion.animate(transitionInd, transitionIndDuration)
        }
    }
    isAnimating = false;
}


uranusBtn.onclick = function () {
    if (isAnimating) return;
    isAnimating = true;

    saturnNavigation.animate(fadeOut, fadeOutDuration)
    saturnNext.animate(fadeOut, fadeOutDuration)
    saturnInfo.animate(fadeOut, fadeOutDuration).onfinish = function () {
        isAnimating = false;

        saturnSektion.animate(transitionUd, transitionUdDuration).onfinish = function () {
            saturnSektion.style.visibility = "hidden";
            uranusSektion.style.display = "flex";
            uranusSektion.animate(transitionInd, transitionIndDuration)
        }
    }
    isAnimating = false;
}

neptunBtn.onclick = function () {
    if (isAnimating) return;
    isAnimating = true;

    uranusNavigation.animate(fadeOut, fadeOutDuration)
    uranusNext.animate(fadeOut, fadeOutDuration)
    uranusInfo.animate(fadeOut, fadeOutDuration).onfinish = function () {
        isAnimating = false;

        uranusSektion.animate(transitionUd, transitionUdDuration).onfinish = function () {
            uranusSektion.style.visibility = "hidden";
            neptunSektion.style.display = "flex";
            neptunSektion.animate(transitionInd, transitionIndDuration)
        }
    }
    isAnimating = false;
}
