import TaskCard from "@/components/TaskCard";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { Project } from "@prisma/client";
import { RequestCookies } from "next/dist/server/web/spec-extension/cookies";
import { cookies } from "next/headers";

type ProjectPageParams = {
    params: {
        id: string
    }
}

const getData = async (id:string) => {
  const user = await getUserFromCookie(cookies() as RequestCookies);
  const project = await db.project.findFirst({
    where: { id, ownerId: user?.id },
    include: {
      tasks: true,
    },
  });

  return project;
};

export default async function ProjectPage({ params }: ProjectPageParams) {
  const project = await getData(params.id) as Project;

  return (
    <div className="h-full overflow-y-auto pr-6 w-1/1">
        {/* @ts-expect-error Server Component */}
        <TaskCard tasks={project.tasks} title={project.name} />
    </div>
  );
} 