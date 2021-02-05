import React, { Component } from 'react';

class BillInfomationItem extends Component {

    render() {
      var {item}=this.props;

        return (
            <div>
                <li className="list-group-item text-1">
                    <span className="list-group-item__title-6 ">{item.product.name}</span>
                    <span className="list-group-item__title-6-1 ">{item.product.price_origin} VND</span>
                </li>
                <li className="list-group-item text-1-1">
                    <span className="list-group-item__title-6-2 title-6-2">size: {item.product.size}</span>
                    <span className="list-group-item__title-6-3 title-6-3">x {item.quantity}</span>
                </li>
            </div>
        )
    }
}
export default BillInfomationItem;


