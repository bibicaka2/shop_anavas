import React, { Component } from 'react';


class SortGender extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sort_gender:"TẤT CẢ"
        }
    }
    
    componentDidMount(){
            const list = document.getElementById('0');
             list.classList.add('li__hover-product-active')
    }
    receive_gender = (a) => {
            const list = document.getElementsByClassName('li__hover-product');
            [...list].forEach(item => {
              item.classList.remove('li__hover-product-active');
             
              if (item.textContent===a ) {
               
                if(item.textContent===this.state.sort_gender)
                {
                    item.classList.remove('li__hover-product-active');
                    this.setState({
                        sort_gender:""
                    })
                    this.props.receive_gender(a);
                }
                else{
                    item.classList.add('li__hover-product-active');
                    this.setState({
                        sort_gender:a
                    })
                    this.props.receive_gender(a);
                }
               

              }
            })     
    }
    render() {
        const {product_type_list}=this.props;
        var product_type_gender=product_type_list.map((product_type,key)=>{    
            if(product_type.type==='gender')
            {
                return (
                    <li className="li__hover-product" id={key} key={key}><a className="a nav-tabs  nav-tabs-a" onClick={() => this.receive_gender(product_type.name)}
                    >{product_type.name}</a></li>
                )
                
            }         
          return []; 
        });
        return (

            <div className="row left-type">
                <ul className="nav nav-tabs" role="tablist">
                    {/* {product_type_list.map((product_type,key)=>
                    (
                            <li className="li__hover-product" key={key}><a className="nav-tabs  nav-tabs-a" onClick={() => this.receive_gender(product_type.name)}
                             >{product_type.name}</a></li>
                    ))} */}

                    {product_type_gender}
                
                    {/* <li className=""><a className="nav-tabs nav-tabs-a" onClick={() => this.receive_gender('all')}
                    >TẤT CẢ</a></li>
                    <li className=""><a className="nav-tabs nav-tabs-a" onClick={() => this.receive_gender('men')}
                    >NAM</a></li>
                    <li className=""><a className="nav-tabs nav-tabs-a" onClick={() => this.receive_gender('women')}
                    >NỮ</a></li> */}
                </ul>
            </div>
        )
    }
}

export default SortGender;


