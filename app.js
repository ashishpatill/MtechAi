// Verified course data from IIT Jodhpur MTech AI Trimester 3
const courseData = {
  "aai": {
    "id": "aai",
    "name": "Advanced Artificial Intelligence",
    "instructors": ["Dr. Vignesh", "Dr. Dipanjan Roy"],
    "schedule": "11:30 AM – 1:00 PM",
    "days": ["Saturday", "Sunday"],
    "classroomCode": "hijxvrwt",
    "platform": "Google Classroom",
    "startDate": "Aug 24 (Sunday)",
    "status": "Starting tomorrow",
    "color": "#4285F4",
    "objectives": "Cover modern paradigms of AI beyond traditional learning. Equip students to design, implement, and apply novel AI techniques relevant to emerging real-world requirements.",
    "textbooks": [
      "Artificial Intelligence: A Modern Approach - Russell & Norvig (4th Edition)",
      "Intelligent Planning: A decomposition and abstraction based approach - Q. Yang"
    ],
    "modules": [
      {
        "name": "Decision Making",
        "topics": ["Utility Theory and Functions", "Decision Networks", "Sequential Decision Problems"]
      },
      {
        "name": "Reinforcement Learning",
        "topics": ["Basic Ideas and Applications", "Formalization, Markov Decision Processes", "Different forms of RL: Passive and Active", "Learning optimal strategies"]
      },
      {
        "name": "Probabilistic Reasoning over Time",
        "topics": ["POMDPs, Hidden Markov Models", "Time-series Analysis: Basic Concepts", "Kalman Filters", "Simple 1D and multidimensional filtering"]
      }
    ]
  },
  "epl": {
    "id": "epl",
    "name": "Ethics and Professional Life",
    "instructors": ["Dr. Dinesh Mohan"],
    "schedule": "5:00 PM – 6:30 PM",
    "days": ["Saturday", "Sunday"],
    "platform": "Google Classroom",
    "meetingLink": "https://meet.google.com/dmh-kmuo-yib",
    "classroomCode": "zqvcgcui",
    "startDate": "Aug 23 (Saturday)",
    "status": "Starting today",
    "color": "#FBBC04",
    "objectives": "Foster awareness of ethical responsibilities in professional and technological careers. Develop moral decision-making skills.",
    "textbooks": [
      "Ethical Issues in Professional Life - J.C. Callahan",
      "Philosophy of Technology and Engineering Sciences - A. Meijers",
      "Engineering Ethics - C.B. Fleddermann"
    ],
    "modules": [
      {
        "name": "Professional Ethics Basics",
        "topics": ["Moral Reasoning", "Professional vs Ordinary Ethics"]
      },
      {
        "name": "Moral Problems",
        "topics": ["Rights & Duties", "Conflicts of Interest", "Whistleblowing"]
      },
      {
        "name": "Technology & Society",
        "topics": ["Innovation Ethics", "AI Ethics", "Social Responsibility"]
      }
    ]
  },
  "iip": {
    "id": "iip",
    "name": "Innovation and IP Management",
    "instructors": ["Dr. Manu Kanchan", "Dr. Deepak Saxena"],
    "schedule": "1:30-3:00 PM",
    "days": ["Saturday only"],
    "platform": "Google Classroom",
    "classroomCode": "zy3yovsw",
    "startDate": "Aug 30",
    "status": "Starts next week",
    "color": "#9C27B0",
    "objectives": "Understanding innovation processes and intellectual property management in technology sector.",
    "modules": [
      {
        "name": "Innovation Fundamentals",
        "topics": ["Innovation Process", "Technology Transfer", "Startup Ecosystem"]
      },
      {
        "name": "IP Management",
        "topics": ["Patents", "Copyrights", "Trade Secrets", "Licensing"]
      }
    ]
  },

  "cs": {
    "id": "cs",
    "name": "Cyber Security - Elective 1",
    "instructors": ["Dr. Nitin Awathare"],
    "schedule": "9:45 - 11:15",
    "days": "TBD",
    "platform": "Google Classroom",
    "startDate": "Aug 30",
    "status": "Schedule TBD - Day to be confirmed",
    "color": "#EA4335",
    "objectives": "Understand essential concepts of security, threats, and risk in digital environments. Gain practical skills in securing networks and systems.",
    "textbooks": [
      "Computer Security: Principles and Practice - Stallings & Brown",
      "Cryptography and Network Security - William Stallings",
      "The Web Application Hacker's Handbook - Stuttard & Pinto"
    ],
    "modules": [
      {
        "name": "Foundations",
        "topics": ["Threats", "Vulnerabilities", "Risk", "MITRE ATT&CK"]
      },
      {
        "name": "Network Security",
        "topics": ["Firewalls", "IDS/IPS", "VPNs", "Network Architecture"]
      },
      {
        "name": "Identity & Access",
        "topics": ["AAA", "LDAP", "MFA", "RBAC/ABAC"]
      }
    ]
  },
  "gpu": {
    "id": "gpu",
    "name": "GPU Programming - Elective 2",
    "instructors": ["Dr. Binod"],
    "schedule": "8:00 AM - 9:30 AM",
    "days": ["Saturday", "Sunday"],
    "platform": "Zoom/LMS",
    "meetingLink": "https://futurense.zoom.us/j/88040308066?pwd=yh69JD0Rd6IZefsW2hIXoiBgA3lTyI.1",
    "startDate": "Aug 24",
    "status": "Confirmed Schedule - Starting Aug 24",
    "color": "#FF9800",
    "objectives": "Master GPU architectures and parallel computing paradigms. Apply GPGPU knowledge to AI/ML problems.",
    "textbooks": [
      "Programming Massively Parallel Processors - Kirk & Hwu (4th Edition)",
      "CUDA by Example - Sanders & Kandrot"
    ],
    "modules": [
      {
        "name": "GPU Architecture",
        "topics": ["GPU vs CPU", "Memory Hierarchy", "CUDA/OpenCL"]
      },
      {
        "name": "Parallel Programming",
        "topics": ["Thread Management", "Memory Optimization", "Performance"]
      }
    ]
  }
};

