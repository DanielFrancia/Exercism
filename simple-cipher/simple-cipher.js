var Cipher = function () {};

var alphabets='abcdefghijklmnopqrstuvwxyz'
var alphacontainer=alphabets.split('')

Cipher.prototype.encode = function (plaintxt,keytext) {
    var alphabets='abcdefghijklmnopqrstuvwxyz'
    var alphacontainer=alphabets.split('')  
  var input = plaintxt.split('')
  var keys = keytext.split('')
  var ciphertxt = []
  
  for(var i=0;i<input.length;i++){
    var currentLetterOfInput = input[i]
    var currentLetterOfKey = keys[i]
    var shiftKey = alphacontainer.indexOf(currentLetterOfKey)
    var indexOfinputInABC = alphacontainer.indexOf(currentLetterOfInput)

    if(indexOfinputInABC+shiftKey<=(alphacontainer.length-1)) {
      var shiftedIndex=indexOfinputInABC+shiftKey
      ciphertxt.push(alphacontainer[shiftedIndex])
    }
    else{
      var shiftedIndex = (indexOfinputInABC+shiftKey) % ((alphacontainer.length - 1)-(indexOfinputInABC+shiftKey))
      ciphertxt.push(alphacontainer[shiftedIndex])
    }
    
  }

return ciphertxt.join('');
}


module.exports = Cipher;

