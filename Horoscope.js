// function doIt(){
//     return("Great Success!");
// }

function doIt() {
    var y = document.getElementById("day").value;
    var x = document.getElementById("selectMonth").value;
    var f = document.getElementById("firstname").value;
    var l = document.getElementById("lastname").value;
    var spoonerismfirst = l.substring(0, 1) + f.substring(1, f.length);
    var spoonerismlast = f.substring(0, 1) + l.substring(1, l.length);
    if(y < 1){
        document.getElementById("sign").innerHTML = "That is not a valid date.";
    }
    if(x == 1){
        if(y >= 20 && y <= 31){
            var sign = "aqu";
        }
        if(y >= 1 && y <= 19){
            var sign = "cap";
        }
        if(y > 31){
            document.getElementById("sign").innerHTML = "That is not a valid date.";
        }
    }
    if(x == 2){
        if(y <= 18 && y >= 1){
            var sign = "aqu";
        }
        if(y <= 29 && y >= 19){
            var sign = "pis";
        }
        if(y > 29){
            document.getElementById("message").innerHTML = "That is not a valid date, you fool. Do you know how to count? Were you born yesterday? Are you Teige Bradford?";
        }
    }
    if(x == 3){
        if(y <= 20 && y >= 1){
            var sign = "pis";
        }
        if(y >= 21 && y <= 31){
            var sign = "ari";
        }
        if(y > 31){
            document.getElementById("sign").innerHTML = "That is not a valid date, you fool.";
        }
    }
    if(x == 4){
        if(y <= 19 && y >= 1){
            var sign = "ari";
        }
        if(y >= 20 && y <= 30){
            var sign = "tau";
        }
        if(y > 30){
            document.getElementById("sign").innerHTML = "That is not a valid date, you fool.";
        }
    }
    if(x == 5){
        if(y <= 20 && y >= 1){
            var sign = "tau";
        }
        if(y >= 21 && y <= 31){
            var sign = "gem";
        }
        if(y > 31){
            document.getElementById("sign").innerHTML = "That is not a valid date.";
        }
    }
    if(x == 6){
        if(y >= 1 && y <= 20){
            var sign = "gem";
        }
        if(y >= 21 && y <= 30){
            var sign = "can";
        }
        if(y > 30) {
            document.getElementById("sign").innerHTML = "That is not a valid date, you fool.";
        }
    }
    if(x == 7) {
        if (y >= 1 && y <= 22) {
            var sign = "can";
        }
        if (y >= 23 && y <= 31) {
            var sign = "leo";
        }
        if (y > 31) {
            document.getElementById("sign").innerHTML = "That is not a valid date, you fool.";
        }
    }
    if(x == 8){
        if(y <= 22 && y >= 1){
            var sign = "leo";
        }
        if(y >= 23 && y <= 31){
            var sign = "vir";
        }
        if(y > 31){
            document.getElementById("sign").innerHTML = "That is not a valid date.";
        }
    }
    if(x == 9){
        if(y <= 22 && y >= 1){
            var sign = "vir";
        }
        if(y >= 23 && y <= 30){
            var sign = "lib";
        }
        if(y > 30){
            document.getElementById("sign").innerHTML = "That is not a valid date.";
        }
    }
    if(x == 10){
        if(y <= 22 && y >= 1){
            var sign = "lib";
        }
        if(y >= 23 && y <= 31){
            var sign = "sco";
        }
        if(y > 31){
            document.getElementById("sign").innerHTML = "That is not a valid date.";
        }
    }
    if(x == 11){
        if(y <= 21 && y >= 1){
            var sign = "sco";
        }
        if(y >= 22 && y <= 30){
            var sign = "sag";
        }
        if(y > 30){
            document.getElementById("sign").innerHTML = "That is not a valid date, you fool.";
        }
    }
    if(x == 12){
        if(y <= 21 && y >= 1){
            var sign = "sag";
        }
        if(y >= 22 && y <= 31){
            var sign = "cap";
        }
        if(y > 31){
            document.getElementById("sign").innerHTML = "That is not a valid date, you fool.";
        }
    }




    if(sign == "cap"){
        document.getElementById("sign").innerHTML = "Capricorn";
        // document.getElementById("bkjhb").innerHTML = "Hi";
        document.getElementById("message").innerHTML = "Congratulations, " + spoonerismfirst + " " + spoonerismlast +", you have the best sign. You are " +
            "superior to people born in any other time of the year. Life will continue to be a breeze for you, just " +
            "beware of people named Teige. Cunning, devious, mischievous, people named Teige are out to get you.";
        document.getElementById("image").innerHTML = "<img width='550' src='img/cap.jpg'>";

    }
    if(sign == "aqu"){
        document.getElementById("sign").innerHTML = "Aquarius";
        document.getElementById("message").innerHTML = "You have a strange sign; what even is a water bearer? " +
            "You are lucky, " + spoonerismfirst + " " + spoonerismlast + ", the stars predict great wealth, and also that people will falsely claim friendship with you in hopes of " +
            "getting a part of your personal fortune."
        document.getElementById("image").innerHTML = "<img width='550' src='img/aqu.jpg'>";

    }
    if(sign == "sag"){
        document.getElementById("sign").innerHTML = "Sagittarius";
        document.getElementById("message").innerHTML = "Regardless of how much you wish this were false, your lame " +
            "constellation looks like a teapot. Beware of tea, and pots, " + spoonerismfirst + " " + spoonerismlast + "."
        document.getElementById("image").innerHTML = "<img width='550' src='img/sag.jpg'>";
    }
    if(sign == "tau"){
        document.getElementById("sign").innerHTML = "Taurus";
        document.getElementById("message").innerHTML = "You definitely have one of the more interesting signs, " + spoonerismfirst + " " + spoonerismlast +
            ". The planets " +
            "predict that you will be mutilated by a bull being ridden by Teige Bradford, and that afterward Teige will " +
            "stand over your mutilated body and chuckle heartily. What a hard way to go.";
        document.getElementById("image").innerHTML = "<img width='550' src='img/tau.jpg'>";

    }
    if(sign == "leo"){
        document.getElementById("sign").innerHTML = "Leo";
        document.getElementById("message").innerHTML =  spoonerismfirst + " " + spoonerismlast + "- Beware of any fraud claiming that the positions of the planets " +
            "at the time of your birth could possibly affect what happens to you later in life.";
        document.getElementById("image").innerHTML = "<img width='550' src='img/leo.jpg'>";
    }
    if(sign == "ari"){
        document.getElementById("sign").innerHTML = "Aries";
        document.getElementById("message").innerHTML = "Beware of puppies, " + spoonerismfirst + " " + spoonerismlast + ".";
        document.getElementById("image").innerHTML = "<img width='550' src='img/aries.jpg'>";
    }
    if(sign == "gem"){
        document.getElementById("sign").innerHTML = "Gemini";
        document.getElementById("message").innerHTML = "The planets predict that some cold hard cash is coming your way." +
            "When this is the case, good things will continue to come your way if you share some of your good fortune with " +
            "people named David. Also, you will soon be reunited with your long lost twin, " + spoonerismfirst + " " + spoonerismlast + ".";
        document.getElementById("image").innerHTML = "<img width='550' src='img/gem.jpg'>";
    }
    if(sign == "vir"){
        document.getElementById("sign").innerHTML = "Virgo";
        document.getElementById("message").innerHTML = "The crossing of Mars and Jupiter as viewed from Earth means that " +
            "you should be wary of electronics. Staying away from computers might be a good idea, " + spoonerismfirst + " " + spoonerismlast + ".";
        document.getElementById("image").innerHTML = "<img width='500' src='img/vir.jpg'>";
    }
    if(sign == "sco"){
        document.getElementById("sign").innerHTML = "Scorpio";
        document.getElementById("message").innerHTML = "You have one of the more interesting signs, " + f +  ", scorpions are unassuming " +
            "yet deadly. Beware of people that appear harmless, for they might be out to get you.";
        document.getElementById("image").innerHTML = "<img width='550' src='img/sco.jpg'>";
    }
    if(sign == "can"){
        document.getElementById("sign").innerHTML = "Cancer";
        document.getElementById("message").innerHTML = "Well, " + spoonerismfirst + " " + spoonerismlast + ", you have " +
            "one of the less fortunate signs; crabs are somewhat lame, but my they are tasty. The planets predict that" +
            "you should stay hydrated.";
        document.getElementById("image").innerHTML = "<img width='550' src='img/can.jpg'>";
    }
    if(sign == "pis"){
        document.getElementById("sign").innerHTML = "Pisces";
        document.getElementById("message").innerHTML = "Stay in school, " + f + ". Don't do drugs, kid.";
        document.getElementById("image").innerHTML = "<img width='550' src='img/pisces.jpg'>";
    }
    if(sign == "lib"){
        document.getElementById("sign").innerHTML = "Libra";
        document.getElementById("message").innerHTML = "When you commit a crime, " +
            spoonerismfirst + " " + spoonerismlast + ", beware of vigilante justice, for it is hate driven and powerful.";
        document.getElementById("image").innerHTML = "<img width='550' src='img/libra.jpg'>";
    }



}

