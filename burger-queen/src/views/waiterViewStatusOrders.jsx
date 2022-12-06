import React from "react";
import { HeaderWaiter } from "../components/headerWaiter";
import { OrderStatusWaiter } from "../components/orderStatusWaiter";

function WaiterViewStatusOrders() {
  return (
    <div>
      <HeaderWaiter />
      <div>
        <OrderStatusWaiter />
      </div>
    </div>
  )
}

export { WaiterViewStatusOrders }