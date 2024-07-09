var averageWaitingTime = function (customers) {
    let sum = 0;
    let track = 0;
    for (let [arrival, preparation] of customers) {
        track = arrival > track ? arrival + preparation : track + preparation;
        sum += track - arrival;
    }
    return (sum / customers.length).toFixed(5);
};