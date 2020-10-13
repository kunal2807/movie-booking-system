import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { list } from '../actions/productActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const HomeScreen = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(list())
    }, [dispatch])

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    return (
        <>
            <h1>Latest Products</h1>
            {loading ? <Loader /> : error ? <Message variant=' danger'>{error}</Message> :
                <Row>
                    {products.map(product => (
                        <Col sm={12} md={6} lg={4} key={product._id}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>}
        </>
    );
};

export default HomeScreen;