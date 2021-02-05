import React, { Component } from 'react';


class SortMoney extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            key_money:""
        }
    }
    receive_money = (b) => {     
        const list = document.getElementsByClassName('li__type--product-1');   
        [...list].forEach(item => {     
          item.classList.remove('li__type--product-1-active');  
          if ( item.textContent === b ) {
            
            if(this.state.key_money===item.textContent)
            {
                item.classList.remove('li__type--product-1-active');
                this.setState({
                    key_money:""
                })
                this.props.receive_money("");
                
            }
            else
            {
                
                item.classList.add('li__type--product-1-active');
                this.setState({
                    key_money:b
                })
                this.props.receive_money(item.textContent);
            }
          }
        })     
        const list1 = document.getElementsByClassName('a__type--product-1');
        [...list1].forEach(item => {
          item.classList.remove('a__type--product-1-active');
          if ( item.textContent === b ) {
            if(this.state.key_money===item.textContent)
            {
                item.classList.remove('a__type--product-1-active');      
            }
            else
            {       
                item.classList.add('a__type--product-1-active');
                      
            }
           
        //    this.props.receive_form(b);
          }
        })    
        
    }
    render() {
        const { product_type_list } = this.props;
        var product_type_form = product_type_list.map((product_type, key) =>{
            if (product_type.type==='money') {
                return (
                    <li className="li__type--product-1" key={key} >
                      
                         <a className="a a__type--product-1" onClick={()=>this.receive_money(`<${product_type.name}`)}>{`<${product_type.name}`}
                        </a>
                    </li>
                )

            }
            return [];
        });

        return (
            <div className="tab-pane active">
                <ul className="nav nav-pills nav-stacked">

                    {product_type_form}

                </ul>
            </div>
            // <li className="li__type--product" >
            //     <a className="a__type--product">Nửa trên <span className="glyphicon"></span>
            //     </a>
            // </li>
        )
    }
}

export default SortMoney;


