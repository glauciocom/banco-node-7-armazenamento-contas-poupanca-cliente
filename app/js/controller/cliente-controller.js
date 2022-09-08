class ClienteController {
    constructor() {
        this.inputNomeCli =
            document.querySelector("#nomeCli");
        this.inputCpf =
            document.querySelector("#cpf");
        this.inputConta =
            document.querySelector("#conta");
        this.clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        let novoCliente = new Cliente(this.inputNomeCli.value, this.inputCpf.value, this.inputConta.value);
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }
    listar() {
        this.clientes.listar().forEach(cliente => {
            this.inserirClienteNoHTML(cliente);
        });
    }
    inserirClienteNoHTML(cliente) {
        const elementoCli = document.createElement('cli');
        elementoCli.textContent = cliente.toString();
        const botaoApagarCli = document.createElement('button');
        botaoApagarCli.textContent = 'X';
        botaoApagarCli.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoCli.appendChild(botaoApagarCli);
        document.body.appendChild(elementoCli);
    }
}
