var romanToInt = function(s) {
    const conversion = {"M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I":1}
    
    const arr = s.split('');
    let total = 0
    let current
    let currentValue
    let next
    let nextValue
    
    for (let i=0; i < arr.length; i++){
        current = arr[i]
        currentValue = conversion[current]
        next = arr[i+1]
        nextValue = conversion[next]

        if (currentValue < nextValue){
            total -= (currentValue)
        } else {
            total += (currentValue);
        }
    }
    return total
    
};

romanToInt("IVDM")