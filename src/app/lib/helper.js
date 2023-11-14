export const formatMoney = money => {
    return money.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}