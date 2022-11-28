import React from "react";
import '../styles/adminView.css'
import { Header } from "../components/header"
import { ProductList } from "../components/productList"

function AdminView() {

    return (
        <div>
            <Header />

            <div className="adminView">
                <ProductList />
            </div>
        </div>
    );
}

export { AdminView }