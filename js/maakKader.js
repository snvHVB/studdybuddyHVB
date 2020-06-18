
let bedrijf = new Array();
let functie = new Array();
let locatie = new Array();
let velden2;
let locatieFilter;
let teller2 = 0;

fetch('https://api.airtable.com/v0/app5skk11zC7IPHsf/Bedrijf toevoegen' , {
    headers: {
        'Authorization': 'Bearer keycv80JijJA3htEv'
    }
})
    .then(response => response.json())
    .then(data => {
        velden = data.records
        opvullen(velden);

    });

fetch('https://api.airtable.com/v0/app5skk11zC7IPHsf/Filteren' , {
    headers: {
        'Authorization': 'Bearer keycv80JijJA3htEv'
    }
})
    .then(response => response.json())
    .then(data => {
        velden2 = data.records
        locatieFilter = velden2[0].fields.Locatie;
        console.log(locatieFilter);
    });

document.getElementById('kruis').addEventListener("click", function(){
    let imgReplace = document.getElementsByClassName("foto2")[0];
    imgReplace.src = "img/fototoevoegen.png";
    document.getElementById('bedrijfsnaam').innerHTML = bedrijf[teller2];
    document.getElementById('funtie').innerHTML = functie[teller2];
    document.getElementById('locatie').innerHTML = locatie[teller2];
    let data = {
        "records": [{
            "Bedrijfsnaam": bedrijf[teller2],
            "fields": {
                "boolean": "false"
            }
        }]
    };
    fetch('https://api.airtable.com/v0/app5skk11zC7IPHsf/Bedrijf toevoegen' , {
        method: 'PATCH',
        headers: {
            'Authorization': 'Bearer keycv80JijJA3htEv',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if (bedrijf[teller2] === undefined){
        alert("Geen bedrijven meer gevonden.")
    }
    teller2++;
});

document.getElementById('hart').addEventListener('click', function(){
    let imgReplace = document.getElementsByClassName("foto2")[0];
    imgReplace.src = "img/fototoevoegen.png";
    document.getElementById('bedrijfsnaam').innerHTML = bedrijf[teller2];
    document.getElementById('funtie').innerHTML = functie[teller2];
    document.getElementById('locatie').innerHTML = locatie[teller2];
    let data = {
        "records": [{
            "Bedrijfsnaam": bedrijf[teller2],
            "fields": {
                "boolean": "true"
            }
        }]
    };
    fetch('https://api.airtable.com/v0/app5skk11zC7IPHsf/Bedrijf toevoegen' , {
        method: 'PATCH',
        headers: {
            'Authorization': 'Bearer keycv80JijJA3htEv',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if (bedrijf[teller2] === undefined){
        alert("Geen bedrijven meer gevonden.");
    }
    console.log(bedrijf[teller2]);
    teller2++;
});

function opvullen(velden){
    let teller = 0;
    for (let i = 0; i < velden.length; i++){
        if (velden[i].fields.Locatie === locatieFilter ){
            bedrijf[teller] = velden[i].fields.Bedrijfsnaam;
            functie[teller] = velden[i].fields.Functie;
            locatie[teller] = velden[i].fields.Locatie;
            teller++;
        }
    }
}

