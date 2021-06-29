
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
function OBJ(){
return obj;
    
}



function getValue(obj, key){
    
    const clone = {}
    for(let i in obj){
        clone[i] = obj[i]
    }
    
    
   
    let value
    if(obj[key] === null) return `${'Null'}`

    for(const k of Object.keys(obj)){
        if(k === key){
            value = obj[k];
        }
        else if(typeof obj[k] === 'object' && k !== key){
            value = getValue(obj[k], key);
            
        }

    }
    if(value === undefined) return
    console.log(value);
    


    function findPath (obj, name, val, currentPath) {
        currentPath = currentPath || ''
      
        let matchingPath
      
        if (!obj || typeof obj !== 'object') return
      
        if (obj[name] === val) return `${currentPath}/${name}`
      
        for (const key of Object.keys(obj)) {
          if (key === name && obj[key] === val) {
            matchingPath = currentPath
          } else {
            matchingPath = findPath(obj[key], name, val, `${currentPath}/${key}`)
          }
      
          if (matchingPath) break
        }
      
        return matchingPath
      }


      function OB(){
        var j = OBJ();
        return j;
    }
   
      let j = OB();
      var path = findPath(j, key, value)
      console.log(path)
}

getValue(obj, 'ram1')
