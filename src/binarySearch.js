export const insertOpt = (queue, value, optimal, path) => {
    Array.prototype.insert = function (index, item) {
        this.splice(index, 0, item);
    }
    let i = 0
    if (queue.length === 0) {
        return queue.insert(0, {
            array: value,
            path: path,
            optimal: optimal
        })
    }
    while (queue[i].optimal < optimal) {
        i++
    }
    queue.insert(i + 1, {
        array: value,
        path: path,
        optimal: optimal
    })
    return queue
}