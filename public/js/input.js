var form = document.getElementById('form');
var input = document.getElementById('input');

form.addEventListener('submit', function(e) {
    var input = document.getElementById('input');
    var inputString = $("#input").val();
    log1 = document.querySelector('#log1');
    log2 = document.querySelector('#log2');
    log3 = document.querySelector('#log3');
    log4 = document.querySelector('#log4');
    log5 = document.querySelector('#log5');
    dreamlog = document.querySelector('#dreamlog');
    back2 = document.querySelector('#back2');
    objective = document.querySelector('#objective');
    var counter = 0;
    loc1unlocked = false;
    loc2unlocked = false;
    loc3unlocked = false;
    loc4unlocked = false;
    loc5unlocked = false;
    var form = document.getElementById('form');
    var input = document.getElementById('input');
    var loc1 = new Audio('audio/loc1.WAV');
    var loc2 = new Audio('audio/loc2.WAV');
    var loc3 = new Audio('audio/loc3.wav');
    var loc4 = new Audio('audio/loc4.wav');
    var loc5 = new Audio('audio/loc5.wav');


    e.preventDefault();
    
    if (input.value) {
        // socket.emit('chat message', input.value);
        input.value = '';
        console.log(inputString);
    }
    if(loc1unlocked == true){

        localStorage.setItem('gateway1','1');
        console.log(localStorage.getItem('gateway 1 unlocked'));
    }

    if(loc2unlocked == true) {
        localStorage.setItem('gateway2','1');
        console.log(localStorage.getItem('gateway 2 unlocked'));

    }

    if(loc3unlocked == true) {
        localStorage.setItem('gateway3','1');
        console.log(localStorage.getItem('gateway 3 unlocked'));

    }

    if(loc4unlocked == true) {
        localStorage.setItem('gateway4','1');
        console.log(localStorage.getItem('gateway 4 unlocked'));

    }

   if(loc5unlocked == true) {
    localStorage.setItem('gateway5','1');
    console.log(localStorage.getItem('gateway 5 unlocked'));

    }

    // if(counter == 1){

    //     localStorage.setItem('gateway','1');
    //     console.log(localStorage.getItem('gateway'));
    // }

    // else if(counter == 2) {
    //     localStorage.setItem('gateway','2');
    //     console.log(localStorage.getItem('gateway'));

    // }

    // else if(counter == 3) {
    //     localStorage.setItem('gateway','3');
    //     console.log(localStorage.getItem('gateway'));

    // }

    // else if(counter == 4) {
    //     localStorage.setItem('gateway','4');
    //     console.log(localStorage.getItem('gateway'));

    // }

    // else if(counter == 5) {
    //     localStorage.setItem('gateway','5');
    //     console.log(localStorage.getItem('gateway'));

    // }

    
     if (inputString.includes('1') && loc1unlocked == false){
        playTrack1();
        counter++;
        loc1unlocked = true;
        console.log('loc1 unlocked');
        console.log('unlocked locations:');
        console.log(counter);
        inputString = '';
        back2.style.display = "flex";
        objective.style.display = "none";
        dreamlog.style.display = "flex";
        $("#dreamlog").text("log 1"); 
        log1.style.display = "flex";
    }

    if (inputString.includes('DEVOTION') && loc2unlocked == false){
        playTrack1();
        counter++;
        loc2unlocked = true;
        console.log('loc2 unlocked');
        console.log('unlocked locations:');
        console.log(counter);
        inputString = '';
        back2.style.display = "flex";
        objective.style.display = "none";
        dreamlog.style.display = "flex";
        $("#dreamlog").text("log 2"); 
        log2.style.display = "flex";
    }

    if (inputString.includes('SALVATION') && loc3unlocked == false){
        playTrack1();
        counter++;
        loc3unlocked = true;
        console.log('loc3 unlocked');
        console.log('unlocked locations:');
        console.log(counter);
        inputString = '';
        back2.style.display = "flex";
        objective.style.display = "none";
        dreamlog.style.display = "flex";
        $("#dreamlog").text("log 3"); 
        log3.style.display = "flex";
    }

    if (inputString.includes('4') && loc4unlocked == false){
        playTrack1();
        counter++;
        loc4unlocked = true;
        console.log('loc4 unlocked');
        console.log('unlocked locations:');
        console.log(counter);
        inputString = '';
        back2.style.display = "flex";
        objective.style.display = "none";
        dreamlog.style.display = "flex";
        $("#dreamlog").text("log 4"); 
        log4.style.display = "flex";
    }

    if (inputString.includes('5') && loc5unlocked == false){
        playTrack1();
        counter++;
        loc5unlocked = true;
        console.log('loc5 unlocked');
        console.log('unlocked locations:');
        console.log(counter);
        inputString = '';
        back2.style.display = "flex";
        objective.style.display = "none";
        dreamlog.style.display = "flex";
        // document.getElementById("pentagram-locked").style.display = none;
        // document.getElementById("pentagram-unlocked").style.display = block;
        $("#dreamlog").text("log 5"); 
        log5.style.display = "flex";
    }

    if (loc1unlocked == true && loc2unlocked == true && loc3unlocked == true && loc4unlocked == true && loc5unlocked == true){
        playTrack1();
        loc5unlocked = true;
        console.log('finished');
        inputString = '';
        back2.style.display = "none";
        objective.style.display = "flex";
        dreamlog.style.display = "none";
        document.getElementById("uuid-faffbd01-47ef-4272-89ac-d31673ff6396").style.display = "none";
        document.getElementById("uuid-28306325-d7ee-4a42-90d2-ebed74a80342").style.display = "block";
        $("#objective").text("krkrkkkKKKKk zZZZZZ  ...Quick!! Find me here wearing the final symbol and show me the full pentagram to taste the secret potion!!!");
    }

    if (inputString.includes('END')){
        playTrack1();
        loc5unlocked = true;
        console.log('finished');
        inputString = '';
        back2.style.display = "none";
        objective.style.display = "flex";
        dreamlog.style.display = "none";
        document.getElementById("uuid-faffbd01-47ef-4272-89ac-d31673ff6396").style.display = "none";
        document.getElementById("uuid-28306325-d7ee-4a42-90d2-ebed74a80342").style.display = "block";
        $("#objective").text("krkrkkkKKKKk zZZZZZ  ...Quick!! Find me here wearing the final symbol and show me the full pentagram to taste the secret potion!!!");
    }
}); 


