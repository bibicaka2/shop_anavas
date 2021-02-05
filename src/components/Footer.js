import React, { Component } from 'react';
import './../App.css';
class Footer extends Component {

    render() {
        return (
            // <div className="footer container-fluid hidden-xs hidden-sm">
            <div >
  
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Phần mềm đã đáp ứng được phần nào nhu cầu của các cửa hàng quần áo trong việc kinh doanh, tuy nhiên trong thời gian tới cần tích hợp được nhiều công nghệ hơn, cải tiến được nhiều chức năng hơn để đáp ứng được nhiều nhu cầu cần thiết 
</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="https://reactjs.org/">Reactjs</a></li>
              <li><a href="https://www.mongodb.com/cloud/atlas">MongoDB</a></li>
              <li><a href="https://www.php.net/">PHP</a></li>
      
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="https://www.facebook.com/gnuhchnyuh">About Us</a></li>
              <li><a href="https://www.facebook.com/gnuhchnyuh">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr></hr>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2020 Project Clothes by  {` `} 
         <a href="https://www.facebook.com/tien.tranhung.73"> {` Hung Tien`}</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
                {/* Tam thoi */}


                
                {/* <div className="row">
                    <div className="col-md-3 sec-search">
                        <div className="row center">
                            <img src="file:///C:/Users/Admin/Desktop/TLCN_PROJECT/fONT/project3_update/img/computer-1867758_1920-min.jpg" />
                        </div>
                        <div className="row">
                            <a className="btn btn-search-shop" href="https://ananas.vn/stores">TÌM CỬA HÀNG</a>
                        </div>
                    </div>

                    <div className="col-md-9 sec-cont">
                        <div className="row sec-cont-menu">
                            <div className="col-md-3">
                                <a href="https://ananas.vn/#"><h4>SẢN PHẨM</h4></a>
                                <ul>
                                    <li><a href="/product-list?gender=men&amp;category=shoes&amp;attribute=">Giày Nam</a></li>
                                    <li><a href="/product-list?gender=women&amp;category=shoes&amp;attribute=">Giày Nữ</a></li>
                                    <li><a href="/product-list?gender=men,women&amp;category=top,bottom,accessories&amp;attribute=">Thời trang &amp; Phụ kiện</a></li>
                                    <li><a href="/promotion/clearance-sale/">Sale-off</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <a href="https://ananas.vn/#"><h4>VỀ CÔNG TY</h4></a>
                                <ul>
                                    <li><a href="/career">Dứa tuyển dụng</a></li>
                                    <li><a href="/franchise-policy">Liên hệ nhượng quyền</a></li>
                                    <li><a href="/comming-soon">Về Ananas</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <a href="https://ananas.vn/#"><h4>HỖ TRỢ</h4></a>
                                <ul>
                                    <li><a href="/faqs">FAQs</a></li>
                                    <li><a href="/privacy">Bảo mật thông tin</a></li>
                                    <li><a href="/policy">Chính sách chung</a></li>
                                    <li><a href="/search-order/">Tra cứu đơn hàng</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <a href="https://ananas.vn/#"><h4>LIÊN HỆ</h4></a>
                                <ul>
                                    <li><a href="/comming-soon">Email góp ý</a></li>
                                    <li><a href="">Hotline</a></li>
                                    <li><a href="">0963 429 749</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-3">
                                <h4>ANANAS SOCIAL</h4>
                                <a href="https://www.facebook.com/Ananas.vietnam/"><img src="/wp-content/themes/ananas/fe-assets/images/svg/icon_facebook.svg" /></a>&nbsp;
                            <a href="https://www.instagram.com/ananasvn/"><img src="/wp-content/themes/ananas/fe-assets/images/svg/icon_instagram.svg" /></a>&nbsp;
                            <a href="https://www.youtube.com/discoveryou"><img src="/wp-content/themes/ananas/fe-assets/images/svg/icon_youtube.svg" /></a>
                            </div>
                            <div className="col-md-3">
                                <h4>ĐĂNG KÝ NHẬN MAIL</h4>
                                <div className="form-group subscribe-group">
                                    <input type="email" className="form-control inputReceiveMail" id="inputRecieveMail"/>
                                        <a href="javascript:void(0)" className="subscribe"><img src="/wp-content/themes/ananas/fe-assets/images/arrow_right.jpg" /></a>
                            </div>
                                </div>
                                <div className="col-md-6 logo-footer">
                                    <a href="https://ananas.vn"><img src="/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Footer.svg" /></a>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-3 icon-bct">
                                    <a href="http://online.gov.vn/Home/WebDetails/61921"><img src="/wp-content/themes/ananas/fe-assets/images/icon_bocongthuong.png" /></a>
                                </div>
                                <div className="col-md-9 copyright">
                                    HAZZA JSC | Mã Số Thuế: 0315225920 
                             Địa Chỉ: 118/28 đường Nguyễn Văn Hưởng, Phường Thảo Điền, Quận 2, Hồ Chí Minh, Vietnam.
                            Copyright © 2020 Ananas. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
     */}
        </div >

        )
    }
}

export default Footer;


