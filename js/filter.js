; (function () {
    'use strict';

    window.addEventListener('load', function () {
        document.getElementById('filterForm').setAttribute('novalidate', 'novalidate');

        //slider
        let slider = document.getElementById("myRange");
        let output = document.getElementById("output");
        output.innerHTML = slider.value + "km";
        slider.oninput = function () {
            output.innerHTML = this.value + "km";
        }

        locaties();

        document.getElementById('filterForm').addEventListener('submit', function (e) {
            e.preventDefault();
            e.stopPropagation();

            let isValid = true;

            //errors
            let errStudierichting = document.getElementById('errStudierichting');
            let errKeuzeLocatie = document.getElementById('errKeuzeLocatie');
            let errVacature = document.getElementById('errVacature');
            let errMinimumLoon = document.getElementById('errMinimumLoon');

            //inputs
            let studierichting = document.getElementById('studierichting');
            let keuzeLocatie = document.getElementById('keuzeLocatie');
            let vacature = document.getElementById('vacature');
            let zoekradius = document.getElementById('output');
            let minimumLoon = document.getElementById('minimumLoon');

            if (studierichting.value === '') {
                isValid = false;
                errStudierichting.innerHTML = 'gelieve een studierichting te kiezen';
                errStudierichting.style.display = 'block';
            }
            if (keuzeLocatie.value === '') {
                isValid = false;
                errKeuzeLocatie.innerHTML = 'gelieve een locatie te kiezen';
                errKeuzeLocatie.style.display = 'block';
            }
            if (vacature.value === '') {
                isValid = false;
                errVacature.innerHTML = 'gelieve een vacature te kiezen';
                errVacature.style.display = 'block';
            }
            if (minimumLoon.value === '') {
                isValid = false;
                errMinimumLoon.innerHTML = 'gelieve een minimum loon te geven';
                errMinimumLoon.style.display = 'block';
            }

            if (isValid === false) {
                window.scrollTo(0, 0);
            }else{
                let data = {
                    "records": [{
                        "id": "rec76FTTdqyMUlbFS", //zorgt ervoor dat alleen de eerste record word aangepast
                        "fields": {
                            "Studierichting": studierichting.value,
                            "Locatie": keuzeLocatie.value,
                            "Soort vacature": vacature.value,
                            "Zoekradius": zoekradius.innerHTML,
                            "Minimum loon": minimumLoon.value
                        }
                    }]
                };
                console.log(data);
                fetch('https://api.airtable.com/v0/app5skk11zC7IPHsf/Filteren', {
                    method: 'PATCH',
                    headers: {
                        'Authorization': 'Bearer keynkmrJqU35kttvZ',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(response => response.json())
                    .then(() => alert("De aangeboden jobs zijn nu gefilterd"))
            }
        });

        function locaties() {
            fetch('https://api.airtable.com/v0/app5skk11zC7IPHsf/Bedrijf%20toevoegen', {
                headers: {
                    Authorization: 'Bearer keynkmrJqU35kttvZ'
                }
            })
                .then(response => response.json())
                .then(data => {
                    let records = data.records
                    let locaties = new Array();
                    for (let i = 0; i < records.length; i++) {
                        if (!(locaties.includes(records[i].fields.Locatie))) {
                            locaties.push(records[i].fields.Locatie);
                        }
                    }

                    for (let j = 0; j < locaties.length; j++) {
                        let selectLocatie = document.getElementById('keuzeLocatie');
                        let option = document.createElement("option");
                        option.text = locaties[j];
                        selectLocatie.add(option);
                    }
                });
        }
    });
})();