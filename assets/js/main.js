import { instanciarSkin } from "./componentes/skin.js"

const skin = instanciarSkin("ak-31", 459.89, "A melhor delas", "../assets/img/armas-inventario/SKINS COVERT/PNG/AK NEON REVOLUTION PNG.png");

document.getElementById("app").append(skin.gerarHTML());