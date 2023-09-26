import axios from 'axios'

const apiCodeBurger = axios.create({
    // baseURL: 'http://localhost:3001'
    baseURL: 'https://api-codeburger-nodejs-production.up.railway.app/'
})

apiCodeBurger.interceptors.request.use(async config=>{

    const userData = await localStorage.getItem('codeburger:userDate')
    const token = userData && JSON.parse(userData).token
    config.headers.authorization = `Bearer ${token}` //foi
    return config
})

export default apiCodeBurger