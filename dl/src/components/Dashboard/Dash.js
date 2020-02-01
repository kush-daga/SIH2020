import React, { Component } from "react";
import styled from "styled-components";

const Dash = () => {


    return(
        <ContainerDash>
            <div className="flex flex-row" >
                <Card>
                    Someone
                </Card>
                <Card>
                    Something
                </Card>
            </div>
        </ContainerDash>
    )
}

export default Dash;
const ContainerDash = styled.div`
    display:flex;

`;
const Card = styled.div`
    display:flex;
    flex-direction:row;
    margin:0.5em;
    width:10em;
    height:3em;
    color:white;
    background-color:#40f5d4;
    box-shadow:
`;