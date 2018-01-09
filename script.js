function crue(date, hauteurcrue) {
  this.date = date;
  this.hauteurcrue = hauteurcrue;
}
var crue1 = new crue(1976, 5);
var crue2 = new crue(1990, 2);
var crue3 = new crue(2017, 4.5);
//console.log(crue1.date);

function bateau(nom, hauteur) {
  this.nom = nom;
  this.hauteur= hauteur;
}
var bateau1 = new bateau('Amiral', 3.40);
var bateau2 = new bateau('Moustique', 1.20);
var bateau3 = new bateau('Champion', 4.50);
//console.log(bateau1.nom, bateau1.hauteur);
 
function passage (crue, bateau) {
  var passeSousLePont = 8 - crue1.hauteurcrue - bateau1.hauteur;

    if (passeSousLePont < 0) {
      console.log('Le bateau ne passe pas.' +' Hauteur manquante de : ' + -(passeSousLePont) + 'm');
    } else {
      console.log('Pas de soucis, ça passe');
    }
}
