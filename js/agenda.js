
let today = new Date();
let day = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();
let actualMonth = '';
let schrikkelJaar = false;

let testDate = new Date(year,month,1);


if (testDate.getDay() === 0) {
    document.getElementById('maa').innerText = "zondag";
    document.getElementById('din').innerText = "maandag";
    document.getElementById('woe').innerText = "dinsdag";
    document.getElementById('don').innerText = "woensdag";
    document.getElementById('vri').innerText = "donderdag";
    document.getElementById('zat').innerText = "vrijdag";
    document.getElementById('zon').innerText = "zaterdag";


} else if (testDate.getDay() === 1){
    document.getElementById('maa').innerText = "maandag";
    document.getElementById('din').innerText = "dinsdag";
    document.getElementById('woe').innerText = "woensdag";
    document.getElementById('don').innerText = "donderdag";
    document.getElementById('vri').innerText = "vrijdag";
    document.getElementById('zat').innerText = "zaterdag";
    document.getElementById('zon').innerText = "zondag";

}else if (testDate.getDay() === 2){

    document.getElementById('maa').innerText = "dinsdag";
    document.getElementById('din').innerText = "woensdag";
    document.getElementById('woe').innerText = "donderdag";
    document.getElementById('don').innerText = "vrijdag";
    document.getElementById('vri').innerText = "zaterdag";
    document.getElementById('zat').innerText = "zondag";
    document.getElementById('zon').innerText = "maandag";

}else if (testDate.getDay() === 3){

    document.getElementById('maa').innerText = "woensdag";
    document.getElementById('din').innerText = "donderdag";
    document.getElementById('woe').innerText = "vrijdag";
    document.getElementById('don').innerText = "zaterdag";
    document.getElementById('vri').innerText = "zondag";
    document.getElementById('zat').innerText = "maandag";
    document.getElementById('zon').innerText = "dinsdag";

}else if (testDate.getDay() === 4){

    document.getElementById('maa').innerText = "donderdag";
    document.getElementById('din').innerText = "vrijdag";
    document.getElementById('woe').innerText = "zaterdag";
    document.getElementById('don').innerText = "zondag";
    document.getElementById('vri').innerText = "maandag";
    document.getElementById('zat').innerText = "dinsdag";
    document.getElementById('zon').innerText = "woensdag";


}else if (testDate.getDay() === 5){

    document.getElementById('maa').innerText = "vrijdag";
    document.getElementById('din').innerText = "zaterdag";
    document.getElementById('woe').innerText = "zondag";
    document.getElementById('don').innerText = "maandag";
    document.getElementById('vri').innerText = "dinsdag";
    document.getElementById('zat').innerText = "woensdag";
    document.getElementById('zon').innerText = "donderdag";


}else if (testDate.getDay() === 6){

    document.getElementById('maa').innerText = "zaterdag";
    document.getElementById('din').innerText = "zondag";
    document.getElementById('woe').innerText = "maandag";
    document.getElementById('don').innerText = "dinsdag";
    document.getElementById('vri').innerText = "woensdag";
    document.getElementById('zat').innerText = "donderdag";
    document.getElementById('zon').innerText = "vrijdag";

}


if (year % 4 == 0){
    if (year % 100 == 0){
        if (year % 400 == 0){
    schrikkelJaar = true;
        }else schrikkelJaar = false;
    }else {
        schrikkelJaar = true;
    }
}else{
    schrikkelJaar = false;
}

