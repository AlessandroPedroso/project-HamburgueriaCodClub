import React,{useEffect, useState} from "react"
import ReactSelect from 'react-select'

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import api from '../../../services/api'

import {ProductImg,ReactSelectStyle} from './styles'
import status from './order-status'
import { toast } from 'react-toastify';
function Row({row}){
    const [open, setOpen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    async function setNewStatus(id, status) {
        setIsLoading(true)
        try{
            
             await api.put(`orders/${id}`,{status})


        }catch(err){
            console.error(err)
        }finally{

            setIsLoading(false)

            toast.success('Pedido atualizado!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    }
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.orderId}
          </TableCell>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.date}</TableCell>
          <TableCell>
               <ReactSelectStyle options={status} menuPortalTarget={document.body} placeholder="Status" 
                defaultValue={status.find(options=> options.value === row.status) || null}
                onChange={newStatus =>{
                    setNewStatus(row.orderId,newStatus.value)
                }}
                isLoading={isLoading}
               /> 
           </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Pedido
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Quantidade</TableCell>
                      <TableCell>Produto</TableCell>
                      <TableCell>Categoria</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.products.map((products) => (
                      <TableRow key={products.id}>
                        <TableCell component="th" scope="row">
                          {products.quantity}
                        </TableCell>
                        <TableCell>{products.name}</TableCell>
                        <TableCell>{products.category}</TableCell>
                        <TableCell><ProductImg src={products.url} alt="imagem-do-produto" /></TableCell>
                        {/* <TableCell align="right">
                          {Math.round(products.amount * row.price * 100) / 100}
                        </TableCell> */}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
  Row.propTypes = {
    row: PropTypes.shape({
      orderId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      products: PropTypes.arrayOf(
        PropTypes.shape({
          quantity: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          category: PropTypes.string.isRequired,
          url:PropTypes.string.isRequired,
        }),
      ).isRequired,
    }).isRequired,
  };
  

export default Row