import React, { useState, useEffect } from "react";
import { getOrders } from "../utils/petitions";
import { OrderCard } from "../components/orderCard"
import { OrderReadyCard } from "../components/orderReadyCard"
import '../styles/chefView.css'
import { HeaderChef } from "../components/headerChef";

function ChefView() {

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

  if (pendingOrders.length !== 0) {
    return (
      <div>
        <HeaderChef />

        <section className="pending-ready">
          <section className="pending">
            <h2 className="pending-title">Pedidos Pendientes</h2>
            {
              pendingOrders.map((order, index) => {
                return (

                  <OrderCard
                    order={order}
                    key={index}
                    status="Pendiente"
                    setUpdateOrders={setUpdateOrders}
                    updateOrders={updateOrders}
                  />
                )
              })
            }
          </section>

          <section className="pending">
            <h2 className="pending-title">Pedidos Listos</h2>
            {
              readyOrders.map((order, index) => {
                return (

                  <OrderReadyCard
                    order={order}
                    key={index}
                    status="Listo"
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
        <HeaderChef />

        <section className="only-ready">
          <h2 className="pending-title">Solo hay Pedidos Listos</h2>
          <div className="grid-container-orders">
            {
              readyOrders.map((order, index) => {
                return (

                  <OrderReadyCard
                    order={order}
                    key={index}
                    status="Listo"
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

export { ChefView }