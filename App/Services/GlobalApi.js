import {create} from 'apisauce'

const api = create({
    baseURL :'https://newsapi.org/v2'
})

const apikey='?country=us&apiKey=b265a7dd87a94bcc93ab01f71489109c'
const getTopHeading = api.get('/top-headlines'+apikey)

const getByCategory = (category)=> api.get('/everything?q='+category+'&apiKey=b265a7dd87a94bcc93ab01f71489109c')

export default {
    getTopHeading,
    getByCategory
} 

