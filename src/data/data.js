import mat from '../img/mat.jpeg'
import charly from '../img/charly.jpeg'
import grant from '../img/grant.jpeg'
import doker from '../img/doker.jpeg'

export let optionsList = []

export let persons = [
    {
        name:'Мэттью МакКонахи',
        avatarAutor:mat,
        nicknameAuthor:'@MetT'
    },
    {
        name:'Чарли Ханнэм',
        avatarAutor:charly,
        nicknameAuthor:'@ChaR'
    },
    {
        name:'Хью Грант',
        avatarAutor:grant,
        nicknameAuthor:'@GranT'
    },
    {
        name:'Мишель Докери',
        avatarAutor:doker,
        nicknameAuthor:'@DOC'
    }
]
persons.map(elemetn => {
    optionsList.push(elemetn.name)
})