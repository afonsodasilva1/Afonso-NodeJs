const myPromise = new Promise((resolve, reject) =>{
    const name = "Afonso"

    if(name === 'Afonso'){
        resolve('usuário Afonso encontrado!')
    }else{
        reject('Usuário Afonso não encontrado!')
    }
})

myPromise.then((data) =>{
    console.log(data)
})