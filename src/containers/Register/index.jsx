import React from "react";
import { toast } from 'react-toastify';
import RegisterImg from '../../assets/register-image.svg';
import LogoBurger from '../../assets/burger.svg';
import api from '../../services/api'
import {Button,ErrorMessage} from '../../components'
import { Container, RegisterImage, ContainerItens, Label, Input, SingnInLink} from './styles.js'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'
import { Link } from "react-router-dom";


export const Register = () => {

    const schema = Yup.object().shape({
        name: Yup.string().required("O seu nome é obrigatório"),
        email: Yup.string().email("Digite um e-mail válido!").required("O e-mail é obrigatório!"),
        password: Yup.string().required("Senha obrigatório!").min(6, "A senha deve ter o minimo 6 digitos!"),
        confirmPassword: Yup.string().required("Senha obrigatório!").oneOf([Yup.ref('password')], 'As senhas devem ser iguais'),
      })

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

    const onSubmit = async clientData => {
        //console.log(clientData)
        try{
            const {status,data}= await api.post('users',{
                name:clientData.name,
                email:clientData.email,
                password:clientData.password
            }, {validateStatus: () => true})
            // console.log(status)
            // console.log(data.error)

            if(status===201 || status===200){
                toast.success('Cadastro criado com sucesso!')
            }else if(status===409){
                toast.error(data.error)
            }else{
                throw new Error()
            }
            
        }catch(err){
            toast.error('Falha no sistema! tente novamente')
        }

    };

    return (
        <Container>

            <RegisterImage src={RegisterImg} alt="register-image" />

            <ContainerItens>
                <img src={LogoBurger} />
                <h1>Cadastre-se</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Label error={errors.name?.message}>Nome</Label>
                    <Input type="text" {...register("name")} error={errors.name?.message} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>

                    <Label error={errors.email?.message}>Email</Label>
                    <Input type="email" {...register("email")} error={errors.email?.message} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label error={errors.password?.message}>Senha</Label>
                    <Input type="password" {...register("password")} error={errors.password?.message}/>
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
                    <Input type="password" {...register("confirmPassword")} error={errors.confirmPassword?.message}/>
                    <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

                    <Button type="submit" style={{marginTop:25, marginBottom:25}} >Sign In</Button>
                </form>
                <SingnInLink>Já possui conta? <Link style={{color:'white'}} to="/login">Sign In</Link></SingnInLink>
                
            </ContainerItens>
        </Container>
    )
}