import { Skin } from "./componentes/skin.js";

export function gerarSkinsRoleta() {
    const caixaRoletaJogador = document.getElementById("caixaRoletaJogador");
    const caixaRoletaResultado = document.getElementById("caixaRoletaResultado");
    const caixaRoletaLoja = document.getElementById("caixaRoletaLoja");

    let s = new Skin("USP", 459.89, "NEO NOIR", "../assets/img/armas-inventario/SKINS COVERT/PNG/USP NEO NOIR.png");
    caixaRoletaJogador.append(s.gerarCardGrande());
    
    s = new Skin("AWP", 459.89, "MAN", "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP MAN PNG.png");  
    caixaRoletaLoja.append(s.gerarCardGrande());
}