function pregaoReducer(state = [], action = {}) {
  console.log("action");
  console.log(action.type);

  var a = action.pregao;

  if (action.type == "CARREGA_PREGAO") {
    console.log("entrou no CARREGA");
    state = action.pregao;
  } else if (action.type == "FILTRAR_PREGAO") {
    console.log("entrou no FILTRAR");
    var tamanho = action.filtros.length;
    var filtros = action.filtros;
    var LISTADASOFERTAS;
    console.log("action.filtros");
    console.log(action.filtros);
    console.log("state");
    console.log(state);
    // console.log(a);
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
