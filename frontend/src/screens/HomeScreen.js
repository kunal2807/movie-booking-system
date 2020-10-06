import React from 'react';
import { Col, Row } from 'react-bootstrap';
import products from '../products'
import Product from '../components/Product'

const HomeScreen = () => {
    console.log(products)
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col sm={12} md={6} lg={4} key={product._id}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomeScreen;