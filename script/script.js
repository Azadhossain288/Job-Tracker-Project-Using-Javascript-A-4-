






console.log("Job tracker");

let jobs = [
  { id: 1, company: 'Mobile First Corp', role: 'React Native Developer', location: 'Remote', type: 'Full-time', salary: '$130,000 - $175,000', status: 'not_applied', desc: 'Build cross-platform mobile applications using React Native.' },
  { id: 2, company: 'WebFlow Agency', role: 'Frontend Developer', location: 'Los Angeles, CA', type: 'Part-time', salary: '$80,000 - $120,000', status: 'not_applied', desc: 'Build responsive and interactive UIs using React and Tailwind CSS.' },
  { id: 3, company: 'DataViz Solutions', role: 'Data Scientist', location: 'Boston, MA', type: 'Full-time', salary: '$125,000 - $165,000', status: 'not_applied', desc: 'Analyze large datasets and build predictive models using Python.' },
  { id: 4, company: 'CloudScale Inc', role: 'Full Stack Developer', location: 'Austin, TX', type: 'Full-time', salary: '$140,000 - $180,000', status: 'not_applied', desc: 'Build and maintain full stack web apps using Node.js and React.' },
  { id: 5, company: 'AI Ventures', role: 'Machine Learning Engineer', location: 'Remote', type: 'Full-time', salary: '$150,000 - $200,000', status: 'not_applied', desc: 'Develop and deploy machine learning models for real-world applications.' },
  { id: 6, company: 'FinTech Labs', role: 'Frontend Developer', location: 'New York, NY', type: 'Full-time', salary: '$110,000 - $150,000', status: 'not_applied', desc: 'Create beautiful and fast frontend experiences for our fintech platform.' },
  { id: 7, company: 'DeepMind Studio', role: 'Machine Learning Engineer', location: 'San Francisco, CA', type: 'Full-time', salary: '$180,000 - $220,000', status: 'not_applied', desc: 'Research and implement deep learning algorithms for AI products.' },
  { id: 8, company: 'GreenTech Solutions', role: 'Full Stack Developer', location: 'Seattle, WA', type: 'Full-time', salary: '$130,000 - $170,000', status: 'not_applied', desc: 'Work on sustainability-focused web apps using React and Python.' },
  { id: 9, company: 'Block, Inc. (Square)', role: 'Senior Software Engineer', location: 'San Francisco, CA (Remote)', type: 'Full-time', salary: '$165,000 - $210,000', status: 'not_applied', desc: 'Build secure, scalable financial systems and APIs using Golang, Ruby, and AWS.' }
  

];

// Stats update
function updateStats() {
  document.getElementById('total').textContent=jobs.length;
  document.getElementById('interview-count').textContent=jobs.filter(j => j.status === 'interview').length;
  document.getElementById('rejected-count').textContent=jobs.filter(j => j.status === 'rejected').length;
}




function createJobCard(job) {
  return `
    <div class="bg-white rounded-xl shadow p-5 border-l-4 border-blue-500" id="job-${job.id}">
      <div class="flex justify-between items-start">
        <div>
          <h2 class="text-lg font-bold">${job.company}</h2>
          <p class="text-gray-500 text-sm">${job.role}</p>
        </div>
        <div class="flex gap-2">
          
          <button onclick="deleteJob(${job.id})" class="border rounded-lg p-2 text-gray-400 hover:text-red-500">🗑️</button>
        </div>
      </div>

      <div class="flex gap-4 mt-3 text-sm text-gray-500">
        <span>📍 ${job.location}</span>
        <span>💼 ${job.type}</span>
        <span>💰 ${job.salary}</span>
      </div>

      <p class="text-sm text-gray-500 mt-3">${job.desc}</p>

      <div class="flex gap-3 mt-4 items-center">
        ${job.status === 'interview' || job.status === 'rejected' ? `
          <span onclick="setStatus(${job.id}, '${job.status}')" 
            class="cursor-pointer text-xs font-bold px-3 py-1 rounded-full ${job.status === 'interview' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}">
             ${job.status === 'interview' ? 'Interview' : 'Rejected'}
          </span>
        ` : ''}
        <button onclick="setStatus(${job.id}, 'interview')" 
          class="border-2 border-green-500 px-4 py-1 rounded-lg text-sm font-semibold transition
          ${job.status === 'interview' ? 'bg-green-500 text-white' : 'text-green-500 hover:bg-green-500 hover:text-white'}">
          Interview
        </button>
        <button onclick="setStatus(${job.id}, 'rejected')" 
          class="border-2 border-red-500 px-4 py-1 rounded-lg text-sm font-semibold transition
          ${job.status === 'rejected' ? 'bg-red-500 text-white' : 'text-red-500 hover:bg-red-500 hover:text-white'}">
          Rejected
        </button>
      </div>
    </div>
  `;
}



// Randing all card
function renderJobs(filter = 'all') {
  const jobList = document.getElementById('job-list');

  const filtered = filter === 'all' ? jobs : jobs.filter(j => j.status === filter);



  const countLabel = document.getElementById('jobs-count-label');
  countLabel.textContent = filter === 'all'
  ? `${jobs.length} Jobs`
  : `${filtered.length} of ${jobs.length} Jobs`;

  if (filtered.length === 0) {
    jobList.innerHTML = `
      <div class="text-center py-16 text-gray-400 bg-white shadow-lg rounded-xl">
        <p class="text-4xl mb-3">📋</p>
        <p class="font-semibold">No jobs available</p>
        <p>Check back soon for new job opportunities</p>
      </div>`;
  } else {
    jobList.innerHTML = filtered.map(job => createJobCard(job)).join('');
  }

  updateStats();
}

// Delete
function deleteJob(id) {
  jobs = jobs.filter(j => j.id !== id);
  renderJobs(currentFilter);
}

// Status toggle
function setStatus(id, status) {
  const job = jobs.find(j => j.id === id);
  job.status = job.status === status ? 'not_applied' : status;
  renderJobs(currentFilter);
}

// Filter tabs
let currentFilter = 'all';

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentFilter = btn.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('bg-blue-600', 'text-white');
      b.classList.add('text-gray-500');
    });
    btn.classList.add('bg-blue-600', 'text-white');
    btn.classList.remove('text-gray-500');
    renderJobs(currentFilter);
  });
});

// Start
renderJobs();