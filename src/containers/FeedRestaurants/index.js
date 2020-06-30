import React, { Component } from 'react';
import MyPageTitle from '../../components/pageTitleBar';
import MyBottonNav from '../../components/material/BottomNav';
import { MainWrapper, InputSearch, CardsWrapper, FilterWrapper } from './styles'
import FilterScroll from './FilterScroll';
import { push } from "connected-react-router";
import { routes } from '../Router';
import { connect } from 'react-redux';
import { getRestaurants } from '../../actions/GetRestaurantsAction';
import { Input, InputAdornment, Typography } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import CardsRestaurants from './CardsRestaurants';

class FeedRestaurants extends Component {
  constructor(props) {
    super(props)
    this.state = {
      actualValue: ""
    }
  }

  componentDidMount() {
    if (localStorage.getItem('token') === null) {
      this.props.goToLogin()
    }
    this.props.getRestaurants()
  }

  handleFilterClick = (valorAlterado) => {
    if (valorAlterado === this.state.actualValue) {
      this.setState({ actualValue: "" })
    } else {
      this.setState({ actualValue: valorAlterado })
    }
  }

  render() {
    return (

      <MainWrapper>
        <MyPageTitle pageTitle={"FutureEats"} />
        <InputSearch
          id="input-with-icon-adornment"
          onClick={() => this.props.goToSearch()}
          placeholder="Restaurante"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
        <FilterWrapper>
          <FilterScroll handleClick={this.handleFilterClick} />
        </FilterWrapper>
        <CardsWrapper>
          {this.props.restaurantList
            .filter(restaurant => {
              return this.state.actualValue ? restaurant.category === this.state.actualValue
                : true
            }).map(restaurant => {
              return (
                <CardsRestaurants key={restaurant.id} restaurant={restaurant} />
              )
            })}
        </CardsWrapper>
        <MyBottonNav />
      </MainWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantList: state.store.restaurantList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRestaurants: () => dispatch(getRestaurants()),
    goToLogin: () => dispatch(push(routes.login)),
    goToSearch: () => dispatch(push(routes.inputSearch))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedRestaurants)