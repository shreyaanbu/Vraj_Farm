import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { backendUrl, currency } from '../App'
import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    if (!token) return
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      )
      if (response.data.success) {
        setOrders(response.data.orders)
      }
    } catch (error) {
      toast.error("Failed to load orders")
    }
  }

  const statusHandler = async (orderId, status) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status },
        { headers: { token } }
      )
      if (response.data.success) {
        fetchAllOrders()
      }
    } catch (error) {
      toast.error("Failed to update status")
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [token])

  /* =======================
     AG GRID COLUMN DEFINITIONS
     ======================= */
  const columnDefs = useMemo(() => [
    {
      headerName: "S.No",
      valueGetter: params => params.node.rowIndex + 1,
      width: 80,
      sortable: false,
      filter: false
    },
    {
      headerName: "Customer",
      valueGetter: params =>
        `${params.data.address.firstName} ${params.data.address.lastName}`,
      filter: true
    },
    {
      headerName: "Items",
      valueGetter: params =>
        params.data.items
          .map(i => `${i.name} x ${i.quantity} (${i.size}kg)`)
          .join(", "),
      flex: 2
    },
    {
      headerName: "Amount",
      valueGetter: params => `${currency} ${params.data.amount}`,
      filter: 'agNumberColumnFilter'
    },
    {
      headerName: "Phone",
      field: "address.phone"
    },
    {
      headerName: "Date",
      valueGetter: params =>
        new Date(params.data.date).toLocaleDateString(),
      filter: true,
      valueFormatter: params =>
        new Date(params.value).toLocaleDateString(),
      sort: "desc"
    },
    {
      headerName: "Status",
      cellRenderer: (props) => {
        const { data } = props

        const handleChange = async (e) => {
          props.context.statusHandler(data._id, e.target.value)
        }

        return (
          <select
            value={data.status}
            onChange={handleChange}
            className="border border-gray-300 p-1"
          >
            <option value="Order Placed">Order Placed</option>
            <option value="Packing">Packing</option>
            <option value="Shipped">Shipped</option>
            <option value="Out for delivery">Out for delivery</option>
            <option value="Delivered">Delivered</option>
          </select>
        )
      }
    }
  ], [])

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
    resizable: true
  }), [])

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Orders</h3>

      <div
        className="ag-theme-alpine"
        style={{ height: 600, width: '100%' }}
      >
        <AgGridReact
          rowData={orders}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          context={{ statusHandler }}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
    </div>
  )
}

export default Orders
