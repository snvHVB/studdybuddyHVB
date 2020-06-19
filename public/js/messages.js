let name;
let img;
let tijd;
let bericht;

    document.getElementById('sender').addEventListener("click", function () {


    fetch('https://api.airtable.com/v0/app5skk11zC7IPHsf/profiel', {
        headers: {
            'Authorization': 'Bearer keybA52rEqXKwKAAo'
        }
    })
        .then(response => response.json())
        .then(data => {
            let records = data.records
            sendMessage(records)
        })

    function sendMessage(records) {
        for (let i = 0; i < records.length; i++) {
            let is_ID = records[i].fields.ID;
            if (is_ID === 'USER_TEST') {
                name = records[i].fields.naam;
                img = records[i].fields.img;


                let datum = new Date();
                let uren = datum.getHours();
                let minuten = datum.getMinutes();
                if (minuten < 10) {
                    minuten = '0' + minuten;
                }
                tijd = uren + ':' + minuten;

                bericht = document.getElementById('berichtSturen').value

                tijd = tijd.toString();

                if (bericht === '') {
                    document.getElementById('berichtSturen').placeholder = 'Geef een bericht in aub.';

                } else {
                    let data = {
                        "records": [{
                            "fields": {
                                "ID": 'USER_TEST',
                                "bericht": bericht,
                                "naam": naam,
                                "tijd": tijd,
                                "img": img,
                            }
                        }]
                    };

                    fetch('https://api.airtable.com/v0/app5skk11zC7IPHsf/berichten', {
                        method: 'POST',
                        headers: {
                            'Authorization': 'Bearer keybA52rEqXKwKAAo',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                }
            }
        }

    }

})
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

    let message_ID = new Array();

    for (let j = 0; j < records.length; j++) {

            let is_ID = records[j].fields.ID;
            if (is_ID === 'USER_TEST') {
            message_ID[j] = records[j].fields.messageID;


            }
        }
    message_ID = message_ID.sort(function(a, b){return a - b});

    for (let k = 0; k < records.length; k++){
        name = records[message_ID[k]-1].fields.naam;
        img = records[message_ID[k]-1].fields.img;
        bericht = records[message_ID[k]-1].fields.bericht;
        tijd = records[message_ID[k]-1].fields.tijd;

        let div = document.createElement('div');
        div.innerHTML = '<img src="' + img + '" alt="Avatar">' +
            '<span>' + name + '</span>' +
            '<p>' + bericht + '</p>' +
            '<span class="time-right">' + tijd + '</span>';
        div.className = 'container darker';
        document.getElementById('berichten').appendChild(div);
    }
    }

