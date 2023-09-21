//import Op from "sequelize";
import Cliente from "./model/Cliente.js";
import Pedido from "./model/Pedido.js";
import Cardapio from "./model/Cardapio.js"
import Pagamento from "./model/Pagamento.js"

async function criarInserirCliente() {
  await Cliente.sync({ force: true });
  try {
    await Cliente.create({
      nome: "Cliente 1",
      contato: "111-111-1111",
      endereco: "Rua A, 123",
      preferencia: "Pizza"
    });

    await Cliente.create({
      nome: "Cliente 2",
      contato: "222-222-2222",
      endereco: "Rua B, 456",
      preferencia: "Sushi"
    });

    await Cliente.create({
      nome: "Cliente 3",
      contato: "333-333-3333",
      endereco: "Rua C, 789",
      preferencia: "Hambúrguer"
    });

    await Cliente.create({
      nome: "Cliente 4",
      contato: "444-444-4444",
      endereco: "Rua D, 321",
      preferencia: "Salada"
    });

    await Cliente.create({
      nome: "Cliente 5",
      contato: "555-555-5555",
      endereco: "Rua E, 654",
      preferencia: "Pasta"
    });

    console.log('Tuplas criadas com sucesso!');
  } catch (error) {
    console.error('Falha ao criar as tuplas:', error);
  }
}


////////////INSERIR PEDIDO////////////


async function criarInserirPedido() {
  await Pedido.sync({ force: true });
  try {
    await Pedido.create({
      itens: "Hambúrguer",
      estado: "Entregue",
      horario: '2023-09-20 15:30:00'
    });

    await Pedido.create({
      itens: "Batata frita",
      estado: "Entregue",
      horario: '2023-09-20 15:30:00'
    });

    await Pedido.create({
      itens: "Coxinha e Refrigerante",
      estado: "Pronto para entrega",
      horario: '2023-09-20 15:30:00'
    });

    await Pedido.create({
      itens: "Pastel e Refrigerante",
      estado: "Pronto para entrega",
      horario: '2023-09-20 15:30:00'
    });

    await Pedido.create({
      itens: "Pizza",
      estado: "Entregue",
      horario: '2023-09-20 15:30:00'
    });

    console.log('Tuplas criadas com sucesso!');
  } catch (error) {
    console.error('Falha ao criar as tuplas:', error);
  }
}

///////////INSERIR CARDÁPIO///////////


async function criarInserirCardapio() {
  await Cardapio.sync({ force: true });
  try {
    await Cardapio.create({
      item: "Hambúrguer Simples",
      descricao: "Hambúrguer com carne, salada, etc.",
      preco: 7.00
    });

    await Cardapio.create({
      item: "Pizza de Calabresa",
      descricao: "Pizza de calabresa com queijo",
      preco: 30.00
    });

    await Cardapio.create({
      item: "Coxinha",
      descricao: "Coxinha de carne moida",
      preco: "19:30:00"
    });

    await Cardapio.create({
      item: "Pastel Misto",
      descricao: "Pastel de presunto com queijo",
      preco: 4.00
    });

    await Cardapio.create({
      item: "Açaí",
      descricao: "Açaí com mm, granola e leite condençado",
      preco: 15.00
    });

    console.log('Tuplas criadas com sucesso!');
  } catch (error) {
    console.error('Falha ao criar as tuplas:', error);
  }
}

//////////INSERIR PAGAMENTO//////////


async function criarInserirPagamento() {
  await Pagamento.sync({ force: true });
  try {
    await Pagamento.create({
      valor: 50.00,
      metodo: "Cartão",
      horario: '2023-09-20 15:30:00'
    });

    await Pagamento.create({
      valor: 75.00,
      metodo: "Pix",
      horario: '2023-09-20 15:30:00'
    });

    await Pagamento.create({
      volor: 25.00,
      metodo: "Dinheiro",
      horario: '2023-09-20 15:30:00'
    });

    await Pagamento.create({
      valor: 35.00,
      metodo: "Cartão",
      horario: '2023-09-20 15:30:00'
    });

    await Pagamento.create({
      valor: 17.00,
      metodo: "Pix",
      horario: '2023-09-20 15:30:00'
    });

    console.log('Tuplas criadas com sucesso!');
  } catch (error) {
    console.error('Falha ao criar as tuplas:', error);
  }
}

////////FUNÇÕES DE PESQUISA////////


async function pesquisarCliente() {
  console.log("Vai requisitar");
  Cliente.findAll().then( (Cliente) => {
   console.log(Cliente); 
  });
  console.log("Algum texto");
}

async function pesquisarPedido() {
  console.log("Vai requisitar");
  Pedido.findAll().then( (Pedido) => {
   console.log(Pedido); 
  });
  console.log("Algum texto");
}

async function pesquisarCardapio() {
  console.log("Vai requisitar");
  Cardapio.findAll().then( (Cardapio) => {
   console.log(Cardapio); 
  });
  console.log("Algum texto");
}

async function pesquisarPagamento() {
  console.log("Vai requisitar");
  Pagamento.findAll().then( (Pagamento) => {
   console.log(Pagamento); 
  });
  console.log("Algum texto");
}


////////////EXCLUIR TUPLAS////////////

Cliente.destroy({
  where: {
    id: 1
  }
});

Pedido.destroy({
  where: {
    id: 1
  }
});

Cardapio.destroy({
  where: {
    id: 1
  }
  
});
Pagamento.destroy({
  where: {
    id: 1
  }
});



//criarInserirCliente();
//criarInserirPedido();
//criarInserirCardapio();
//criarInserirPagamento();
pesquisarCliente();
pesquisarPedido();
pesquisarCardapio();
pesquisarPagamento();
