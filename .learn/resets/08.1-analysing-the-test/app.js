let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

fromDollarToYen(dollar){
    return dollar * 127.9
}

fromEuroToDollar(euro){
    return euro * 1.2
}

fromYenToPound(yen){
    return yen * (0.8/127.9)
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYanToPound };