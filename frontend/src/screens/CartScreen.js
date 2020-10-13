import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';
import { Col, Row, ListGroup, Image, Button, Form, Card } from 'react-bootstrap'

const CartScreen = ({ match, location, history }) => {
    return (
        <div>
            {'Stuff goes here'}
        </div>
    );
};

export default CartScreen;