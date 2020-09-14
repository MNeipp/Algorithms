function mergeArrays(arr1,arr2){
    const orders = []
    const ordersLength = arr1.length + arr2.length
    let p1 = 0
    let p2 = 0
    if (arr1.length == 0){
        return arr2
    }
    if (arr2.length == 0){
        return arr1
    }

    for (let i = 0; i < ordersLength; i++){
        if (p1 >= arr1.length){
            orders.push(arr2[p2])
            p2++
        }
        else if (p2 >= arr2.length){
            orders.push(arr1[p1])
            p1++
        }
        else if (arr1[p1] <= arr2[p2]){
            orders.push(arr1[p1])
            p1++
        } else {
            orders.push(arr2[p2])
            p2++
        }
    }
    return orders
}