import React from 'react'
import styled from 'styled-components'
import MyBottonNav from '../../components/material/BottomNav'

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
        <MyBottonNav />
      </PageWrapper>
    )
  }
}

export default Profile