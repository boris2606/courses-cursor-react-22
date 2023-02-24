import React, { useState } from 'react'
import { Link,useNavigate} from "react-router-dom"
import { connect } from 'react-redux';
import { createPostforState } from '../../redux/actions'
import styles from './CreatePost.module.scss'

const CreatePost = (props) => {
    let navigation = useNavigate();

    const [author,setAuthor] = useState('')
    const [linkImage,setLinkImage] = useState('')
    const [description,setDescription] = useState('')
    
    const regularForLink = /(?:https?|ftp):\/\/[\n\S]+/gi

    function handlerValuesForState(event){
        if (event.target.id === 'selectAuthor'){
            setAuthor(event.target.value)
        } else if (event.target.id === 'imageLink' && regularForLink.exec(event.target.value)){
            setLinkImage(event.target.value)
        } else {
            setDescription(event.target.value)
        }
    }
    const handlerSubmitForm = event => {

        event.preventDefault()
        event.stopPropagation();

        if ((!linkImage && window.confirm('Посилання на зображення відсутнє, або введено не коректно, ви бажаєте зробити публікацію ?') ) || linkImage){
            const newPost = {
                author,
                linkImage,
                description,
                id: Date.now().toString(),
                dataPublich: new Date().toLocaleDateString('ua-UA'),
                like: 0,
                comment: 0,
                reposts: 0,
                clicedLike: false,
                clicedComment: false,
                clicedRepost: false
            } 
            props.createPostforState(newPost)
            navigation("/");
        }  else {
            return false
        }
    }
    return (
        <div className={styles.wrapper_posts}>
            <div className={styles.wrapper_posts_form}>
                <p className={styles.posts_form_title}>Створення публікації</p>
                <form className={styles.posts_form} onSubmit={handlerSubmitForm}>
                    <label className={styles.post_form_label}>
                        Оберіть автора:
                        <select className={styles.post_form_selec} defaultValue='sdsd' id='selectAuthor' required onChange={handlerValuesForState}>
                            <option></option>
                            {props.storeData.map((option,index) => {
                                return <option key={index}>{option}</option>
                            })}
                        </select>
                    </label>
                    <input className={styles.post_form_input} placeholder='Вставте помилання картинки в форматі https://' id="imageLink" onChange={handlerValuesForState}></input>
                    <textarea className={styles.post_form_textarea} placeholder='Введіть коментар' id="descriptionText" onChange={handlerValuesForState} required></textarea>
                    <button type='text' className={styles.create_post_btn}>Створити публікацію</button>
                </form>
                <div className={styles.wrapper_btn}>
                    <Link  className={styles.back_to_posts} to='/' >Повернутись до постів</Link>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    createPostforState
}
const mapStateForProps = state => {
    return {
        storeData: state.posts.options
    }
}

export default connect(mapStateForProps,mapDispatchToProps)(CreatePost);