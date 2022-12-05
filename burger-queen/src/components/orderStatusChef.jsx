import React, { useState } from "react";
import { useEffect } from "react";
import { getOrders } from "../utils/petitions";
import { OrderCard } from "./orderCard"

function OrderStatusChef() {

  const [orders, setOrders] = useState([])

  useEffect(() => {

    getOrders()
      .then((response) => {
        console.log(response)
        setOrders(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

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

  if (pendingOrders) {
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
                  />
                </div>
              )
            })
          }
        </section>

        <section className="ready">

        </section>
      </section>
    )
  }
}

export { OrderStatusChef }