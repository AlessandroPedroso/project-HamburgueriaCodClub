import React, { useState,useEffect } from "react"
import {Container,Label,Input,ButtonStyles,LabelUpload} from './styles'
import ReactSelect from 'react-select'
import { useForm,Controller } from "react-hook-form";
import { FaCloudUploadAlt } from 'react-icons/fa';
import api from '../../../services/api'
const NewProduct = () =>{
    const [fileName,setFileName] = useState(null)
    const [categorias,setCategorias] = useState([])
    const { register, handleSubmit,control } = useForm();
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

                <Label>Preço</Label>
                <Input type="number" {...register("price")}/>

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
                
                    <Controller name='category_id' control={control} render={({field})=> {
                        return (

                            <ReactSelect {...field} options={categorias} getOptionLabel={cat => cat.name} getOptionValue={cat => cat.id} placeholder="Categorias" />

                        )
                    }}>


                    </Controller>
                

                <ButtonStyles>Adicionar produto</ButtonStyles>
             </form>
        </Container>
    )
}

export default NewProduct