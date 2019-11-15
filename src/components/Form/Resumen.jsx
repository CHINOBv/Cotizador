import React, { Component } from "react";

class Resumen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  mostrar = () => {
    const { marca, plan, year } = this.props.data;
    if (!marca || !plan || !year) return null;
    return (
      <div
        className="card text-white bg-dark mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header">Resumen de Cotizacion</div>
        <div className="card-body">
          <h5 className="card-title">Marca: {marca}</h5>
          <h5 className="card-title">Año: {year}</h5>
          <h5 className="card-title">Plan: {plan}</h5>
          <h5 className="card-title">Resultado: {this.props.resultado}</h5>
        </div>
      </div>
    );
  };

  render() {
    return (
    <div>
      {this.mostrar()}
    </div>);
  }
}

export default Resumen;
