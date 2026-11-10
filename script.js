const siteIntro=document.querySelector('#site-intro');
if(siteIntro){
  document.body.classList.add('intro-locked');
  const pageMain=document.querySelector('#main');
  pageMain?.setAttribute('aria-hidden','true');
  const dismissIntro=()=>{
    siteIntro.classList.add('is-dismissed');
    document.body.classList.remove('intro-locked');
    pageMain?.removeAttribute('aria-hidden');
    window.setTimeout(()=>siteIntro.remove(),700);
  };
  window.setTimeout(dismissIntro,9200);
}
const globalPresenceVideo=document.querySelector('#markets .map-video');
if(globalPresenceVideo){
  globalPresenceVideo.src='global-presence-square-video.mp4';
  globalPresenceVideo.load();
  globalPresenceVideo.play().catch(()=>{});
}
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('#site-nav');toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
const searchLink=document.querySelector('#site-nav a.search');
if(searchLink&&!searchLink.dataset.iconOnly){
  const iconLink=document.createElement('a');
  iconLink.className='search search-replacement';
  iconLink.href='#search';
  iconLink.setAttribute('aria-label','Search website');
  iconLink.dataset.iconOnly='true';
  const icon=document.createElement('img');
  icon.src='search-icon.jpeg?v=20261109-search-icon-clean';
  icon.alt='';
  iconLink.append(icon);
  searchLink.replaceWith(iconLink);
}
const productsHeading=document.querySelector('#products .showcase-head h2');
if(productsHeading) productsHeading.innerHTML=productsHeading.innerHTML.replaceAll('.','');
document.querySelector('#products .showcase-head > p')?.remove();
const energyProductImage=document.querySelector('#products .showcase-item:first-child .showcase-image img');
if(energyProductImage){energyProductImage.src='https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1200&q=82';energyProductImage.alt='Industrial storage tanks';}
const fluidProductImage=document.querySelector('#products .showcase-item:nth-child(4) .showcase-image img');
if(fluidProductImage){fluidProductImage.src='victor-product.jpg';fluidProductImage.alt='Industrial facility';}
const aboutImage=document.querySelector('#about .image-panel img');
if(aboutImage){aboutImage.src='about-container-port.jpeg';aboutImage.alt='Container port and cargo vessel at sunset';}
const heroHeading=document.querySelector('#home.hero h1');
if(heroHeading) heroHeading.innerHTML=heroHeading.innerHTML.replaceAll('.','');
const aboutHeading=document.querySelector('#about .copy h2');
if(aboutHeading) aboutHeading.innerHTML='<span>A considered</span><span>approach to</span><span><em>international trade</em></span>';
const marketsHeading=document.querySelector('#markets .copy h2');
if(marketsHeading) marketsHeading.innerHTML=marketsHeading.innerHTML.replaceAll('.','');
const qualitySubtitle=document.querySelector('#quality .quality-subtitle');
if(qualitySubtitle) qualitySubtitle.innerHTML='Clarity behind<br>every enquiry.';

const contactSection=document.querySelector('#contact.contact');
if(contactSection&&!contactSection.querySelector('.contact-bg-video')){
  const contactVideo=document.createElement('video');
  contactVideo.className='contact-bg-video';
  contactVideo.src='requirements-section-video.mp4';
  contactVideo.autoplay=true;
  contactVideo.muted=true;
  contactVideo.loop=true;
  contactVideo.playsInline=true;
  contactVideo.preload='auto';
  contactVideo.setAttribute('aria-hidden','true');
  contactSection.prepend(contactVideo);
}

const revealItems=document.querySelectorAll('[data-reveal]');
if('IntersectionObserver' in window){
  const revealObserver=new IntersectionObserver((entries,observer)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.16,rootMargin:'0px 0px -8%'});
  revealItems.forEach(item=>revealObserver.observe(item));
}else{revealItems.forEach(item=>item.classList.add('is-visible'));}

const energyCopy=document.querySelector('.showcase-item .showcase-copy');
if(energyCopy){
  const materialStrip=document.createElement('div');
  materialStrip.className='material-strip';
  materialStrip.innerHTML='<a class="material-tile adblue" href="#contact"><span>AdBlue</span></a><a class="material-tile base-oils" href="#contact"><span>Base Oils</span></a><a class="material-tile bitumen" href="#contact"><span>Road Bitumen</span></a>';
  energyCopy.append(materialStrip);
}

