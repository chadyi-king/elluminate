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
    "A facilitated race for teams who want clues, checkpoints, and missions planned around the route, pace, and weather needs.",
    "Participants are briefed, split into teams, and sent through a sequence of navigation clues and checkpoint challenges before regrouping for the results. Share your pax, date, preferred area, available time, and any mobility considerations so Elluminate can recommend a workable route and wet-weather approach.",
    [
      { question: "What do participants do during the Amazing Race?", answer: "Teams receive a briefing, follow route clues, complete checkpoint missions, and return for scoring and a closing segment. The final number of checkpoints and challenge mix depend on the event duration, location, and group size." },
      { question: "How physically demanding is the activity?", answer: "The walking distance, pace, stairs, and challenge intensity are considered during route planning. Tell Elluminate about mobility or accessibility needs before the route is confirmed so unsuitable elements can be identified early." },
      { question: "Where can the Amazing Race be held?", answer: "A proposed district, attraction, venue, or mixed indoor-outdoor area can be assessed for route length, access, meeting points, operating restrictions, and group movement. Venue suitability is confirmed during planning rather than assumed from the location name alone." },
      { question: "What is the wet-weather plan?", answer: "The wet-weather approach is agreed before the event. Depending on the venue and scope, this may mean a more sheltered route, adjusted checkpoints, or a different activity format if weather makes the original route impractical." },
      { question: "What should I send for an Amazing Race quote?", answer: "Send the expected pax, date or timing window, preferred location, programme duration, team objective, and any mobility or weather concerns. These details determine the route, team split, checkpoint flow, and facilitation requirements." },
    ],
    ["cultural-race", "treasure-heist", "running-man", "team-building"],
  ),
  "csi-bones": item(
    "An indoor forensic mystery for teams who want to inspect evidence, connect clues, and present their case together.",
    "After a case briefing, teams work through evidence and investigation tasks before comparing conclusions in a facilitated finale. CSI-Bones gives analytical, observant, and communicative participants different ways to contribute without relying on strenuous activity. The room setup and session flow are planned around your pax and timing.",
    [
      { question: "What do participants do in CSI-Bones?", answer: "Teams receive the case context, examine evidence, work through investigation tasks, and agree on a conclusion. The session closes with the findings, scoring, or solution reveal specified for the confirmed programme." },
      { question: "Do participants need forensic or detective experience?", answer: "No prior subject knowledge is expected. Instructions and case materials are introduced during the briefing, while the challenge comes from how the team observes, discusses, and connects the evidence." },
      { question: "What venue setup does CSI-Bones need?", answer: "The format should be scoped around an indoor room with team work areas, clear facilitator sightlines, and enough space for the planned evidence stations or materials. Elluminate will review the room layout and available furniture before confirming the setup." },
      { question: "Is CSI-Bones physically demanding?", answer: "The format focuses on observation, discussion, and problem solving. Some movement between materials or stations may be included, so accessibility needs and room constraints should still be shared during planning." },
      { question: "What details are needed for a proposal?", answer: "Send your pax, date, available duration, venue or floor plan, participant profile, and the kind of experience you want. Elluminate will use these details to scope the team split, case flow, facilitation, and equipment needs." },
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
    "Fast, easy-to-follow station games for groups that want room-wide energy without a long learning curve.",
    "Teams rotate through short challenges with simple rules, visible scoring, and a facilitated finish. The format can work as the main activity or as an energetic segment within a wider event. Pax, room size, available time, participant profile, and noise limits determine the game mix and rotation plan.",
    [
      { question: "How does a Minute To Win It session run?", answer: "After a short briefing, teams move through timed challenges or compete in facilitated rounds. Scores build across the session before a final results segment. The exact rotation depends on pax, room layout, and programme time." },
      { question: "What kind of venue works for the games?", answer: "Offices, function rooms, and event spaces can be considered if they provide enough team work areas and circulation space. Ceiling height, furniture, flooring, noise rules, and access may affect which challenges are practical." },
      { question: "Can people with different energy or mobility levels join?", answer: "The game mix can include different levels of movement, dexterity, and problem solving. Share participant ages, mobility considerations, and any activities to avoid so Elluminate can recommend a more suitable balance." },
      { question: "Can we choose the challenges?", answer: "You can share preferences, but the final selection should also fit the venue, time, group size, and participant profile. The proposed game mix will be confirmed as part of the event scope." },
      { question: "What information is needed to plan the session?", answer: "Send your pax, date, available duration, venue details, event objective, participant profile, and any space or noise restrictions. These details determine the number of teams, stations, rounds, and facilitators required." },
    ],
    ["monopoly-dash", "battle-of-the-olympians", "corporate-days", "team-building"],
  ),
  "monopoly-dash": item(
    "A live indoor strategy game for teams who enjoy decisions, mini missions, resource choices, and a shared scoreboard.",
    "Participants learn the rules in a guided briefing, form teams, and work through missions that affect their position in the game. The format mixes discussion with light movement and friendly competition before a final tally. Room layout, pax, and available time shape the number of rounds and game zones.",
    [
      { question: "What do teams do during Monopoly Dash?", answer: "Teams make resource decisions, complete mini missions, and respond to the scoring or trading rules introduced during the briefing. The confirmed programme sets out the rounds, movement, and final scoring flow." },
      { question: "Do participants need to know Monopoly?", answer: "No prior knowledge is required. The live format has its own briefing and rules, so everyone starts with the same information." },
      { question: "What venue setup is needed?", answer: "The activity is planned for an indoor space with team bases or tables and room for the required game zones. Elluminate will review the floor plan, furniture, access, and noise limits before confirming the layout." },
      { question: "How active is Monopoly Dash?", answer: "The format combines seated or standing team decisions with light movement between missions or game areas. Share mobility and accessibility requirements so the proposed layout does not exclude participants." },
      { question: "What should I include in the enquiry?", answer: "Send your pax, date, programme duration, venue or floor plan, participant profile, and event objective. These details help determine the team split, number of rounds, equipment, and facilitation plan." },
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
    [
      { question: "What is Amazing Race Virtual?", answer: "Amazing Race Virtual is an online team building experience where teams solve clues, complete interactive challenges, and compete remotely through a series of virtual checkpoints." },
      { question: "Is Amazing Race Virtual suitable for remote teams?", answer: "Yes. The programme is designed specifically for remote and hybrid teams joining from different locations." },
      { question: "What platform do participants need?", answer: "The programme can be conducted using common video conferencing platforms such as Zoom, Microsoft Teams, or Google Meet." },
      { question: "Can the challenges be customised?", answer: "Yes. We can customise the storyline, company branding, learning objectives, and challenge difficulty to suit your organisation." },
      { question: "How many participants can join?", answer: "We can facilitate virtual sessions for small teams as well as company-wide events with several hundred participants." },
    ],
    ["the-gameshow-experience-virtual", "the-great-zodiac-hunt-virtual", "fit-in-your-team-virtual", "team-building"],
  ),
  "fit-in-your-team-virtual": item(
    "A virtual movement session for teams that want energy, wellness, and light competition online.",
    "Fit In Your Team combines hosted movement, simple challenges, and online team participation. It suits remote groups that need a reset rather than another passive call. Share pax, time zones, fitness comfort, and platform preference so the intensity can be adjusted.",
    [
      { question: "What is Fit In Your Team?", answer: "Fit In Your Team is a virtual team building programme focused on communication, collaboration, and understanding team dynamics through interactive challenges." },
      { question: "Is it suitable for newly formed teams?", answer: "Yes. It is an excellent programme for onboarding, new departments, and cross-functional teams." },
      { question: "Can it support learning objectives?", answer: "Yes. Activities can be aligned with communication, trust, collaboration, and employee engagement goals." },
      { question: "How long is the programme?", answer: "Sessions are typically between one and two hours depending on your objectives." },
      { question: "Can it be customised?", answer: "Absolutely. The activities can be tailored to suit your organisation and participants." },
    ],
    ["amazing-race-virtual", "the-gameshow-experience-virtual", "wellness-events", "team-building"],
  ),
  "the-gameshow-experience-virtual": item(
    "A virtual game show for remote teams that want quick rounds, visible hosting, and easy participation.",
    "The Gameshow Experience uses hosted online rounds, questions, and team play to create a shared screen-based activity. It suits remote teams that need energy without complex setup. Share pax, time zones, and preferred platform so the pacing can be planned.",
    [
      { question: "What is Gameshow Experience?", answer: "Gameshow Experience is a live-hosted virtual team building event inspired by popular television game shows, featuring quizzes, mini games, and team challenges." },
      { question: "Is the programme suitable for hybrid teams?", answer: "Yes. The format works well for remote, hybrid, and distributed teams." },
      { question: "Can the games be customised?", answer: "Yes. We can incorporate company trivia, branding, event themes, and customised questions into the programme." },
      { question: "How long does the programme last?", answer: "Most sessions last between one and two hours, depending on the number of games selected." },
      { question: "Is any special software required?", answer: "No. Participants simply join through the designated online meeting platform using their computer or mobile device." },
    ],
    ["amazing-race-virtual", "the-patriot-act-virtual", "grand-christmas-delivery", "team-building"],
  ),
  "the-great-zodiac-hunt-virtual": item(
    "A story-led virtual hunt for teams that want puzzles, culture, and light online adventure.",
    "The Great Zodiac Hunt gives remote teams a hosted mission built around themed clues and collaborative problem solving. It works for groups that want a virtual activity with more story than standard trivia. Share pax, platform, and timing before planning.",
    [
      { question: "What is Great Zodiac Hunt?", answer: "Great Zodiac Hunt is a virtual themed adventure where teams complete puzzles and challenges inspired by the Chinese Zodiac." },
      { question: "Is the programme suitable for festive events?", answer: "Yes. It is especially popular during Chinese New Year celebrations and company festive events." },
      { question: "Can the storyline be customised?", answer: "Yes. We can incorporate company branding, festive themes, and customised challenges." },
      { question: "Is the programme suitable for international teams?", answer: "Yes. The game is designed to be accessible and enjoyable for participants from different countries." },
      { question: "What skills are developed?", answer: "Participants strengthen teamwork, communication, creativity, and problem-solving." },
    ],
    ["amazing-race-virtual", "tomb-raider-king-treasure-hunt-virtual", "the-nuclear-fallout-escape-room-virtual", "team-building"],
  ),
  "the-nuclear-fallout-escape-room-virtual": item(
    "A virtual escape-room format for teams that want time pressure, puzzles, and shared problem solving.",
    "Nuclear Fallout Escape Room turns online collaboration into a hosted puzzle mission with a countdown structure. It suits teams that enjoy deduction and clear stakes. Share pax, platform, time zone, and puzzle comfort so the game can be set up appropriately.",
    [
      { question: "What is Nuclear Fallout Escape?", answer: "Nuclear Fallout Escape is a virtual escape room where teams solve puzzles, uncover clues, and work together to survive a post-apocalyptic mission." },
      { question: "Is escape room experience required?", answer: "No. Our facilitators guide participants through the experience, making it suitable for first-time players." },
      { question: "What skills does the programme develop?", answer: "The activity strengthens communication, collaboration, critical thinking, and problem-solving." },
      { question: "Can the storyline be customised?", answer: "Yes. We can adapt elements of the experience to align with your event objectives." },
      { question: "Is it suitable for corporate team building?", answer: "Absolutely. The programme is designed to promote teamwork while providing an engaging virtual experience." },
    ],
    ["tomb-raider-king-treasure-hunt-virtual", "the-great-zodiac-hunt-virtual", "amazing-race-virtual", "team-building"],
  ),
  "the-patriot-act-virtual": item(
    "A Singapore-themed virtual activity for teams that want local references, trivia, and hosted team play.",
    "The Patriot Act uses Singapore-inspired challenges and online team rounds to create a light, shared virtual event. It suits National Day moments, remote teams, and mixed local groups. Share pax, platform, and audience profile so references land well.",
    [
      { question: "What is The Patriot Act?", answer: "The Patriot Act is a virtual spy-themed mission where teams solve intelligence challenges, decode clues, and complete covert operations together." },
      { question: "Is the programme suitable for remote teams?", answer: "Yes. It is designed specifically for virtual collaboration across different locations." },
      { question: "Can missions be customised?", answer: "Yes. We can tailor the storyline, branding, and challenge difficulty to suit your event." },
      { question: "What skills does the programme develop?", answer: "The experience encourages communication, teamwork, observation, and strategic thinking." },
      { question: "How long does the programme last?", answer: "Most sessions run between one and two hours depending on the event format." },
    ],
    ["the-gameshow-experience-virtual", "amazing-race-virtual", "cultural-race", "team-building"],
  ),
  "tomb-raider-king-treasure-hunt-virtual": item(
    "A virtual treasure-hunt adventure for teams that want puzzles, exploration, and a hosted mission arc.",
    "Tomb Raider King gives remote teams a digital adventure built around clues, challenge rounds, and group decisions. It suits teams that want a stronger narrative than a normal online quiz. Share pax, platform, and timing before planning.",
    [
      { question: "What is Tomb Raider King?", answer: "Tomb Raider King is a virtual adventure where teams solve ancient puzzles, unlock hidden treasures, and complete missions together." },
      { question: "Is the game suitable for beginners?", answer: "Yes. The experience is designed for participants of all backgrounds without requiring gaming experience." },
      { question: "Can the adventure be customised?", answer: "Yes. Company branding, event themes, and customised missions can be incorporated into the programme." },
      { question: "How many participants can join?", answer: "The programme scales from small teams to large corporate events." },
      { question: "What skills does the programme develop?", answer: "Participants improve teamwork, communication, problem-solving, and strategic thinking." },
    ],
    ["the-nuclear-fallout-escape-room-virtual", "the-great-zodiac-hunt-virtual", "treasure-heist", "team-building"],
  ),
  "grand-christmas-delivery": item(
    "A festive virtual activity for year-end teams that want holiday energy without a physical venue.",
    "Grand Christmas Delivery turns a remote year-end gathering into a hosted festive mission. It is useful for distributed teams that still want shared laughter, light competition, and a clear event moment. Share pax, platform, and any gifting plans early.",
    [
      { question: "What is Grand Christmas Delivery?", answer: "Grand Christmas Delivery is a festive virtual team building experience where teams complete holiday-themed missions to save Christmas." },
      { question: "Is the programme suitable for year-end celebrations?", answer: "Yes. It is designed specifically for Christmas parties, employee appreciation events, and year-end gatherings." },
      { question: "Can the programme include company branding?", answer: "Yes. We can incorporate company messages, branding, and customised festive challenges." },
      { question: "Is it suitable for remote employees?", answer: "Absolutely. The programme is designed for virtual participation from anywhere." },
      { question: "How many participants can join?", answer: "We can accommodate both small teams and large company-wide festive events." },
    ],
    ["the-gameshow-experience-virtual", "amazing-race-virtual", "fit-in-your-team-virtual", "team-building"],
  ),
  "overseas-retreats": item(
    "A connected overseas itinerary for companies that need destination, rooms, team sessions, meals, and movement planned together.",
    "Elluminate starts with why the team is travelling, then shapes the destination, pace, accommodation, programme, and support scope around the group. A proposed itinerary can balance structured sessions, team activities, meals, and unprogrammed time. The proposal will state what is included, what remains with your team, and which travel or supplier assumptions affect the quote.",
    [
      { question: "What can overseas retreat planning include?", answer: "Depending on the agreed scope, planning may cover destination and venue options, accommodation, ground transport, meals, team activities, workshops, facilitation, supplier coordination, and on-site programme support. Each proposal should list the included responsibilities clearly." },
      { question: "How do we choose the destination?", answer: "The shortlist should reflect travel time, transport access, room availability, budget, programme goals, participant needs, and the pace you want for the trip. A destination is recommended only after those priorities are understood." },
      { question: "What might the itinerary look like?", answer: "An itinerary can combine arrival and transfer time, a company session, a facilitated team activity, shared meals, optional leisure time, and departure logistics. The number and order of components depend on the trip length and objective." },
      { question: "Are flights, insurance, and travel documents included?", answer: "Travel bookings, insurance, passports, visas, and traveller documentation should not be assumed to be included. The proposal will state which bookings Elluminate coordinates and which remain the responsibility of the company or individual travellers." },
      { question: "What information is needed for a retreat proposal?", answer: "Share your pax, departure point, date window, destination ideas, budget parameters, rooming preference, dietary or accessibility needs, and the purpose of the retreat. This allows the itinerary and logistics scope to be costed on clear assumptions." },
    ],
    ["local-retreats", "incentive-travel", "leadership-offsites", "team-building"],
  ),
  "local-retreats": item(
    "A Singapore offsite for teams that need venue, programme, meals, and shared time brought into one practical plan.",
    "A local retreat can be shaped as a focused day away or an overnight programme without the travel demands of an overseas trip. Elluminate plans the flow around your purpose, pax, venue style, working sessions, team activities, meals, and downtime. The proposal separates the programme scope from venue and supplier costs so organisers can review the full plan clearly.",
    [
      { question: "Can a local retreat be a day programme or an overnight stay?", answer: "Either format can be scoped. The right choice depends on the time available, budget, venue availability, programme depth, and whether the team needs accommodation or evening activities." },
      { question: "What kinds of Singapore venues can be considered?", answer: "Hotels, resorts, meeting venues, activity spaces, and other offsite settings can be shortlisted against pax, room setup, meal needs, accessibility, location, and programme flow. Availability and commercial terms are confirmed during planning." },
      { question: "What can be included in the itinerary?", answer: "A local retreat may combine company discussions, a workshop, a facilitated team activity, shared meals, and downtime. The final mix should support the reason for the offsite rather than fill every hour with programming." },
      { question: "What does Elluminate coordinate?", answer: "The agreed scope may include programme design, venue and supplier coordination, facilitation, meals, accommodation, transport, and event-day support. The proposal will distinguish Elluminate's responsibilities from items booked directly by your company." },
      { question: "What should I send for a local retreat quote?", answer: "Send your pax, date window, preferred duration, day or overnight preference, venue ideas, rooming and meal needs, budget parameters, and retreat objective. These details help establish a realistic itinerary and supplier scope." },
    ],
    ["overseas-retreats", "leadership-offsites", "wellness-events", "team-building"],
  ),
  "incentive-travel": item(
    "A reward-trip planning service for companies that need recognition, travel, and experience design handled carefully.",
    "Incentive Travel is for high-performing teams, sales groups, or partners who need a reward experience planned around destination, eligibility, budget, and experience quality. Share the participant profile, travel window, and recognition goal so planning can start with the right constraints.",
    [
      { question: "What is incentive travel?", answer: "Incentive travel is a reward programme designed to recognise and motivate employees, sales teams, or business partners through memorable travel experiences and exclusive activities." },
      { question: "Can incentive travel programmes include team building activities?", answer: "Yes. We can incorporate team building games, Amazing Race challenges, cultural experiences, workshops, gala dinners, and CSR activities into your incentive trip." },
      { question: "Which destinations do you offer for incentive travel?", answer: "We organise incentive travel programmes across Singapore, Bali, Thailand, Indonesia, Vietnam, Malaysia, and other destinations throughout Asia." },
      { question: "Can the itinerary be customised for our company?", answer: "Absolutely. Every incentive travel programme is tailored to your company culture, objectives, budget, and preferred travel experience." },
      { question: "Do you manage all travel logistics?", answer: "Yes. We can coordinate accommodation, transport, activities, venues, meals, event management, and complete programme planning for a seamless experience." },
    ],
    ["overseas-retreats", "local-retreats", "leadership-offsites", "team-building"],
  ),
  "workshops": item(
    "A facilitated workplace session for teams with one clear learning need, planned around the audience and time available.",
    "Elluminate scopes workshops from the audience and workplace context rather than a generic topic title. A session may combine concise input, guided discussion, case work, practice, reflection, and an action-planning close. The proposal confirms the facilitator, delivery mode, duration, materials, and whether any assessment or participant output is included.",
    [
      { question: "What workshop topics can Elluminate help with?", answer: "Themes may include communication, collaboration, leadership, team effectiveness, and personality-based team conversations. The final topic and facilitator should be matched to the audience, workplace situation, and intended application." },
      { question: "How is the workshop adapted to our team?", answer: "Share the participant roles, experience level, current challenge, and what should be different after the session. Examples, exercises, discussion prompts, and depth can then be scoped around that context without overstating what one session can achieve." },
      { question: "What happens during a workshop?", answer: "The format may combine short teaching segments, facilitated discussion, cases or scenarios, individual reflection, group practice, and a practical close. Your proposal will set out the session flow rather than leaving the format implied." },
      { question: "How long should we set aside?", answer: "Duration depends on the group size, topic depth, amount of practice, and whether an assessment or follow-up output is included. Elluminate will recommend a workable format after reviewing the brief." },
      { question: "Will participants receive an assessment or report?", answer: "Only where the selected workshop scope includes one. The proposal will name the assessment or material, explain any pre-work, and state what each participant or organiser receives." },
      { question: "Can the workshop be in person, virtual, or hybrid?", answer: "The delivery mode depends on the topic, facilitator, exercises, group size, and platform setup. Elluminate will confirm which formats are practical for the proposed workshop." },
    ],
    ["mbti", "disc", "ocean", "mass-talks"],
  ),
  "mbti": item(
    "A facilitated personality-preference workshop for teams discussing how they communicate, decide, and work together.",
    "The session uses personality preferences as a starting point for reflection and team discussion, not as a label or measure of ability. Elluminate scopes the workshop around the audience, workplace context, delivery mode, and time available. Any assessment instrument, individual report, pre-work, or facilitator requirement is named explicitly in the proposal.",
    [
      { question: "What does an MBTI workshop cover?", answer: "A scoped session can introduce personality preferences, give participants time to reflect on their own patterns, and help the group discuss differences in communication, information gathering, decision making, and approach to structure. The exact learning flow is confirmed before booking." },
      { question: "Is an individual assessment and report included?", answer: "It depends on the selected scope. Your proposal will state the assessment instrument, report type, participant pre-work, access method, and what each person receives, so an informal exercise is not confused with a formal assessment." },
      { question: "Who is the workshop suitable for?", answer: "It can be considered for intact teams, cross-functional groups, managers, or project teams that need a structured conversation about working preferences. Share the team context first so Elluminate can assess whether this format fits the objective." },
      { question: "What happens during the session?", answer: "Depending on the scope, participants may complete pre-work, join a facilitated explanation and debrief, discuss team patterns, work through scenarios, and identify practical ways to collaborate. The balance of individual and group work depends on the audience and duration." },
      { question: "How long does an MBTI workshop take?", answer: "The duration depends on whether assessment and debriefing are included, the group size, the depth of team discussion, and any application exercises. Elluminate will recommend a format after the brief is reviewed." },
      { question: "Can it be combined with a team activity?", answer: "A separate team activity can be discussed when it supports the event objective and schedule. The proposal will show how the workshop and activity connect rather than treating them as unrelated agenda items." },
    ],
    ["disc", "ocean", "workshops", "leadership-offsites"],
  ),
  "disc": item(
    "A DiSC workshop for teams that want a shared language for behaviour, communication, and conflict.",
    "DiSC Assessment sessions help teams discuss behavioural tendencies and how those tendencies show up at work. It is useful for improving meetings, collaboration, and manager conversations. Share the team context, group size, and workshop goal before confirming the structure.",
    [
      { question: "What is a DISC personality assessment?", answer: "DISC is a behavioural assessment that helps individuals understand their communication style, work preferences, and interactions with others." },
      { question: "How does DISC benefit corporate teams?", answer: "DISC improves communication, teamwork, leadership effectiveness, conflict resolution, and collaboration within the workplace." },
      { question: "Do participants receive their own DISC report?", answer: "Yes. Every participant receives an individual DISC profile with facilitator-led interpretation and practical workplace applications." },
      { question: "Can DISC workshops be customised?", answer: "Yes. We tailor DISC workshops to align with your organisation's goals, industry, and team development objectives." },
      { question: "Is DISC suitable for leadership development?", answer: "Absolutely. DISC is commonly used to strengthen leadership, coaching, people management, and team performance." },
    ],
    ["mbti", "ocean", "workshops", "leadership-offsites"],
  ),
  "ocean": item(
    "An OCEAN profiling workshop for teams that want research-backed language for personality and work behaviour.",
    "OCEAN Profiling introduces the Big Five personality framework in a facilitated workplace context. The session should help teams reflect on tendencies, preferences, and collaboration patterns without overclaiming outcomes. Share the audience level, timing, and intended use case first.",
    [
      { question: "What is OCEAN personality profiling?", answer: "OCEAN Profiling measures the five major personality traits—Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism—to provide deeper insights into workplace behaviour." },
      { question: "Who is OCEAN profiling suitable for?", answer: "OCEAN is suitable for employees, managers, leadership teams, and organisations looking to improve self-awareness and team effectiveness." },
      { question: "How is OCEAN different from MBTI or DISC?", answer: "Unlike personality type models, OCEAN measures personality traits on a spectrum, providing more detailed behavioural insights backed by psychological research." },
      { question: "Can OCEAN profiling be used for team development?", answer: "Yes. Organisations use OCEAN profiling to improve collaboration, communication, leadership development, and team dynamics." },
      { question: "Do participants receive personalised reports?", answer: "Yes. Each participant receives an individual assessment report together with a facilitator-led debrief." },
    ],
    ["mbti", "disc", "workshops", "leadership-offsites"],
  ),
  "mass-talks": item(
    "A keynote or seminar format for larger groups that need a polished message, speaker flow, and audience focus.",
    "Mass Talks support townhall-style learning, motivation, or thematic sessions for larger audiences. Planning should cover the speaker brief, AV needs, audience profile, run-of-show, and desired takeaway. Share the event context and timing before confirming scope.",
    [
      { question: "What corporate talks do you offer?", answer: "We deliver engaging keynote talks on leadership, teamwork, employee engagement, workplace culture, communication, motivation, and personal development." },
      { question: "How many participants can attend a corporate talk?", answer: "Our talks can accommodate audiences ranging from small teams to large conferences with over a thousand participants." },
      { question: "Can the presentation be customised?", answer: "Yes. Every talk is tailored to your organisation, event theme, audience profile, and desired learning outcomes." },
      { question: "How long are your keynote talks?", answer: "Talks typically range from 30 minutes to two hours depending on your event schedule." },
      { question: "Can talks include audience interaction?", answer: "Absolutely. We can incorporate live polls, activities, Q&A sessions, and audience engagement throughout the presentation." },
    ],
    ["workshops", "leadership-offsites", "corporate-days", "team-building"],
  ),
  "corporate-days": item(
    "A managed company-day format for organisers who need activities, flow, and logistics coordinated end to end.",
    "Corporate Days bring activities, facilitation, catering coordination, and event flow into one professionally run programme. They work for staff days, department days, and family-friendly company moments. Share pax, venue, audience mix, and timing so the plan is practical.",
    [
      { question: "What is a Corporate Day event?", answer: "Corporate Days are company-wide events designed to engage employees through games, activities, entertainment, appreciation programmes, and team bonding experiences." },
      { question: "Can Corporate Day events be customised?", answer: "Yes. Every event is tailored to your company objectives, theme, venue, and audience." },
      { question: "Do you provide event management services?", answer: "Yes. We manage programme planning, facilitators, logistics, event setup, and on-site coordination." },
      { question: "How many participants can you accommodate?", answer: "We regularly organise Corporate Day events for groups ranging from 30 participants to over 1,000 attendees." },
      { question: "Can team building activities be included?", answer: "Absolutely. Corporate Day events can include team building games, workshops, carnival activities, and employee engagement programmes." },
    ],
    ["minute-to-win-it", "battle-of-the-olympians", "wellness-events", "team-building"],
  ),
  "wellness-events": item(
    "A workplace wellness format for teams that need a calmer reset, healthier habits, and shared participation.",
    "Wellness Events can combine movement, mindfulness, nutrition, recovery, and team reset activities depending on the audience. The goal is a credible, accessible programme rather than forced participation. Share pax, venue, health considerations, and desired tone before planning.",
    [
      { question: "What wellness programmes do you offer?", answer: "We organise wellness events featuring health talks, mindfulness sessions, wellness workshops, fitness activities, mental well-being programmes, and employee engagement experiences." },
      { question: "Can wellness events be customised?", answer: "Yes. Every programme is tailored to your organisation's wellness objectives, participant profile, and event format." },
      { question: "Are wellness events suitable for all employees?", answer: "Yes. Activities are designed to be inclusive and accessible for participants of different ages and fitness levels." },
      { question: "Can wellness events be combined with team building?", answer: "Absolutely. Many organisations combine wellness initiatives with team bonding activities to promote both well-being and collaboration." },
      { question: "Do you organise workplace wellness roadshows?", answer: "Yes. We provide wellness booths, interactive stations, talks, workshops, and full wellness event management." },
    ],
    ["local-retreats", "fit-in-your-team-virtual", "corporate-days", "team-building"],
  ),
  "leadership-offsites": item(
    "A structured offsite for leadership teams that need alignment, decisions, and space away from daily work.",
    "Leadership Offsites are planned around senior team objectives, agenda flow, facilitation needs, venue fit, and confidentiality. They can include strategy sessions, team alignment, and selected bonding moments. Share the leadership context and desired decisions before scoping.",
    [
      { question: "What is a leadership offsite?", answer: "A leadership offsite is a dedicated programme where management teams focus on strategic planning, leadership development, team alignment, and organisational growth outside the office environment." },
      { question: "Who are leadership offsites suitable for?", answer: "They are ideal for senior leaders, management teams, department heads, and executive committees." },
      { question: "What activities can be included?", answer: "Programmes can include strategy workshops, personality profiling, leadership development, team building activities, facilitated discussions, and planning sessions." },
      { question: "Can leadership offsites be held overseas?", answer: "Yes. We organise both local and overseas leadership offsites depending on your objectives and budget." },
      { question: "Can the programme be customised?", answer: "Absolutely. Every leadership offsite is designed around your organisation's goals, challenges, and leadership priorities." },
    ],
    ["local-retreats", "overseas-retreats", "workshops", "mbti"],
  ),
  "youth-camps": item(
    "A facilitated camp programme for schools or cohorts that need bonding, leadership practice, and safe structure.",
    "Youth Camps combine structured activities, facilitation, safety management, and cohort-building moments for student groups. Planning should cover age range, pax, venue, learning goals, supervision needs, and accessibility. Share the school context before confirming the programme.",
    [
      { question: "What youth camps do you organise?", answer: "We organise leadership camps, orientation camps, adventure camps, values-based programmes, and personal development camps for schools and youth organisations." },
      { question: "Who are your youth camps suitable for?", answer: "Our programmes are suitable for primary schools, secondary schools, tertiary institutions, youth groups, and student leaders." },
      { question: "Can camp programmes be customised?", answer: "Yes. Every camp is designed around your school's objectives, participant age group, venue, and desired learning outcomes." },
      { question: "Do you provide facilitators and logistics?", answer: "Yes. We provide facilitators, programme planning, logistics, equipment, and complete event management." },
      { question: "Can camps include overnight activities?", answer: "Absolutely. We organise both day camps and multi-day residential camps." },
    ],
    ["battle-of-the-olympians", "cultural-race", "workshops", "team-building"],
  ),
};