// Navigation: build from courseData and handle Dashboard/Subject switching
function buildNavigationFromCourses() {
  const list = document.querySelector('.nav__list');
  if (!list) return;
  list.innerHTML = '';

  // Dashboard tab
  const liDashboard = document.createElement('li');
  liDashboard.innerHTML = '<button class="nav__btn active" data-section="dashboard">Dashboard</button>';
  list.appendChild(liDashboard);

  // Subject tabs
  Object.values(courseData).forEach(course => {
    const li = document.createElement('li');
    li.innerHTML = `<button class="nav__btn" data-subject="${course.id}">${course.name}</button>`;
    list.appendChild(li);
  });
}

function initializeNavigation() {
  console.log('Initializing navigation...');
  const sections = document.querySelectorAll('.section');

  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.nav__btn');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();

    // Active state
    document.querySelectorAll('.nav__btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Hide all sections
    sections.forEach(section => section.classList.remove('active'));

    const subjectId = btn.getAttribute('data-subject');
    const targetSection = btn.getAttribute('data-section');

    if (subjectId) {
      const subjectEl = document.getElementById('subject');
      if (subjectEl) {
        renderSubjectPage(subjectId);
        subjectEl.classList.add('active');
      }
    } else if (targetSection === 'dashboard') {
      const dashboardEl = document.getElementById('dashboard');
      if (dashboardEl) {
        dashboardEl.classList.add('active');
        // Ensure dashboard dynamic content stays fresh
        updateDashboardSchedules();
        renderDashboardUpcoming();
      }
    }
  });
}

