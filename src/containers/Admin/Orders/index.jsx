import React,{useEffect, useState} from "react"
import { Container,Menu,LinkMenu } from "./styles"
import api from '../../../services/api'
import Row from "./row";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import formatDate from '../../../utils/formatDate.js'
import status from "./order-status";

const Orders = ()=>{

    const [orders,setOrders] = useState([])
    const [filterOrders,setFilterOrders] = useState([])
    const [activeStatus,setActiveStatus] = useState(1)
    const [rows,setRows] = useState([])

    useEffect(() => {

        async function loadOrders() {
            const { data } = await api.get('orders')

            setOrders(data);
            setFilterOrders(data)
        }

        loadOrders()
    }, [])

    function createData(order) {
        return {
          name:order.user.name,
          orderId: order._id,
          date: formatDate(order.createdAt),
          status: order.status,
          products: order.products

        };
      }

      useEffect(()=>{

        const newRows = filterOrders.map(ord=> createData(ord))
        
        setRows(newRows)

      },[filterOrders])

      function handleStatus(status){
        if(status.id===1){
            setFilterOrders(orders)
            
        }else{
            const newOrders = orders.filter(order=> order.status === status.value)
            setFilterOrders(newOrders)
        }

        setActiveStatus(status.id)
      }

    return (
        <Container>
            <Menu>
                {status && status.map(status=> <LinkMenu key={status.id} onClick={()=>handleStatus(status)} isActiveStatus={activeStatus === status.id} >{status.label}</LinkMenu>)}
            </Menu>
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                        <TableCell />
                        <TableCell>Pedido</TableCell>
                        <TableCell >Cliente</TableCell>
                        <TableCell >Data do pedido</TableCell>
                        <TableCell >Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                        <Row key={row.orderId} row={row} />
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
        </Container>
    )
}

export default Orders