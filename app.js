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
  "sde": {
    "id": "sde",
    "name": "Software and Data Engineering",
    "instructors": ["Dr. Sumit Kalra"],
    "schedule": "TBD",
    "days": ["Saturday", "Sunday"],
    "platform": "Zoom/LMS",
    "startDate": "Aug 30",
    "status": "Starts next week",
    "color": "#34A853",
    "objectives": "Understand and engineer robust, high-quality software systems. Master contemporary data storage, retrieval, and analytics pipelines.",
    "textbooks": [
      "Software Engineering: A Practitioner's Approach - Pressman & Maxim (9th Edition)",
      "Fundamentals of Database Systems - Elmasri & Navathe (7th Edition)",
      "Fundamentals of Data Engineering - Joe Reis & Matt Housley"
    ],
    "modules": [
      {
        "name": "Software Engineering",
        "topics": ["Lifecycle Models", "Requirements", "UML", "Architecture"]
      },
      {
        "name": "Data Engineering",
        "topics": ["Data Models", "Storage", "Query Processing", "ETL"]
      }
    ]
  },
  "cs": {
    "id": "cs",
    "name": "Cyber Security",
    "instructors": ["Dr. Nitin Awathare"],
    "schedule": "TBD",
    "days": "TBD",
    "platform": "Google Classroom",
    "startDate": "TBD",
    "status": "Details pending",
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
    "name": "GPU Programming",
    "instructors": ["TBD"],
    "schedule": "8:00 AM – 9:30 AM",
    "days": ["Saturday", "Sunday"],
    "platform": "Zoom",
    "meetingLink": "https://futurense.zoom.us/j/88040308066?pwd=yh69JD0Rd6IZefsW2hIXoiBgA3lTyI.1",
    "startDate": "Starting Soon",
    "status": "3 Credit Course - Confirmed Schedule",
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

// Progress tracking state - only for lectures, no assignments
let progressState = {};

// Initialize progress state for lectures only
function initializeProgress() {
  Object.keys(courseData).forEach(courseId => {
    if (!progressState[courseId]) {
      progressState[courseId] = {};
      courseData[courseId].modules.forEach((module, index) => {
        progressState[courseId][index] = false;
      });
    }
  });
}

// Navigation functionality - fixed implementation
function initializeNavigation() {
  console.log('Initializing navigation...');
  
  const navButtons = document.querySelectorAll('.nav__btn');
  const sections = document.querySelectorAll('.section');
  
  console.log('Found nav buttons:', navButtons.length);
  console.log('Found sections:', sections.length);
  
  navButtons.forEach((btn, index) => {
    console.log(`Nav button ${index}:`, btn.dataset.section);
    
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const targetSection = this.dataset.section;
      console.log('Navigating to section:', targetSection);
      
      // Remove active class from all nav buttons
      navButtons.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Hide all sections
      sections.forEach(section => {
        section.classList.remove('active');
        console.log('Hiding section:', section.id);
      });
      
      // Show target section
      const targetElement = document.getElementById(targetSection);
      if (targetElement) {
        targetElement.classList.add('active');
        console.log('Showing section:', targetSection);
        
        // Load section-specific content
        if (targetSection === 'progress') {
          setTimeout(() => renderProgressTracker(), 100);
        }
      } else {
        console.error('Target section not found:', targetSection);
      }
    });
  });
}

// Course detail modal functionality
function initializeCourseModals() {
  console.log('Initializing course modals...');
  
  // Use event delegation for course detail buttons
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('course-details-btn')) {
      e.preventDefault();
      e.stopPropagation();
      
      const courseId = e.target.dataset.course;
      const course = courseData[courseId];
      
      console.log('Opening modal for course:', courseId);
      
      if (course) {
        const modal = document.getElementById('course-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');
        
        if (modal && modalTitle && modalBody) {
          modalTitle.textContent = course.name;
          modalBody.innerHTML = generateCourseDetailHTML(course);
          modal.classList.remove('hidden');
        }
      }
    }
  });
  
  // Close modal functionality
  const modal = document.getElementById('course-modal');
  const closeBtn = document.querySelector('.close-btn');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      modal.classList.add('hidden');
    });
  }
  
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  }
}

// Generate course detail HTML with verified information only
function generateCourseDetailHTML(course) {
  let html = `
    <div class="course-info">
      <h3>Course Information</h3>
      <p><strong>Instructors:</strong> ${Array.isArray(course.instructors) ? course.instructors.join(', ') : course.instructors}</p>
      <p><strong>Schedule:</strong> ${course.schedule}</p>
      <p><strong>Days:</strong> ${Array.isArray(course.days) ? course.days.join(', ') : course.days}</p>
      <p><strong>Platform:</strong> ${course.platform}</p>
      <p><strong>Start Date:</strong> ${course.startDate}</p>
      <p><strong>Status:</strong> ${course.status}</p>
      ${course.classroomCode && course.classroomCode !== 'TBD' ? `<p><strong>Classroom Code:</strong> <code>${course.classroomCode}</code></p>` : '<p><strong>Classroom Code:</strong> TBD</p>'}
      ${course.meetingLink ? `<p><strong>Meeting Link:</strong> <a href="${course.meetingLink}" target="_blank">Join Meeting</a></p>` : ''}
    </div>
    
    <div class="course-objectives">
      <h3>Course Objectives</h3>
      <p>${course.objectives}</p>
    </div>
    
    <div class="course-modules">
      <h3>Course Modules & Topics</h3>
      <ul>
        ${course.modules.map(module => `
          <li>
            <strong>${module.name}</strong>
            <ul>
              ${module.topics.map(topic => `<li>${topic}</li>`).join('')}
            </ul>
          </li>
        `).join('')}
      </ul>
    </div>
    
    ${course.textbooks ? `
      <div class="course-books">
        <h3>Recommended Textbooks</h3>
        <ul>
          ${course.textbooks.map(book => `<li>${book}</li>`).join('')}
        </ul>
      </div>
    ` : ''}
    
    <div class="course-note">
      <h3>Important Note</h3>
      <p><strong>No assignments are tracked until they are officially assigned by professors.</strong> This progress tracker is only for lectures and personal study planning.</p>
    </div>
  `;
  
  return html;
}

// Progress tracker functionality - lectures only
function renderProgressTracker() {
  console.log('Rendering progress tracker...');
  
  const container = document.getElementById('progress-container');
  
  if (!container) {
    console.error('Progress container not found');
    return;
  }
  
  let html = '';
  Object.keys(courseData).forEach(courseId => {
    const course = courseData[courseId];
    const completedModules = Object.values(progressState[courseId]).filter(Boolean).length;
    const totalModules = course.modules.length;
    const progressPercentage = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;
    
    html += `
      <div class="progress-card">
        <div class="progress-header">
          <h3>${course.name}</h3>
          <span>${completedModules}/${totalModules} modules completed</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progressPercentage}%"></div>
        </div>
        <div class="modules-list">
          ${course.modules.map((module, index) => `
            <div class="module-item">
              <input 
                type="checkbox" 
                class="module-checkbox" 
                data-course="${courseId}" 
                data-module="${index}"
                ${progressState[courseId][index] ? 'checked' : ''}
              >
              <span class="module-name">${module.name}</span>
              
            </div>
          `).join('')}
        </div>
        <div class="course-status">
          <small><strong>Status:</strong> ${course.status}</small>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
  
  // Add event listeners for checkboxes using event delegation
  container.addEventListener('change', function(e) {
    if (e.target.classList.contains('module-checkbox')) {
      const courseId = e.target.dataset.course;
      const moduleIndex = parseInt(e.target.dataset.module);
      
      progressState[courseId][moduleIndex] = e.target.checked;
      
      // Re-render to update progress bar
      setTimeout(() => renderProgressTracker(), 100);
    }
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
  
  // Initialize all components
  initializeProgress();
  initializeNavigation();
  initializeCourseModals();
  initializeStudyPlanner();
  
  // Initialize dynamic schedules
  updateDashboardSchedules();
  
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

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  // Close modal with Escape key
  if (e.key === 'Escape') {
    const modal = document.getElementById('course-modal');
    if (modal && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
    }
  }
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