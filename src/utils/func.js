import jwt from 'jwt-decode'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

export function IsNumeric(str) {
    if (typeof str != 'string') return false // we only process strings!  
    return (!isNaN(str) && !isNaN(parseFloat(str)))
}
export function ConvertToTHB(price, currency) {
    //const apiKey = process.env.REACT_APP_FOREX_API_KEY
    switch (currency) {
    case 'EUR':
        return price * 35
    case 'USD':
        return price * 37
    default:
        return price
    }
}
export function NumberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function OpenInNewTab(url){
    window.open(url, '_blank', 'noopener,noreferrer')
}

export function GetToken(){
    const token = cookies.get('TOKEN')
    return token
}

export function DecodeToken(){
    const token = GetToken()
    const user = jwt(token)
    return user
}