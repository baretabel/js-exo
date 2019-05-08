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

function malade() {
    function gorge() {
        x = prompt('Avez vous de la fièvre?\n\rOui\n\rNon');
        if (x == 'Oui') {
            alert('Vous avez un Rhume.');
        } else if (x == 'Non') {
            alert('Vous avez un Mal de Gorge.');
        } else {
            gorge()
        }
    }
    function aucune() {

        x = prompt('Avez vous de la toux?\n\rOui\n\rNon');
        if (x == 'Oui') {
            fievre();
        } else if (x == 'Non') {
            alert('Vous n\'avez rien.');
        } else {
            aucune()
        }
    }
    function fievre() {
        x = prompt('Avez vous de la fièvre?\n\rOui\n\rNon');
        if (x == 'Oui') {
            alert('Vous avez un Rhume.');
        } else if (x == 'Non') {
            alert('Vous avez un Refroidissement.');
        } else {
            fievre()

        }
    }
    var x = prompt('Où avez vous mal?\n\rAbdomen\n\rGorge\n\rAucune');
    if (x == 'Abdomen') {
        alert('Vous avez l\'appendicite.');
    } else if (x == 'Gorge') {
        gorge()
    } else if (x == 'Aucune') {
        aucune()
    } else {
        malade()
    }
}
        

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
    var x = Math.round(Math.random() * 100);
    var a = 10;
    for (var y = 0; y < 10; y++) {
        var z = prompt("Entrez un nombre");
        if (z == x) {
            alert("Bravo!");
            break;
        } else if (z < x) {
            alert("Plus Grand. \n\r Nbr d'essaie restant:" + a);
            a = a - 1;
        } else if (x < z) {
            alert("Plus petit.\n\r Nbr d'essaie restant:" + a);
            a = a - 1;
        }
    }
}
shifoumi1();
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
        if (z == i) {
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
        } else {
            alert('Manche Perdue');
            y = y + 1;
        }
        if (x == 3) {
            alert('Bravo! Partie Gagnée!')
            break;
        }
        if (y == 3) {
            alert(' Partie Perdu :\'\(')
            break;
        }
    }

}
function shifoumi1() {
    var mishoufi = ['Pierre', 'Feuille', 'Ciseaux'];
    function nombreAleatoire(max) {
        return Math.round(Math.random() * max);
    }


    var x = 0;
    var y = 0;
    for (var a = 1; a != -1; a++) {
        var z = prompt('1.Pierre\n\r 2.Feuille\n\r 3.Ciseaux');

        if (z != 'Feuille' && z != 'Pierre' && z != 'Ciseaux' && z != 42) {
            z = prompt('Réponse invalide, veuillez recommencé.\n\r \n\r \n\r \n\r1.Pierre\n\r 2.Feuille\n\r 3.Ciseaux');

        } else if (z == 42) {
            alert('Bravo! Tu connais la réponse de la vie, c\'est gagné');
            break;
        }


        var i = mishoufi[nombreAleatoire(2)];
        alert("L'odinateur choisie " + i);
        if (z == i) {
            alert('Egalité');
        }else if (z == 'Pierre' && i == 'Ciseaux' || z == 'Feuille' && i == 'Pierre' || z == 'Ciseaux' && i == 'Feuille') {
            alert('Manche Gagnée');
            x = x + 1;
        }else if (z == 'Pierre' && i == 'Feuille' || z == 'Feuille' && i == 'Ciseaux' || z == 'Ciseaux' && i == 'Pierre') {
            alert('Manche Perdu');
            y = y + 1;
        }
        if (x == 3) {
            alert('Bravo! Partie Gagnée!')
            break;
        }
        if (y == 3) {
            alert(' Partie Perdu :\'\(')
            break;
        }
        alert(" Manche "+a+"\n\r Score:\n\r Joueur "+x+"\n\r Ordinateur "+y)
    }

}