const qualityTabs=document.querySelectorAll('.quality-tab');
const qualityCards=document.querySelectorAll('.quality-card');
qualityTabs.forEach(tab=>tab.addEventListener('click',()=>{
  const filter=tab.dataset.qualityFilter;
  qualityTabs.forEach(item=>{const active=item===tab;item.classList.toggle('is-active',active);item.setAttribute('aria-selected',String(active));});
  qualityCards.forEach(card=>{card.hidden=filter!=='all'&&card.dataset.qualityCard!==filter;});
}));
document.querySelectorAll('.quality-detail').forEach(button=>button.addEventListener('click',()=>{
  const copy=button.nextElementSibling;
  const expanded=button.getAttribute('aria-expanded')==='true';
  button.setAttribute('aria-expanded',String(!expanded));
  copy.hidden=expanded;
  button.querySelector('span').textContent=expanded?'+':'−';
}));

const fertilizerCopy=document.querySelectorAll('.showcase-item')[1]?.querySelector('.showcase-copy');
if(fertilizerCopy){
  const fertilizerStrip=document.createElement('div');
  fertilizerStrip.className='material-strip fertilizer-strip';
  fertilizerStrip.innerHTML='<a class="material-tile urea" href="#contact"><span>Urea / Carbamide</span></a><a class="material-tile sulfur" href="#contact"><span>Sulfur</span></a><a class="material-tile potash" href="#contact"><span>Potash</span></a>';
  fertilizerCopy.append(fertilizerStrip);
}

const polymerCopy=document.querySelectorAll('.showcase-item')[2]?.querySelector('.showcase-copy');
if(polymerCopy){
  const polymerStrip=document.createElement('div');
  polymerStrip.className='material-strip polymer-strip';
  polymerStrip.innerHTML='<a class="material-tile polypropylene" href="#contact"><span>Polypropylene</span></a><a class="material-tile polyethylene" href="#contact"><span>Polyethylene</span></a>';
  polymerCopy.append(polymerStrip);
}

const fluidsCopy=document.querySelectorAll('.showcase-item')[3]?.querySelector('.showcase-copy');
if(fluidsCopy){
  const fluidsStrip=document.createElement('div');
  fluidsStrip.className='material-strip fluids-strip';
  fluidsStrip.innerHTML='<a class="material-tile adblue-specific" href="#contact"><span>AdBlue</span></a><a class="material-tile coolants" href="#contact"><span>Coolants</span></a><a class="material-tile brake-fluids" href="#contact"><span>Brake Fluids</span></a>';
  fluidsCopy.append(fluidsStrip);
}

