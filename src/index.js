module.exports = function reverse (n) {
    if (n > 0){
        return n.toString().split('').reverse().join('');
    } else {
        let arr = n.toString().split('');
        delete arr[0];
        return arr.reverse().join('');
    }
}
