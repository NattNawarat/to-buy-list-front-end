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

