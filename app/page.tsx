"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Github, Linkedin, Mail, ExternalLink, Filter, X } from "lucide-react"

interface Project {
  id: string
  name: string
  description: string
  tags: string[]
  details: {
    overview: string
    technologies: string[]
    achievements: string[]
    links?: {
      github?: string
      demo?: string
      paper?: string
    }
  }
}

const projects: Project[] = [
  {
    id: "1",
    name: "CREPE",
    description: "A lightweight, clinically-aware metric for the evaluation of machine-generated chest X-ray reports",
    tags: ["eval_metric", "github", "published", "EMNLP2025"],
    details: {
      overview:
        "Evaluating machine-generated chest X-ray report via report error count regression. Finetuned BERT with 6-error-category MLP regression heads; Trained with 32K synthetic report pairs generated via commercial LLM. 280x faster than LLM-based metrics with better alignment with radiologist error counts (τ=0.786).",
      technologies: ["BERT", "PyTorch", "Python", "MLP", "NLP"],
      achievements: [
        "Publication: EMNLP 2025 Main (Poster), 1st author",
        "Grant: 2024 Research Scholarship for Masters Studies (NRF)",
        "280x faster than LLM-based metrics",
        "Better alignment with radiologist error counts (τ=0.786)",
      ],
      links: {
        github: "https://github.com/gihuncho/crepe",
      },
    },
  },
  {
    id: "2",
    name: "rrg-metric",
    description: "A GitHub repository for evaluating Radiology Report Generation (RRG) with multiple metrics",
    tags: ["eval_metric", "github"],
    details: {
      overview:
        "Unified pipeline to calculate commonly used metrics in RRG tasks. Allows easy evaluation with 9 different metrics using less than 10 lines of code.",
      technologies: ["Python", "PyTorch", "NLP", "Evaluation Metrics"],
      achievements: [
        "Unified pipeline for RRG evaluation",
        "9 different metrics supported",
        "Easy-to-use API with <10 lines of code",
      ],
      links: {
        github: "https://github.com/gihuncho/rrg-metric",
      },
    },
  },
  {
    id: "3",
    name: "Multimodal DDx",
    description:
      "Evaluation of various LLM/VLMs with multimodal clinical data (e.g., images, patient history, findings)",
    tags: ["evaluation"],
    details: {
      overview:
        "Comprehensive evaluation framework for Large Language Models and Vision-Language Models using multimodal clinical data including medical images, patient history, and clinical findings.",
      technologies: ["LLM", "VLM", "Multimodal AI", "Clinical Data", "Python"],
      achievements: [
        "Comprehensive multimodal evaluation framework",
        "Clinical data integration",
        "LLM/VLM performance benchmarking",
      ],
    },
  },
]

const sections = [
  { id: "education", title: "Education" },
  { id: "projects", title: "Projects" },
  { id: "publications", title: "Publications" },
  { id: "research", title: "Research Experience" },
  { id: "career", title: "Career" },
  { id: "awards", title: "Awards" },
]

