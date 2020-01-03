document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function () {
        var scroll = this.pageYOffset;
        var zoom = document.querySelector(".zoom");

            zoom.style.backgroundSize = (100 + scroll) + "%";
            zoom.style.opacity = 0 + (zoom.offsetHeight - scroll*1.5) / zoom.offsetHeight;
            if (scroll<465) {
                zoom.style.zIndex = "3"
            }
            else {
                zoom.classList.toggle("hidden");
                zoom.style.zIndex = "-2";
            }

                  

        });

        var burger = document.getElementById("burger");
        burger.addEventListener('click', function () {
            
            var navbar = document.getElementById("navbar");
            navbar.classList.toggle("hidden");
        
        });
    });


