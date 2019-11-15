import React,{Component} from "react";


import Form from "./From.jsx";
import { getDif, calcMark, getPlan } from "../../helper.jsx";
import Resumen from './Resumen'
//import Resultado from './Resultado'
class Cotizado extends Component {

    state={
        resultado:'',
        data:{}
    }
    
    cotiza = (data) => {
    const { marca, plan, year } = data;

    //base
    let resultado = 2000;

    //diferencia de años 3% cada año
    const dif = getDif(year);

    //-3% por año
    resultado -= (dif * 3 * resultado) / 100;

    // Americano 15% asiatico 5% europeo 30%
    resultado = calcMark(marca) * resultado;

    let incPlan = getPlan(plan);

    resultado = parseFloat(incPlan * resultado).toFixed(2);
    
    this.setState({
        resultado: resultado,
        data:data
    })
  };
  render(){
    return (
    <>
        
        <Form cotizar={this.cotiza} />
        <Resumen
        data={this.state.data}
        resultado={this.state.resultado}
        />
        
    </>   
    )
}
}

export default Cotizado;