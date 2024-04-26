/*const groupAnagrams = function (strs) {
    let copy_str = [...strs]
    const arr = [];
    for (let i of copy_str) {
        const second_arr = []
        second_arr.push(copy_str.filter(
            (item) => {
                if (item.split("").sort().join("") === (i.split("").sort().join(""))) {
                    const ele = item;
                    copy_str = copy_str.filter(items => items !== item);
                    return ele !== '' ? ele : "''";
                }
            }
        ));

        arr.push(...second_arr.filter(item => item.length > 0));
    }

    return arr;
};*/


const groupAnagrams = (strs) => {
    const map = new Map();
    let key;
    for (let i of strs) {
        if (map.has(key = i.split('').sort().join('')))
            map.get(key).push(i);
        else map.set(key, [i]);
    }
    return [...map.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams(["", "", ""]))