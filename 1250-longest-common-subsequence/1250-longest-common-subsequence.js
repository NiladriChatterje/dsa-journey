function longestCommonSubsequence(string1, string2, index_1 = 0, index_2 = 0,
    dp = new Map()) {
    if (dp.has(`${index_1},${index_2}`))
        return dp.get(`${index_1},${index_2}`);

    if (index_1 >= string1.length || index_2 >= string2.length) return 0;
    if (string1[index_1] === string2[index_2]) {
        let res = longestCommonSubsequence(string1, string2, index_1 + 1, index_2 + 1, dp) + 1
        dp.set(`${index_1},${index_2}`, res);
        return res
    }
    let res = Math.max(longestCommonSubsequence(string1, string2, index_1 + 1, index_2, dp)
        , longestCommonSubsequence(string1, string2, index_1, index_2 + 1, dp));

    dp.set(`${index_1},${index_2}`, res);

    return res
}