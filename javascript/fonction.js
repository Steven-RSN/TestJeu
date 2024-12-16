
let divItem = document.querySelector('.item')

function Deplacement(ligne, colonne,nouvelleCoordonnéeLigne,nouvelleCoordonnéeColonne){


    //appliquerFonduNoir(sonTuer,0.6,0.6)
   // let btnpiller = document.querySelector('.')


    let divWrap = document.querySelector('.wrap')
    console.log("colonne : " +colonne)
    console.log("ligne : " +ligne)
    console.log(carte[0][2].personnagePresent)

    if(ligne + nouvelleCoordonnéeLigne < 0 || ligne + nouvelleCoordonnéeLigne > 2
        || colonne + nouvelleCoordonnéeColonne < 0 || colonne + nouvelleCoordonnéeColonne > 2){
        console.log('deplacement pas possible')
        
        return
    }else if( divWrap){
        divWrap.remove()

        let bodyImgDeFond = document.querySelector('body')
        bodyImgDeFond.style.backgroundImage = `url('${carte[ligne + nouvelleCoordonnéeLigne][colonne + nouvelleCoordonnéeColonne].img}')`
       
        console.log('carte img: ' + carte[ligne + nouvelleCoordonnéeLigne][colonne + nouvelleCoordonnéeColonne].img)
        console.log(bodyImgDeFond)

        textPancarte(carte[ligne + nouvelleCoordonnéeLigne][colonne + nouvelleCoordonnéeColonne].text)
        updatePosition(ligne + nouvelleCoordonnéeLigne, colonne + nouvelleCoordonnéeColonne)

    }else{
        let bodyImgDeFond = document.querySelector('body')
        bodyImgDeFond.style.backgroundImage = `url('${carte[ligne + nouvelleCoordonnéeLigne][colonne + nouvelleCoordonnéeColonne].img}')`
       
        console.log('carte img: ' + carte[ligne + nouvelleCoordonnéeLigne][colonne + nouvelleCoordonnéeColonne].img)
        console.log(bodyImgDeFond)

        textPancarte(carte[ligne + nouvelleCoordonnéeLigne][colonne + nouvelleCoordonnéeColonne].text)
        updatePosition(ligne + nouvelleCoordonnéeLigne, colonne + nouvelleCoordonnéeColonne)

    }
}




function textPancarte(atributText){
    divWrap.remove()
    let divBody=document.querySelector('.divbody')

    let element=document.createElement('div')
    element.classList.add("wrap")
    

    let elementEncart = document.createElement('div')
    elementEncart.classList.add("encart")

    let newDivPourText = document.createElement('div')
    newDivPourText.classList.add('div_pour_text')
    elementEncart.appendChild(newDivPourText)

    let p = document.createElement('p')
    p.innerHTML=atributText
    newDivPourText.appendChild(p)


    element.appendChild(createBouton('boutonX'));
    element.appendChild(elementEncart)
    divBody.appendChild(element)
}



function createBouton(laClass){
    let bouton = document.createElement('button')
    bouton.classList.add(laClass)
    bouton.textContent='X'
    bouton.addEventListener('click',()=>{
    let divWrap = document.querySelector('.wrap')
    divWrap.remove()
    
})
    return bouton
}



function updatePosition(posLigne, posColonne){
    positionLigne = posLigne
    positionColonne = posColonne
}


/*
function DeplacementEst(colonne, ligne){
    let divWrap = document.querySelector('.wrap')
    if(colonne===2){
        console.log('pas possible')
        return
    }else{
        let bodyImgDeFond = document.querySelector('body')
    
        bodyImgDeFond.style.backgroundImage = `url('${carte[ligne][colonne+1].img}')`
        divWrap.remove()
        textPancarte(carte[ligne][colonne+1].text)

        updatePosition(colonne+1, ligne)
        personnagePresent()
        
    }
}
*/
   

function personnagePresent(){

    if(carte[positionLigne][positionColonne].PersonnagePresent===true){
        console.log('personnage')
        createbouton_div('personnage')
    }else{
        console.log(carte[positionLigne][positionColonne].PersonnagePresent)
        console.log("il n'y a personne")
    }
}


function evenementPresent(){
    if(carte[positionLigne][positionColonne].evenement){
        console.log('evenment present')
        createbouton_div('evenement')
    }else{
        console.log("il n'y a pas d'evenement")

    }
}



