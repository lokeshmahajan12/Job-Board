const jobsData = [
  { id: 1, title: "Frontend Developer", company: "Google", location: "Bangalore", description: "React developer with Tailwind experience" },
  { id: 2, title: "Backend Developer", company: "Amazon", location: "Hyderabad", description: "Node.js and MongoDB expertise required" },
  { id: 3, title: "Full Stack Developer", company: "Microsoft", location: "Remote", description: "React + Node.js full-stack development" },
  { id: 4, title: "UI/UX Designer", company: "Adobe", location: "Noida", description: "Figma and prototyping skills required" },
  { id: 5, title: "Data Scientist", company: "IBM", location: "Pune", description: "Python, ML models, and statistics knowledge" },
  { id: 6, title: "DevOps Engineer", company: "Infosys", location: "Chennai", description: "AWS, CI/CD, Docker & Kubernetes experience" },
  { id: 7, title: "Mobile App Developer", company: "Swiggy", location: "Bangalore", description: "Flutter developer for iOS & Android apps" },
  { id: 8, title: "Cybersecurity Analyst", company: "TCS", location: "Mumbai", description: "Network and endpoint security analysis" },
  { id: 9, title: "Cloud Engineer", company: "Accenture", location: "Hyderabad", description: "Azure & AWS cloud services experience" },
  { id: 10, title: "AI Engineer", company: "OpenAI", location: "Remote", description: "Deep learning and NLP experience" },
  { id: 11, title: "Blockchain Developer", company: "Polygon", location: "Remote", description: "Solidity and smart contracts" },
  { id: 12, title: "Product Manager", company: "Zomato", location: "Gurgaon", description: "Agile product lifecycle experience" },
  { id: 13, title: "QA Engineer", company: "Paytm", location: "Noida", description: "Automation testing with Selenium" },
  { id: 14, title: "AI Research Intern", company: "Google AI", location: "Remote", description: "LLM, GPT, and research papers reading" },
  { id: 15, title: "Game Developer", company: "Nazara", location: "Mumbai", description: "Unity or Unreal engine experience" },
  { id: 16, title: "Tech Support Engineer", company: "Dell", location: "Bangalore", description: "Customer support with technical skills" },
  { id: 17, title: "Salesforce Developer", company: "Salesforce", location: "Hyderabad", description: "CRM development and Apex code" },
  { id: 18, title: "Systems Engineer", company: "Capgemini", location: "Kolkata", description: "Windows/Linux server support" },
  { id: 19, title: "Database Administrator", company: "Oracle", location: "Hyderabad", description: "SQL, Oracle DB, and tuning skills" },
  { id: 20, title: "Technical Writer", company: "Freshworks", location: "Chennai", description: "Documentation of APIs and guides" },
  { id: 21, title: "Web Designer", company: "Flipkart", location: "Bangalore", description: "HTML, CSS, JavaScript design work" },
  { id: 22, title: "Network Engineer", company: "Cisco", location: "Gurgaon", description: "Network configuration and security" },
  { id: 23, title: "Business Analyst", company: "EY", location: "Mumbai", description: "Requirement gathering and analysis" },
  { id: 24, title: "Machine Learning Engineer", company: "NVIDIA", location: "Remote", description: "Computer Vision and Deep Learning" },
  { id: 25, title: "Data Analyst", company: "Uber", location: "Hyderabad", description: "SQL, Excel, Python for dashboards" },
  { id: 26, title: "Frontend Engineer", company: "Meesho", location: "Bangalore", description: "Angular or Vue.js experience" },
  { id: 27, title: "Technical Recruiter", company: "Zoho", location: "Chennai", description: "IT hiring and screening experience" },
  { id: 28, title: "Graphic Designer", company: "Canva", location: "Remote", description: "Adobe Illustrator and Photoshop skills" },
  { id: 29, title: "SDET", company: "CRED", location: "Bangalore", description: "Testing automation in Java" },
  { id: 30, title: "Power BI Developer", company: "Infosys", location: "Pune", description: "Data visualization and dashboards" },
  { id: 31, title: "Scrum Master", company: "Wipro", location: "Hyderabad", description: "Agile methodology and team handling" },
  { id: 32, title: "Cloud Architect", company: "Google Cloud", location: "Bangalore", description: "Architecting scalable cloud systems" },
  { id: 33, title: "Embedded Systems Engineer", company: "Bosch", location: "Coimbatore", description: "C/C++ and RTOS development" },
  { id: 34, title: "Robotics Engineer", company: "TATA Elxsi", location: "Pune", description: "Automation and control systems" },
  { id: 35, title: "IT Support Intern", company: "HP", location: "Noida", description: "Assist in daily IT operations" },
  { id: 36, title: "Video Editor", company: "BYJU'S", location: "Bangalore", description: "Premiere Pro and After Effects" },
  { id: 37, title: "Technical Analyst", company: "Deloitte", location: "Mumbai", description: "System analysis and design" },
  { id: 38, title: "Cybersecurity Engineer", company: "HCL", location: "Chennai", description: "Penetration testing & firewalls" },
  { id: 39, title: "Junior Developer", company: "Tech Mahindra", location: "Pune", description: "Basic full-stack experience" },
  { id: 40, title: "AR/VR Developer", company: "Meta", location: "Remote", description: "Augmented and Virtual Reality apps" },
  { id: 41, title: "Hardware Engineer", company: "Intel", location: "Bangalore", description: "Chip design and embedded coding" },
  { id: 42, title: "SEO Specialist", company: "Razorpay", location: "Bangalore", description: "Google ranking & analytics" },
  { id: 43, title: "Digital Marketer", company: "Unacademy", location: "Remote", description: "Social media ads & email campaigns" },
  { id: 44, title: "Operations Manager", company: "Ola", location: "Bangalore", description: "Process improvement and KPIs" },
  { id: 45, title: "Content Writer", company: "WhiteHat Jr", location: "Mumbai", description: "Blogs, SEO content & copywriting" },
  { id: 46, title: "Customer Success Manager", company: "Zoom", location: "Remote", description: "Client onboarding & retention" },
  { id: 47, title: "Penetration Tester", company: "InMobi", location: "Bangalore", description: "Ethical hacking and reports" },
  { id: 48, title: "Software Architect", company: "SAP", location: "Gurgaon", description: "Designing software systems at scale" },
  { id: 49, title: "IT Auditor", company: "KPMG", location: "Mumbai", description: "Audit and compliance of IT systems" },
  { id: 50, title: "Tech Lead", company: "Zoho", location: "Chennai", description: "Leading frontend/backend teams" },
];
export const getJobs = () => jobsData;



export const addJob = (job) => {
  jobsData.push({
    id: jobsData.length + 1, // auto id
    ...job
  });
};


export default jobsData;