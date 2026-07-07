import type { FAQ } from "./servicesData";

export interface ServiceContentQuality {
  heroSubline: string;
  overviewDescription: string;
  faqs: FAQ[];
  relatedSlugs: string[];
  todos: string[];
}

const proofTodo = "TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof.";
const reviewTodo = "TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.";

const proofTodos = [proofTodo, reviewTodo];

const activityFaqs = (name: string, setting: string, movement: string): FAQ[] => [
  {
    question: `Is ${name} suitable for mixed fitness levels?`,
    answer: `${name} can be adjusted around the group's mobility, confidence, and energy level. Share any accessibility notes early so the facilitation team can recommend a suitable route, mission mix, or indoor alternative.`,
  },
  {
    question: `How many people can join ${name}?`,
    answer: "Send your expected pax and preferred date first. Elluminate will confirm the right team split, crew size, venue fit, and whether the format should be run in waves or as one shared session.",
  },
  {
    question: `Can ${name} be customised for our company?`,
    answer: "Yes. Company themes, briefing messages, light branding, prize moments, and debrief points can be discussed during planning, as long as the final scope fits the timeline and budget.",
  },
  {
    question: `What should organisers prepare for ${name}?`,
    answer: `Prepare the pax estimate, venue or location preference, date window, participant profile, and any safety or ${movement} concerns. Elluminate will advise the setup, facilitation flow, and next planning steps.`,
  },
];

const virtualFaqs = (name: string): FAQ[] => [
  {
    question: `Is ${name} suitable for remote and hybrid teams?`,
    answer: `${name} is designed for teams joining from different locations. Share the expected group size, time zones, and platform preference so the session flow can be matched to the audience.`,
  },
  {
    question: `What platform do we need for ${name}?`,
    answer: "Most virtual sessions can be planned around common video-call platforms. Elluminate will confirm the technical setup, briefing flow, and any links or materials before the event.",
  },
  {
    question: `Can ${name} include company themes or messages?`,
    answer: "Light customisation can be discussed, including company references, themed team names, branded slides, or a short closing message. The final scope depends on lead time and budget.",
  },
  {
    question: `How do we keep people engaged online?`,
    answer: "The format should include clear instructions, team roles, paced challenges, visible progress, and active hosting. Share your team's usual online energy level so the session can be calibrated.",
  },
];

const trainingFaqs = (name: string, focus: string): FAQ[] => [
  {
    question: `Who is ${name} best suited for?`,
    answer: `${name} is best for teams that need a structured conversation around ${focus}. Share the audience level, team context, and desired outcome so the session can be scoped properly.`,
  },
  {
    question: `Can ${name} be customised to our workplace context?`,
    answer: "Yes. Examples, discussion prompts, role plays, and debrief questions can be adjusted around your team context without inventing claims or forcing a one-size-fits-all workshop.",
  },
  {
    question: `How long should we set aside for ${name}?`,
    answer: "The ideal duration depends on group size, depth of discussion, and whether assessments or exercises are included. Share your timing window and Elluminate will recommend a practical structure.",
  },
  {
    question: `What should participants expect during ${name}?`,
    answer: "Participants should expect guided facilitation, structured reflection, group discussion, and practical takeaways rather than a passive lecture. Any assessment requirements will be confirmed before the session.",
  },
];

const retreatFaqs = (name: string): FAQ[] => [
  {
    question: `How early should we plan ${name}?`,
    answer: "Start as early as possible once the pax, preferred dates, and budget range are roughly known. More lead time gives better room for venue, travel, activity, and meal coordination.",
  },
  {
    question: `Can ${name} include team building and workshops?`,
    answer: "Yes. Retreats can combine facilitation, bonding activities, wellness time, leadership conversations, meals, and travel logistics depending on the objective and available schedule.",
  },
  {
    question: `What information is needed for a ${name} quote?`,
    answer: "Share pax, travel or venue preferences, date window, rooming expectations, activity goals, dietary notes, and any budget parameters. Elluminate will advise the planning direction from there.",
  },
  {
    question: `Can you manage logistics for ${name}?`,
    answer: "Logistics support can include programme flow, activity planning, venue coordination, facilitation, transport, and supplier alignment. The exact scope should be confirmed before proposal.",
  },
];

