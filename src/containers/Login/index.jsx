import React from "react";

import LoginImg from '../../assets/login-logo.svg';
import LogoBurger from '../../assets/burger.svg';
import api from '../../services/api'
import Button from '../../components/Button/index'
import { Container, LoginImage, ContainerItens, Label, Input, SingnInLink,Error } from './styles.js'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'


const Login = () => {

    const schema = Yup.object().shape({
        email: Yup.string().email("Digite um e-mail válido!").required("O e-mail é obrigatório!"),
        password: Yup.string().required("Senha obrigatório!").min(6, "A senha deve ter o minimo 6 digitos!"),
      })

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

    const onSubmit = async clientData => {
        //console.log(clientData)
        const response = await api.post('sessions',{
            email:clientData.email,
            password:clientData.password
        })

        console.log(response)
    };

    return (
        <Container>

            <LoginImage src={LoginImg} alt="login-image" />

            <ContainerItens>
                <img src={LogoBurger} />
                <h1>Login</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    <Input type="email" {...register("email")} error={errors.password?.message} />
                    <Error>{errors.email?.message}</Error>

                    <Label>Senha</Label>
                    <Input type="password" {...register("password")} error={errors.password?.message}/>
                    <Error>{errors.password?.message}</Error>

                    <Button type="submit" style={{marginTop:40, marginBottom:25}} >Sign In</Button>
                </form>
                <SingnInLink>Não possui conta ? <a>Sign up</a></SingnInLink>
                
            </ContainerItens>
        </Container>
    )
}

export default Login