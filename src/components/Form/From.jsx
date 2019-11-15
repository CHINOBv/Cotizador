import React, { Component } from "react";

class From extends Component {

    //ref
    marcaRef = React.createRef();
    yearRef = React.createRef();
    planBasicoRef = React.createRef();
    planColmpletoRef = React.createRef();
    
    
    cotizar =(e)=>{
        e.preventDefault();
        
        const plan = this.planBasicoRef.current.checked ? 'basico' : 'completo';
        
        const AutInf = {
            marca:this.marcaRef.current.value,
            year:this.yearRef.current.value,
            plan: plan
        }
        //get data
        //console.log(AutInf)
        //crate object

        //send to component
        this.props.cotizar(AutInf);
        //resset
        //e.currentTarget.reset();
    }
  render() {
    return (
      <form className="form-group rounded-bottom" onSubmit={this.cotizar}>
        <div>
          <select name="" id="" className="form-control" ref={this.marcaRef}>
            <option value="americano">Americano</option>
            <option value="asiatico">Asiatico</option>
            <option value="europeo">Europeo</option>
          </select>
          <select className="form-control" ref={this.yearRef}>

            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
          </select>

          <div className="">
            <label>Elige un plan</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                defaultValue="option1"
                defaultChecked
                ref={this.planBasicoRef}
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Basico
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                defaultValue="option2"
                ref={this.planColmpletoRef}
              />
              <label className="form-check-label" htmlFor="exampleRadios2">
                Completo
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-dark btn-lg my-3 ">
            Cotizar
          </button>
        </div>
      </form>
    );
  }
}

export default From;
