function calculate(){
    // Tratando erros
    resultInput.value = 'ERRO'; 
    resultInput.classList.add('error');

    // Calcular resultado
    const result = eval(input.value);
    resultInput.value = result;
    resultInput.classList.remove('error');   
}

