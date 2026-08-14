const activities = [
  {id:"k-read-1",grade:"K",subject:"reading",icon:"🔤",title:"Letter Match",desc:"Match the uppercase letter to its lowercase partner.",skill:"Letter recognition",q:"Which is the lowercase partner of A?",answers:["a","b","d","g"],correct:0},
  {id:"k-math-1",grade:"K",subject:"math",icon:"🍎",title:"Count the Apples",desc:"Count objects and choose the matching number.",skill:"Counting",q:"How many apples are here? 🍎 🍎 🍎 🍎",answers:["3","4","5","6"],correct:1},
  {id:"k-life-1",grade:"K",subject:"life",icon:"🧼",title:"Hand Washing Steps",desc:"Put the simple hand-washing routine in order.",skill:"Daily routine",q:"What comes first?",answers:["Dry hands","Wet hands","Leave the sink","Eat"],correct:1},
  {id:"1-read-1",grade:"1",subject:"reading",icon:"📚",title:"Main Idea",desc:"Choose what a short passage is mostly about.",skill:"Comprehension",q:"A story describes a child planting, watering and caring for a seed. What is it mostly about?",answers:["Growing a plant","Buying shoes","Playing soccer","Cooking dinner"],correct:0},
  {id:"1-math-1",grade:"1",subject:"math",icon:"➕",title:"Add Within 10",desc:"Practice simple addition with friendly numbers.",skill:"Addition",q:"What is 4 + 3?",answers:["6","7","8","9"],correct:1},
  {id:"1-write-1",grade:"1",subject:"writing",icon:"✏️",title:"Build a Sentence",desc:"Choose the word that completes the sentence.",skill:"Sentence building",q:"The dog ___ fast.",answers:["run","runs","running","ran"],correct:1},
  {id:"2-math-1",grade:"2",subject:"math",icon:"🔢",title:"Place Value",desc:"Identify the value of a digit in a two-digit number.",skill:"Place value",q:"In 47, what is the value of the 4?",answers:["4","7","40","47"],correct:2},
  {id:"2-science-1",grade:"2",subject:"science",icon:"🌱",title:"Plant Needs",desc:"Identify what plants need to grow.",skill:"Life science",q:"Which helps most plants grow?",answers:["Sunlight","A pillow","A toy","A shoe"],correct:0},
  {id:"2-read-1",grade:"2",subject:"reading",icon:"🧠",title:"Story Sequence",desc:"Think about what happened first, next and last.",skill:"Sequencing",q:"Which word tells us something happened next?",answers:["First","Next","Yesterday","Before"],correct:1},
  {id:"3-math-1",grade:"3",subject:"math",icon:"✖️",title:"Multiplication Groups",desc:"Understand multiplication as equal groups.",skill:"Multiplication",q:"What is 3 × 4?",answers:["7","10","12","14"],correct:2},
  {id:"3-science-1",grade:"3",subject:"science",icon:"🌦️",title:"Weather Patterns",desc:"Recognize common weather observations.",skill:"Earth science",q:"Which tool measures temperature?",answers:["Thermometer","Ruler","Scale","Clock"],correct:0},
  {id:"3-write-1",grade:"3",subject:"writing",icon:"📝",title:"Strong Details",desc:"Choose a detail that makes a sentence clearer.",skill:"Descriptive writing",q:"Which detail best adds information to “The dog ran.”?",answers:["The brown dog ran quickly across the yard.","The dog ran.","Dog.","It."],correct:0},
  {id:"4-read-1",grade:"4",subject:"reading",icon:"🔎",title:"Evidence Finder",desc:"Choose a sentence that supports an idea in a passage.",skill:"Text evidence",q:"Which is evidence that a character is prepared?",answers:["She packed her bag the night before.","She likes blue.","The day was Tuesday.","She saw a bird."],correct:0},
  {id:"4-math-1",grade:"4",subject:"math",icon:"🍕",title:"Fractions",desc:"Recognize equivalent fractions.",skill:"Fractions",q:"Which fraction equals 1/2?",answers:["1/3","2/4","3/5","4/6"],correct:1},
  {id:"4-life-1",grade:"4",subject:"life",icon:"💵",title:"Money Choices",desc:"Practice planning a simple purchase.",skill:"Money skills",q:"You have $5 and spend $3. How much is left?",answers:["$1","$2","$3","$8"],correct:1},
  {id:"5-math-1",grade:"5",subject:"math",icon:"📐",title:"Area Basics",desc:"Find the area of a rectangle.",skill:"Measurement",q:"A rectangle is 5 units long and 3 units wide. What is its area?",answers:["8","15","16","20"],correct:1},
  {id:"5-science-1",grade:"5",subject:"science",icon:"🌎",title:"Water Cycle",desc:"Connect evaporation, condensation and precipitation.",skill:"Earth systems",q:"What happens when water vapor cools and forms tiny droplets?",answers:["Condensation","Melting","Freezing","Boiling"],correct:0},
  {id:"5-write-1",grade:"5",subject:"writing",icon:"💡",title:"Claim & Reason",desc:"Choose a reason that supports a simple claim.",skill:"Argument writing",q:"Claim: “Schools should have a quiet reading time.” Which is a reason?",answers:["It gives students time to focus.","Books have pages.","The classroom has desks.","Tuesday comes after Monday."],correct:0},
  {id:"6-math-1",grade:"6",subject:"math",icon:"📊",title:"Ratios",desc:"Compare two quantities using a ratio.",skill:"Ratios",q:"There are 2 red blocks and 3 blue blocks. What is red:blue?",answers:["2:3","3:2","2:5","5:2"],correct:0},
  {id:"6-science-1",grade:"6",subject:"science",icon:"⚡",title:"Energy Transfer",desc:"Identify an example of energy changing form.",skill:"Physical science",q:"A flashlight changes stored battery energy mostly into what?",answers:["Light and heat","Water","Soil","Sound only"],correct:0},
  {id:"6-life-1",grade:"6",subject:"life",icon:"📅",title:"Plan a Task",desc:"Break a larger task into manageable steps.",skill:"Executive skills",q:"What is a helpful first step for a big project?",answers:["Understand the goal and make a small plan.","Wait until the last minute.","Do every step at once.","Skip the instructions."],correct:0}
];