//     if (inputString.includes('I AM PROTECTOR')){
//         levelSix();
//         playTrack1();
//         localStorage.setItem('gateway','6');
//         console.log(localStorage.getItem('gateway'));
//         loc5.play();
//     }
//     else{
//         $("#input").text("inactive port");

//     }
// }); 

zoommap = document.querySelector('#zoommap');
log = document.querySelector('#log');
info = document.querySelector('#info');
back = document.querySelector('#back');
back2 = document.querySelector('#back2');
dreamlog = document.querySelector('#dreamlog');
objective = document.querySelector('#objective');



function showLog(){                          
   log.style.visibility = "visible";
   back.style.visibility = "visible"; 
   $("#info").text("");                  
 
}

function showHelp(){                          
   log.style.visibility = "visible";
   $("#info").text("Locate the closest gateway by following the instructions in the text field and clicking on the landmarks on the map to move accordingly. As soon as you are in close proximity of a module, the game will detect this and display information on how to locate and operate the module. When set to the correct frequency, the module will reveal the local port code after a few seconds. Enter the received code into the port above to unlock one of five dream logs. The shape of the map is highly abstracted and should not be solely used for navigation. Follow the blue markings on the pavemment to make your way through the mirror world.");
   back.style.visibility = "visible";
}

function showAbout(){  
    log.style.visibility = "visible";                        
    $("#info").text("868 MHz is a hybrid reality game running on the same standardized frequency as the LoRa gateways of The Things Network. Chase the electric currents of the asphalt to locate gateways and encounter a being which has nested itself beneath the city streets, all the way down the power lines woven amidst its whirring epicenter. Early release for Tec Art 2022, in progress master graduation work by Experimental Publishing student Louisa Teichmann. Module cases designed and 3D printed by Roos Groothuizen. Sound design by Kevin Stam. Logo design by Camilo García A. Realised in support by Planetart, TETEM, Joseph Knierzinger, Michael Murthaugh, Cristina Cochior and in inspiration and conversation with Mika Motskobili and with mental support by Micah Snijkers. Don't hate the game, hate the players. Just kidding, I hope you're finding your way ok.");
    back.style.visibility = "visible";
    
}

function backAgain(){  
    log.style.visibility = "hidden";                        
    back.style.visibility = "hidden";
}

function backAgain2(){  
    dreamlog.style.display = "none";                       
    back2.style.display = "none";
    objective.style.display = "flex";
}

function log1Open(){  
    objective.style.display = "none";
    dreamlog.style.display = "flex";
    back2.style.display = "flex";
    $("#dreamlog").text("log 1"); 
    $("#log1").toggleClass("activelog");
}

function log2Open(){  
    objective.style.display = "none";
    dreamlog.style.display = "flex";
    back2.style.display = "flex";
    $("#dreamlog").text("log 2");
}

function log3Open(){  
    objective.style.display = "none";
    dreamlog.style.display = "flex";
    back2.style.display = "flex";
    $("#dreamlog").text("log 3");
}

function log4Open(){ 
    objective.style.display = "none";
    dreamlog.style.display = "flex";
    back2.style.display = "flex"; 
    $("#dreamlog").text("log 4");
}

