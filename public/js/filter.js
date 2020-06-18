; (function () {
    'use strict';

    window.addEventListener('load', function () {
        document.getElementById('filterForm').setAttribute('novalidate', 'novalidate');

        //slider
        var slider = document.getElementById("myRange");
        var output = document.getElementById("output");
        output.innerHTML = slider.value + "km";
        slider.oninput = function () {
            output.innerHTML = this.value + "km";
        }

        document.getElementById('filterForm').addEventListener('submit', function (e) {
            e.preventDefault();
            e.stopPropagation();

            var isValid = true;

            //errors
            var errStudierichting = document.getElementById('errStudierichting');
            var errKeuzeLocatie = document.getElementById('errKeuzeLocatie');
            var errVacature = document.getElementById('errVacature');
            var errMinimumLoon = document.getElementById('errMinimumLoon');

            //inputs
            var studierichting = document.getElementById('studierichting');
            var keuzeLocatie = document.getElementById('keuzeLocatie');
            var vacature = document.getElementById('vacature');
            var zoekradius = document.getElementById('output');
            var minimumLoon = document.getElementById('minimumLoon');

            if (studierichting.value == '') {
                isValid = false;
                errStudierichting.innerHTML = 'gelieve een studierichting te kiezen';
                errStudierichting.style.display = 'block';
            }
            if (keuzeLocatie.value == '') {
                isValid = false;
                errKeuzeLocatie.innerHTML = 'gelieve een locatie te kiezen';
                errKeuzeLocatie.style.display = 'block';
            }
            if (vacature.value == '') {
                isValid = false;
                errVacature.innerHTML = 'gelieve een vacature te kiezen';
                errVacature.style.display = 'block';
            }
            if (minimumLoon.value == '') {
                isValid = false;
                errMinimumLoon.innerHTML = 'gelieve een minimum loon te geven';
                errMinimumLoon.style.display = 'block';
            }

            if (isValid == false) {
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
    });
})();