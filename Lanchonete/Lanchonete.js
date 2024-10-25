function confirmUser() {
    const name = document.getElementById("Name").value;
    const cpf = document.getElementById("CPF").value;
    if (name === "" || cpf === "") {
        alert("Por favor, preencha ambos os campos.");
        return;
    }

    const cpfRegex = /^[0-9]+$/;
    if (!cpfRegex.test(cpf)) {
        alert("O CPF deve conter apenas números.");
        return;
    }

    alert("Funcionário confirmado");
}

function confirmOrder() {
    const name = document.getElementById("Name2").value;
    const description = document.getElementById("Description").value; 
    const handler = document.getElementById("Handler").value;

    if (name === "" || handler === "") {
        alert("Por favor, preencha os campos Nome e Funcionário responsável.");
        return;
    }

    alert("Pedido confirmado");
}