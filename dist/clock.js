let gelenIsim = prompt("Lütfen Adınızı Giriniz !!");

let isimYazdir = document.getElementById("myName");

isimYazdir.innerHTML = gelenIsim;


let clockShow = document.getElementById("myClock");

function clock (){
    let showTime = new Date();

    let clock = showTime.getHours();
    let minuTes = showTime.getMinutes();
    let seConts = showTime.getSeconds();
    
    let timeS = clock + ":" + minuTes + ":" + seConts;
    
    
    clockShow.innerHTML = timeS;
    
}
setInterval('clock()',1000);