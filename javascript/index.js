window.addEventListener("DOMContentLoaded", () =>{

    //Définition d'une variable userName qui contient une chaîne de caractères vides.
    let userName = "Brice";

    //Opérateur ternaire avec la condition définie qui implique que s'il y a un userName alors 1er console.log après le point d'interrogation et si ce n'est pas le cas. C'est le console.log de droite qui s'exécute.
    userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

    //Définition d'une variable userQuestion qui contient une chaîne de caractères.
    let userQuestion = "Quelle série TV vais-je regarder ce soir ?"
    console.log(userQuestion);

    //Définition d'une variable randomNumber qui aura un nombre aléatoire entre 0 et 7. En JS, on démarre à 0 et non à 1.
    let randomNumber = Math.floor(Math.random() * 8);
    console.log(randomNumber);

    //Définition d'une variable qui contient une chaîne de caractères vide et j'affecte celle-ci à randomNumber donc la variable eightBall est égal à randomNumber.
    let eightBall = "";
    eightBall = randomNumber;

    /**
     * Mise en place de la condition if...else avec plusieurs instructions else if qui sont compris entre 0 et 8.
     * En fonction de la valeur du randomNumber et des conditions définies. Le choix se fait en fonction de ce dit nombres.
     * J'aurais pu utiliser le mot-clé switch à la place de la condition if...else.
     */
    if (eightBall === 0){
        console.log('Bones');
    } else if(eightBall === 1){
        console.log('The Sandman')
    }else if(eightBall === 2){
        console.log('Lucifer')
    }else if(eightBall === 3){
        console.log('Stargate SG1')
    }else if(eightBall === 4){
        console.log('Stargate Atlantis')
    }else if(eightBall === 5){
        console.log('Meurtres au paradis')
    }else if(eightBall === 6){
        console.log('MacGyver')
    }else if(eightBall === 7){
        console.log('The Flash')
    }
    else{
        console.log('Rien du tout !!!')
    }

});