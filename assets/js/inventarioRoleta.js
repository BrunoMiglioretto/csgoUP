import { skin } from './componentes/skin.js';

export function gerarInventarioJogador() {
    const quantidadeLoop = 10;

    for (let i = 0; i < quantidadeLoop; i++) {
        const inventarioSkinJogador = document.getElementById("inventarioSkinJogador");

        let s = new skin("AK", 459.89, "NEON REVOLUTION", "../assets/img/armas-inventario/SKINS COVERT/PNG/AK NEON REVOLUTION PNG.png");
        inventarioSkinJogador.append(s.gerarCardPequeno());
        s = new skin("AK47", 459.89, "PHANTOM", "../assets/img/armas-inventario/SKINS COVERT/PNG/AK47 PHANTOM.png");
        inventarioSkinJogador.append(s.gerarCardPequeno());
        s = new skin("AK", 459.89, "WILD LOTUS", "../assets/img/armas-inventario/SKINS COVERT/PNG/AK WILD LOTUS.png");
        inventarioSkinJogador.append(s.gerarCardPequeno());
        s = new skin("AWP", 459.89, "DESERT HYDRA", "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP DESERT HYDRA PNG.png");
        inventarioSkinJogador.append(s.gerarCardPequeno());
        s = new skin("AWP", 459.89, "FADE", "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP FADE PNG.png");
        inventarioSkinJogador.append(s.gerarCardPequeno());
        s = new skin("AWP", 459.89, "MAN", "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP MAN PNG.png");
        inventarioSkinJogador.append(s.gerarCardPequeno());
        s = new skin("GLOCK-18", 459.89, "WASTELAND", "../assets/img/armas-inventario/SKINS COVERT/PNG/GLOCK-18 WASTELAND.png");
        inventarioSkinJogador.append(s.gerarCardPequeno());
        s = new skin("M4A1S", 459.89, "CHATICOS", "../assets/img/armas-inventario/SKINS COVERT/PNG/M4A1S CHATICOS.png");
        inventarioSkinJogador.append(s.gerarCardPequeno());
        s = new skin("USP", 459.89, "NEO NOIR", "../assets/img/armas-inventario/SKINS COVERT/PNG/USP NEO NOIR.png");
        inventarioSkinJogador.append(s.gerarCardPequeno());
    }
}

export function gerarInventarioLoja() {
    const quantidadeLoop = 10;

    for (let i = 0; i < quantidadeLoop; i++) {
        const inventarioSkinLoja = document.getElementById("inventarioSkinLoja");

        let s = new skin("AK", 459.89, "NEON REVOLUTION", "../assets/img/armas-inventario/SKINS COVERT/PNG/AK NEON REVOLUTION PNG.png");
        inventarioSkinLoja.append(s.gerarCardPequeno());
        s = new skin("AK47", 459.89, "PHANTOM", "../assets/img/armas-inventario/SKINS COVERT/PNG/AK47 PHANTOM.png");
        inventarioSkinLoja.append(s.gerarCardPequeno());
        s = new skin("AK", 459.89, "WILD LOTUS", "../assets/img/armas-inventario/SKINS COVERT/PNG/AK WILD LOTUS.png");
        inventarioSkinLoja.append(s.gerarCardPequeno());
        s = new skin("AWP", 459.89, "DESERT HYDRA", "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP DESERT HYDRA PNG.png");
        inventarioSkinLoja.append(s.gerarCardPequeno());
        s = new skin("AWP", 459.89, "FADE", "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP FADE PNG.png");
        inventarioSkinLoja.append(s.gerarCardPequeno());
        s = new skin("AWP", 459.89, "MAN", "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP MAN PNG.png");
        inventarioSkinLoja.append(s.gerarCardPequeno());
        s = new skin("GLOCK-18", 459.89, "WASTELAND", "../assets/img/armas-inventario/SKINS COVERT/PNG/GLOCK-18 WASTELAND.png");
        inventarioSkinLoja.append(s.gerarCardPequeno());
        s = new skin("M4A1S", 459.89, "CHATICOS", "../assets/img/armas-inventario/SKINS COVERT/PNG/M4A1S CHATICOS.png");
        inventarioSkinLoja.append(s.gerarCardPequeno());
        s = new skin("USP", 459.89, "NEO NOIR", "../assets/img/armas-inventario/SKINS COVERT/PNG/USP NEO NOIR.png");
        inventarioSkinLoja.append(s.gerarCardPequeno());
    }
}