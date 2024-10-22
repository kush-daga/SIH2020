import React from "react";
import "tachyons";
import styled from "styled-components";
import CatInputs from "./CatInputs";
class Form extends React.Component {
  state = {
    cats: [{ name: "", age: "" }],
    owner: "",
    description: ""
  };
  handleChange = e => {
    if (["name", "age"].includes(e.target.className)) {
      let cats = [...this.state.cats];
      cats[e.target.dataset.id][
        e.target.className
      ] = e.target.value.toUpperCase();
      this.setState({ cats }, () => console.log(this.state.cats));
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
  };
  addCat = e => {
    this.setState(prevState => ({
      cats: [...prevState.cats, { name: "", age: "" }]
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    let { owner, description, cats } = this.state;
    return (
      <ContainerDF>
        <div className="Right flex flex-column"  style={{backgroundColor:"#fff2f2",color:"#800606",width:"100%",overflowY:"scroll"}}>
          <form onSubmit={this.handleSubmit} onChange={this.handleChange} className="shadow-2 " style={{margin:"4em",fontSize:"x-large",width:"fit-content",borderRadius:"2em", justifyContent:"center",alignItems:"center"}}>
            <div style={{margin:"1.5em",padding:"2em"}}>
                <button onClick={this.addCat} style={{backgroundColor:"#FFDFF7",borderRadius:"30px", color:"#800606"}} >Add new Symptom</button>
                <CatInputs cats={cats} />
                <input type="submit" value="Submit" style={{backgroundColor:"#FFDFF7",borderRadius:"30px", color:"#800606"}} />
            </div>
          </form>
        </div>
      </ContainerDF>
    );
  }
}
export default Form;
const ContainerDF = styled.div`
    display: flex;
    height:100vh;
    width:100vw;
    font-family:Poppins;
`;
