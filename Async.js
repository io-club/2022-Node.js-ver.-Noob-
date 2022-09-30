const a = async ()=>{
    let aa = await new Promise((resolve, reject)=>{
        reject('OKk')
    })
    console.log(aa)
}
a().then(
    res=>{console.log(res)},
    err=>{console.log(err)}
)