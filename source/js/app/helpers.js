const listen = (elems,event,f)=>{
 	if(typeof(elems) === "object" && elems.length > 1){
 		elems.forEach((item)=>item.addEventListener(event,f,false))
 	}
 	else{
 		elems.addEventListener(event,f,false);
 	}
 }
const test = (s) => s + 2;
export default {listen}
