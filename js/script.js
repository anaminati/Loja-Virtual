// Informações sobre os produtos

let informacoes = [
    {id: 1, nome: 'Bloco autoadesivo colorido (kit)', img: '../img/produtos/bloco-autoadesivo-colorido.webp', precos: [12.00, 12.00+1, 12.00+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 2, nome: 'Lapiseira 0.5mm', img: '../img/produtos/lapiseira.jpeg', precos: [3.89, 3.89+1, 3.89+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 3, nome: 'Mochila escolar personagem infantil resistente', img: '../img/produtos/mochila-infantil.jpeg', precos: [40.00, 40.00+1, 40.00+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 4, nome: 'Bloco autoadesivo preto e com formatos diferentes (kit)', img: '../img/produtos/bloco-autoadesivo-preto.jpeg', precos: [15.00, 15.00+1, 15.00+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 5, nome: 'Pacote de folha A4 com 50 unidades', img: '../img/produtos/pacote-folhas-a4.png', precos: [20.00, 20.00+1, 20.00+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 6, nome: 'Canetas Stabilo 12 cores', img: '../img/produtos/canetas-stabilo.jpeg', precos: [24.50, 24.50+1, 24.50+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 7, nome: 'Marcador de texto Faber Castell (un.)', img: '../img/produtos/marca-texto.jpg', precos: [3.50, 3.50+1, 3.50+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 8, nome: 'Caneta esferográfica azul Bic', img: '../img/produtos/caneta-bic.jpg', precos: [1.50, 1.50+1, 1.50+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 9, nome: 'Caneta Posca PC-7M preto', img: '../img/produtos/caneta-posca.jpg', precos: [35.00, 35.00+1, 35.00+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 10, nome: 'Lápis dermatográfico', img: '../img/produtos/lapis-dermatografico.jpeg', precos: [16.00, 16.00+1, 16.00+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 11, nome: 'Lápis preto Faber Castell', img: '../img/produtos/lapis-preto.png', precos: [1.00, 1.00+1, 1.00+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 12, nome: 'Caderno grande 20 matérias', img: '../img/produtos/caderno.webp', precos: [35.00, 35.00+1, 35.00+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 13, nome: 'Agenda planner argolado', img: '../img/produtos/agenda.jpeg', precos: [80.00, 80.00+1, 80.00+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 14, nome: 'Garrafa de tinta EPSON', img: '../img/produtos/garrafa-tinta.jpg', precos: [39.00, 39.00+1, 39.00+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 15, nome: 'Grampeador de mesa', img: '../img/produtos/grampeador.jpeg', precos: [28.90, 28.90+1, 28.90+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 16, nome: 'Clips para papéis', img: '../img/produtos/clips.jpg', precos: [3.08, 3.08+1, 3.08+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 17, nome: 'Lápis de cor Faber-Castell EcoLápis 24 cores', img: '../img/produtos/lapis-cor.jpg', precos: [51.30, 51.30+1, 51.30+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 18, nome: 'Trio porta canetas/clips/lembrete fumê', img: '../img/produtos/trio.png', precos: [14.99, 14.99+1, 14.99+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 19, nome: 'Marcador artístico 2 pontas', img: '../img/produtos/marcador.jpg', precos: [64.05, 64.05+1, 64.05+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 20, nome: 'Pincel Soft touch 4 unidades', img: '../img/produtos/pinceis-soft.jpg', precos: [14.34, 14.34+1, 14.34+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 21, nome: 'Organizador de livros Standard', img: '../img/produtos/organizador.png', precos: [39.60, 39.60+1, 39.60+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 22, nome: 'Estojo Box Tilibra', img: '../img/produtos/estojo.jpg', precos: [66.60, 66.60+1, 66.60+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 23, nome: 'Fita dupla face, fixação extrema', img: '../img/produtos/fita.jpg', precos: [28.63, 28.63+1, 28.63+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 24, nome: 'Pasta sanfonada plástica', img: '../img/produtos/pasta.png', precos: [23.90, 23.90+1, 23.90+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 25, nome: 'Mesa digitalizadora', img: '../img/produtos/mesa-digital.jpg', precos: [259.00, 259.00+1, 259.00+2.5], embalagens: ['', '+1,00', '+2,50'], descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
]

// Janela com informações sobre o produto

const Janela = {
    produtoJanela: document.querySelector(".produtos-janela"),
    produtoEmbalagens: document.querySelectorAll(".produtos-info-embalagem"),
    addProduto: document.querySelector(".produtos-info-quantidade-mais"),
    removerProduto: document.querySelector(".produtos-info-quantidade-menos"),
    addCarrinho: document.querySelector(".produtos-info-add-button"),

    abrirProdutoItem(event) {
        event.preventDefault();
        Janela.produtoItem(event);
        Janela.abrir();
    },

    // Abrir a janela

    abrir() {
        Janela.produtoJanela.style.opacity = 0;
        Janela.produtoJanela.style.display = "flex";
        setTimeout(() => {
            Janela.produtoJanela.style.opacity = 1;
        }, 200);
    },

    // Fechar a janela

    fechar() {
        Janela.produtoJanela.style.opacity = 0;
        setTimeout(() => {
            Janela.produtoJanela.style.display = "none";
        }, 500);
    },

    // Informações sobre o item selecionado

    produtoItem(e) {
        let produtoIndex = e.target.closest(".produto-item").getAttribute("data-key");
        jKey = produtoIndex;
        jQt = 1;
        document.querySelector(".produtos-janela-img").src = informacoes[produtoIndex].img;
        document.querySelector(".produtos-info h2").innerHTML = informacoes[produtoIndex].nome;
        document.querySelector(".produtos-info-descricao").innerHTML = informacoes[produtoIndex].descricao;
        document.querySelector(".produtos-info-preco-atual").innerHTML = `R$ ${formatPreco(
            informacoes[produtoIndex].precos[0]
        )}`;
        document.querySelector(".produtos-info-quantidade").innerHTML = jQt;
        Janela.precoProdutos(produtoIndex);
    },   

    // Mudando de preço conforme a embalagem

    precoProdutos(produtoIndex) {
        Janela.produtoEmbalagens.forEach((embalagem, embalagemIndex) => {
            if (embalagemIndex === 0) Janela.embalagemSelecionada(embalagem);
            precoProduto = informacoes[Number(produtoIndex)].precos[embalagemIndex];
            embalagem.addEventListener("click", () => {
                Janela.embalagemSelecionada(embalagem);
                precoProduto = informacoes[Number(produtoIndex)].precos[embalagemIndex];
                document.querySelector(".produtos-info-preco-atual").innerHTML = `R$ ${formatPreco(
                    precoProduto * jQt
                )}`;
            });
            embalagem.querySelector("span").innerHTML = informacoes[produtoIndex].embalagens[embalagemIndex];
        });
    },

    // Informando qual embalagem está selecionada

    embalagemSelecionada(embalagem) {
        document.querySelector(".produtos-info-embalagem.selected").classList.remove("selected");
        embalagem.classList.add("selected");
    },

    // Estabelecendo a quantidade de itens

    quantidade() {
        Janela.removerProduto.addEventListener("click", () => {
            if (jQt > 1) {
                jQt--;
                document.querySelector(".produtos-info-quantidade").innerHTML = jQt;
                document.querySelector(".produtos-info-preco-atual").innerHTML = `R$ ${formatPreco(
                    precoProduto * jQt
                )}`;
            }
        });

        Janela.addProduto.addEventListener("click", () => {
            if (jQt < 50) {
                jQt++;
                document.querySelector(".produtos-info-quantidade").innerHTML = jQt;
                document.querySelector(".produtos-info-preco-atual").innerHTML = `R$ ${formatPreco(
                    precoProduto * jQt
                )}`;
            }
        });
    },

    // Adicionando ao carrinho

    adicionarCarrinho() {
        Janela.addCarrinho.addEventListener("click", () => {
            const embalagemIndex = parseInt(
                document.querySelector(".produtos-info-embalagem.selected").getAttribute("data-key")
            );
            const identifier = informacoes[jKey].id + "@" + embalagemIndex;
            const key = carrinho.findIndex(item => item.identifier == identifier);
            if (key > -1) carrinho[key].qt += jQt;
            if (key === -1) {
                const carrinhoItem = {
                    identifier,
                    id: informacoes[jKey].id,
                    embalagemIndex,
                    qt: jQt,
                };
                carrinho.push(carrinhoItem);
            }
            Carrinho.update();
            Janela.fechar();
        });
    },
};

// Carrinho de compras

const Carrinho = {
    carrinhoElemento: document.querySelector("aside"),
    carrinhoProdutos: document.querySelector(".carrinho"),
    subtotalElemento: document.querySelector(".carrinho-valor-subtotal"),
    descontoElemento: document.querySelector(".carrinho-valor-desconto"),
    totalElemento: document.querySelector(".carrinho-valor-total"),
    freteElemento: document.querySelector(".carrinho-valor-frete"),
    parcelamentoUma: document.querySelector(".parcelaUma"),
    parcelamentoDuas: document.querySelector(".parcelaDuas"),
    parcelamentoTres: document.querySelector(".parcelaTres"),
    parcelamentoQuatro: document.querySelector(".parcelaQuatro"),
    parcelamentoCinco: document.querySelector(".parcelaCinco"),
    subtotal: 0,
    frete: 0,
    desconto: 0,
    total: 0,

    // Informando os produtos que estão no carrinho 

    produtoItem(produtoIt, carrinhoIndex) {
        const produtoInfo = Carrinho.produtoEmbalagensNome(produtoIt, carrinho[carrinhoIndex]);
        const nomeProduto = `${produtoIt.nome} ${produtoInfo}`;
        const carrinhoItem = `
        <div class="carrinho-item">
          <img src=${produtoIt.img} />
          <div class="carrinho-item-nome">${nomeProduto}</div>
          <div class="carrinho-item-qt-area">
            <button class="carrinho-item-qt-menos" onclick="Carrinho.removerItemCarrinho(${carrinhoIndex})">-</button>
            <div class="carrinho-item-qt">${carrinho[carrinhoIndex].qt}</div>
            <button class="carrinho-item-qt-mais" onclick="Carrinho.addItemCarrinho(${carrinhoIndex})">+</button>
          </div>
        </div>`;
        return carrinhoItem;
    },

    // Informando qual embalagem foi selecionada

    produtoEmbalagensNome(produtoIt, carrinhoItem) {
        let produtoInfo;
        let precoProduto;

        switch (carrinhoItem.embalagemIndex) {
            case 0:
                precoProduto = produtoIt.precos[0];
                produtoInfo = `(N)<br>R$ ${formatPreco(precoProduto)}`;
                break;
            case 1:
                precoProduto = produtoIt.precos[1];
                produtoInfo = `(P)<br>R$ ${formatPreco(precoProduto)}`;
                break;
            case 2:
                precoProduto = produtoIt.precos[2];
                produtoInfo = `(P + B)<br>R$ ${formatPreco(precoProduto)}`;
                break;
        }

        Carrinho.subtotal += precoProduto * carrinhoItem.qt;
        return produtoInfo;
    },

    // Adicionando itens no carrinho

    addItemCarrinho(carrinhoIndex) {
        carrinho[carrinhoIndex].qt++;
        Carrinho.update();
    },

    // Removendo itens no carrinho

    removerItemCarrinho(carrinhoIndex) {
        if (carrinho[carrinhoIndex].qt > 1) {
            carrinho[carrinhoIndex].qt--;
        } else {
            carrinho.splice(carrinhoIndex, 1);
        }
        Carrinho.update();
    },

    // Atualizando

    update() {
        document.querySelector(".menu-abrir span").innerHTML = carrinho.length;
        if (carrinho.length > 0) {
            Carrinho.reset();
            Carrinho.carrinhoElemento.classList.add("show");
            carrinho.forEach((carrinhoItem, carrinhoIndex) => {
                let produtoIt = informacoes.find(produto => produto.id === carrinhoItem.id);
                const produtoItemElemento = Carrinho.produtoItem(produtoIt, carrinhoIndex);
                Carrinho.carrinhoProdutos.innerHTML += produtoItemElemento;
            });
            Carrinho.valores();
        } else {
            Carrinho.carrinhoElemento.classList.remove("show");
            Carrinho.carrinhoElemento.style.left = "100vw";
        }
    },

    // Restaurando os valores

    reset() {
        Carrinho.carrinhoProdutos.innerHTML = "";
        Carrinho.subtotal = 0;
        Carrinho.desconto = 0;
        Carrinho.total = 0;
        Carrinho.frete = 0;
        Carrinho.parcelaUma = 0;
        Carrinho.parcelaDuas = 0;
        Carrinho.parcelaTres = 0;
        Carrinho.parcelaQuatro = 0;
        Carrinho.parcelaCinco = 0;
    },

   

    // Definindo os valores

    valores() {
        if (Carrinho.subtotal >= 150) {
            Carrinho.frete = 0;
        } else {
            Carrinho.frete = 15;
        }
        var pag = window.document.getElementsByName(`pagamento`);
        var par = window.document.getElementsByName(`parcelas`);
        if (pag[1].checked || par[0].checked){
            Carrinho.desconto = Carrinho.subtotal * 0.1;
        } else {
            Carrinho.desconto = 0;
        }
        if (pag[0].checked) {
            document.querySelector(".carrinho-valor.parcelas").style.display = "flex";
            document.querySelector(".carrinho-valor.infocartao").style.display = "flex";
        }
        if (pag[1].checked) {
            document.querySelector(".carrinho-valor.parcelas").style.display = "none";
            document.querySelector(".carrinho-valor.infocartao").style.display = "none";
        }
        Carrinho.total = Carrinho.subtotal - Carrinho.desconto + Carrinho.frete;
        Carrinho.parcelaUma = (Carrinho.subtotal+Carrinho.frete)/1;
        Carrinho.parcelaDuas = (Carrinho.subtotal+Carrinho.frete)/2;
        Carrinho.parcelaTres = (Carrinho.subtotal+Carrinho.frete)/3;
        Carrinho.parcelaQuatro = (Carrinho.subtotal+Carrinho.frete)/4;
        Carrinho.parcelaCinco = (Carrinho.subtotal+Carrinho.frete)/5;
        Carrinho.subtotalElemento.innerHTML = `R$ ${formatPreco(Carrinho.subtotal)}`;
        Carrinho.freteElemento.innerHTML = `R$ ${formatPreco(Carrinho.frete)}`;
        Carrinho.totalElemento.innerHTML = `R$ ${formatPreco(Carrinho.total)}`;
        Carrinho.descontoElemento.innerHTML = `R$ ${formatPreco(Carrinho.desconto)}`;
        Carrinho.parcelamentoUma.innerHTML = `R$ ${formatPreco(Carrinho.parcelaUma)}`;
        Carrinho.parcelamentoDuas.innerHTML = `R$ ${formatPreco(Carrinho.parcelaDuas)}`;
        Carrinho.parcelamentoTres.innerHTML = `R$ ${formatPreco(Carrinho.parcelaTres)}`;
        Carrinho.parcelamentoQuatro.innerHTML = `R$ ${formatPreco(Carrinho.parcelaQuatro)}`;
        Carrinho.parcelamentoCinco.innerHTML = `R$ ${formatPreco(Carrinho.parcelaCinco)}`;
    },

    mobile() {
        document.querySelector(".menu-abrir").addEventListener("click", () => {
            if (carrinho.length > 0) {
                document.querySelector("aside").style.left = "0";
                document.querySelector("aside").style.marginLeft = "0";
                document.querySelector("aside").style.borderRadius = "0";
                document.querySelector("aside").style.backgroundColor = "#FFFFFF";
            }
        });
        document.querySelector('.carrinho-finalizar').addEventListener('click', () => {
            if(carrinho.length > 0) {
                window.location.href = "finalizar.html";
            }
        });
        document.querySelector(".menu-fechar").addEventListener("click", () => {
            document.querySelector("aside").style.left = "100vw";
            document.querySelector("aside").style.marginLeft = "25%";
            document.querySelector("aside").style.borderRadius = "30px";
            document.querySelector("aside").style.backgroundColor = "rgba(255, 255, 255, 0.5);"
        });
    },
};

const produtoArea = document.querySelector(".produtos-area");
let carrinho = [];
let jKey = 0;
let jQt = 1;
let precoProduto = 0;

// Definindo como o produto aparecerá na loja

const produtoItem = (produto, index) => {
    const produtoIt = `
        <div class="produto-item" data-key=${index}>
            <div class="produto-item-img"><img src=${produto.img} /></div>
            <a href="" class="produto-item--link">
                <div class="produto-item-add" onclick="Janela.abrirProdutoItem(event)">+</div>
            </a>
            <div class="produto-item-preco">R$ ${formatPreco(produto.precos[0])}</div>
            <div class="produto-item-nome">${produto.nome}</div>
            <div class="produto-item-descricao" style="font-family: 'Barlow Condensed', sans-serif; font-size: 15px">${produto.descricao}</div>
        </div>`;
    return produtoIt;
};

informacoes.forEach((produto, index) => {
    const produtoIt = produtoItem(produto, index);
    produtoArea.innerHTML += produtoIt;
});
Janela.quantidade();
Janela.adicionarCarrinho();
Carrinho.mobile();

// Formatando o preço

function formatPreco(preco) {
    return (preco.toFixed(2)).toString().replace(".", ",");
}