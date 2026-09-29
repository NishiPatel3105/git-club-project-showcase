// ===== THEME =====

let themeButton = document.getElementById("themeBtn");

if (themeButton) {

    themeButton.onclick = function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            themeButton.innerText = "☀️";
        } else {
            themeButton.innerText = "🌙";
        }

    };

}


// ===== SEARCH =====

let searchBox = document.getElementById("search");

if (searchBox) {

    searchBox.onkeyup = function () {

        let text = searchBox.value.toLowerCase();

        let cards = document.querySelectorAll(".card");

        cards.forEach(function (card) {

            let project = card.innerText.toLowerCase();

            if (project.includes(text)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    };

}


// ===== FILTER =====

function filterProjects(type) {

    let cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {

        if (type === "all" ||
            card.dataset.type === type) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// ===== SHOW PROJECT =====

function showProject(name, description) {

    document.getElementById("projectTitle").innerText = name;

    document.getElementById("projectDescription").innerText = description;

    document.getElementById("popup").style.display = "flex";

}


// ===== CLOSE PROJECT =====

function closeProject() {

    document.getElementById("popup").style.display = "none";

}