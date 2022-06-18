import { Skin } from '../modelos/skin.js';
import { Storage } from '../utils/storage.js';

export function gerarInventarioJogador() {
    const quantidadeLoop = 10;

    for (let i = 0; i < quantidadeLoop; i++) {
        const inventarioSkinJogador = document.getElementById("inventarioSkinJogador");

        let s = new Skin("AK", 459.89, "NEON REVOLUTION", "../assets/img/armas-inventario/SKINS COVERT/PNG/AK NEON REVOLUTION PNG.png");
        inventarioSkinJogador.append(s.gerarCardPequeno());
        s = new Skin("AK47", 459.89, "PHANTOM", "../assets/img/armas-inventario/SKINS COVERT/PNG/AK47 PHANTOM.png");
        inventarioSkinJogador.append(s.gerarCardPequeno());
        s = new Skin("AK", 459.89, "WILD LOTUS", "../assets/img/armas-inventario/SKINS COVERT/PNG/AK WILD LOTUS.png");
        inventarioSkinJogador.append(s.gerarCardPequeno());
        s = new Skin("AWP", 459.89, "DESERT HYDRA", "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP DESERT HYDRA PNG.png");
        inventarioSkinJogador.append(s.gerarCardPequeno());
        s = new Skin("AWP", 459.89, "FADE", "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP FADE PNG.png");
        inventarioSkinJogador.append(s.gerarCardPequeno());
        s = new Skin("AWP", 459.89, "MAN", "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP MAN PNG.png");
        inventarioSkinJogador.append(s.gerarCardPequeno());
        s = new Skin("GLOCK-18", 459.89, "WASTELAND", "../assets/img/armas-inventario/SKINS COVERT/PNG/GLOCK-18 WASTELAND.png");
        inventarioSkinJogador.append(s.gerarCardPequeno());
        s = new Skin("M4A1S", 459.89, "CHATICOS", "../assets/img/armas-inventario/SKINS COVERT/PNG/M4A1S CHATICOS.png");
        inventarioSkinJogador.append(s.gerarCardPequeno());
        s = new Skin("USP", 459.89, "NEO NOIR", "../assets/img/armas-inventario/SKINS COVERT/PNG/USP NEO NOIR.png");
        inventarioSkinJogador.append(s.gerarCardPequeno());
    }
}

export function gerarInventarioLoja() {
    const inventarioSkinLoja = document.getElementById("inventarioSkinLoja");
    const inventarioStorage = new Storage('inventario');
    const skinStorage = new Storage("skin");
    const lojaInventario = inventarioStorage.buscar(3);

    for (const skinId of lojaInventario.skinColecao) {
        const skinJson = skinStorage.buscar(skinId);

        const skin = new Skin(
            skinJson.id,
            skinJson.nome,
            skinJson.valor,
            skinJson.descricao,
            skinJson.imagem
        );
        inventarioSkinLoja.append(skin.gerarCardPequeno());
    }
}