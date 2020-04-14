import React from 'react'
import styled from 'styled-components'
import MyBottonNav from '../../components/material/BottomNav'
import MyButton from '../../components/material/Button'
import { MyInput, MyPasswordInput } from '../../components/material/Inputs'


   

const PageWrapper = styled.div`
  width: 100%;
`

export class Profile extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <PageWrapper>
        <MyInput label='Endereço' placeholder="Av. / Rua" />
        <MyPasswordInput label='Senha' />
        <MyButton btnText='Confirmar' />
        <MyBottonNav />
      </PageWrapper>
    )
  }
}

export default Profile