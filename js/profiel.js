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
let categorieInfoBox = document.getElementsByClassName('categorieInfoBox');
let categorieInfoBoxEdit = document.getElementsByClassName('categorieInfoBoxEdit');
let userNaamEdit = document.getElementById('userNaamEdit');
let profielTekstEdit = document.getElementById('profielTekstEdit');
let werkervaringTekstEdit= document.getElementById('WerkervaringTekstEdit');
let contactTekstEdit = document.getElementById('contactTekstEdit');
let opslaanBox = document.getElementById('opslaanBox');
let opslaan = document.getElementById('opslaan');
let userNaamBox = document.getElementById('userNaamBox');
let userNaamEditBox = document.getElementById('userNaamEditBox');

window.addEventListener('load', () => {

    fetch('https://api.airtable.com/v0/app5skk11zC7IPHsf/profiel' , {
        headers: {
            'Authorization': 'Bearer keybA52rEqXKwKAAo',
        }
    })
        .then(response => response.json())
        .then(data => { profielGegevens(data.records) })

    addButton.addEventListener("click", () => {
        imgFile.click();
    });

    imgFile.addEventListener('change', (event) => {
        imageUpload(event);
    });

    edit.addEventListener("click", () => {
        userNaamBox.style.display = 'none';
        userNaamEditBox.style.display = 'flex';

        for(let i = 0; i < categorieInfoBox.length; i++) {
            categorieInfoBox[i].style.display = 'none';
        }
        for(let i = 0; i < categorieInfoBoxEdit.length; i++) {
            categorieInfoBoxEdit[i].style.display = 'block';
        }
        opslaanBox.style.display = 'flex';
    });

    opslaan.addEventListener("click", () => {
        opslaanEdit();
    });

});

// functies

let imageUpload = (event) => {
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
}

let opslaanEdit = () => {

    let naam = userNaamEdit.value;
    let profielbeschrijving = profielTekstEdit.value;
    let werkervaring = werkervaringTekstEdit.value;
    let contact = contactTekstEdit.value;

    userNaam.innerHTML = naam;
    profielTekst.innerHTML = profielbeschrijving;
    werkervaringTekst.innerHTML  = werkervaring;
    contactTekst.innerHTML  = contact;

    let data = {
        "records": [{
            "id": "recAXEYE61fjmeKhl",
            "fields": {
                "naam": naam,
                "profielbeschrijving": profielbeschrijving,
                "werkervaring": werkervaring,
                "contact": contact
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
        .then(() => alert('opgeslaan'))

    userNaamBox.style.display = 'block';
    userNaamEditBox.style.display = 'none';

    for(let i = 0; i < categorieInfoBox.length; i++) {
        categorieInfoBox[i].style.display = 'block';
    }
    for(let i = 0; i < categorieInfoBoxEdit.length; i++) {
        categorieInfoBoxEdit[i].style.display = 'none';
    }
    opslaanBox.style.display = 'none';
};

let profielGegevens = (record) => {
    for (let i = 0; i < record.length; i++) {
        let is_ID = record[i].fields.ID;
        if (is_ID === 'USER_TEST') {
            img = record[i].fields.img;
            naam = record[i].fields.naam;
            profielbeschrijving = record[i].fields.profielbeschrijving;
            werkervaring = record[i].fields.werkervaring;
            contact = record[i].fields.contact;
        }
    }
    profielFoto.src = img;
    userNaam.innerHTML = naam;
    profielTekst.innerHTML = profielbeschrijving;
    werkervaringTekst.innerHTML = werkervaring;
    contactTekst.innerHTML = contact;

    userNaamEdit.value = naam
    profielTekstEdit.value = profielbeschrijving;
    werkervaringTekstEdit.value = werkervaring;
    contactTekstEdit.value = contact;
}