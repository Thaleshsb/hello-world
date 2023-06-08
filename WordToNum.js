//function w2n(numero = process.argv[2]) {
   numero = process.argv[2]
   const numerais = {
      'e':0, 'menos': -1, 'pi':3.14,'pis':3.14,'de':0,'porcento':1/100,'percentual':1/100,'porcentagem':1/100,'percentagem':1/100,'ponto':'.','negativos':-1,'negativo':-1,'virgula':'.',
      'zero': 0, 'zeros': 0,
      'um': 1 ,'uma':1,'hum':1,'primeiro':1,'primeira':1,
      'dois': 2 ,'duas':2,'segundo':2,'segunda':2,
      'três': 3 ,'tres':3,'terceiro':3,'terceiro':3,
      'quatro': 4, 
      'cinco': 5,
      'seis': 6, 
      'sete': 7 , 
      'oito': 8 ,
      'nove': 9,
      'dez':10,
      'onze':11, 
      'doze':12,'dose':12,'duzia':12 ,'duzias':12,'dúzia':12,'dúzias':12,
      'treze':13,'trese':13,
      'catorze':14, 'catoze':14, 'catorse':14, 'catose':14,'quatose':14, 'quatoze':14, 'quatorse':14, 'quatorze':14,
      'quinze':15,'quinse':15,
      'deseseis':16, 'desesseis':16, 'dezeseis':16, 'dezesseis':16, 'dezasseis':16,
      'desessete':17, 'dezessete':17, 'dezassete':17,
      'dezoito':18,'desoito':18,
      'dezenove':19,'desenove':19,'dezanove':19,
      'vinte': 20,
      'trinta':30,
      'quarenta':40,
      'cinquenta':50,'sinquenta':50,
      'sessenta':60, 'secenta':60, 'cessenta':60, 'cecenta':60, 
      'setenta':70,'cetenta':70,
      'oitenta':80,
      'noventa':90,
      'cem':100, 'cento':100, 'centos':100, 
      'duzentos':200, 'duzentas':200,'dusentos':200,'dusentas':200,
      'trezentos':300,  'tresentos':300, 'trezentas':300,'tresentas': 300,
      'quatrocentos':400, 'quatrocentas':400,
      'quinhetos':500,  'quinhentas':500, 
      'seiscentos':600, 'seiscentas':600, 
      'setecentos':700, 'setecentas':700, 
      'oitocentos':800, 'oitocentas':800,
      'novecentos':900, 'novecentas':900,
      'mil': 1000,
      'milhão':1000000, 'milhões':1000000,
      'bilhão':1000000000, 'bilhões':1000000000,
      'trilhão':1000000000000, 'trilhões':1000000000000,      
      'quadrilhão':1000000000000000, 'quadrilhões':1000000000000000, 'quatrilhão':1000000000000000, 'quatrilhões':1000000000000000,
      'quintilhão':1000000000000000000, 'quintilhões':1000000000000000000,
      'sextilhão':1000000000000000000000, 'sextilhões':1000000000000000000000,
      'setilhão':1000000000000000000000000, 'setilhões':1000000000000000000000000,'septilhão':1000000000000000000000000,'septilhão':1000000000000000000000000,
      'octilhão':1000000000000000000000000000 ,'octilhões':1000000000000000000000000000,
      'nonilhão':1000000000000000000000000000000,'nonilhões':1000000000000000000000000000000,
      'decilhão':1000000000000000000000000000000000,'decilhões':1000000000000000000000000000000000,
      'milhao':1000000, 'milhoes':1000000,
      'bilhao':1000000000, 'bilhoes':1000000000,
      'trilhao':1000000000000, 'trilhoes':1000000000000,      
      'quadrilhao':1000000000000000, 'quadrilhoes':1000000000000000, 'quatrilhao':1000000000000000, 'quatrilhoes':1000000000000000,
      'quintilhao':1000000000000000000, 'quintilhoes':1000000000000000000,
      'sextilhao':1000000000000000000000, 'sextilhoes':1000000000000000000000,
      'setilhao':1000000000000000000000000, 'setilhoes':1000000000000000000000000,'septilhao':1000000000000000000000000,'septilhao':1000000000000000000000000,
      'octilhao':1000000000000000000000000000 ,'octilhoes':1000000000000000000000000000,
      'nonilhão':1000000000000000000000000000000,'nonilhoes':1000000000000000000000000000000,
      'decilhao':1000000000000000000000000000000000,'decilhoes':1000000000000000000000000000000000,
      'meio': 1/2, 'meia':1/2,
      'terço': 1/3,'terça':1/3,
      'quarto':1/4,'quarta':1/4,
      'quinto':1/5,'quinta':1/5,
      'sexto':1/6,'sexta':1/6,
      'setimo':1/7,'setima':1/7,'sétimo':1/7,'sétima':1/7, 'setimos':1/7,'setimas':1/7,'sétimos':1/7,'sétimas':1/7,
      'oitavo':1/8,'oitava':1/8, 'oitavos':1/8,'oitavas':1/8,
      'nono':1/9,'nona':1/9, 'nonos':1/9,'nonas':1/9,
      'decimo':1/10,'decimos':1/10,'décimo':1/10,'décimos':1/10,'decima':1/10,'decimas':1/10,'décima':1/10,'décimas':1/10,
      'centesimo':1/100,'centesimos':1/100,'centésimo':1/100,'centésimos':1/100,'cêntimo':1/100,'cêntimos':1/100,'centimo':1/100,'centimos':1/100,'centavo':1/100,'centavos':1/100,'centesima':1/100,'centesimas':1/100,'centésima':1/100,'centésimas':1/100,
      'milesimo':1/1000,'milesimos':1/1000,'milésimo':1/1000,'milésimos':1/1000,'milesima':1/1000,'milesimas':1/1000,'milésima':1/1000,'milésimas':1/1000,
      'milionésimo':1/1000000,'milionesimo':1/1000000, 'milionésima':1/1000000,'milionesima':1/1000000,
      'bilionésimo':1/1000000000, 'bilionesimo':1/1000000000, 'bilionésima':1/1000000000, 'bilionesima':1/1000000000,
      'trilionésimo':1/1000000000000,'trilionésima':1/1000000000000,'trilionesimo':1/1000000000000,'trilionesima':1/1000000000000,
      'quatrilionésimo':1/1000000000000000,'quatrilionésima':1/1000000000000000,'quatrilionesimo':1/1000000000000000,'quatrilionesima':1/1000000000000000,
      'milionésimos':1/1000000,'milionesimos':1/1000000, 'milionésimas':1/1000000,'milionesimas':1/1000000,
      'bilionésimos':1/1000000000, 'bilionesimos':1/1000000000, 'bilionésimas':1/1000000000, 'bilionesimas':1/1000000000,
      'trilionésimos':1/1000000000000,'trilionésimas':1/1000000000000,'trilionesimos':1/1000000000000,'trilionesimas':1/1000000000000,
      'quatrilionésimos':1/1000000000000000,'quatrilionésimas':1/1000000000000000,'quatrilionesimos':1/1000000000000000,'quatrilionesimas':1/1000000000000000,
   };
   // abaixo tira virgula e excesso de espaços
   // depois tira espaços <empty> pro array ficar mais eficiente
   
   const caixote = numero.toLowerCase().split(/,? +?/)
   var caixotex = caixote.filter(function (semvazio) { return semvazio; } )

   const pacotex = [];
   let pacotãopadrão = [];
   let varduz = 0
   let somatoriopadrão = 0
   var stringnum = ''
   var somatorio = 0
   // converte string pra number
   for(meral in caixotex){
      cadetu = Object.keys(numerais).indexOf(caixotex[meral]);                    
      pacotex.push(Object.values(numerais)[cadetu])
      if(Object.values(numerais)[cadetu] == undefined){
         throw('Quem é tu mesmo "'+ caixotex[meral]+'" ?') 
      }
   }
   for (let meral in pacotex) {
      //bigInt

      if(pacotex[meral] == 1000000000000000000000000000000000){
         if(somatoriopadrão == 0 ){ 
            somatoriopadrão = 1
         }
         somatoriopadrão +='000000000000000000000000000000000'
         somatoriopadrão = parseInt(somatoriopadrão)
         pacotãopadrão.push(somatoriopadrão)
         somatoriopadrão = 0
      }
      if(pacotex[meral] == 1000000000000000000000000000000){
         if(somatoriopadrão == 0 ){ 
            somatoriopadrão = 1
         }
         somatoriopadrão +='000000000000000000000000000000'
         somatoriopadrão = parseInt(somatoriopadrão)
         pacotãopadrão.push(somatoriopadrão)
         somatoriopadrão = 0
      }
      if(pacotex[meral] == 1000000000000000000000000000){
         if(somatoriopadrão == 0 ){ 
            somatoriopadrão = 1
         }
         somatoriopadrão +='000000000000000000000000000'
         somatoriopadrão = parseInt(somatoriopadrão)
         pacotãopadrão.push(somatoriopadrão)
         somatoriopadrão = 0
      }
      if(pacotex[meral] == 1000000000000000000000000){
         if(somatoriopadrão == 0 ){ 
            somatoriopadrão = 1
         }
         somatoriopadrão +='000000000000000000000000'
         somatoriopadrão = parseInt(somatoriopadrão)
         pacotãopadrão.push(somatoriopadrão)
         somatoriopadrão = 0
      }
      if(pacotex[meral] == 1000000000000000000000){
         if(somatoriopadrão == 0 ){ 
            somatoriopadrão = 1
         }
         somatoriopadrão +='000000000000000000000'
         somatoriopadrão = parseInt(somatoriopadrão)
         pacotãopadrão.push(somatoriopadrão)
         somatoriopadrão = 0
      }
      if(pacotex[meral] == 1000000000000000000){
         if(somatoriopadrão == 0 ){ 
            somatoriopadrão = 1
         }
         somatoriopadrão +='000000000000000000'
         somatoriopadrão = parseInt(somatoriopadrão)
         pacotãopadrão.push(somatoriopadrão)
         somatoriopadrão = 0
      }
      //Int normal

      if(pacotex[meral] == 1000000000000000){
         if(somatoriopadrão == 0 ){ 
            somatoriopadrão = 1
         }
         if(pacotex[meral-1] == 0.5){
            pacotex[meral] *= 0.5
         }
         pacotãopadrão.push(somatoriopadrão * pacotex[meral])
         somatoriopadrão = 0
      }           
      if(pacotex[meral] == 1000000000000){
         if(somatoriopadrão == 0 ){ 
          somatoriopadrão = 1
         }
         if(pacotex[meral-1] == 0.5){
            pacotex[meral] *= 0.5
         }
         pacotãopadrão.push(somatoriopadrão * pacotex[meral])
         somatoriopadrão = 0
      }   
      if(pacotex[meral] == 1000000000){
         if(somatoriopadrão == 0 ){ 
            somatoriopadrão = 1
         }
         if(pacotex[meral-1] == 0.5){
            pacotex[meral] *= 0.5
         }
         pacotãopadrão.push(somatoriopadrão * pacotex[meral])
         somatoriopadrão = 0
      }
      if (pacotex[meral] ==1000000){
         if(somatoriopadrão == 0 ){ 
            somatoriopadrão = 1
            }
         if(pacotex[meral-1] == 0.5){
            pacotex[meral] *= 0.5
         }
         pacotãopadrão.push(somatoriopadrão * pacotex[meral])
         somatoriopadrão = 0
      }
      if(pacotex[meral] == 1000){
         if(somatoriopadrão == 0 ){ 
            somatoriopadrão = 1
         }
         
         pacotãopadrão.push(somatoriopadrão * pacotex[meral])
         somatoriopadrão = 0
      }
      // somatorio padrão
      if(pacotex[meral] < 1000) {
         if(pacotex[meral] >= 1){
            if(pacotex.indexOf('.') != -1){
               if(meral < pacotex.indexOf('.')){
                  somatoriopadrão += pacotex[meral]  
               }
            }
            else{
               somatoriopadrão += pacotex[meral]
            }
         }
      }
      // numero de celular
      if(caixotex.length > 5){
         stringnum += pacotex[meral].toString()
         if(meral == (caixotex.length-1)){
            if(stringnum.length == 8){
               stringnum = parseInt(stringnum)  
            }
         }
      }
      // operações com centos 
      if(pacotex[meral] == 100){
         if(pacotex[meral-1] == 0.5){
            pacotex[meral] *= 0.5
         }
         if(meral == caixotex.indexOf('centos')){
               for(all in pacotãopadrão){
                  somatorio += (pacotãopadrão[all] * pacotex[meral])
                  if(all == pacotãopadrão.length-1){
                     pacotãopadrão = []
                  } 
               }
            somatorio+= ((somatoriopadrão - pacotex[meral]) * pacotex[meral])
            somatoriopadrão = 0
         } 
         if(meral == caixotex.indexOf('cento')){
            if(pacotãopadrão.indexOf(1000) != -1){
               throw(' "cento" não deve ser usado em valores maiores ou igual a mil, use "centos"')
            }
            if(somatoriopadrão-pacotex[meral] == 0){
               somatoriopadrão = 101
            }
            somatorio+= ((somatoriopadrão - pacotex[meral]) * pacotex[meral])
            somatoriopadrão = 0
         }  
      }
      // operações com dúzias

      if(pacotex[meral] == 12){
         if(meral != 0){
            if(meral == caixotex.indexOf('dúzias')){
               for(all in pacotãopadrão){
                  varduz +=(pacotãopadrão[all]*12) 
               }
               varduz += ((somatoriopadrão-12)*12)
               somatoriopadrão = varduz 
               pacotãopadrão = []
            }
            if(meral == caixotex.indexOf('dúzia')){
               if(pacotex[meral-1] > 1){
                  throw('para valores maiores que um, use "dúzias"')
               }
               somatoriopadrão = 12
               if(pacotex[meral-1] == 0.5){
                  somatoriopadrão *= 0.5
               }
            }
            if(meral == caixotex.indexOf('duzias')){
               for(all in pacotãopadrão){
                  varduz +=(pacotãopadrão[all]*12) 
               }
               varduz += ((somatoriopadrão-12)*12)
               somatoriopadrão = varduz 
               pacotãopadrão = []
            }
            if(meral == caixotex.indexOf('duzia')){
               if(pacotex[meral-1] > 1){
                  throw('para valores maiores que um, use "dúzias"')
               }
               somatoriopadrão = 12
               if(pacotex[meral-1] == 0.5){
                  somatoriopadrão *= 0.5
               }
            }
         }
      }
      // operações com pi
      if(pacotex[meral] == 3.14 ){
         if(somatoriopadrão == 3.14){
            somatoriopadrão = 3.14
         }
        else{
          somatoriopadrão -= pacotex[meral]
          somatoriopadrão = (somatoriopadrão * pacotex[meral])
        }
      }
      // operações fracionarias
      
      if(pacotex[meral] < 1){
         if(pacotex[meral] > 0){
            //ponto ou virgula 

            if(pacotex.indexOf('.') != -1){
               for(i = pacotex.indexOf('.')+1;i < pacotex.length-1;i++){
                  somatorio += (pacotex[i]* pacotex[meral])
               }
               for(all in pacotãopadrão){
                  somatorio += pacotãopadrão[all] 
                  if(all == pacotãopadrão.length-1){
                     pacotãopadrão = []
                  }
               }
            } 
            //situações complexas 'meia' e 'meio' 

            if(caixotex.indexOf('meia') != -1){
               if(caixotex.indexOf('meia') == caixotex.length-1){
                  for(all in pacotãopadrão){
                     somatorio += (pacotãopadrão[all] * 0.5) 
                  }
                  somatorio += (somatoriopadrão * 0.5)
               }
            }
            if(caixotex.indexOf('meio') != -1){
               if(caixotex.indexOf('meio') == caixotex.length-1){
                  if(pacotex[meral-2] < 1000000 ){
                     somatoriopadrão += 0.5
                  }
                  else{
                     for(all in pacotãopadrão){
                        somatorio += (pacotãopadrão[all] * 0.5) 
                     } 
                  }  
               }  
            }
            if(caixotex.indexOf('meio') != -1){
               if(caixotex.indexOf('meio') == caixotex.length-1){
                  
               }
            }
            if(caixotex.indexOf('meio') == -1){
               if(caixotex.indexOf('meia') == -1){
                  if(caixotex.length < 3){
                  somatoriopadrão  -= pacotex[meral-1]
                  somatoriopadrão += (pacotex[meral-1] * pacotex[meral]) 
                  }
               }
            }
         }
      }
      // zeros no fim zeram tudo afinal 'um milhão de zeros' é 'zero'

      if(pacotex[pacotex.length-1]== 0){
         if(caixotex[caixotex.length-1] == 'zero'){
            pacotãopadrão = []
            somatoriopadrão = 0
            somatorio = 0
         }
         if(caixotex[caixotex.length-1] == 'zeros'){
            pacotãopadrão = []
            somatoriopadrão = 0
            somatorio = 0
         }
      }
      // soma padrão

      if(meral == pacotex.length-1) {
         for(all in pacotãopadrão){
            somatorio += pacotãopadrão[all]
         }
      }
      if(meral == pacotex.length-1){
         somatorio += somatoriopadrão
      } 
   }
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

   if(stringnum.toString().length == 8){
      console.log(stringnum)
      //return stringnum;
   }
   if(stringnum.toString().length != 8){
      console.log(somatorio)
      //return somatorio;
   }
//}
//w2n()
//module.exports = { w2n }
