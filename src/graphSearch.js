export const graphSearch = (array) => {
    console.log(optimal(array,0))
    let queue = [],chekPosition=[]
    const answer = [[1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 0]]

    let act, opt;
    queue.push(
        {
            array: array,
            path: [],
            lastAct: act,
            optimal: opt
        }
    )
    let index = 0, l = 0
    while (queue.length > 0) {
        const current = queue.shift()
        index++
        chekPosition.push(current.array)
        if (JSON.stringify(current.array) === JSON.stringify(answer)) {
            console.log(current.path.length)
            return current.path
        }
        let indexOfZeros;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++)
                if (current.array[i][j] === 0) {
                    indexOfZeros = [
                        i, j
                    ]
                    break
                }
        }

        if (indexOfZeros[0] < 3 && current.act !== 2) {
            let newArray = JSON.parse(JSON.stringify(current.array))
            newArray[indexOfZeros[0]][indexOfZeros[1]] = newArray[indexOfZeros[0] + 1][indexOfZeros[1]]
            newArray[indexOfZeros[0] + 1][indexOfZeros[1]] = 0
            const action = newArray[indexOfZeros[0]][indexOfZeros[1]];
            let newPath = JSON.parse(JSON.stringify(current.path))
            newPath.push(action)
            if (finder(chekPosition, newArray)) {
                queue.push(
                    {
                        array: newArray,
                        path: newPath,
                        act: 1,
                        opt: optimal(newArray,newPath)
                    }
                )
            }
        }
        if (indexOfZeros[0] > 0 && current.act !== 1) {
            let newArray = JSON.parse(JSON.stringify(current.array))
            newArray[indexOfZeros[0]][indexOfZeros[1]] = newArray[indexOfZeros[0] - 1][indexOfZeros[1]]
            newArray[indexOfZeros[0] - 1][indexOfZeros[1]] = 0
            const action = newArray[indexOfZeros[0]][indexOfZeros[1]];
            let newPath = JSON.parse(JSON.stringify(current.path))
            newPath.push(action)
            if (finder(chekPosition, newArray)) {
                queue.push(
                    {
                        array: newArray,
                        path: newPath,
                        opt: optimal(newArray,newPath),
                        act: 2
                    }
                )
            }
        }
        if (indexOfZeros[1] < 3 && current.act !== 4) {
            let newArray = JSON.parse(JSON.stringify(current.array))
            newArray[indexOfZeros[0]][indexOfZeros[1]] = newArray[indexOfZeros[0]][indexOfZeros[1] + 1]
            newArray[indexOfZeros[0]][indexOfZeros[1] + 1] = 0
            const action = newArray[indexOfZeros[0]][indexOfZeros[1]];
            let newPath = JSON.parse(JSON.stringify(current.path))
            newPath.push(action)

            if (finder(chekPosition, newArray)) {
                queue.push(
                    {
                        array: newArray,
                        path: newPath,
                        opt: optimal(newArray,newPath),
                        act: 3
                    }
                )
            }
        }
        if (indexOfZeros[1] > 0 && current.act !== 3) {
            let newArray = JSON.parse(JSON.stringify(current.array))
            newArray[indexOfZeros[0]][indexOfZeros[1]] = newArray[indexOfZeros[0]][indexOfZeros[1] - 1]
            newArray[indexOfZeros[0]][indexOfZeros[1] - 1] = 0
            const action = newArray[indexOfZeros[0]][indexOfZeros[1]];
            let newPath = JSON.parse(JSON.stringify(current.path))
            newPath.push(action)
            if (finder(chekPosition, newArray)) {
                queue.push(
                    {
                        array: newArray,
                        path: newPath,
                        opt: optimal(newArray,newPath),
                        act: 4
                    }
                )
            }
        }
        queue.sort((a, b) => {
            return a.opt - b.opt
        })
        l++
    }


}
const finder = (array, sought) => {
    let k=0
    array.map(item => {
        if (JSON.stringify(item) === JSON.stringify(sought)) {
            //console.log(JSON.stringify(item.path[item.path.length - 1]), JSON.stringify(sought))
            //console.log(2)
            k++
            return false
        }
    })
    return k === 0;
}

const optimal = (array,pach) => {
    let counter = 0
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (array[0].indexOf(4 * i + j + 1) !== -1) {
                counter += Math.abs(i) + Math.abs(j - array[0].indexOf(4 * i + j + 1))
            }
            if (array[1].indexOf(4 * i + j + 1) !== -1) {
                counter += Math.abs(i - 1) + Math.abs(j - array[1].indexOf(4 * i + j + 1))
            }
            if (array[2].indexOf(4 * i + j + 1) !== -1) {
                counter += Math.abs(i - 2) + Math.abs(j - array[2].indexOf(4 * i + j + 1))
            }
            if (array[3].indexOf(4 * i + j + 1) !== -1) {
                counter += Math.abs(i - 3) + Math.abs(j - array[3].indexOf(4 * i + j + 1))
            }
        }
    }
    const kon = [[0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]]
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            if (array[i][j] > array[i][j + 1]&&array[i][j]!==0&&array[i][j+1]!==0) {
                counter += 2
                kon[i][j] = 1
            }
        }
    }
    return counter
}