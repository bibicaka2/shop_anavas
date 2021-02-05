import React, { Component } from 'react';

const a=[];
const list_default=[];
class A_ProductsAction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: '',
            name: '',
            img: '',
            status_id: '',
            description: '',
            product_type_id: '',
            gender:'',
            color: '',
            price_origin: '',
            price_after_sale_off: '',
            // sale_id:'',          
            test: 0,
            product_size_list:[]
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        // this.setState(prevState=>({
        //     dulieu: prevState.dulieu.map(eachItem=>eachItem.size==='size'?{...eachItem,inventory:value}:'')
        // }))
        // if(target.name===`test`)
        // {
        //     this.setState({
        //         [name]: value
        //     });
           
        // }
        // else{
        if(target.id)
        {  
            console.log(target.id);
           
            var id=target.id;
            var size="size"+((parseInt(id)+1)/2);
            var inventory="inventory"+((parseInt(id)+1)/2);      
       
            if(target.name===size)
            {
                console.log(parseInt(id)-1);
                a[parseInt(id)-1]=value;
            }
            if(target.name===inventory)
            {
                a[parseInt(id)]=value;
                var d=a[parseInt(id)-1];
                var e=value;   
            }
        }

        //}
       
        else{
            this.setState({
                [name]: value
            });
            console.log(this.state.product_size_list)
        }
    };
    add_list_product_size(a){
      
       // var length=a.length;
        // if(length>this.state.test && this.state.test>0)
        // {
        //         length=this.state.test;
                
        // }
    
        for(var i=0;i<parseInt(this.state.test);i++)
        {   
            this.state.product_size_list.push({'size_id':a[2*i],'inventory':a[2*i+1]});    
        }   
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.add_list_product_size(a);
        
        console.log(this.state)
        if (this.state._id === '') {
            console.log(a);
            console.log('create')
            this.props.actAddToProduct(this.state);
        }
        else {
            console.log('update')
            this.props.actUpdateToProduct(this.state);
        }
       
        var { history } = this.props;
      history.goBack();

    };

    // actAddToProduct=(product)=>{
    //    this.props.actAddToProduct(product);
    // }
  
    componentWillReceiveProps(nextprops) {
        var { product } = nextprops;
       console.log(product._id)
        if(product._id !=='')
        { 
           list_default.splice(0,list_default.length);
            product.product_size_list.map((product_size,index)=>{
              
                   list_default.push(product_size);
                    a[2*index]=product_size.size_id;
                    a[2*index+1]=product_size.inventory;
            })
        }
        console.log(list_default);
        // product.product_size_list.map(product_size=>{
        //     this.state.product_size_list.push(product_size);  
        // })
        if(product.product_size_list.length>0)
        {
            console.log('2');
            this.setState({
                product_size_list:[],
                test:parseInt(product.product_size_list.length)
            })
        }
        this.setState({
            _id: product._id,
            name: product.name,
            img: product.img,
            price: product.price,
            status_id: product.status_id,
            product_type_id:product.product_type_id,
            color: product.color,
            description: product.description,
            inventory: product.inventory,
            rating: product.rating,
            // sale_id:product.sale_id,
            gender:product.gender,
            price_origin: product.price_origin,
            price_after_sale_off: product.price_after_sale_off
        })
    }
   
    render() {
        var { name, img,product_type_id, status_id,test,sale_id, description, inventory, gender,rating, color, price_origin, price_after_sale_off ,product_size_list, test} = this.state;
        let products_size_list = [];
       
        
        for (var i = 1; i <= test; i++) {
            products_size_list.push(
                <div key={i}>
                    <div className="form-group">
                    <label > kích cỡ {i}</label>
                        <div className="col-md-10">
                            <input id={2*i-1}  className="form-control text-box single-line ab" type="text" name={`size${i}`} onChange={this.onChange} defaultValue={list_default[i-1]?list_default[i-1].size_id:''}/>
                            <span className="field-validation-valid text-danger" ></span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label >số lượng </label>
                        <div className="col-md-10">
                            <input id={2*i-1} className="form-control text-box single-line" type="text" name={`inventory${i}`} onChange={this.onChange} defaultValue={list_default[i-1]?list_default[i-1].inventory:''} />
                            <span className="field-validation-valid text-danger" ></span>
                        </div>
                    </div>
                </div>
            );
        }
        return (

            <div className="page-container">
                <header className="header-desktop">
                    <div className="section__content section__content--p30">
                        <div className="container-fluid">
                            <div className="header-wrap">

                            </div>
                        </div>
                    </div>
                </header>
                <div className="main-content">
                    <div className="section__content section__content--p30">
                        <div className="container-fluid">
                            <h2>Thông tin sản phẩm</h2> <br />

                            <form onSubmit={this.onSubmit}>
                                <div>
                                    <a href="/products">Quay Lại</a>
                                </div>
                                <input name="__RequestVerificationToken" type="hidden" />
                                <div className="form-horizontal">
                                    <h4 className="text-center">Thêm sản phẩm </h4>
                                    <hr />
                                    <div className="form-group">
                                        <label >Tên sản phẩm</label>
                                        <div className="col-md-10">
                                            <input name="name" onChange={this.onChange} value={name} className="form-control text-box single-line" type="text"  value={name}/>
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group" >
                                        <label >Hình ảnh (Vui lòng nhập link dẫn)</label>
                                        <div className="col-md-10">
                                            <input className="form-control text-box single-line" type="text" name="img" onChange={this.onChange} value={img} />
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >Loại sản phẩm</label>
                                        <div className="col-md-10">
                                            <input className="form-control text-box single-line" type="text" name="product_type_id" onChange={this.onChange} value={product_type_id} />
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >Kiểu sản phẩm</label>
                                        <div className="col-md-10">
                                            <input className="form-control text-box single-line" type="text" name="status_id" onChange={this.onChange}  value={status_id} />
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >Giá gốc</label>
                                        <div className="col-md-10">
                                            <input className="form-control text-box single-line" type="number" name="price_origin" onChange={this.onChange} value={price_origin} />
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >Giá sau khuyến mãi</label>
                                        <div className="col-md-10">
                                            <input className="form-control text-box single-line" type="number" name="price_after_sale_off" onChange={this.onChange} value={price_after_sale_off} />
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >Mô tả</label>
                                        <div className="col-md-10">
                                            <textarea
                                                name="description"
                                                className="form-control"
                                                rows="3"
                                                onChange={this.onChange}
                                                value={description}
                                            ></textarea>
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    {/* <div className="form-group">
                                        <label >Sale</label>
                                        <div className="col-md-10">
                                            <input className="form-control text-box single-line" type="number" name="sale_id" onChange={this.onChange} value={sale_id} />
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div> */}
                                    
                                    <div className="form-group">
                                        <label >số lượng từng size</label>
                                        <div className="col-md-10">
                                            <input className="form-control text-box single-line" type="text" name="test" onChange={this.onChange} value={test}  />
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>


                                    {products_size_list}
                                    <div className="form-group">
                                        <label >Color</label>
                                        <div className="col-md-10">
                                            <input className="form-control text-box single-line" type="text" name="color" onChange={this.onChange} value={color} />
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >Gender</label>
                                        <div className="col-md-10">
                                            <input className="form-control text-box single-line" type="text" name="gender" onChange={this.onChange} value={gender} />
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-offset-2 col-md-10">
                                            <button type="submit" className="btn btn-default btn__custom-admin">Thêm</button>
                                        </div>
                                    </div>
                                </div>
                            </form>


                        </div>


                    </div>
                </div>
            </div>
        )

    }

}


export default A_ProductsAction;

