import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "At EVOGYM, we're not just a gym; we're a community dedicated to your health and fitness success. \nJoin us in redefining your fitness experience with state-of-the-art facilities that cater to your every need. \nYour journey to a healthier, stronger you starts here!",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "With 100 diverse classes, EVOGYM is your one-stop destination for a fitness journey filled with excitement, motivation, and results. \nOur certified instructors bring passion and expertise to every class, ensuring that you not only reach your fitness goals but enjoy the journey along the way.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Ready to take your fitness journey to the next level? Join EVOGYM and experience the transformative impact of working with our expert and pro trainers. \nWhether you're a beginner or a seasoned athlete, our team is dedicated to helping you unlock your full potential and become the best version of yourself.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
            {/* Let's import our reusable Header Text Component 'HText' */}
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm">
          🌟 Welcome to EVOGYM – Where Fitness is an Experience! 🌟
          Discover a world of transformation, energy, and community through our exceptional classes at EVOGYM. Our fitness programs are more than just workouts; 
          they're an immersive journey designed to inspire, challenge, and elevate your well-being. Step into a space where every class is an opportunity 
          to redefine your limits, connect with a supportive community, and achieve your fitness goals. with ease. We provide true care into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* 
                - TITLE : Please watch the video @ 2h 53min 00sec to see how to use 'relative' instead of absolute positionning.

                The tailwing css content ' content-abstractwaves ' comes from the Tailwind CSS content's URL configuration performed in 
                'tailwind.config.js' file. We have configure the 'URL path' of the 'circles', 'sparkles', 'abstractwaves', and 'evolvetext'

            */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                    {/* Let's import our reusable Header Text Component 'HText' . {" "}  will force the spacing between the Text and the 'span' tag.*/}
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
              Joining EVOGYM isn't just about getting fit; it's about embracing a lifestyle that enhances every aspect of your life. 
              Whether you're a fitness novice or a seasoned enthusiast, you're welcomed into a community that celebrates every step forward, 
              no matter how big or small.
              </p>
              <p className="mb-5">
              Ready to be part of a community that's transforming lives every day? Join EVOGYM and be part of the millions of 
              happy members getting fit, staying healthy, and living their best lives. Your fitness journey begins now! 💪🌟
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;