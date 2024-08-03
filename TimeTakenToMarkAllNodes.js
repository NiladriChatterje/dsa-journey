var timeTaken = function (edges) {
    const set = new Set();
    let count = 0;
    for (let i of edges) {
        if (!set.has(i[0]))
            count++;
        if (!set.has(i[1]))
            count++;
        set.add(i[0]);
        set.add(i[1]);
    }
    const arr = new Array
    for (let i = 0; i < count; i++) {

    }
};