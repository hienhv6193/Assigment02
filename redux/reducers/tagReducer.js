import {CREATE_TAG,UPDATE_TAG,DELETE_TAG} from "../actions/tagAction";

const initialState = {
    tags: [
        {id: 1, name: 'For You'},
        {id: 2, name: 'Following'},
        {id: 3, name: 'Action'},
      
       
    ],
    currentTag: {},
    
}

export const tagReducer = (state=initialState, action) => {
    switch(action.type){
        case CREATE_TAG:
            let newtag = {id: Number(action.payload.tagId), name: action.payload.tagName, price: action.payload.tagPrice, image: action.payload.tagImage}
            console.log(newtag)

            return{
                ...state,
                tags: [...state.tags,newtag],
                currentTag: newtag
            }
        case UPDATE_TAG:
            return{
                ...state,
                tags: state.tags.map((x) => {
                    if (x.id === action.payload.tagId) {
                        return {...x,
                            name: action.payload.tagName,
                            price: action.payload.tagPrice,
                            image: action.payload.tagImage
                        }
                    }
                    return x;

                })
            }
        case DELETE_TAG:  
            return{
                ...state,
                tags: state.tags.filter(x => x.id !== action.payload.tagId),
            }
        default:
            return{... state};
    }
}