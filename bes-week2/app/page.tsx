import { getProjects } from "@/lib/project";
import { ProjectList } from "./projects/project-list";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return(
    <main className="px-16 py-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <ProjectList projects={projects} />
    </main>
  )
}
