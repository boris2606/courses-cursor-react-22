import { INSERT_LIKE } from "./types"
import { CREATE_POST } from "./types"
import { INSERT_COMMENT } from "./types"
import { INSERT_REPOST } from "./types"
import { optionsList, persons } from '../data/data'

const initialState = {
    posts: [],
    persons: persons,
    options: optionsList,
}

export const postsReducer = (state = initialState,action) => {
    
    if (action.type === CREATE_POST){
        return {...state,posts: [...state.posts, action.payload]}
    }
    if (action.type === INSERT_LIKE){
        return {
            ...state,
            posts: state.posts.map(post => {
                    if (post.id === action.payload && !post.clicedLike){
                        return {...post, like: post.like + 1, clicedLike: true}
                    } else if (post.id === action.payload && post.clicedLike){
                        return {...post, like: post.like - 1, clicedLike: false}
                    } else {
                        return post
                    }
                }
            )
        }
    }
    if (action.type === INSERT_COMMENT){
        return {
            ...state,
            posts: state.posts.map(post => {
                    if (post.id === action.payload && !post.clicedComment){
                        return {...post, comment: post.comment + 1, clicedComment: true}
                    } else if (post.id === action.payload && post.clicedComment){
                        return {...post, comment: post.comment - 1, clicedComment: false}
                    } else {
                        return post
                    }
                }
            )
        }
    }
    if (action.type === INSERT_REPOST){
        return {
            ...state,
            posts: state.posts.map(post => {
                    if (post.id === action.payload && !post.clicedRepost){
                        return {...post, reposts: post.reposts + 1, clicedRepost: true}
                    } else if (post.id === action.payload && post.clicedRepost){
                        return {...post, reposts: post.reposts - 1, clicedRepost: false}
                    } else {
                        return post
                    }
                }
            )
        }
    }

    return state
}
