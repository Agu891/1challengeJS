let camion = {
    pesomaximo: 10000,
    autos : [],
    sumapesos : 0,

    agregarauto (peso,patente) {
        
        if(this.sumapesos + peso < this.pesomaximo){
            
        camion.autos.push(auto = {
            peso : peso ,
            patente : patente, 
            } )
            return this.sumapesos = peso + this.sumapesos
            
         }  else if( this.sumapesos > this.pesomaximo ){
             camion.autos.pop()
         } 
         
       
        
    },
     verificarpatente(patente) {for( let i = 0; i < this.autos.length; i++)
        
          if(this.autos[i].patente === patente){
              
             console.log("la patente ya existe")

            }else if(this.autos[i].patente === this.autos[i].patente){
                console.log(this.autos[i].patente)
            }
            
          }

         
    
}

    

       
        
    
    


camion.agregarauto(2342, "LGD234")
camion.agregarauto(2322, "LGD232")
camion.agregarauto(213, "RTO345")










console.log(camion.verificarpatente("RTO345"))