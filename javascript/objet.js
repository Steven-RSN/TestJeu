
const objet=[
    ['un manteau','une lance','un chapeau','une corde'],
    ['2or']
]
const listEvenement=[
    [ ['fond/Ferme_cours.jpeg','fond/interrieur-ferme-transformed.png'],
      [coursInt,fermeInt],
      ['- Entrer' , '- Partir',]

    ],
    [
        ['fond/MontagneChemin.jpeg', 'fond/mountain-lake.png'],
        ['futur img'],
        [montagneChemintext,montagneLac],
        ['- Chemin de gauche','- Chemin de droite']
    ]
]
const objetlieux =[
[   
    riviere=[],
    plaine=[],
    campobjet=[]
],

[ 
    foretOb=[],
    fermeOb=[
        coursOb=['petit baton en bois'],
        fermeIntOb=['2 or','couteau','jouet en bois']
        ],
    montagneOb=[],
]

]

const cacher=[
    {bouton:'- Rester',
     textSecret: trappeurSecret,   
     secret:'trappeur'

    },

    [],
    []
]

const personnage = [

  [ 
        
            {
                imgPersonnage :'personnage/Trappeur.png',
                dialogue : trappeur,
                ObjetAVoler : objet,
                secret:cacher[0],

            },
    
    
            {
                
                imgPersonnage :'personnage/loup (2).png',
                dialogue : trappeur,
                ObjetAVoler : objet
                
            }
         

    ],

     [ 
        {
            img :'fond/plaine1.jpg',
            text :['bg']  // riviereText1
        },

        {
            img :'fond/Ferme.png',
            text : [] // textPlainne
        },

        {
            img :'fond/montagne1.jpg',
            text : [] // textPlainneFerme
        }
    ],
]





























const carte = [

        [{
            img :'fond/plainne-nt8Vs8VKN-transformed.jpg',
            text : riviereText1,
            PersonnagePresent:true,
            perso : personnage[0][1],
            evenement: false,
            objet:objetlieux


        },

        {
            img :'fond/plainne-_1_ (1).jpg',
            text : textPlainne,
            PersonnagePresent:false,
            evenement: false,
            objet:objetlieux
            
        },

        {
            img :'fond/Campeur.jpeg',
            text : camp,
            PersonnagePresent:true,
            perso : personnage[0][0],
            evenement: false,
            objet:objetlieux

        }
        ],

    [
        {
            img :'fond/entrer_foret.jpeg',
            text : entrerforet,
            PersonnagePresent:false,
            evenement: false,

        },

        {
            img :'fond/Ferme.png',
            text : textPlainneFerme,
            PersonnagePresent:false,
            evenement: true,
            event:listEvenement[0][0],
            textEvent:listEvenement[0][1],
            boutonEvent:listEvenement[0][2],
            objet :objetlieux [1][1]

        },

        {
            img :'fond/montagne.png',
            text : montagne,
            PersonnagePresent:false,
            evenement: true,
            event:listEvenement[1][0],
            textEvent:listEvenement[1][2],
            boutonEvent:listEvenement[1][3],
            event_double:listEvenement[1][1],
            objet :false

        }
    ],
    [
        {
            img :'fond/champs_de_bataill.png',
            text : champs_de_bataille
        },

        {
            img :'fond/clairiereDePierre-transformed.png',
            text : clairiere_De_Pierre
        },

        {
            img :'fond/Village (2).png',
            text : Village
        }
    ]
]


itemJoueur=[]








