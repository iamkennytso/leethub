/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  const arr = []
  
  for (let interval of intervals) {
    const [start, end] = interval
    if (!newInterval || end < newInterval[0]) {
      arr.push(interval)
    } else if (start > newInterval[1]) {
      arr.push(newInterval)
      newInterval = null
      arr.push(interval)
    } else {
      newInterval[0] = Math.min(newInterval[0], start)
      newInterval[1] = Math.max(newInterval[1], end)
    }
  }
  
  if (newInterval) {
    arr.push(newInterval)
  }
  
  return arr
};


// var insert = function(intervals, newInterval) {
//     const result = []
    
//     /*
//     Three cases:
//     1 - If we have already added newInterval or the current interval ends before the new one starts
//     2 - If newInterval ends before the current one starts
//     3 - If there is an overlap that requires a merge
//     */
    
//     for (const [start, end] of intervals) {        
//         if (!newInterval || end < newInterval[0]) {
//             result.push([start, end])
//         } else if (newInterval[1] < start) {
//             result.push(newInterval)
//             newInterval = null
//             result.push([start, end])
//         } else {
//             newInterval[0] = Math.min(newInterval[0], start)
//             newInterval[1] = Math.max(newInterval[1], end)
//         }
//     }
    
//     // If newInterval has not been added it means it must be the last one
//     if (newInterval) {
//         result.push(newInterval)
//     }
    
//     return result
// };