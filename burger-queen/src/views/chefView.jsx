import React, { useState } from "react";
import { HeaderChef } from "../components/headerChef";
import { OrderStatusChef } from "../components/orderStatusChef"

function ChefView() {
  return (
    <div>
      <HeaderChef />

      <div>
        <OrderStatusChef />
      </div>
    </div>
  )
}

export { ChefView }