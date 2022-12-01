import React from "react";
import { HeaderWaiter } from "../components/headerWaiter"
import { Order } from "../components/order"


function WaiterView() {
  return (
    <div>
      <HeaderWaiter />

      <div className="waiterView">
        <Order />
      </div>
    </div>
  )
}

export { WaiterView }