const state = {
  grade: localStorage.getItem("bs-grade") || "K",
  subject: localStorage.getItem("bs-subject") || "all",
  progress: JSON.parse(localStorage.getItem("bs-progress") || "{}"),
  settings: JSON.parse(localStorage.getItem("bs-settings") || "{}")
};

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

function save() {
  localStorage.setItem("bs-grade", state.grade);
  localStorage.setItem("bs-subject", state.subject);
  localStorage.setItem("bs-progress", JSON.stringify(state.progress));
  localStorage.setItem("bs-settings", JSON.stringify(state.settings));
}

function filtered() {
  return activities.filter(a => a.grade === state.grade && (state.subject === "all" || a.subject === state.subject));
}

function renderActivities() {
  const list = filtered();
  $("#resultCount").textContent = `${list.length} activities`;
  $("#activityHeading").textContent = `Grade ${state.grade === "K" ? "K" : state.grade} activities`;
  $("#activityGrid").innerHTML = list.length ? list.map(a => `
    <article class="activity-card">
      <span class="activity-icon" aria-hidden="true">${a.icon}</span>
      <h3>${a.title}</h3>
      <p>${a.desc}</p>
      <div class="meta"><span>${a.skill}</span><span>${state.progress[a.id]?.completed ? "✓ Completed" : "New"}</span></div>
      <button class="start-activity" data-id="${a.id}">${state.progress[a.id]?.completed ? "Practice again" : "Start"}</button>
    </article>`).join("") :
    `<div class="panel"><h3>No activities yet</h3><p>Try another subject or grade.</p></div>`;
  $$(".start-activity").forEach(b => b.addEventListener("click", () => openActivity(b.dataset.id)));
}

function setFilters() {
  $$(".grade-chip").forEach(b => b.classList.toggle("active", b.dataset.grade === state.grade));
  $$(".subject-chip").forEach(b => b.classList.toggle("active", b.dataset.subject === state.subject));
  renderActivities();
  save();
}

function openActivity(id) {
  const a = activities.find(x => x.id === id);
  $("#activityContent").innerHTML = `
    <p class="eyebrow">${a.subject} · Grade ${a.grade}</p>
    <h2>${a.icon} ${a.title}</h2>
    <p>${a.desc}</p>
    <div class="activity-question">${a.q}</div>
    <div class="answer-grid">
      ${a.answers.map((ans,i)=>`<button class="answer-btn" data-index="${i}">${ans}</button>`).join("")}
    </div>
    <div id="feedback" aria-live="polite"></div>`;
  $("#activityDialog").showModal();
  $$(".answer-btn").forEach(btn => btn.addEventListener("click", () => {
    const chosen = Number(btn.dataset.index);
    const ok = chosen === a.correct;
    const rec = state.progress[a.id] || {attempts:0,correct:0,completed:false};
    rec.attempts++;
    if (ok) { rec.correct++; rec.completed = true; rec.last = new Date().toISOString(); }
    state.progress[a.id] = rec;
    save();
    $("#feedback").innerHTML = ok
      ? `<div class="feedback good">🌟 Great work! You got it. <button class="primary" id="doneBtn">Done</button></div>`
      : `<div class="feedback try">Let's try again. Look carefully and choose another answer.</div>`;
    if (ok) $("#doneBtn").addEventListener("click", () => { $("#activityDialog").close(); renderActivities(); updateProgress(); });
  }));
}

