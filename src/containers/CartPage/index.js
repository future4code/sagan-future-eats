import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router'
import * as CPS from './CartPageStyles'
import MyPageTitle from '../../components/pageTitleBar'
import MyBottonNav from '../../components/material/BottomNav';

class CartPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        if (localStorage.getItem('token') === null) {
          this.props.goToLogin()
        }
        this.props.getOrder()
      }

    handleInputValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <CPS.PageWrapper>
                <MyPageTitle showBack pageTitle='Meu Carrinho' />

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

                <MyBottonNav />
            </CPS.PageWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      restaurantOrder: state.store.restaurantOrder
    }
  };

const mapDispatchToProps = dispatch => {
    return {
        goToLogin: () => dispatch(push(routes.login)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);