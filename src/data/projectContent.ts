export type SceneKind =
  | "morning"
  | "car"
  | "seaMorning"
  | "seaAfternoon"
  | "lunch"
  | "study"
  | "workout"
  | "night";

export type DetailBlock = {
  label: string;
  body?: string;
  items?: string[];
};

export type Station = {
  id: number;
  slug: string;
  title: string;
  sourceHeading: string;
  time: string;
  location: string;
  activity: string;
  automaticHabit: string;
  technique: string;
  emotionalEffect: string;
  supportedState: string;
  improvement: string[];
  extraDetails: DetailBlock[];
  scene: SceneKind;
  theme: {
    sky: string;
    ground: string;
    panel: string;
    accent: string;
    accentDark: string;
    soft: string;
    text: string;
  };
  mapPosition: {
    x: number;
    y: number;
  };
};

export const projectTitle = "My Emotional Metro Map";
export const projectSubtitle = "Small stations that help me navigate my day";

export const projectPurpose =
  "Present one normal day as an emotional journey through eight real, repeatable stations. Each station shows an existing habit, a class technique, the emotional state involved, and one realistic improvement.";

export const coreMessage =
  "I am not trying to completely change my routine or pretend to have a perfect lifestyle. I want to keep the normal structure of my day while adding small, maintainable habits that support preparation, focus, calmness, recovery, energy, and emotional regulation.";

export const reflectionParagraphs = [
  "Treating daily moments as “points of reference and navigation” means creating specific moments in my day where I already know what useful action to take. Like stations on a metro map, these moments help me understand where I am emotionally and guide me toward what I need next. I do not want to completely change my day. Instead, I want to add small, realistic habits that make my routine healthier and less automatic.",
  "Small repeated moments can be powerful because they slowly become habits. A mindful lunch or ten minutes without my phone may not immediately change my well-being, but repeating these actions can make a real difference over time. I have already stopped using my phone during lunch for four days. Now I can eat in silence, rest my mind, enjoy my food, or speak with my family. The effect is still small, but I can see how this habit could improve my life if I maintain it.",
  "The psychological concept that connects most strongly to my map is habit formation. When an action is attached to a clear moment, such as waiting before class or preparing to study, it becomes easier to remember and repeat. These stations also support emotional regulation. Without pauses, my days can feel repetitive, and I may feel lost, tired, or anxious because I have not reflected on what is bothering me.",
  "The tools learned in class give each station a purpose. Breathing and meditation can help me calm down during long waits at university. Visualization helps me plan studying and programming tasks. Mindful eating helps me stay present and choose food that supports my energy. Anchoring can return me to a calm emotional state, while home workouts can release tension and improve motivation. Together, these small stations can improve my day without forcing an unrealistic routine."
];

export const keyIdeas = [
  {
    title: "Points of Reference",
    body: "A station is a predictable point during the day where I already know what action I should take."
  },
  {
    title: "Small Habits Add Up",
    body: "A ten-minute pause may appear small, but repeating it can gradually improve the entire routine."
  },
  {
    title: "Habit Formation",
    body: "Connecting a helpful action to a specific time or situation makes the action easier to remember and maintain."
  },
  {
    title: "Emotional Regulation",
    body: "Pausing allows me to recognize tiredness, frustration, anxiety, or lack of motivation before those emotions control my next decision."
  },
  {
    title: "Realistic Improvement",
    body: "The goal is not to rebuild my entire life. The goal is to improve my existing routine through small additions."
  },
  {
    title: "Main Class Tools",
    body: "Meditation, breathing, visualization, mindful eating, anchoring, physical movement, sensory awareness, and self-control."
  }
];

