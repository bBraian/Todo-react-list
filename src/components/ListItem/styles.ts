import styled from "styled-components";
type ContainerPropr = {
    done: boolean;
}

export const Container = styled.div(({ done }:ContainerPropr)=>(
    `
    display: flex;
    background-color: #20212C;
    padding: 18px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;   

    input {
        width: 22px;
        height: 22px;
        margin-right: 9px; 
    }

    label{
        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
`
));