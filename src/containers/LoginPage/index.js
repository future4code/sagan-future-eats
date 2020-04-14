import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { routes } from '../Router'

import MyTextField from '../../components/input'

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
                        <MyButton btnText="Entrar" />
                        <p>Não possui cadastro? <span onClick={this.props.goToRegisterPage}>Clique aqui</span></p>
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