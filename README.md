# recuperacao
repositório para guardar informações de um produto
bom esse site  servi para voce marca seus protudos como eu deixei de exemplo a mesa da sala de estar e seu preço que e de 1900 R$. voce pode continuar colocando seus produto voce escolher.
como colocar:
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Projeto javascript</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='style.css'>
    <script src='script.js'></script>
</head>
<body>
    <header>
        <h1>Minha Loja 1.0</h1>
    </header>
       <main>
        <div class="title">
            <h2>Produtos</h2>  
            <span>Lista de produtos da minha loja.</span>

    <div class="card">
        <div class="lineInput">
            <label>Produto</label>
            <input type="text" id="produto" placeholder="nome do produto">
        </div>

        <div class="lineInput">
            <label>Valor</label>
            <input type="text" id="preco" placeholder="Valor do produto">    
        </div>

        <button onclick="produto.salvar()">salvar</button>
        <button onclick="produto.cancelar()">cancelar</button>
    </div>

    <div class="content">
        <table border="1">

            <thead>
                <th class="center">1D</th>
                <th>produto</th>
                <th>valor</th>
                <th class="center">ações</th>

            </thead>
            <tbody>

                <tr>
                    <td class="center">1</td>
                    <td>Mesa da sala de estar</td>
                    <td>1900</td>
                    <td>

                        <img src="img.png" alt="">
                        <img src="img excluir.png" alt="">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</main>
</body>

</html>
</body>
</html>

isso e so a base si voce e experienti vc coloca a cor com o style.css