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
  IconWrapper, SubTitle, Divisor, ParagraphWrapper,
  InfoWrapper
} from './styles'

import { getProfile } from '../../actions/profile';


export class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (localStorage.getItem('token') === null) {
      //this.props.goToLogin()
    }
    else {
      this.props.profile || this.props.getProfileDetails()
    }
  }

  render() {
    const { profile } = this.props
    return (
      <PageWrapper>
        <MyPageTitle pageTitle='Meu perfil' />
        <ProfileWrapper>
          {profile &&
            <InfoWrapper>
              <p>{profile.name}</p>
              <p>{profile.email}</p>
              <p>{profile.cpf}</p>
            </InfoWrapper> 
          }
          <span onClick={this.props.goToEditProfile}>
            <EditOutlinedIcon />
          </span>
        </ProfileWrapper>
        <AddressWrapper>
          <ParagraphWrapper>
            <p>Endereço cadastrado</p>
            {profile && <p>{profile.address}</p>}
          </ParagraphWrapper>
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
      </PageWrapper >
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile.profileDetails,
  history: state.profile.profileOrderHistory
})

const mapDispatchToProps = (dispatch) => ({
  goToLogin: () => dispatch(push(routes.login)),
  goToEditProfile: () => dispatch(push(routes.editProfile)),
  goToEditAddress: () => dispatch(push(routes.editAddress)),
  getProfileDetails: () => dispatch(getProfile())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)