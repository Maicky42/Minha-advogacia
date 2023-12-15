window.addEventListener("scroll", ()=>{
    let header = document.getElementById("header").classList.toggle("rolagem", scrollY > 0)
})