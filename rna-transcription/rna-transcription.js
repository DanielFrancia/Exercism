var Rna = function () {};

Rna.prototype.toRna = function (dna) {
    dna=dna.toUpperCase()
    var input=dna.split('')//string to array
    var rnaComplement=[] //output container
    for(var i=0;i<input.length;i++)
    {
        if(input[i]==='G'){
            rnaComplement.push('C')
        }
        else if(input[i]==='C'){
            rnaComplement.push('G')
        }
        else if(input[i]==='T'){
            rnaComplement.push('A')
        }
        else if(input[i]==='A'){
            rnaComplement.push('U')
        }
        else if((input[i]!=='G') || (input[i]!=='C') || (input[i]!=='T') || (input[i]!=='A'))
        {
            throw new Error('Invalid input')
        }
    }
    return rnaComplement.join('');//array to string
    
}
module.exports = Rna;
