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

    let laatsteBericht = records.length - 1;
    for (let i = 0; i < records.length; i++) {
        let is_ID = records[i].fields.ID;
        if (is_ID === 'USER_TEST') {

            naam = records[laatsteBericht].fields.naam;
            foto = records[laatsteBericht].fields.img;
            message = records[laatsteBericht].fields.bericht;
            time = records[laatsteBericht].fields.tijd;


        }

    }
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








