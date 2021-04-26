const chai = require('chai');
const calcFunction = require('./calcFunction');
const calcJuros = calcFunction.calcJuros;
const expect = chai.expect;

describe('calcJuros()', () => {
    it('Paga-se 5% de juros até 30 dias de atraso', () => {
        expect(calcJuros(100, 25)).to.equal(105);
    });

    it('Paga-se 10% de juros de 31 até 60 dias de atraso', () => {
        expect(calcJuros(100, 40)).to.equal(110);
    });

    it('Paga-se 15% de juros a partir de 60 dias de atraso', () => {
        expect(calcJuros(100, 64)).to.equal(115);
    });
});