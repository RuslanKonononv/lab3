// const finder = (array, sought) => {
//     let k=0
//     array.map(item => {
//         if (JSON.stringify(item) === JSON.stringify(sought)) {
//             //console.log(JSON.stringify(item.path[item.path.length - 1]), JSON.stringify(sought))
//             //console.log(2)
//             k++
//             return false
//         }
//     })
//     return k === 0;
// }
//
//     let queue = []
//     queue.push([1,1,1,1,1])
//     queue.push([1,1,2,1,1])
//     queue.push([1,1,1,3,1])
//     queue.push([1,1,1,4,1])
//     if (finder(queue, [1, 1, 1, 1, 1])) {
//         queue.push({
//             array: [1, 1, 1, 1, 1], path: [1, 1, 1], act: 1, opt: 1
//         })
//     }
//     console.log(queue)
//     console.log(1)
//
//
//
