function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Erro: Insira números válidos.";
    } else {
        switch (operator) {
            case "+": result = num1 + num2; break;
            case "-": result = num1 - num2; break;
            case "*": result = num1 * num2; break;
            case "/": result = num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero"; break;
            default: result = "Operação inválida.";
        }
    }
    document.getElementById("result").innerText = "Resultado: " + result;
}
