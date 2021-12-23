var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    loop: true,
    spaceBetween: 32,
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 32
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 32
        }
    }
})
const ctx = document.getElementById('pieChart');
const pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Grey', 'Lightgrey'],
        datasets: [{
            data: [750, 250],
            backgroundColor: [
                'rgba(108, 108, 108, 1)',
                'rgba(229, 229, 229, 1)',
            ],
            borderColor: [
                'rgba(108, 108, 108, 1)',
                'rgba(229, 229, 229, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                display: false,
                grid: {
                    drawBorder: false,
                }
            },
            y: {
                display: false,
                grid: {
                    drawBorder: false,
                },
            },
        },
    }
});

const audio = document.querySelector('audio#gerson_cap2_pt2');
audio.style.display = "none"
audio.src = '../../assets/audio/gerson_cap_2_pt2.mp3'

const customPlayer = document.querySelector('.audio-player-m')
const playButtom = document.querySelector('.audio-action-m')
const audioDeterminate = document.querySelector('.audio-determinate-m')
const leftm = document.querySelector('.left-m')

let isPlaing = false;
const playerm = {
    togglePlay(){
        if(!isPlaing){
            audio.play();
            playButtom.innerHTML = "pause";
            isPlaing = true;
        } else {
            audio.pause();
            playButtom.innerHTML = "play_arrow";
            isPlaing = false;
        }
    },
}
audio.oncanplaythrough = function(e) {
    const totalMinutes = Math.floor(audio.duration / 60);
    const totalSeconds = Math.floor(audio.duration % 60);
    leftm.innerHTML = totalMinutes +":"+(totalSeconds >= 10 ? totalSeconds : "0"+totalSeconds);
}
audio.addEventListener('ended', ()=>{
    playButtom.innerHTML = "play_arrow";
    audio.currentTime = 0;
    audioDeterminate.style.width = 0
})
audio.addEventListener('timeupdate', ()=>{
    audioDeterminate.style.width = `${Math.floor(audio.currentTime) * 2.173913043478261}%`
    const totalMinutes = Math.floor(audio.duration / 60);
    const totalSeconds = Math.floor(audio.duration % 60);        
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    leftm.innerHTML = minutes +":"+(seconds >= 10 ? seconds : "0"+seconds)
    //(totalMinutes - minutes) +":"+((totalSeconds - seconds) >= 10 ? (totalSeconds - seconds) : "0"+(totalSeconds - seconds))
   
})

const audiop = document.querySelector('audio#gerson_cap2_pt3');
audiop.style.display = "none"
audiop.src = '../../assets/audio/gerson_cap_2_pt3.mp3'

const customPlayerp = document.querySelector('.audio-player-p')
const playButtomp = document.querySelector('.audio-action-p')
const audioDeterminatep = document.querySelector('.audio-determinate-p')
const leftp = document.querySelector('.left-p')

let isPlaingp = false;
const playerp = {
    togglePlay(){
        if(!isPlaingp){
            audiop.play();
            playButtomp.innerHTML = "pause"
            isPlaingp = true;
        } else {
            audiop.pause();
            playButtomp.innerHTML = "play_arrow"
            isPlaingp = false;
        }
    },
}

audiop.oncanplaythrough = function(e) {
    const totalMinutes = Math.floor(audiop.duration / 60);
    const totalSeconds = Math.floor(audiop.duration % 60);
    leftp.innerHTML = totalMinutes +":"+(totalSeconds >= 10 ? totalSeconds : "0"+totalSeconds);
}
audiop.addEventListener('ended', ()=>{
    playButtomp.innerHTML = "play_arrow";
    audiop.currentTime = 0;
    audioDeterminatep.style.width = 0
})
audiop.addEventListener('timeupdate', ()=>{
    audioDeterminatep.style.width = `${Math.floor(audiop.currentTime) * .5917159763313609}%`
    const totalMinutes = Math.floor(audiop.duration / 60);
    const totalSeconds = Math.floor(audiop.duration % 60);        
    const minutes = Math.floor(audiop.currentTime / 60);
    const seconds = Math.floor(audiop.currentTime % 60);
    leftp.innerHTML = minutes +":"+(seconds >= 10 ? seconds : "0"+seconds)
    //(totalMinutes - minutes) +":"+((totalSeconds - seconds) >= 10 ? (totalSeconds - seconds) : "0"+(totalSeconds - seconds))
   
})

