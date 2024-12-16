const parseCode = (str) => {
  // your code here
	let firstName = ""
let lastName = ""
let id = ""
let obj = {}
	let x = 0;
    let y = 0;
    let z = 0;
    let a = 0;
	for(let i=0; i<=str.length-1; i++){
		if(str[i]==="0"){
			x = i;
			break;
		}else{
		   firstName = firstName + str[i]
		}
	}

	for(let i=x; i<=str.length-1; i++){
        if(str[i]==="0"){
            continue;
        }else{
          y = i;
          break;
        }
    }

    for(let i=y; i<=str.length-1; i++){
        if(str[i]==="0"){
			z = i;
			break;
		}else{
		   lastName = lastName + str[i]
		}
    }
    
    for(let i=z; i<=str.length-1; i++){
        if(str[i]==="0"){
            continue;
        }else{
          a = i;
          break;
        }
    }

    for(let i=a; i<=str.length-1; i++){
        if(str[i]==="0"){
			break;
		}else{
		   id = id + str[i]
		}
    }
    obj.firstName=firstName
    obj.lastName=lastName
    obj.id=id
	return obj
};

// Do not change the code below
const str = prompt("Enter str: "); 
alert(JSON.stringify(parseCode(str)));
