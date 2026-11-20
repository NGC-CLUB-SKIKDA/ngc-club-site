(function(){
var $=function(s){return document.querySelector(s)};
var CLUB_EMAIL="new.generation.club.21@gmail.com"; // replace with the club's real email
var LANG="en",WN="",EN_TITLE=document.title;try{LANG=localStorage.getItem("ngc_lang")==="ar"?"ar":"en"}catch(e){}
function T(s){return LANG==="ar"&&(s in AR)?AR[s]:s}
function norm(s){return s.replace(/\s+/g," ").trim()}
function applyLang(){var ar=LANG==="ar";document.documentElement.lang=LANG;document.documentElement.dir=ar?"rtl":"ltr";document.title=ar?AR["New Generation Club"]:EN_TITLE;
 var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null),n,list=[];while(n=w.nextNode())list.push(n);
 list.forEach(function(n){if(n.parentNode.closest("script,style"))return;if(n.__en===undefined){var k=norm(n.nodeValue);if(!k||!(k in AR))return;n.__en=n.nodeValue}
  var m=n.__en.match(/^(\s*)([\s\S]*?)(\s*)$/);n.nodeValue=ar?m[1]+AR[norm(m[2])]+m[3]:n.__en});
 document.querySelectorAll("[placeholder]").forEach(function(o){if(!o.dataset.en)o.dataset.en=o.placeholder;o.placeholder=T(o.dataset.en)});
 $("#bLang").textContent=ar?"English":"العربية";showW();renderEvents();renderAnn()}
function showW(){$("#welcome").textContent=WN?T("Welcome,")+" "+WN+(LANG==="ar"?"":"."):""}
document.querySelectorAll("#regF select option").forEach(function(o){if(!o.hasAttribute("value"))o.value=o.textContent});

var MORE={
 hr:{"x": "The people side of the club: finding, welcoming and growing the talent that makes every other department possible.", "f": ["Welcome Day: a friendly first meeting with games and a tour of every department", "Skills Match: a short quiz that suggests the best department for each newcomer", "Mock Interviews: practice sessions with feedback, useful for internships", "CV Clinic: help members build a CV that stands out", "Team Spirit Challenge: friendly competitions between departments", "Member of the Month: celebrate people who go the extra mile"], "s": ["Communication", "Empathy", "Teamwork", "Organization", "Leadership"]},
 petro:{x:"Think of it as the place where textbook chemistry meets the real plant: why petroleum becomes plastics, fuels and fibres, and how engineers make those processes safer and cleaner.",
  f:["Virtual plant tour: follow crude oil from the well to finished products","Mini lab sessions: simple, safe experiments on density, distillation and reactions","Industry talks: invite engineers to share what their day really looks like","Quiz night: a chemistry and petrochemistry challenge with prizes","Case study battle: teams compete to solve a real process problem","Poster day: present a chemical process in the most creative way"],
  s:["Analytical thinking","Lab curiosity","Process understanding","Teamwork","Presenting ideas"]},
 cs:{x:"Here, code meets machines: from teaching a robot to follow a line to simulating an industrial process or building an AI that spots problems in sensor data.",
  f:["Build-a-bot weekend: a line follower or obstacle-avoiding robot from scratch","Process simulation lab: model a simple chemical process on a computer","AI mini challenge: detect faults in sample sensor data","Hackathon: solve an industrial problem in a single day","Control basics: see how automated plants keep running","Code and chill: peer-learning evenings for Python and Arduino"],
  s:["Programming","AI basics","Robotics","Automation","Problem solving"]},
 comm:{x:"This is the department that makes the club visible and connected: it talks to the world, welcomes guests and builds the partnerships that open doors for everyone.",
  f:["Guest speaker series: invite professionals and alumni to talk with members","Social media crew: weekly posts, stories and behind-the-scenes content","Club podcast: interviews with members and guests","University and company visits: build partnerships face to face","Welcome desk: greet guests and run the schedule at events","Newsletter: tell the story of what the club achieved this month"],
  s:["Public speaking","Networking","Negotiation","Writing","Organization"]},
 design:{x:"Every great event has a look and a feeling. This department creates both: logos, posters and the decoration that turns a classroom into a place people remember.",
  f:["Poster challenge: members design the poster for the next event","Decoration crew: themes, lights and photo corners for club events","Brand kit: the colors, fonts and templates the whole club uses","Merch ideas: stickers, badges and tote bags with the club logo","Design workshop: Canva, Figma or Photoshop basics","Art wall: a club mural or an exhibition of member work"],
  s:["Creativity","Graphic design","Visual storytelling","Event styling","Teamwork"]}
};
var DEPTS={
 hr:{"t": "Human Resources", "c": "#c48bff", "n": 5, "img": "hr", "h": "images/dept-hr.svg", "bg": "images/dept-hr-bg.jpg", "g": [["images/dept-hr-1.jpg", ""], ["images/dept-hr-2.jpg", ""], ["images/dept-hr-3.jpg", ""]], "a": ["The Human Resources Department is the heart of the club's community. It welcomes new members, matches people with the departments where they can grow, and keeps the team motivated, connected and organized.", "By caring for the people behind every project, the department builds a club culture based on respect, teamwork and opportunity."], "l": ["Welcoming and onboarding new members.", "Reviewing membership applications and answering applicants by email.", "Matching members with the departments and roles that fit their skills and interests.", "Organizing team-building activities and member meetups.", "Tracking attendance, participation and member feedback.", "Supporting members with training, mentoring and conflict resolution."], "i": "Members develop leadership, listening and organizational skills, and learn how recruitment, teamwork and motivation work in a real organization. It prepares them for careers in management, recruitment and people development."},
 petro:{t:"Petrochemistry & Chemical Engineering",c:"#35e0c1",n:1,img:"petro",h:"images/dept-petro.svg",bg:"images/dept-petro-7.jpg",g:[["images/dept-petro-1.jpg", "NGC Members"], ["images/dept-petro-2.jpg", "NGC Members"], ["images/dept-petro-3.jpg", "NGC Members"], ["images/dept-petro-4.jpg", "NGC Members"], ["images/dept-petro.jpg", "NGC Members"], ["images/dept-petro-6.jpg", ""]],
  a:["The Petrochemistry and Chemical Engineering Department focuses on exploring the scientific principles and industrial applications of chemistry and petrochemistry. It aims to introduce students to modern developments in chemical industries while encouraging scientific research, experimentation, and practical projects.","By connecting academic knowledge with real industrial processes, the department seeks to deepen students' understanding of the chemical and petrochemical sectors and their role in technological and industrial development."],
  l:["Organizing scientific and practical activities in chemistry and petrochemistry.","Introducing students to recent developments in chemical and petrochemical industries.","Encouraging scientific research and applied projects.","Connecting academic knowledge with industrial applications."],
  i:"This department helps students develop scientific curiosity, analytical thinking, and a better understanding of industrial processes. It also introduces them to potential career and research opportunities in chemical engineering, petrochemistry, and related industries."},
 cs:{t:"Computer Science, Robotics & Automation",c:"#5aa9ff",n:2,img:"cs",h:"images/dept-cs.svg",bg:"images/dept-cs-bg.jpg",g:[["images/dept-cs.jpg", ""], ["images/dept-cs-2.jpg", ""], ["images/dept-cs-3.jpg", ""], ["images/dept-cs-5.jpg", ""], ["images/dept-cs-6.jpg", ""], ["images/dept-cs-7.jpg", ""]],
  a:["The Computer Science, Robotics and Automation Department explores the role of digital technologies and intelligent systems in modern industry. It focuses on bringing together programming, artificial intelligence, robotics, and industrial automation to develop innovative solutions for real-world engineering challenges.","A particular emphasis is placed on the integration of computer science and automation within the petrochemical and chemical industries, demonstrating how modern technologies can improve industrial processes, monitoring, and operational efficiency."],
  l:["Exploring applications of artificial intelligence and automation in the petrochemical industry.","Developing digital solutions for industrial processes and chemical engineering.","Introducing students to industrial control systems, simulation, and process monitoring.","Encouraging collaborative projects combining computer science, automation, and petrochemistry.","Exploring robotics, programming, and intelligent technological systems."],
  i:"Students gain exposure to emerging technologies and develop technical and problem-solving skills. They learn how digital systems can be applied to industrial environments, opening opportunities in artificial intelligence, robotics, industrial automation, and software engineering."},
 comm:{t:"Communications & External Relations",c:"#ffb547",n:3,img:"comm",h:"images/dept-comm.svg",bg:"images/dept-comm-2.jpg",g:[["images/dept-comm-1.jpg", ""], ["images/dept-comm-3.jpg", ""], ["images/dept-comm-4.jpg", ""], ["images/dept-comm-5.jpg", ""], ["images/dept-comm-6.jpg", ""]],
  a:["The Communications and External Relations Department serves as the link between the club, its members, and the outside world. It is responsible for managing the club's communication, developing its public presence, and establishing relationships with universities, institutions, organizations, and potential partners.","Through effective communication and collaboration, the department works to expand the club's network, promote its initiatives, and create opportunities for cooperation and professional exchange."],
  l:["Managing the club's communication and media activities.","Building relationships with universities, institutions, and potential partners.","Coordinating with guests, speakers, and external organizations.","Promoting the club's initiatives, projects, and activities.","Supporting partnerships and collaborative opportunities.","Representing the club during external events and activities."],
  i:"Members develop communication, networking, negotiation, and organizational skills. They gain experience interacting with professionals and institutions while learning how to establish meaningful partnerships and represent an organization effectively."},
 design:{t:"Decoration & Design",c:"#ff6fb5",n:4,img:"design",h:"images/dept-design.svg",bg:"images/dept-design-1.jpg",g:[["images/dept-design.jpg", ""], ["images/dept-design-2.jpg", ""], ["images/dept-design-3.jpg", ""], ["images/dept-design-4.jpg", ""], ["images/dept-design-5.jpg", ""]],
  a:["The Decoration and Design Department is responsible for bringing creativity and visual identity to the club. It focuses on developing artistic concepts and creative materials that reflect the club's personality, enhance its presence, and contribute to the overall experience of its events.","Through graphic design, visual communication, and event decoration, the department transforms ideas into engaging visual experiences."],
  l:["Developing the club's visual identity and creative materials.","Designing posters, presentations, banners, and promotional materials.","Contributing to the decoration and aesthetic organization of events.","Developing creative concepts in design and visual innovation.","Collaborating with other departments to create visual content for their projects and activities."],
  i:"Students develop their artistic abilities, creativity, and visual communication skills. They gain practical experience in design and creative teamwork while learning how visual identity and presentation can influence the way ideas and initiatives are perceived."}
};
var TAGS={talk:["Talk","#ff6fb5"],fun:["Fun","#ffb547"],learn:["Learn","#35e0c1"],compete:["Compete","#5aa9ff"],community:["Community","#c48bff"]};
var EVENTS=[
 {k:"talk",t:"Speak-Out Sessions",d:"An open mic where every voice counts: share an idea, a story or a question in front of friendly listeners.",b:["Lightning talks of 3 to 5 minutes on any topic","Friendly debates on playful motions, like 'Robots should write poetry'","A feedback circle so speakers grow without pressure"]},
 {k:"learn",t:"Educational Games",d:"Learn without noticing: quizzes and puzzles built around science, code and design.",b:["Quiz battles with a live scoreboard","Escape-room puzzles mixing chemistry clues, logic and code","Trivia rounds like 'spot the bug' and 'name that molecule'"]},
 {k:"learn",t:"Hands-on Workshops",d:"Small groups, real tools, and something finished by the end of the session.",b:["Arduino and robotics basics","Lab safety and simple experiments","Poster design plus photo and video editing basics"]},
 {k:"compete",t:"Hackathon and Innovation Day",d:"One full day where mixed teams turn an idea into a working prototype.",b:["Teams of four with a member from each department","Mentors on hand to unblock you","Final demos judged on creativity, impact and teamwork"]},
 {k:"talk",t:"Guest Talks and Panels",d:"Engineers, alumni and creators share what their work is really like.",b:["A short talk followed by open Q&A","Panels on careers and research","Networking time with snacks"]},
 {k:"community",t:"Open Day and Exhibition",d:"Show the campus what New Generation builds, tests and creates.",b:["Project stands from every department","Live demos: robots, experiments, posters and videos","Visitors vote for their favorite project"]},
 {k:"community",t:"Community Days",d:"Give back together: campus clean-ups, school visits and science for kids.",b:["Mini science shows for school pupils","Campus clean-up and greening mornings","Book and supply donation drives"]}
];
var ANN={on:true,en:"Open Day next week! Come see what New Generation builds, tests and creates.",ar:"اليوم المفتوح الأسبوع القادم! تعالَ واكتشف ما يبنيه ويجرّبه ويبدعه الجيل الجديد.",link:"#events"};
function renderAnn(){var a=$("#annc");if(!a)return;var ar=LANG==="ar",t=(ar?(ANN.ar||ANN.en):(ANN.en||ANN.ar))||"",key=(ANN.en||"")+"|"+(ANN.ar||""),gone=false;
 try{gone=localStorage.getItem("ngc_ann")===key}catch(e){}
 if(ANN.on===false||!t||gone){a.hidden=true;return}
 $("#anncT").textContent=t;var l=$("#anncL");
 if(ANN.link&&/^(#|https?:\/\/|mailto:)/.test(ANN.link)){l.href=ANN.link;l.textContent=T("Learn more");l.hidden=false}else l.hidden=true;
 a.hidden=false}
if($("#anncX"))$("#anncX").onclick=function(){try{localStorage.setItem("ngc_ann",(ANN.en||"")+"|"+(ANN.ar||""))}catch(e){}$("#annc").hidden=true};
var evFilter="all";
function renderEvents(){var ar=LANG==="ar",g=$("#evGrid");if(!g)return;
 $("#evChips").innerHTML=["all"].concat(Object.keys(TAGS)).filter(function(k){return k==="all"||EVENTS.some(function(e){return e.k===k})}).map(function(k){return'<button type="button" class="evc'+(k===evFilter?" on":"")+'" data-k="'+k+'" style="--a:'+(k==="all"?"#8db8f5":TAGS[k][1])+'">'+T(k==="all"?"All":TAGS[k][0])+'</button>'}).join("");
 g.innerHTML=EVENTS.map(function(e,i){var x=ar?EVENTS_AR[i]:e;if(evFilter!=="all"&&e.k!==evFilter)return"";
  return'<article class="evcard" style="--a:'+TAGS[e.k][1]+'"><span class="num">/ '+(i<9?"0":"")+(i+1)+'</span><span class="evtag">'+T(TAGS[e.k][0])+'</span><h3>'+esc(x.t)+'</h3><p>'+esc(x.d)+'</p><ul>'+x.b.map(function(b){return'<li>'+esc(b)+'</li>'}).join("")+'</ul></article>'}).join("");
 var one=EVENTS.map(function(e,i){return'<span>'+esc((ar?EVENTS_AR[i]:e).t)+'</span><i>&#9679;</i>'}).join("");$("#tick").innerHTML=one+one;
 document.querySelectorAll(".evc").forEach(function(b){b.onclick=function(){evFilter=b.dataset.k;renderEvents()}})}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function openDept(k){var e=DEPTS[k],ar=LANG==="ar",d=ar?Object.assign({},e,DEPTS_AR[k]):e,m=ar?MORE_AR[k]:MORE[k];if(!d)return;
 var p=$("#panel");p.className="panel th-"+k;p.style.setProperty("--a",d.c);$("#pbg").style.backgroundImage='url("'+e.bg+'")';
 $("#pT").textContent=d.t;$("#pI").innerHTML=document.querySelector('[data-d="'+k+'"] .ico').innerHTML;
 var li=function(a){return a.map(function(x,i){return'<div class="act"><b>0'+(i+1)+' /</b>'+esc(x)+'</div>'}).join("")};
 var hd=function(a,b,st){return'<h3 class="big"'+(st?' style="margin-top:.6rem!important"':'')+'>'+T(a)+' <span class="grad">'+T(b)+'</span></h3>'};
 var gal=e.g.map(function(g){return'<figure class="fig"><img src="'+g[0]+'" alt="" loading="lazy" onerror="this.parentNode.remove()">'+(g[1]?'<figcaption>'+T(g[1])+'</figcaption>':'')+'</figure>'}).join("");
 $("#pB").innerHTML='<img class="dimg" src="'+e.h+'" alt="" onerror="this.remove()">'
  +'<span class="eyebrow">/ 0'+d.n+' &middot; '+T("GET TO KNOW US")+'</span>'+hd("About the","department.",1)
  +'<p class="lead2">'+esc(m.x)+'</p>'+d.a.map(function(x){return'<p>'+esc(x)+'</p>'}).join("")
  +hd("Our","activities.")+'<div class="acts2">'+li(d.l)+'</div>'
  +hd("Ideas we can","do together.")+'<div class="acts2">'+m.f.map(function(x,i){var t=x.split(": ");return'<div class="act"><b>'+T("IDEA")+' 0'+(i+1)+'</b><strong>'+esc(t[0])+'</strong><br>'+esc(t[1]||"")+'</div>'}).join("")+'</div>'
  +hd("Skills you will","gain.")+'<div class="tags">'+m.s.map(function(x){return'<span>'+esc(x)+'</span>'}).join("")+'</div>'
  +hd("Our","impact.")+'<p>'+esc(d.i)+'</p>'
  +'<div class="gal">'+gal+'</div>'
  +'<div class="cta2"><div><h3>'+T("Your curiosity belongs here.")+'</h3><p>'+T("Ready to jump in?")+'</p></div><button class="solid" id="joinD">'+T("Join this department")+'</button></div>';
 p.hidden=false;document.body.style.overflow="hidden";p.scrollTop=0;
 $("#joinD").onclick=function(){closeDept();$("#regF").dp.value=e.t;$("#regD").showModal()}}
function closeDept(){$("#panel").hidden=true;document.body.style.overflow="";if(location.hash.indexOf("#dept-")===0)history.replaceState(null,"","#depts")}
document.querySelectorAll(".card").forEach(function(b){b.onclick=function(){location.hash="dept-"+b.dataset.d}});
$("#back").onclick=function(){location.hash="depts"};
function route(){var h=location.hash;if(h.indexOf("#dept-")===0)openDept(h.slice(6));else{$("#panel").hidden=true;document.body.style.overflow=""}}
window.addEventListener("hashchange",route);route();
$("#bLang").onclick=function(){LANG=LANG==="ar"?"en":"ar";try{localStorage.setItem("ngc_lang",LANG)}catch(e){}applyLang();route()};
$("#bReg").onclick=function(){$("#regD").showModal()};$("#bIn").onclick=function(){$("#inD").showModal()};
document.querySelectorAll("[data-close]").forEach(function(b){b.onclick=function(){b.closest("dialog").close()}});
function load(){try{return JSON.parse(localStorage.getItem("ngc_members")||"[]")}catch(e){return[]}}
function save(a){try{localStorage.setItem("ngc_members",JSON.stringify(a))}catch(e){}}
function key(f,l,b){return(f.trim()+"|"+l.trim()+"|"+b).toLowerCase()}
function welcome(n){WN=n;showW()}
var c=$("#net"),x=c.getContext("2d"),P=[],W,H,reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
function size(){W=c.width=c.offsetWidth;H=c.height=c.offsetHeight;P=[];for(var i=0;i<Math.min(60,W/18);i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4})}
function tick(){x.clearRect(0,0,W,H);
 P.forEach(function(p,i){if(!reduce){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1}
  x.fillStyle="#8db8f5";x.beginPath();x.arc(p.x,p.y,2,0,7);x.fill();
  for(var j=i+1;j<P.length;j++){var q=P[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<120){x.strokeStyle="rgba(141,184,245,"+(1-d/120)*.5+")";x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}});
 if(!reduce)requestAnimationFrame(tick)}
size();tick();addEventListener("resize",function(){size();if(reduce)tick()});

function confetti(par){var cols=["#35e0c1","#5aa9ff","#ffb547","#ff6fb5","#c48bff"];for(var i=0;i<70;i++){var s=document.createElement("i");s.className="cf";s.style.cssText="left:"+Math.random()*100+"vw;background:"+cols[i%5]+";animation-delay:"+Math.random()*.5+"s;animation-duration:"+(1.8+Math.random()*1.6)+"s";par.appendChild(s);setTimeout(function(e){e.remove()},4500,s)}}
if(!reduce){document.querySelectorAll(".card").forEach(function(cd){cd.addEventListener("mousemove",function(e){var r=cd.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;cd.style.transform="perspective(700px) rotateX("+(-y*8)+"deg) rotateY("+(x*8)+"deg) translateY(-6px)"});cd.addEventListener("mouseleave",function(){cd.style.transform=""})})}
if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add("in");io.unobserve(en.target)}})},{threshold:.12});document.querySelectorAll("main section").forEach(function(s){s.classList.add("rv");io.observe(s)})}

