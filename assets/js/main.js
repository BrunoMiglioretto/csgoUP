// import { gerarSlider } from "./carrossel.js";
// import { gerarSkinsRoleta } from "./roleta.js";
// import { gerarInventarioJogador, gerarInventarioLoja } from "./inventarioRoleta.js";

// gerarSlider();
// gerarSkinsRoleta();
// gerarInventarioJogador();
// gerarInventarioLoja();

import { Storage } from "./componentes/storege.js";
import { Starter } from "./componentes/starter.js";
const starter = new Starter();

starter.start();

const storage = new Storage("skin");
console.log(storage.buscarLista());
