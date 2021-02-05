import React, { Component } from 'react';
import Product from './../components/Product';
import Products from './../components/Products';
export class Posts extends Component {
    render() {
        const { posts, loading } = this.props;
        console.log('123');
        if (loading) {
            return <h2>loading....</h2>
        }
        return (

            <Products>
                {
                    posts.map(post => (
                        <Product key={post._id} product={post}></Product>
                    ))}
            </Products>

        )
    }
}
export default Posts;