const logistics=document.querySelector('.logistics');
const logisticsSteps=[...(logistics?.querySelectorAll('.steps article')||[])];
if(logistics && !logistics.querySelector('.logistics-section-heading')){
  logistics.insertAdjacentHTML('afterbegin','<div class="logistics-section-heading"><span>TRADING &amp; LOGISTICS</span><h2>From your requirement<br><em>to the delivery plan</em></h2></div>');
}
const logisticsCopy=[
  ['Source with clarity','Define the product, grade and procurement requirements with confidence.'],
  ['Coordinate with confidence','Align technical information, commercial terms and documentation.'],
  ['Deliver with control','Coordinate sea, road, rail and multimodal transport through trusted partners.']
];
const logisticsStageImages=['logistics-card-one.jpg','logistics-card-two-4k.jpg','trading-logistics-card-three-refinery-hq.png'];
const logisticsStageImageUrl=(index)=>`${logisticsStageImages[index]}?v=20261105-bg-sync`;
logisticsSteps.forEach((step,index)=>{
  if(logisticsCopy[index]){
    step.style.setProperty('--card-image',`url('${logisticsStageImageUrl(index)}')`);
    const heading=step.querySelector('h3');
    const description=step.querySelector('p');
    if(heading) heading.textContent=logisticsCopy[index][0];
    if(description) description.textContent=logisticsCopy[index][1];
    if(!step.querySelector('.stage-card-heading')) step.insertAdjacentHTML('afterbegin','<div class="stage-card-heading"><span>TRADING &amp; LOGISTICS</span><h2>From your requirement<br><em>to the delivery plan.</em></h2></div>');
    if(!step.querySelector('.stage-card-image')){
      const image=step.querySelector('img');
      const cardImage=document.createElement('div');
      cardImage.className='stage-card-image';
      cardImage.setAttribute('role','img');
      cardImage.setAttribute('aria-label',image?.alt||'Trading and logistics');
      step.querySelector('.stage-card-heading')?.after(cardImage);
    }
  }
});
if(logistics && logisticsSteps.length){
  const rail=document.createElement('nav');
  rail.className='logistics-orbit';
  rail.setAttribute('aria-label','Trading and logistics steps');
  rail.innerHTML=logisticsSteps.map((step,index)=>`<button type="button" aria-label="Go to step ${index+1}" aria-current="${index===0?'step':'false'}">${String(index+1).padStart(2,'0')}</button>`).join('');
  logistics.prepend(rail);
  const orbitButtons=[...rail.querySelectorAll('button')];
  logisticsSteps.forEach((step,index)=>{
    step.setAttribute('aria-label',`Step ${index+1}: ${step.querySelector('h3')?.textContent||''}`);
  });
  const setActive=(index)=>{
    logisticsSteps.forEach((step,i)=>step.classList.toggle('is-active',i===index));
    orbitButtons.forEach((button,i)=>{button.classList.toggle('is-active',i===index);button.setAttribute('aria-current',i===index?'step':'false')});
    logistics.style.setProperty('--stage-image',logisticsStageImages[index] ? `url('${logisticsStageImageUrl(index)}')` : 'none');
  };
  orbitButtons.forEach((button,index)=>button.addEventListener('click',()=>logisticsSteps[index].scrollIntoView({behavior:'smooth',block:'center'})));
  logisticsSteps[0]?.classList.add('is-active');
  orbitButtons[0]?.classList.add('is-active');
  orbitButtons[0]?.setAttribute('aria-current','step');
  setActive(0);
  window.addEventListener('keydown',(event)=>{
    if(!logistics.matches(':hover') && !logistics.contains(document.activeElement))return;
    const current=Math.max(0,orbitButtons.findIndex(button=>button.classList.contains('is-active')));
    const next=event.key==='ArrowDown'||event.key==='ArrowRight'?Math.min(logisticsSteps.length-1,current+1):event.key==='ArrowUp'||event.key==='ArrowLeft'?Math.max(0,current-1):current;
    if(next!==current){event.preventDefault();orbitButtons[next].focus();logisticsSteps[next].scrollIntoView({behavior:'smooth',block:'center'});}
  });
  const railStyle=document.createElement('style');
  railStyle.textContent=`
    .logistics{position:relative!important;display:block!important;min-height:120vh!important;height:auto!important;padding:0!important;overflow:visible!important;background:#172331 var(--stage-image) center/cover no-repeat!important;color:#172331!important;transition:background-image .45s ease}
.logistics::before,.logistics::after,.logistics .logistics-orbit{content:none!important;display:none!important;background:none!important;border:0!important;box-shadow:none!important}
    .logistics .section-intro{display:none!important}
    .logistics .steps{position:sticky!important;top:0!important;z-index:2;display:block!important;width:100%!important;height:100dvh!important;min-height:100vh!important;max-width:none!important;margin:0!important;padding:0!important}
    .logistics .steps article,.logistics .steps article:nth-child(even){position:absolute!important;left:50%!important;top:50%!important;z-index:3;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:flex-end!important;width:min(560px,42vw)!important;height:min(86vh,760px)!important;min-height:0!important;margin:0!important;padding:clamp(1.5rem,3vw,3rem)!important;overflow:hidden!important;transform:translate(-50%,-50%) scale(.96)!important;opacity:0!important;visibility:hidden!important;background:#fff!important;background-image:none!important;border:0!important;border-radius:30px!important;box-shadow:0 24px 70px rgba(0,0,0,.2)!important;color:#172331!important;transition:opacity .45s ease,transform .45s ease,visibility .45s ease!important}
    .logistics .steps article::after{display:none!important}
    .logistics .steps article.is-active{transform:translate(-50%,-50%) scale(1)!important;opacity:1!important;visibility:visible!important}
    .logistics .stage-card-heading{display:none!important}
    .logistics .steps article img{display:none!important}
    .logistics .steps article .stage-card-image{display:block!important;order:1;width:82%!important;height:52%!important;min-height:0!important;margin:0 auto auto!important;object-fit:cover!important;border-radius:30px!important;box-shadow:none!important}
    #logistics .steps article:not(.is-active){opacity:0!important;visibility:hidden!important;pointer-events:none!important;transform:translate(-50%,-50%) scale(.96)!important}
    #logistics .steps article.is-active{opacity:1!important;visibility:visible!important;pointer-events:auto!important;transform:translate(-50%,-50%) scale(1)!important}
    #logistics .steps article b,#logistics .steps article h3,#logistics .steps article p{transform:none!important}
    .logistics .steps article b{display:block!important;order:2;margin:1.5rem 0 .55rem;color:#172331!important;font-size:.85rem;font-weight:500}
    .logistics .steps article h3{order:3;display:block!important;margin:0 0 .55rem;color:#172331!important;font-size:clamp(1.45rem,2.4vw,2.2rem);font-weight:600;line-height:1.04;text-align:center;text-transform:none}
    .logistics .steps article p{order:4;display:block!important;margin:0;color:#52606d!important;font-size:1rem;line-height:1.5;text-align:center;max-width:28ch}
    .logistics-orbit{display:none!important}
    @media(max-width:800px){.logistics{min-height:120vh!important}.logistics .steps article,.logistics .steps article:nth-child(even){width:min(88vw,560px)!important;height:min(82vh,680px)!important;top:50%!important;padding:1.25rem 1.25rem 2.25rem!important}.logistics .steps article .stage-card-image{width:88%!important;height:50%!important}}
  `;
  document.head.append(railStyle);
  let ticking=false;
const updateLogisticsProgress=()=>{if(!logistics)return;const rect=logistics.getBoundingClientRect();const total=Math.max(1,logistics.offsetHeight-innerHeight);const progress=Math.min(1,Math.max(0,-rect.top/total));const activeIndex=Math.min(logisticsSteps.length-1,Math.floor(progress*logisticsSteps.length));setActive(activeIndex);logistics.style.setProperty('--logistics-progress',progress.toFixed(3));if(!ticking){requestAnimationFrame(()=>{ticking=false});ticking=true}};
  window.addEventListener('scroll',updateLogisticsProgress,{passive:true});
  updateLogisticsProgress();
  let lockedIndex=0;
  let wheelLocked=false;
  logistics.addEventListener('wheel',(event)=>{
    const sectionRect=logistics.getBoundingClientRect();
    const stageIsInViewport=sectionRect.top<=0 && sectionRect.bottom>=innerHeight;
    if(!stageIsInViewport)return;
    if(wheelLocked){event.preventDefault();return;}
    const direction=event.deltaY>0?1:-1;
    const next=Math.max(0,Math.min(logisticsSteps.length-1,lockedIndex+direction));
    if(next!==lockedIndex){
      event.preventDefault();
      wheelLocked=true;
      lockedIndex=next;
      setActive(lockedIndex);
      window.setTimeout(()=>{wheelLocked=false;},650);
    }else if((direction<0&&lockedIndex>0)||(direction>0&&lockedIndex<logisticsSteps.length-1)){
      event.preventDefault();
    }
  },{passive:false});
}

const whyQuality=document.querySelector('#quality.quality');
const whyItems=[...(whyQuality?.querySelectorAll('.quality-simple-cards article')||[])];
if(whyQuality&&whyItems.length){
  if(innerWidth<=700){whyItems.forEach(item=>item.classList.add('is-quality-visible'));}
  else if('IntersectionObserver' in window){
    const whyObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting)entry.target.classList.add('is-quality-visible');
    }),{threshold:.1,rootMargin:'-45% 0px -45% 0px'});
    whyItems.forEach(item=>whyObserver.observe(item));
  }else{whyItems.forEach(item=>item.classList.add('is-quality-visible'));}
}

if(location.hash==='#logistics'){
  const jumpToLogistics=()=>document.querySelector('#logistics')?.scrollIntoView({block:'start'});
  requestAnimationFrame(jumpToLogistics);
  window.addEventListener('load',jumpToLogistics,{once:true});
  setTimeout(jumpToLogistics,250);
}