function log5Open(){ 
    objective.style.display = "none";
    dreamlog.style.display = "flex";
    back2.style.display = "flex"; 
    $("#dreamlog").text("log5");
}

var loc1 = new Audio('./audio/loc1.WAV');
var loc2 = new Audio('./audio/loc2.WAV');
var loc3 = new Audio('./audio/loc3.wav');
var loc4 = new Audio('./audio/loc4.wav');
var loc5 = new Audio('./audio/loc5.wav');
r1 = document.querySelector('#rect13');
r2 = document.querySelector('#rect23');
r3 = document.querySelector('#rect35');
r4 = document.querySelector('#rect37');
r5 = document.querySelector('#rect27');
r6 = document.querySelector('#rect39');
r7 = document.querySelector('#rect41');
r8 = document.querySelector('#rect43');
r9 = document.querySelector('#rect19');
r10 = document.querySelector('#rect45');
r11 = document.querySelector('#rect47');
r12 = document.querySelector('#rect17');
r13 = document.querySelector('#rect49');
r14 = document.querySelector('#rect51');
r15 = document.querySelector('#rect15');


function playTrack1(){
    var Track1 = new Audio('./audio/unlocked.mp3');
    Track1.play();
}

function playTrack2(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    music2.play();
}

function breadCrumb1(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("I am standing outside the gallery space, hearing an unusual sound.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
    
    fillCrumbs();
    // document.querySelector("#rect23").style.fill = "pink";
    r2.style.fill = "#ff2400";


}

function breadCrumb2(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("I follow it down to the right, into a sidestreet that leads me past a parking garage covered in ivy.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";

    fillCrumbs();
    r3.style.fill = "#ff2400";
}

function breadCrumb3(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("From here I can see an open gate, but I do not enter. Just to the right of it, there is a path leading me to a high voltage metal door.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
    fillCrumbs();
    r4.style.fill = "#ff2400";
}

function breadCrumb4(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("I turn around, back to the gate. I still don't enter, but walk towards lights and noise, turning left and then right on the busy street.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
    fillCrumbs();
    r6.style.fill = "#ff2400";
}

function breadCrumb5(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("I keep on walking until I reach a massive pile of sand. I move swiftly along the construction fence, past the entrance of a church.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
    fillCrumbs();
    r7.style.fill = "#ff2400";
}

function breadCrumb6(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("I can see you now. I cross the street, walking towards benches covered in overgrown bushes. This is where we meet.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
    fillCrumbs();
    r8.style.fill = "#ff2400";
}

function breadCrumb7(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("I head towards the big water, but just before I reach the busy road, I take a turn left into a narrow side street. From here I can see a big white building, with many round windows and lights.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
    fillCrumbs();
    r10.style.fill = "#ff2400";
}

function breadCrumb8(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("I walk past it and head left, past you until I almost cannot walk any further. I run up the stairs, up and down, trying to shake you off. As I head down the second staircase, I see a small metal staircase on the backside of a building.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
    fillCrumbs();
    r11.style.fill = "#ff2400";
}

function breadCrumb9(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("I can see large metal structures by the water.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
    fillCrumbs();
    r13.style.fill = "#ff2400";
}

function breadCrumb10(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("A metallic bridge leads me over water, to the final gateway.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
    fillCrumbs();
    r14.style.fill = "#ff2400";
}

function breadCrumb11(){
    var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("I can see large metal structures by the water.");
    music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
}

function objective1(){
    // var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("Welcome to the .zip at Pijnackerstraat 75. Take your time, look around. On a computer, I have stored the files needed to unlock my findings in this place.");
    // music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
}

function objective2(){
    // var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("Welcome to Extra Practice at Zwaanshals 209. I used to buy my cigars here. It was a beautiful place to puff my life away. See the little shop? Ask for Louie's order to discover my secret recipe.");
    // music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
}

function objective3(){
    // var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("Welcome to Verfris at Zaagmolenstraat 129A. I used to find peace here, spending hours and hours in the garden, watching time pass by. In rotation lies the secret to my peace.");
    // music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
}

function objective4(){
    // var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("You are at Drift12 at Zaagmolendrift 12. I found, it's not just a matter of perspective, but of light and colour, addition and detraction.");
    // music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
}

function objective5(){
    // var music2 = new Audio('./audio/breadcrumb.mp3');
    $("#objective").text("You are inside DE STU at Kromme Wiekstraat 25. Here, I have hidden a secret. Two parts becoming one, identical symbols large and small. Here is where the answer lies.");
    // music2.play();
    objective.style.display = "flex";
    dreamlog.style.display = "none";
}

function fillCrumbs(){
    var crumbs = document.querySelectorAll(".crumbs");
    crumbs.forEach(function(crumb){
        crumb.style.fill = "#818779";
    });
}