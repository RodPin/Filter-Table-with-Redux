import React, { Component } from "react";
import Select from "react-select";
import "./Filtros.css";
import PropTypes from "prop-types";

class Filtros extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  arrayToJson(array) {
    return array.map(x => {
      return { value: x, label: x };
    });
  }

  handleChangeMulti(selectedOption, key) {
    let valoresSelecionados = [...selectedOption];
    this.setState({ [key]: valoresSelecionados });
  }

  handleChange(selectedOption, key) {
    this.setState({ [key]: selectedOption.value });
  }

  renderSelect(options, nome) {
    return (
      <Select
        name={nome}
        onChange={selectedOption => this.handleChange(selectedOption, nome)}
        options={this.arrayToJson(options)}
        className="selectAdd"
      />
    );
  }

  renderDivSelect(vaar, state, string) {
    return (
      <div>
        <span className="states">{string}</span>
        {this.renderSelect(vaar, state)}
      </div>
    );
  }
  render() {
    let keys = Object.keys(this.props.cadaFiltro);
    let values = Object.values(this.props.cadaFiltro);

    return (
      <div className="divGeral">
        <span className="titulo">Filtros</span>
        {keys.map((key, index) => {
          return this.renderDivSelect(values[index], key, key);
        })}

        <button
          onClick={() => {
            this.context.store.dispatch({
              type: "FILTRAR_PREGAO",
              filtros: Object.values(this.state)
            });
          }}
          className="button"
        >
          VERIFICAR
        </button>
      </div>
    );
  }
}

export default Filtros;
