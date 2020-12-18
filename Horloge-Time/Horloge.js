const sectionDigital = document.querySelector('.digital'); 

const date = new Date()
console.log(date);

let weekday = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const conteneur = document.createElement('div');
conteneur.className = 'container';
sectionDigital.appendChild(conteneur);

const calendrier = document.createElement('div');
calendrier.className = 'calendar'
conteneur.appendChild(calendrier);

const jourSemaine = document.createElement('div');
jourSemaine.className = 'day'
jourSemaine.textContent = weekday[date.getDay()];
calendrier.appendChild(jourSemaine);

const contenu_date_mois = document.createElement('div');
contenu_date_mois.className ='contenuChiffreMois';
calendrier.appendChild(contenu_date_mois);

const chiffreJour = document.createElement('div');
chiffreJour.className = 'daynumber'
chiffreJour.textContent = date.getDate();
contenu_date_mois.appendChild(chiffreJour);

const mois = document.createElement('div');
mois.className = 'month'
mois.textContent = month[date.getMonth()];
contenu_date_mois.appendChild(mois);

const annee = document.createElement('div');
annee.className = 'year'
annee.textContent = date.getFullYear();
calendrier.appendChild(annee);

const heure = document.createElement('div');
heure.id = 'heure' // New
heure.className = 'hour';
heure.textContent = date.toLocaleTimeString('fr-FR');
conteneur.appendChild(heure);

//============================ Carte Calendrier ===========================//

let dateHorloge, hr , min , sec

function refreshClock() {
    dateHorloge = new Date()
    hr = dateHorloge.getHours()
    min = dateHorloge.getMinutes()
    sec = dateHorloge.getSeconds()

    document.querySelector(".hr").style.transform =
    `translate(-50%, -100%) rotate(${hr * 360 / 12}deg)`

    document.querySelector(".min").style.transform =
    `translate(-50%, -100%) rotate(${min * 360 / 60 +sec * 6/60}deg)`

    document.querySelector(".sec").style.transform =
    `translate(-50%, -100%) rotate(${sec * 360 / 60}deg)`
}

refreshClock()
window.setInterval(refreshClock, 1000) //Active 'refreshClock()' directement au lancement de la page windows et et refresh toute les 1000(=1sec) 




//================================= Ajout de time Dynamique =====================//

function UR_Start()
{
UR_Nu = new Date();
UR_Indhold = showFilled(UR_Nu.getHours())+ ":" + showFilled(UR_Nu.getMinutes()) + ":" + showFilled(UR_Nu.getSeconds());
document.all.heure.innerHTML = UR_Indhold;
//document.writeln(UR_Indhold);
setTimeout("UR_Start()",1000);
}
function showFilled(Value)
{
return (Value > 9) ? "" + Value : "0" + Value;
}