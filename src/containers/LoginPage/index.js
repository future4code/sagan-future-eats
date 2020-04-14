import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { routes } from '../Router'

import MyTextField from '../../components/input'
import IconPassword from '../../components/Icons/index'

import { PageWrapper, ContentWrapper, FormStyle } from '../style/styles'
import MyButton from "../../components/material/Button";

class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                password: '',
                email: '',
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
        this.props.login(this.state.form)
        this.setState({
            form: {
                password: '',
                email: '',
            }
        })
    }

    render() {
        return (
            <PageWrapper>
                <ContentWrapper>
                    <FormStyle onSubmit={this.handleSubmit}>
                    <h3>Entrar</h3>
                        <MyTextField
                            name="email"
                            type="email"
                            label="Email"
                            required={true}
                            onChange={this.handleInputValue}
                            value={this.state.form.email} />
                        <MyTextField
                            name="password"
                            type="password"
                            label="senha"
                            required={true}
                            onChange={this.handleInputValue}
                            value={this.state.form.password}
                        />
<<<<<<< HEAD
                        <IconPassword/>
                        <ButtonStyle type="submit" btnText="Entrar" />
                        <p>Não possui cadastro? <span onClick={this.props.goToRegisterPage}><u>Clique aqui.</u></span></p>
=======
                        <MyButton btnText="Entrar" />
                        <p>Não possui cadastro? <span onClick={this.props.goToRegisterPage}>Clique aqui</span></p>
>>>>>>> fece9fee4d52534e93aa1a6989b52860710939a1
                    </FormStyle>
                </ContentWrapper>
            </PageWrapper>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToRegisterPage: () => dispatch(push(routes.register))
    }
}

export default connect(null, mapDispatchToProps)(LoginPage);