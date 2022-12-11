window.addEventListener("load", function () {

    let form = document.getElementById("rocketSimulation");

    form.addEventListener("submit", function (event) {
        let testNameInput = document.getElementById("testName");
        let testDateInput = document.getElementById("testDate");
        let rocketTypeInput = document.getElementById("rocketType");
        let boosterCountInput = document.getElementById("boosterCount");
        let windRatingInput = document.getElementById("windRating");
        let productionServersInput = document.getElementById("productionServers");

        if (testNameInput.value === '' || testDateInput.value === '' || rocketTypeInput.value === '' ||
            boosterCountInput.value === '') {
            event.preventDefault();
            window.alert("You must complete all fields!")
        };
    });
});