const audiop2 = document.querySelector('audio#pastor-bruno2');
audiop2.style.display = "none"
audiop2.src = '../../assets/audio/pastor_cap_1_pt1.mp3'

const customPlayerp2 = document.querySelector('.audio-player-p2')
const playButtomp2 = document.querySelector('.audio-action-p2')
const audioDeterminatep2 = document.querySelector('.audio-determinate-p2')
const leftp2 = document.querySelector('.left-p2')
let isPlaingp2 = false;
const playerp2 = {
    togglePlay(){
        if(!isPlaingp2){
            audiop2.play();
            playButtomp2.innerHTML = "pause"
            isPlaingp2 = true;
        } else {
            audiop2.pause();
            playButtomp2.innerHTML = "play_arrow"
            isPlaingp2 = false;
        }
    },
}
audiop2.oncanplaythrough = function(e) {
    const totalMinutes = Math.floor(audiop2.duration / 60);
    const totalSeconds = Math.floor(audiop2.duration % 60);
    leftp2.innerHTML = totalMinutes +":"+(totalSeconds >= 10 ? totalSeconds : "0"+totalSeconds);
}
audiop2.addEventListener('ended', ()=>{
    playButtomp2.innerHTML = "play_arrow";
    audiop2.currentTime = 0;
    audioDeterminatep2.style.width = 0
})
audiop2.addEventListener('timeupdate', ()=>{
    audioDeterminatep2.style.width = `${Math.floor(audiop2.currentTime) * .3597122302158273}%`
    const totalMinutes = Math.floor(audiop2.duration / 60);
    const totalSeconds = Math.floor(audiop2.duration % 60);        
    const minutes = Math.floor(audiop2.currentTime / 60);
    const seconds = Math.floor(audiop2.currentTime % 60);
    leftp2.innerHTML = minutes +":"+(seconds >= 10 ? seconds : "0"+seconds)
    //(totalMinutes - minutes) +":"+((totalSeconds - seconds) >= 10 ? (totalSeconds - seconds) : "0"+(totalSeconds - seconds))
   
})

const audiop3 = document.querySelector('audio#gerson');
audiop3.style.display = "none"
audiop3.src = '../../assets/audio/gerson_cap_1.mp3'

const customPlayerp3 = document.querySelector('.audio-player-p3')
const playButtomp3 = document.querySelector('.audio-action-p3')
const audioDeterminatep3 = document.querySelector('.audio-determinate-p3')
const leftp3 = document.querySelector('.left-p3')


let isPlaingp3 = false;
const playerp3 = {
    togglePlay(){
        if(!isPlaingp3){
            audiop3.play();
            playButtomp3.innerHTML = "pause"
            isPlaingp3 = true;
        } else {
            audiop3.pause();
            playButtomp3.innerHTML = "play_arrow"
            isPlaingp3 = false;
        }
    },
}
audiop3.oncanplaythrough = function(e) {
    const totalMinutes = Math.floor(audiop3.duration / 60);
    const totalSeconds = Math.floor(audiop3.duration % 60);
    leftp3.innerHTML = totalMinutes +":"+(totalSeconds >= 10 ? totalSeconds : "0"+totalSeconds);
}
audiop3.addEventListener('ended', ()=>{
    playButtomp3.innerHTML = "play_arrow";
    audiop3.currentTime = 0;
    audioDeterminatep3.style.width = 0
})
audiop3.addEventListener('timeupdate', ()=>{
    audioDeterminatep3.style.width = `${Math.floor(audiop3.currentTime) * 1.063829787234043}%`
    const totalMinutes = Math.floor(audiop3.duration / 60);
    const totalSeconds = Math.floor(audiop3.duration % 60);        
    const minutes = Math.floor(audiop3.currentTime / 60);
    const seconds = Math.floor(audiop3.currentTime % 60);
    leftp3.innerHTML = minutes +":"+(seconds >= 10 ? seconds : "0"+seconds)
    //(totalMinutes - minutes) +":"+((totalSeconds - seconds) >= 10 ? (totalSeconds - seconds) : "0"+(totalSeconds - seconds)) + " - " + minutes
   
})