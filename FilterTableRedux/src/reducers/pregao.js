function pregaoReducer(state = [], action = {}) {
  if (action.type == "CARREGA_PREGAO") {
    state = action.pregao;
  } else if (action.type == "FILTRAR_PREGAO") {
    var tamanho = action.filtros.length;
    var filtros = action.filtros;
    var LISTADASOFERTAS;
    console.log("action.filtros");
    console.log(action.filtros);
    console.log("state");
    console.log(state);
    for (var i = 0; i < tamanho; i++) {
      for (var j = 0; j < filtros[i].length; j++) {
        LISTADASOFERTAS = state.filter(o =>
          Object.keys(o).some(k =>
            o[k].toLowerCase().includes(filtros[i].toLowerCase())
          )
        );
      }
    }
    state = LISTADASOFERTAS;
  }
  return state;
}

export default pregaoReducer;
