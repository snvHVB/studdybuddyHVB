; (function () {//Dries Fierens
    'use strict';

    window.addEventListener('load', function () {
        document.getElementById('bedrijfsForm').setAttribute('novalidate', 'novalidate');

        document.getElementById('bedrijfsForm').addEventListener('submit', function (e) {
            e.preventDefault();
            e.stopPropagation();

            let isValid = true;

            //errors
            let errBedrijfsnaam = document.getElementById('errBedrijfsnaam');
            let errLocatie = document.getElementById('errLocatie');
            let errSoortVacature = document.getElementById('errSoortVacature');
            let errStudierichting = document.getElementById('errStudierichting');
            let errBeschrijving = document.getElementById('errBeschrijving');
            let errLoon = document.getElementById('errLoon');
            let errFunctie = document.getElementById('errFunctie');

            //inputs
            let bedrijfsnaam = document.getElementById('bedrijfsnaam');
            let locatie = document.getElementById('locatie');
            let soortVacature = document.getElementById('soortVacature');
            let studierichting = document.getElementById('studierichting');
            let beschrijving = document.getElementById('beschrijving');
            let loon = document.getElementById('loon');
            let functie = document.getElementById('functie');

            if (bedrijfsnaam.value == '') {
                isValid = false;
                errBedrijfsnaam.innerHTML = 'gelieve een bedrijfsnaam in te vullen';
                errBedrijfsnaam.style.display = 'block';
            }
            if (locatie.value == '') {
                isValid = false;
                errLocatie.innerHTML = 'gelieve de locatie van het bedrijf in te vullen';
                errLocatie.style.display = 'block';
            }
            if (soortVacature.value == '') {
                isValid = false;
                errSoortVacature.innerHTML = 'gelieve een soort vacature te kiezen';
                errSoortVacature.style.display = 'block';
            }
            if (studierichting.value == '') {
                isValid = false;
                errStudierichting.innerHTML = 'gelieve een studierichting te kiezen';
                errStudierichting.style.display = 'block';
            }
            if (beschrijving.value == '') {
                isValid = false;
                errBeschrijving.innerHTML = 'gelieve een beschrijving te geven van de job';
                errBeschrijving.style.display = 'block';
            }
            if (functie.value == '') {
                isValid = false;
                errFunctie.innerHTML = 'gelieve een functie voor de werkzoekende te geven';
                errFunctie.style.display = 'block';
            }
            if (loon.value == '') {
                if (loon.style.display == 'block') {
                    isValid = false;
                    errLoon.innerHTML = 'gelieve een loon in te vullen'
                    errLoon.style.display = 'block';
                }
            }

            if (isValid == true) {
                let data = {
                    "records": [{
                        "fields": {
                            "Bedrijfsnaam": bedrijfsnaam.value,
                            "Locatie": locatie.value,
                            "Soort vacature": soortVacature.value,
                            "Studierichting": studierichting.value,
                            "Initialen": getInitialen(bedrijfsnaam.value),
                            "Loon": loon.value,
                            "Functie": functie.value,
                            "Beschrijving": beschrijving.value
                        }
                    }]
                };
                console.log(data);
                fetch('https://api.airtable.com/v0/app5skk11zC7IPHsf/Bedrijf%20toevoegen', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer keynkmrJqU35kttvZ',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(response => response.json())
                    .then(() => alert("De job is succesvol toegevoegd aan onze website"))
            } else {
                window.scrollTo(0, 0);
            }
        });
    });

    function getInitialen(naam) {
        let up = "";

        for (let j = 0; j < naam.length; j++) {
            if (naam.charAt(j) == ' ' || naam.charAt(j) == '-' || naam.charAt(j) == '.' || naam.charAt(j) == '&') {
                naam = naam.replace(naam.charAt(j), "");
            }
        }

        for (let i = 0; i < naam.length; i++) {
            let char = naam.charAt(i);
            if (char == char.toUpperCase()) {
                up = up + char;
            }
        }

        if (up == "") {
            let letters = naam.substring(0, 3);
            for (let i = 0; i < letters.length; i++) {
                up = up + letters.charAt(i).toUpperCase();
            }
        }

        if (up.length > 3) {
            up = up.substring(0, 3);
        }
        return up;
    }

    document.getElementById('soortVacature').addEventListener('change', function () {
        if (soortVacature.value == 'Stages') {
            document.getElementById('displayed').style.display = 'none';
        }else{
            document.getElementById('displayed').style.display = 'block';
        }
    });
})();