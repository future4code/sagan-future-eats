import React, { Component } from "react";
import ButtonStyle from '../../components/button'
import MyTextField from '../../components/input'
import { connect } from "react-redux";
import {PageWrapper, ContentWrapper, FormStyle} from '../style/styles'
import {signup} from '../../actions/Auth'

class RegisterPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: '',
        email: '',
        cpf:'',
        password:'',
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
        cpf:'',
        password:'',
      }
    })
  }

  render() {
    return (
      <PageWrapper>
        <ContentWrapper>
          <FormStyle onSubmit={this.handleSubmit}>
              <h3>Cadastrar</h3>
            <MyTextField
              name="name"
              type="text"
              label="Nome e Sobrenome"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.name} />
            <MyTextField
              name="email"
              type="email"
              label="Email"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.email} />
              <MyTextField
              name="cpf"
              type="text"
              label="CPF"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.cpf} />
            <MyTextField
              name="password"
              type="password"
              label="Senha"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.password} />
              <MyTextField
              name="password"
              type="password"
              label="Confirmar a senha anterior"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.password} />
            <ButtonStyle type='submit' btnText="Criar" />
          </FormStyle>
        </ContentWrapper>
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