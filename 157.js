   const numero = process.argv[2]

   const numerais = {'um': 1 ,'uma':1, 'dois': 2 ,'duas':2, 'tres': 3 ,'tres':3, 'quatro': 4, 'catro':4, 'cinco': 5, 'seis': 6, 'ceis':6, 'sete': 7 , 'cete':7, 'oito': 8 ,'oitcho':8, 'nove': 9,'dez':10,'des':10,'dés':10,'déz':10,'onze':11,'doze':12,'dose':12,'treze':13,'trese':13,'catorze':14,'catoze':14,'catorse':14,'catose':14,'quatose':14,'quatoze':14,'quatorse':14,'quatorze':14,'quinze':15,'quinse':15,'deseseis':16,'desesseis':16,'dezeseis':16,'dezesseis':16,'desessete':17,'desete':17,'dezessete':17,'dezesete':17,'dezoito':18,'desoito':18,'dezenove':19,'desenove':19,'vinte': 20,'vinti':20,'trinta':30,'quarenta':40,'carenta':40,'cinquenta':50,'sinquenta':50,'sessenta':60,'secenta':60,'sesenta':60,'cessenta':60,'cesenta':60,'cecenta':60,'setenta':70,'cetenta':70,'oitenta':80,'otenta':80,'noventa':90,'cem':100,'cen':100,'sem':100,'sen':100,'çem':100,'çen':100,'cento':100,'duzentos':200,'duzento':200,'dusento':200,'dusentos':200,'trezentos':300,'trezento:':300,'tresentos':300,'tresento':300,'quatrocentos':400,'quatrosentos':400,'quatrossentos':400,'quatrocento':400,'quatrosento':400,'quatrossento':400,'quatrucentos':400,'quatrusentos':400,'quatrussentos':400,'quatrucento':400,'quatrusento':400,'quatrussento':400,'quinhetos':500,'quientos':500,'quinhento':500,'quiento':500,'seiscentos':600,'seissentos':600,'ceiscentos':600,'setecentos':700,'oitocentos':800,'novecentos':900,'mil': 1000,'milhão':1000000, 'milhões':1000000,'bilhão':1000000000,'bilhões':1000000000,'trilhão':1000000000000,'trilhões':1000000000000,'quadrilhão':1000000000000000,'quadrilhões':1000000000000000,'quatrilhão':1000000000000000,'quatrilhões':1000000000000000,'e':0,'menos': -1, 'meio': 1/2,'terço': 1/3,'terso':1/3,'tersso':1/3,'quarto':1/4,'quartos':1/4,'quinto':1/5,'quintos':1/5,'sexto':1/6,'sextos':1/6,'sesto':1/6,'sestos':1/6,'setimo':1/7,'setimos':1/7,'sétimo':1/7,'sétimos':1/7,'oitavo':1/8,'oitavos':1/8,'nono':1/9,'nonos':1/9,'desimo':1/10,'désimo':1/10,'desimos':1/10,'decimo':1/10,'decimos':1/10,'décimo':1/10,'décimos':1/10,'centesimo':1/100,'centesimos':1/100,'centésimo':1/100,'centésimos':1/100,'sentésimos':1/100,'sentesimos':1/100,'sentésimo':1/100,'sentesimo':1/100,'cêntimo':1/100,'cêntimos':1/100,'sentimo':1/100,'sentimos':1/100,'sêntimo':1/100,'sêntimos':1/100,'sentavo':1/100,'centavo':1/100,'sentavos':1/100,'centavos':1/100,'milesimo':1/1000,'milesimos':1/1000,'milésimo':1/1000,'milésimos':1/1000,'milesima':1/1000,'milesimas':1/1000,'milésima':1/1000,'milésimas':1/1000};
   
   const caixote = numero.toLowerCase().split(/,? +?/)
   var caixotex = caixote.filter(function (i) {
      return i;
   })
   const pacotex = [];
   contador = 0
   somatoriopadrãofra = 0
   somatoriofra = 0
   somatoriopadrão = 0
   somtoriodecimais = 0
   somatorio = 0
   somatoriomil = 0
   somatoriomilhão = 0
   somatoriobilhão = 0
   somatoriotrilhão = 0
   somatorioquadrilhão= 0
   

   bug1 = 0

for (let meral in caixotex) {
               
   arraykey = Object.keys(numerais)
         
   acheioindex = arraykey.indexOf(caixotex[meral]);

   toaqui = Object.values(numerais);
                                    
   pacotex.push(toaqui[acheioindex])
      
   if(pacotex[meral] == 1000000000000000){
      somatorioquadrilhão = somatoriopadrão * pacotex[meral]
      somatoriopadrão = 0
      contador = 0
      }           
   if(pacotex[meral] == 1000000000000){
      somatoriotrilhão = somatoriopadrão * pacotex[meral]
      somatoriopadrão = 0
      contador = 0
      }   
   if(pacotex[meral] == 1000000000){
      somatoriobilhão = somatoriopadrão * pacotex[meral]
      somatoriopadrão = 0
      contador = 0
      }
   if (pacotex[meral] ==1000000){
      somatoriomilhão = somatoriopadrão * pacotex[meral]
      somatoriopadrão = 0
      contador = 0
      }
   if(pacotex[meral] == 1000){
      somatoriomil = somatoriopadrão * pacotex[meral]
      somatoriopadrão = 0
      contador = 0
      }
      
   
   if(pacotex[meral] < 1000) {
      if(pacotex[meral] >= 1){
         contador++
         if (contador <= 3){
            somatoriopadrão += pacotex[meral]
         }
         if(contador > 3){
            somatoriopadrãofra += pacotex[meral]
         }
      }
   }
   if(pacotex[meral] < 1){
   somatoriofra = somatoriopadrãofra * pacotex[meral]
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
somatorio = (somatoriopadrão + somatoriofra +  somatoriomil + somatoriomilhão + somatoriobilhão + somatoriotrilhão + somatorioquadrilhão);

if(caixote[0] == 'menos'){
   somatorio *= -1
}
  

console.log('O numero digitado é ' + somatorio)
