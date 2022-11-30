import React from "react";
import { HeaderWaiter } from "../components/headerWaiter"
import { Order } from "../components/orders"
import '../styles/adminView.css'

function WaiterView() {
  return (
    <div>
      <HeaderWaiter />

      <div className="adminView">
        <Order />
      </div>
    </div>
  )
}

export { WaiterView }