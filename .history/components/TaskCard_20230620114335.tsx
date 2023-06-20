import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { TASK_STATUS } from "@prisma/client";
import { cookies } from "next/headers";
import Button from "./Button";
import Card from "./Card";
import { ReactElement, ReactNode } from "react";

const getData = async () => {
  const user = await getUserFromCookie(cookies())
  const tasks = await db.task.findMany({
    where: {
      ownerId: user?.id,
      NOT: {
        status: TASK_STATUS.COMPLETED,
        deleted: false
      }
    },
    take: 5,
    orderBy: {
      due: 'asc'
    }
  })

  return tasks
}

interface Task {
  name: string
  description: string
}

const TaskCard = async ({tasks, title}: {
  tasks : Task[];
  title: string;
}): Promise<JSX.Element> => {
  const data = tasks || (await getData())

  return (
  <Card className={''}>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-3xl text-gray-600">{title}</span>
        </div>
        <div>
          <Button intent="text" className="text-violet-600">
            + Create New
          </Button>
        </div>
      </div>
      <div>
        {data && data.length ? (
          <div>
            {data.map((task, idx: number) => (
              <div key={idx} className="py-2 ">
                <div>
                  <span className="text-gray-800">{task.name}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">
                    {task.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>no tasks</div>
        )}
      </div>
    </Card>
  );
}

export default TaskCard