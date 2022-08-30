const getMonth = (callback) => {
    setTimeout(()=>{
        let error = true
        let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August',
        'September', 'October', 'November', 'Desember']
        if(!error){
            callback(null, month)
        } else{
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000)
}

getMonth((err, res)=>{
    if(!err){
        res.map((el)=>{
            console.log(el);
        })
    } else {
        console.log(err)
    }
})


// const showMonth = (err, res) => {
//     if
//     else
// }
// param 1 = menentukan getMonth error atau tidak
// param 2 = menampung data 
// getMonth((err,result)=>{
    //     if(err){
    //         month.map(function(month) {
    //             console.log(month); 
    //           })
    //     }
    //     console.log(err,result); 
    // })
