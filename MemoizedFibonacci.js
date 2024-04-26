const fibo = (n,memoizer={}) => {
    if(n in memoizer) return memoizer[n];
    if(n<=2) return 1;
    memoizer[n] = fibo(n-1,memoizer)+fibo(n-2,memoizer);

    return memoizer[n]
}

console.log(fibo(7))