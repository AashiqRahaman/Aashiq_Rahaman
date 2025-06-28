import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";

const contact = {
  email: "john.doe@example.com",
  github: "https://github.com/johndoe",
  linkedin: "https://linkedin.com/in/johndoe"
};

const Footer = () => {
  return (
    <footer className="text-center space-x-4">
      <a href={`mailto:${contact.email}`}><Mail className="inline-block" /></a>
      <a href={contact.github} target="_blank" rel="noopener noreferrer"><Github className="inline-block" /></a>
      <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="inline-block" /></a>
    </footer>
  );
};

export default Footer;

