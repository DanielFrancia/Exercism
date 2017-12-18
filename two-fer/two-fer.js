var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  
 if(who==="Alice"){
    return (`One for ${who}, one for me.`)
 }
 else if(who==="Bob"){
  return (`One for ${who}, one for me.`)
 }
 else if(who===undefined)
  return ("One for you, one for me.")
};

module.exports = TwoFer;