function createbouton_div(perso_event){
    let compteurTextEvent=0 
    let compteurEvent=0

    let divPourtext=document.querySelector('.div_pour_text')
     
    /* let existingDivBouton = document.querySelector('.div_pour_bouton');
     if (existingDivBouton) {
         existingDivBouton.remove();
     }*/

         
    const elementdiv=document.createElement('div')
    elementdiv.classList.add('div_pour_bouton')
    divPourtext.appendChild(elementdiv)

    const elementbouton = document.createElement('button')
    elementbouton.classList.add('boutonFleche')
    elementdiv.appendChild(elementbouton)

    const elementbouton2 = document.createElement('button')
    elementbouton2.classList.add('boutonFleche')
    elementdiv.appendChild(elementbouton2)

   if(compteur===0){
        elementbouton2.innerHTML= '- Ne pas se rapprocher'
        elementbouton.innerHTML= '- Se rapprocher'

        
    }else if (compteur>0){

        elementbouton.innerHTML= `${carte[positionLigne][positionColonne].boutonEvent[compteurEvent]}`

        elementbouton2.innerHTML= `${carte[positionLigne][positionColonne].boutonEvent[compteurEvent]}`

    }
    

    elementbouton.addEventListener('click',()=>{
        if(perso_event==='personnage'){
            creationPersonage()
            
        }else if(perso_event==='evenement'){

            creationEvenement(carte[positionLigne][positionColonne].event[compteurEvent],carte[positionLigne][positionColonne].textEvent[compteurTextEvent],compteurEvent)
            compteurEvent++
            compteurTextEvent++

            if(carte[positionLigne][positionColonne].boutonEvent){
                elementbouton2.remove()
                elementbouton.remove()
                bouton2(`${carte[positionLigne][positionColonne].boutonEvent[0]}`,compteurEvent,compteurTextEvent)

               // elementbouton.innerHTML=`${carte[positionLigne][positionColonne].boutonEvent[0]}`
                bouton(`${carte[positionLigne][positionColonne].boutonEvent[1]}`,compteurEvent,compteurTextEvent)
            }

        }  

    })
    elementbouton2.addEventListener('click', ()=>{
        let divWrap = document.querySelector('.wrap')
        divWrap.remove()
    })

}
function bouton2(nomBtn,compteurEvent,compteurTextEvent){ 
    let elementdiv= document.querySelector('.div_pour_bouton')
    elementbouton = document.createElement('button')
    elementbouton.classList.add('boutonFleche')
    elementbouton.innerHTML= nomBtn
    elementdiv.appendChild(elementbouton)

    elementbouton.addEventListener('click',()=>{
        creationEvenement(carte[positionLigne][positionColonne].event[compteurEvent],carte[positionLigne][positionColonne].textEvent[compteurTextEvent],compteurEvent+1)
        compteurEvent++
        compteurTextEvent++
    })
}


function bouton(nomBtn,compteurEvent,compteurTextEvent){ 
    let elementdiv= document.querySelector('.div_pour_bouton')
    elementbouton = document.createElement('button')
    elementbouton.classList.add('boutonFleche')
    elementbouton.innerHTML= nomBtn
    elementdiv.appendChild(elementbouton)

    elementbouton.addEventListener('click',()=>{
        creationEvenement(carte[positionLigne][positionColonne].event[compteurEvent],carte[positionLigne][positionColonne].textEvent[compteurTextEvent],compteurEvent)
        compteurEvent++
        compteurTextEvent++
    })
}



function creationEvenement(positionDeEvenement,textEvenement,compteur){
    let event= carte[positionLigne][positionColonne].textEvent
    
    if(compteur<event.length){
        

       
        let bodyImgDeFond = document.querySelector('body')
    
        bodyImgDeFond.style.backgroundImage = `url('${positionDeEvenement}')`

        let p = document.querySelector('p')
        p.innerHTML = textEvenement

        if(carte[positionLigne][positionColonne].objet){
            let divPourboutont=document.querySelector('.div_pour_bouton')      
            piller(divPourboutont,'- Fouiller','event')
        }

    }else if (compteur>=event.length){
       
        console.log('Peu pas aller plus loin')
        
    }
}









