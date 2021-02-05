import React, { Component } from 'react';
import Pagination from '../components/Pagination';
import callApi from './../utils/apiCaller';
import { connect } from 'react-redux';
import { actFetchProducts } from './../actions/index';
import ProductsContainer from './ProductsContainer';
import ProductListContainer from './ProductListContainer';
import ProductsActionContainer from './ProductsActionContainer';
import A_ProductListContainer from './Admin/A_ProductListContainer';
import A_ProductSizeListContainer from './Admin/A_ProductSize/A_ProductSizeListContainer';


class PaginationContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      loading: false,
      currentPage: 1,
      postsPerPage: 15,
    }
  }
  UNSAFE_componentWillMount() {
    callApi('Products/list', 'POST', null).then(res => {
      if(res!=null)
      {
         this.props.fetchAllProducts(res.data)
        // console.log(res.data)
        this.setState({ posts: res.data })
      }
      else{
        return [];
      }

    });
  }
  callApiAfterDelete = () => {
    callApi('Products/list', 'POST', null).then(res => {
      this.props.fetchAllProducts(res.data)
      this.setState({ posts: res.data })
    });
  }

  render() {
    var { products } = this.props;
    return (
      <div>
        {this.showPage(products)}
      </div>

    )
  }

  check = (currentPosts, loading,index) => {
    console.log('sale_off')
    if (this.props.tag === 'HomePage') {
      return (
        <ProductsContainer products={currentPosts} loading={loading} />
      )
    }
    if (this.props.tag === 'ProductListPage') {
      return (

        <div className="row_a">
          <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
            <ProductListContainer products={currentPosts} loading={loading} history={this.props.history} callApiAfterDelete={this.callApiAfterDelete} index={index} />
          </div>
        </div>

      )
    }
    if (this.props.tag === 'Admin') {
      return (
       
        <div class="page-container">
        <header class="header-desktop">
            <div class="section__content section__content--p30">
                <div class="container-fluid">
                    <div class="header-wrap">
                    </div>
                </div>
            </div>
        </header>
        <div class="main-content">
            <div class="section__content section__content--p30">
                <div class="container-fluid">
                   
                </div>
            </div>
        </div>
    </div>

      )
    }
    if (this.props.tag === 'A_Product') {

      return (
       
        <div className="row_a">
            < A_ProductListContainer products={currentPosts} loading={loading} history={this.props.history} callApiAfterDelete={this.callApiAfterDelete} index={index} />
        </div>

      )
    }
    if (this.props.tag === 'A_ProductSize') {

      return (
       
        <div className="row_a">
            <A_ProductSizeListContainer products={currentPosts} loading={loading} history={this.props.history} callApiAfterDelete={this.callApiAfterDelete} index={index} />
        </div>

      )
    }

    if (this.props.tag === 'ProductsActionContainer') {
      return (
        <ProductsActionContainer products={currentPosts} loading={loading} /> 
      )
    }
    
  }
  showPage = (products) => {
    const { currentPage, postsPerPage, posts, loading } = this.state;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = pageNum => this.setState({ currentPage: pageNum });
    const nextPage = () => this.setState({ currentPage: currentPage + 1 });
    const prevPage = () => this.setState({ currentPage: currentPage + 1 });
 
    return (
      <div>
        {/* <h1 className="my-5 text-primary text-center">React Pagination</h1> */}
        { this.check(currentPosts, loading,indexOfFirstPost)}
        {/* <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} /> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: (products) => {
      console.log('12312')
      dispatch(actFetchProducts(products));
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PaginationContainer);

