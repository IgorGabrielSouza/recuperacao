class Produto{
    constructor() {
        this.id = 1;
    }

    salvar() {
        this.lerDados();
        }

        lerDados() {
          let Produto = {}
          Produto.id =
          Produto.nomeProduto = document.getElementById('produto').Value;
          Produto.preco = document.getElementById('preco').Value;
            return Produto;
        }

        cancelar() {

        }

    }
        var Produto = new Produto();