export default function MLResume() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Get all unique tags
  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort()

  // Filter projects based on selected tags
  const filteredProjects =
    selectedTags.length === 0
      ? projects
      : projects.filter((project) => selectedTags.every((tag) => project.tags.includes(tag)))

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const clearFilters = () => {
    setSelectedTags([])
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary-foreground">Gihun Cho</h1>
              <p className="text-sm opacity-90 text-primary-foreground">Machine Learning Engineer</p>
            </div>
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:text-accent-foreground hover:bg-accent/20"
                asChild
              >
                <a href="https://github.com/gihuncho" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:text-accent-foreground hover:bg-accent/20"
                asChild
              >
                <a href="https://linkedin.com/in/gihuncho" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:text-accent-foreground hover:bg-accent/20"
                asChild
              >
                <a href="mailto:gihuncho@snu.ac.kr">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Building AI Solutions for Medical Imaging
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Machine learning engineer specializing in medical AI, radiology report generation, and clinical evaluation
              metrics. Currently pursuing M.S. in Bioengineering at Seoul National University.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:gihuncho@snu.ac.kr">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-20">
        {/* Education Section */}
        <section id="education">
          <h3 className="text-3xl font-bold mb-8">Education</h3>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Master of Science in Bioengineering</CardTitle>
                <CardDescription>Seoul National University • Mar. 2024 – Feb. 2026</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  GPA: 3.97/4.30. Research focus on medical AI and radiology report generation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Bachelor of Science in Biomedical Engineering</CardTitle>
                <CardDescription>Hanyang University • Mar. 2018 – Feb. 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  GPA: 4.09/4.50. Strong foundation in biomedical engineering and machine learning.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Department of Software Development</CardTitle>
                <CardDescription>Sunrin Internet Highschool • Mar. 2015 – Feb. 2018</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Early specialization in software development and programming.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold">Projects</h3>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Filter by tags</span>
            </div>
          </div>

          {/* Tag Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
            {selectedTags.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Filtered by: {selectedTags.join(", ")}</span>
                <Button variant="ghost" size="sm" onClick={clearFilters} className="h-6 px-2 text-xs">
                  <X className="h-3 w-3 mr-1" />
                  Clear
                </Button>
              </div>
            )}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
                onClick={() => setSelectedProject(project)}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications">
          <h3 className="text-3xl font-bold mb-8">Publications</h3>
          <div className="grid gap-6">
            <Card>
              <CardContent>
                <h4 className="font-semibold mb-2">
                  CREPE: Rapid Chest X-ray Report Evaluation by Predicting Multi-category Error Counts
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  G. Cho et al. • EMNLP 2025 Main (Poster), 1st author
                </p>
                <p className="text-sm">
                  A lightweight, clinically-aware metric for evaluating machine-generated chest X-ray reports with 280x
                  speed improvement.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h4 className="font-semibold mb-2">
                  Evaluating Open and Closed-Source Language and Vision-Language Models for Multicenter Image-Based
                  Diagnosis in Radiology
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  G. Cho et al. • RSNA 2024 Cutting-Edge Research (Abstract), 1st author (equal contribution)
                </p>
                <p className="text-sm">
                  Comparative study of LLM/VLM performance with multimodal clinical data and reader performance
                  evaluation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h4 className="font-semibold mb-2">
                  SeamXSim: Seamless-textured virtual colonoscopy simulator via unpaired long-term video translation
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Authors • Computers in Biology and Medicine 2025 (Under review), 2nd author
                </p>
                <p className="text-sm">
                  Virtual colonoscopy simulation using advanced video translation techniques for medical training.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research Experience Section */}
        <section id="research">
          <h3 className="text-3xl font-bold mb-8">Research Experience</h3>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Research Assistant</CardTitle>
                <CardDescription>
                  Innovative Radiology AI Lab (iRAIL), Seoul National University • Jul. 2023 – Present
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Advisor:</strong> Chang Min Park, M.D., Ph.D.
                </p>
                <p className="text-sm text-muted-foreground">
                  Clinical evaluation and benchmarks for medical LLM/VLMs. Focus on radiology report generation and
                  evaluation metrics.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Research Intern</CardTitle>
                <CardDescription>
                  Computational Neuroimage Analysis (CNA) Lab, Hanyang University • Jan. 2023 – Jun. 2023
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Advisor:</strong> Jong-Min Lee, Ph.D.
                </p>
                <p className="text-sm text-muted-foreground">
                  3D Brain MRI preprocessing & 2D Brain MRI modality classification using deep learning techniques.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Research Intern</CardTitle>
                <CardDescription>
                  Smart Ubiquitous Healthcare (SUH) Lab, Hanyang University • Jul. 2022 – Aug. 2022
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Advisor:</strong> In Young Kim, M.D., Ph.D.
                </p>
                <p className="text-sm text-muted-foreground">
                  Development of ECG, PPG signal monitor with peak detection algorithms for healthcare applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Career Section */}
        <section id="career">
          <h3 className="text-3xl font-bold mb-8">Career</h3>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Android Developer</CardTitle>
                <CardDescription>
                  Computational intelligence & Neural Engineering (CoNE) Lab • Aug. 2023 – Dec. 2023
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Development of an Android backend app utilizing biometric signals (i.e., EEG) for neural engineering
                  applications.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Metaverse Platform Developer</CardTitle>
                <CardDescription>Devmate Co., Ltd. • Dec. 2021 – Mar. 2022</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Development of metaverse maps in ZEPETO via Unity, creating immersive virtual environments and
                  interactive experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards">
          <h3 className="text-3xl font-bold mb-8">Awards</h3>
          <div className="grid gap-6">
            <Card>
              <CardContent>
                <h4 className="font-semibold mb-2">Best Oral Presentation Award Bronze Prize</h4>
                <p className="text-sm text-muted-foreground">2024 KoSAIM Annual Meeting • 2024</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h4 className="font-semibold mb-2">Research Scholarship for Masters Studies</h4>
                <p className="text-sm text-muted-foreground">National Research Foundation (NRF) • 2024</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.name}</DialogTitle>
                <DialogDescription className="text-base">{selectedProject.description}</DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Overview</h4>
                  <p className="text-sm text-muted-foreground">{selectedProject.details.overview}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.details.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Key Achievements</h4>
                  <ul className="space-y-1">
                    {selectedProject.details.achievements.map((achievement, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-accent mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedProject.details.links && (
                  <div>
                    <h4 className="font-semibold mb-2">Links</h4>
                    <div className="flex space-x-2">
                      {selectedProject.details.links.github && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={selectedProject.details.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                      )}
                      {selectedProject.details.links.demo && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={selectedProject.details.links.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {selectedProject.details.links.paper && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={selectedProject.details.links.paper} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Paper
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-muted/30 py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2024 Gihun Cho. Built with Next.js and deployed on GitHub Pages.</p>
        </div>
      </footer>
    </div>
  )
}
