import React from 'react'
import styled from 'styled-components'

const NavBar = styled.nav`
  width: 100%; 
`
const Container = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  width: 100%;
  white-space: nowrap;  
`
const NavList = styled.ul`
  margin: 0 -10px;
  padding: 0 10px;
  list-style: none;
  display: flex;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
  width: 20px;
}
`
const ListItem = styled.li`
  padding: 14px 16px;
  display: block;
  color: black;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px; 
  :hover{
    
  } 
`


export default function FilterScroll(props) {

    return (
        <NavBar>
            <Container>
                <NavList>
                    <ListItem onClick={() => props.handleClick("Hamburguer")}>Burger</ListItem>
                    <ListItem onClick={() => props.handleClick("Árabe")}>Árabe</ListItem>
                    <ListItem onClick={() => props.handleClick("Asiática")}>Asiática</ListItem>
                    <ListItem onClick={() => props.handleClick("Mexicana")}>Mexicana</ListItem>
                    <ListItem onClick={() => props.handleClick("Baiana")}>Baiana</ListItem>
                    <ListItem onClick={() => props.handleClick("Carnes")}>Carnes</ListItem>
                    <ListItem onClick={() => props.handleClick("Italiana")}>Massas</ListItem>                    
                    <ListItem onClick={() => props.handleClick("Sorvetes")}>Sorvetes</ListItem>
                    <ListItem onClick={() => props.handleClick("Petiscos")}>Petiscos</ListItem>
                </NavList>
            </Container>
        </NavBar>
    )
}