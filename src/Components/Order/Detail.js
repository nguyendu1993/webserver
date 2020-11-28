import React, {useState} from 'react';
import {MDBDataTable} from 'mdbreact';
import {useList} from 'react-firebase-hooks/database';
import {Button} from 'react-bootstrap';

const BillDetail = (props) => {
    console.log('===============Cart==============')
    console.log(props.location.state.cart);

    const[dataDetail,setDataDetail]=useState(props.location.state.cart);
        var items1= [];
      for (var i in dataDetail) {
      dataDetail[i].product.quantity = dataDetail[i].quantity;
      items1.push(dataDetail[i].product);
      console.log(items1, 'devdh');
    }
};


export default BillDetail;
