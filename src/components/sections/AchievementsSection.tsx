
import { motion } from "framer-motion";
import { Award, Medal, Trophy, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Achievement {
  type: 'certification' | 'co-curricular';
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: 'award' | 'medal' | 'trophy' | 'graduation';
}

const achievements: Achievement[] = [
  {
    type: 'certification',
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    description: "Certified in designing and deploying scalable systems on AWS.",
    icon: 'award'
  },
  {
    type: 'certification',
    title: "Full Stack Development",
    issuer: "Meta",
    date: "2023",
    description: "Comprehensive certification in modern web development technologies.",
    icon: 'graduation'
  },
  {
    type: 'co-curricular',
    title: "Hackathon Winner",
    issuer: "TechFest 2023",
    date: "2023",
    description: "First place in national-level programming competition.",
    icon: 'trophy'
  },
  {
    type: 'co-curricular',
    title: "Research Publication",
    issuer: "International Journal of Computer Science",
    date: "2022",
    description: "Published research paper on AI applications in web development.",
    icon: 'medal'
  }
];

const getIcon = (iconName: Achievement['icon']) => {
  switch (iconName) {
    case 'award':
      return <Award className="w-6 h-6" />;
    case 'medal':
      return <Medal className="w-6 h-6" />;
    case 'trophy':
      return <Trophy className="w-6 h-6" />;
    case 'graduation':
      return <GraduationCap className="w-6 h-6" />;
  }
};

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-glow mb-4">
            Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My certifications and co-curricular accomplishments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                className="glass-card overflow-hidden"
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-primary">
                        {getIcon(achievement.icon)}
                      </div>
                      <Badge variant={achievement.type === 'certification' ? 'default' : 'secondary'}>
                        {achievement.type === 'certification' ? 'Certification' : 'Co-curricular'}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {achievement.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-glow-sm mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {achievement.issuer}
                  </p>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
