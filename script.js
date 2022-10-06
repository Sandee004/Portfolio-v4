 function openNav() {
                document.getElementById("myNav").style.width = "70%";
            }

            function closeNav() {
                document.getElementById("myNav").style.width = "0%";
            }

            var menuA = document.getElementById("monk1");
                menuA.addEventListener("click", function () {
                    closeNav()
                });

                var menuB = document.getElementById("monk2");
                menuB.addEventListener("click", function () {
                    closeNav()
                });

                var menuC = document.getElementById("monk3");
                menuC.addEventListener("click", function () {
                    closeNav()
                });

                var menuD = document.getElementById("monk4");
                menuD.addEventListener("click", function () {
                    closeNav()
                });

                var menuE = document.getElementById("monk5");
                menuE.addEventListener("click", function() {
                    closeNav()
                });

/*
const boxes = document.querySelectorAll('.boxa')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 3 * 4

    boxes.forEach(boxa => {
        const boxTop = boxa.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            boxa.classList.add('show')
        } else {
            boxa.classList.remove('show')
        }
    })
}*/