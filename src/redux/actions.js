import { CREATE_POST } from "./types"
import { INSERT_LIKE } from "./types"
import { INSERT_COMMENT } from "./types"
import { INSERT_REPOST } from "./types"

export function createPostforState(post){
    return {
        type: CREATE_POST,
        payload: post
    }
}
export function incrementLike(id,clicedLike){
    return {
        type: INSERT_LIKE,
        payload: id,
        clicedLike: clicedLike
    }
}
export function incrementComment(id,clicedComment){
    return {
        type: INSERT_COMMENT,
        payload: id,
        clicedComment:clicedComment
    }
}
export function incrementRepost(id,clicedRepost){
    return {
        type: INSERT_REPOST,
        payload: id,
        clicedRepost:clicedRepost
    }
}

