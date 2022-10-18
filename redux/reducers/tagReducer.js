import {CREATE_TAG,DELETE_TAG} from "../actions/tagAction";

const initialState = {
    products: [
        {id: 1, name: 'Com ',price:'50.000',img:'https://cdn.daynauan.info.vn/wp-content/uploads/2019/05/com-tam-la-mon-an-binh-dan.jpg'},
        {id: 2, name: 'Pho ',price:'50.000',img:'https://thumbs.dreamstime.com/z/noodle-bowl-black-background-dark-theme-food-photography-111843226.jpg'},
        
    ],
    tags:[
        {id:1,name:'Noodle'},
        {id:2,name:'Rice'}
    ],
    currentTag: {}
}

export const tagReducer = (state=initialState, action) => {
    switch(action.type){
        case CREATE_TAG:
            let newtag = {id: action.payload.tagId, name: action.payload.tagName,price:action.payload.tagPrice,price:action.payload.tagImg}
            return{
                ...state,
                products: [...state.products,newtag],
                currentTag: newtag
            }
        case DELETE_TAG:
            return{
                ...state,
                products: state.products.filter(x=>x.id!==action.payload.tagId),
            }
        default:
            return{... state};
    }
}