/* import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { routes } from '../Router'
import ButtonStyle from '../../components/button'
import MyTextField from '../../components/input'

import * as CPS from './CartPageStyles'


class CartPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    handleInputValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <CPS.PageWrapper>

                <CPS.Bar>
                    <h3>Meu Carrinho</h3>
                </CPS.Bar>

                <CPS.GreyBox>
                    <CPS.AddressLabel>Endereco de Entrega</CPS.AddressLabel>
                    <CPS.Address>Rua Galeao Coutinho 364</CPS.Address>
                </CPS.GreyBox>

                <CPS.Title>
                    <CPS.Text>Carrinho Vazio</CPS.Text>
                </CPS.Title>

                <CPS.TotalContainer>
                    <CPS.Freight>Frete: R$ 34,50</CPS.Freight>
                    <CPS.SubTotal>SUBTOTAL</CPS.SubTotal>
                    <CPS.TotalValue>R$00.00</CPS.TotalValue>
                </CPS.TotalContainer>

                <CPS.PayMethodLabel>Forma de Pagamento</CPS.PayMethodLabel>

                <CPS.LineBreak/>

                <CPS.PayMethodContainer>
                    <p>Dinheiro (INSERIR TOGGLE A ESQUERDA)</p>
                    <p>Cartao (INSERIR TOGGLE A ESQUERDA)</p>
                </CPS.PayMethodContainer>

                <CPS.ConfirmButton>Confirmar</CPS.ConfirmButton>

                <CPS.Footer>
                    <CPS.FooterIcon src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-18-512.png"/>
                    <CPS.FooterIcon src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-18-512.png"/>
                    <CPS.FooterIcon src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-18-512.png"/>
                </CPS.Footer>

            </CPS.PageWrapper>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // goToRegisterPage: () => dispatch(push(routes.register))
    }
}

export default connect(null, mapDispatchToProps)(CartPage); */