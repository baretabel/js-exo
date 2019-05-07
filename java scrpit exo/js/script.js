function robot() {
    var reponse = prompt('');
    if (reponse == 'bonjour') {
        alert('Bonjour à toi!');
    } else if (reponse == 'tu vas bien ?') {
        alert('Bien et toi ?')
    } else alert(' Désolé, je ne comprends pas.')
}


function robot1() {
    var reponse = prompt('');
    if (reponse == 'bonjour') {
        reponse = prompt('Bonjour, Ca va?');
    } if (reponse == 'oui') {
        alert('Je suis content pour toi.')
    } else alert(' Désolé, il faut que je file.')
}




function name(params) {
    var reponse = prompt(' Quel a age avez vous?');
    if (reponse < 18) {
        alert('mineur');
    } else if (reponse >= 18) {
        alert('majeur');
    }

}

/*function five() {
    var reponse = prompt('Bonjour, quel age as tu?');
    if (reponse < 18) {
        alert('Tu es mineur');
        reponse = prompt('Tu es une fille ou un garçon?');
        if (reponse == 'fille') {
            reponse = prompt('Quel taille faite vous mademoiselle?');
            if (reponse < 1.70) {
                reponse = prompt('La schtrompfette quel est ton poids?');
                if (reponse < 60);
                {
                    alert('Faut penser a un régime, régine');
                    reponse = prompt('Je suis sympa?');
                    if (reponse == 'oui') {
                        alert('Merci');
                    } else {
                        alert('Désolé je n\'ai que oui dans mon dictionnaire')
                    }

                }else if (reponse >= 60) {
                    alert('Un conseil le Mc Do, tout de suite');
                    reponse = prompt('Je suis sympa?');
                    if (reponse == 'oui') {
                        alert('Merci');
                    } else {
                        alert('Désolé je n\'ai que oui dans mon dictionnaire')
                    }
                }

            } else if (reponse >= 1.70) {
                reponse = prompt('La dame de fer quel est ton poids?');
                if (reponse < 70); {
                    alert('Faut penser a un régime, régine');
                    reponse = prompt('Je suis sympa?');
                    if (reponse == 'oui') {
                        alert('Merci');
                    } else {
                        alert('Désolé je n\'ai que oui dans mon dictionnaire')
                    }

                }else if (reponse >= 70) {
                    alert('Un conseil le Mc Do, tout de suite');
                    reponse = prompt('Je suis sympa?');
                    if (reponse == 'oui') {
                        alert('Merci');
                    } else {
                        alert('Désolé je n\'ai que oui dans mon dictionnaire')
                    }
                }
            } else if (reponse == 'garçon') {
                reponse = prompt('Quel taille faite vous jeune homme?');
                if (reponse < 1.70) {
                    reponse = prompt('Minimoy quel est ton poids?');
                    if (reponse < 60);
                    {
                        alert('Faut arreté le chocolat buu.');
                        reponse = prompt('Je suis sympa?');
                        if (reponse == 'oui') {
                            alert('Merci');
                        } else {
                            alert('Désolé je n\'ai que oui dans mon dictionnaire')
                        }

                    }else if (reponse >= 60) {
                        alert('Un conseil le Mc Do, tout de suite');
                        reponse = prompt('Je suis sympa?');
                        if (reponse == 'oui') {
                            alert('Merci');
                        } else {
                            alert('Désolé je n\'ai que oui dans mon dictionnaire')
                        }
                    }
                }
                else if (reponse >= 1.70) {
                    reponse = prompt('Averel quel est ton poids?');
                } if (reponse < 70);
                {
                    alert('Faut arreté le chocolat buu.');
                    reponse = prompt('Je suis sympa?');
                    if (reponse == 'oui') {
                        alert('Merci');
                    } else {
                        alert('Désolé je n\'ai que oui dans mon dictionnaire')
                    }

                }else if (reponse >= 70) {
                    alert('Un conseil le Mc Do, tout de suite');
                    reponse = prompt('Je suis sympa?');
                    if (reponse == 'oui') {
                        alert('Merci');
                    } else {
                        alert('Désolé je n\'ai que oui dans mon dictionnaire')
                    }
                }

            }
        } else if (reponse >= 18) {
            alert('Tu es majeur');
            reponse = prompt('Tu es une femme ou un Homme?');
            if (reponse == 'femme') {
                reponse = prompt('Quel taille faite vous Madame?');
                if (reponse < 1.70) {
                    reponse = prompt('Minimoi quel est ton poids?');
                    if (reponse < 90);
                    {
                        alert('L\'obésité est proche');
                        reponse = prompt('Je suis sympa?');
                        if (reponse == 'oui') {
                            alert('Merci');
                        } else {
                            alert('Désolé je n\'ai que oui dans mon dictionnaire')
                        }

                    }else if (reponse >= 90) {
                        alert('Vive l\'anorexie');
                        reponse = prompt('Je suis sympa?');
                        if (reponse == 'oui') {
                            alert('Merci');
                        } else {
                            alert('Désolé je n\'ai que oui dans mon dictionnaire')
                        }
                    }

                } else if (reponse >= 1.70) {
                    reponse = prompt('La dame de fer quel est ton poids?');
                } if (reponse < 70);
                {
                    alert('L\'obésité est proche');
                    reponse = prompt('Je suis sympa?');
                    if (reponse == 'oui') {
                        alert('Merci');
                    } else {
                        alert('Désolé je n\'ai que oui dans mon dictionnaire')
                    }

                }else if (reponse >= 90) {
                    alert('Vive l\'anorexie');
                    reponse = prompt('Je suis sympa?');
                    if (reponse == 'oui') {
                        alert('Merci');
                    } else {
                        alert('Désolé je n\'ai que oui dans mon dictionnaire')
                    }
                }
            } else if (reponse == 'homme') {
                reponse = prompt('Quel taille faite vous Monsieur?');
                if (reponse < 1.70) {
                    reponse = prompt('Minimoy quel est ton poids?');
                    if (reponse < 90);
                    {

                        alert('L\'obésité est proche');
                        reponse = prompt('Je suis sympa?');
                        if (reponse == 'oui') {
                            alert('Merci');
                        } else {
                            alert('Désolé je n\'ai que oui dans mon dictionnaire')
                        }

                    }else if (reponse >= 90) {
                        alert('Vive l\'anorexie');
                        reponse = prompt('Je suis sympa?');
                        if (reponse == 'oui') {
                            alert('Merci');
                        } else {
                            alert('Désolé je n\'ai que oui dans mon dictionnaire')
                        }
                    }

                    else if (reponse >= 1.70) {
                        reponse = prompt('Slunder quel est ton poids?');
                    } if (reponse < 70);
                    {
                        alert('L\'obésité est proche');
                        reponse = prompt('Je suis sympa?');
                        if (reponse == 'oui') {
                            alert('Merci');
                        } else {
                            alert('Désolé je n\'ai que oui dans mon dictionnaire')
                        }

                    }else if (reponse >= 90) {
                        alert('Vive l\'anorexie');
                        reponse = prompt('Je suis sympa?');
                        if (reponse == 'oui') {
                            alert('Merci');
                        } else {
                            alert('Désolé je n\'ai que oui dans mon dictionnaire')
                        }
                    }


                }*/


