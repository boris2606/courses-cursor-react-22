import React  from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import {incrementLike} from '../../redux/actions'
import {incrementComment} from '../../redux/actions'
import {incrementRepost} from '../../redux/actions'
import styles from './Main.module.scss'
import defPic from '../../img/trollface.jpeg'
import like from '../../img/heart.png'
import comment from '../../img/comment.png'
import repost from '../../img/replay.png'

const Main = (props) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_content}>
                {props.storeData.posts.map((post) =>{
                    console.log(post);
                    for(let person of props.storeData.persons){
                        if (person.name === post.author){
                            return <div className={styles.post_content} key={post.id}>
                                        <div className={styles.person_content_info}>
                                            <img className={styles.person_image} src={person.avatarAutor} alt='perosn'/>
                                            <p>{person.name}</p>
                                            <p>{person.nicknameAuthor}</p>
                                        </div>
                                        <div className={styles.post_content_info}>
                                            <div className={styles.main_post_text}>
                                                <p className={styles.publish_date}>Дата публікації: {post.dataPublich}</p>
                                                <p className={styles.description_txt}>{post.description}</p>
                                                {post.linkImage ? 
                                                    <img  className={styles.post_image} src={post.linkImage} alt='Невірне посилання на зображення'/> 
                                                    :<div className={styles.default_image}><img  className={styles.post_image} src={defPic} alt='perosn'/>
                                                        <p>Бачу картинка таки не була вставлена 
                                                            <span className={styles.smile_style}>&#128513;</span>
                                                        </p>
                                                    </div> }
                                            </div>
                                            <div className={styles.wrapper_controls_btn}>
                                                <div className={styles.wrapp_btn}>
                                                    <img onClick={() => {props.incrementLike(post.id,post.clicedLike)}} src={like} alt='like'/>
                                                    <p>{post.like}</p>
                                                </div>
                                                <div className={styles.wrapp_btn}>
                                                    <img onClick={() => props.incrementComment(post.id,post.clicedComment)} src={comment} alt='comment'/>
                                                    <p>{post.comment}</p>
                                                </div>
                                                <div onClick={() => props.incrementRepost(post.id,post.clicedRepost)} className={styles.wrapp_btn}>
                                                    <img src={repost} alt='repost'/>
                                                    <p>{post.reposts}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                    }
                })}
            </div>
            <div className={styles.wrapper_btn}>
                <Link to='/post-create' className={styles.create_post_btn}>Створити публікацію</Link>
            </div>
        </div>
    );
};


const mapDispatchToProps = {
    incrementLike,
    incrementComment,
    incrementRepost
}

const mapStateForProps = state => {
    return {
        storeData: state.posts
    }
}

export default connect(mapStateForProps,mapDispatchToProps)(Main);