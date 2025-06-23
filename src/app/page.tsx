import JobListing from "@/components/joblisting";
const jobs = [
  {
    id: 1,
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    title: "Full Stack Developer",
    timeAgo: "24h Ago",
    experience: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\n      Filter destinations based on interests and travel style, and create personalized",
  },
  // Repeat or add more job data as needed...
  {
    id: 2,
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    title: "Full Stack Developer",
    timeAgo: "24h Ago",
    experience: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\n      Filter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 3,
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    title: "Full Stack Developer",
    timeAgo: "24h Ago",
    experience: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\n      Filter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 4,
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    title: "Full Stack Developer",
    timeAgo: "24h Ago",
    experience: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\n      Filter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 5,
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    title: "Full Stack Developer",
    timeAgo: "24h Ago",
    experience: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\n      Filter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 6,
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    title: "Full Stack Developer",
    timeAgo: "24h Ago",
    experience: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\n      Filter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 7,
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    title: "Full Stack Developer",
    timeAgo: "24h Ago",
    experience: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\n      Filter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 8,
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    title: "Full Stack Developer",
    timeAgo: "24h Ago",
    experience: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\n      Filter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 9,
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    title: "Full Stack Developer",
    timeAgo: "24h Ago",
    experience: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\n      Filter destinations based on interests and travel style, and create personalized",
  },
];

export default function JobBoard() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) =>JobListing({ job }))}
        </div>
      </div>
    </div>
  );
}
