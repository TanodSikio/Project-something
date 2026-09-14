import { getProjects } from "@/lib/project";
import { ProjectList } from "./project-list";
import { ProjectSearch } from "./project-search";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return(
    <main className="px-16 py-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <ProjectSearch projects={projects} />
    </main>
  )
}