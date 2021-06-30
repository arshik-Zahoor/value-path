
var obj = {
    personalData: {
        firstName: 'Arshik',
        lastName: 'Zahoor',
        bloodGr: 'B+ve'
    },
    corporateData: {
        domain: 'Arshik.Zahoor',
        code: 123,
        email: 'arshik.com'
    },
    address: 'kashmir',
    laptops: [
        {
            processor: 'i7',
            ram : 8
        },
        {
            processor1: 'i5',
            ram1 : 4
        }

    ]
    
}




function getValue(obj, key, currentPath){
    
   currentPath = currentPath || '';
   var matchingPath;
   if (!obj || typeof obj !== 'object') return
    
    var value
    if(obj[key] === null) return null
    for(const k of Object.keys(obj)){
         if(k === key){
            value = obj[k];
            matchingPath = `${currentPath}/${k}`;
            
            const my = {myValue : value,
                myMatchingPath : matchingPath
        }
        return my;
    }
        else if(typeof obj[k] === 'object' && k !== key){
           const result = getValue(obj[k], key, `${currentPath}/${k}`);
           if(result){
                
              return result;
           }
        }
    
    }
    
}


let log = getValue(obj,'processor', 'obj');
console.log(log.myValue);
console.log(log.myMatchingPath);


