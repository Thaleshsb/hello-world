numero = 'vinte e tres'

const numerais = {'e':0 ,'um': 1 , 'dois': 2 , 'tres': 3 , 'quatro': 4 , 'cinco': 5, 'seis': 6 , 'sete': 7 , 'oito': 8 , 'nove': 9,'vinte': 20 };
const caixote = numero.toLowerCase().split(' ')
const pacotex = [];
somatorio = 0

   for (let meral  in caixote) {

      taisonde = Object.keys(numerais).indexOf(caixote[meral]);
                           
      otaldonum = Object.values(numerais);
                           
      pacotex.push(otaldonum[taisonde])

      somatorio += pacotex[meral]
}
console.log('Tu digito '+ somatorio+' né?')