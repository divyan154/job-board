import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const sharedDescription =
    "A user-friendly interface lets you browse stunning photos and videos. " +
    "Filter destinations based on interests and travel style, and create personalized.";

  const deadline = (daysFromNow: number) => {
    const date = new Date();
    date.setDate(date.getDate() + daysFromNow);
    return date;
  };

  await prisma.job.createMany({
    data: [
      {
        title: "AI Software Engineer",
        company: "Tesla",
        location: "Remote",
        type: "Full Time",
        salary: 1500000,
        description: sharedDescription,
        requirements: "Deep learning, computer vision, Python, PyTorch.",
        responsibilities: "Research and build advanced AI applications.",
        applicationDeadline: deadline(30),
      },
      {
        title: "Backend Developer",
        company: "Amazon",
        location: "Chennai",
        type: "Full Time",
        salary: 1100000,
        description: sharedDescription,
        requirements: "Java, Spring Boot, AWS, system design.",
        responsibilities: "Develop and maintain backend services.",
        applicationDeadline: deadline(25),
      },
      {
        title: "Mobile Engineer",
        company: "Swiggy",
        location: "Mumbai",
        type: "Full Time",
        salary: 650000,
        description: sharedDescription,
        requirements: "React Native, REST APIs, Redux.",
        responsibilities: "Build mobile features and integrations.",
        applicationDeadline: deadline(20),
      },
      {
        title: "Frontend Developer",
        company: "Tesla",
        location: "Bangalore",
        type: "Full Time",
        salary: 900000,
        description: sharedDescription,
        requirements: "React, TypeScript, UI/UX fundamentals.",
        responsibilities: "Design and implement user-facing features.",
        applicationDeadline: deadline(28),
      },
      {
        title: "SDE 1",
        company: "Amazon",
        location: "Pune",
        type: "Full Time",
        salary: 950000,
        description: sharedDescription,
        requirements: "DSA, Node.js, system design basics.",
        responsibilities: "Develop backend APIs and services.",
        applicationDeadline: deadline(18),
      },
      {
        title: "UI Engineer",
        company: "Swiggy",
        location: "Gurgaon",
        type: "Full Time",
        salary: 720000,
        description: sharedDescription,
        requirements: "Figma to React, performance optimization.",
        responsibilities: "Build reusable components and UIs.",
        applicationDeadline: deadline(15),
      },
      {
        title: "DevOps Specialist",
        company: "Tesla",
        location: "Hyderabad",
        type: "Full Time",
        salary: 1300000,
        description: sharedDescription,
        requirements: "AWS, Docker, CI/CD, Kubernetes.",
        responsibilities: "Deploy and monitor services at scale.",
        applicationDeadline: deadline(35),
      },
      {
        title: "Product Analyst",
        company: "Amazon",
        location: "Delhi",
        type: "Full Time",
        salary: 800000,
        description: sharedDescription,
        requirements: "Excel, SQL, A/B testing, product sense.",
        responsibilities: "Analyze product data to support decision-making.",
        applicationDeadline: deadline(22),
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
