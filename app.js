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
    "meetingLink": "https://meet.google.com/qee-cfqi-qqp",
    "classroomLink": "https://classroom.google.com/c/Nzk1Njk4NzIxMjEw",
    "startDate": "Aug 24 (Sunday)",
    "status": "Starting tomorrow",
    "color": "#4285F4",
    "objectives": "Cover modern paradigms of AI beyond traditional learning. Equip students to design, implement, and apply novel AI techniques relevant to emerging real-world requirements.",
    "textbooks": [
      "Artificial Intelligence: A Modern Approach - Russell & Norvig (4th Edition)",
      "Intelligent Planning: A decomposition and abstraction based approach - Q. Yang"
    ],
    "bookLinks": [
      {
        "name": "Advanced AI Course Materials",
        "url": "https://drive.google.com/file/d/18Vpe5jgaxU192y0rU9W4YMW9wWLFNPPo/view"
      },
      {
        "name": "Advanced AI Textbook",
        "url": "https://drive.google.com/file/d/1yL_p5-KSAEPMgiAKMUDASS9jlB_yWCIN"
      }
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
    "classroomLink": "https://classroom.google.com/c/Nzk5NTU2MzQ2NzAw",
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
    "schedule": "1:30 PM – 3:00 PM",
    "days": ["Saturday"],
    "platform": "Google Classroom",
    "classroomCode": "zy3yovsw",
    "lmsLink": "https://iitjodhpur.futurense.com/course/view.php?id=218",
    "classroomLink": "https://classroom.google.com/c/Nzk5NTU2MzQ2NzAw",
    "meetingLink": "https://meet.google.com/jwx-qdgs-nkb",
    "startDate": "Aug 30 (Saturday)",
    "status": "Starting today",
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
    "days": ["Saturday", "Sunday"],
    "platform": "Google Classroom",
    "classroomCode": "TBD",
    "lmsLink": "https://iitjodhpur.futurense.com/course/view.php?id=253",
    "meetingLink": "https://meet.google.com/svh-jwvr-avo",
    "classroomLink": "https://classroom.google.com/c/ODAwNzE3ODIyMjc0",
    "startDate": "Aug 30",
    "status": "Schedule TBD - Day to be confirmed",
    "color": "#EA4335",
    "objectives": "Understand essential concepts of security, threats, and risk in digital environments. Gain practical skills in securing networks and systems.",
    "marksDistribution": {
      "Major Exam": "40%",
      "Minor Exam": "20%",
      "Quiz 1": "10%",
      "Quiz 2": "10%",
      "Assignment 1": "10%",
      "Assignment 2": "10%"
    },
    "marksNote": "This distribution may change, subject to your performance and the time you take to accomplish a specific component. Note that whenever a change occurs, it will be applicable to the whole class and not confined to the individual.",
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
    "lmsLink": "https://iitjodhpur.futurense.com/course/view.php?id=251",
    "syllabus": "The GPU Programming course at IIT Jodhpur provides a comprehensive exploration of parallel computing using GPUs. The curriculum is designed to equip students with the knowledge and skills to develop, debug, and optimize GPU-accelerated applications. The course is offered as an elective to B.Tech, M.Tech, and Ph.D. students in Computer Science and Engineering (CSE) and Artificial Intelligence (AI).\n\nDetailed Course Content:\n\nThe course is structured to cover the following key areas in detail:\n\n1. Foundational Concepts:\n   • Introduction to Parallelism: The course begins with the history and evolution of parallel computing, highlighting the need for accelerators like GPUs. It contrasts the architectural differences between CPUs and GPUs, explaining why GPUs are well-suited for data-parallel tasks.\n   • GPU Architecture: A deep dive into the hardware architecture of modern GPUs. This includes the organization of Streaming Multiprocessors (SMs), the hierarchy of memory (global, shared, local, constant, and texture), and the underlying execution model.\n\n2. Programming Models and Languages:\n   • CUDA (Compute Unified Device Architecture): A significant portion of the course is dedicated to programming in CUDA C/C++. Key concepts include:\n     - Kernels: Functions that execute in parallel on the GPU.\n     - Grids, Blocks, and Threads: The hierarchical structure used to manage parallel execution.\n     - Data Transfer: Techniques for moving data between the host (CPU) and the device (GPU).\n   • OpenCL (Open Computing Language): An alternative open standard for parallel programming across heterogeneous platforms, including GPUs from various vendors. The course covers the similarities and differences between OpenCL and CUDA.\n\n3. Memory and Synchronization:\n   • Memory Management: Strategies for efficient memory usage are crucial for GPU performance. This includes understanding and managing different memory spaces to minimize data transfer overhead and maximize bandwidth.\n   • Synchronization Primitives: Techniques to coordinate the execution of threads, such as barriers and atomic operations, are covered to ensure data consistency and avoid race conditions in parallel algorithms.\n\n4. Advanced Topics and Applications:\n   • Parallel Algorithms: The course explores the implementation of fundamental parallel algorithms on GPUs, such as reduction, prefix sum (scan), and matrix multiplication.\n   • Debugging and Profiling: Students learn to use tools like NVIDIA's Nsight to debug and profile their GPU programs, identify performance bottlenecks, and optimize their code for maximum efficiency.\n   • Case Studies: The course often includes case studies demonstrating the application of GPU programming in various domains, including:\n     - Image and video processing\n     - Scientific computing and simulations\n     - Machine learning and deep learning, where GPUs are instrumental in training large neural networks.\n\n5. Learning Outcomes:\n   Upon successful completion of the course, students are expected to be able to:\n   • Explain the fundamental concepts of GPU architecture and parallel programming.\n   • Develop and implement parallel programs using CUDA and/or OpenCL.\n   • Analyze, debug, and profile GPU applications to optimize performance.\n\nThe course has a credit structure of 3-0-0, indicating three lecture hours per week with no tutorial or practical sessions as part of the formal course structure, though assignments provide hands-on experience. The primary textbook for the course is often 'Programming Massively Parallel Processors' by David B. Kirk and Wen-mei W. Hwu.",
    "textbooks": [
      "Programming Massively Parallel Processors - Kirk & Hwu (4th Edition)",
      "CUDA by Example - Sanders & Kandrot"
    ],
    "lectureLinks": [
      {
        "name": "Lecture 1 Slides",
        "url": "https://iitjodhpur.futurense.com/pluginfile.php/24709/mod_resource/content/2/GPU_Programming_Lect01.pptx"
      }
    ],
    "bookLinks": [
      {
        "name": "Programming Massively Parallel Processors (PDF)",
        "url": "https://iitjodhpur.futurense.com/pluginfile.php/24710/mod_resource/content/3/programming_massively_parallel_processors.pdf"
      }
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
    const btn = e.target.closest('.nav__btn, .nav-mobile__btn');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();

    // Active state for both desktop and mobile
    document.querySelectorAll('.nav__btn, .nav-mobile__btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Update corresponding button in other navigation
    const subjectId = btn.getAttribute('data-subject');
    const targetSection = btn.getAttribute('data-section');
    
    if (subjectId) {
      // Update both desktop and mobile buttons
      document.querySelectorAll(`[data-subject="${subjectId}"]`).forEach(b => b.classList.add('active'));
    } else if (targetSection === 'dashboard') {
      // Update both desktop and mobile dashboard buttons
      document.querySelectorAll('[data-section="dashboard"]').forEach(b => b.classList.add('active'));
    }

    // Hide all sections
    sections.forEach(section => section.classList.remove('active'));

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

  const bookLinksHtml = (course.bookLinks && course.bookLinks.length)
    ? `<div class="book-links">
        <h4>Downloadable Books & Materials</h4>
        <ul>${course.bookLinks.map(book => `
          <li><a href="${book.url}" target="_blank" class="book-link">📖 ${book.name}</a></li>
        `).join('')}</ul>
      </div>`
    : '';

  const lectureLinksHtml = (course.lectureLinks && course.lectureLinks.length)
    ? `<div class="lecture-links">
        <h4>Lecture Materials</h4>
        <ul>${course.lectureLinks.map(lecture => `
          <li><a href="${lecture.url}" target="_blank" class="lecture-link">📊 ${lecture.name}</a></li>
        `).join('')}</ul>
      </div>`
    : '';

  const modulesHtml = (course.modules || []).map(module => `
    <li>
      <strong>${module.name}</strong>
      <ul>${(module.topics || []).map(topic => `<li>${topic}</li>`).join('')}</ul>
    </li>
  `).join('');

  const meetingLinks = course.meetingLinks || (course.meetingLink ? [course.meetingLink] : []);

  const meetingsHtml = course.meetingLink ? `
    <div class="meeting-details">
      <h4>Meeting Information</h4>
      <p><strong>Platform:</strong> ${course.platform}</p>
      <p><strong>Meeting Link:</strong> <a href="${course.meetingLink}" target="_blank" class="meeting-link-text">${course.meetingLink}</a></p>
      <a href="${course.meetingLink}" target="_blank" class="btn btn--primary">Join Meeting</a>
    </div>
  ` : '<p>No meeting information available yet.</p>';

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
        ${bookLinksHtml ? bookLinksHtml : ''}
        ${lectureLinksHtml ? lectureLinksHtml : ''}
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
        ${course.meetingLink ? `
          <a href="${course.meetingLink}" target="_blank" class="subtab join-meeting-tab">
            🎥 Join Meeting
          </a>
        ` : `
          <button class="subtab" data-panel="subject-meetings">Meeting Info</button>
        `}
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



// Dynamic schedule functions

function getWeekendCourses() {
  const courses = [];
  
  console.log('Getting weekend courses...');
  
  Object.values(courseData).forEach(course => {
    if (course.days && course.schedule !== 'TBD') {
      console.log(`Course: ${course.name}, Days: ${JSON.stringify(course.days)}, Schedule: ${course.schedule}`);
      
      if (Array.isArray(course.days)) {
        // Check if course has Saturday or Sunday
        if (course.days.includes('Saturday') || course.days.includes('Sunday')) {
          console.log(`✓ Adding ${course.name} for weekend`);
          courses.push(course);
        } else {
          console.log(`✗ ${course.name} not scheduled for weekend`);
        }
      } else if (course.days === 'Saturday' || course.days === 'Sunday' || course.days === 'Saturday only') {
        console.log(`✓ Adding ${course.name} for weekend (direct match)`);
        courses.push(course);
      } else {
        console.log(`✗ ${course.name} not scheduled for weekend (direct check)`);
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
  
  console.log(`Final weekend courses:`, courses.map(c => c.name));
  return courses;
}

function getCoursesForDay(targetDate) {
  const dayOfWeek = targetDate.toLocaleDateString('en-US', { weekday: 'long' });
  const courses = [];
  
  console.log(`Checking courses for: ${dayOfWeek}`);
  console.log(`Available courses:`, Object.values(courseData).map(c => `${c.name}: ${JSON.stringify(c.days)}`));
  
  Object.values(courseData).forEach(course => {
    if (course.days && course.schedule !== 'TBD') {
      console.log(`Course: ${course.name}, Days: ${JSON.stringify(course.days)}, Schedule: ${course.schedule}`);
      
      if (Array.isArray(course.days)) {
        if (course.days.includes(dayOfWeek)) {
          console.log(`✓ Adding ${course.name} for ${dayOfWeek}`);
          courses.push(course);
        } else {
          console.log(`✗ ${course.name} not matching ${dayOfWeek} (array check)`);
        }
      } else if (course.days === dayOfWeek || course.days === 'Saturday only') {
        console.log(`✓ Adding ${course.name} for ${dayOfWeek} (direct match or Saturday only)`);
        courses.push(course);
      } else {
        console.log(`✗ ${course.name} not matching ${dayOfWeek} (direct check)`);
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
  
  console.log(`Final courses for ${dayOfWeek}:`, courses.map(c => c.name));
  return courses;
}

function renderScheduleContainer(containerId, courses, isToday = false) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  if (courses.length === 0) {
    container.innerHTML = `
      <div class="schedule-item no-classes">
        <div class="course-info">
          <div class="course-name">No Weekend Classes</div>
          <div class="instructor">Enjoy your free time!</div>
        </div>
      </div>
    `;
    return;
  }
  
  container.innerHTML = `
    <div class="schedule-note">
      <p>📅 This schedule shows all courses scheduled for Saturday and Sunday</p>
    </div>
    ${courses.map(course => {
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
      if (course.startDate && course.startDate.includes('Starting today')) {
        statusBadge = '<div class="status-badge">Starting Today</div>';
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
    }).join('')}
  `;
}

function updateDashboardSchedules() {
  console.log('=== SCHEDULE UPDATE ===');
  
  // Get all weekend courses (Saturday and Sunday)
  const weekendCourses = getWeekendCourses();
  
  console.log('Weekend courses:', weekendCourses.map(c => `${c.name} (${c.schedule})`));
  console.log('=== END SCHEDULE UPDATE ===');
  
  renderScheduleContainer('weekend-schedule-container', weekendCourses, false);
}

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing application...');
  
  // Build navigation and handlers
  buildNavigationFromCourses();
  initializeNavigation();
  initSubjectSubtabs();
  
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