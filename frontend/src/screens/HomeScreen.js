import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { list } from '../actions/productActions';

const HomeScreen = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(list())
    }, [dispatch])

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList
    console.log(productList)
    return (
        <>
            <h1>Latest Products</h1>
            {loading ? <h2>Loading...</h2> : error ? <h3>{error}</h3> :
                <Row>
                    {products.map(product => (
                        <Col sm={12} md={6} lg={4} key={product._id}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>}
                dfkgdjfg
        </>
    );
};

export default HomeScreen;