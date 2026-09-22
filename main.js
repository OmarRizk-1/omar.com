

// PARTICLES
const pc = document.getElementById('particles');
for(let i=0;i<25;i++){
  const p=document.createElement('div');
  p.className='particle';
  p.style.left=Math.random()*100+'vw';
  p.style.animationDuration=(8+Math.random()*15)+'s';
  p.style.animationDelay=(Math.random()*15)+'s';
  p.style.opacity=Math.random()*0.5;
  p.style.width=p.style.height=(1+Math.random()*2)+'px';
  pc.appendChild(p);
}

// CURSOR
const cur=document.getElementById('cur'), ring=document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{
  mx=e.clientX; my=e.clientY;
  cur.style.left=mx+'px'; cur.style.top=my+'px';
});
(function animR(){
  rx+=(mx-rx)*0.11; ry+=(my-ry)*0.11;
  ring.style.left=rx+'px'; ring.style.top=ry+'px';
  requestAnimationFrame(animR);
})();
document.querySelectorAll('a,button,.sk-card,.proj-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>ring.classList.add('big'));
  el.addEventListener('mouseleave',()=>ring.classList.remove('big'));
});

// TYPING
const phrases=['Building full-stack apps...','React + Node.js + MongoDB','PHP & MySQL solutions...','Clean code. Scalable systems.'];
let pi=0,ci=0,del=false;
const tel=document.getElementById('typed');
function type(){
  const cur2=phrases[pi];
  if(!del){ tel.textContent=cur2.slice(0,++ci); if(ci===cur2.length){del=true;setTimeout(type,1800);return;} }
  else{ tel.textContent=cur2.slice(0,--ci); if(ci===0){del=false;pi=(pi+1)%phrases.length;setTimeout(type,400);return;} }
  setTimeout(type,del?38:65);
}
type();

// SCROLL REVEAL
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('vis');
      e.target.querySelectorAll('.sk-bar').forEach(b=>{ b.style.width=b.dataset.w+'%'; });
    }
  });
},{threshold:0.12});
document.querySelectorAll('.rev').forEach(el=>obs.observe(el));

// TIMELINE
const tlobs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('.tl-item').forEach((item,i)=>{
        setTimeout(()=>item.classList.add('vis'),i*180);
      });
    }
  });
},{threshold:0.2});
document.querySelectorAll('.tl').forEach(el=>tlobs.observe(el));

// SKILL BARS on scroll
const skobs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('.sk-bar').forEach(b=>{ b.style.width=b.dataset.w+'%'; });
    }
  });
},{threshold:0.3});
document.querySelectorAll('.sk-card').forEach(el=>skobs.observe(el));
