import styled from "styled-components";

export const Container = styled.div`

`

export const CategoriesMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 20px;
`

export const ProductImg = styled.img `
    width: 100%;
`

export const CategoryButton = styled.button`
    cursor: pointer;
    border:none;
    background: none;
    border-bottom: ${props=> props.isCategoryActive && '3px solid #9758A6'};
    color:${props=> props.isCategoryActive?'#9758A6':'#9A9A9D'};
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    padding-bottom: 5px;
`