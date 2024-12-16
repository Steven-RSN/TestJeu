const boutonX = document.querySelector('.boutonX')
boutonX.addEventListener('click',()=>{
    
    divWrap.remove()
    
})


for(let i = 0 ; i < toutLesBoutons.length ; i++){
    toutLesBoutons[i].addEventListener('click',()=>{
        console.log(toutLesBoutons[i].id)

        if (toutLesBoutons[i].id === 'nord'){
       
         
            Deplacement(positionLigne, positionColonne,1, 0)
            personnagePresent()
           
            evenementPresent()
            
            
        }if(toutLesBoutons[i].id==='sud'){

            Deplacement(positionLigne, positionColonne,-1, 0)
            personnagePresent()
           
            evenementPresent()

        }
        
        
        
        
        if(toutLesBoutons[i].id==='est'){
           

            
            Deplacement(positionLigne, positionColonne, 0, 1)
            personnagePresent()
            evenementPresent()

           

        }if(toutLesBoutons[i].id==="ouest"){
           
           
            Deplacement(positionLigne, positionColonne, 0, -1)
            personnagePresent()
           
            evenementPresent()
           

        }
       
    })
}



