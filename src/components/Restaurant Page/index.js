import React, { Component } from "react";
import * as RPS from './RestaurantPageStyles'
import { IconButton, Divider } from "@material-ui/core";

export class RestaurantPage extends Component {

    render() {
        return (
            <RPS.Restaurant>
                <RPS.TopBar>
                    <IconButton><img src={require("../../images/BackButton/back.png")} /></IconButton>
                    <RPS.Title><RPS.TitleContend>Restaurante</RPS.TitleContend></RPS.Title>
                </RPS.TopBar>
                <RPS.ImageLogoRestaurant><img src={require("../../images/hamburguers/image.png")} /></RPS.ImageLogoRestaurant>
                <RPS.RestaurantData>
                    <RPS.RestaurantName>Bullguer Vila Madalena</RPS.RestaurantName>
                    <RPS.RestaurantType>Burger</RPS.RestaurantType>
                    <RPS.RestaurantDataMid>
                        <RPS.RestaurantTimeDeliver>50 - 60 min</RPS.RestaurantTimeDeliver>
                        <RPS.RestaurantFreight>Frete R$6,00</RPS.RestaurantFreight>
                    </RPS.RestaurantDataMid>
                    <RPS.RestaurantAdress>R. Fradique Coutinho, 1136 - Vila Madalena</RPS.RestaurantAdress>
                </RPS.RestaurantData>
                <RPS.DividerTitle>Principal</RPS.DividerTitle>
                <Divider />

                <RPS.RestaurantItem>
                    <RPS.RestaurantItemImage src={require("../../images/hamburguers/image.png")}></RPS.RestaurantItemImage>
                    <RPS.RestaurantItemName>Bullguer</RPS.RestaurantItemName>
                    <RPS.RestaurantItemIngredients>Pão, carne. queijo, picles e molho.</RPS.RestaurantItemIngredients>
                    <RPS.RestaurantItemPrice>R$20,00</RPS.RestaurantItemPrice>
                    <RPS.RestaurantButtomAddIten><RPS.RestaurantButtomAddItenText>Adicionar</RPS.RestaurantButtomAddItenText></RPS.RestaurantButtomAddIten>
                </RPS.RestaurantItem>
                <RPS.RestaurantItem>
                    <RPS.RestaurantItemImage src={require("../../images/hamburguers/mao-santa-burguer-1531851949973-v-2-900-x-506.png")}></RPS.RestaurantItemImage>
                    <RPS.RestaurantItemName>Stencil</RPS.RestaurantItemName>
                    <RPS.RestaurantItemIngredients>Pão, carne, queijo, cebola roxa, tomate, alface e molho.</RPS.RestaurantItemIngredients>
                    <RPS.RestaurantItemPrice>R$23,00</RPS.RestaurantItemPrice>
                    <RPS.RestaurantCountItens><RPS.RestaurantCounterItensText>2</RPS.RestaurantCounterItensText></RPS.RestaurantCountItens>
                    <RPS.RestaurantButtomSubIten><RPS.RestaurantButtomSubItenText>Remover</RPS.RestaurantButtomSubItenText></RPS.RestaurantButtomSubIten>
                </RPS.RestaurantItem>

                <RPS.DividerTitle>Acompanhamentos</RPS.DividerTitle>
                <Divider />
                <RPS.RestaurantItem>
                    <RPS.RestaurantItemImage src={require("../../images/sides/batata.jpg")}></RPS.RestaurantItemImage>
                    <RPS.RestaurantItemName>Cheese Fries</RPS.RestaurantItemName>
                    <RPS.RestaurantItemIngredients>Porção de fritas temperada com páprica e queijo derretido.</RPS.RestaurantItemIngredients>
                    <RPS.RestaurantItemPrice>R$15,00</RPS.RestaurantItemPrice>
                    <RPS.RestaurantButtomAddIten><RPS.RestaurantButtomAddItenText>Adicionar</RPS.RestaurantButtomAddItenText></RPS.RestaurantButtomAddIten>
                </RPS.RestaurantItem>
            </RPS.Restaurant>


        )
    }
} export default RestaurantPage