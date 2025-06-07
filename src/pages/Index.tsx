
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Code, Book, User, Settings, FileText } from "lucide-react";

const Index = () => {
  const skills = [
    "Java", "JavaScript", "HTML", "CSS", "React.js", "Node.js", "Express.js", "MongoDB", 
    "VS Code", "Git", "Blender", "Unity", "Figma", "C#", "Photoshop"
  ];

  const projects = [
    {
      title: "E-Commerce Website",
      description: "Built a full-stack e-commerce website using React, Node.js, and MongoDB with features like user authentication, product listings, and an admin panel using JWT. Implemented cart functionality and enabled product management capabilities for administrators.",
      technologies: ["React", "Node.js", "MongoDB", "JWT"]
    },
    {
      title: "Virtual Reality Learning Environment",
      description: "Developed an interactive VR zoo in Unity with 3D models and environments created in Blender and textured using Photoshop. Implemented C# scripts for user interaction and deployed the experience on VR headsets for immersive learning.",
      technologies: ["Unity", "Blender", "C#", "Photoshop", "VR"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CHITRIKA B S
            </h1>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-colors">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="text-foreground hover:text-primary transition-colors">Experience</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
              <User size={48} className="text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              CHITRIKA B S
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Full-Stack Developer & VR Enthusiast
            </p>
            <p className="text-lg max-w-3xl mx-auto text-foreground/80 leading-relaxed">
              Pre-final year undergraduate student with practical experience in web development and a strong interest in growing beyond my current skill set. 
              Always ready to explore new technologies and expand into different domains.
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 mb-8">
            <Button asChild className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="mailto:bschitrika7@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/chitrikabs" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Chitrikaa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="text-primary" size={24} />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">B.Tech Computer Science and Business Systems</h4>
                    <p className="text-muted-foreground">KPR Institute of Engineering and Technology</p>
                    <p className="text-sm text-accent font-medium">CGPA: 7.99</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-foreground">Higher Secondary Certificate</h4>
                    <p className="text-muted-foreground">Vijaya Vidhyalaya Matric. Hr. Sec. School</p>
                    <p className="text-sm text-accent font-medium">88.8% (25% Scholarship for 180 cutoff)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="text-primary" size={24} />
                  Skills & Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-primary/30 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experience & Leadership
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle>UI/UX Intern (Virtual)</CardTitle>
                <CardDescription>Interncareer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  Designed web and mobile UI using Figma for a data analytics dashboard and a travel booking app, 
                  focusing on user-friendly and responsive interfaces. Strengthened proficiency in Figma and UI/UX design principles 
                  through hands-on internship experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle>Leadership & Community Service</CardTitle>
                <CardDescription>Various Organizations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">Secretary - IEEE - SSIT KPRIET SB</h4>
                  <p className="text-sm text-muted-foreground">Leading technical initiatives and student engagement</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-foreground">Chief Volunteer - NSS KPRIET</h4>
                  <p className="text-sm text-muted-foreground">Participated in NSS State Level Adventure Camp'25, Yercaud</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I thrive in collaborative environments and believe in the power of teamwork to achieve shared goals and create meaningful impact. 
            Let's discuss how we can work together!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
              <a href="mailto:bschitrika7@gmail.com" className="flex items-center gap-2">
                <Mail size={20} />
                Email Me
              </a>
            </Button>
            
            <div className="flex gap-4">
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/chitrikabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/Chitrikaa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github size={20} />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-card/30">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Chitrika B S. Built with passion and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
