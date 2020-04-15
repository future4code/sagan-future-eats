import React, { Component } from "react";
import { connect } from "react-redux";
import {signup} from '../../actions/Auth'
import MyButton from "../../components/material/Button";
import { MyInput } from "../../components/material/Inputs";
import { MyPageTitle } from "../../components/pageTitleBar";
import styled from 'styled-components'

const PageWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 16px);
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const FormStyle = styled.form`
  width: 100%;
`
const LogoFutureEats = styled.img`
  padding: 15px;
`

class RegisterPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: '',
        email: '',
        cpf: '',
        password: '',
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
    const {form} = this.state
    this.props.signup(form.email, form.password, form.name, form.cpf)
    this.setState({
      form: {
        name: '',
        email: '',
        cpf: '',
        password: '',
      }
    })
  }

  render() {
    return (
      <PageWrapper>
        <MyPageTitle showBack pageTitle='Cadastrar'/>
        <LogoFutureEats src={require("../../images/LogoPage/logo-future-eats-invert.png")} />
          <FormStyle onSubmit={this.handleSubmit}>
            <MyInput
              name="name"
              type="text"
              label="Nome"
              placeholder="Nome e Sobrenome"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.name} />
            <MyInput
              name="email"
              type="email"
              label="Email"
              placeholder="email@email.com"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.email} />
            <MyInput
              name="cpf"
              type="text"
              label="CPF"
              placeholder="000.000.000-00"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.cpf} />
            <MyInput
              name="password"
              type="password"
              label="Senha"
              placeholder="Mínimo 6 caracteres"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.password} />
            <MyInput
              name="password"
              type="password"
              label="Confirmar"
              placeholder="Confirme a senha anterior"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.password} />
            <MyButton btnText='Criar' />
          </FormStyle>
      </PageWrapper>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    
    signup: (email, password, name, cpf) => dispatch(signup(email, password, name, cpf)),
  }
} 
export default connect(null, mapDispatchToProps)(RegisterPage)