let button = document.querySelector(".line-box"),
        links = document.querySelector(".aside");
        
 button.addEventListener("click",() => {
            links.classList.toggle("display");
        })