// Subject Page Rendering
function renderSubjectPage(courseId) {
  const course = courseData[courseId];
  const container = document.getElementById('subject');
  if (!course || !container) return;

  const instructors = Array.isArray(course.instructors) ? course.instructors.join(', ') : course.instructors;
  const days = Array.isArray(course.days) ? course.days.join(', ') : course.days;

  const textbooksHtml = (course.textbooks && course.textbooks.length)
    ? `<ul>${course.textbooks.map(book => `<li>${book}</li>`).join('')}</ul>`
    : '';

  const modulesHtml = (course.modules || []).map(module => `
    <li>
      <strong>${module.name}</strong>
      <ul>${(module.topics || []).map(topic => `<li>${topic}</li>`).join('')}</ul>
    </li>
  `).join('');

  const meetingLinks = course.meetingLinks || (course.meetingLink ? [course.meetingLink] : []);

  const meetingsHtml = meetingLinks.length
    ? `<ul>${meetingLinks.map(link => `<li><a href="${link}" target="_blank">Join Meeting</a></li>`).join('')}</ul>`
    : '';

  container.innerHTML = `
    <div class="subject-header">
      <h2>${course.name}</h2>
      <div class="subject-meta">
        <div><strong>Instructors:</strong> ${instructors || ''}</div>
        <div><strong>Status:</strong> ${course.status || ''}</div>
      </div>
    </div>

    <div class="subject-body">
      <section class="subject-overview">
        <h3>Overview</h3>
        ${course.objectives ? `<p>${course.objectives}</p>` : ''}
        ${textbooksHtml ? `<div class="subject-books"><h4>Textbooks</h4>${textbooksHtml}</div>` : ''}
      </section>

      <section class="subject-modules">
        <h3>Modules & Topics</h3>
        ${modulesHtml ? `<ul>${modulesHtml}</ul>` : ''}
      </section>

      <section class="subject-resources">
        <h3>Resources</h3>
        <div id="subject-resources-list"></div>
      </section>

      <section class="subject-notes">
        <h3>Notes</h3>
        <div id="subject-notes-list"></div>
      </section>

      <div class="subtabs">
        <button class="subtab active" data-panel="subject-schedule">Schedule</button>
        <button class="subtab" data-panel="subject-meetings">Meeting Links</button>
      </div>
      <div id="subject-schedule" class="subtab-panel" style="display:block;">
        <div><strong>Days:</strong> ${days || ''}</div>
        <div><strong>Time:</strong> ${course.schedule || ''}</div>
        <div><strong>Platform:</strong> ${course.platform || ''}</div>
        <div><strong>Start Date:</strong> ${course.startDate || ''}</div>
        ${course.classroomCode && course.classroomCode !== 'TBD' ? `<div><strong>Classroom Code:</strong> <code>${course.classroomCode}</code></div>` : ''}
      </div>
      <div id="subject-meetings" class="subtab-panel">
        ${meetingsHtml}
      </div>
    </div>
  `;
}

function initSubjectSubtabs() {
  document.addEventListener('click', function(e) {
    const tab = e.target.closest('.subtab');
    if (!tab) return;
    e.preventDefault();
    const panelId = tab.getAttribute('data-panel');
    document.querySelectorAll('.subtab').forEach(b => b.classList.remove('active'));
    tab.classList.add('active');
    document.querySelectorAll('.subtab-panel').forEach(p => p.style.display = 'none');
    const panel = document.getElementById(panelId);
    if (panel) panel.style.display = 'block';
  });
}

// Dashboard Upcoming renderers (empty until data provided)
function renderDashboardUpcoming() {
  const targetIds = ['upcoming-assignments', 'upcoming-quizzes', 'upcoming-exams'];
  targetIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = '';
  });
}

// Study planner functionality - personal use only
function initializeStudyPlanner() {
  console.log('Initializing study planner...');
  
  const prevWeekBtn = document.getElementById('prev-week');
  const nextWeekBtn = document.getElementById('next-week');
  const currentWeekLabel = document.getElementById('current-week');
  
  if (!prevWeekBtn || !nextWeekBtn || !currentWeekLabel) {
    console.log('Study planner elements not found');
    return;
  }
  
  let currentWeekStart = new Date(2025, 7, 23); // Aug 23, 2025 (Saturday)
  
  function updateWeekDisplay() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const weekStart = currentWeekStart.toLocaleDateString('en-US', options);
    currentWeekLabel.textContent = `Week of ${weekStart}`;
  }
  
  prevWeekBtn.addEventListener('click', function(e) {
    e.preventDefault();
    currentWeekStart.setDate(currentWeekStart.getDate() - 7);
    updateWeekDisplay();
  });
  
  nextWeekBtn.addEventListener('click', function(e) {
    e.preventDefault();
    currentWeekStart.setDate(currentWeekStart.getDate() + 7);
    updateWeekDisplay();
  });
  
  updateWeekDisplay();
}

// Dynamic schedule functions
function updateCurrentDateTime() {
  const now = new Date();
  const dateOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const timeOptions = { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    hour12: true 
  };
  
  const dateDisplay = document.getElementById('current-date-display');
  const timeDisplay = document.getElementById('current-time-display');
  
  if (dateDisplay) {
    dateDisplay.textContent = now.toLocaleDateString('en-US', dateOptions);
  }
  if (timeDisplay) {
    timeDisplay.textContent = now.toLocaleTimeString('en-US', timeOptions);
  }
}

