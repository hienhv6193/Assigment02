import {CREATE_TAG,DELETE_TAG} from "../actions/tagAction";

const initialState = {
    tags: [
        {id: 1, name: 'C#'},
        {id: 2, name: 'PHP'},
        {id: 3, name: 'HTML'},
        {id: 4, name: 'CSS'},
        {id: 5, name: 'JS'},
    ],
    currentTag: {}
}

export const tagReducer = (state=initialState, action) => {
    switch(action.type){
        case CREATE_TAG:
            let newtag = {id: action.payload.tagId, name: action.payload.tagName}
            return{
                ...state,
                tags: [...state.tags,newtag],
                currentTag: newtag
            }
        case DELETE_TAG:
            return{
                ...state,
                tags: state.tags.filter(x=>x.id!==action.payload.tagId),
            }
        default:
            return{... state};
    }
}