var lb=document.createElement("div");lb.id="lb";lb.hidden=true;
lb.innerHTML='<div class="lbbox" id="lbBox"><img id="lbImg" alt=""></div><button class="lbx" id="lbX" type="button" aria-label="Close">&times;</button><button class="lbn lbp" id="lbP" type="button" aria-label="Previous">&#8249;</button><button class="lbn lbq" id="lbN" type="button" aria-label="Next">&#8250;</button><div class="lbt"><button id="lbM" type="button" aria-label="Zoom out">&minus;</button><span id="lbC"></span><button id="lbA" type="button" aria-label="Zoom in">+</button></div>';
document.body.appendChild(lb);
var lbList=[],lbI=0,lbZ=1,lbBox=$("#lbBox"),lbImg=$("#lbImg");
function lbZoom(z){lbZ=Math.max(1,Math.min(4,z));if(lbZ<=1){lbImg.style.cssText="";lbBox.scrollLeft=0;lbBox.scrollTop=0}else{lbImg.style.cssText="width:"+(lbZ*100)+"vw;height:auto;object-fit:initial;cursor:zoom-out"}}
function lbShow(){var it=lbList[lbI];lbImg.src=it.src;lbZoom(1);$("#lbC").textContent=it.cap;$("#lbP").style.display=$("#lbN").style.display=lbList.length>1?"":"none"}
function lbGo(d){lbI=(lbI+d+lbList.length)%lbList.length;lbShow()}
function lbClose(){lb.hidden=true;lbImg.src=""}
$("#pB").addEventListener("click",function(e){var im=e.target.closest(".fig img");if(!im)return;var all=[].slice.call(document.querySelectorAll("#pB .fig img"));
 lbList=all.map(function(i){var f=i.parentNode.querySelector("figcaption");return{src:i.src,cap:f?f.textContent:""}});lbI=all.indexOf(im);lb.hidden=false;lbShow()});
