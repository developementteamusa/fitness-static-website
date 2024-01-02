// Let's import some modules :
import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Whether you're a weightlifting enthusiast or a newcomer to the world of resistance training, our Weight Training Classes at EVOGYM are designed for you. Elevate your fitness journey, sculpt your body, and achieve lasting strength. Join us and embrace the empowering world of weight training today! 💪✨",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:"Whether you're seeking stress relief, physical fitness, or a deeper connection with your inner self, our Yoga Classes at EVOGYM provide a sacred space for your journey. Join us and experience the profound impact of yoga on your mind, body, and spirit. Elevate your well-being with the ancient wisdom of yoga. 🕉️✨",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Join EVOGYM for Ab Core Classes that go beyond the basics, providing you with a comprehensive and fun approach to achieving a strong and sculpted midsection. Say hello to a more powerful you! 💪🏽✨",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Join EVOGYM for Adventure Fitness Classes that bring a sense of exploration and thrill to your workout routine. Challenge yourself, connect with nature, and experience fitness in a whole new light. Your next adventure awaits! 🏞️💪🌟",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:"Join EVOGYM for Fitness Classes that redefine your approach to exercise. Whether you're a fitness enthusiast or just starting your journey, our classes provide the perfect blend of challenge, camaraderie, and joy. Elevate your fitness experience with us! 💪🎉",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Join EVOGYM for Gym Training Classes that empower you to reach new heights in your fitness journey. Whether you're striving for increased strength, improved endurance, or a complete body transformation, our classes provide the guidance and motivation you need. Let's train together and unlock the best version of you! 💪🔥",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              
                🌟 Welcome to EVOGYM – Where Fitness is an Experience! 🌟

                Discover a world of transformation, energy, and community through our exceptional classes at EVOGYM. 
                Our fitness programs are more than just workouts; they're an immersive journey designed to inspire, challenge, and elevate your well-being. 
                Step into a space where every class is an opportunity to redefine your limits, connect with a supportive community, and 
                achieve your fitness goals.
            </p>
          </div>
        </motion.div>

        {/* Let's insert a slider 'horizontal scroller' of our classes gallery : a bunch of images sitting next to each other */}
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;