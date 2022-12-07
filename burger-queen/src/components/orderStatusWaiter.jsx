import React, { useState } from "react";
import { useEffect } from "react";
import { getOrders } from "../utils/petitions";
import { OrderCardWaiter } from "./orderCardWaiter";
import { OrderDeliveredCard } from "./orderDeliveredCard";

function OrderStatusWaiter() {
  const [orders, setOrders] = useState([])
  const [updateOrders, setUpdateOrders] = useState(false)

  useEffect(() => {

    getOrders()
      .then((response) => {
        console.log(response.data)
        setOrders(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [updateOrders])

  const readyOrders = orders.filter((order) => {
    if (order.status === "ready") {
      return true
    }
    return false
  })

  const deliveredOrders = orders.filter((order) => {
    if (order.status === "delivered") {
      return true
    }
    return false
  })

  console.log('ready', readyOrders)
  console.log('delivered', deliveredOrders)

  if (readyOrders.length !== 0) {
    return (
      <section className="pending-ready">
        <section className="pending">
          {
            readyOrders.map((order, index) => {
              return (
                <div key={index}>
                  <OrderCardWaiter
                    order={order}
                    status="Listo"
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
            deliveredOrders.map((order, index) => {
              return (
                <div key={index}>
                  <OrderDeliveredCard
                    order={order}
                    status="Entregado"
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
          deliveredOrders.map((order, index) => {
            return (
              <div key={index}>
                <OrderDeliveredCard
                  order={order}
                  status="Entregado"
                />
              </div>
            )
          })
        }
      </section>
    )
  }
}

export { OrderStatusWaiter }