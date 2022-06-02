   const numero = process.argv[2]

   const numerais = {'e':0,'meio': 1/2,'terço': 1/3,'quarto':1/4,'quinto':1/5,'sexto':1/6,'setimo':1/7,'sétimo':1/7,'oitavo':1/8,'nono':1/9,'decimo':0.1/10,'décimo':1/10,'centesimo':1/100,'centésimo':1/100,'milesimo':1/1000,'milésimo':1/1000,'um': 1 , 'dois': 2 , 'tres': 3 , 'quatro': 4 , 'cinco': 5, 'seis': 6 , 'sete': 7 , 'oito': 8 , 'nove': 9,'dez':10,'onze':11,'doze':12,'treze':13,'catorze':14,'quatorze':14,'quinze':15,'dezesseis':16,'dezessete':17,'dezoito':18,'dezenove':19,'vinte': 20,'trinta':30,'quarenta':40,'cinquenta':50,'sessenta':60,'setenta':70,'oitenta':80,'noventa':90,'cem':100,'cento':100,'duzentos':200,'trezentos':300,'quatrocentos':400,'quinhetos':500,'seiscentos':600,'setecentos':700,'oitocentos':800,'novecentos':900,'mil': 1000,'milhão':1000000, 'milhões':1000000,'bilhão':1000000000,'bilhões':1000000000,'trilhão':1000000000000,'trilhões':1000000000000,'quadrilhão':1000000000000000,'quadrilhões':1000000000000000,'quatrilhão':1000000000000000,'quatrilhões':1000000000000000};
   const caixote = numero.toLowerCase().split(' ')
   const pacotex = [];
   somatoriopadrão = 0
   somtoriodecimais = 0
   somatorio = 0
   somatoriomil = 0
   somatoriomilhão = 0
   somatoriobilhão = 0
   somatoriotrilhão = 0
   somatorioquadrilhão= 0
   bug1 = 0
   for (let meral in caixote) {
               
      arraykey = Object.keys(numerais)
                  
      acheioindex = arraykey.indexOf(caixote[meral]);
      
      toaqui = Object.values(numerais);
                                    
      pacotex.push(toaqui[acheioindex])

      
      if(pacotex[meral] == 1000000000000000){
         somatorioquadrilhão = somatoriopadrão * pacotex[meral]
         somatoriopadrão = 0
      }           
      if(pacotex[meral] == 1000000000000){
         somatoriotrilhão = somatoriopadrão * pacotex[meral]
         somatoriopadrão = 0
      }   
      if(pacotex[meral] == 1000000000){
         somatoriobilhão = somatoriopadrão * pacotex[meral]
         somatoriopadrão = 0
      }
      if (pacotex[meral] ==1000000){
         somatoriomilhão = somatoriopadrão * pacotex[meral]
         somatoriopadrão = 0
      }
      if(pacotex[meral] == 1000){
         somatoriomil = somatoriopadrão * pacotex[meral]
         somatoriopadrão = 0
      }
      if(pacotex[meral] < 1000) {
         somatoriopadrão += pacotex[meral]
      }
      
   
    if(meral == (caixote.length-1)){    
       if(pacotex[meral] == 1000){
         bug1 = (caixote.length -2)
            if(pacotex[bug1] == 0){
               somatoriomil = 1000
         }
      }
   }
}
   
   

  somatorio = (somatoriopadrão + somatoriomil + somatoriomilhão + somatoriobilhão + somatoriotrilhão + somatorioquadrilhão);
  
console.log('O numero digitado é ' + somatorio)