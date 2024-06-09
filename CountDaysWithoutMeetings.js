`leetcode 3169`
var countDays = function (days, meetings) {
    if (meetings.length === 0) return 0;
    if (meetings.length === 1)
        return meetings[0][1] < days ? (days - meetings[0][1])
            + (meetings[0][0] - 1) : 0;

    meetings.sort((a, b) => a[0] - b[0]);

    let count = 0;
    let lastDayMeeting = -1;
    let firstMeeting = meetings[0][0];
    for (let i = 0; i < meetings.length - 1; i++) {
        const [a, b] = meetings[i];
        const [c, d] = meetings[i + 1];
        if (b < c && b >= lastDayMeeting) count += c - b - 1;
        lastDayMeeting = Math.max(lastDayMeeting, b > d ? b : d);

    }

    return days > lastDayMeeting || (firstMeeting - 1) !== 0 ? (days - lastDayMeeting)
        + (firstMeeting - 1) + count : count;
};

console.log(countDays(10, [[5, 7], [1, 3], [9, 10]]))
console.log(countDays(5, [[2, 4], [1, 3]]))
console.log(countDays(6, [[1, 6]]))
console.log(countDays(8, [[3, 4], [4, 8], [2, 5], [3, 8]]))
console.log(countDays(8, [[2, 3], [3, 5], [8, 8]]))
console.log(countDays(50, [[22, 31], [7, 42], [30, 46], [9, 33], [9, 18], [23, 39], [4, 8], [18, 19]]))