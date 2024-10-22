import React from "react";
import "./Signup.css";
import "../../components/fonts.css";
import "tachyons";
import styled from "styled-components";

const Signup = () => {
    return (
        <Container>
            <Left >
                <p style={{ fontWeight: "bold", color: "#fff2f2" }}>
                    docLedger
                </p>
                <p style={{ fontSize: "0.25em", color: "#FFC1C1" }}>
                    "Your health records, our security"
                </p>
                <Button>
                    
                        About us
                    
                </Button>
            </Left>

            <Right>
            <div style={{paddingTop:"100px"}}>
                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-40-l mw6 center shadow-2" style={{backgroundColor:"#800606"}}>
                <main className="pa4 black-80 br3 flex flex-wrap" style={{backgroundColor:"#FFF2F2",color:"#800606"}}>
                    <form className="measure br5 flex flex-wrap" style={{backgroundColor:"#FFF2F2"}}>
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0 flex flex-wrap">
                        <legend className="f1 fw6 ph0 mh0 tc">Sign In</legend>
                        <div className="mt3 flex flex-wrap">
                            <label className="db fw6 lh-copy f6 flex flex-wrap" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent  hover-orange w-100 br3 flex flex-wrap" style={{color:"#FFA82E"}}
                                type="email" 
                                name="email-address" 
                                id="email-address" 
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6 flex flex-wrap" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent w-100 br3 flex flex-wrap" style={{color:"#FFA82E"}}
                                type="password"
                                name="password"
                                id="password" 
                                placeholder="Password"
                            />
                        </div>
                        </fieldset>
                        <div className="ph1">
                        <input
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3 flex flex-wrap" 
                        type="submit"
                        value="Sign in" 
                            />
                        </div>
                        <div className="lh-copy mt3 ph2 flex flex-wrap">
                        <p className="f6 link dim black db pointer">Register</p>
                        </div>
                    </form>
                    </main>
                </article>
            </div>
            </Right>
        </Container>
    );
};
export default Signup;

const Container = styled.div`
    display: flex;
    height: 100vh;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 30%;
    background-color: #fd2e2e;
    padding-top: 15vh;
    text-align: center;

    font-size: 5.5em;
    color: #fff2f2;

`;
const Right = styled.div`
    flex: 2;
    overflow-y: scroll;
    background-color: #fff2f2;
    font-family: Poppins;
`;
const Button = styled.button`
    background-color:#fff2f2;
    border: none;
    color: #800606 ;
    padding:0.5em 1em 0.5em 1em;
    margin-top: 20em;
    margin-left: 80%;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    width: fit-content;
    border-radius:10px;
`;