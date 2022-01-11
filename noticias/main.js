document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});
/// Aqui colocamos a que elemento nos referiremos, para luego colocar que reaccionará al click, y dentro de ahi, colocaremos que hará. 
//document.querySelector('.nav-menu').classList.toggle('show'); aqui definimos que a la clase .nav-menu se le añadirá la clase show cuando demos click

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500});
ScrollReveal().reveal('.cards-banner-oner',{delay:550});
ScrollReveal().reveal('.cards-banner-two',{delay:550});
ScrollReveal().reveal('.quees', {delay:550});
ScrollReveal().reveal('.cabeza', {delay:550});
ScrollReveal().reveal('.menusagas', {delay:550});

var videos = document.querySelectorAll(".youtube");
for (var i=0; i<videos.length; i++){
    var youtube = videos[i];
    //get function
    getVideos(youtube);
}

function getVideos(el){
    var img = document.createElement("img");
    //get images
    img.setAttribute('src', 'http://i.ytimg.com/vi/'+el.id+'/hqdefault.jpg');
    //add class to img
    img.setAttribute('class', 'thumb');
    var video = document.createElement("div");
    video.setAttribute("class", 'video_here');
    el.appendChild(img);
    el.appendChild(video);
    // On click get video
    el.addEventListener('click',function(){ 
    var iframe = document.createElement("iframe");
    iframe.setAttribute('class','youtube_video');
    iframe.setAttribute('src','https://www.youtube.com/embed/'+
    this.id +'?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1'); 
    // Remplace img for video
    this.parentNode.replaceChild(iframe, this);
  },false);  
}