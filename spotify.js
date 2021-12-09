console.log("wellcome to spotify");

//initialize the variable
let songIndex = 0;
let audioElement = new Audio('1.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));


let songs = [
        {songName: 'Warriyo', filePath: '1.mp3', coverPath: '1.jpg'},
        {songName: 'Cielo', filePath: '2.mp3', coverPath: '2.jpg'},
        {songName: 'Deaf Kev', filePath: '3.mp3', coverPath: '3.jpg'},
        {songName: 'different Heaven', filePath: '4.mp3', coverPath: '4.jpg'},
        {songName: 'Janji-Heroes', filePath: '5.mp3', coverPath: '5.jpg'},
        {songName: 'karachi', filePath: '6.mp3', coverPath: '6.jpg'},
        {songName: 'Permission To Dance', filePath: '7.mp3', coverPath: '7.jpg'},
        {songName: 'dynamite', filePath: '8.mp3', coverPath: '8.jpg'},
        {songName: 'Savage Love', filePath: '9.mp3', coverPath: '9.jpg'},
        {songName: 'Butter', filePath: '10.mp3', coverPath: '10.jpg'},
]

songs.forEach((element, i)=> {
    document.getElementsByTagName('img')[i+1].src = songs[i].coverPath;
    document.getElementsByClassName('songName')[i].innerText = songs[i].songName;
    
});

// audioElement.play();

//handle play/ pause button;
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        
    }


})

// listen to events

audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

})

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
    element.addEventListener('click', (e)=>{
        
        if(audioElement.paused){
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            makeAllPlay();
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            songIndex = parseInt(e.target.id);
            masterSongName.innerText = songs[songIndex].songName;
    
            audioElement.currentTime = 0;
            audioElement.src = `${songIndex+1}.mp3`
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            
        }
        else{
            audioElement.pause();
            makeAllPlay();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            e.target.classList.add('fa-play-circle');
            e.target.classList.remove('fa-pause-circle');
            gif.style.opacity = 0;
            
        }

      
    })
    
});




document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
        
    }
    audioElement.src = `${songIndex+1}.mp3`
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
})
document.getElementById('Previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
        
    }
    audioElement.src = `${songIndex+1}.mp3`
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
});