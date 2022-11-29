import React from "react";
import '../styles/adminView.css'
import { Header } from "../components/header"
import { ProductsList } from "../components/productsList"

function AdminView() {

    return (
        <div>
            <Header />

            <div className="adminView">
                <ProductsList />
            </div>
        </div>
    );
}

export { AdminView }