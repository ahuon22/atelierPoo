//Ex 3

class Vecteur2D {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    //une méthode d’affichage
    afficher() {
        console.log(Vecteur2D (`${this.x}, ${this.y}`));
    }

    //une méthode d'addition de deux vecteurs
    static additionner(vecteur1, vecteur2) {
        return new Vecteur2D(vecteur1.x + vecteur2.x, vecteur1.y + vecteur2.y);
    }
}


// creation de la classe Rectangle
class Rectangle {
    constructor(longueur = 1, largeur = 1) {
        this.longueur = longueur;
        this.largeur = largeur;
        this.nom = "rectangle";
    }

    // Méthode d'affichage
    afficher() {
        console.log(`${this.nom} - Longueur: ${this.longueur}, Largeur: ${this.largeur}`);    }

    // Méthode pour calculer la surface
    surface() {
        return this.longueur * this.largeur;
    }
}

// creation de la classe Carré qui hérite de Rectangle
class Carre extends Rectangle {
    constructor(cote = 1) {
        super(cote, cote);
        this.nom = "carre";
    }
}

//la classe Point
class Point {
    constructor(x = 0.0, y = 0.0) {
        this.x = x;
        this.y = y;
    }
}

// la classe Segment
class Segment {
    constructor(x1, y1, x2, y2) {
        this.orig = new Point(x1, y1);
        this.extrem = new Point(x2, y2);
    }
}

//////////////////////////////
let vecteur1 = new Vecteur2D();
let vecteur2 = new Vecteur2D(7, 8);
vecteur1.afficher();
vecteur2.afficher();

//////////////////////////////
let somme = Vecteur2D.additionner(vecteur1, vecteur2);
console.log("Somme des vecteurs :");
somme.afficher();

//////////////////////////////
let rectangle = new Rectangle(4, 9);
let carre = new Carre(4);
console.log("Rectangle :");
rectangle.afficher();
console.log("Surface du rectangle :", rectangle.surface());
console.log("Carre :");
carre.afficher();
console.log("Surface du carre :", carre.surface());

//////////////////////////////
let segment = new Segment(4, 3, 4, 5);
console.log("Segment :", segment);

ww
