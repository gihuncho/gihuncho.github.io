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
    name: "Neural Style Transfer",
    description: "Real-time artistic style transfer using convolutional neural networks.",
    tags: ["Deep Learning", "Computer Vision", "PyTorch", "CNN"],
    details: {
      overview:
        "Implemented a real-time neural style transfer system that applies artistic styles to images and video streams. The model combines content and style representations using pre-trained VGG networks.",
      technologies: ["PyTorch", "OpenCV", "Python", "CUDA", "Flask"],
      achievements: [
        "Achieved 15fps real-time processing on GPU",
        "Reduced model size by 60% using knowledge distillation",
        "Published demo with 10k+ users",
      ],
      links: {
        github: "https://github.com/username/neural-style-transfer",
        demo: "https://style-transfer-demo.com",
      },
    },
  },
  {
    id: "2",
    name: "Sentiment Analysis API",
    description: "Scalable sentiment analysis service for social media monitoring.",
    tags: ["NLP", "Transformers", "FastAPI", "Docker"],
    details: {
      overview:
        "Built a production-ready sentiment analysis API using BERT-based models. Handles 1000+ requests per second with sub-100ms latency.",
      technologies: ["Transformers", "FastAPI", "Docker", "Redis", "PostgreSQL"],
      achievements: [
        "94% accuracy on custom dataset",
        "Handles 1000+ RPS with 99ms avg latency",
        "Deployed on AWS with auto-scaling",
      ],
      links: {
        github: "https://github.com/username/sentiment-api",
      },
    },
  },
  {
    id: "3",
    name: "Recommendation Engine",
    description: "Collaborative filtering system for e-commerce product recommendations.",
    tags: ["Recommendation Systems", "Spark", "MLOps", "AWS"],
    details: {
      overview:
        "Developed a hybrid recommendation system combining collaborative filtering and content-based approaches. Processes 10M+ user interactions daily.",
      technologies: ["Apache Spark", "MLflow", "AWS SageMaker", "Python", "Scala"],
      achievements: [
        "23% increase in click-through rate",
        "Processes 10M+ interactions daily",
        "A/B tested with 500k users",
      ],
      links: {
        github: "https://github.com/username/recommendation-engine",
      },
    },
  },
  {
    id: "4",
    name: "Time Series Forecasting",
    description: "LSTM-based model for predicting cryptocurrency price movements.",
    tags: ["Time Series", "LSTM", "Finance", "TensorFlow"],
    details: {
      overview:
        "Created an ensemble of LSTM models for cryptocurrency price prediction. Incorporates technical indicators and sentiment data from social media.",
      technologies: ["TensorFlow", "Pandas", "NumPy", "Plotly", "Twitter API"],
      achievements: ["78% directional accuracy", "Outperformed baseline by 15%", "Featured in ML conference"],
      links: {
        github: "https://github.com/username/crypto-forecasting",
        paper: "https://arxiv.org/abs/example",
      },
    },
  },
  {
    id: "5",
    name: "Computer Vision Pipeline",
    description: "End-to-end object detection system for autonomous vehicles.",
    tags: ["Computer Vision", "YOLO", "Edge Computing", "C++"],
    details: {
      overview:
        "Developed a real-time object detection pipeline optimized for edge devices in autonomous vehicles. Handles multiple camera streams simultaneously.",
      technologies: ["YOLO", "TensorRT", "C++", "CUDA", "ROS"],
      achievements: ["30fps on Jetson Xavier NX", "92% mAP on COCO dataset", "Deployed in 50+ test vehicles"],
      links: {
        github: "https://github.com/username/cv-pipeline",
      },
    },
  },
  {
    id: "6",
    name: "Anomaly Detection System",
    description: "Unsupervised learning approach for detecting network intrusions.",
    tags: ["Anomaly Detection", "Cybersecurity", "Scikit-learn", "Kafka"],
    details: {
      overview:
        "Built an unsupervised anomaly detection system for network security monitoring. Uses isolation forests and autoencoders to identify suspicious activities.",
      technologies: ["Scikit-learn", "Apache Kafka", "Elasticsearch", "Kibana", "Python"],
      achievements: [
        "99.2% precision in threat detection",
        "Processes 1TB+ network logs daily",
        "Reduced false positives by 40%",
      ],
      links: {
        github: "https://github.com/username/anomaly-detection",
      },
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
              <h1 className="text-2xl font-bold">Alex Chen</h1>
              <p className="text-sm opacity-90">Machine Learning Engineer</p>
            </div>
            <nav className="hidden md:flex space-x-6">
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="hover:text-accent transition-colors">
                  {section.title}
                </a>
              ))}
            </nav>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Building AI Solutions for Tomorrow</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Passionate machine learning engineer with 5+ years of experience in deep learning, computer vision, and
              scalable ML systems. Turning complex data into actionable insights.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              View My Work
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-20">
        {/* Education Section */}
        <section id="education">
          <h3 className="text-3xl font-bold mb-8">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>M.S. Computer Science</CardTitle>
                <CardDescription>Stanford University • 2019-2021</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Specialization in Machine Learning and AI. Thesis on "Efficient Neural Architecture Search for Edge
                  Devices"
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>B.S. Computer Engineering</CardTitle>
                <CardDescription>UC Berkeley • 2015-2019</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Magna Cum Laude. Focus on algorithms, data structures, and machine learning fundamentals.
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
                        {tag}
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
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Efficient Neural Architecture Search for Real-Time Applications</h4>
                <p className="text-sm text-muted-foreground mb-2">A. Chen, J. Smith, M. Johnson • ICML 2023</p>
                <p className="text-sm">
                  Novel approach to neural architecture search that reduces search time by 80% while maintaining
                  accuracy.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Scalable Sentiment Analysis for Social Media Monitoring</h4>
                <p className="text-sm text-muted-foreground mb-2">A. Chen, L. Davis • NeurIPS Workshop 2022</p>
                <p className="text-sm">
                  Distributed system for real-time sentiment analysis processing millions of social media posts.
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
                <CardTitle>Research Intern</CardTitle>
                <CardDescription>Google AI • Summer 2020</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Worked on large-scale language models and efficient training techniques. Contributed to improvements
                  in model compression and inference speed.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Graduate Research Assistant</CardTitle>
                <CardDescription>Stanford AI Lab • 2019-2021</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Conducted research on neural architecture search and automated machine learning. Published 3 papers
                  and presented at top-tier conferences.
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
                <CardTitle>Senior ML Engineer</CardTitle>
                <CardDescription>TechCorp • 2021-Present</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Lead ML initiatives for recommendation systems serving 50M+ users. Built and deployed models that
                  increased engagement by 25%.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>ML Engineer</CardTitle>
                <CardDescription>StartupAI • 2019-2021</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Developed computer vision models for autonomous vehicles. Optimized models for edge deployment with
                  10x speed improvement.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards">
          <h3 className="text-3xl font-bold mb-8">Awards</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Best Paper Award</h4>
                <p className="text-sm text-muted-foreground">ICML 2023 • Neural Architecture Search</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Outstanding Graduate Student</h4>
                <p className="text-sm text-muted-foreground">Stanford University • 2021</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Kaggle Competition Winner</h4>
                <p className="text-sm text-muted-foreground">Computer Vision Challenge • 2020</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Dean's List</h4>
                <p className="text-sm text-muted-foreground">UC Berkeley • 2017-2019</p>
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
          <p className="text-muted-foreground">© 2024 Alex Chen. Built with Next.js and deployed on GitHub Pages.</p>
        </div>
      </footer>
    </div>
  )
}
