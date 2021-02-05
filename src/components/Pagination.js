import React, { Component } from 'react'


export class Pagination extends Component {
   
    render() {
        // const {postsPerPage,totalPosts,paginate,nextPage,prevPage}=this.props;
        const {postsPerPage,totalPosts,paginate}=this.props;
        const PageNumbers=[];
        for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
            PageNumbers.push(i)
        }
        var a= "pagination--active";
      
        return (
            <div>
                <ul className="pagination pagination__justify--content--center">
                    {PageNumbers.map(num=>(
                        <li className="pagination__page--item" key={num}>
                            <a onClick={()=>paginate(num)} href="/#" className="pagination__page--link  ">{num}</a>
                        </li>
                    ))}
                    {/* <li className="page-item">
                        <a className="page-link"onClick={()=>nextPage()} href="/#">Next</a>
                    </li> */}
                </ul>
            </div>
        )
    }
}



export default Pagination;
