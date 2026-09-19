import ProjectDetail from "@/components/ProjectDetail";
import { calculatorProject } from "@/data/portfolio";

export const metadata = {
  title: "Handheld Embedded Calculator — Adriano Zagar",
};

export default function CalculatorProjectPage() {
  return <ProjectDetail project={calculatorProject} />;
}
