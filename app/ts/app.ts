let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
const customer1 = new Cliente('Ursula', '30030030030', '3')
const customer2 = new Cliente('Roberta', '40040040040', '4')
const customers = new Clientes();

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

customers.inserir(customer1);
customers.inserir(customer2);

console.log(`Cliente: ${customer1.nome}`)
console.log(`Cliente: ${customer2.nome}`)

customers.listar();

customers.remover(customer2.cpf);

customers.listar();

console.log(customer1.nome)

console.log(customers.pesquisar(customer1.cpf));
