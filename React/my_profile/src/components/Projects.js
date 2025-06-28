import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my projects and skills.",
    link: "#"
  },
  {
    title: "Todo App",
    description: "A simple todo app built with React and Tailwind CSS.",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
              <Button className="mt-2" variant="link" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
