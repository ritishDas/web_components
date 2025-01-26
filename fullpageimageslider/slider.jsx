import {useRef,useEffect} from 'react';

export default function(images){
 const fixer = ()=>{
const box=images.length*25+(images.length-1)*10;
   const size = (window.innerWidth-box)/2;

   return({
     left:`${size}px`
   });
 }
  let currentImage = 0;
  const prevref = useRef(null);
  const nextref = useRef(null);
  const sliderref = useRef(null);

  useEffect(()=>{
    let offset = 0;
    let last_trigger = 0;
    sliderref.current.addEventListener('scroll',()=>{
const div = sliderref.current.lastChild;
	let element = div.children[currentImage].firstChild;
      element.style.background='white';
 
const amount = sliderref.current.scrollLeft;
      currentImage = Math.floor(amount/913);
      if(currentImage===0) prevref.current.style.display='none';
      else prevref.current.style.display='block';

      if(currentImage===images.length-1) nextref.current.style.display='none';
      else nextref.current.style.display='block';

     element = div.children[currentImage].firstChild;
      element.style.background='grey';
      
    });
setInterval(()=>{
  let num = currentImage+1
  if(currentImage === images.length-1) num = 0;
console.log(num);
window.location.href=`#sliderimage${num}`
},10000);
  },[]);

return(<div className="slider">

  <div className="sliderbuttonleft"><b ref = {prevref} onClick={()=>{
window.location.href=`#sliderimage${currentImage-1}`}}>P</b></div>

<div ref={sliderref} className="sliderselect">
{images.map((image,ind)=><img src={image} id={`sliderimage${ind}`} key={ind}/>)}
<div style={fixer()}> {images.map((i,ind)=>{
return(<a href={`#sliderimage${ind}`} key={ind}><span></span></a>);
})}

</div>
</div>

  <div className="sliderbuttonright"><b ref = {nextref} onClick={()=>{window.location.href=`#sliderimage${currentImage+1}`  }}>N</b></div>

  </div>);
}
