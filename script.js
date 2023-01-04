//selected all links in navbar to smooth its scroll
const links = document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth", block: "end"
        });
        
    });
});

$(document).on("click", 'nav div div a', function() {
    $(this).addClass('active').siblings().removeClass('active');
})