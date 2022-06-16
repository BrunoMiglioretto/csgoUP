import { gerarSlider } from "./componentes/carrossel.js";
import { Starter } from "./utils/starter.js";
import { gerarInventarioLoja } from "./componentes/inventarioRoleta.js";

const starter = new Starter();
starter.start();

gerarSlider();
gerarInventarioLoja();
