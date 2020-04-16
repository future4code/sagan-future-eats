import React, { Component } from "react";
import * as RPS from './RestaurantPageStyles'
import { IconButton, Divider, CardMedia } from "@material-ui/core";
import {connect} from 'react-redux'
import { push } from "connected-react-router";
import { routes } from '../../containers/Router';

export class RestaurantPage extends Component {

    componentDidMount(){
        const { restaurantDetails, goToFeed } = this.props
        if(restaurantDetails.id === null || restaurantDetails.ID === undefined || restaurantDetails.id === ""){
            goToFeed()
        }
    }

    render() {
        const { restaurantDetails } = this.props;
        if(restaurantDetails.id === null || restaurantDetails.ID === undefined || restaurantDetails.id === ""){
            return(
                <div>
                    Nothing here!
                </div>
            )
        }
        else{
            return (            
                <RPS.Restaurant>
                    <RPS.TopBar>
                        <IconButton><img src={require("../../images/BackButton/back.png")} alt="Icone do Botão" /></IconButton>
                        <RPS.Title><RPS.TitleContend>Restaurante</RPS.TitleContend></RPS.Title>
                    </RPS.TopBar>
                    <RPS.ImageLogoRestaurant><img src={restaurantDetails.logoUrl} alt="Logo" /></RPS.ImageLogoRestaurant>
                    <RPS.RestaurantData>
                        <RPS.RestaurantName>{restaurantDetails.name}</RPS.RestaurantName>
                        <RPS.RestaurantType>{restaurantDetails.category}</RPS.RestaurantType>
                        <RPS.RestaurantDataMid>
                            <RPS.RestaurantTimeDeliver>{restaurantDetails.deliveryTime + " min"}</RPS.RestaurantTimeDeliver>
                            <RPS.RestaurantFreight>{"Frete R$" +  restaurantDetails.shipping.toFixed(2)}</RPS.RestaurantFreight>
                        </RPS.RestaurantDataMid>
                        <RPS.RestaurantAdress>{restaurantDetails.address}</RPS.RestaurantAdress>
                    </RPS.RestaurantData>
                    <RPS.DividerTitle>Principal</RPS.DividerTitle>
                    <Divider />           
                    {restaurantDetails.products.map(product => {
                        if(product.category !== "Acompanhamento"){
                            return(                        
                                <RPS.RestaurantItem key={product.id}>
                                    <RPS.RestaurantItemImage src={product.photoUrl} ></RPS.RestaurantItemImage>
                                    <RPS.RestaurantItemName>{product.name}</RPS.RestaurantItemName>
                                    <RPS.RestaurantItemIngredients>{product.description}</RPS.RestaurantItemIngredients>
                                    <RPS.RestaurantItemPrice>{"R$" + product.price.toFixed(2)}</RPS.RestaurantItemPrice>
                                    <RPS.RestaurantButtomAddIten><RPS.RestaurantButtomAddItenText>Adicionar</RPS.RestaurantButtomAddItenText></RPS.RestaurantButtomAddIten>
                                </RPS.RestaurantItem>    
                            )
                        }                                                        
                    })}                
                    <RPS.DividerTitle>Acompanhamentos</RPS.DividerTitle>
                    <Divider />
                    {restaurantDetails.products.map(product => {
                        if(product.category === "Acompanhamento"){
                            return(                        
                                <RPS.RestaurantItem key={product.id}>
                                    <RPS.RestaurantItemImage src={product.photoUrl}></RPS.RestaurantItemImage>
                                    <RPS.RestaurantItemName>{product.name}</RPS.RestaurantItemName>
                                    <RPS.RestaurantItemIngredients>{product.description}</RPS.RestaurantItemIngredients>
                                    <RPS.RestaurantItemPrice>{"R$" + product.price.toFixed(2)}</RPS.RestaurantItemPrice>
                                    <RPS.RestaurantButtomAddIten><RPS.RestaurantButtomAddItenText>Adicionar</RPS.RestaurantButtomAddItenText></RPS.RestaurantButtomAddIten>
                                </RPS.RestaurantItem>    
                            )
                        }                                                   
                    })}
                </RPS.Restaurant>
            )
        }
    }
}

const mapStateToProps = (state) =>({
    restaurantDetails : state.store.restaurantDetails
})

const mapDispatchToProps = (dispatch) => ({
    goToFeed: () => dispatch(push(routes.feedRestaurants))
  })

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantPage)