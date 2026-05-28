/**
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
var stringIndices = function(wordsContainer, wordsQuery) {
    // Trie node: children map + best container index at this node
    // "best" = shortest wordsContainer[i], tie-break by earliest index
    const root = { children: {}, best: -1 };

    const isBetter = (newIdx, curIdx) => {
        if (curIdx === -1) return true;
        const newLen = wordsContainer[newIdx].length;
        const curLen = wordsContainer[curIdx].length;
        // Shorter wins; ties go to earlier index (which we insert first, so skip)
        return newLen < curLen;
    };

    // Insert reversed wordsContainer[i] into trie
    for (let i = 0; i < wordsContainer.length; i++) {
        const word = wordsContainer[i];
        let node = root;

        // Update root's best with every string (handles zero-suffix case)
        if (isBetter(i, node.best)) node.best = i;

        // Walk reversed characters
        for (let j = word.length - 1; j >= 0; j--) {
            const ch = word[j];
            if (!node.children[ch]) {
                node.children[ch] = { children: {}, best: -1 };
            }
            node = node.children[ch];
            if (isBetter(i, node.best)) node.best = i;
        }
    }

    // Answer each query
    const ans = new Array(wordsQuery.length);

    for (let i = 0; i < wordsQuery.length; i++) {
        const query = wordsQuery[i];
        let node = root;
        let lastBest = root.best; // fallback: no common suffix at all

        for (let j = query.length - 1; j >= 0; j--) {
            const ch = query[j];
            if (!node.children[ch]) break; // suffix match ends here
            node = node.children[ch];
            lastBest = node.best;
        }

        ans[i] = lastBest;
    }

    return ans;
};