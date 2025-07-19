/**
 * @param {string[]} folder
 * @return {string[]}
 */

const removeSubfolders = folder => {
    const dirSet = new Set();
    const res = [];
    
    for (const dir of folder)
        dirSet.add(dir);

    for (const dir of folder) {
        res.push(dir);
        for (let i = 0; i < dir.length; i++) {
            if (dir.charAt(i) === '/' && dirSet.has(dir.substring(0, i))) {
                res.pop();
                break;
            }
        }
    }

    return res;
};