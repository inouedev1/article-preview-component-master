const toggle = document.getElementById('shareimg');
const sharehd = document.getElementById("sharehd");
const triangle = document.getElementById("triangle");
const michelle = document.getElementById("michelle")

toggle.addEventListener("click", () =>{
    if (sharehd.style.display === "none") {
        sharehd.style.display = "block";
        share.style.backgroundColor = "hsl(212, 23%, 69%)"
        toggle.style.filter = "brightness(100)"
        triangle.style.display = "block"
        
    }else {
        sharehd.style.display = "none";
        share.style.backgroundColor = "hsl(210, 46%, 95%)"
        toggle.style.filter = "none"
        triangle.style.display = "none"
    }
    if(screen.width < 768 && sharehd.style.display === "block"){
        michelle.style.display = "none"
        share.style.marginTop = "20px";
        sharehd.style.marginTop = "20px"
        sharehd.style.paddingTop = "10px"
        card.style.height = "300px"

    }else{ 
            michelle.style.display = "grid";
            share.style.marginTop = "-175px";
            card.style.height = ""
        }
    
})