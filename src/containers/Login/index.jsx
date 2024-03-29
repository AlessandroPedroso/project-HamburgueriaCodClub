import React from "react";
import { toast } from 'react-toastify';
import LoginImg from '../../assets/login-logo.svg';
import LogoBurger from '../../assets/burger.svg';
import api from '../../services/api'
import {Button,ErrorMessage} from '../../components'
import { Container, LoginImage, ContainerItens, Label, Input, SingnInLink} from './styles.js'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'
import {useUser} from '../../hooks/UserContext'
import { Link,useHistory } from "react-router-dom";

export const Login = () => {
    const history = useHistory()
    const {putUserData,userData} = useUser()
    // console.log(userData)

    const schema = Yup.object().shape({
        email: Yup.string().email("Digite um e-mail válido!").required("O e-mail é obrigatório!"),
        password: Yup.string().required("Senha obrigatório!").min(6, "A senha deve ter o minimo 6 digitos!"),
      })

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

    const onSubmit = async clientData => {
        //console.log(clientData)
        const {data} = await toast.promise(
            api.post('sessions',{
                email:clientData.email,
                password:clientData.password
            }),
            {
                pending: 'Verificando seus dados',
                success: 'Seja bem-vindo(a)',
                error: 'Verifique seu e-mail e senha'
            }
        ) 

        // toast.error('Deu ruim', {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "colored",
        //     });
        putUserData(data)
        setTimeout(() => {
            if (data.admin){
                history.push('/pedidos')
            }else{
                history.push('/')
            }
        }, 1000);
        
    };

    return (
        <Container>

            <LoginImage src={LoginImg} alt="login-image" />

            <ContainerItens>
                <img src={LogoBurger} />
                <h1>Login</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    <Input type="email" {...register("email")} error={errors.email?.message} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label>Senha</Label>
                    <Input type="password" {...register("password")} error={errors.password?.message}/>
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Button type="submit" style={{marginTop:40, marginBottom:25}} >Sign In</Button>
                </form>
                <SingnInLink>Não possui conta ? <Link style={{color: 'white'}} to="/cadastro">Sign up</Link></SingnInLink>
                
            </ContainerItens>
        </Container>
    )
}