function updateProgress() {
  const completed = Object.values(state.progress).filter(x=>x.completed);
  const attempts = Object.values(state.progress).reduce((n,x)=>n+(x.attempts||0),0);
  const correct = Object.values(state.progress).reduce((n,x)=>n+(x.correct||0),0);
  const pct = activities.length ? Math.round(completed.length / activities.length * 100) : 0;
  $("#completedCount").textContent = completed.length;
  $("#accuracy").textContent = attempts ? Math.round(correct/attempts*100)+"%" : "0%";
  $("#badgeCount").textContent = completed.length >= 10 ? 3 : completed.length >= 5 ? 2 : completed.length >= 1 ? 1 : 0;
  $("#streak").textContent = completed.length ? "1" : "0";
  $("#heroProgress").textContent = pct+"%";
  $("#heroBar").style.width = pct+"%";
  const subjects = ["reading","math","science","writing","life"];
  $("#subjectProgress").innerHTML = subjects.map(s => {
    const all = activities.filter(a=>a.subject===s);
    const done = all.filter(a=>state.progress[a.id]?.completed).length;
    const p = all.length ? Math.round(done/all.length*100) : 0;
    return `<div class="progress-line"><strong>${s[0].toUpperCase()+s.slice(1)}</strong><div class="progress-track"><div class="progress-fill" style="width:${p}%"></div></div><span>${p}%</span></div>`;
  }).join("");
  const dates = completed.map(x=>x.last).filter(Boolean).sort().reverse();
  $("#lastPractice").textContent = dates[0] ? `Last completed activity: ${new Date(dates[0]).toLocaleString()}` : "No practice recorded yet.";
  $("#dashboardTable").innerHTML = `<table><thead><tr><th>Activity</th><th>Grade</th><th>Subject</th><th>Status</th><th>Accuracy</th></tr></thead><tbody>${
    activities.map(a => {
      const p=state.progress[a.id];
      return `<tr><td>${a.title}</td><td>${a.grade}</td><td>${a.subject}</td><td>${p?.completed?"Completed":"Not started"}</td><td>${p?.attempts?Math.round(p.correct/p.attempts*100)+"%":"—"}</td></tr>`;
    }).join("")
  }</tbody></table>`;
}

function showView(name) {
  ["learn","progress","parent"].forEach(v => $("#"+v+"View").classList.toggle("hidden", v!==name));
  $$(".nav-btn").forEach(b => b.classList.toggle("active", b.dataset.view===name));
  if (name !== "learn") updateProgress();
  window.scrollTo({top:0, behavior:"smooth"});
}

$$(".grade-chip").forEach(b => b.addEventListener("click", () => { state.grade=b.dataset.grade; setFilters(); }));
$$(".subject-chip").forEach(b => b.addEventListener("click", () => { state.subject=b.dataset.subject; setFilters(); }));
$$(".nav-btn").forEach(b => b.addEventListener("click", () => showView(b.dataset.view)));
$("#startBtn").addEventListener("click", () => { showView("learn"); document.querySelector(".activity-card")?.scrollIntoView({behavior:"smooth"}); });
$("#todayBtn").addEventListener("click", () => { showView("learn"); document.querySelector(".activity-card")?.querySelector(".start-activity")?.click(); });
$("#resetFilters").addEventListener("click", () => { state.grade="K"; state.subject="all"; setFilters(); });
$("#closeActivity").addEventListener("click", () => $("#activityDialog").close());
$("#accessibilityBtn").addEventListener("click", () => $("#accessibilityDialog").showModal());
$("#closeAccessibility").addEventListener("click", () => { $("#accessibilityDialog").close(); save(); });
$("#downloadReport").addEventListener("click", () => {
  const completed = Object.values(state.progress).filter(x=>x.completed).length;
  const report = `Kindora Learning Report\n\nActivities completed: ${completed}\nGenerated: ${new Date().toLocaleString()}\n\nThis report is a local browser summary.`;
  const blob = new Blob([report], {type:"text/plain"});
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="kindora-report.txt"; a.click(); URL.revokeObjectURL(a.href);
});

const settingMap = {largeText:"large-text", reduceMotion:"reduce-motion", highContrast:"high-contrast", calmMode:"calm-mode"};
Object.entries(settingMap).forEach(([id, cls]) => {
  const el=$("#"+id);
  el.checked=!!state.settings[id];
  document.body.classList.toggle(cls, el.checked);
  el.addEventListener("change", () => {
    state.settings[id]=el.checked;
    document.body.classList.toggle(cls, el.checked);
    save();
  });
});

setFilters();
updateProgress();