if (month === 0){
    actualMonth = 'januari';
    document.getElementById('count1').className = 'special';
    document.getElementById('count1').addEventListener("click",function(){ document.getElementById("melding").innerHTML = "Nieuwjaar" ; });

}else if (month === 1){
    actualMonth = 'februari';
    document.getElementById('count30').style.display = 'none';
    document.getElementById('count31').style.display = 'none';
    if (schrikkelJaar === false) {
        document.getElementById('count29').style.display = 'none';
    }
}else if (month === 2){
    actualMonth = 'maart';
}else if (month === 3){
    actualMonth = 'april';
    document.getElementById('count13').className = 'special';
    document.getElementById('count31').style.display = 'none';
    document.getElementById("count13").addEventListener("click",function(){ document.getElementById("melding").innerHTML = "paasmaandag" ; });
}else if (month === 4){
    actualMonth = 'mei';
    document.getElementById('count1').className = 'special';
    document.getElementById('count21').className = 'special';
    document.getElementById("count1").addEventListener("click",function(){ document.getElementById("melding").innerHTML = "Feest van de Arbeid" ; });
    document.getElementById("count21").addEventListener("click",function(){ document.getElementById("melding").innerHTML = "Onze-Lieve-Heer-Hemelvaart" ; });
}else if (month === 5){
    actualMonth = 'juni';
    document.getElementById('count1').className = 'special';
    document.getElementById('count21').className = 'special';
    document.getElementById("count1").addEventListener("click",function(){ document.getElementById("melding").innerHTML = "pinkstermaandag" ; });
    document.getElementById("count21").addEventListener("click",function(){ document.getElementById("melding").innerHTML = "nationale feestdag" ; });
    document.getElementById('count31').style.display = 'none';
}else if (month === 6){
    actualMonth = 'juli';
}else if (month === 7){
    actualMonth = 'augustus';
    document.getElementById('count21').className = 'special';
    document.getElementById("count21").addEventListener("click",function(){ document.getElementById("melding").innerHTML = "Onze-Lieve-Vrouw-Hemelvaart" ; });
}else if (month === 8){
    actualMonth = 'september';
    document.getElementById('count31').style.display = 'none';
}else if (month === 9){
    actualMonth = 'oktober';
}else if (month === 10){
    actualMonth = 'november';
    document.getElementById('count1').className = 'special';
    document.getElementById('count11').className = 'special';
    document.getElementById("count1").addEventListener("click",function(){ document.getElementById("melding").innerHTML = "Allerheiligen" ; });
    document.getElementById("count11").addEventListener("click",function(){ document.getElementById("melding").innerHTML = "Wapenstilstand" ; });
    document.getElementById('count31').style.display = 'none';
}else if (month === 11){
    actualMonth = 'december';
    document.getElementById('count25').className = 'special';
    document.getElementById("count25").addEventListener("click",function(){ document.getElementById("melding").innerHTML = "Kerstmis" ; });
}

if (document.getElementById('count1').innerHTML == day){
    document.getElementById('count1').className = 'active';
}
else if (document.getElementById('count2').innerHTML == day){
    document.getElementById('count2').className = 'active';
}
else if (document.getElementById('count3').innerHTML == day){
    document.getElementById('count3').className = 'active';
}
else if (document.getElementById('count4').innerHTML == day){
    document.getElementById('count4').className = 'active';
}
else  if (document.getElementById('count5').innerHTML == day){
    document.getElementById('count5').className = 'active';
}
else if (document.getElementById('count6').innerHTML == day){
    document.getElementById('count6').className = 'active';
}
else if (document.getElementById('count7').innerHTML == day){
document.getElementById('count7').className = 'active';
}
else if (document.getElementById('count8').innerHTML == day){
    document.getElementById('count8').className = 'active';
}
else if (document.getElementById('count9').innerHTML == day){
    document.getElementById('count9').className = 'active';
}
else if (document.getElementById('count10').innerHTML == day){
    document.getElementById('count10').className = 'active';
}
else if (document.getElementById('count11').innerHTML == day){
    document.getElementById('count11').className = 'active';
}
else if (document.getElementById('count12').innerHTML == day){
    document.getElementById('count12').className = 'active';
}
else if (document.getElementById('count13').innerHTML == day){
    document.getElementById('count13').className = 'active';
}
else if (document.getElementById('count14').innerHTML == day){
    document.getElementById('count14').className = 'active';
}
else if (document.getElementById('count15').innerHTML == day){
    document.getElementById('count15').className = 'active';
}
else if (document.getElementById('count16').innerHTML == day){
    document.getElementById('count16').className = 'active';
}
else if (document.getElementById('count17').innerHTML == day){
    document.getElementById('count17').className = 'active';
}
else if (document.getElementById('count18').innerHTML == day){
    document.getElementById('count18').className = 'active';
}
else if (document.getElementById('count19').innerHTML == day){
    document.getElementById('count19').className = 'active';
}
else if (document.getElementById('count20').innerHTML == day){
    document.getElementById('count20').className = 'active';
}
else if (document.getElementById('count21').innerHTML == day){
    document.getElementById('count21').className = 'active';
}
else if (document.getElementById('count22').innerHTML == day){
    document.getElementById('count22').className = 'active';
}
else if (document.getElementById('count23').innerHTML == day){
    document.getElementById('count23').className = 'active';
}
else if (document.getElementById('count24').innerHTML == day){
    document.getElementById('count24').className = 'active';
}
else if (document.getElementById('count25').innerHTML == day){
    document.getElementById('count25').className = 'active';
}
else if (document.getElementById('count26').innerHTML == day){
    document.getElementById('count26').className = 'active';
}
else if (document.getElementById('count27').innerHTML == day){
    document.getElementById('count27').className = 'active';
}
else if (document.getElementById('count28').innerHTML == day){
    document.getElementById('count28').className = 'active';
}
else if (document.getElementById('count29').innerHTML == day){
    document.getElementById('count29').className = 'active';
}
else if (document.getElementById('count30').innerHTML == day){
    document.getElementById('count30').className = 'active';
}
else if (document.getElementById('count31').innerHTML == day){
    document.getElementById('count31').className = 'active';
}

window.addEventListener('load', function() {
document.getElementById('month').innerHTML = actualMonth;
    document.getElementById('year').innerHTML = year;
});