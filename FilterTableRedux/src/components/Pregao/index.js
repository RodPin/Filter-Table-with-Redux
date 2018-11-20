import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./Pregao.css";

// https://github.com/mui-org/material-ui/blob/master/docs/src/pages/demos/tables/SimpleTable.js

class Pregao extends Component {
  constructor() {
    super();
    this.state = {
      ofertaAtiva: {}
    };
  }

  abreModalParaOferta = (event, IdOfertaSelecionada) => {};

  componentWillMount() {
    this.renderNomes(this.props.listaPregao);
  }
  renderNomes(x) {
    if (x[0] === undefined) {
    } else {
      var keys = Object.keys(x[0]);
      this.setState({ keys });
    }
  }

  render() {
    return (
      <div className="containerr">
        <div className="paper">
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  {this.state.keys.map((x, i) => {
                    return <TableCell>{x}</TableCell>;
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.listaPregao.map((x, index) => {
                  let campos = Object.values(x);

                  return (
                    <TableRow>
                      {campos.map((values, i) => {
                        return <TableCell>{values}</TableCell>;
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    );
  }
}
export default Pregao;
