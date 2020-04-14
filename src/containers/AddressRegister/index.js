import React, { Component } from "react";
import ButtonStyle from '../../components/button'
import MyTextField from '../../components/input'

import {PageWrapper, ContentWrapper, FormStyle} from '../style/styles'


class AddressRegister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        street: '',
        number: '',
        neighbourhood:'',
        city:'',
        state:'',
        complement:'',
      }
    }
  }

  handleInputValue = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitForm(this.state.form)
    this.setState({
      form: {
        street: '',
        number: '',
        neighbourhood:'',
        city:'',
        state:'',
        complement:'',
      }
    })
  }

  render() {
    return (
      <PageWrapper>
        <ContentWrapper>
          <FormStyle onSubmit={this.handleSubmit}>
              <h3>Meu Endereço</h3>
            <MyTextField
              name="street"
              type="text"
              label="Logradouro"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.name} />
            <MyTextField
              name="number"
              type="number"
              label="Número"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.email} />
              <MyTextField
              name="complement"
              type="text"
              label="Complemento"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.cpf} />
            <MyTextField
              name="neighbourhood"
              type="text"
              label="Bairro"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.password} />
              <MyTextField
              name="city"
              type="text"
              label="Cidade"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.password} />
              <MyTextField
              name="state"
              type="text"
              label="Estado"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.password} />
            <ButtonStyle btnText="Salvar" />
          </FormStyle>
        </ContentWrapper>
      </PageWrapper>
    );
  }
}



export default AddressRegister