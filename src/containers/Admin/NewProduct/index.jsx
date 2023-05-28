import React from "react"
import {Container,Label,Input} from './styles'
import ReactSelect from 'react-select'
import {Button} from '../../../components'
import { useForm } from "react-hook-form";

const NewProduct = () =>{
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Container>
            <form noValidate>
                <Label>Nome</Label>
                <Input type="text" {...register("name")}/>

                <Label>Preço</Label>
                <Input type="number" {...register("price")}/>

                <Label>Upload</Label>
                <Input type="file" accept="image/png, image/jpg"/>

                <ReactSelect></ReactSelect>

                <Button>Adicionar produto</Button>
             </form>
        </Container>
    )
}

export default NewProduct