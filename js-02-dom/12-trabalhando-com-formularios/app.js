const form = document.getElementById('orderForm');

form.addEventListener('submit', function(ev) {
    /* preventDefault, ele irá impedir o comportamento padrão deste evento
    utilizado */
    ev.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const address = document.querySelector('input[name="address"]').value;
    const breadType = document.querySelector('select[name="breadType"]').value;
    const main = document.querySelector('input[name="main"]').value;
    const observations = document.querySelector('textarea[name="observations"]').value;

    /* O checkbox tem um detalhe que você pode escolher várias respostas, ele é feito
    diferente, da seguinte forma: */
    let salad = '';
    document.querySelectorAll('input[name="salad"]:checked').forEach(function(item){
        salad += ' - ' + item.value + '\n';
    });

    console.log({
        name,
        address,
        breadType,
        main,
        salad,
        observations
    });

    alert(
        "Pedido Realizado!" +
        "\nNome do Cliente: " + name +
        "\nEndereço de entrega: " + address +
        "\nTipo de Pão: " + breadType +
        "\nRecheio: \n - " + main + "\n" + salad +
        "Observações: " + observations
    )

});