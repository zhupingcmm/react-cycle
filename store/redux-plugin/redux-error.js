const reduxError =({disptch,getState})=>next=>action=>{

    console.log("redux err",getState());
    next(action)
};

module.exports={
    reduxError
};
// const reduxError = ({disptch,getState})=>{
//     return next =>action=>{
//         try {
//             console.log(action);
//             next(action)
//         } catch (error) {
//             console.error("error:",error,action);
//             throw error
//         }
//     }
// };
// export default reduxError;
