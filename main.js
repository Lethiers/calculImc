// calcul IMC
class Imc{
    constructor(nom,taille,poids){
        this.nom = nom;
        this.taille = taille;
        this.poids = poids;
        this.imc = this.calculImc().toFixed(2);
    }
    calculImc(){
        return this.poids / (this.taille ** 2)
    }
    display(){

    // afficher message de réponse
    let ajouter = document.createElement('li');
    let txt = document.createTextNode(`bonjour ${this.nom} tu mesures ${this.taille} Mètres, tu pèses ${this.poids} kilos est ton Imc est de ${this.imc}`);
    ajouter.append(txt);
    let reponse = document.querySelector('ul');
    reponse.appendChild(ajouter);

    // aficher alerte 
    let ajouterAlert = document.createElement('li');

    this.poids < 18 ? ajouterAlert.append(document.createTextNode('attention tu es en insuffisance pondérale')) : this.poids < 25 ? ajouterAlert.append(document.createTextNode('ton Imc est correct')) : this.poids < 30 ? ajouterAlert.append(document.createTextNode('attention tu es en surpoids')): this.poids < 35 ? ajouterAlert.append(document.createTextNode('attention tu es en obésité!')): ajouterAlert.append(document.createTextNode('attention tu es en obésité sévère !!'))
    reponse.appendChild(ajouterAlert);
    }
}

// recupération des  input:
let recupInput = document.querySelectorAll('input');
let nom = recupInput[0].value;
let taille = recupInput[1].value;
let poids = recupInput[2].value;
const list = [
    new Imc (nom,taille,poids),
];



//Boucle forEach pour parcourir le tableau grâce au bouton
let bouton = document.querySelector('button');
bouton.addEventListener('click',()=>{
    list.forEach(uneCase => uneCase.display());
})


// empecher le reset de la page

const monForm = document.querySelector("form");

monForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("OK");
})

