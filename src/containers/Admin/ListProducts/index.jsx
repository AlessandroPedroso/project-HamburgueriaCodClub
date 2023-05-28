import React,{useEffect, useState} from "react";
import { Container,Img,EditIconStyles } from "./styles";
import api from '../../../services/api'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import formatCurrency from '../../../utils/formartCurrency'

const ListProducts = () =>{

    const[products,setProducts] = useState()

    useEffect(() => {

        async function loadOrders() {
            const { data } = await api.get('products')
            setProducts(data)
        }

        loadOrders()
    }, [])

    function isOffer(offerStatus){
        if(offerStatus){
            return <CheckCircleOutlineIcon style={{color:'#228B22 '}}/>
        }

        return <CancelIcon style={{colo:'#CC1717'}} />
    }

    return (
        <Container>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell align='center'>Produto em Oferta</TableCell>
            <TableCell align='center'>Imagem do Produto</TableCell>
            <TableCell>Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products && products.map((products) => (
            <TableRow
              key={products.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {products.name}
              </TableCell>
              <TableCell>{formatCurrency(products.price)}</TableCell>
                <TableCell align='center' >{isOffer(products.offer)}</TableCell>
              <TableCell align='center'><Img src={products.url} alt="imagem-produto" /></TableCell>
              <TableCell><EditIconStyles/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Container>
    )
}

export default ListProducts