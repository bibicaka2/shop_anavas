import React, { Component } from 'react';


class SortStatus extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            key_status:""
        }
    }
    receive_status = (b) => {     
        const list = document.getElementsByClassName('li__type--product');   
        [...list].forEach(item => {     
          item.classList.remove('li__type--product-active');  
          if ( item.textContent === b ) {
            
            if(this.state.key_status===item.textContent)
            {
                item.classList.remove('li__type--product-active');
                this.setState({
                    key_status:""
                })
                this.props.receive_status("");
                
            }
            else
            {
                
                item.classList.add('li__type--product-active');
                this.setState({
                    key_status:b
                })
                this.props.receive_status(item.textContent);
            }
          }
        })     
        const list1 = document.getElementsByClassName('a__type--product');
        [...list1].forEach(item => {
          item.classList.remove('a__type--product-active');
          if ( item.textContent === b ) {
            if(this.state.key_status===item.textContent)
            {
                item.classList.remove('a__type--product-active');      
            }
            else
            {       
                item.classList.add('a__type--product-active');
                      
            }
           
        //    this.props.receive_form(b);
          }
        })    
        
    }
    render() {
        const { product_type_list } = this.props;
        var product_type_form = product_type_list.map((product_type, key) =>{
            if (product_type.type==='form') {
                return (
                    <li className="li__type--product" key={key} >
                        <a className="a a__type--product" onClick={()=>this.receive_status(product_type.name)}>{product_type.name}
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

export default SortStatus;


