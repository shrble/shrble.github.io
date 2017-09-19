let hamb     = document.querySelectorAll('.hamb')[0];
let hambDrop = document.querySelectorAll('.hamb-drop')[0];

const listen = (elems,event,f)=>{
 	if(typeof(elems) === "object" && elems.length > 1){

 		elems.forEach((item)=>item.addEventListener(event, f, false))

 	}else{
    elems.addEventListener(event, f, false);
  }

 }

 listen(hamb, 'click', ()=>{
   hambDrop.classList.toggle('hamb-drop-act');
 })

listen(window, 'click', (e)=>{
  let hambIncludes = e.target.className.includes('hamb');
  if(!hambIncludes){
     hambDrop.classList.toggle('hamb-drop-act');
  }
})
