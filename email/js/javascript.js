const emailElement = prompt('Inserisci email');

const myArr =[
    'vincenzo.minardi@live.it', 'pippopluto@gmail.com', 'gianlucaferrari@gmail.com', 'rosannalagrutta@gmail.com'];
    console.log(myArr);
    let flag = 0 

    for (let i = 0; i < myArr.length; i++){
        if (emailElement == myArr[i]){
            flag = 1
            alert ('Benvenuto a Bordoooo!!!!')
        };
    }
     
    if(flag === 0){
        alert('email non valida')
    }
    
       
    

    

   
    
    



    
    

