let ville ="Paris";
recevoirTemperature(ville);

let changer = document.querySelector("#changer");
changer.addEventListener("click",()=>{
    ville = prompt("Quelle ville souhaitez-vous afficher la température ?");
    recevoirTemperature(ville);
});
function recevoirTemperature(ville){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=681a818da30d2eb36af80f8f447a88ed&units=metric';

    let request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "json";
    request.send();

    request.onload = () =>{
        if(request.readyState === XMLHttpRequest.DONE ){
            if(request.status === 200){
                let data = request.response;
                let temperature = data.main.temp;
                let ville = data.name;
                document.querySelector('#temperature_label').textContent = temperature;
                document.querySelector('#ville').textContent = ville;
            }
        }else{
            alert("impossible de récupérer les données, merci de reessayer plus tard");
        }
    }
}
setInterval(recevoirTemperature, 1000);