$("#lbX").onclick=lbClose;$("#lbP").onclick=function(){lbGo(-1)};$("#lbN").onclick=function(){lbGo(1)};
$("#lbA").onclick=function(){lbZoom(lbZ+.75)};$("#lbM").onclick=function(){lbZoom(lbZ-.75)};
var drag=null;
lbBox.addEventListener("mousedown",function(e){drag={x:e.clientX,y:e.clientY,l:lbBox.scrollLeft,t:lbBox.scrollTop,m:false};e.preventDefault()});
window.addEventListener("mousemove",function(e){if(!drag)return;var dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(Math.abs(dx)+Math.abs(dy)>5)drag.m=true;if(lbZ>1){lbBox.scrollLeft=drag.l-dx;lbBox.scrollTop=drag.t-dy}});
window.addEventListener("mouseup",function(){if(drag&&!drag.m&&!lb.hidden)lbZoom(lbZ>1?1:2.5);drag=null});
lbBox.addEventListener("wheel",function(e){e.preventDefault();lbZoom(lbZ+(e.deltaY<0?.4:-.4))},{passive:false});
document.addEventListener("keydown",function(e){if(lb.hidden)return;if(e.key==="Escape"){lbClose();e.stopPropagation()}else if(e.key==="ArrowLeft")lbGo(-1);else if(e.key==="ArrowRight")lbGo(1);else if(e.key==="+")lbZoom(lbZ+.75);else if(e.key==="-")lbZoom(lbZ-.75)},true);
window.NGC={T:T,welcome:welcome,confetti:confetti,getAnn:function(){return Object.assign({},ANN)},setAnn:function(o){ANN=Object.assign({},ANN,o);renderAnn()}};
applyLang();
})();
