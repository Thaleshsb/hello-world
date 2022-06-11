
//function w2n(numero = process.argv[2]) {

   numero = process.argv[2]
   const numerais = {
       //'pi' : 3.14 ,
      'zero': 0, 'zeros': 0,
      'um': 1 ,'uma':1,'hum':1,
      'dois': 2 ,'duas':2,
      'três': 3 ,'tres':3,
      'quatro': 4, 'catro':4,
      'cinco': 5,
      'seis': 6, 'ceis':6,
      'sete': 7 , 'cete':7,
      'oito': 8 ,'oitcho':8,
      'nove': 9,
      'dez':10,'des':10,'dés':10,'déz':10,
      'onze':11, 
      'doze':12,'dose':12,'duzia':12 ,'duzias':12,'dúzia':12,'dúzias':12,
      'treze':13,'trese':13,
      'catorze':14, 'catoze':14, 'catorse':14,     'catose':14,'quatose':14, 'quatoze':14, 'quatorse':14, 'quatorze':14,
      'quinze':15,'quinse':15,
      'deseseis':16, 'desesseis':16,'dezasseis':16, 'dezeseis':16,    'dezesseis':16, 
      'desessete':17, 'desesete':17, 'dezessete':17,   'dezesete':17,'dezassete':17,
      'dezoito':18,'desoito':18,
      'dezenove':19,'desenove':19,'dezanove':19,
      'vinte': 20,'vinti':20,
      'trinta':30,
      'quarenta':40,'carenta':40,
      'cinquenta':50,'sinquenta':50,
      'sessenta':60, 'secenta':60, 'sesenta':60, 'cessenta':60, 'cesenta':60, 'cecenta':60, 
      'setenta':70,'cetenta':70,
      'oitenta':80,'otenta':80,
      'noventa':90,
      'cem':100, 'cen':100, 'sem':100, 'sen':100, 'çem':100, 'çen':100, 'cento':100, 'centos':100, 
      'duzentos':200, 'duzento':200, 'dusento':200, 'dusentos':200, 'duzentas':200,
      'trezentos':300, 'trezento:':300, 'tresentos':300, 'tresento':300, 'trezentas':300,
      'quatrocentos':400, 'quatrosentos':400, 'quatrossentos':400, 'quatrocento':400, 'quatrosento':400, 'quatrossento':400, 'quatrucentos':400, 'quatrusentos':400, 'quatrussentos':400, 'quatrucento':400, 'quatrusento':400, 'quatrussento':400, 'quatrocentas':400,
      'quinhetos':500, 'quientos':500, 'quinhento':500, 'quiento':500, 'quinhentas':500, 
      'seiscentos':600, 'seissentos':600, 'ceiscentos':600, 'seiscentas':600,
      'setecentos':700, 'setecentas':700,
      'oitocentos':800, 'oitocents':800,
      'novecentos':900, 'novecentas':900,
      'mil': 1000,
      'milhão':1000000, 'milhões':1000000,
      'bilhão':1000000000, 'bilhões':1000000000,
      'trilhão':1000000000000, 'trilhões':1000000000000,      
      'quadrilhão':1000000000000000, 'quadrilhões':1000000000000000, 'quatrilhão':1000000000000000, 'quatrilhões':1000000000000000,
     
      'e':0, 'menos': -1, 'pi':3.14,'ddi':0,'ddd':0,'de':0,'phone':0,'porcento':0,
     
      'meio': 1/2, 'meia':1/2,
      'terço': 1/3, 'terso':1/3, 'tersso':1/3,
      'quarto':1/4,'quartos':1/4,
      'quinto':1/5,'quintos':1/5,
      'sexto':1/6,'sextos':1/6,'sesto':1/6,'sestos':1/6,
      'setimo':1/7,'setimos':1/7,'sétimo':1/7,'sétimos':1/7,
      'oitavo':1/8,'oitavos':1/8,
      'nono':1/9,'nonos':1/9,
      'desimo':1/10,'désimo':1/10,'desimos':1/10,'decimo':1/10,'decimos':1/10,'décimo':1/10,'décimos':1/10,
      'centesimo':1/100,'centesimos':1/100,'centésimo':1/100,'centésimos':1/100,'sentésimos':1/100,'sentesimos':1/100,'sentésimo':1/100,'sentesimo':1/100,'cêntimo':1/100,'cêntimos':1/100,'sentimo':1/100,'sentimos':1/100,'sêntimo':1/100,'sêntimos':1/100,'sentavo':1/100,'centavo':1/100,'sentavos':1/100,'centavos':1/100,
      'milesimo':1/1000,'milesimos':1/1000,'milésimo':1/1000,'milésimos':1/1000,'milesima':1/1000,'milesimas':1/1000,'milésima':1/1000,'milésimas':1/1000,
      'milionésimo':1/1000000,'milionesimo':1/1000000,'bilionésimo':1/1000000000,
      'bilionesimo':1/1000000000,
      'doidaogigante':1/1000000000000000};
   
   // abaixo tira virgula e excesso de espaços
   // depois tira espaços <empty> pro array ficar mais eficiente
   
   const caixote = numero.toLowerCase().split(/,? +?/)
   var caixotex = caixote.filter(function (i) {
      return i;
   })
   
   if(caixotex[0] == 'ddd'){
   function tirae (value) {
      if (value != 'e') 
      return value;
   }
   caixotex = caixotex.filter(tirae);
   }
   
   //abaixo vars
   
   const pacotex = [];
   somatoriopadrãofra = 0
   somatoriofra = 0
   somatoriopadrão = 0
   somatorio = 0
   somatorioduz = 0
   somatoriocento = 0
   somatoriomil = 0
   somatoriomilhão = 0
   somatoriobilhão = 0
   somatoriotrilhão = 0
   somatorioquadrilhão= 0
   
   ddi = 0
   ddd = 0
   numbloco1 = 0
   numbloco2 = 0
   numbloco3 = 0
   numbloco4 = 0
   
   duz = caixotex.indexOf('duzia')
   duzs = caixotex.indexOf('duzias')
   
   nume = Object.keys(numerais)
   numei = nume.indexOf(caixotex[caixotex.length-1]) 
   fra = Object.values(numerais)
   
   bug2 = (caixotex.lastIndexOf('e') +1)
   bug1 = 0
   
   for (let meral in caixotex) {
   
   // abaixo converte string pra numero  
   
   arraykey = Object.keys(numerais) 
   acheioindex = arraykey.indexOf(caixotex[meral]);
   toaqui = Object.values(numerais);                       
   pacotex.push(toaqui[acheioindex])
   
   if(toaqui[acheioindex] == undefined){
      throw('Quem é tu mesmo "'+ caixotex[meral]+'" ?')
   }
   
   //abaixo operações padrão base
   
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
     if(pacotex[meral] >= 1){
       if(fra[numei] >= 1){
         somatoriopadrão += pacotex[meral]
         
       }
       if(meral < bug2){
         if(fra[numei] < 1){
           somatoriopadrão += pacotex[meral]
         }
       }
     }
     
   }
   if(pacotex[meral] == 100){
      if(pacotex[meral-1] < 10 ){
      somatoriocento = pacotex[meral-1] *  pacotex[meral]
      somatoriopadrão = 0
      }     
   }
   if(duz != -1){
     
   if(pacotex[pacotex.length-1] == 12){
      if(pacotex[meral] == pacotex[caixotex.length-1]){
      somatoriopadrão -=12
      somatorioduz = ((somatoriopadrão) * pacotex[meral])
      
   
      somatoriopadrão = 0
      }
   }
   }
   if(duzs != -1){
     
      if(pacotex[pacotex.length-1] == 12){
         if(pacotex[meral] == pacotex[caixotex.length-1]){
         somatoriopadrão -= 12
         somatorioduz = ((somatoriopadrão) * pacotex[meral])
         
         somatoriopadrão = 0
      }
      }
      }
   
   // numero pra telefone provisório
   if(caixotex[0] == ('ddd'||'ddi')){
      somatoriopadrão = 0
        if(pacotex[pacotex.length] == caixotex[caixotex.length]){
       
           //Em desenvolvimento para ser mais eficiente
           
           ddd = (pacotex[1]+pacotex[2])
   
           numbloco1 = (pacotex[3] + pacotex[4])
           if(caixotex[3] == 'zero'){
            numbloco1 = '0' + pacotex[4]
            if(caixotex[3] == 'zero' && caixotex[4]== 'zero'){
            numbloco1 = '00'
            }
           }
           if(caixotex[4] =='zero'){
            if(pacotex[3] < 10){
            numbloco1 = pacotex[3] + '0'
           }
         }
           numbloco2 = (pacotex[5] + pacotex[6])
   
           if(caixotex[5] == 'zero'){
            numbloco2 = '0' + pacotex[6]
            if(caixotex[5] == 'zero' && caixotex[6]== 'zero'){
            numbloco2 = '00'
            }
           }
           if(caixotex[6] =='zero'){
            if(pacotex[5] < 10){
            numbloco2 = pacotex[5] + '0'
           }
         }
           numbloco3 = (pacotex[7] + pacotex[8])
   
           if(caixotex[7] == 'zero'){
            numbloco3 = '0' + pacotex[8]
            if(caixotex[7] == 'zero' && caixotex[8]== 'zero'){
            numbloco3 = '00'
            }
           }
           if(caixotex[8] =='zero'){
            if(pacotex[7] < 10){
            numbloco3 = pacotex[7] + '0'
           }
         }
           numbloco4 = (pacotex[9] + pacotex[10])
   
           if(caixotex[9] == 'zero'){
            numbloco4 = '0' + pacotex[4]
            if(caixotex[9] == 'zero' && caixotex[10]== 'zero'){
            numbloco4 = '00'
            }
           }
           if(caixotex[10] =='zero'){
            if(pacotex[9] < 10){
            numbloco4 = pacotex[9] + '0'
           }
         }
        }     
   }
   
   // abaixo faz a magica dos fracionarios
   
   if(pacotex[pacotex.length-1] < 1){
      if(pacotex[meral]>0){
         pacotex.reverse()
         taisondefra = pacotex.indexOf(0)
         for(taisondefra; taisondefra > 0 ; taisondefra--){
            somatoriopadrãofra += pacotex[taisondefra]
            if(taisondefra == 1 ){
               somatoriofra = somatoriopadrãofra * pacotex[0]
            }
         }
         if(taisondefra == -1){
            if(pacotex.length == 2){
               somatoriofra = pacotex[0] * pacotex[1]
               somatoriopadrão = 0
            }
         }        
      }
   }
   
   // abaixo remove bugs com mil
   
   if(pacotex[0] == 1000){
      somatoriomil = 1000
   }
   if (pacotex[meral] ==1000){
      if(pacotex[meral-1] > 1000 ){
         somatoriomil = 1000
      }
   }
   if(meral == (caixotex.length-1)){    
      if(pacotex[meral] == 1000){
         bug1 = (caixotex.length -2)
            if(pacotex[bug1] == 0){
               somatoriomil = 1000
            }
            if(caixotex.length == 1){
               somatoriomil = 1000
            }
      }
   }
   }
   
   // abaixo  soma tudo
   
   somatorio = (somatoriopadrão + somatoriofra + somatorioduz + somatoriocento + somatoriomil + somatoriomilhão + somatoriobilhão + somatoriotrilhão + somatorioquadrilhão);
   
   // abaixo tranfoma negativo se necessario
   
   if(caixotex[0] == 'menos'){
   somatorio *= -1
   }
   if(caixotex[caixotex.length-1] == 'negativo'){
   somatorio *= -1
   }
   if(caixotex[caixotex.length-1] == 'negativos'){
   somatorio *= -1
   }
   
   // aqui abaixo sai o resultado
   if(caixotex[0] != 'ddd'){
   console.log('O numero digitado é ' + somatorio)
    // return somatorio
   }
   if(caixotex[0] == 'ddd'){
     dddagain = '(' + ddd + ')' + '9.' + numbloco1 + numbloco2 + '-' + numbloco3 + numbloco4
   console.log('(' + ddd + ')' + '9.' + numbloco1 + numbloco2 + '-' + numbloco3 + numbloco4)
    // return dddagain
   }
   //}
   //w2n()
   //module.exports = { w2n }
   
   //colocar as chaves