const corporateFaqs = (name: string): FAQ[] => [
  {
    question: `What does ${name} usually include?`,
    answer: `${name} can include programme design, facilitation, activity flow, supplier coordination, and event-day support. The final scope depends on pax, venue, timing, and business objective.`,
  },
  {
    question: `Can ${name} work for mixed departments or seniority levels?`,
    answer: "Yes, if the format is planned around participation comfort, accessibility, and event goals. Share the audience mix early so the programme does not over-index on one personality type.",
  },
  {
    question: `How do we choose the right format for ${name}?`,
    answer: "Start with the goal, constraints, and participant profile rather than the activity name. Elluminate can recommend a format once the planning inputs are clear.",
  },
  {
    question: `What should we prepare before enquiring?`,
    answer: "Prepare the expected pax, date window, venue preference, timing, budget range if available, and the reason the event is happening. That gives the planning team enough context to respond usefully.",
  },
];

const item = (
  heroSubline: string,
  overviewDescription: string,
  faqs: FAQ[],
  relatedSlugs: string[],
  todos: string[] = proofTodos,
): ServiceContentQuality => ({
  heroSubline,
  overviewDescription,
  faqs,
  relatedSlugs,
  todos,
});

export const serviceContentQuality: Record<string, ServiceContentQuality> = {
  "team-building": item(
    "A planning-first corporate team-building hub for organisers who need the right format, flow, and quote.",
    "Start here when you know the team needs a bonding activity but not the exact format. Elluminate narrows the brief by pax, venue, timing, energy level, and objective, then recommends indoor, outdoor, virtual, retreat, or training options that fit the group.",
    corporateFaqs("corporate team building"),
    ["amazing-race", "minute-to-win-it", "csi-bones", "cultural-race"],
  ),
  "amazing-race": item(
    "An outdoor race format for teams that want movement, clues, checkpoint missions, and shared momentum.",
    "Amazing Race turns a venue or district into a facilitated team challenge. Participants solve clues, complete checkpoint missions, and move in groups toward a final result. Share pax, date, location preference, and fitness notes so the route and challenge mix can be shaped before quoting.",
    [
      { question: "What is an Amazing Race team building activity?", answer: "Amazing Race is a team building experience where participants solve clues, complete challenges, and navigate checkpoints while working together toward a common goal." },
      { question: "Is Amazing Race suitable for all fitness levels?", answer: "Yes. We design routes and challenges to suit different age groups, fitness levels, and participant profiles." },
      { question: "What happens if it rains during the Amazing Race?", answer: "We provide wet-weather contingency plans and can incorporate sheltered checkpoints, indoor venues, or alternative game formats." },
      { question: "Can the Amazing Race be customised?", answer: "Yes. We can customise challenges, routes, branding, company messages, and learning outcomes." },
      { question: "Where can Amazing Race team building activities be conducted?", answer: "Popular locations include Sentosa, Marina Bay, Gardens by the Bay, Chinatown, Civic District, Jewel Changi Airport, and custom locations across Singapore." },
    ],
    ["cultural-race", "treasure-heist", "running-man", "team-building"],
  ),
  "csi-bones": item(
    "An indoor mystery format for teams that prefer deduction, evidence review, and quieter collaboration.",
    "CSI-Bones is a forensic-style team activity built around clues, evidence, and group reasoning. It suits teams that want problem solving without heavy physical exertion. Share pax, venue, timing, and desired intensity so the investigation can be scoped for your group.",
    [
      { question: "What is CSI Bones?", answer: "CSI Bones is a mystery-solving team building activity where participants investigate clues, solve puzzles, and work together to uncover the truth." },
      { question: "Does the programme require detective experience?", answer: "No. The challenges are designed for everyone regardless of prior experience." },
      { question: "What skills are developed?", answer: "Participants strengthen communication, critical thinking, teamwork, observation, and problem-solving skills." },
      { question: "Can CSI Bones be held indoors?", answer: "Yes. It is primarily designed for indoor venues but can also be adapted for outdoor locations." },
      { question: "Can the storyline be customised?", answer: "Yes. We can customise scenarios, company themes, and learning objectives." },
    ],
    ["treasure-heist", "amongst-us", "monopoly-dash", "team-building"],
  ),
  "cultural-race": item(
    "A Singapore route-based activity for teams that want local discovery, movement, and shared stories.",
    "Cultural Race uses Singapore locations, clues, and team missions to create a facilitated outdoor discovery experience. It works well for local, regional, and mixed teams who want the place itself to matter. Share route comfort, pax, timing, and weather constraints during planning.",
    [
      { question: "What is a Cultural Race?", answer: "A Cultural Race combines exploration, heritage, and team challenges while participants discover local landmarks and cultures." },
      { question: "Which locations are available?", answer: "Popular routes include Chinatown, Little India, Kampong Glam, Civic District, and customised heritage trails." },
      { question: "Can the programme include local culture?", answer: "Yes. We incorporate local history, traditions, food, architecture, and cultural storytelling into the challenges." },
      { question: "Is it suitable for overseas visitors?", answer: "Absolutely. Cultural Race is a popular choice for international delegates and regional corporate teams visiting Singapore." },
      { question: "Can it be customised for our company?", answer: "Yes. We can integrate company branding, messages, and learning objectives throughout the experience." },
    ],
    ["amazing-race", "running-man", "local-retreats", "team-building"],
  ),
  "amongst-us": item(
    "A social-deduction format for teams that want conversation, suspicion, laughter, and light strategy.",
    "Amongst Us turns trust, observation, and group discussion into a facilitated team game. Participants work through missions while trying to read the room and identify hidden roles. Share pax, venue, and comfort level so the session can stay fun without becoming confusing.",
    [
      { question: "What is Amongst Us team building?", answer: "Amongst Us is a social deduction team building game where participants complete missions while identifying hidden imposters within their teams." },
      { question: "Is prior knowledge of the game required?", answer: "No. Our facilitators explain all rules before the activity begins." },
      { question: "What skills does the programme develop?", answer: "It strengthens communication, trust, observation, collaboration, and decision-making." },
      { question: "Can it be played indoors?", answer: "Yes. The activity is ideal for indoor venues and conference spaces." },
      { question: "Is it suitable for large corporate groups?", answer: "Yes. The programme can be scaled for both small teams and large company events." },
    ],
    ["csi-bones", "alice-in-motherland", "minute-to-win-it", "team-building"],
  ),
  "alice-in-motherland": item(
    "A story-led puzzle activity for teams that want themed missions, imagination, and collaborative problem solving.",
    "Alice in Motherland uses a themed storyline, puzzle stations, and facilitated team tasks to create an immersive indoor or hybrid activity. It suits groups that want character and narrative without needing intense physical movement. Share pax, venue, and theme preferences before quoting.",
    [
      { question: "What is Alice in Motherland?", answer: "Alice in Motherland is an immersive strategy-based team building experience inspired by survival games, featuring teamwork, puzzles, and decision-making challenges." },
      { question: "Is the programme physically demanding?", answer: "No. The experience focuses more on teamwork, communication, strategy, and problem-solving than physical endurance." },
      { question: "Can the challenges be customised?", answer: "Yes. Challenges can be tailored to suit your objectives, venue, participants, and event duration." },
      { question: "Is it suitable for large corporate groups?", answer: "Yes. The programme scales well from small departments to company-wide events with hundreds of participants." },
      { question: "Can the programme be conducted indoors?", answer: "Yes. Alice in Motherland can be organised indoors, outdoors, or as a hybrid experience." },
    ],
    ["amongst-us", "treasure-heist", "the-great-zodiac-hunt-virtual", "team-building"],
  ),
  "battle-of-the-olympians": item(
    "A tournament-style activity for teams that want friendly competition, team pride, and visible energy.",
    "Battle of the Olympians brings teams through a sequence of facilitated challenge rounds with a clear scoring arc. It can suit school, cohort, and company groups that want active participation and a strong finish. Share pax, venue, weather needs, and intensity level early.",
    [
      { question: "What is Battle of the Olympians?", answer: "Battle of the Olympians is an action-packed team building programme inspired by Olympic-style competitions, combining teamwork, strategy, and friendly rivalry." },
      { question: "Are the activities physically demanding?", answer: "The programme can be adjusted to match your participants' fitness levels and event objectives." },
      { question: "Can it be organised indoors?", answer: "Yes. Indoor and outdoor versions are available depending on your venue." },
      { question: "How many games are included?", answer: "The programme typically includes multiple Olympic-inspired challenges that can be customised for your event." },
      { question: "Is it suitable for large corporate events?", answer: "Yes. We regularly organise Battle of the Olympians for groups ranging from 20 to over 500 participants." },
    ],
    ["minute-to-win-it", "running-man", "corporate-days", "team-building"],
  ),
  "builder-cross": item(
    "A construction-style challenge for teams that want hands-on collaboration and practical problem solving.",
    "Builder Cross asks participants to plan, build, test, and improve together under a facilitated challenge structure. It works for teams that want creativity and communication in a controlled setting. Share pax, venue, timing, and space constraints so materials and flow can be planned.",
    [
      { question: "What is Builder Cross?", answer: "Builder Cross is a collaborative team building activity where teams construct structures while overcoming changing business scenarios and unexpected challenges." },
      { question: "What skills does Builder Cross develop?", answer: "The programme develops communication, collaboration, leadership, creativity, planning, and adaptability." },
      { question: "Can it be conducted indoors?", answer: "Yes. Builder Cross is designed primarily as an indoor team building activity." },
      { question: "Is it suitable for leadership teams?", answer: "Yes. It is commonly used for leadership development, project management, and cross-functional collaboration." },
      { question: "Can the building materials be customised?", answer: "Yes. Different materials and challenge themes can be incorporated depending on your objectives." },
    ],
    ["minute-to-win-it", "monopoly-dash", "workshops", "team-building"],
  ),
  "minute-to-win-it": item(
    "A quick-rotation game format for teams that want easy participation, fast laughs, and room-wide energy.",
    "Minute To Win It uses short station challenges that are easy to understand and quick to rotate. It suits ballrooms, offices, and indoor venues where organisers need energy without complex briefing. Share pax, timing, and venue size so the station flow can be planned.",
    [
      { question: "What is Minute To Win It team building?", answer: "Minute To Win It features a series of fast-paced one-minute challenges that encourage teamwork, communication, and friendly competition." },
      { question: "Can the games be played indoors?", answer: "Yes. Minute To Win It is ideal for indoor venues, offices, and hotel function rooms." },
      { question: "Is it suitable for all ages?", answer: "Yes. Challenges are designed to be fun, inclusive, and suitable for diverse participant groups." },
      { question: "Can we choose the games?", answer: "Yes. We can customise the selection of games based on your event objectives and participants." },
      { question: "How long does the programme last?", answer: "Programmes typically run between one and three hours depending on your schedule." },
    ],
    ["monopoly-dash", "battle-of-the-olympians", "corporate-days", "team-building"],
  ),
  "monopoly-dash": item(
    "An indoor strategy game for teams that want points, movement, negotiation, and friendly competition.",
    "Monopoly Dash translates board-game energy into a live facilitated team activity. Participants move through missions, make decisions, and compete for points without needing a long setup. Share pax, room layout, and timing so the game economy and rotations fit the event.",
    [
      { question: "What is Monopoly Dash?", answer: "Monopoly Dash is a fast-paced team building game inspired by Monopoly, combining strategic decision-making, mini challenges, and resource management." },
      { question: "Is Monopoly knowledge required?", answer: "No. The game is designed so everyone can participate regardless of familiarity with Monopoly." },
      { question: "Can Monopoly Dash be played indoors?", answer: "Yes. It works well in function rooms, ballrooms, convention halls, and indoor event spaces." },
      { question: "How many participants can join?", answer: "The programme is suitable for small groups as well as large corporate events with several hundred participants." },
      { question: "Can company branding be included?", answer: "Yes. We can customise challenges, game currency, and scenarios to reflect your organisation." },
    ],
    ["minute-to-win-it", "builder-cross", "csi-bones", "team-building"],
  ),
  "running-man": item(
    "A high-energy mission format for teams that want active challenges, chases, and variety-show energy.",
    "Running Man Adventure uses team missions, quick competitions, and facilitated challenge rounds to create a lively event. It suits groups that are comfortable with movement and visible participation. Share pax, venue, safety constraints, and weather needs before planning the final format.",
    [
      { question: "What is a Running Man team building event?", answer: "Running Man is a fast-paced team building programme inspired by the popular Korean variety show. Teams compete in a series of interactive missions, games, and challenges to earn points." },
      { question: "Is Name Tag Elimination included?", answer: "Name Tag Elimination can be included as an optional finale activity depending on venue suitability and participant preferences." },
      { question: "Is Running Man suitable for corporate teams?", answer: "Yes. Running Man activities are designed for corporate team bonding and focus on teamwork, communication, strategy, and engagement." },
      { question: "Can Running Man be conducted indoors?", answer: "Yes. Indoor and outdoor versions are available depending on venue availability and weather conditions." },
      { question: "How many participants can join a Running Man event?", answer: "We can facilitate Running Man programmes for small teams of 20 participants to large-scale corporate events with several hundred participants." },
    ],
    ["amazing-race", "battle-of-the-olympians", "sotong-game", "team-building"],
  ),
  "sotong-game": item(
    "A survival-style challenge format for teams that want tension, humour, and simple rules.",
    "Sotong Game uses elimination-inspired missions in a facilitated, team-safe format. The experience is built around clear rules, short rounds, and shared suspense rather than real risk. Share pax, venue, age range, and comfort level so the tone stays appropriate.",
    [
      { question: "What is Sotong Game?", answer: "Sotong Game is a corporate team building programme inspired by popular survival game concepts, featuring exciting mini games with a fun and light-hearted twist." },
      { question: "Is the programme suitable for all ages?", answer: "Yes. Challenges are designed to be safe, engaging, and suitable for diverse corporate participants." },
      { question: "Can the games be customised?", answer: "Yes. We can tailor the games based on your objectives, venue, and participant profile." },
      { question: "Is it competitive?", answer: "Yes. Teams compete through multiple rounds while encouraging teamwork, communication, and strategy." },
      { question: "Can it be conducted indoors?", answer: "Yes. Indoor, outdoor, and hybrid versions are available." },
    ],
    ["running-man", "minute-to-win-it", "battle-of-the-olympians", "team-building"],
  ),
  "treasure-heist": item(
    "A heist-themed puzzle format for teams that want clues, pressure, and strategic collaboration.",
    "Treasure Heist gives teams a facilitated mission built around clues, objectives, and timed decisions. It is useful when the group wants a stronger story than a standard station game. Share pax, venue, timing, and desired intensity so the puzzle flow can be calibrated.",
    [
      { question: "What is Treasure Heist?", answer: "Treasure Heist is a strategy-based team building adventure where teams solve puzzles, unlock clues, and complete missions to recover the hidden treasure." },
      { question: "What skills does Treasure Heist develop?", answer: "The programme encourages communication, collaboration, strategic thinking, creativity, and problem-solving." },
      { question: "Can Treasure Heist be customised?", answer: "Yes. We can customise the storyline, challenges, branding, and objectives to suit your organisation." },
      { question: "Can it be conducted indoors?", answer: "Yes. Indoor, outdoor, and hybrid formats are available depending on your venue." },
      { question: "Is Treasure Heist suitable for large groups?", answer: "Yes. The programme is scalable for small teams as well as large corporate events with hundreds of participants." },
    ],
    ["csi-bones", "alice-in-motherland", "amazing-race", "team-building"],
  ),
  "archery-tag": item(
    "A structured action game for teams that want safe competition, movement, and tactical play.",
    "Archery Tag uses foam-tipped arrows, team zones, and facilitated rules to create an active battle format. It suits groups that want adrenaline with clear safety management. Share pax, venue options, weather constraints, and participant profile before confirming the setup.",
    activityFaqs("Archery Tag", "action-game arena", "safety"),
    ["gel-blitz", "nerfwar", "tag-tical-laser-teambuilding", "team-building"],
  ),
  "gel-blitz": item(
    "A gel-blaster activity for teams that want tactical missions, movement, and structured action.",
    "GelBlitz is an action format built around facilitated missions, clear zones, and safety briefings. It suits groups that want more intensity than casual games while still needing event control. Share pax, venue, weather needs, and participant comfort before planning.",
    activityFaqs("GelBlitz", "tactical arena", "safety"),
    ["archery-tag", "nerfwar", "tag-tical-laser-teambuilding", "team-building"],
  ),
  "nerfwar": item(
    "A foam-blaster activity for teams that want accessible action, team tactics, and high participation.",
    "Nerfwar uses foam blasters, facilitated rules, and mission rounds to create a safer action-game experience. It suits mixed groups that want energy without heavy technical setup. Share pax, venue, age range, and comfort level so the format can be adjusted.",
    activityFaqs("Nerfwar", "foam-blaster arena", "safety"),
    ["archery-tag", "gel-blitz", "tag-tical-laser-teambuilding", "team-building"],
  ),
  "tag-tical-laser-teambuilding": item(
    "A laser tag activity for teams that want tactical play, low-contact competition, and active missions.",
    "Tag-tical Laser Team Building uses sensor-based missions, team strategy, and facilitated game rounds. It suits groups that want action without projectiles. Share pax, venue options, intensity preference, and accessibility notes so the arena flow can be planned.",
    activityFaqs("Tag-tical Laser Team Building", "laser mission arena", "movement"),
    ["archery-tag", "gel-blitz", "nerfwar", "team-building"],
  ),
  "amazing-race-virtual": item(
    "A remote race format for distributed teams that want shared missions without travelling.",
    "Virtual Amazing Race gives remote or hybrid teams a hosted challenge built around digital clues, teamwork, and paced missions. It is useful when people cannot gather in one venue but still need a shared event. Share pax, platform preference, and time zones before planning.",
    virtualFaqs("Virtual Amazing Race"),
    ["the-gameshow-experience-virtual", "the-great-zodiac-hunt-virtual", "fit-in-your-team-virtual", "team-building"],
  ),
  "fit-in-your-team-virtual": item(
    "A virtual movement session for teams that want energy, wellness, and light competition online.",
    "Fit In Your Team combines hosted movement, simple challenges, and online team participation. It suits remote groups that need a reset rather than another passive call. Share pax, time zones, fitness comfort, and platform preference so the intensity can be adjusted.",
    virtualFaqs("Fit In Your Team"),
    ["amazing-race-virtual", "the-gameshow-experience-virtual", "wellness-events", "team-building"],
  ),
  "the-gameshow-experience-virtual": item(
    "A virtual game show for remote teams that want quick rounds, visible hosting, and easy participation.",
    "The Gameshow Experience uses hosted online rounds, questions, and team play to create a shared screen-based activity. It suits remote teams that need energy without complex setup. Share pax, time zones, and preferred platform so the pacing can be planned.",
    virtualFaqs("The Gameshow Experience"),
    ["amazing-race-virtual", "the-patriot-act-virtual", "grand-christmas-delivery", "team-building"],
  ),
  "the-great-zodiac-hunt-virtual": item(
    "A story-led virtual hunt for teams that want puzzles, culture, and light online adventure.",
    "The Great Zodiac Hunt gives remote teams a hosted mission built around themed clues and collaborative problem solving. It works for groups that want a virtual activity with more story than standard trivia. Share pax, platform, and timing before planning.",
    virtualFaqs("The Great Zodiac Hunt"),
    ["amazing-race-virtual", "tomb-raider-king-treasure-hunt-virtual", "the-nuclear-fallout-escape-room-virtual", "team-building"],
  ),
  "the-nuclear-fallout-escape-room-virtual": item(
    "A virtual escape-room format for teams that want time pressure, puzzles, and shared problem solving.",
    "Nuclear Fallout Escape Room turns online collaboration into a hosted puzzle mission with a countdown structure. It suits teams that enjoy deduction and clear stakes. Share pax, platform, time zone, and puzzle comfort so the game can be set up appropriately.",
    virtualFaqs("Nuclear Fallout Escape Room"),
    ["tomb-raider-king-treasure-hunt-virtual", "the-great-zodiac-hunt-virtual", "amazing-race-virtual", "team-building"],
  ),
  "the-patriot-act-virtual": item(
    "A Singapore-themed virtual activity for teams that want local references, trivia, and hosted team play.",
    "The Patriot Act uses Singapore-inspired challenges and online team rounds to create a light, shared virtual event. It suits National Day moments, remote teams, and mixed local groups. Share pax, platform, and audience profile so references land well.",
    virtualFaqs("The Patriot Act"),
    ["the-gameshow-experience-virtual", "amazing-race-virtual", "cultural-race", "team-building"],
  ),
  "tomb-raider-king-treasure-hunt-virtual": item(
    "A virtual treasure-hunt adventure for teams that want puzzles, exploration, and a hosted mission arc.",
    "Tomb Raider King gives remote teams a digital adventure built around clues, challenge rounds, and group decisions. It suits teams that want a stronger narrative than a normal online quiz. Share pax, platform, and timing before planning.",
    virtualFaqs("Tomb Raider King"),
    ["the-nuclear-fallout-escape-room-virtual", "the-great-zodiac-hunt-virtual", "treasure-heist", "team-building"],
  ),
  "grand-christmas-delivery": item(
    "A festive virtual activity for year-end teams that want holiday energy without a physical venue.",
    "Grand Christmas Delivery turns a remote year-end gathering into a hosted festive mission. It is useful for distributed teams that still want shared laughter, light competition, and a clear event moment. Share pax, platform, and any gifting plans early.",
    virtualFaqs("Grand Christmas Delivery"),
    ["the-gameshow-experience-virtual", "amazing-race-virtual", "fit-in-your-team-virtual", "team-building"],
  ),
  "overseas-retreats": item(
    "A managed regional retreat service for companies that need travel, programme flow, and team outcomes aligned.",
    "Overseas Retreats help organisers shape the trip around destination, pax, objectives, budget, and activity flow. The work can include travel planning, venue coordination, facilitation, meals, and team-building layers. Share the rough brief first so the scope can be built responsibly.",
    [
      { question: "What is an overseas corporate retreat?", answer: "An overseas corporate retreat combines team building, employee engagement, strategic planning, and leisure activities in destinations outside Singapore to strengthen team relationships and achieve business objectives." },
      { question: "Which overseas destinations do you organise retreats in?", answer: "We organise corporate retreats in popular destinations including Bali, Batam, Bintan, Johor Bahru, Bangkok, Phuket, Vietnam, and other locations across Southeast Asia." },
      { question: "Can you handle the entire retreat planning process?", answer: "Yes. We manage end-to-end planning, including programme design, accommodation, transport, meals, team building activities, workshops, facilitators, and on-site event management." },
      { question: "How long does an overseas corporate retreat usually last?", answer: "Most overseas retreats last between two and four days, although programmes can be customised based on your objectives, destination, and budget." },
      { question: "Can the retreat programme be customised for our company?", answer: "Absolutely. Every retreat is tailored to your company goals, culture, participants, and preferred balance of learning, team bonding, and leisure activities." },
    ],
    ["local-retreats", "incentive-travel", "leadership-offsites", "team-building"],
  ),
  "local-retreats": item(
    "A Singapore retreat option for teams that want offsite energy without overseas travel.",
    "Local Retreats combine Singapore venues, facilitation, meals, and activity planning into a contained offsite experience. They work when teams need a reset but travel is impractical. Share pax, preferred dates, staycation needs, and desired outcomes before quoting.",
    [
      { question: "What is a local corporate retreat?", answer: "A local corporate retreat is a team development programme held within Singapore, combining team building activities, workshops, planning sessions, and employee engagement without overseas travel." },
      { question: "Where can local corporate retreats be held?", answer: "We organise retreats at hotels, resorts, Sentosa, chalets, conference venues, and other suitable locations across Singapore." },
      { question: "What activities can be included in a local retreat?", answer: "Programmes can include team building games, leadership workshops, personality profiling, Amazing Race, CSR activities, strategic planning sessions, wellness activities, and gala dinners." },
      { question: "Is a local retreat suitable for one-day programmes?", answer: "Yes. Local retreats can range from a half-day programme to multi-day staycations depending on your objectives and schedule." },
      { question: "Do you provide complete event management?", answer: "Yes. We can coordinate venues, accommodation, catering, facilitators, logistics, programme planning, and on-site event execution." },
    ],
    ["overseas-retreats", "leadership-offsites", "wellness-events", "team-building"],
  ),
  "incentive-travel": item(
    "A reward-trip planning service for companies that need recognition, travel, and experience design handled carefully.",
    "Incentive Travel is for high-performing teams, sales groups, or partners who need a reward experience planned around destination, eligibility, budget, and experience quality. Share the participant profile, travel window, and recognition goal so planning can start with the right constraints.",
    retreatFaqs("an incentive travel programme"),
    ["overseas-retreats", "local-retreats", "leadership-offsites", "team-building"],
  ),
  "workshops": item(
    "A facilitated learning format for teams that need practical workplace skills, discussion, and takeaways.",
    "Corporate Workshops give teams a structured session around communication, collaboration, leadership, or team development. The focus is practical participation, not passive slides. Share the audience level, learning objective, timing, and preferred venue so the workshop can be scoped.",
    trainingFaqs("a corporate workshop", "workplace skills and team behaviour"),
    ["mbti", "disc", "ocean", "mass-talks"],
  ),
  "mbti": item(
    "An MBTI profiling workshop for teams that want clearer communication and better cross-type collaboration.",
    "MBTI Profiling helps participants discuss personality preferences, working styles, communication patterns, and possible friction points. The workshop should be framed as a guided team conversation, not a label. Share group size, seniority mix, and desired outcomes before planning.",
    trainingFaqs("an MBTI workshop", "personality preferences and team communication"),
    ["disc", "ocean", "workshops", "leadership-offsites"],
  ),
  "disc": item(
    "A DiSC workshop for teams that want a shared language for behaviour, communication, and conflict.",
    "DiSC Assessment sessions help teams discuss behavioural tendencies and how those tendencies show up at work. It is useful for improving meetings, collaboration, and manager conversations. Share the team context, group size, and workshop goal before confirming the structure.",
    trainingFaqs("a DiSC workshop", "behavioural styles and communication"),
    ["mbti", "ocean", "workshops", "leadership-offsites"],
  ),
  "ocean": item(
    "An OCEAN profiling workshop for teams that want research-backed language for personality and work behaviour.",
    "OCEAN Profiling introduces the Big Five personality framework in a facilitated workplace context. The session should help teams reflect on tendencies, preferences, and collaboration patterns without overclaiming outcomes. Share the audience level, timing, and intended use case first.",
    trainingFaqs("an OCEAN workshop", "Big Five personality traits and workplace behaviour"),
    ["mbti", "disc", "workshops", "leadership-offsites"],
  ),
  "mass-talks": item(
    "A keynote or seminar format for larger groups that need a polished message, speaker flow, and audience focus.",
    "Mass Talks support townhall-style learning, motivation, or thematic sessions for larger audiences. Planning should cover the speaker brief, AV needs, audience profile, run-of-show, and desired takeaway. Share the event context and timing before confirming scope.",
    trainingFaqs("a mass talk", "large-group learning or motivation"),
    ["workshops", "leadership-offsites", "corporate-days", "team-building"],
  ),
  "corporate-days": item(
    "A managed company-day format for organisers who need activities, flow, and logistics coordinated end to end.",
    "Corporate Days bring activities, facilitation, catering coordination, and event flow into one professionally run programme. They work for staff days, department days, and family-friendly company moments. Share pax, venue, audience mix, and timing so the plan is practical.",
    corporateFaqs("a corporate day"),
    ["minute-to-win-it", "battle-of-the-olympians", "wellness-events", "team-building"],
  ),
  "wellness-events": item(
    "A workplace wellness format for teams that need a calmer reset, healthier habits, and shared participation.",
    "Wellness Events can combine movement, mindfulness, nutrition, recovery, and team reset activities depending on the audience. The goal is a credible, accessible programme rather than forced participation. Share pax, venue, health considerations, and desired tone before planning.",
    corporateFaqs("a corporate wellness event"),
    ["local-retreats", "fit-in-your-team-virtual", "corporate-days", "team-building"],
  ),
  "leadership-offsites": item(
    "A structured offsite for leadership teams that need alignment, decisions, and space away from daily work.",
    "Leadership Offsites are planned around senior team objectives, agenda flow, facilitation needs, venue fit, and confidentiality. They can include strategy sessions, team alignment, and selected bonding moments. Share the leadership context and desired decisions before scoping.",
    corporateFaqs("a leadership offsite"),
    ["local-retreats", "overseas-retreats", "workshops", "mbti"],
  ),
  "youth-camps": item(
    "A facilitated camp programme for schools or cohorts that need bonding, leadership practice, and safe structure.",
    "Youth Camps combine structured activities, facilitation, safety management, and cohort-building moments for student groups. Planning should cover age range, pax, venue, learning goals, supervision needs, and accessibility. Share the school context before confirming the programme.",
    corporateFaqs("a youth camp"),
    ["battle-of-the-olympians", "cultural-race", "workshops", "team-building"],
  ),
};
