import styled from "styled-components";
import ReactSelect from 'react-select'

export const Container = styled.div `
 background-color:#efefef;
 min-height: 100vh;


`

export const ProductImg = styled.img`

    width: 60px;
    border-radius: 5px;

`

export const ReactSelectStyle = styled(ReactSelect) `

    width:250px;
    .css-13cymwt-control{
        cursor: pointer;
    }

`
export const Menu = styled.div`
    display: flex;
    gap:50px;
    justify-content: center;
    margin: 20px 0;
`
export const LinkMenu = styled.a `
    color: #323D5D;
    font-style: normal;
    font-weight: ${pops=> pops.isActiveStatus? '700':'400' };
    border-Bottom: ${pops=> pops.isActiveStatus? '2px solid #9758A6':'none' };
    padding-bottom: 5px;
    font-size: 16px;
    cursor: pointer;
`