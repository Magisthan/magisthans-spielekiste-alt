document.addEventListener("DOMContentLoaded", () => {
  
    /* ==========================================
       ELEMENTE
    ========================================== */

    const timeline = document.querySelector(".savegame-card");
    const progress = document.querySelector(".timeline-progress");
    const items = [...document.querySelectorAll(".timeline-item")];

    const memory = document.getElementById("retro-memory");
    const memoryImage = document.getElementById("memory-image");
    const memoryYear = document.getElementById("memory-year");
    const memoryTitle = document.getElementById("memory-title");
    const memoryText = document.getElementById("memory-text");
    const memoryTags = document.getElementById("memory-tags");
	const memoryStory = document.getElementById("memory-story");

    if (
        !timeline ||
        !progress ||
        !memory ||
        !memoryImage ||
        !memoryYear ||
        !memoryTitle ||
        !memoryText ||
        !memoryTags
    ) {
        return;
    }

    /* ==========================================
       STATUS
    ========================================== */

    let timelineRunning = false;
    let introFinished = false;
    let currentYear = null;

    /* ==========================================
       SAVEGAME DATEN
    ========================================== */

    const data = {

        1987:{

    slot:"SAVEGAME #01",

    title:"ERSTE DISKETTEN",

    text:"Mein Einstieg in die Welt des Commodore 64.",

    story:`

<p>
Eigentlich wollte ich nur ein bisschen spielen.
Wenn ich heute darüber nachdenke, begann alles mit einer ziemlich einfachen Idee:
"Lass uns ein Spiel starten."
</p>

<p>
Beim Commodore 64 meines Cousins bedeutete das allerdings etwas anderes als heute.
Dank Datasette hieß es oft:
Wir laden das Spiel und gehen solange eine Runde Fußball spielen.
</p>

<h4>Der erste eigene C64</h4>

<p>
Mit etwa elf Jahren war es endlich soweit.
Mein eigener Commodore 64 zog ein.
Mit 1541-II und Nadeldrucker.
</p>

<h4>BASIC</h4>

<p>
Natürlich wollte ich irgendwann selbst Spiele entwickeln.
Viele Programme funktionierten.
Viele endeten allerdings mit Fehlermeldungen.
</p>

`,

    image:"assets/images/icons/c64-512.png",

    tags:[
        ...
    ]

},

        1991:{

            slot:"SAVEGAME #02",

            title:"AMIGA LIEBE",

            text:"Monkey Island, Turrican und Chaos Engine machten den Amiga zum Lieblingsrechner.",

            image:"assets/images/icons/amiga-512.png",

            tags:[
                "WHDLoad",
                "Kickstart",
                "Workbench",
                "Turrican"
				
            ]

        },

        1996:{

            slot:"SAVEGAME #03",

            title:"DER ERSTE PC",

            text:"Mit dem ersten PC begann ein neues Kapitel.",

            image:"assets/images/icons/pc-512.png",

            tags:[
                "DOS",
                "3dfx Voodoo",
                "Windows 98",
                "Command & Conquer"
				
            ]

        },

        2023:{

            slot:"SAVEGAME #04",

            title:"YOUTUBE START",

            text:"Aus einem Hobby entstand Magisthans Spielekiste.",

            image:"assets/images/icons/youtube-512.png",

            tags:[
                "Steam",
                "GeForce GTX",
                "Online Multiplayer",
                "The Witcher 3: Wild Hunt"
				
            ]

        },

        2026:{

            slot:"SAVEGAME #05",

            title:"RETRO NEWS FLASH",

            text:"Jede Woche neue Spiele, Hardware und Demos rund um C64 und Amiga.",

            image:"assets/images/icons/heute-512.png",

            tags:[
                "News",
                "C64",
                "Amiga",
                "Homebrew"
				
            ]

        }

    };


    /* ==========================================
       MEMORY FÜLLEN
    ========================================== */

    function fillMemory(year){

        const entry = data[year];

        if(!entry) return;

        memoryYear.textContent = entry.slot;
        memoryTitle.textContent = entry.title;
        memoryText.textContent = entry.text;
		memoryStory.innerHTML = entry.story;
		const paragraphs = memoryStory.querySelectorAll("p, h4");

         paragraphs.forEach((element,index)=>{

         element.style.animationDelay = (index * 140) + "ms";

});
        memoryImage.src = entry.image;

        memoryTags.innerHTML = "";

        entry.tags.forEach(tag=>{

            const span = document.createElement("span");

            span.textContent = tag;

            memoryTags.appendChild(span);

        });

    }


    /* ==========================================
       MEMORY ÖFFNEN
    ========================================== */

    function openMemory(year){

        if(currentYear === year){

            return;

        }

        if(memory.classList.contains("open")){

            memory.classList.remove("open");

            setTimeout(()=>{

                fillMemory(year);

                memory.classList.add("open");

            },220);

        }

        else{

            fillMemory(year);

            requestAnimationFrame(()=>{

                memory.classList.add("open");

            });

        }

        currentYear = year;

    }


    /* ==========================================
       TIMELINE START
    ========================================== */

    function startTimeline(){

        if(timelineRunning){

            return;

        }

        timelineRunning = true;
        introFinished = false;

        progress.style.width = "0%";

        progress.getAnimations().forEach(animation=>{

            animation.cancel();

        });

        progress.animate(

            [

                {width:"0%"},

                {width:"100%"}

            ],

            {

                duration:5200,

                easing:"ease-in-out",

                fill:"forwards"

            }

        );

        items.forEach(item=>{

            item.classList.remove("show");
            item.classList.remove("active");

        });

        items.forEach((item,index)=>{

            setTimeout(()=>{

                item.classList.add("show");

            },500 + index * 700);

        });

        setTimeout(()=>{

            introFinished = true;

        },5200);

    }
	
    /* ==========================================
       TIMELINE RESET
    ========================================== */

    function resetTimeline(){

        timelineRunning = false;
        introFinished = false;
        currentYear = null;

        progress.getAnimations().forEach(animation=>{

            animation.cancel();

        });

        progress.style.width = "0%";

        items.forEach(item=>{

            item.classList.remove("show");
            item.classList.remove("active");

        });

        memory.classList.remove("open");

    }


    /* ==========================================
       SAVEGAME AUSWÄHLEN
    ========================================== */

    items.forEach(item=>{

        item.addEventListener("click",()=>{

            if(!introFinished){

                return;

            }

            const year = item.dataset.year;

            /* Punkt aktivieren */

            items.forEach(i=>{

                i.classList.remove("active");

            });

            item.classList.add("active");

            /*
             * kleiner "Spielgefühl"-Moment
             * erst Glow,
             * dann Karte öffnen
             */

            setTimeout(()=>{

                openMemory(year);

            },150);

        });

    });


    /* ==========================================
       SCROLL OBSERVER
    ========================================== */

    const observer = new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    startTimeline();

                }

                else{

                    resetTimeline();

                }

            });

        },

        {

            threshold:.20,

            rootMargin:"0px 0px -10% 0px"

        }

    );

    observer.observe(timeline);


    /* ==========================================
       MEMORY CARD
       Beim Laden NICHT sichtbar
    ========================================== */

    memory.classList.remove("open");


    /* ==========================================
       OPTIONAL:
       ESC schließt die Karte
    ========================================== */

    document.addEventListener("keydown",event=>{

        if(event.key==="Escape"){

            memory.classList.remove("open");

            items.forEach(item=>{

                item.classList.remove("active");

            });

            currentYear=null;

        }

    });


    /* ==========================================
       OPTIONAL:
       Klick neben die Karte schließt sie
    ========================================== */

    document.addEventListener("click",event=>{

        if(!memory.classList.contains("open")){

            return;

        }

        if(event.target.closest(".timeline-item")){

            return;

        }

        if(event.target.closest(".retro-memory")){

            return;

        }

        memory.classList.remove("open");

        items.forEach(item=>{

            item.classList.remove("active");

        });

        currentYear=null;

    });

});
