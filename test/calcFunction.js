exports.calcJuros = function calculaJuros (valor, dias) {
    if (dias <= 30) {
      juros = (valor * 5)/100
      return valorAPagar = juros + valor
    }else if (dias <= 60 ) {
      juros = (valor * 10)/100
      return valorAPagar = juros + valor
    } else if (dias >= 61) {
      juros = (valor * 15)/100
      return valorAPagar = juros + valor
   }
  }
