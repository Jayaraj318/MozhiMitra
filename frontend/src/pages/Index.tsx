import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, AlignJustify, Hash, BookOpen, MessageSquare, FileText, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import LearningCard from '@/components/LearningCard';
import { categories, learningModules, LearningModule } from '@/lib/data';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredModules, setFilteredModules] = useState<LearningModule[]>(learningModules);

  // Filter modules based on selected category
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredModules(learningModules);
    } else {
      setFilteredModules(
        learningModules.filter(module => module.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  // Icon mapping
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'AlignJustify': return <AlignJustify className="h-5 w-5" />;
      case 'Hash': return <Hash className="h-5 w-5" />;
      case 'BookOpen': return <BookOpen className="h-5 w-5" />;
      case 'MessageSquare': return <MessageSquare className="h-5 w-5" />;
      case 'FileText': return <FileText className="h-5 w-5" />;
      case 'Users': return <Users className="h-5 w-5" />;
      default: return <AlignJustify className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Learn <span className="text-tamil">Tamil</span> & <span className="text-malayalam">Malayalam</span> the Modern Way
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Master South Indian languages with our interactive platform. Fun, effective, and designed for today's learners.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full" asChild>
                <Link to="/alphabets">
                  Start Learning
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-tamil/10 to-transparent rounded-bl-full -z-10" />
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-malayalam/10 to-transparent rounded-tr-full -z-10" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Why Learn With Us?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Our platform combines modern teaching methods with technology to make language learning effective and enjoyable.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-panel p-8 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-tamil/10 flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-tamil" />
              </div>
              <h3 className="text-xl font-bold mb-3">Immersive Learning</h3>
              <p className="text-muted-foreground">
                Audio, visual, and interactive content helps you learn naturally, the way children acquire language.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-panel p-8 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-malayalam/10 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-malayalam" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Support</h3>
              <p className="text-muted-foreground">
                Connect with other learners and native speakers to practice and enhance your language skills.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-panel p-8 flex flex-col items-center text-center lg:col-span-1 md:col-span-2 lg:col-start-auto md:col-start-1"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-tamil/10 to-malayalam/10 flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-gradient" />
              </div>
              <h3 className="text-xl font-bold mb-3">Structured Curriculum</h3>
              <p className="text-muted-foreground">
                Follow a well-designed learning path that takes you from basics to advanced conversations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commenting out Learning Modules Section */}
      {/*
      <section className="py-20">
        <div className="container mx-auto px-4">
         <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Start Your Learning Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Explore our comprehensive modules designed to build your language skills step by step
            </motion.p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                className="rounded-full"
                onClick={() => setSelectedCategory('all')}
              >
              All
              </Button>

              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  className="rounded-full flex items-center"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {getCategoryIcon(category.icon)}
                  <span className="ml-2">{category.title}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModules.map((module, index) => (
              <LearningCard key={module.id} module={module} index={index} />
            ))}
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-tamil/10 to-malayalam/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-10 md:p-16 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Become Fluent?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of learners mastering Tamil and Malayalam. Create your free account today and start your language journey.
            </p>
            <Button size="lg" className="rounded-full" asChild>
              <Link to="/auth/signup">
                Create Free Account
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