export const dailySchedule = [
  "Wake up: 7:00 a.m.",
  "Leave home: Around 7:30 a.m.",
  "Arrive near university: Around 8:00 a.m.",
  "Classes: 9:30 a.m. to 12:30 p.m.",
  "Leave the university area: Around 2:00 p.m.",
  "Lunch: Around 4:00 p.m.",
  "Workout target: Around 6:00 p.m., three days per week",
  "Before-sleep phone and chess time: 11:00 p.m. to 12:00 a.m.",
  "Sleep: Around midnight"
];

export const transportationNote =
  "The reason for my long university waiting periods is transportation. I travel with my father. He works from 8:00 a.m. until 2:00 p.m., while my classes are from 9:30 a.m. until 12:30 p.m. Therefore, I wait approximately 90 minutes before class and approximately 90 minutes after class.";

export const stations: Station[] = [
  {
    id: 1,
    slug: "morning-spark",
    title: "Morning Spark",
    sourceHeading: "Morning Wake-Up",
    time: "7:00 a.m.",
    location: "Bedroom/home",
    activity:
      "After waking up, I use my phone for approximately twenty minutes. I check WhatsApp, scroll through TikTok, and sometimes play a quick game on Chess.com. After that, I get dressed and prepare to leave.",
    automaticHabit: "Reaching for my phone immediately after waking up.",
    technique: "Self-control and a pleasure station.",
    emotionalEffect:
      "The phone entertains me and helps me wake up. It does not normally make me late because I can control the amount of time.",
    supportedState: "Entertainment, alertness, and a comfortable start to the morning.",
    improvement: [
      "Keep the habit controlled at approximately twenty minutes rather than allowing it to expand."
    ],
    extraDetails: [
      {
        label: "Meaning of this station",
        body: "This habit is not completely harmful. The twenty-minute period is controlled, enjoyable, and useful for waking up. Emotional well-being does not require removing every enjoyable activity."
      }
    ],
    scene: "morning",
    theme: {
      sky: "#ffe3b3",
      ground: "#f7c5a5",
      panel: "#fff8ed",
      accent: "#f18f45",
      accentDark: "#995226",
      soft: "#ffe9cc",
      text: "#3a261e"
    },
    mapPosition: { x: 10, y: 76 }
  },
  {
    id: 2,
    slug: "window-of-ideas",
    title: "Window of Ideas",
    sourceHeading: "Car Ride and Mental Preparation",
    time: "Approximately 7:30–8:00 a.m.",
    location: "Inside the car",
    activity:
      "I travel to the university area by car. I am usually quiet, listening to music or the radio, looking out of the window, and thinking.",
    automaticHabit: "Quietly thinking while looking outside.",
    technique: "Mental visualization.",
    emotionalEffect:
      "I mentally organize my plans before acting. I may think about my future, university work, study material, programming ideas, website projects, or what I need to complete later.",
    supportedState: "Mental preparation, organization, imagination, and focus.",
    improvement: [
      "Use part of the quiet car ride intentionally to visualize one or two priorities for the day without creating an overwhelming schedule."
    ],
    extraDetails: [
      {
        label: "How visualization already appears naturally",
        body: "I mentally organize my plans before acting. I may think about my future, university work, study material, programming ideas, website projects, or what I need to complete later."
      }
    ],
    scene: "car",
    theme: {
      sky: "#cae6f4",
      ground: "#d7e3de",
      panel: "#f2fbff",
      accent: "#4d94b5",
      accentDark: "#24546a",
      soft: "#dff3f6",
      text: "#17313c"
    },
    mapPosition: { x: 28, y: 61 }
  },
  {
    id: 3,
    slug: "sea-view-reset",
    title: "Sea-View Reset",
    sourceHeading: "Before-Class Preparation",
    time: "Approximately 8:00–9:30 a.m.",
    location: "A sea-view area near university",
    activity:
      "I wait for approximately ninety minutes before class. At present, I normally spend nearly the entire waiting period on my phone using Chess.com, TikTok, or Instagram.",
    automaticHabit: "Using the phone continuously throughout the entire ninety-minute wait.",
    technique: "Meditation, slow breathing, sensory grounding, hydration, and self-control.",
    emotionalEffect:
      "The phone can entertain me and give me a good laugh, but using it for the full waiting period can also make my head hurt. The weather and heat can add to the irritation.",
    supportedState: "Calmness, freshness, hydration, mental preparation, and presence before class.",
    improvement: [
      "Bring cold water from home.",
      "Drink more water during the waiting period.",
      "Spend at least ten minutes without the phone.",
      "During those ten minutes, sit quietly, breathe, meditate, look at the sea, and notice the surroundings.",
      "The remaining time may still include phone use. The goal is balance, not a complete phone ban."
    ],
    extraDetails: [],
    scene: "seaMorning",
    theme: {
      sky: "#b9ebf2",
      ground: "#f7de98",
      panel: "#f3fcfb",
      accent: "#1d9db3",
      accentDark: "#0f5c69",
      soft: "#d8f4ed",
      text: "#12383e"
    },
    mapPosition: { x: 18, y: 42 }
  },
  {
    id: 4,
    slug: "social-battery-recharge",
    title: "Social Battery Recharge",
    sourceHeading: "After-Class Recovery",
    time: "Approximately 12:30–2:00 p.m.",
    location: "The same or similar sea-view waiting area",
    activity:
      "I wait for approximately ninety minutes after class before leaving with my father. At present, I often use my phone for most or all of this period.",
    automaticHabit:
      "Immediately using the phone again without first allowing the mind to recover.",
    technique: "Anchoring, breathing, hydration, sensory grounding, and quiet recovery.",
    emotionalEffect:
      "I complete two socially demanding classes. They can drain my social battery. I may also feel physically tired, irritated by the heat, and affected by a headache.",
    supportedState: "Privacy, calmness, mental recovery, safety, and restored energy.",
    improvement: [
      "Spend the first ten to fifteen minutes in silence.",
      "Drink cold water.",
      "Look at the sea.",
      "Use the anchoring gesture if I feel irritated or mentally drained.",
      "Allow phone use afterward, but first create a clear recovery period."
    ],
    extraDetails: [
      {
        label: "What I emotionally need",
        body: "Silence, privacy, mental rest, and a relaxing place to recharge."
      },
      {
        label: "Exact anchoring technique from the previous assignment",
        body: "I put my arms together and place my right thumb over my left thumb."
      },
      {
        label: "Memory connected to the anchor",
        body: "My grandfather’s house in the mountains. I imagine myself sitting on the balcony swing and feeling the wind."
      },
      {
        label: "Emotional states connected to the anchor",
        body: "Safety, happiness, calmness, and focus."
      }
    ],
    scene: "seaAfternoon",
    theme: {
      sky: "#cbdedb",
      ground: "#e1d5b9",
      panel: "#f7faf6",
      accent: "#6e9b80",
      accentDark: "#3b604c",
      soft: "#e7efe4",
      text: "#263b31"
    },
    mapPosition: { x: 42, y: 31 }
  },
  {
    id: 5,
    slug: "present-at-the-table",
    title: "Present at the Table",
    sourceHeading: "Mindful Lunch",
    time: "Approximately 4:00 p.m.",
    location: "Family dining area at home",
    activity: "I eat the food prepared by my mother.",
    automaticHabit: "Using my phone while eating.",
    technique:
      "Mindful eating, sensory awareness, habit formation, social connection, and recovery.",
    emotionalEffect:
      "The habit is still new, so I have not experienced a huge change yet. However, I can see how it may create a meaningful difference if I continue it.",
    supportedState:
      "Presence, rest, enjoyment, connection with family, nourishment, and improved energy.",
    improvement: [
      "Eat a more filling and balanced meal that supports energy.",
      "Possible realistic additions include an extra portion of the meal, a fresh salad, bread or another suitable source of carbohydrates.",
      "The goal is not an unrealistic diet or randomly doubling all food. The goal is to eat enough nourishing food to reduce constant tiredness."
    ],
    extraDetails: [
      {
        label: "Current improvement",
        body: "For four days, I have been eating without using my phone. Instead, I may sit in silence, rest my brain, enjoy the food, or talk with my family about their day."
      },
      {
        label: "Food and energy goal",
        items: [
          "An extra portion of the meal.",
          "A fresh salad.",
          "Bread or another suitable source of carbohydrates."
        ]
      }
    ],
    scene: "lunch",
    theme: {
      sky: "#ffe7ca",
      ground: "#e8b17d",
      panel: "#fff8ef",
      accent: "#c97442",
      accentDark: "#744028",
      soft: "#f8dfbe",
      text: "#3a2a21"
    },
    mapPosition: { x: 63, y: 47 }
  },
  {
    id: 6,
    slug: "rest-plan-begin",
    title: "Rest, Plan, Begin",
    sourceHeading: "Afternoon Rest and Study",
    time: "Approximately 4:30–5:45 p.m.",
    location: "Bedroom or study area",
    activity:
      "After university and lunch, I often feel tired and sleepy. I may scroll for a long time. If studying is necessary, I sometimes force myself to begin. If I have plenty of time before a deadline, I can procrastinate.",
    automaticHabit:
      "Scrolling for hours when tired or delaying work when the deadline feels far away.",
    technique:
      "Rest, visualization, habit formation, emotional regulation, breathing, and breaking work into a manageable session.",
    emotionalEffect:
      "When I become annoyed or feel that I have already made a mistake, I sometimes rush the task or make worse decisions. In chess, for example, if I believe I am losing, frustration may cause me to lose faster instead of thinking carefully.",
    supportedState: "Rest, direction, manageable focus, motivation, and reduced mental overload.",
    improvement: [
      "Try a thirty-minute power nap after lunch.",
      "Before studying, quickly plan the approximate duration and what I want to complete.",
      "Start, do as much as I am realistically able to do, and stop when necessary."
    ],
    extraDetails: [
      {
        label: "Important detail",
        body: "The power nap is not yet an established habit. It is a realistic experiment. Because I am not used to alarms and may not wake up easily, my parents could help wake me after thirty minutes."
      },
      {
        label: "Natural tool already used",
        body: "Mental visualization."
      },
      {
        label: "How I use visualization",
        body: "Before studying, I quickly plan the approximate duration and what I want to complete. Then I start, do as much as I am realistically able to do, and stop when necessary. I was already doing this naturally before knowing that it was called visualization."
      }
    ],
    scene: "study",
    theme: {
      sky: "#d9d3e8",
      ground: "#c7d8c5",
      panel: "#f7f5fb",
      accent: "#7d70ad",
      accentDark: "#473f70",
      soft: "#e7e1f0",
      text: "#2f2b42"
    },
    mapPosition: { x: 79, y: 31 }
  },
  {
    id: 7,
    slug: "energy-in-motion",
    title: "Energy in Motion",
    sourceHeading: "Home Workout",
    time: "Approximately 6:00 p.m., three days per week",
    location: "Home workout area",
    activity:
      "After resting and eating a small pre-workout snack, I want to return to exercising at home using my dumbbell kit.",
    automaticHabit: "Choosing scrolling or passive rest instead of beginning the workout.",
    technique:
      "Physical movement, self-control, habit formation, nervous-system regulation, and emotional release.",
    emotionalEffect: "Tiredness and laziness.",
    supportedState: "Energy, motivation, release, confidence, discipline, and improved mood.",
    improvement: [
      "Workout three days per week.",
      "Begin around 6:00 p.m.",
      "Use the dumbbell equipment already available at home.",
      "Focus on consistency rather than creating an extreme routine."
    ],
    extraDetails: [
      {
        label: "Current obstacle",
        body: "Tiredness and laziness."
      }
    ],
    scene: "workout",
    theme: {
      sky: "#d8ecd3",
      ground: "#f0d17e",
      panel: "#f7fcf4",
      accent: "#4f9d5d",
      accentDark: "#2d6539",
      soft: "#e2f2d7",
      text: "#203c29"
    },
    mapPosition: { x: 68, y: 13 }
  },
  {
    id: 8,
    slug: "one-more-game",
    title: "One More Game",
    sourceHeading: "Nighttime Chess",
    time: "Approximately 11:00 p.m.–12:00 a.m.",
    location: "Bedroom",
    activity: "I use my phone until the moment I sleep, usually playing chess.",
    automaticHabit:
      "Continuing to play until bedtime and sometimes staying awake longer because I do not want to finish on a losing streak.",
    technique: "Pleasure station, breathing, emotional regulation, anchoring, and self-awareness.",
    emotionalEffect:
      "Chess makes me feel active and mentally engaged. It has become one of the hobbies I have enjoyed most during the last three months. However, losing can make me annoyed, competitive, and unwilling to stop.",
    supportedState:
      "Enjoyment, mental activity, self-awareness, controlled frustration, and a more balanced ending to the day.",
    improvement: [
      "Continue enjoying chess.",
      "Recognize when frustration begins to control decision-making.",
      "Use slow breathing or the anchoring gesture after a frustrating loss.",
      "Pause before immediately starting another game.",
      "The goal is not to ban chess. The goal is to prevent anger or a losing streak from controlling the end of the night."
    ],
    extraDetails: [
      {
        label: "Honest limitation",
        body: "I am not currently trying to stop using my phone before sleep. I enjoy using it until I fall asleep, so a total phone ban would not be realistic for me."
      }
    ],
    scene: "night",
    theme: {
      sky: "#27304f",
      ground: "#4b415d",
      panel: "#f5f3fb",
      accent: "#9c79d6",
      accentDark: "#4a3678",
      soft: "#e5ddf6",
      text: "#242033"
    },
    mapPosition: { x: 90, y: 11 }
  }
];

