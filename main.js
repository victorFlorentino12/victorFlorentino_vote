function vote(){
    var txtnumber = document.querySelector('input#txtnumber')
    var number = Number(txtnumber.value)
    var election = true
    var candidatoX = 0
    var candidatoY = 0
    var candidatoZ = 0
    var candidatoBranco = 0
    try{
        while(election==true){
            if(number === 889){
                candidatoX++
               var finish = document.querySelector('input#txtvote').value
               if(finish == "sim"){
                    election = false
                }else{
                    break
                }
            }  
            else if(number === 847 ){
                candidatoY++
                var finish = document.querySelector('input#txtvote').value
                if(finish == "sim"){
                     election = false
                 }else{
                     break
                 }
            }
            else if(number == 515){
                candidatoZ++
                var finish = document.querySelector('input#txtvote').value
                if(finish == "sim"){
                     election = false
                 }else{
                     break
                 }
            }else if(number==int){
                candidatoBranco++
                var finish = document.querySelector('input#txtvote').value
                if(finish == "sim"){
                     election = false
                 }else{
                     break
                 }
            }else{
                throw new Erro("isso não tem valor")
            }
        }
        
    }catch(erro){
        window.alert("voto invalido")
    }
    document.write(candidatoX)
    document.write(candidatoY)
    document.write(candidatoZ)

}