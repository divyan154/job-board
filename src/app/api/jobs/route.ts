// Update the import path below if your prisma client is located elsewhere
import { prisma } from "../../../lib/prisma";

export async function GET(req: Request) {
 
  try {
    const { searchParams } = new URL(req.url);
    console.log("Min Sakary in backend:", searchParams.get("salaryMin"));
     console.log("Max Sakary in backend:", searchParams.get("salaryMax"));
    const title = searchParams.get("title") || undefined;
    const location = searchParams.get("location") || undefined;
    const type = searchParams.get("type") || undefined;
    const minSalary = searchParams.get("salaryMin")
      ? Number(searchParams.get("salaryMin"))
      : undefined;
    const maxSalary = searchParams.get("salaryMax")
      ? Number(searchParams.get("salaryMax"))
      : undefined;

    const jobs = await prisma.job.findMany({
      where: {
        ...(title && { title: { contains: title, mode: "insensitive" } }),
        ...(location && {
          location: { contains: location, mode: "insensitive" },
        }),
        
        ...(type && { type: { contains: type, mode: "insensitive" } }),
        ...(minSalary && maxSalary
          ? {
              salary: {
                ...(minSalary && { gte: 12 * minSalary }),
                ...(maxSalary && { lte: 12 * maxSalary }),
              },
            }
          : {}),
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return Response.json(jobs);
  } catch (error) {
    console.error("GET /api/jobs error:", error);
    return new Response("Failed to fetch jobs", { status: 500 });
  }
}


  


export async function POST(req: Request) {
    // console.log(req.body)
  try {
    const body = await req.json();

    const {
      title,
      company,
      location,
      type,
      salary,
      description,
      requirements,
      responsibilities,
      applicationDeadline
    } = body;
     const Salary = parseInt(salary);
     const deadline = new Date(applicationDeadline);
    const job = await prisma.job.create({
      data: {
        title,
        company,
        location,
        type,
        salary: Salary,
        description,
        requirements,
        responsibilities,
        applicationDeadline: deadline,
      },
    });

    return Response.json(job, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/jobs error:", error.message);
    return new Response("Error creating job", { status: 500 });
  }
}