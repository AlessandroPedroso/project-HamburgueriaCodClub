import React, { useState,useEffect } from "react"
import {Container,Label,Input,ButtonStyles,LabelUpload,ReactSelectStyle,ContainerInput} from './styles'

import { useForm,Controller } from "react-hook-form";
import { FaCloudUploadAlt } from 'react-icons/fa';
import api from '../../../services/api'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from "../../../components";
import {useHistory} from 'react-router-dom'
import { toast } from 'react-toastify';
import Checkbox from '@mui/material/Checkbox';


const EditProduct = () =>{
    const [fileName,setFileName] = useState(null)
    const [categorias,setCategorias] = useState([])
    const {push, location: {state:{products}}} = useHistory()

    // console.log(products)
    
    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o nome do produto'),
        price: Yup.string().required('Digite o preço do produto'),
        category: Yup.object().required('Escolha uma categoria'),
        offer: Yup.bool()

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
        productDataFormData.append('offer',data.offer)

        await toast.promise(
           api.put(`products/${products.id}`, productDataFormData),
            {
                pending: 'Editando novo produto...',
                success: 'Produto criado com sucesso',
                error: 'falha ao criar o produto'
            }
        )

        setTimeout(()=>{
            push('/listar-produtos')
        },2000)
        // console.log(productDataFormData)
    }

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
                    <Input type="text" {...register("name")} defaultValue={products.name}/>
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </div>

                <div>
                    <Label>Preço</Label>
                    <Input type="number" {...register("price")} defaultValue={products.price}/>
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
                        <Controller name='category' defaultValue={products.category} control={control} render={({field})=> {
                            return (

                                <ReactSelectStyle {...field} options={categorias} getOptionLabel={cat => cat.name} getOptionValue={cat => cat.id} placeholder="Categorias" defaultValue={products.category} />

                            )
                        }}>


                        </Controller>
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </div>

                <ContainerInput>
                        <Checkbox {...register("offer")} defaultChecked={products.offer} color="secondary" />
                        <Label>Produto em oferta?</Label>
                </ContainerInput>
                    
                <ButtonStyles>Editar produto</ButtonStyles>
             </form>
        </Container>
    )
}

export default EditProduct