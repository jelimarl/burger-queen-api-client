import React, { useState, useEffect } from "react";
import { getOrders } from "../utils/petitions";
import { OrderCardWaiter } from "../components/orderCardWaiter";
import { OrderDeliveredCard } from "../components/orderDeliveredCard";
import { HeaderWaiter } from "../components/headerWaiter";

function WaiterViewStatusOrders() {
  const [orders, setOrders] = useState([])
  const [updateOrders, setUpdateOrders] = useState(false)

  useEffect(() => {

    getOrders()
      .then((response) => {
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

  if (readyOrders.length !== 0) {
    return (
      <div>
        <HeaderWaiter />

        <section className="pending-ready">
          <section className="pending">
            <h2 className="pending-title">Pedidos Listos</h2>
            {
              readyOrders.map((order, index) => {
                return (

                  <OrderCardWaiter
                    order={order}
                    key={index}
                    status="Listo"
                    setUpdateOrders={setUpdateOrders}
                    updateOrders={updateOrders}
                  />
                )
              })
            }
          </section>

          <section className="pending">
            <h2 className="pending-title">Pedidos Entregados</h2>
            {
              deliveredOrders.map((order, index) => {
                return (

                  <OrderDeliveredCard
                    order={order}
                    key={index}
                    status="Entregado"
                  />
                )
              })
            }
          </section>
        </section>
      </div>
    )
  }
  else {
    return (
      <div>
        <HeaderWaiter />

        <section className="only-ready">
          <h2 className="pending-title">Solo hay Pedidos Entregados</h2>
          <div className="grid-container-orders">
            {
              deliveredOrders.map((order, index) => {
                return (

                  <OrderDeliveredCard
                    order={order}
                    key={index}
                    status="Entregado"
                  />
                )
              })
            }
          </div>
        </section>
      </div>
    )
  }
}

export { WaiterViewStatusOrders }