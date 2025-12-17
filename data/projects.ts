import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    slug: "scalable-api",
    title: "Scalable API Service",
    shortDescription: "Built a high-performance Go API with PostgreSQL backend.",
    description:
      "This project involved designing a REST API that handles thousands of requests per second with minimal latency.",
    impact:
      "Reduced API response times by 40%, enabled real-time reporting, and scaled horizontally to support growth.",
    tech: ["Go", "PostgreSQL", "Docker", "Kubernetes"],
  },
  {
    slug: "ai-integrations",
    title: "AI Integrations",
    shortDescription: "Integrated generative AI into enterprise applications.",
    description:
      "Implemented AI pipelines for content generation, automating key processes for internal tools.",
    impact:
      "Improved productivity by 25% and enabled smarter decision-making through AI insights.",
    tech: ["Python", "OpenAI API", "FastAPI"],
  },
];
