
import * as Types from './../constants/ActionType'

const initialState = [
    {
         id: "1",
         name: "TẤT CẢ",
         eng_name:"ALL",
         type:'gender',
    },
    {
         id: "2",
         name: "NAM",
         eng_name:"MEN   ",
         type:'gender',
    },
    {
         id: "3",
         name:'NỮ',
         eng_name:"WOMEN",
         type:'gender',
    },
    {
          id: "4",
          name: "SHIRT",
          eng_name:"SHIRT",
          type:'form',
     },
     {
          id: "5",
          name: "TROUSERS",
          eng_name:"TROUSERS",
          type:'form',
     },
     {
          id: "6",
          name: "200000VNĐ",
          eng_name:"200000VNĐ",
          type:'money',
     },
     {
          id: "7",
          name:"400000VNĐ",
          eng_name:"400000VNĐ",
          type:'money',
     },
     {
          id: "8",
          name:"500000VNĐ",
          eng_name:"500000VNĐ",
          type:'money',
     },
     


];

const ProductTypeList = (state = initialState, action) => {
    switch (action.type) {
     case Types.PRODUCT_TYPE_LIST:    
      return state;


     default: return state;
    }
  

};

export default ProductTypeList;
