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
        <div className="Left flex flex-column" style={{ width: "20%" }}>
          <ul>
            <li style={{ fontSize: "x-large", fontWeight: "bold" }}>
              docLedger
            </li>
            <li>Home</li>
            <li
              style={{
                backgroundColor: "rgba(128,6,6,0.65)",
                color: "#fff2f2",
                borderRadius: "55px"
              }}
            >
              Dashboard
            </li>
            <li>Find Doctor</li>
            <li>Add Record</li>
            <li>View Record</li>
            <li>Chat</li>
          </ul>
        </div>
        <div className="Right flex flex-column"  style={{backgroundColor:"#fff2f2",color:"#800606",width:"100%",overflow:"hidden"}}>
          <form onSubmit={this.handleSubmit} onChange={this.handleChange} className="shadow-2 " style={{margin:"3em", padding:"4em",fontSize:"x-large",width:"fit-content",borderRadius:"2em"}}>
            <div>
               <div>
                    <label htmlFor="name">Symptom:</label>
                    <input clasName="pa2 input-reset ba bg-transparent" type="text" name="owner" id="owner" value={owner} />
               </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        value={description}
                    />
                </div>
                <button onClick={this.addCat}>Add new cat</button>
                <CatInputs cats={cats} />
                <input type="submit" value="Submit" />
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
    font-family:Poppins;
`;