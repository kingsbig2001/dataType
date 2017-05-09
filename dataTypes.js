var dataTypes=(argWord)=>{

 	switch(typeof argWord){
		case "string":
		  return (argWord.length);
		case "undefined":
		  return "no value";
		case "boolean":
		  return argWord;
		case "number":
		  if (argWord < 100){
		    return ("less than 100");
		  }
		  else if (argWord > 100){
		    return "more than 100";
		  }
		  else {
		    return "equal to 100";
		  }
		  break;
		case "function":
		    return argWord(true);
		default:
		  if(argWord == null){
			return "no value"			
		}else if(Array.isArray(argWord)){
			if(argWord.length >= 3){
				return argWord[2];			
			}else{
				return undefined;			
			}
		}
  }

};

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = dataTypes;
}

