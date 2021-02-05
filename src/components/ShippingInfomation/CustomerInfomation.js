import React, { Component } from 'react';


class CustomerInfomation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customer_name: '',
            customer_phone: '',
            customer_email: '',
            customer_address: '',
        }
    }
    handleChange = (e) => {
        var target = e.target;
        var name = target.name;

        var value = target.value;
        this.setState({
            [name]: value
        });
        this.abc();
    }
    abc() {
        this.props.receive_info_customer(this.state);
    }
    render() {
        return (
            <form id="orderForm">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 main-cart-left__title-1-1">THÔNG TIN GIAO HÀNG</div>
                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 main-cart-left__form-group">
                    <div className="has-feedback">
                        <input type="text" onChange={this.handleChange} className=" main-cart-left__form-control form-control" id="inputSuccess2" placeholder="HỌ TÊN" name="customer_name" />
                        <span className="" aria-hidden="true"></span>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 main-cart-left__form-group">
                    <div className="has-feedback">
                        <input type="text" onChange={this.handleChange} className=" main-cart-left__form-control form-control" id="inputSuccess2" placeholder="Số điện thoại" name="customer_phone" />
                        <span className="" aria-hidden="true"></span>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 main-cart-left__form-group">
                    <div className="has-feedback">
                        <input type="text" onChange={this.handleChange} className=" main-cart-left__form-control form-control" id="inputSuccess2" placeholder="Email" name="customer_email" />
                        <span className="" aria-hidden="true"></span>

                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 main-cart-left__form-group">
                    <div className="has-feedback">
                        <input type="text" onChange={this.handleChange} className=" main-cart-left__form-control form-control" id="inputError2" placeholder="Địa chỉ" name="customer_address" />
                        <span className="" aria-hidden="true"></span>

                    </div>
                </div>

                {/* <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 main-cart-left__form-group form-group location" id="list-city">
                    <select className="main-cart-left__form-control form-control" id="customerCity" name="customerCity">
                        <option value="0">Tỉnh/ Thành Phố</option>
                        <option value="5646">An Giang</option><option value="5986">Bà Rịa – Vũng Tàu</option><option value="5768">Bắc Giang</option><option value="6189">Bắc Kạn</option><option value="6394">Bạc Liêu</option><option value="6224">Bắc Ninh</option><option value="6034">Bến Tre</option><option value="5779">Bình Định</option><option value="5943">Bình Dương</option><option value="5791">Bình Phước</option><option value="5803">Bình Thuận</option><option value="5814">Cà Mau</option><option value="6089">Cần Thơ</option><option value="6198">Cao Bằng</option><option value="6012">Đà Nẵng</option><option value="5824">Đắk Lắk</option><option value="5840">Đắk Nông</option><option value="6341">Điện Biên</option><option value="5931">Đồng Nai</option><option value="6063">Đồng Tháp</option><option value="5849">Gia Lai</option><option value="6298">Hà Giang</option><option value="5867">Hà Nam</option><option value="5953">Hà Nội</option><option value="5874">Hà Tĩnh</option><option value="5888">Hải Dương</option><option value="6119">Hải Phòng</option><option value="5901">Hậu Giang</option><option value="5618">Hồ Chí Minh</option><option value="6243">Hòa Bình</option><option value="5910">Hưng Yên</option><option value="5921">Khánh Hòa</option><option value="5658">Kiên Giang</option><option value="6365">Kon Tum</option><option value="6332">Lai Châu</option><option value="5674">Lâm Đồng</option><option value="6212">Lạng Sơn</option><option value="6384">Lào Cai</option><option value="5996">Long An</option><option value="5687">Nam Định</option><option value="5698">Nghệ An</option><option value="6270">Ninh Bình</option><option value="6376">Ninh Thuận</option><option value="6318">Phú Thọ</option><option value="5720">Phú Yên</option><option value="6135">Quảng Bình</option><option value="6170">Quảng Nam</option><option value="6155">Quảng Ngãi</option><option value="6255">Quảng Ninh</option><option value="6144">Quảng Trị</option><option value="6077">Sóc Trăng</option><option value="6352">Sơn La</option><option value="5730">Tây Ninh</option><option value="6279">Thái Bình</option><option value="6288">Thái Nguyên</option><option value="5740">Thanh Hóa</option><option value="6109">Thừa Thiên – Huế</option><option value="6022">Tiền Giang</option><option value="6044">Trà Vinh</option><option value="6310">Tuyên Quang</option><option value="6054">Vĩnh Long</option><option value="6099">Vĩnh Phúc</option><option value="6233">Yên Bái</option></select>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 form-group location">
                    <select className="main-cart-left__form-control form-control" id="customerDistrict" name="customerDistrict">
                        <option value="0">Quận/ Huyện</option>
                    </select>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 form-group location">
                    <select className="main-cart-left__form-control form-control" id="customerWard" name="customerWard">
                        <option value="0">Phường/ Xã</option>
                    </select>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 main-cart-left__form-group">
                    <div className="ck1">
                        <input type="checkbox" id="cb2" name="isNotification" />
                        <label for="cb2"></label>
                    Cập nhật các thông tin mới nhất về chương trình từ Ananas
                </div>
                </div> */}

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 main-cart-left__title-1">PHƯƠNG THỨC GIAO HÀNG</div>

                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 main-cart-left__form-group">
                    <div className="ck1">
                        {/* <input type="radio" id="cb3" name="shippingType" value="normal"  /> */}
                        {/* <label for="cb3"></label> */}
    Tốc độ tiêu chuẩn (từ 2 - 5 ngày làm việc) &nbsp; &nbsp; <img className="tooltip_attach" src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_cham_hoi.svg" alt="error" />
                    </div>
                    <div className="tooltip-container" hidden="">Tuỳ vào địa chỉ giao hàng mà tốc độ giao hàng tiêu chuẩn
                    sẽ khác nhau. Chúng tôi luôn cố gắng để đơn hàng đến tay bạn sớm nhất.
</div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 main-cart-left__form-group main-cart-left__title-right normal-fee">0 VNĐ</div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 main-cart-left__title-1">PHƯƠNG THỨC THANH TOÁN</div>

                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 form-group">
                    <div className="ck1">
                        {/* <input type="radio" id="cb5" name="paymentType" className="main-cart-left__paymentType" value="direct" /> */}
                        {/* <label ></label> */}
                              Thanh toán trực tiếp khi giao hàng &nbsp; &nbsp; <img className="tooltip_attach" src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_cham_hoi.svg" alt="description of image"/>
    &nbsp; &nbsp; <img src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_COD.svg" alt="description of image"/>
                    </div>
                    <div className="tooltip-container" hidden="">Là phương thức thanh toán bằng tiền mặt trực tiếp khi nhận
                    hàng
</div>
                </div>
                {/* <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 form-group">
                    <div className="ck1">
                        <input type="radio" id="cb6" name="paymentType" className="main-cart-left__paymentType" value="internal_card" />
                        <label type="text"></label>
    Thanh toán bằng thẻ nội địa (ATM) &nbsp; &nbsp; <img className="tooltip_attach" src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_cham_hoi.svg"alt="error" />
    &nbsp; &nbsp; <img src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_Cash.svg" />
                    </div>
                    <div className="tooltip-container" hidden="">Vui lòng đọc kĩ những điều khoản và chắc chắn rằng thẻ của bạn đã đăng kí dịch vụ thanh toán trực tuyến từ ngân hàng phát hành. Phí thanh toán đối với thẻ nội địa (ATM) là 1%.
</div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 form-group">
                    <div className="ck1">
                        <input type="radio" id="cb7" name="paymentType" className="main-cart-left__paymentType" value="external_card" />
                        <label ></label>
    Thanh toán bằng thẻ quốc tế &nbsp; &nbsp; <img className="tooltip_attach" src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_cham_hoi.svg"alt="error"/>
    &nbsp; &nbsp; <img src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_Cash_visa.svg" />
                    </div>
                    <div className="tooltip-container" hidden="">Phương thức thanh toán sử dụng các loại thẻ quốc tế như
                    Visa, Master, JCB,…Vui lòng đọc kĩ các cam kết thanh toán khi chọn phương thức này. Phí
                    thanh toán đối với thẻ quốc tế
                    là 3%
</div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 form-group">
                    <div className="ck1">
                        <input type="radio" id="cb8" name="paymentType" className="main-cart-left__paymentType" value="momo" />
                        <label ></label>
    Thanh toán bằng ví MoMo &nbsp; &nbsp; <img className="tooltip_attach" src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_cham_hoi.svg" alt="error"/>
    &nbsp; &nbsp; <img src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon momo-01.svg" />
                    </div>
                    <div className="tooltip-container" hidden="">
                        Phương thức dành cho khách hàng có tài khoản và lựa chọn thanh toán qua ví điện tử MoMo.
                        Vui lòng đọc kĩ các cam kết về phương thức này trước khi quyết định. Phí thanh toán đang được áp dụng là 1% trên tổng thanh toán.
</div>
                </div>
            */}

            </form>


        )
    }

}
export default CustomerInfomation;


