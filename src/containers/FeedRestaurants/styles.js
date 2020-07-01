import styled from 'styled-components';
import { Card, Input } from '@material-ui/core';

export const InputSearch = styled(Input)`
  width: calc(100% - 32px);
  height: 56px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  margin:0 16px;
  `
export const MainWrapper = styled.div`
    width: 100%;
    min-height: 100vh;       
`
export const CardsWrapper = styled.div`
  margin:8px 16px;
  border-radius: 8px;  
`
export const FilterWrapper = styled.div`
    margin:8px;
    display:flex;
    justify-content:space-evenly;
`
export const CardRestaurant = styled(Card)`
  margin-bottom:8px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  width: 100%;
  &:last-of-type{
    margin-bottom:64px;
  }
`

export const InfosContainer = styled.div`
  display:flex;
  justify-content:space-between;
`