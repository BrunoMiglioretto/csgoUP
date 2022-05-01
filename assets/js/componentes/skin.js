export function instanciarSkin(nome, valor, descricao, imagem) {
    const skin = {};
    skin.nome = nome;
    skin.valor = valor;
    skin.descricao = descricao;
    skin.imagem = imagem;
    skin.gerarHTML = gerarHTML;
    
    return skin;

    function gerarHTML() {
        const skinNome = document.createElement("p");
        skinNome.classList.add("name");
        skinNome.appendChild(document.createTextNode(skin.nome));

        const skinSubnome = document.createElement("p");
        skinSubnome.classList.add("subname");
        skinSubnome.appendChild(document.createTextNode(skin.descricao));

        const skinPreco = document.createElement("p");
        skinPreco.classList.add("preci");
        skinPreco.append(document.createTextNode(skin.valor));

        const legendaContainer = document.createElement("div");
        legendaContainer.classList.add("legenda");
        legendaContainer.append(skinNome);
        legendaContainer.append(skinSubnome);
        legendaContainer.append(skinPreco);

        const imagem = document.createElement("img");
        imagem.classList.add("weapon");
        imagem.src = skin.imagem;

        const cardContainer = document.createElement("figure");
        cardContainer.classList.add("card");
        cardContainer.append(imagem);
        cardContainer.append(legendaContainer);
    
        return cardContainer;
    }
}