function boutonvoler(parent){
    let boutonVoler = document.createElement('button')
    boutonVoler.innerHTML = '- Voler'
    boutonVoler.classList.add('boutonVoler')
    parent.appendChild(boutonVoler)
    boutonVoler.addEventListener('click',()=>{
        let divItem = document.getElementById('items')

        const objetListe =  carte[positionLigne][positionColonne].perso.ObjetAVoler[0]
        let objetAleatoireIndex = Math.floor(Math.random()*objetListe.length)
        let objetVoler = objetListe[objetAleatoireIndex]
    //    console.log('objet volé: '+ objetVoler)
        itemJoueur.push(objetVoler)
    //    divItem.innerHTML=objetVoler
        let divImg=document.createElement('img')
        divImg.classList.add('imgItem')
        divImg.src='Items/DALL·E-2024-09-09-14.11.19-A-hand-drawn-style-icon-of-a-rope.png'
        divItem.appendChild(divImg)
   //     console.log(itemJoueur)
        boutonVoler.remove()
        let p = document.querySelector('p')
        p.innerHTML =`Vous venez de voler ${objetVoler}`

        
    })
}

function boutonattaquer(parent){
    let boutonAttaquer = document.createElement('button')
    boutonAttaquer.innerHTML = '- Attaquer'
    boutonAttaquer.classList.add('boutonAttaquer')
    parent.appendChild(boutonAttaquer)

    let boutonDialogue = document.querySelector('.boutonDialogue')
    console.log(boutonDialogue)

    boutonAttaquer.addEventListener('click',()=>{
      
        let p = document.querySelector('p')
        p.innerHTML = trappeuroff

        boutonDialogue.remove()

        boutonAttaquer.remove()

        epargner(parent)
        executer(parent)

        
    })
}





function creationPersonage(){
    let warp=document.querySelector('.wrap')
    
    let encart = document.querySelector('.encart')
    encart.remove()

    let newEncart = creerDivEncart(warp)

    creerDivPourPortrait( newEncart , carte[positionLigne][positionColonne].perso.imgPersonnage)

    let divPourText= creerDivPourText(newEncart)
    divPourText.classList.add('div_pour_text')

    let p = document.createElement('p')
    p.innerHTML=`${carte[positionLigne][positionColonne].perso.dialogue[0]}`
    divPourText.appendChild(p)


    boutonvoler(divPourText)

    let boutonDialogue = document.createElement('button')
    boutonDialogue.innerHTML='- dialogue'
    boutonDialogue.classList.add('boutonDialogue')
    divPourText.appendChild(boutonDialogue)
    
    boutonDialogue.addEventListener('click',()=>{
      
        if (indexDialogue < carte[positionLigne][positionColonne].perso.dialogue.length){
            p.innerHTML=`${carte[positionLigne][positionColonne].perso.dialogue[indexDialogue]}`
            indexDialogue++
        
        }else if(indexDialogue === carte[positionLigne][positionColonne].perso.dialogue.length){ 
        
            boutonDialogue.innerHTML=carte[positionLigne][positionColonne].perso.secret.bouton

            boutonDialogue.remove()
            creerbouton('- Rester','boutonDialogue')
            indexDialogue=1
        }    
    })
    boutonattaquer(divPourText)
    
}




function secretText(){
    let p = document.querySelector('p')
    p.innerHTML=carte[positionLigne][positionColonne].perso.secret.textSecret

}



let indexDialogue = 1

function creerbouton(nomBtn,className){
    let divPourText=document.querySelector('.div_pour_text')

    let bouton= document.createElement('button')
    bouton.classList.add(className)
    bouton.innerHTML = nomBtn
    divPourText.appendChild(bouton)

    bouton.addEventListener('click',()=>{
        secretText()
        appliquerFonduNoir(feuxSon,2.4,4.2)
        bouton.remove()
        lesSecret.push(carte[positionLigne][positionColonne].perso.secret.secret)
        
        
    }) 

}





function appliquerFonduNoir(son,duree1,duree2) {
    // Créer la div pour l'effet de fondu
    let fonduDiv = document.createElement('div');
    fonduDiv.classList.add('fondu-noir');
    fonduDiv.style.animation = `fonduNoir ${duree1}s forwards`
    // Ajouter la div au body
    document.body.appendChild(fonduDiv);

    // Retirer la div après l'animation
    son()
   
    // Après l'animation de fondu au noir, appliquer le fondu inversé
    fonduDiv.addEventListener('animationend', () => {
        fonduDiv.style.animation = `fonduInverse ${duree2}s forwards`; // Appliquer le fondu inversé
        // Supprimer la div après l'animation de fondu inversé
        fonduDiv.addEventListener('animationend', () => {
            fonduDiv.remove();
        });
    })

}


function sonTuer(){
    const audio = new Audio('sons/SFB-tomahawk_corps.mp3')
    audio.play()
}



