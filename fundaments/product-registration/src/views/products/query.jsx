import React from 'react'
import ProductService from '../../app/productService'

export default class Query extends React.Component {

    state = {
        products: []
    }

    constructor() {
        super()
        this.service = new ProductService()
    }

    componentDidMount() {
        const allProducts = this.service.getProducts();
        console.log("todos os produots: "+ allProducts)
        this.setState({ products: allProducts })

    }

    render() {
        return (<>
            <div className="card-header">Query products</div>
            <div className="card-body">

                <table className=" table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>SKU</th>
                            <th>price</th>
                            <th>Provider</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                           this.state.products.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{product.name}</th>
                                        <th>{product.sku}</th>
                                        <th>{product.price}</th>
                                        <th>{product.provider}</th>
                                        <th></th>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>

                </table>



            </div>

        </>)
    }

}