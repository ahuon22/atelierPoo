// Ex 2

//1

class Etudiant {
    constructor(nom, prenom, age, cne) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.cne = cne;
    }

//2

    etudier() {
        console.log(`${this.nom} ${this.prenom} etudie.`);
    }
}

//1
class Professeur {
    constructor(nom, age, cin) {
        this.nom = nom;
        this.age = age;
        this.cin = cin;
    }
//2
    enseigner() {
        console.log(`${this.nom} enseigne.`);
    }

}


////////////////////////////////////////
let etudiants = [
    new Etudiant("Nouhaila", "Saizi", 23, "325"),
    new Etudiant("Amina", "mahrour", 21, "201"),
    new Etudiant("ali", "louay", 20, "166"),
    new Etudiant("karim", "Youssef", 22, "155"),
    new Etudiant("sami", "Ali", 19, "555"),
    new Etudiant("hanae", "Ahmed", 20, "666"),
    new Etudiant("Omar", "kaoutar", 21, "524"),
    new Etudiant("mohssin", "marouan", 22, "352")
];



//2
////////////////////////////////////////
etudiants.forEach(etudiant => {
    etudiant.etudier = function() {
        console.log(`${this.nom} ${this.prenom} étudie.`);
    };
});

////////////////////////////////////////
let professeur1 = new Professeur("Sara", "Omar", 52, "1122");
let professeur2 = new Professeur("Yassin", "Fatima", 47, "3344");

////////////////////////////////////////
professeur.enseigner = function() {
    console.log(`${this.nom} enseigne.`);
};


//3

etudiants.sort((a, b) => {
    if (a.nom === b.nom) {
        return a.prenom.localeCompare(b.prenom);
    }
    return a.nom.localeCompare(b.nom);
});


etudiants.forEach(etudiant => {
    console.log(`${etudiant.nom} ${etudiant.prenom} - ${etudiant.cne}`);
});