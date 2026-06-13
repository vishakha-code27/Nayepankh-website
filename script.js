const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
const darkBtn = document.getElementById("darkModeBtn");

if(darkBtn){
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}
const form = document.getElementById("volunteerForm");

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Thank you for registering as a volunteer!");
        form.reset();
    });
}