import ProjectDetail from "@/components/ProjectDetail";
import { rocketProject } from "@/data/portfolio";

export const metadata = {
  title: "Team-Developed Rocket and Flight Computer — Adriano Zagar",
};

export default function RocketProjectPage() {
  return <ProjectDetail project={rocketProject} />;
}
