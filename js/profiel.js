const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dt3xaog16/upload';
const CLOUDINARY_UPLOAD_PRESET = 'gfsdo9c0';
const imgFile = document.getElementById('img-file');
const addButton = document.getElementById('add-profiel-img');

let naam, profielbeschrijving, werkervaring, contact, img;
let profielFoto = document.getElementById('profielFoto');
let userNaam = document.getElementById('userNaam');
let profielTekst = document.getElementById('profielTekst');
let werkervaringTekst = document.getElementById('WerkervaringTekst');
let contactTekst = document.getElementById('contactTekst');
let edit = document.getElementById('edit');

window.addEventListener('load', () => {

    addButton.addEventListener("click", () => {
        imgFile.click();
    });

    imgFile.addEventListener('change', (event) => {
        let file = event.target.files[0];
        console.log(file);
        let formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

        axios({
            url: CLOUDINARY_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-from-urlencoded'
            },
            data: formData
        }).then(function (res) {
            console.log(res);
            let cloudinaryimg = res.data.secure_url;
            profielFoto.src = cloudinaryimg;
            let data = {
                "records": [{
                    "id": "recAXEYE61fjmeKhl",
                    "fields": {
                        "img": cloudinaryimg
                    }
                }]
            }
            fetch('https://api.airtable.com/v0/app5skk11zC7IPHsf/profiel' , {
                method: 'PATCH',
                headers: {
                    'Authorization': 'Bearer keybA52rEqXKwKAAo',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(() => alert('uploaded'))
        }).catch(function (err) {
            console.error(err);
        });
    })

    edit.addEventListener("click", () => {

    });

    fetch('https://api.airtable.com/v0/app5skk11zC7IPHsf/profiel' , {
        headers: {
            'Authorization': 'Bearer keybA52rEqXKwKAAo',
        }
    })
        .then(response => response.json())
        .then(data => { profielGegevens(data.records) })

    let profielGegevens = (record) => {
        for (let i = 0; i < record.length; i++){
            let is_ID = record[i].fields.ID;
            if (is_ID === 'USER_TEST'){
                img = record[i].fields.img;
                naam = record[i].fields.naam;
                profielbeschrijving = record[i].fields.profielbeschrijving;
                werkervaring = record[i].fields.werkervaring;
                contact = record[i].fields.contact;
            }
        }
        profielFoto.src = img;
        userNaam.innerHTML = naam;
        profielTekst.innerHTML  = profielbeschrijving;
        werkervaringTekst.innerHTML  = werkervaring;
        contactTekst.innerHTML  = contact;
    }

});

