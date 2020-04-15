import React from 'react'
import styled from 'styled-components'
import MyButton from '../../components/material/Button'
import { MyInput } from '../../components/material/Inputs'
import MyPageTitle from '../../components/pageTitleBar'


const PageWrapper = styled.div`
  width: 100%;
`

export class AddressEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        street: 'geggwe',
        number: 'egwg',
        neighbourhood: 'egwegr',
        city: '',
        state: '',
        complement: ''
      }
    }
  }

  render() {
    return (
      <PageWrapper>
        <MyPageTitle showBack pageTitle='Endereço' />
        <form>
          <MyInput
            label='Logradouro'
            name='street'
            type='text'
            required
            placeholder='Rua / Av.'
            value={this.state.form.street}
            onChange={this.handleInputChange}
          />
          <MyInput
            label='Número'
            name='number'
            type='text'
            required
            placeholder='Número'
            value={this.state.form.number}
            onChange={this.handleInputChange}
          />
          <MyInput
            label='Complemento'
            name='complement'
            type='text'
            placeholder='Complemento'
            value={this.state.form.complement}
            onChange={this.handleInputChange}
          />
          <MyInput
            label='Bairro'
            name='neighbourhood'
            type='text'
            required
            placeholder='Bairro'
            value={this.state.form.neighbourhood}
            onChange={this.handleInputChange}
          />
          <MyInput
            label='Cidade'
            name='city'
            type='text'
            required
            placeholder='Cidade'
            value={this.state.form.city}
            onChange={this.handleInputChange}
          />
          <MyInput
            label='Estado'
            name='state'
            type='text'
            required
            placeholder='Estado'
            value={this.state.form.state}
            onChange={this.handleInputChange}
          />
          <MyButton btnText='Salvar' />
        </form>
      </PageWrapper>
    )
  }
}

export default AddressEdit