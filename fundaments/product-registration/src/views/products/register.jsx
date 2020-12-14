import React from 'react';
import ProductService from '../../app/productService'

const initState = {
    name: '',
    sku: '',
    description: '',
    price: 0,
    provider: '',
    success: false,
    errors: []
}

export default class RegisterProduct extends React.Component {

    constructor() {
        super()
        this.service = new ProductService();
    }

    state = initState

    onChange = (event) => {
        const value = event.target.value
        const nomeCampo = event.target.name

        this.setState({
            [nomeCampo]: value
        })
    }

    clear = (evente) => {
        this.setState(initState)
    }

    onSubmit = (event) => {

        const product = {
            name: this.state.name,
            sku: this.state.sku,
            description: this.state.description,
            price: this.state.price,
            provider: this.state.provider
        }
        try {
            this.service.salve(product)
            this.clear();
            this.setState({ success: true })
        } catch (error) {
            const wrong = error.errors
            console.log("erro: " + wrong);
            this.setState({ errors: wrong })
        }


    }

    render() {
        console.log("errors: ", this.state.errors)
        return (
            <>
                <div className="card">
                    <div className="card-header">Products</div>
                    <div className="card-body">

                        {this.state.success &&
                            <div class="alert alert-dismissible alert-success">
                                <button type="button" class="close" data-dismiss="alert">&times;</button>
                                <strong>Well done!</strong> successfully <a href="#" class="alert-link"></a>.
                            </div>
                        }
                        {this.state.errors.length > 0 &&

                            this.state.errors.map(msg => {
                                return (<div class="alert alert-dismissible alert-danger">
                                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                                    <strong>wrong!</strong> {msg} <a href="#" class="alert-link"></a>.
                                </div>)
                            })

                        }

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Name: *</label>
                                    <input onChange={this.onChange}
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        value={this.state.name} />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>SKU: *</label>
                                    <input onChange={this.onChange}
                                        type="text"
                                        name="sku"
                                        className="form-control"
                                        value={this.state.sku} />
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Description: </label>
                                    <textarea onChange={this.onChange}
                                        className="form-control"
                                        name="description"
                                        value={this.state.description} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Price: *</label>
                                    <input onChange={this.onChange}
                                        type="text"
                                        name="price"
                                        className="form-control"
                                        value={this.state.price} />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>provider: *</label>
                                    <input onChange={this.onChange}
                                        type="text"
                                        className="form-control"
                                        name="provider"
                                        value={this.state.provider} />
                                </div>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-1">
                                <button onClick={this.onSubmit} className="btn btn-success">Save</button>
                            </div>
                            <div className="col-md-1">
                                <button onClick={this.clear} className="btn btn-primary" >Limpar</button>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
    }

}