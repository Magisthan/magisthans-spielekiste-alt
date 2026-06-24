const facts = [

    "Der Commodore 64 wurde über 12 Millionen Mal verkauft.",

    "Der Amiga 500 erschien 1987 und wurde zu einem der beliebtesten Heimcomputer Europas.",

    "Turrican wurde ursprünglich für den Commodore 64 entwickelt.",

    "Defender of the Crown war eines der ersten Cinemaware-Spiele.",

    "Monkey Island erschien ursprünglich auf Disketten.",

    "Der SID-Chip des C64 gilt bis heute als legendär.",

    "Viele moderne Indie-Spiele orientieren sich optisch an 8-Bit- und 16-Bit-Klassikern."

];

const day =
    Math.floor(Date.now() / 86400000);

document.getElementById("retro-fact-text")
    .textContent =
    facts[day % facts.length];