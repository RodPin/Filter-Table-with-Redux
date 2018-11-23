import React, { Component } from "react";
import Pregao from "./components/Pregao";
import "./App.css";
import Filtro from "./components/Filtros";
import PropTypes from "prop-types";


const CORES = ["azul", "preto", "branco"];
const FABRICANTES = ["Renatinho", "Bob"];
const ANO = ['2015', '2013'];

const objFiltros = { CORES, FABRICANTES, ANO };

const oferta1 = {
  cor: "branco",
  ano: "2015",
  fabricante: "Renatinho",
  marca: "Ferrari",
  seguro: "Golden Cross",
  usuario: "rodd123@gmail.com"
};

const oferta2 = {
  cor: "azul",
  ano: "2015",
  fabricante: "Renatinho",
  marca: "Mercedes",
  seguro: "sulamerica",
  usuario: "renataotoaaot3@gmail.com"
};
const oferta3 = {
  cor: "preto",
  ano: "2013",
  fabricante: "Bob",
  marca: "Palho",
  seguro: "StrawBerry",
  usuario: "ricardo21123@gmail.com"
};
const oferta4 = {
  cor: "amarelo",
  ano: "2015",
  fabricante: "Renatinho",
  marca: "Lamborguini",
  seguro: "watch",
  usuario: "keaokeoao123@gmail.com"
};

const LISTADASOFERTAS = [oferta1, oferta2, oferta3, oferta4];

class App extends Component {
  static contextTypes = {
    store: PropTypes.object
  };
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    this.context.store.subscribe(() => {
      console.log("detectou que mudou");

      this.setState({
        data: this.context.store.getState().pregaoState
      });
    });
    //FIREBASE AQUI
    this.context.store.dispatch({
      type: "CARREGA_PREGAO",
      pregao: LISTADASOFERTAS
    });
  }

  render() {
    return (
      <div className="filtrosAndPregao">
        <Filtro cadaFiltro={objFiltros} />
        <Pregao listaPregao={this.context.store.getState().pregaoState} />
      </div>
    );
  }
}
export default App;
