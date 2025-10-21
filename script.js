 const acc = document.querySelectorAll(".accordion");
    acc.forEach(button => {
      button.addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        panel.style.display = panel.style.display === "block" ? "none" : "block";
      });
    });
    const hamburger= document.querySelector(".hamburger");
    const navmenu= document.querySelector(".nav-menu");
    hamburger.addEventListener("click", ()=>{
        hamburger.classList.toggle("active");
        nav-menu.classList.toggle("active")
    })