import img6 from '../../img/modelPredefinis/T2/img1.png';
import img7 from '../../img/modelPredefinis/T2/img2.png';
import img0 from '../../img/modelPredefinis/T3/img1.png';
import img1 from '../../img/modelPredefinis/T3/img2.png';
import img2 from '../../img/modelPredefinis/T3/img3.png';
import img3 from '../../img/modelPredefinis/T3/img4.png';
import img4 from '../../img/modelPredefinis/T4/img1.png';
import img5 from '../../img/modelPredefinis/T4/img2.png';

export interface CardImg {
    id: number
    image: string;
    title: string;
    subtitle: string;
    description: string;
    materiauxToit: string;
    materiauxMur: string;
    materiauxPlafond: string;
    revetementSol: string;
    revetementExterieurMur: string;
    zoneGeographique: string;
    dateSelected: string;
    hauteurSousPlafond: number;
    longueur: number;
    largeur: number;
}

export interface SingleModel {
  type: string,
  name: string,
  info: {
    batiment:{
      toit: string,
      sol: string,
      mur: string,
      nbr_piece: number
    },
    piece:{
      materiau:{
        plafond: string,
        revet_sol: string,
        revet_ext: string,
        revet_int: string
      },
      dimension:{
        nom: string,
        hauteur: number,
        largeur: number,
        longueur: number
      },
      ouvertures:{
        ouverture_1: {
          type_ouverture: string,
          materiau: string,
          largeur: number,
          hauteur: number,
          couleur_ouverture: string
        },
        ouverture_2: {
          type_ouverture: string,
          materiau: string,
          largeur: number,
          hauteur: number,
          couleur_ouverture: number
        }
      },
    },
    list_pieces: []
  },
  img: string
}

export interface FormDataType {
  zone_geographique: string | undefined,
  date: string | undefined,
  piece: string | undefined
}

export const t1: CardImg[] = [
    { id: 1, image: `${img0}`, title: "cassia", subtitle: "T1", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'peinture claire',zoneGeographique:'Douala',dateSelected:'24/01/2024',hauteurSousPlafond:12,longueur:14,largeur:15, },
    { id: 2, image: `${img2}`, title: "BISSAP", subtitle: "T1", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,peinture claire, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'peinture foncée',zoneGeographique:'Yaounde',dateSelected:'24/01/2024',hauteurSousPlafond:15,longueur:16,largeur:15, },
    { id: 3, image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg", title: "BISSAP", subtitle: "T1", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,peinture claire, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'peinture foncée',zoneGeographique:'Ebolowa',dateSelected:'24/05/2024',hauteurSousPlafond:12,longueur:14,largeur:15, },
    { id: 4, image: `${img3}`, title: "BISSAP", subtitle: "T1", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'Moellons de pierre',zoneGeographique:'Daoula',dateSelected:'24/01/2025',hauteurSousPlafond:12,longueur:14,largeur:15, },
];

export const t2: CardImg[] = [
    { id: 5, image: `${img6}`, title: "BISSAP", subtitle: "T2", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'Moellons de pierre',zoneGeographique:'Garoua',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
    { id: 6, image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg", title: "BISSAP", subtitle: "T2", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'Moellons de pierre',zoneGeographique:'Maroua',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
    { id: 7, image: `${img7}`, title: "BISSAP", subtitle: "T2", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'Moellons de pierre',zoneGeographique:'Garoua',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
    { id: 8, image: `${img1}`, title: "BISSAP", subtitle: "T2", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'Moellons de pierre',zoneGeographique:'Yaounde',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
];

export const t3: CardImg[] = [
    { id: 9, image: `${img0}`, title: "PLEIN TERRE", subtitle: "T3", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'peinture claire',zoneGeographique:'Garoua',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
    { id: 10, image: `${img1}`, title: "PLEIN TERRE", subtitle: "T3", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'Moellons de pierre',zoneGeographique:'Daoula',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
    { id: 11, image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg", title: "PLEIN TERRE", subtitle: "T3", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'Moellons de pierre',zoneGeographique:'Maroua',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
    { id: 12, image: `${img2}`, title: "PLEIN TERRE", subtitle: "T3", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'peinture foncée',zoneGeographique:'Yaounde',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
    { id: 13, image: `${img3}`, title: "PLEIN TERRE", subtitle: "T3", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'Moellons de pierre',zoneGeographique:'Garoua',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
];

export const t4: CardImg[] = [
    { id: 14, image: `${img5}`, title: "KOLA", subtitle: "T4", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'Moellons de pierre',zoneGeographique:'Daouala',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
    { id: 15, image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg", title: "KOLA", subtitle: "T4", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'peinture claire',zoneGeographique:'Daouala',dateSelected:'24/11/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
    { id: 16, image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg", title: "KOLA", subtitle: "T4", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'Moellons de pierre',zoneGeographique:'Daouala',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
    { id: 17, image: `${img4}`, title: "KOLA", subtitle: "T4", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'Moellons de pierre',zoneGeographique:'Daouala',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
    { id: 18, image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg", title: "KOLA", subtitle: "T4", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'Moellons de pierre',zoneGeographique:'Daouala',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
    { id: 19, image: `${img2}`, title: "KOLA", subtitle: "T4", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'Moellons de pierre',zoneGeographique:'Daouala',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
];

export const t5: CardImg[] = [
    { id: 20, image: `${img5}`, title: "NEEM", subtitle: "T5", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'Moellons de pierre',zoneGeographique:'Daouala',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
    { id: 21, image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg", title: "NEEM", subtitle: "t5", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'Moellons de pierre',zoneGeographique:'Daouala',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
    { id: 22, image: `${img4}`, title: "NEEM", subtitle: "T5", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'Moellons de pierre',zoneGeographique:'Daouala',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
    { id: 23, image: `${img1}`, title: "NEEM", subtitle: "T5", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'Moellons de pierre',zoneGeographique:'Daouala',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
    { id: 24, image: `${img2}`, title: "NEEM", subtitle: "T5", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'Moellons de pierre',zoneGeographique:'Daouala',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
];

export const t6: CardImg[] = [
    { id: 25, image: `${img4}`, title: "BAOBAB", subtitle: "Duplex", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'Moellons de pierre',zoneGeographique:'Daouala',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
    { id: 26, image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg", title: "BAOBAB", subtitle: "Duplex", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'Moellons de pierre',zoneGeographique:'Daouala',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
    { id: 27, image: `${img5}`, title: "BAOBAB", subtitle: "Duplex", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'Moellons de pierre',zoneGeographique:'Daouala',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
    { id: 28, image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg", title: "BAOBAB", subtitle: "Duplex", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'Moellons de pierre',zoneGeographique:'Daouala',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
    { id: 29, image: `${img2}`, title: "BAOBAB", subtitle: "Duplex", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'Moellons de pierre',zoneGeographique:'Daouala',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
    { id: 30, image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg", title: "BAOBAB", subtitle: "Duplex", description: "'Typologie' : Incinérateur à biomasse, 'Envergure' : 2.10 m x 2.40 m x 5.00 m + tube métallique de 2.50 m (cheminée supérieure), 'Materiau': parpaing, tol en alluminium,Moellons de pierre, Blocs de terre comprimée ",materiauxToit:'tol en alluminium',materiauxMur:'parpaing',materiauxPlafond:'contre-plaquet',revetementSol:'Incinérateur à biomasse',revetementExterieurMur:'Moellons de pierre',zoneGeographique:'Daouala',dateSelected:'24/01/2023',hauteurSousPlafond:12,longueur:14,largeur:15, },
];
