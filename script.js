(function(){
var $=function(s){return document.querySelector(s)};
var CLUB_EMAIL="club@example.com"; // replace with the club's real email
var MORE={
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
 petro:{t:"Petrochemistry & Chemical Engineering",c:"#35e0c1",n:1,img:"petro",
  a:["The Petrochemistry and Chemical Engineering Department focuses on exploring the scientific principles and industrial applications of chemistry and petrochemistry. It aims to introduce students to modern developments in chemical industries while encouraging scientific research, experimentation, and practical projects.","By connecting academic knowledge with real industrial processes, the department seeks to deepen students' understanding of the chemical and petrochemical sectors and their role in technological and industrial development."],
  l:["Organizing scientific and practical activities in chemistry and petrochemistry.","Introducing students to recent developments in chemical and petrochemical industries.","Encouraging scientific research and applied projects.","Connecting academic knowledge with industrial applications."],
  i:"This department helps students develop scientific curiosity, analytical thinking, and a better understanding of industrial processes. It also introduces them to potential career and research opportunities in chemical engineering, petrochemistry, and related industries."},
 cs:{t:"Computer Science, Robotics & Automation",c:"#5aa9ff",n:2,img:"cs",
  a:["The Computer Science, Robotics and Automation Department explores the role of digital technologies and intelligent systems in modern industry. It focuses on bringing together programming, artificial intelligence, robotics, and industrial automation to develop innovative solutions for real-world engineering challenges.","A particular emphasis is placed on the integration of computer science and automation within the petrochemical and chemical industries, demonstrating how modern technologies can improve industrial processes, monitoring, and operational efficiency."],
  l:["Exploring applications of artificial intelligence and automation in the petrochemical industry.","Developing digital solutions for industrial processes and chemical engineering.","Introducing students to industrial control systems, simulation, and process monitoring.","Encouraging collaborative projects combining computer science, automation, and petrochemistry.","Exploring robotics, programming, and intelligent technological systems."],
  i:"Students gain exposure to emerging technologies and develop technical and problem-solving skills. They learn how digital systems can be applied to industrial environments, opening opportunities in artificial intelligence, robotics, industrial automation, and software engineering."},
 comm:{t:"Communications & External Relations",c:"#ffb547",n:3,img:"comm",
  a:["The Communications and External Relations Department serves as the link between the club, its members, and the outside world. It is responsible for managing the club's communication, developing its public presence, and establishing relationships with universities, institutions, organizations, and potential partners.","Through effective communication and collaboration, the department works to expand the club's network, promote its initiatives, and create opportunities for cooperation and professional exchange."],
  l:["Managing the club's communication and media activities.","Building relationships with universities, institutions, and potential partners.","Coordinating with guests, speakers, and external organizations.","Promoting the club's initiatives, projects, and activities.","Supporting partnerships and collaborative opportunities.","Representing the club during external events and activities."],
  i:"Members develop communication, networking, negotiation, and organizational skills. They gain experience interacting with professionals and institutions while learning how to establish meaningful partnerships and represent an organization effectively."},
 design:{t:"Decoration & Design",c:"#ff6fb5",n:4,img:"design",
  a:["The Decoration and Design Department is responsible for bringing creativity and visual identity to the club. It focuses on developing artistic concepts and creative materials that reflect the club's personality, enhance its presence, and contribute to the overall experience of its events.","Through graphic design, visual communication, and event decoration, the department transforms ideas into engaging visual experiences."],
  l:["Developing the club's visual identity and creative materials.","Designing posters, presentations, banners, and promotional materials.","Contributing to the decoration and aesthetic organization of events.","Developing creative concepts in design and visual innovation.","Collaborating with other departments to create visual content for their projects and activities."],
  i:"Students develop their artistic abilities, creativity, and visual communication skills. They gain practical experience in design and creative teamwork while learning how visual identity and presentation can influence the way ideas and initiatives are perceived."}
};
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function openDept(k){var d=DEPTS[k],m=MORE[k];if(!d)return;
 var p=$("#panel"),base="images/dept-"+d.img;
 p.style.setProperty("--a",d.c);$("#pT").textContent=d.t;$("#pI").innerHTML=document.querySelector('[data-d="'+k+'"] .ico').innerHTML;
 var li=function(a){return a.map(function(x,i){return'<div class="act"><b>0'+(i+1)+' /</b>'+esc(x)+'</div>'}).join("")};
 $("#pB").innerHTML='<img class="dimg" src="'+base+'.jpg" alt="" onerror="this.onerror=null;this.src=\''+base+'.svg\'">'
  +'<span class="eyebrow">/ 0'+d.n+' &middot; GET TO KNOW US</span><h3 class="big" style="margin-top:.6rem!important">About the <span class="grad">department.</span></h3>'
  +'<p class="lead2">'+esc(m.x)+'</p>'+d.a.map(function(x){return'<p>'+esc(x)+'</p>'}).join("")
  +'<h3 class="big">Our <span class="grad">activities.</span></h3><div class="acts2">'+li(d.l)+'</div>'
  +'<h3 class="big">Ideas we can <span class="grad">do together.</span></h3><div class="acts2">'+m.f.map(function(x,i){var t=x.split(": ");return'<div class="act"><b>IDEA 0'+(i+1)+'</b><strong>'+esc(t[0])+'</strong><br>'+esc(t[1]||"")+'</div>'}).join("")+'</div>'
  +'<h3 class="big">Skills you will <span class="grad">gain.</span></h3><div class="tags">'+m.s.map(function(x){return'<span>'+esc(x)+'</span>'}).join("")+'</div>'
  +'<h3 class="big">Our <span class="grad">impact.</span></h3><p>'+esc(d.i)+'</p>'
  +'<div class="gal">'+[1,2,3].map(function(n){return'<img src="'+base+'-'+n+'.jpg" alt="" onerror="this.remove()">'}).join("")+'</div>'
  +'<div class="cta2"><div><h3>Your curiosity belongs here.</h3><p>Ready to jump in?</p></div><button class="solid" id="joinD">Join this department</button></div>';
 p.hidden=false;document.body.style.overflow="hidden";p.scrollTop=0;
 $("#joinD").onclick=function(){closeDept();$("#regF").dp.value=d.t;$("#regD").showModal()}}
function closeDept(){$("#panel").hidden=true;document.body.style.overflow="";if(location.hash.indexOf("#dept-")===0)history.replaceState(null,"","#depts")}
document.querySelectorAll(".card").forEach(function(b){b.onclick=function(){location.hash="dept-"+b.dataset.d}});
$("#back").onclick=function(){location.hash="depts"};
function route(){var h=location.hash;if(h.indexOf("#dept-")===0)openDept(h.slice(6));else{$("#panel").hidden=true;document.body.style.overflow=""}}
window.addEventListener("hashchange",route);route();
$("#bReg").onclick=function(){$("#regD").showModal()};$("#bIn").onclick=function(){$("#inD").showModal()};
document.querySelectorAll("[data-close]").forEach(function(b){b.onclick=function(){b.closest("dialog").close()}});
function load(){try{return JSON.parse(localStorage.getItem("ngc_members")||"[]")}catch(e){return[]}}
function save(a){try{localStorage.setItem("ngc_members",JSON.stringify(a))}catch(e){}}
function key(f,l,b){return(f.trim()+"|"+l.trim()+"|"+b).toLowerCase()}
function welcome(n){$("#welcome").textContent=n?"Welcome, "+n+".":""}
$("#regF").onsubmit=function(e){e.preventDefault();var f=e.target,v=function(n){return f[n].value},a=load();
 var m={fn:v("fn"),ln:v("ln"),bd:v("bd"),st:v("st"),yr:v("yr"),dp:v("dp"),sk:v("sk")};
 if(a.some(function(x){return key(x.fn,x.ln,x.bd)===key(m.fn,m.ln,m.bd)})){$("#regM").textContent="You are already registered. Use Sign in.";return}
 a.push(m);save(a);welcome(m.fn);confetti($("#regD"));
 var body="First name: "+m.fn+"\nLast name: "+m.ln+"\nBirthday: "+m.bd+"\nStudies: "+m.st+"\nYear: "+m.yr+"\nDepartment: "+m.dp+"\nSkills: "+m.sk;
 $("#regM").innerHTML="Registered. <a href='mailto:"+CLUB_EMAIL+"?subject="+encodeURIComponent("New member: "+m.fn+" "+m.ln)+"&body="+encodeURIComponent(body)+"'>Send your details to the club</a> to confirm.";
 f.reset()};
$("#inF").onsubmit=function(e){e.preventDefault();var f=e.target,m=load().filter(function(x){return key(x.fn,x.ln,x.bd)===key(f.fn.value,f.ln.value,f.bd.value)})[0];
 if(!m){$("#inM").textContent="No member found with these details. Check them or register.";return}
 welcome(m.fn);$("#inD").close();f.reset();$("#inM").textContent=""};
$("#fbForm").onsubmit=function(e){e.preventDefault();var f=e.target;
 $("#fbMsg").innerHTML="Thank you. <a href='mailto:"+CLUB_EMAIL+"?subject="+encodeURIComponent("Club feedback")+"&body="+encodeURIComponent(f.m.value)+"'>Send it to the club by email</a>.";f.reset()};
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
})();
