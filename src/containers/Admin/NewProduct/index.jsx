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

    const onSubmit = async data => {
        const productDataFormData = new FormData()
        productDataFormData.append('name',data.name)
        productDataFormData.append('price',data.price)
        productDataFormData.append('category_id',data.category.id)
        productDataFormData.append('file',data.file[0])

        await api.post('products', productDataFormData)
        // console.log(productDataFormData)
    };

    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get('categories')
            setCategorias(data)
            // console.log(data)
        }
        
        loadCategories()
    }, [])



    return (
        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label>Nome</Label>
                    <Input type="text" {...register("name")}/>
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </div>

                <div>
                    <Label>Preço</Label>
                    <Input type="number" {...register("price")}/>
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>
                </div>

                <div>
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
                </div>
                
                <div>
                        <Controller name='category' control={control} render={({field})=> {
                            return (

                                <ReactSelectStyle {...field} options={categorias} getOptionLabel={cat => cat.name} getOptionValue={cat => cat.id} placeholder="Categorias" />

                            )
                        }}>


                        </Controller>
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </div>    
                    
                <ButtonStyles>Adicionar produto</ButtonStyles>
             </form>
        </Container>
    )
}

export default NewProduct