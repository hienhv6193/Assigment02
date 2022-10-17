import {CREATE_TAG,DELETE_TAG} from "../actions/tagAction";

const initialState = {
    tags: [
        // {id: 1, name: 'C#'},
        // {id: 2, name: 'PHP'},
        // {id: 3, name: 'HTML'},
        // {id: 4, name: 'CSS'},
        // {id: 5, name: 'JS'},
    ],
    currentTag: {}
}

export const tagReducer = (state=initialState, action) => {
    switch(action.type){
        case CREATE_TAG:
            let newtag = {id: Number(action.payload.tagId), name: action.payload.tagName}
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
                            name: action.payload.tagName
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