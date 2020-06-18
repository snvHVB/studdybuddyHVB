let naam = '';
let foto = '';
let message = '';
let time = '';

fetch('https://api.airtable.com/v0/app5skk11zC7IPHsf/berichten', {
    headers: {
        'Authorization': 'Bearer keybA52rEqXKwKAAo'
    }
})
    .then(response => response.json())
    .then(data => {
        let records = data.records
        getInfo(records)
    })

function getInfo(records) {

    let laatstemessageID = 0;

    for (let i = 0; i < records.length; i++) {

        let is_ID = records[i].fields.ID;
        if (is_ID === 'USER_TEST') {

            if (laatstemessageID < records[i].fields.messageID) {
                laatstemessageID = records[i].fields.messageID;
            }

        }
    }

    naam = records[laatstemessageID].fields.naam;
    foto = records[laatstemessageID].fields.img;
    message = records[laatstemessageID].fields.bericht;
    time = records[laatstemessageID].fields.tijd;

    let bericht = document.createElement('a');
    bericht.href = "chatpage.html"
    bericht.innerHTML =
        '<div class="container">' +
        '<img src="' + foto + '" alt="Avatar">' +
        '<span>' + naam + '</span>' +
        '<p>' + message + '</p>' +
        '<span class="time-right">' + time + '</span>' +
        '</div>';
    document.getElementById('gesprekken').appendChild(bericht);
}




