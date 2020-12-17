import React from 'react'
import ProductService from '../../app/productService'
import {withRouter} from 'react-router-dom'

 class Query extends React.Component {

    state = {
        products: []
    }

    constructor() {
        super()
        this.service = new ProductService()
    }

    componentDidMount() {
        const allProducts = this.service.getProducts();
        console.log("todos os produots: " + allProducts)
        this.setState({ products: allProducts })

    }

    toEdit = (sku)=>{
        console.log('sku to edit: ' , sku)
        this.props.history.push(`/register-products/${sku}`)
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
                                        <th>
                                            <button onClick={()=>this.toEdit(product.sku)} className="btn btn-primary">To edit</button>
                                            <button className="btn btn-danger">Delete</button>

                                        </th>
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

export default withRouter(Query)