/*
function draw(){
    var canvas = document.getElementById("canvas");
    if(canvas.getContext){
        var context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);

        var rectWidth = canvas.width * 0.5;  
        var rectHeight = canvas.height * 0.4;


        context.fillStyle = "#45050C";
        context.fillRect(
            canvas.width * .25,
            canvas.height*.2,
            rectWidth,
            rectHeight);

        context.fillStyle = "rgba(0,0,200,0.6)";
        context.fillRect(
            canvas.width * .3,
            canvas.height*.23,
            rectWidth,
            rectHeight);
    }
}

const bgColors = ['#EDF7D2', '#C9C19F', '#7D7C7A'];
let colorIndex = 0;

setInterval(() =>{
    document.body.style.backgroundColor = bgColors[colorIndex % bgColors.length];
    colorIndex++;
}, 11000);

*/

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let currentSection = "";
    sections.forEach(section =>{
        const sectionTop = section.offsetTop;
        if(pageYOffset >= sectionTop - 60){
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if(link.getAttribute("href").includes(currentSection)){
            link.classList.add("active");
        }
    });
});