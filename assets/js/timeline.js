document.addEventListener("DOMContentLoaded", () => {

const progress=document.querySelector(".timeline-progress");
const items=document.querySelectorAll(".timeline-item");

if(progress){
progress.animate([{width:"0%"},{width:"100%"}],{
duration:3200,
fill:"forwards",
easing:"ease-in-out"
});
}

items.forEach((item,index)=>{
setTimeout(()=>item.classList.add("show"),400+index*450);
});

const memory=document.getElementById("retro-memory");
const memoryImage=document.getElementById("memory-image");
const memoryYear=document.getElementById("memory-year");
const memoryTitle=document.getElementById("memory-title");
const memoryText=document.getElementById("memory-text");
const memoryTags=document.getElementById("memory-tags");

if(!memory||!memoryImage||!memoryYear||!memoryTitle||!memoryText||!memoryTags){
console.warn("Retro Memory Elemente fehlen.");
return;
}

const data={
1986:{slot:"SAVEGAME #01",title:"DER ERSTE C64",text:"Hier begann alles. Winter Games, Summer Games und die ersten BASIC-Versuche.",image:"assets/images/icons/c64-512.png",tags:["C64","BASIC","Winter Games","Summer Games"]},
1987:{slot:"SAVEGAME #02",title:"ERSTE ABENTEUER",text:"Die Spielesammlung wuchs stetig. Disketten wurden zum Tor in neue Welten.",image:"assets/images/icons/c64-512.png",tags:["1541","Disketten","Wizardry","SSI"]},
1991:{slot:"SAVEGAME #03",title:"AMIGA LIEBE",text:"Monkey Island, Turrican und Chaos Engine machten den Amiga zum Lieblingsrechner.",image:"assets/images/icons/amiga-512.png",tags:["Amiga","AGA","Monkey Island","Turrican"]},
1996:{slot:"SAVEGAME #04",title:"DER ERSTE PC",text:"Mit dem ersten PC begann ein neues Kapitel.",image:"assets/images/icons/pc-512.png",tags:["DOS","486 DX2","Windows 95","C&C"]},
2023:{slot:"SAVEGAME #05",title:"YOUTUBE START",text:"Aus einem Hobby entstand Magisthans Spielekiste.",image:"assets/images/icons/youtube-512.png",tags:["YouTube","Let's Plays","Retro","Community"]},
2026:{slot:"SAVEGAME #06",title:"RETRO NEWS FLASH",text:"Jede Woche neue Spiele, Hardware und Demos rund um C64 und Amiga.",image:"assets/images/icons/heute-512.png",tags:["News","C64","Amiga","Homebrew"]}
};

function loadMemory(year){
const entry=data[year];
if(!entry)return;

memory.classList.add("memory-switch");

setTimeout(()=>{
memoryYear.textContent=entry.slot;
memoryTitle.textContent=entry.title;
memoryText.textContent=entry.text;
memoryImage.src=entry.image;

memoryTags.innerHTML="";
entry.tags.forEach(tag=>{
const span=document.createElement("span");
span.textContent=tag;
memoryTags.appendChild(span);
});

memory.classList.remove("memory-switch");
memory.classList.add("memory-show");
},220);
}

items.forEach(item=>{
item.addEventListener("mouseenter",()=>{
items.forEach(i=>i.classList.remove("active"));
item.classList.add("active");
loadMemory(item.dataset.year);
});
});

loadMemory("1986");

});
