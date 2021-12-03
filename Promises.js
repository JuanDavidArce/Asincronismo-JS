const somethingwllHappend =()=>{
    return new Promise((resolve,reject)=>{
        if (true){
            resolve('Hey!');
        }
        else{
            reject('Ups!');
        }
    })
}

somethingwllHappend()
.then(response=>console.log(response))
.catch(err=> console.log(err));


const somethingwllHappend2 =() =>{
    return new Promise((resolve,reject)=>{
        if (true){
            setTimeout(()=>{
                resolve('True');
            },2000)
        }
        else{
            const error = new Error('Whoop!');
            reject(error);
        }
    });
}

somethingwllHappend2()
.then(response =>console.log(response))
.catch(err => console.error(err));


Promise.all([somethingwllHappend(),somethingwllHappend2()])
.then(response=> {
    console.log('Arry of results',response);
})
.catch(err=>console.error(err));