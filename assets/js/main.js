import { gerarSlider } from "./carrossel.js";
import { Starter } from "./componentes/starter.js";
import { gerarInventarioLoja } from "./inventarioRoleta.js";

const starter = new Starter();
starter.start();

gerarSlider();
gerarInventarioLoja();
