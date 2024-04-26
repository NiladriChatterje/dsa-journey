function isValidSubsequence(array, sequence) {
	let pos = 0;
	for (let i of array)
		if (sequence[pos] == i) pos++;

	return pos == sequence.length ? true : false;
}

console.log(isValidSubsequence([2, 6, 7, 9, 5, 6, 7, 3], [6, 7, 6, 3]));
console.log(isValidSubsequence([2, 6, 7, 9, 5, 6, 7, 3], [6, 7, 6, 7]));
console.log(isValidSubsequence([2, 6, 7, 9, 5, 6, 7, 3], [6, 7, 8]));

