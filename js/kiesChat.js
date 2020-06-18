let naam = '';
let foto = '';
let message = '';
let time= '';

fetch('https://api.airtable.com/v0/app5skk11zC7IPHsf/berichten' , {
    headers: {
        'Authorization': 'Bearer keybA52rEqXKwKAAo'
    }
})
    .then(response => response.json())
    .then(data => {
        let records= data.records
        getInfo(records)
    })

function getInfo(records) {



        let tijdstippen = new Array();
        for (let i = 0; i < records.length; i++) {
            tijdstippen[i] = records[i].fields.CreatedTime;
        }
        let sorteer = tijdstippen.sort();

        for (let j = 0; j < records.length; j++) {
            if (sorteer[records.length - 1] === records[j].fields.CreatedTime) {
                let is_ID = records[j].fields.ID;
                if (is_ID === 'USER_TEST') {

                    naam = records[j].fields.naam;
                    foto = records[j].fields.img;
                    message = records[j].fields.bericht;
                    time = records[j].fields.tijd;

                    let bericht = document.createElement('a');
                    bericht.href = "chatpage.html"
                    bericht.innerHTML =
                        '<div class="container">' +
                        '<img src="' + foto +'" alt="Avatar">'+
                        '<span>'+ naam +'</span>' +
                        '<p>'+ message + '</p>' +
                        '<span class="time-right">'+ time +'</span>' +
                        '</div>';
                    document.getElementById('gesprekken').appendChild(bericht);
                }
            }
        }
}



