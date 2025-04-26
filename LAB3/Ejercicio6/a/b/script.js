function calcular() {
    const v1 = parseInt(document.getElementById('valor1').value);
    const v2 = parseInt(document.getElementById('valor2').value);
    const op = document.getElementById('operador').value;
    let resultado;
  
    switch(op) {
      case '+': resultado = v1 + v2; break;
      case '-': resultado = v1 - v2; break;
      case '*': resultado = v1 * v2; break;
      case '/': resultado = v2 !== 0 ? v1 / v2 : 'Error: División por cero'; break;
      case '%': resultado = v1 % v2; break;
      case '&&': resultado = Boolean(v1 && v2); break;
      case '||': resultado = Boolean(v1 || v2); break;
      case '&': resultado = v1 & v2; break;
      case '|': resultado = v1 | v2; break;
      case '^': resultado = v1 ^ v2; break;
      case '<<': resultado = v1 << v2; break;
      case '>>': resultado = v1 >> v2; break;
      default: resultado = 'Operador inválido';
    }
  
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}
  