function estMultipleDeTrois(nombre) {
    return nombre % 3 === 0;
  }
  function estMultipleDeCinq(nombre) {
    return nombre % 5 === 0;
  }
function boucle() {
    for (var i = 1; i < 200; i++) {
        if (i % 3 && i % 5) {
            console.log(i);
            for (let index = 0; index < 100000000; index++) {
            }
        } else {
            if (estMultipleDeTrois(i) && estMultipleDeCinq(i)) {
                console.log("FizzBuzz")
            } else {

                if (estMultipleDeTrois(i)) {
                    console.log("Fizz")
                }
                if (estMultipleDeCinq(i)) {
                    console.log("Buzz")
                }
            }
        }
    }
}
function devinette() {
    var x = Math.round(Math.random()*100);
    var a=10;
    for ( var y = 0; y <10; y++){
        var z = prompt("Entrez un nombre");
        if( z == x){ 
            alert("Bravo!");
            break;
        }else if (z<x){
            alert("Plus Grand. \n\r Nbr d'essaie restant:"+ a);
             a= a-1 ;
        }else if(x<z){
            alert("Plus petit.\n\r Nbr d'essaie restant:"+ a);
             a= a-1 ;
        }
    }  
}
shifoumi();
function shifoumi() {
    var mishoufi = ['Pierre', 'Feuille', 'Ciseaux'];
    function nombreAleatoire(max) {
        return Math.round(Math.random() * max);
    }
    function mainAleatoire() {
        return alert("L'odinateur choisie" + mishoufi[nombreAleatoire(2)]);

    }

    var x = 0;
    var y = 0;
    for (var a = 0; a != 1;) {
        var z = prompt('1.Pierre\n\r 2.Feuille\n\r 3.Ciseaux');
        if (z == 1) {
            z = mishoufi[0];
        } else if (z == 2) {
            z = mishoufi[1];
        } else if (z == 3) {
            z = mishoufi[2];
        } else if (z == 42) {
            alert('Bravo! Tu connais la réponse de la vie, c\'est gagné');
            break;
        } else if (z != 1 && z != 2 && z != 3 && z != 42) {
            z = prompt('Réponse invalide, veuillez recommencé.\n\r \n\r \n\r \n\r1.Pierre\n\r 2.Feuille\n\r 3.Ciseaux');
        }
        var i = mishoufi[nombreAleatoire(2)];
        alert("L'odinateur choisie" + i);
        if (z ==  i ) {
            alert('Egalité');
        } else if (z == mishoufi[0] && i == mishoufi[2]) {
            alert('Manche Gagnée');
            x = x + 1;
        } else if (z == mishoufi[1] && i == mishoufi[0]) {
            alert('Manche Gagnée');
            x = x + 1;
        } else if (z == mishoufi[2] && i == mishoufi[1]) {
            alert('Manche Gagnée');
            x = x + 1;
        }else{
            alert('Manche Perdue');
            y = y +1;
        }
        if(x==3){
            alert('Bravo! Partie Gagnée!')
            break;
        }
        if(y==3){
            alert(' Partie Perdu :\'\(')
            break;
        }
    }

}