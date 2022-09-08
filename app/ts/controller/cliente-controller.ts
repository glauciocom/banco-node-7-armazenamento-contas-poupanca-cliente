class ClienteController {

    private inputNomeCli: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private inputConta: HTMLInputElement;

    private clientes: Clientes;

    constructor() {
        this.inputNomeCli =
            <HTMLInputElement>document.querySelector("#nomeCli");
        this.inputCpf =
            <HTMLInputElement>document.querySelector("#cpf");
        this.inputConta =
            <HTMLInputElement>document.querySelector("#conta");
        this.clientes = new Clientes();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        let novoCliente = new Cliente(this.inputNomeCli.value,
            this.inputCpf.value, this.inputConta.value);

        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }

    listar() {
        this.clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }

    inserirClienteNoHTML(cliente: Cliente) {
        const elementoCli = document.createElement('cli');
        elementoCli.textContent = cliente.toString();
        const botaoApagarCli = document.createElement('button');
        botaoApagarCli.textContent = 'X';
        botaoApagarCli.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
        );
        elementoCli.appendChild(botaoApagarCli);
        document.body.appendChild(elementoCli);
    }

}
