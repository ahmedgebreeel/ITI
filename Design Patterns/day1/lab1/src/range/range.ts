// export function range(start: number, end: number, step: number){

//     return {
//         [Symbol.iterator](){

//             return {
//                 next(){
//                     if (start <= end){
        
//                         let result = {
//                             value: start,
//                             done: false
//                         }
//                         start+=step;
//                         return result;
//                     }else{
//                         return {
//                             value: undefined,
//                             done: true
//                         }
//                     }
//                 } 
//             }
//         }
//     }
    
// } 


export function range(start: number, end: number, step: number){

    return {
        [Symbol.iterator]:  function*(){

            while(start <=end ){
                yield start;
                start+=step;
            }

        }
    }
    
} 