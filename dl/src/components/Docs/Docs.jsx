import React from "react";
// import "./Docs.css";
import "tachyons";
import styled from "styled-components";

const Docs = () => {
    return (
        <ContainerDocs>
            <LeftDocs>
                <p style={{ fontWeight: "bold", color: "#fff2f2" }}>
                    docLedger
                </p>
                <p style={{fontSize: "20px",color:"#FFC1C1"}}>
                "Your health records, our security"
                </p>

                <Button>
                    <button type="button" className="link ph3 pv2 mb2 dib white" style={{backgroundColor:"#FFA82E",color:"#fd2e2e",fontFamily:"Poppins",borderRadius:"14px",fontWeight:"bold",boxShadow:"2px 2px #FFA82E",textShadow:"1px 1px #fd2e2e",width:"150px",wordSpacing:"10px"}}>
                        Log In
                    </button>
                </Button>
            </LeftDocs>

            <RightDocs>
                <HeadingDocs>
                    <p>
                        <b>What exactly is docLedger?</b>
                    </p>
                </HeadingDocs>
                <DataDocs>
                    <p>
                        This is what you get when you do something insane.....
                        <br /> Something amazing
                    </p>
                    <p>
                        This is what you get when you do something insane.....
                        <br /> Something amazing
                    </p>
                    <p>
                        This is what you get when you do something insane.....
                        <br /> Something amazing
                    </p>
                    <p>
                        This is what you get when you do something insane.....
                        <br /> Something amazing
                    </p>
                    <p>
                        This is what you get when you do something insane.....
                        <br /> Something amazing
                    </p>
                    <p>
                        This is what you get when you do something insane.....
                        <br /> Something amazing
                    </p>
                    <p>
                        This is what you get when you do something insane.....
                        <br /> Something amazing
                    </p>
                   
                </DataDocs>
            </RightDocs>
        </ContainerDocs>
    );
};
export default Docs;

const ContainerDocs = styled.div`
    display: flex;
    height: 100vh;
`;
const LeftDocs = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 30%;
    background-color: #fd2e2e;
    overflow: hidden;
    padding: 80px;
    padding-top: 20%;
    text-align: center;
    
    font-size: 64px;
    color: #fff2f2;
    
`;

const RightDocs = styled.div`
    flex: 2;
    overflow-y: scroll;
    background-color: #fff2f2;
    font-family: Poppins;
`;
const HeadingDocs = styled.div`
    padding-left: 10%;
    padding-top: 10%;
    color: #800606;
    text-decoration: underline;
    font-size: x-large;
`;
const DataDocs = styled.div`
    padding-left: 10%;
    padding-top: 5%;
    color: #800606;
`;
const Button = styled.div`
    background-color:#fd2e2e;
    border: none;
    color: white;
    padding:120px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 30px;
`;