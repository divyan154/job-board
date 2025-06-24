

// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.job.createMany({
    data: [
      {
        title: "Frontend Developer",
        company: "Google",
        location: "Bangalore",
        type: "Full Time",
        salary: 800000,
        
        description: "Build fast and accessible user interfaces.",
        requirements: "2+ years React, JavaScript, HTML/CSS.",
        responsibilities: "Implement UI components and collaborate with design.",
      },
      {
        title: "Backend Engineer",
        company: "Amazon",
        location: "Hyderabad",
        type: "Full Time",
        salary: 1000000,
        
        description: "Design and maintain scalable APIs.",
        requirements: "Strong in Node.js, databases, and system design.",
        responsibilities: "Build APIs and ensure performance under load.",
      },
      {
        title: "Data Analyst Intern",
        company: "Zomato",
        location: "Gurgaon",
        type: "Internship",
        salary: 15000,
        
        description: "Work with data team to extract business insights.",
        requirements: "Excel, SQL, Tableau basics.",
        responsibilities: "Prepare dashboards and data reports.",
      },
      {
        title: "DevOps Engineer",
        company: "Flipkart",
        location: "Remote",
        type: "Contract",
        salary: 600000,
      
        description: "Setup CI/CD pipelines and manage infrastructure.",
        requirements: "Experience with AWS, Docker, GitHub Actions.",
        responsibilities: "Automate deployments and monitor services.",
      },
      {
        title: "UI/UX Designer",
        company: "Paytm",
        location: "Noida",
        type: "Full Time",
        salary: 500000,
      
        description: "Design modern and user-centric interfaces.",
        requirements: "Figma, user research, and wireframing skills.",
        responsibilities: "Design user flows and collaborate with devs.",
      },
      {
        title: "Machine Learning Engineer",
        company: "TCS",
        location: "Mumbai",
        type: "Full Time",
        salary: 700000,
      
        description: "Develop ML models for business solutions.",
        requirements: "Python, sklearn, TensorFlow.",
        responsibilities: "Train, evaluate and deploy ML models.",
      },
      {
        title: "Mobile App Developer",
        company: "Swiggy",
        location: "Bangalore",
        type: "Full Time",
        salary: 600000,
       
        description: "Build and maintain React Native apps.",
        requirements: "React Native, APIs, performance profiling.",
        responsibilities: "Develop new features and maintain mobile app.",
      },
      {
        title: "Tech Content Writer",
        company: "Scaler",
        location: "Remote",
        type: "Part Time",
        salary: 250000,
      
        description: "Write articles on tech topics and interview prep.",
        requirements: "Strong written English, CS fundamentals.",
        responsibilities: "Write blogs, tutorials, and explainers.",
      },
      {
        title: "QA Engineer",
        company: "Freshworks",
        location: "Chennai",
        type: "Full Time",
        salary: 500000,
       
        description: "Ensure software quality and write test cases.",
        requirements: "Automation + manual testing experience.",
        responsibilities: "Write and execute test plans.",
      },
      {
        title: "Product Manager",
        company: "CRED",
        location: "Bangalore",
        type: "Full Time",
        salary: 1200000,
    
        description: "Define product roadmap and collaborate across teams.",
        requirements: "Strong business + technical acumen.",
        responsibilities: "Own features from idea to launch.",
      },
    ],
  });

  console.log("🌱 Seed data inserted");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
