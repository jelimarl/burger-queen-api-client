import React, { useState } from "react";
import { useEffect } from "react";
import { getOrders } from "../utils/petitions";
import { OrderCard } from "./orderCard"
import { OrderReadyCard } from "./orderReadyCard"
import '../styles/orderStatusChef.css'

function OrderStatusChef() {

  const [orders, setOrders] = useState([])

  const [updateOrders, setUpdateOrders] = useState(false)

  useEffect(() => {

    getOrders()
      .then((response) => {
        console.log(response)
        setOrders(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [updateOrders])

  console.log(orders)

  const pendingOrders = orders.filter((order) => {
    if (order.status === "pending") {
      return true
    }
    return false
  })

  const readyOrders = orders.filter((order) => {
    if (order.status === "ready") {
      return true
    }
    return false
  })

  console.log('pending', pendingOrders)
  console.log('ready', readyOrders)

  if (pendingOrders.length !== 0) {
    return (
      <section className="pending-ready">
        <section className="pending">
          {
            pendingOrders.map((order, index) => {
              return (
                <div key={index}>
                  <OrderCard
                    order={order}
                    status="Pendiente"
                    setUpdateOrders={setUpdateOrders}
                    updateOrders={updateOrders}
                  />
                </div>
              )
            })
          }
        </section>

        <section className="ready">
          {
            readyOrders.map((order, index) => {
              return (
                <div key={index}>
                  <OrderReadyCard
                    order={order}
                    status="Listo"
                  />
                </div>
              )
            })
          }
        </section>
      </section>
    )
  }
  else {
    return (
      <section className="ready">
        {
          readyOrders.map((order, index) => {
            return (
              <div key={index}>
                <OrderReadyCard
                  order={order}
                  status="Listo"
                />
              </div>
            )
          })
        }
      </section>
    )
  }
}

export { OrderStatusChef }