let cooldown = false;

button = document.getElementById('donate_button');
button.addEventListener('click', function(){
    if (cooldown == false){
        let donated_amount = document.getElementById('money_input').value;

        if (donated_amount == '') {
            donated_amount = 0;
        }
    
        console.log(donated_amount);
    
        if (donated_amount > 0) {
            var horraySound = new Audio("sound/hooray.mp3");
            horraySound.play();
            
            const rect = button.getBoundingClientRect();
            
            confetti({
                particleCount: 100,
                spread: 70,
                origin: {
                    x: (rect.left + rect.width / 2) / window.innerWidth,
                    y: (rect.top + rect.height / 2) / window.innerHeight
                }
            });
        }
        else {
            cooldown = true;
            alert("YOU CAN'T DONATE NOTHING >:(")

            var roarSound = new Audio("sound/tigerroar.mp3");
            roarSound.play();
            const tigerPic = document.getElementById('tiger_pic');
            tigerPic.classList.add('animate-tiger');

            tigerPic.addEventListener('transitionend', function handleTransitionEnd() {
                setTimeout(() => {
                    tigerPic.classList.remove('animate-tiger');
                    cooldown = false;
                }, 1000);
            });
        }
    }
});

