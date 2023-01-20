import jwt from 'jwt-decode'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

export function IsNumeric(str) {
    if (typeof str != 'string') return false // we only process strings!  
    return (!isNaN(str) && !isNaN(parseFloat(str)))
}

export function ConvertToTHB(price, priceCurrency, currencies) {
    if (priceCurrency === 'THB'){
        return price
    }
    else{
        const rate = currencies.find(x => x.currency === priceCurrency)
        if (rate){
            return Number(price / rate.rate)
        }
        else{
            return 0
        }
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

export function ProjectTotalTHB(items,currencies){
    const total = items.reduce((total,item) => 
        total + (ConvertToTHB(item.price, item.currency,currencies)*item.quantity),0)
    return total
}

export function Logout(){
    cookies.remove('TOKEN', { path: '/' })
}