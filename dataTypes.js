dataTypes=(argWord)=>{

 	switch(typeof argWord){
		case "string":
		  return (argWord.length);
		case "null", "undefined":
		  return "no value";
		case "boolean":
		  return argWord;
		case "number":
		  if (argWord < 100){
		    return ("less than 100");
		  }
		  else if (argWord > 100){
		    return "greater than 100";
		  }
		  else {
		    return "equal to 100";
		    
		  }
		  break;
		case "function":
		    return argWord(true);
		default:
		  return ("I am sorry");
  }

};

