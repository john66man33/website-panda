const song = document.getElementById("japanese01");
const lyrics = document.getElementById("japanese01");

const lyricData = [
    {time:20, text:"Mada kono sekai wa"},
    {time:25, text:"Kimi no koto wo"},
    {time:30, text:" Kimi no koto wo"},
];

song.addEventListener("timeupdate", () => {
    const current = song.currentTime;

    for(let i = lyricData.length - 1; i >= 0; i--){
        if(current >= lyricData[i].time){
            lyrics.innerHTML = lyricData[i].text;
            break;
        }
    }
});