export const conclusion =
  "I do not need to completely rebuild my day. My emotional metro map keeps the normal structure of my routine while adding small points of preparation, recovery, reflection, nourishment, movement, and self-control. Each station gives me a clear action to use when I reach that part of the day. Over time, these small and repeatable habits can make my days feel less automatic and help me move through them with greater intention.";

export const rubricChecklist = [
  {
    requirement: "Part 1 explains daily moments as points of reference and navigation.",
    coverage: "The full Part 1 reflection is displayed as continuous text."
  },
  {
    requirement: "Part 1 explains why small repeated moments support well-being.",
    coverage: "The reflection and concept cards explain small repeated pauses, mindful lunch, and ten minutes without the phone."
  },
  {
    requirement: "At least one psychological concept is accurate and integrated.",
    coverage: "Habit formation and emotional regulation are named, explained, and connected to the stations."
  },
  {
    requirement: "Class tools are linked to the routine.",
    coverage: "Meditation, breathing, visualization, mindful eating, anchoring, movement, grounding, recovery, and self-control appear in the reflection and stations."
  },
  {
    requirement: "Minimum 6-7 stations across the day.",
    coverage: "The roadmap includes eight stations from morning through before sleep."
  },
  {
    requirement: "Every station includes activity, tool or technique, emotional state, and automatic habit.",
    coverage: "Each station panel displays those fields with consistent labels."
  },
  {
    requirement: "The map is realistic and not idealized.",
    coverage: "The station content keeps controlled phone use, tiredness, procrastination, headaches, social battery drain, and nighttime chess frustration honest."
  },
  {
    requirement: "Clarity, organization, readability, and creativity.",
    coverage: "The website uses a structured roadmap, station panels, readable academic text, and original 2.5D CSS/SVG scenes."
  },
  {
    requirement: "Overall coherence between reflection and map.",
    coverage: "Concept cards and station techniques connect Part 1 ideas directly to Part 2 choices."
  }
];
