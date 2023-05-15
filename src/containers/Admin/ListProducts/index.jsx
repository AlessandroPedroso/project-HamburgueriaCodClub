import React,{useEffect, useState} from "react";
import { Container } from "./styles";
import api from '../../../services/api'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const ListProducts = () =>{

    const[products,setProducts] = useState([])

    useEffect(() => {

        async function loadOrders() {
            const { data } = await api.get('products')
            setProducts(data)
        }

        loadOrders()
    }, [])

    return (
        <Container>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell>Produto em Oferta</TableCell>
            <TableCell>Imagem</TableCell>
            <TableCell>Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((products) => (
            <TableRow
              key={products.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {products.name}
              </TableCell>
              <TableCell>{products.price}</TableCell>
              <TableCell>{products.offer}</TableCell>
              <TableCell><img src={products.url} alt="imagem-produto" /></TableCell>
              <TableCell><button>Editar</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Container>
    )
}

export default ListProducts