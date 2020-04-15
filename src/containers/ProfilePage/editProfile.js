import React from 'react'
import { PageWrapper } from './styles'
import MyButton from '../../components/material/Button'
import { MyInput } from '../../components/material/Inputs'
import MyPageTitle from '../../components/pageTitleBar'


export class ProfileEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: 'geggwe',
        email: 'egwg',
        cpf: 'egwegr',
      }
    }
  }

  handleInputChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <PageWrapper>
        <MyPageTitle showBack pageTitle='Editar'/>
        <form>
          <MyInput
            label='Nome'
            name='name'
            type='text'
            required
            value={this.state.form.name}
            onChange={this.handleInputChange}
          />
          <MyInput
            label='E-mail'
            name='email'
            type='email'
            required
            value={this.state.form.email}
            onChange={this.handleInputChange}
          />
          <MyInput
            label='CPF'
            name='cpf'
            type='text'
            required
            value={this.state.form.cpf}
            onChange={this.handleInputChange}
          />
          <MyButton btnText='Salvar' />
        </form>
      </PageWrapper>
    )
  }
}

export default ProfileEdit