'use client';

import Link from "next/link";
import { ArrowRight, BookOpen, Trophy, Clock, Star, CheckCircle, Code, Brain, Target } from "lucide-react";
import { useGoogleAnalytics } from "@/lib/google-analytics";
import { PageFooter } from "@/components/page-footer";

export default function Exercises() {
  const googleAnalyticsComponent = useGoogleAnalytics();
  
  return (
    <>
      {googleAnalyticsComponent}
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        {/* Hero Section */}
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-gradient-to-r from-green-400/20 to-blue-600/20 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-600/20 blur-3xl"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 py-24 sm:py-32">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-8 group hover:bg-muted/70 transition-colors cursor-pointer">
                <Brain className="w-4 h-4 text-blue-500 group-hover:rotate-12 transition-transform" />
                <span className="text-sm font-medium">Interactive Learning Exercises</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Main heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                Practice &
                <br />
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-800 bg-clip-text text-transparent">
                  Learn
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                Enhance your skills with our interactive exercises. From beginner to advanced levels, practice makes perfect.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-2xl shadow-green-600/25 hover:shadow-green-600/40 hover:scale-105 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <Target className="w-5 h-5 group-hover:rotate-12 transition-transform relative z-10" />
                  <span className="relative z-10">Start Practicing</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </button>
                
                <Link
                  href="/docs"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl border-2 border-border hover:border-foreground bg-background/50 backdrop-blur-sm hover:bg-muted/50 transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  View Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Exercise Categories */}
        <div className="py-24 sm:py-32 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Exercise Categories
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose your learning path and start building your skills with hands-on exercises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Beginner */}
              <div className="group p-8 rounded-2xl bg-background border border-border hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Beginner</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Start your journey with fundamental concepts and basic exercises designed for newcomers.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Clock className="w-4 h-4" />
                  <span>5-15 minutes per exercise</span>
                </div>
                <button className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium hover:scale-105 transition-transform duration-300">
                  Start Learning
                </button>
              </div>

              {/* Intermediate */}
              <div className="group p-8 rounded-2xl bg-background border border-border hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Intermediate</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Challenge yourself with more complex problems and real-world scenarios.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Clock className="w-4 h-4" />
                  <span>15-30 minutes per exercise</span>
                </div>
                <button className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:scale-105 transition-transform duration-300">
                  Take Challenge
                </button>
              </div>

              {/* Advanced */}
              <div className="group p-8 rounded-2xl bg-background border border-border hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Advanced</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Master advanced techniques with expert-level challenges and projects.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Clock className="w-4 h-4" />
                  <span>30+ minutes per exercise</span>
                </div>
                <button className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition-transform duration-300">
                  Master Skills
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Exercises */}
        <div className="py-24 sm:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Featured Exercises
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Popular exercises that help you build practical skills.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Getting Started with Components",
                  description: "Learn the basics of creating reusable components and understanding their lifecycle.",
                  difficulty: "Beginner",
                  duration: "10 min",
                  completed: false,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "State Management Patterns",
                  description: "Master different approaches to managing application state effectively.",
                  difficulty: "Intermediate",
                  duration: "25 min",
                  completed: false,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Advanced Optimization Techniques",
                  description: "Learn performance optimization strategies for large-scale applications.",
                  difficulty: "Advanced",
                  duration: "45 min",
                  completed: false,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "API Integration Best Practices",
                  description: "Understand how to properly integrate and handle external APIs.",
                  difficulty: "Intermediate",
                  duration: "20 min",
                  completed: true,
                  color: "from-orange-500 to-red-500"
                }
              ].map((exercise, index) => (
                <div key={index} className="group p-6 rounded-xl bg-background border border-border hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{exercise.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{exercise.description}</p>
                    </div>
                    {exercise.completed && (
                      <div className="flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className={`px-2 py-1 rounded-full bg-gradient-to-r ${exercise.color} text-white text-xs font-medium`}>
                        {exercise.difficulty}
                      </span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{exercise.duration}</span>
                      </div>
                    </div>
                    
                    <button className="px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-sm font-medium transition-colors">
                      {exercise.completed ? 'Review' : 'Start'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="py-24 sm:py-32 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Track Your Progress
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Monitor your learning journey and celebrate your achievements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 rounded-xl bg-background border border-border">
                  <div className="text-3xl font-bold text-green-500 mb-2">12</div>
                  <div className="text-muted-foreground">Exercises Completed</div>
                </div>
                <div className="p-6 rounded-xl bg-background border border-border">
                  <div className="text-3xl font-bold text-blue-500 mb-2">3</div>
                  <div className="text-muted-foreground">Skill Levels Unlocked</div>
                </div>
                <div className="p-6 rounded-xl bg-background border border-border">
                  <div className="text-3xl font-bold text-purple-500 mb-2">48h</div>
                  <div className="text-muted-foreground">Time Invested</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <PageFooter 
          filePath="/exercises" 
          showSocialFooter={true}
        />
      </div>
    </>
  );
}