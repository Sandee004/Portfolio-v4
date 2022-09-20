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
