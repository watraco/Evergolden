
        let popup2  = document.getElementById("saving-popup2");
        let popup3  = document.getElementById("saving-popup3");
        let popup4  = document.getElementById("saving-popup4");
        let popup5  = document.getElementById("saving-popup-withdraw");
        let profilePopup = document.getElementById("profile-popup")

        function openPopup1(){
            document.getElementById("saving-popup1").classList.add("open-popup");
        }

        function openPopup2(){
            popup2.classList.add("open-popup");
        }

        function openPopup3(){
            popup3.classList.add("open-popup");
        }

        function openPopup4(){
            popup4.classList.add("open-popup");
        }

        function closePopup1(){
            document.getElementById("saving-popup1").classList.remove("open-popup");
        }

        function closePopup2(){
            popup2.classList.remove("open-popup");
        }

        function closePopup3(){
            popup3.classList.remove("open-popup");
        }

        function closePopup4(){
            popup4.classList.remove("open-popup");
        }

        function profilepopup(){
          profilePopup.classList.add("open-profile")
        }

function closeprofilepopup(){
            profilePopup.classList.remove("open-profile");
        }


        
        function withdraw(){
            popup5.classList.add("open-popup");
        }
        function closewithdraw(){
            popup5.classList.remove("open-popup");
        }


                function error(){
            window.location.href = "error.html";
        }













