import { render } from '@testing-library/react'
import React from 'react'

export default class Query extends React.Component {
    state = {
        products: []
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
                            this.state.products.map(product => {
                                return
                                <tr>
                                    <th>product.name</th>
                                    <th>product.sku</th>
                                    <th>product.price</th>
                                    <th>product.provider</th>
                                    <th></th>
                                </tr>
                            })
                        }
                    </tbody>

                </table>



            </div>

        </>)
    }

}