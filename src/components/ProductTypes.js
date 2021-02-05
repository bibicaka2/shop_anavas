import React, { Component } from 'react';
import './../App.css';
import SortGender from '../components/Sort/SortGender';
import SortStatus from '../components/Sort/SortStatus';
import SortMoney from '../components/Sort/SortMoney';
class ProductTypes extends Component {
  
    
    render() {
        const { product_type_list } = this.props;
       
        return (
            <div >
                <div className="">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 prd1-left  hidden-xs hidden-sm">
                        <div className="row left-type">
                            <ul className="nav nav-tabs" role="tablist">
                                <SortGender product_type_list={product_type_list} receive_gender={this.props.receive_gender}> </SortGender>
                            </ul>
                        </div>
                        <div className="row left-divider"></div>
                        <div className="row left-type-item">
                            <div className="tab-content">
                                <SortStatus product_type_list={product_type_list} receive_status={this.props.receive_status} ></SortStatus>      
                            </div>
                        </div>
                        <div className="row left-divider"></div>

                        <div className="row left-tree">

                            <ul className="nav" >
                                <li className="first-lvl"> <label label-default="" className="tree-toggle nav-header orange">Giá Tiền <span
                                    className="caret caret-active"></span></label>
                                    <ul className="nav tree">
                                        <SortMoney product_type_list={product_type_list} receive_money={this.props.receive_money}>     </SortMoney>
                                        {/* <li className="li__item"><label className="lb__item"> <input name="cbStatus" className="cb-item" type="checkbox" value="limited-edition"
                                            hidden />{`<200000VNĐ`} <span className="glyphicon"></span> </label></li>
                                        <li className="li__item"><label className="lb__item"> <input name="cbStatus" className="cb-item" type="checkbox" value="online-only"
                                            hidden /> {`<400000VNĐ`}<span className="glyphicon"></span> </label></li>
                                        <li className="li__item"><label className="lb__item"> <input name="cbStatus" className="cb-item" type="checkbox" value="sale-off"
                                            hidden /> {`<500000VNĐ`} <span className="glyphicon"></span> </label></li> */}
                                     
                                    </ul>
                                </li>
                                {/* <li className="nav-divider"></li>
                                <li className="first-lvl"> <label label-default="" className="tree-toggle nav-header orange">KIỂU DÁNG <span
                                    className="caret caret-active"></span></label>
                                    <ul className="nav tree">
                                        <li className="li__item"><label className=" lb__item lb__cb--checked"> <input name="cbStatus" className="cb-item" type="checkbox" value="low-top" hidden />Low
                                            Top <span className="glyphicon"></span> </label></li>
                                        <li className="li__item"><label className=" lb__item lb__cb--checked"> <input name="cbStatus" className="cb-item" type="checkbox" value="high-top"
                                            hidden />High Top <span className="glyphicon"></span> </label></li>
                                        <li className="li__item"><label className=" lb__item lb__cb--checked"> <input name="cbStatus" className="cb-item" type="checkbox" value="slip-on"
                                            hidden />Slip-on <span className="glyphicon"></span> </label></li>
                                    </ul>
                                </li> */}
                                <li className="nav-divider"></li>
                            </ul>
                        </div>
               
                    </div>
                </div>
            </div>

        )
    }
}

export default ProductTypes;


