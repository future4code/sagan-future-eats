import React, { Component } from "react";
import styled from "styled-components";
import { IconButton, Divider } from "@material-ui/core";

const Restaurant = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  margin-bottom: 16px;
 `

const TopBar = styled.div`
  height: 64px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  display:flex;
  margin-bottom: 17px;
 `
const Title = styled.div`
  width: 175px;
  height: 44px;
  display:flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-left: 14%;
 `
const TitleContend = styled.div`
  width: 84px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
 `
const ImageLogoRestaurant = styled.div`
  height: 120px;
  object-fit: contain;
  display:flex;
  align-self:center;
 `
const RestaurantData = styled.div`
  height: 120px;
  display:flex;
  flex-direction:column;
  align-self:center;
 `
const RestaurantDataMid = styled.div`
  display:flex;
  
`
const RestaurantName = styled.div`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
 `
const RestaurantType = styled.div`
  width: 104px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
 `
const RestaurantTimeDeliver = styled.div`
  width: 104px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
 `
const RestaurantFreight = styled.div`
  width: 104px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
 `
const RestaurantAdress = styled.div`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
 `
const DividerTitle = styled.div`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
  margin-left: 16px;
  margin-top: 16px;
  margin-bottom: 8px;
 `
const RestaurantItem = styled.div`
  margin-top:8px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  display:grid;
  align-self:center;
  grid-template-columns: 96px 142px 90px;
  grid-template-rows: 33px 48px 31px;
  grid-template-areas:
  "image nome topCounter"
  "image data data"
  "image preço bottomButtom";
 `
const RestaurantItemImage = styled.img`
  width: 96px;
  height: 112px;
  object-fit: cover;
  grid-area: image;
 `

const RestaurantItemName = styled.div`
  width: 167px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
  margin-left:16px;
  margin-top:18px;
  grid-area:nome;
 `
const RestaurantItemIngredients = styled.div`
  width: 200px;
  height: 30px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
  margin-left:16px;
  margin-top:8px;
  grid-area:data;
 `
const RestaurantItemPrice = styled.div`
  width: 118px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
  margin-left:16px;
  margin-top:4px;
  grid-area:preço;
`

const RestaurantButtomAddIten = styled.div`
  width: 91px;
  height: 32px;
  border-radius: 8px 0px 8px 0px;
  border: solid 1px #5cb646;
  grid-area: bottomButtom;
  display:flex;
  justify-content:center;
`
const RestaurantButtomAddItenText = styled.div`
  width: 48px;
  height: 14px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  text-align: center;
  align-self:center;
  color: #5cb646;
`
const RestaurantButtomSubIten = styled.div`
  width: 91px;
  height: 32px;
  border-radius: 8px 0px 8px 0px;
  border: solid 1px #e02020;
  grid-area: bottomButtom;
  display:flex;
  justify-content:center;
`
const RestaurantButtomSubItenText = styled.div`
  width: 48px;
  height: 14px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  text-align: center;
  align-self:center;
  color: #e02020;
`
const RestaurantCountItens = styled.div`
width: 33px;
  height: 33px;
  border-radius: 0px 8px 0px 8px;
  justify-self: end;
  border: solid 1px #5cb646;
  grid-area: topCounter;
  display:flex;
  justify-content:center;

`
const RestaurantCounterItensText = styled.div`
width: 9px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  align-self:center;
  color: #5cb646;
`
export class RestaurantPage extends Component {

    render() {
        return (
            <Restaurant>
                <TopBar>
                    <IconButton><img src={require("../../images/BackButton/back.png")} /></IconButton>
                    <Title><TitleContend>Restaurante</TitleContend></Title>
                </TopBar>
                <ImageLogoRestaurant><img src={require("../../images/hamburguers/image.png")} /></ImageLogoRestaurant>
                <RestaurantData>
                    <RestaurantName>Bullguer Vila Madalena</RestaurantName>
                    <RestaurantType>Burger</RestaurantType>
                    <RestaurantDataMid>
                        <RestaurantTimeDeliver>50 - 60 min</RestaurantTimeDeliver>
                        <RestaurantFreight>Frete R$6,00</RestaurantFreight>
                    </RestaurantDataMid>
                    <RestaurantAdress>R. Fradique Coutinho, 1136 - Vila Madalena</RestaurantAdress>
                </RestaurantData>
                <DividerTitle>Principal</DividerTitle>
                <Divider />

                <RestaurantItem>
                    <RestaurantItemImage src={require("../../images/hamburguers/image.png")}></RestaurantItemImage>
                    <RestaurantItemName>Bullguer</RestaurantItemName>
                    <RestaurantItemIngredients>Pão, carne. queijo, picles e molho.</RestaurantItemIngredients>
                    <RestaurantItemPrice>R$20,00</RestaurantItemPrice>
                    <RestaurantButtomAddIten><RestaurantButtomAddItenText>Adicionar</RestaurantButtomAddItenText></RestaurantButtomAddIten>
                </RestaurantItem>
                <RestaurantItem>
                    <RestaurantItemImage src={require("../../images/hamburguers/mao-santa-burguer-1531851949973-v-2-900-x-506.png")}></RestaurantItemImage>
                    <RestaurantItemName>Stencil</RestaurantItemName>
                    <RestaurantItemIngredients>Pão, carne, queijo, cebola roxa, tomate, alface e molho.</RestaurantItemIngredients>
                    <RestaurantItemPrice>R$23,00</RestaurantItemPrice>
                    <RestaurantCountItens><RestaurantCounterItensText>2</RestaurantCounterItensText></RestaurantCountItens>
                    <RestaurantButtomSubIten><RestaurantButtomSubItenText>Remover</RestaurantButtomSubItenText></RestaurantButtomSubIten>
                </RestaurantItem>

                <DividerTitle>Acompanhamentos</DividerTitle>
                <Divider />
                <RestaurantItem>
                    <RestaurantItemImage src={require("../../images/sides/batata.jpg")}></RestaurantItemImage>
                    <RestaurantItemName>Cheese Fries</RestaurantItemName>
                    <RestaurantItemIngredients>Porção de fritas temperada com páprica e queijo derretido.</RestaurantItemIngredients>
                    <RestaurantItemPrice>R$15,00</RestaurantItemPrice>
                    <RestaurantButtomAddIten><RestaurantButtomAddItenText>Adicionar</RestaurantButtomAddItenText></RestaurantButtomAddIten>
                </RestaurantItem>
            </Restaurant>


        )
    }
} export default RestaurantPage