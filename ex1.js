// 1



function Voiture(model , marque, annee, type,
    carburant ) {
    this.model = model ;
    this.marque = marque ;
    this.annee = annee ;
    this.type = type ;
    this.carburant = carburant ;
}


//2

let V1 = new Voiture("Civic", "olkswagen", 2022, "Sedan", "Essence");
let v2 = new Voiture("Mustang", "BMW", 2021, "Coupé", "Essence");
let v3 = new Voiture("Accord", "Peugeot", 2020, "Sedan", "Hybride");


//3

class Hyndai extends Voiture {

    constructor(model , marque, annee, type, carburant , serie , hybride ) {

     super(model , marque, annee, type, carburant );
        this.serie = serie ;
        this.hybride = hybride ;

    }
}
    class Ford extends Voiture {
    
    constructor(model , marque, annee, type, carburant , option  ) {

    super(model , marque, annee, type, carburant );
            this.option = option ;
            
      }

}

//4

Voiture.sort((a, b) => a.annee - b.annee);

Voitures.forEach(voiture => {
    console.log(`${Voiture.marque} ${Voiture.model} ${Voiture.annee} - ${Voiture.curbant}`);
});



