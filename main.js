let currentGR = "GR1";

function showForm(type) {
  document.getElementById('welcomePage').style.display = 'none';
  document.getElementById('authContainer').style.display = 'block';
  const loginF = document.getElementById('loginForm');
  const signupF = document.getElementById('signupForm');
  if(type === 'login') { loginF.classList.remove('hidden'); signupF.classList.add('hidden'); } 
  else { signupF.classList.remove('hidden'); loginF.classList.add('hidden'); }
}

function resetToWelcome() {
  document.getElementById('welcomePage').style.display = 'flex';
  document.getElementById('authContainer').style.display = 'none';
}

function loginSuccess() {
  currentGR = document.getElementById('groupSelect').value || "GR1";
  document.getElementById('authContainer').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';
  
  const adminArea = document.getElementById('adminArea');
  if(currentGR === "GR1") {
    adminArea.innerHTML = `<h4><i class="fas fa-user-shield"></i> GR1 Management</h4>
    <p>Admin Principal: <span class="badge-principal">Mourad</span></p>
    <p>Others Admins: <span class="badge-other">Moneim</span><span class="badge-other">Soufiane</span><span class="badge-other">Mohamed</span><span class="badge-other">Samia</span></p>`;
  } else {
    adminArea.innerHTML = `<h4><i class="fas fa-user-shield"></i> GR2 Management</h4>
    <p>Admin Principal: <span class="badge-principal">Mourad</span> <span class="badge-principal">Hajar</span></p>
    <p>Others Admins: <span class="badge-other">Marwa</span></p>`;
  }
}

function openSub(type) {
  document.getElementById('mainGrid').classList.add('hidden');
  const content = document.getElementById('subContent');
  document.getElementById('subPage').style.display = 'block';

  if(type === 'modules') {
    content.innerHTML = `<h2>Study Modules</h2>
      <div class="module-box"><h4>Spoken English</h4><ul><li><a href="#">phonetics_part1.pdf</a></li></ul></div>
      <div class="module-box"><h4>Paragraph Writing</h4><ul><li><a href="#">essay_structure.docx</a></li></ul></div>`;
  } else if(type === 'exams') {
    content.innerHTML = `<h2>Last Year Exams</h2>
      <div class="module-box"><h4>Semester 1 Exams (2025)</h4><ul><li><a href="#">Linguistics_Exam.pdf</a></li><li><a href="#">Literature_Exam.pdf</a></li></ul></div>`;
  } else if(type === 'space') {
    content.innerHTML = `<h2>Student Space & Links</h2>
      <a href="#" class="link-item"><i class="fab fa-whatsapp"></i> Link 1: WhatsApp Chat (${currentGR})</a>
      <a href="#" class="link-item"><i class="fab fa-whatsapp"></i> Link 2: WhatsApp Announcements (${currentGR})</a>
      <a href="#" class="link-item"><i class="fab fa-google"></i> Link 3: Google Classroom (${currentGR})</a>
      <hr>
      <a href="https://ent.uiz.ac.ma" target="_blank" class="link-item">ENT Platform Portal</a>
      <a href="http://www.flshm.ac.ma/convocations" target="_blank" class="link-item">FLSHM Convocation</a>`;
  } else if(type === 'all_ann') {
    content.innerHTML = `<h2>All Announcements</h2><div class="announcement-item"><strong>2026-01-15:</strong> New Year exams files added.</div>`;
  } else if(type === 'timetable') {
    content.innerHTML = `<h2>Timetable</h2><p>Latest update for ${currentGR} is now available.</p>`;
  } else if(type === 'makeup') {
    content.innerHTML = `<h2>Makeup Sessions</h2><div class="announcement-item">No sessions scheduled yet.</div>`;
  }
}

function closeSub() {
  document.getElementById('mainGrid').classList.remove('hidden');
  document.getElementById('subPage').style.display = 'none';
}
