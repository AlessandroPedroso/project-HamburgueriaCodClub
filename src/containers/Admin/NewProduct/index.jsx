import React, { useState,useEffect } from "react"
import {Container,Label,Input,ButtonStyles,LabelUpload,ReactSelectStyle} from './styles'

import { useForm,Controller } from "react-hook-form";
import { FaCloudUploadAlt } from 'react-icons/fa';
import api from '../../../services/api'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from "../../../components";

const NewProduct = () =>{
    const [fileName,setFileName] = useState(null)
    const [categorias,setCategorias] = useState([])
    
    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o nome do produto'),
        price: Yup.string().required('Digite o preço do produto'),
        category: Yup.object().required('Escolha uma categoria'),
        file: Yup.mixed().test('required','Carregue um arquivo',value=> {return value?.length>0})
        .test('fileSize','Carregue arquivos de ate 2mb', value=>{return value[0]?.size <= 2000000})
        .test('type','Carregue apenas arquivos JPEG ou PNG', value => {return value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png'}),

    })

    const { register, handleSubmit, control, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

    const onSubmit = data => console.log(data);

    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get('categories')
            setCategorias(data)
            console.log(data)
        }
        
        loadCategories()
    }, [])



    return (
        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Label>Nome</Label>
                <Input type="text" {...register("name")}/>
                <ErrorMessage>{errors.name?.message}</ErrorMessage>
                
                <Label>Preço</Label>
                <Input type="number" {...register("price")}/>
                <ErrorMessage>{errors.price?.message}</ErrorMessage>

                <LabelUpload>
                    
                    {fileName? fileName : (
                        <>
                            <FaCloudUploadAlt size={22} />
                            Carregue a imagem do produto

                        </>
                    )}
                    
                    <input 
                        type="file"
                        accept="image/png, image/jpg"
                        {...register("file")}
                        onChange={value=>{setFileName(value.target.files[0]?.name)}}
                     />
                </LabelUpload>
                <ErrorMessage>{errors.file?.message}</ErrorMessage>

                
                    <Controller name='category' control={control} render={({field})=> {
                        return (

                            <ReactSelectStyle {...field} options={categorias} getOptionLabel={cat => cat.name} getOptionValue={cat => cat.id} placeholder="Categorias" />

                        )
                    }}>


                    </Controller>
                <ErrorMessage>{errors.category?.message}</ErrorMessage>

                    
                <ButtonStyles>Adicionar produto</ButtonStyles>
             </form>
        </Container>
    )
}

export default NewProduct