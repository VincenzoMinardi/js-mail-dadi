const emailElement = prompt('Inserisci email');

const myArr =[
    'vincenzominardi@live.it', 'pippopluto@gmail.com', 'gianlucaferrari@gmail.com', 'rosannalagrutta@gmail.com'];
    console.log(myArr);
    let flag = false

    for (let i = 0; i < myArr.length; i++);{
        if (emailElement == myArr[i]){
            console.log (myArr[i]);
            flag = true
        };
    }
     
    if(flag === false){
        alert ('email non valida')
    }
    else{
       console.log ("l'email è valida")
    }

    

   
    
    



    
    

