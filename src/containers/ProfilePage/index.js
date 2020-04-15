import React from 'react'

import { push } from "connected-react-router";
import { connect } from "react-redux";
import { routes } from "../../containers/Router";

import { MyPageTitle } from '../../components/pageTitleBar';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import HystoryUnit from '../../components/history';
import MyBottonNav from '../../components/material/BottomNav'

import {
  PageWrapper, ProfileWrapper, AddressWrapper,
  IconWrapper, SubTitle, Divisor
} from './styles'


export class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <PageWrapper>
        <MyPageTitle pageTitle='Meu perfil' />
        <ProfileWrapper>
          <p>Bruna Oliveira</p>
          <p>bruna_o@gmail.com</p>
          <p>333.333.333-33</p>
          <span onClick={this.props.goToEditProfile}>
            <EditOutlinedIcon />
          </span>
        </ProfileWrapper>
        <AddressWrapper>
          <p>Endereço cadastrado</p>
          <p>Rua Alessandra Vieira, 42 - Santana</p>
          <IconWrapper onClick={this.props.goToEditAddress}>
            <EditOutlinedIcon />
          </IconWrapper>
        </AddressWrapper>
        <SubTitle>Histórico de pedidos</SubTitle>
        <Divisor> <hr /> </Divisor>
        <HystoryUnit />
        <HystoryUnit />
        <HystoryUnit />
        <HystoryUnit />
        <MyBottonNav />
      </PageWrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToEditProfile: () => dispatch(push(routes.editProfile)),
  goToEditAddress: () => dispatch(push(routes.editAddress)),

})

export default connect(null, mapDispatchToProps)(Profile)