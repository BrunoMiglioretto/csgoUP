export class skin {
    constructor(nome, valor, descricao, imagem) {
        const skin = {};
        this.nome = nome;
        this.valor = valor;
        this.descricao = descricao;
        this.imagem = imagem;
    }
    
    gerarHTML() {
        const skinNome = document.createElement("p");
        skinNome.classList.add("name");
        skinNome.appendChild(document.createTextNode(this.nome));

        const skinSubnome = document.createElement("p");
        skinSubnome.classList.add("subname");
        skinSubnome.appendChild(document.createTextNode(this.descricao));

        const skinPreco = document.createElement("p");
        skinPreco.classList.add("preci");
        skinPreco.append(document.createTextNode(this.valor));

        const legendaContainer = document.createElement("div");
        legendaContainer.classList.add("legenda");
        legendaContainer.append(skinNome);
        legendaContainer.append(skinSubnome);
        legendaContainer.append(skinPreco);

        const imagem = document.createElement("img");
        imagem.classList.add("weapon");
        imagem.src = this.imagem;

        const cardContainer = document.createElement("figure");
        cardContainer.classList.add("card");
        cardContainer.append(imagem);
        cardContainer.append(legendaContainer);
    
        return cardContainer;
    }
}