function getCoursesForDay(targetDate) {
  const dayOfWeek = targetDate.toLocaleDateString('en-US', { weekday: 'long' });
  const courses = [];
  
  Object.values(courseData).forEach(course => {
    if (course.days && course.schedule !== 'TBD') {
      if (Array.isArray(course.days)) {
        if (course.days.includes(dayOfWeek)) {
          courses.push(course);
        }
      } else if (course.days === dayOfWeek || course.days === 'Saturday only') {
        courses.push(course);
      }
    }
  });
  
  // Sort courses by time (handle time format variations)
  courses.sort((a, b) => {
    try {
      const timeA = a.schedule.split(' ')[0];
      const timeB = b.schedule.split(' ')[0];
      return timeA.localeCompare(timeB);
    } catch (error) {
      console.warn('Error sorting courses by time:', error);
      return 0;
    }
  });
  
  return courses;
}

function renderScheduleContainer(containerId, courses, isToday = false) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  if (courses.length === 0) {
    container.innerHTML = `
      <div class="schedule-item no-classes">
        <div class="course-info">
          <div class="course-name">No Classes Today</div>
          <div class="instructor">Enjoy your free time!</div>
        </div>
      </div>
    `;
    return;
  }
  
  container.innerHTML = courses.map(course => {
    let meetingInfo = '';
    if (course.meetingLink) {
      meetingInfo = `
        <div class="meeting-info">
          <a href="${course.meetingLink}" target="_blank" class="meeting-link-small">
            ${course.platform === 'Zoom' ? 'Join Zoom Meeting' : 'Join Meeting'}
          </a>
        </div>
      `;
    }
    
    let statusBadge = '';
    if (isToday && course.startDate && course.startDate.includes('First Class')) {
      statusBadge = '<div class="status-badge">First Class</div>';
    }
    
    return `
      <div class="schedule-item">
        <div class="time">${course.schedule}</div>
        <div class="course-info">
          <div class="course-name">${course.name}</div>
          <div class="instructor">${course.instructors.join(', ')}</div>
          ${meetingInfo}
          ${statusBadge}
        </div>
      </div>
    `;
  }).join('');
}

function updateDashboardSchedules() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  console.log('Current date:', today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
  console.log('Tomorrow date:', tomorrow.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
  
  const todayCourses = getCoursesForDay(today);
  const tomorrowCourses = getCoursesForDay(tomorrow);
  
  console.log('Today courses:', todayCourses);
  console.log('Tomorrow courses:', tomorrowCourses);
  
  renderScheduleContainer('today-schedule-container', todayCourses, true);
  renderScheduleContainer('tomorrow-schedule-container', tomorrowCourses, false);
  
  // Update current date and time
  updateCurrentDateTime();
}

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing application...');
  
  // Build navigation and handlers
  buildNavigationFromCourses();
  initializeNavigation();
  initSubjectSubtabs();
  initializeStudyPlanner();
  
  // Initialize dynamic schedules
  updateDashboardSchedules();
  renderDashboardUpcoming();
  
  // Update schedules every minute
  setInterval(updateDashboardSchedules, 60000);
  
  // Set initial section visibility
  const dashboardSection = document.getElementById('dashboard');
  const firstNavBtn = document.querySelector('.nav__btn[data-section="dashboard"]');
  
  console.log('Dashboard section:', dashboardSection);
  console.log('First nav button:', firstNavBtn);
  
  if (dashboardSection) {
    dashboardSection.classList.add('active');
  }
  
  if (firstNavBtn) {
    firstNavBtn.classList.add('active');
  }
  
  console.log('Application initialized successfully');
});

// Utility function to validate weekend-only schedule
function validateSchedule() {
  const weekendCourses = Object.values(courseData).filter(course => 
    course.days && (
      course.days.includes('Saturday') || 
      course.days.includes('Sunday') || 
      course.days === 'Saturday only'
    )
  );
  
  const confirmedWeekendCourses = weekendCourses.filter(course => 
    course.schedule !== 'TBD' && course.startDate !== 'TBD'
  );
  
  console.log(`Total courses: ${Object.keys(courseData).length}`);
  console.log(`Weekend courses: ${weekendCourses.length}`);
  console.log(`Confirmed weekend courses: ${confirmedWeekendCourses.length}`);
  
  // Ensure no Monday-Friday classes are scheduled
  const weekdayCourses = Object.values(courseData).filter(course => 
    course.days && typeof course.days === 'string' && 
    !course.days.includes('Saturday') && 
    !course.days.includes('Sunday') &&
    course.days !== 'TBD'
  );
  
  if (weekdayCourses.length > 0) {
    console.warn('Warning: Found courses scheduled on weekdays:', weekdayCourses);
  } else {
    console.log('✓ All courses properly scheduled for weekends only');
  }
}

// Run schedule validation
validateSchedule();