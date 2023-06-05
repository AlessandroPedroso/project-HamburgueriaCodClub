import React, { useState } from "react"
import {Container,Label,Input,ButtonStyles,LabelUpload} from './styles'
import ReactSelect from 'react-select'
import { useForm } from "react-hook-form";
import { FaCloudUploadAlt } from 'react-icons/fa';
const NewProduct = () =>{
    const [fileName,setFileName] = useState(null)

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Container>
            <form noValidate>
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
                

                <ReactSelect></ReactSelect>

                <ButtonStyles>Adicionar produto</ButtonStyles>
             </form>
        </Container>
    )
}

export default NewProduct