function feuxSon(){
    const audio = new Audio('sons/FIREBurn_Grand feu de branches 1 (ID 0987)_LS.wav')
    
    // Jouer le son
    audio.play();
    audio.oncanplaythrough = () => {
        setTimeout(() => {
            audio.pause();
            audio.currentTime = 0; // Rewind audio to the start
        }, 5000); // Temps en millisecondes (doit correspondre à la durée de l'animation)
    };
}






function creerDivEncart(parent){
    let newEncart = document.createElement('div')
    newEncart.classList.add('encart')
    parent.appendChild(newEncart)
    return newEncart

}
function creerDivPourPortrait(parent,imgPortrait){
    let divPortrait = document.createElement('div')
    divPortrait.classList.add('portrait')
    divPortrait.style.backgroundImage= `url('${imgPortrait}')`
    parent.appendChild(divPortrait)
}

function creerDivPourText(parent){
    let divPourText=document.createElement('div')
    divPourText.classList.add('div_pour_text')
    parent.appendChild(divPourText)
    return divPourText
}



function epargner(parent){
    let boutonEpargne= document.createElement('button')
    boutonEpargne.classList.add('boutonEpargne')
    boutonEpargne.innerHTML='- Epargner'
    parent.appendChild(boutonEpargne)

    boutonEpargne.addEventListener('click',()=>{
        console.log("vous avez epargné le pnj")
    })
}

function executer (parent){
    let boutonExecute= document.createElement('button')
    boutonExecute.classList.add('boutonExecuter')
    boutonExecute.innerHTML='- Executer'
    parent.appendChild(boutonExecute)

    boutonExecute.addEventListener('click',()=>{

        appliquerFonduNoir(sonTuer,0.3,0.6)

        let portrait = document.querySelector('.portrait')
        portrait.style.boxShadow = 'inset 0px 0px 10px 600px rgba(0, 0, 0, 0.640)'

        let p = document.querySelector('p')
        p.innerHTML="Vous venez d'executer froidement le vieil homme. Son cadavre git à vos pieds "
        
        let boutonEpargne = document.querySelector('.boutonEpargne')
        boutonEpargne.remove()


        let boutonVoler = document.querySelector('.boutonVoler')
        boutonVoler.remove()

        boutonExecute.remove()
       // bodyImgDeFond.style.backgroundImage=`url('${positionDeEvenement}')`
        piller(parent,'- Piller','perso')
        removeImglist()
        deathPersonnage()
        switchText()
        

    })
}

function removeImglist(){
    
    console.log(carte[0][2].img)
    carte[positionLigne][positionColonne].img = 'fond/Campeur_mort.jpeg'
    let bodyImgDeFond = document.querySelector('body')
    bodyImgDeFond.style.backgroundImage = `url(${'fond/Campeur_mort.jpeg'})`
    console.log(carte[positionLigne][positionColonne].img)

}

function deathPersonnage(){
    carte[positionLigne][positionColonne].PersonnagePresent = false
   
    console.log(carte[0][2].PersonnagePresent)
}
function switchText (){
    carte[positionLigne][positionColonne].text = camp_mort
}

function piller(parent,nom,perso_event){
  

    let boutonPiller = document.createElement('buton')
    boutonPiller.classList.add('boutonFleche')
    boutonPiller.innerHTML=nom
    boutonPiller.id = 'idPiller'
    parent.appendChild(boutonPiller)

        
   
    boutonPiller.addEventListener('click',()=>{
        let p =document.querySelector('p')

        if(perso_event ==='perso'){
            const objetListe =  carte[positionLigne][positionColonne].perso.ObjetAVoler[0]
            console.log(objetListe)
            
            let divItems = document.getElementById('items')
            divItems.innerHTML=objetListe

            p.innerHTML =`Vous venez de voler : ${objetListe}`
            boutonPiller.remove()

        }else if (perso_event === 'event' ){

            const objetListe =  carte[positionLigne][positionColonne].objet[compteur]
            console.log(objetListe)
            
            let divItems = document.getElementById('items')
            divItems.innerHTML=objetListe

            p.innerHTML =`Vous venez de voler : ${objetListe}`
            compteur++
            if(compteur < carte[positionLigne][positionColonne].objet.length){
                
                console.log('coucou'+ compteur)
                boutonPiller.remove()

            }else if (compteur >= carte[positionLigne][positionColonne].objet.length){ 
                compteur = 0
                console.log('eo'+ compteur)
                boutonPiller.remove()
            }
        }
    })
    
}

let compteur=0
//carte[0][2].objet[1][1][0]
let lesSecret=[]
