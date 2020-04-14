// import React, { Component } from 'react';
// import styled from 'styled-components';
// import { Input, InputAdornment, Typography } from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';
// import CardsRestaurants from './CardsRestaurants';

// const InputSearch = styled(Input)`
//   width: 328px;
//   height: 56px;
//   border-radius: 2px;
//   border: solid 1px #b8b8b8;
//   margin:0 16px;
//   padding:17px;
// `

// const MainWrapper = styled.div`
//     width: 380px;
//     height: 640px;       
// `

// const CardsWrapper = styled.div`
//   margin:8px 16px;
//   border-radius: 8px;  
// `

// const FilterWrapper = styled.div`
//     margin:8px;
//     display:flex;
//     justify-content:space-evenly;
// `

// export default class FeedRestaurants extends Component {

//     render() {
//         return (
//             <MainWrapper>
//                 <Typography align="center" variant="h6">FutureEats</Typography>
//                 <hr />
//                 <InputSearch
//                     id="input-with-icon-adornment"
//                     placeholder="Restaurante"
//                     startAdornment={
//                         <InputAdornment position="start">
//                             <SearchIcon />
//                         </InputAdornment>
//                     }
//                 />
//                 <FilterWrapper>
//                     <Typography variant="h6" color="primary">Burger</Typography>
//                     <Typography variant="h6">Asiática</Typography>
//                     <Typography variant="h6">Massas</Typography>
//                 </FilterWrapper>
//                 <CardsWrapper>
//                     <CardsRestaurants />
//                     <CardsRestaurants />
//                     <CardsRestaurants />
//                 </CardsWrapper>
//             </MainWrapper>
//         )
//     }
// }