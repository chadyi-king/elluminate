# Elluminate Hardening Change Report

## Scope
- Quarantined dead Large Scale service URLs rather than building pages without verified content.
- Hardened service SEO plumbing, visible FAQs, related links, and content-quality overrides for every live service slug.
- Removed or hid proof elements that looked unverified or placeholder-like instead of inventing replacements.

## Quarantined Routes
- /services/dinner-and-dance -> /portfolio (301 redirect configured; TODO(seo): confirm final hub target)
- /services/awards-ceremonies -> /portfolio (301 redirect configured; TODO(seo): confirm final hub target)
- /services/corporate-anniversaries -> /portfolio (301 redirect configured; TODO(seo): confirm final hub target)
- /services/product-launch -> /portfolio (301 redirect configured; TODO(seo): confirm final hub target)
- /services/brand-activations -> /portfolio (301 redirect configured; TODO(seo): confirm final hub target)
- /services/client-appreciation -> /portfolio (301 redirect configured; TODO(seo): confirm final hub target)
- /services/town-halls -> /portfolio (301 redirect configured; TODO(seo): confirm final hub target)
- /services/immersive-experiences -> /portfolio (301 redirect configured; TODO(seo): confirm final hub target)
- /services/event-concept -> /portfolio (301 redirect configured; TODO(seo): confirm final hub target)
- /services/stage-production -> /portfolio (301 redirect configured; TODO(seo): confirm final hub target)
- /services/custom-themes -> /portfolio (301 redirect configured; TODO(seo): confirm final hub target)
- /services/emcee-media -> /portfolio (301 redirect configured; TODO(seo): confirm final hub target)
- /services/summits -> /portfolio (301 redirect configured; TODO(seo): confirm final hub target)
- /services/government-events -> /portfolio (301 redirect configured; TODO(seo): confirm final hub target)
- /services/private-events -> /portfolio (301 redirect configured; TODO(seo): confirm final hub target)
- /services/family-fun-days -> /portfolio (301 redirect configured; TODO(seo): confirm final hub target)
- /services/corporate-carnivals -> /portfolio (301 redirect configured; TODO(seo): confirm final hub target)
- /services/vip-gala -> /portfolio (301 redirect configured; TODO(seo): confirm final hub target)
- /services/grand-opening -> /portfolio (301 redirect configured; TODO(seo): confirm final hub target)

## Sitemap
- Removed the 19 quarantined Large Scale URLs from public/sitemap.xml.
- Removed those same slugs from scripts/generate-sitemap.mjs and scripts/prerender-seo.mjs so they do not reappear.

## Live Service Content Upgrade
### team-building
- Title: Corporate Team Building Singapore | Elluminate
- Description: Plan corporate physical team building in Singapore with facilitated indoor and outdoor activities, trusted event support, and a fast Plan My Event enquiry form.
- Canonical: https://elluminate.sg/services/team-building
- Hero subline: A planning-first corporate team-building hub for organisers who need the right format, flow, and quote.
- What's Inside: Start here when you know the team needs a bonding activity but not the exact format. Elluminate narrows the brief by pax, venue, timing, energy level, and objective, then recommends indoor, outdoor, virtual, retreat, or training options that fit the group.
- FAQs: What does corporate team building usually include? | Can corporate team building work for mixed departments or seniority levels? | How do we choose the right format for corporate team building? | What should we prepare before enquiring?
- Related links: /services/amazing-race, /services/minute-to-win-it, /services/csi-bones, /services/cultural-race
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### amazing-race
- Title: Amazing Race Team Building Singapore | Elluminate
- Description: Singapore's most popular team building activity. City-wide Amazing Race with custom challenges, live leaderboards, and full facilitation. Book now.
- Canonical: https://elluminate.sg/services/amazing-race
- Hero subline: An outdoor race format for teams that want movement, clues, checkpoint missions, and shared momentum.
- What's Inside: Amazing Race turns a venue or district into a facilitated team challenge. Participants solve clues, complete checkpoint missions, and move in groups toward a final result. Share pax, date, location preference, and fitness notes so the route and challenge mix can be shaped before quoting.
- FAQs: Is Amazing Race suitable for mixed fitness levels? | How many people can join Amazing Race? | Can Amazing Race be customised for our company? | What should organisers prepare for Amazing Race?
- Related links: /services/cultural-race, /services/treasure-heist, /services/running-man, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### csi-bones
- Title: CSI Team Building Singapore | Elluminate
- Description: Immersive CSI investigation team building in Singapore. Teams solve forensic mysteries using clues and deduction. Unique, engaging, and memorable.
- Canonical: https://elluminate.sg/services/csi-bones
- Hero subline: An indoor mystery format for teams that prefer deduction, evidence review, and quieter collaboration.
- What's Inside: CSI-Bones is a forensic-style team activity built around clues, evidence, and group reasoning. It suits teams that want problem solving without heavy physical exertion. Share pax, venue, timing, and desired intensity so the investigation can be scoped for your group.
- FAQs: Is CSI-Bones suitable for mixed fitness levels? | How many people can join CSI-Bones? | Can CSI-Bones be customised for our company? | What should organisers prepare for CSI-Bones?
- Related links: /services/treasure-heist, /services/amongst-us, /services/monopoly-dash, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### cultural-race
- Title: Cultural Race Singapore | Heritage Race | Elluminate
- Description: Explore Singapore's heritage through an interactive Cultural Race. Challenges across Chinatown, Little India, and Kampong Glam. Book for your team.
- Canonical: https://elluminate.sg/services/cultural-race
- Hero subline: A Singapore route-based activity for teams that want local discovery, movement, and shared stories.
- What's Inside: Cultural Race uses Singapore locations, clues, and team missions to create a facilitated outdoor discovery experience. It works well for local, regional, and mixed teams who want the place itself to matter. Share route comfort, pax, timing, and weather constraints during planning.
- FAQs: Is Cultural Race suitable for mixed fitness levels? | How many people can join Cultural Race? | Can Cultural Race be customised for our company? | What should organisers prepare for Cultural Race?
- Related links: /services/amazing-race, /services/running-man, /services/local-retreats, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### amongst-us
- Title: Amongst Us Team Building Singapore | Elluminate
- Description: A live social-deduction team building experience in Singapore. Find the impostors before the room turns on itself. Unique, engaging, and unforgettable.
- Canonical: https://elluminate.sg/services/amongst-us
- Hero subline: A social-deduction format for teams that want conversation, suspicion, laughter, and light strategy.
- What's Inside: Amongst Us turns trust, observation, and group discussion into a facilitated team game. Participants work through missions while trying to read the room and identify hidden roles. Share pax, venue, and comfort level so the session can stay fun without becoming confusing.
- FAQs: Is Amongst Us suitable for mixed fitness levels? | How many people can join Amongst Us? | Can Amongst Us be customised for our company? | What should organisers prepare for Amongst Us?
- Related links: /services/csi-bones, /services/alice-in-motherland, /services/minute-to-win-it, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### alice-in-motherland
- Title: Alice in Motherland Team Building Singapore | Elluminate
- Description: A whimsical story-led team building journey in Singapore. Themed stations, puzzles, and immersive team moments. Fully facilitated by Elluminate.
- Canonical: https://elluminate.sg/services/alice-in-motherland
- Hero subline: A story-led puzzle activity for teams that want themed missions, imagination, and collaborative problem solving.
- What's Inside: Alice in Motherland uses a themed storyline, puzzle stations, and facilitated team tasks to create an immersive indoor or hybrid activity. It suits groups that want character and narrative without needing intense physical movement. Share pax, venue, and theme preferences before quoting.
- FAQs: Is Alice in Motherland suitable for mixed fitness levels? | How many people can join Alice in Motherland? | Can Alice in Motherland be customised for our company? | What should organisers prepare for Alice in Motherland?
- Related links: /services/amongst-us, /services/treasure-heist, /services/the-great-zodiac-hunt-virtual, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### battle-of-the-olympians
- Title: Battle of the Olympians Singapore | Elluminate
- Description: Epic Olympian-themed team competition in Singapore. Athletic rounds, mental games, and all-out team pride. Book for your corporate group with Elluminate.
- Canonical: https://elluminate.sg/services/battle-of-the-olympians
- Hero subline: A tournament-style activity for teams that want friendly competition, team pride, and visible energy.
- What's Inside: Battle of the Olympians brings teams through a sequence of facilitated challenge rounds with a clear scoring arc. It can suit school, cohort, and company groups that want active participation and a strong finish. Share pax, venue, weather needs, and intensity level early.
- FAQs: Is Battle of the Olympians suitable for mixed fitness levels? | How many people can join Battle of the Olympians? | Can Battle of the Olympians be customised for our company? | What should organisers prepare for Battle of the Olympians?
- Related links: /services/minute-to-win-it, /services/running-man, /services/corporate-days, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### builder-cross
- Title: Builder Cross Team Building Singapore | Elluminate
- Description: Builder Cross, a construction and collaboration team challenge for corporate groups in Singapore. Builds communication and creative problem-solving.
- Canonical: https://elluminate.sg/services/builder-cross
- Hero subline: A construction-style challenge for teams that want hands-on collaboration and practical problem solving.
- What's Inside: Builder Cross asks participants to plan, build, test, and improve together under a facilitated challenge structure. It works for teams that want creativity and communication in a controlled setting. Share pax, venue, timing, and space constraints so materials and flow can be planned.
- FAQs: Is Builder Cross suitable for mixed fitness levels? | How many people can join Builder Cross? | Can Builder Cross be customised for our company? | What should organisers prepare for Builder Cross?
- Related links: /services/minute-to-win-it, /services/monopoly-dash, /services/workshops, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### minute-to-win-it
- Title: Minute to Win It Singapore | Team Building Game | Elluminate
- Description: Fast-paced Minute to Win It team challenges for corporate groups. One-minute games that bring out competitive spirit and laughter. Book in Singapore.
- Canonical: https://elluminate.sg/services/minute-to-win-it
- Hero subline: A quick-rotation game format for teams that want easy participation, fast laughs, and room-wide energy.
- What's Inside: Minute To Win It uses short station challenges that are easy to understand and quick to rotate. It suits ballrooms, offices, and indoor venues where organisers need energy without complex briefing. Share pax, timing, and venue size so the station flow can be planned.
- FAQs: Is Minute To Win It suitable for mixed fitness levels? | How many people can join Minute To Win It? | Can Minute To Win It be customised for our company? | What should organisers prepare for Minute To Win It?
- Related links: /services/monopoly-dash, /services/battle-of-the-olympians, /services/corporate-days, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### monopoly-dash
- Title: Monopoly Dash Team Building Singapore | Elluminate
- Description: A live Monopoly-inspired team building experience in Singapore. Strategic, competitive, and perfect for corporate groups of all sizes. Book now.
- Canonical: https://elluminate.sg/services/monopoly-dash
- Hero subline: An indoor strategy game for teams that want points, movement, negotiation, and friendly competition.
- What's Inside: Monopoly Dash translates board-game energy into a live facilitated team activity. Participants move through missions, make decisions, and compete for points without needing a long setup. Share pax, room layout, and timing so the game economy and rotations fit the event.
- FAQs: Is Monopoly Dash suitable for mixed fitness levels? | How many people can join Monopoly Dash? | Can Monopoly Dash be customised for our company? | What should organisers prepare for Monopoly Dash?
- Related links: /services/minute-to-win-it, /services/builder-cross, /services/csi-bones, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### running-man
- Title: Running Man Team Building Singapore | Elluminate
- Description: Korean Running Man-inspired team building in Singapore. Name tag ripping, missions, and hilarious challenges. Facilitated by Elluminate's expert team.
- Canonical: https://elluminate.sg/services/running-man
- Hero subline: A high-energy mission format for teams that want active challenges, chases, and variety-show energy.
- What's Inside: Running Man Adventure uses team missions, quick competitions, and facilitated challenge rounds to create a lively event. It suits groups that are comfortable with movement and visible participation. Share pax, venue, safety constraints, and weather needs before planning the final format.
- FAQs: Is Running Man Adventure suitable for mixed fitness levels? | How many people can join Running Man Adventure? | Can Running Man Adventure be customised for our company? | What should organisers prepare for Running Man Adventure?
- Related links: /services/amazing-race, /services/battle-of-the-olympians, /services/sotong-game, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### sotong-game
- Title: Sotong Game Singapore | Team Building Activity | Elluminate
- Description: The Sotong Game, Singapore's most entertaining team building format. High energy, hilarious, and great for all group sizes. Enquire with Elluminate.
- Canonical: https://elluminate.sg/services/sotong-game
- Hero subline: A survival-style challenge format for teams that want tension, humour, and simple rules.
- What's Inside: Sotong Game uses elimination-inspired missions in a facilitated, team-safe format. The experience is built around clear rules, short rounds, and shared suspense rather than real risk. Share pax, venue, age range, and comfort level so the tone stays appropriate.
- FAQs: Is Sotong Game suitable for mixed fitness levels? | How many people can join Sotong Game? | Can Sotong Game be customised for our company? | What should organisers prepare for Sotong Game?
- Related links: /services/running-man, /services/minute-to-win-it, /services/battle-of-the-olympians, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### treasure-heist
- Title: Treasure Heist Team Building Singapore | Elluminate
- Description: A thrilling heist-themed team building activity in Singapore. Teams compete in strategy, speed, and collaboration. Fully facilitated by Elluminate.
- Canonical: https://elluminate.sg/services/treasure-heist
- Hero subline: A heist-themed puzzle format for teams that want clues, pressure, and strategic collaboration.
- What's Inside: Treasure Heist gives teams a facilitated mission built around clues, objectives, and timed decisions. It is useful when the group wants a stronger story than a standard station game. Share pax, venue, timing, and desired intensity so the puzzle flow can be calibrated.
- FAQs: Is Treasure Heist suitable for mixed fitness levels? | How many people can join Treasure Heist? | Can Treasure Heist be customised for our company? | What should organisers prepare for Treasure Heist?
- Related links: /services/csi-bones, /services/alice-in-motherland, /services/amazing-race, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### archery-tag
- Title: Archery Tag Singapore | Team Building Activity | Elluminate
- Description: Action-packed Archery Tag battles for corporate teams. Safe, thrilling, and fully facilitated. Perfect for groups of 20–300 pax in Singapore.
- Canonical: https://elluminate.sg/services/archery-tag
- Hero subline: A structured action game for teams that want safe competition, movement, and tactical play.
- What's Inside: Archery Tag uses foam-tipped arrows, team zones, and facilitated rules to create an active battle format. It suits groups that want adrenaline with clear safety management. Share pax, venue options, weather constraints, and participant profile before confirming the setup.
- FAQs: Is Archery Tag suitable for mixed fitness levels? | How many people can join Archery Tag? | Can Archery Tag be customised for our company? | What should organisers prepare for Archery Tag?
- Related links: /services/gel-blitz, /services/nerfwar, /services/tag-tical-laser-teambuilding, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### gel-blitz
- Title: GelBlitz Singapore | Gel Blaster Team Building | Elluminate
- Description: GelBlitz gel ball blaster battles for corporate teams in Singapore. High-energy, safe, and unforgettable. Perfect for groups who want real adrenaline.
- Canonical: https://elluminate.sg/services/gel-blitz
- Hero subline: A gel-blaster activity for teams that want tactical missions, movement, and structured action.
- What's Inside: GelBlitz is an action format built around facilitated missions, clear zones, and safety briefings. It suits groups that want more intensity than casual games while still needing event control. Share pax, venue, weather needs, and participant comfort before planning.
- FAQs: Is GelBlitz suitable for mixed fitness levels? | How many people can join GelBlitz? | Can GelBlitz be customised for our company? | What should organisers prepare for GelBlitz?
- Related links: /services/archery-tag, /services/nerfwar, /services/tag-tical-laser-teambuilding, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### nerfwar
- Title: Nerfwar Team Building Singapore | Elluminate
- Description: Nerfwar foam blaster team battles for corporate groups in Singapore. Competitive, safe, and energetic. Ideal for 20–500 pax. Book with Elluminate.
- Canonical: https://elluminate.sg/services/nerfwar
- Hero subline: A foam-blaster activity for teams that want accessible action, team tactics, and high participation.
- What's Inside: Nerfwar uses foam blasters, facilitated rules, and mission rounds to create a safer action-game experience. It suits mixed groups that want energy without heavy technical setup. Share pax, venue, age range, and comfort level so the format can be adjusted.
- FAQs: Is Nerfwar suitable for mixed fitness levels? | How many people can join Nerfwar? | Can Nerfwar be customised for our company? | What should organisers prepare for Nerfwar?
- Related links: /services/archery-tag, /services/gel-blitz, /services/tag-tical-laser-teambuilding, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### tag-tical-laser-teambuilding
- Title: Laser Tag Team Building Singapore | Elluminate
- Description: Laser tag team building in Singapore. Fast-paced tactical battles that build teamwork, strategy, and communication. Fully facilitated by Elluminate.
- Canonical: https://elluminate.sg/services/tag-tical-laser-teambuilding
- Hero subline: A laser tag activity for teams that want tactical play, low-contact competition, and active missions.
- What's Inside: Tag-tical Laser Team Building uses sensor-based missions, team strategy, and facilitated game rounds. It suits groups that want action without projectiles. Share pax, venue options, intensity preference, and accessibility notes so the arena flow can be planned.
- FAQs: Is Tag-tical Laser Team Building suitable for mixed fitness levels? | How many people can join Tag-tical Laser Team Building? | Can Tag-tical Laser Team Building be customised for our company? | What should organisers prepare for Tag-tical Laser Team Building?
- Related links: /services/archery-tag, /services/gel-blitz, /services/nerfwar, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### amazing-race-virtual
- Title: Virtual Amazing Race Singapore | Elluminate
- Description: Keep remote and hybrid teams engaged with a Virtual Amazing Race. Live digital challenges, real competition, facilitated by Elluminate from Singapore.
- Canonical: https://elluminate.sg/services/amazing-race-virtual
- Hero subline: A remote race format for distributed teams that want shared missions without travelling.
- What's Inside: Virtual Amazing Race gives remote or hybrid teams a hosted challenge built around digital clues, teamwork, and paced missions. It is useful when people cannot gather in one venue but still need a shared event. Share pax, platform preference, and time zones before planning.
- FAQs: Is Virtual Amazing Race suitable for remote and hybrid teams? | What platform do we need for Virtual Amazing Race? | Can Virtual Amazing Race include company themes or messages? | How do we keep people engaged online?
- Related links: /services/the-gameshow-experience-virtual, /services/the-great-zodiac-hunt-virtual, /services/fit-in-your-team-virtual, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### fit-in-your-team-virtual
- Title: Fit In Your Team Virtual Activity Singapore | Elluminate
- Description: A fun and energising virtual fitness team building experience for remote corporate teams in Singapore. Boosts morale, energy, and team connection.
- Canonical: https://elluminate.sg/services/fit-in-your-team-virtual
- Hero subline: A virtual movement session for teams that want energy, wellness, and light competition online.
- What's Inside: Fit In Your Team combines hosted movement, simple challenges, and online team participation. It suits remote groups that need a reset rather than another passive call. Share pax, time zones, fitness comfort, and platform preference so the intensity can be adjusted.
- FAQs: Is Fit In Your Team suitable for remote and hybrid teams? | What platform do we need for Fit In Your Team? | Can Fit In Your Team include company themes or messages? | How do we keep people engaged online?
- Related links: /services/amazing-race-virtual, /services/the-gameshow-experience-virtual, /services/wellness-events, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### the-gameshow-experience-virtual
- Title: Virtual Gameshow Team Building Singapore | Elluminate
- Description: An interactive online game show for remote corporate teams. Fast laughs, high engagement, and easy participation. Book Singapore's top virtual host.
- Canonical: https://elluminate.sg/services/the-gameshow-experience-virtual
- Hero subline: A virtual game show for remote teams that want quick rounds, visible hosting, and easy participation.
- What's Inside: The Gameshow Experience uses hosted online rounds, questions, and team play to create a shared screen-based activity. It suits remote teams that need energy without complex setup. Share pax, time zones, and preferred platform so the pacing can be planned.
- FAQs: Is The Gameshow Experience suitable for remote and hybrid teams? | What platform do we need for The Gameshow Experience? | Can The Gameshow Experience include company themes or messages? | How do we keep people engaged online?
- Related links: /services/amazing-race-virtual, /services/the-patriot-act-virtual, /services/grand-christmas-delivery, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### the-great-zodiac-hunt-virtual
- Title: Virtual Zodiac Hunt Team Building | Elluminate
- Description: A zodiac-themed virtual team challenge for corporate groups. Engaging, culturally rich, and perfect for diverse Singapore teams. Book with Elluminate.
- Canonical: https://elluminate.sg/services/the-great-zodiac-hunt-virtual
- Hero subline: A story-led virtual hunt for teams that want puzzles, culture, and light online adventure.
- What's Inside: The Great Zodiac Hunt gives remote teams a hosted mission built around themed clues and collaborative problem solving. It works for groups that want a virtual activity with more story than standard trivia. Share pax, platform, and timing before planning.
- FAQs: Is The Great Zodiac Hunt suitable for remote and hybrid teams? | What platform do we need for The Great Zodiac Hunt? | Can The Great Zodiac Hunt include company themes or messages? | How do we keep people engaged online?
- Related links: /services/amazing-race-virtual, /services/tomb-raider-king-treasure-hunt-virtual, /services/the-nuclear-fallout-escape-room-virtual, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### the-nuclear-fallout-escape-room-virtual
- Title: Virtual Escape Room Singapore | Nuclear Fallout | Elluminate
- Description: An immersive virtual escape room team building experience. Race to stop the nuclear fallout before time runs out. Book this online activity in Singapore.
- Canonical: https://elluminate.sg/services/the-nuclear-fallout-escape-room-virtual
- Hero subline: A virtual escape-room format for teams that want time pressure, puzzles, and shared problem solving.
- What's Inside: Nuclear Fallout Escape Room turns online collaboration into a hosted puzzle mission with a countdown structure. It suits teams that enjoy deduction and clear stakes. Share pax, platform, time zone, and puzzle comfort so the game can be set up appropriately.
- FAQs: Is Nuclear Fallout Escape Room suitable for remote and hybrid teams? | What platform do we need for Nuclear Fallout Escape Room? | Can Nuclear Fallout Escape Room include company themes or messages? | How do we keep people engaged online?
- Related links: /services/tomb-raider-king-treasure-hunt-virtual, /services/the-great-zodiac-hunt-virtual, /services/amazing-race-virtual, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### the-patriot-act-virtual
- Title: The Patriot Act Virtual Team Building Singapore | Elluminate
- Description: A Singapore-themed virtual team building game full of national pride challenges and local knowledge. Perfect for National Day and cohort events.
- Canonical: https://elluminate.sg/services/the-patriot-act-virtual
- Hero subline: A Singapore-themed virtual activity for teams that want local references, trivia, and hosted team play.
- What's Inside: The Patriot Act uses Singapore-inspired challenges and online team rounds to create a light, shared virtual event. It suits National Day moments, remote teams, and mixed local groups. Share pax, platform, and audience profile so references land well.
- FAQs: Is The Patriot Act suitable for remote and hybrid teams? | What platform do we need for The Patriot Act? | Can The Patriot Act include company themes or messages? | How do we keep people engaged online?
- Related links: /services/the-gameshow-experience-virtual, /services/amazing-race-virtual, /services/cultural-race, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### tomb-raider-king-treasure-hunt-virtual
- Title: Tomb Raider Virtual Team Building | Elluminate
- Description: A thrilling virtual adventure team building game. Solve puzzles, beat challenges, and escape the tomb together. Book this online activity with Elluminate.
- Canonical: https://elluminate.sg/services/tomb-raider-king-treasure-hunt-virtual
- Hero subline: A virtual treasure-hunt adventure for teams that want puzzles, exploration, and a hosted mission arc.
- What's Inside: Tomb Raider King gives remote teams a digital adventure built around clues, challenge rounds, and group decisions. It suits teams that want a stronger narrative than a normal online quiz. Share pax, platform, and timing before planning.
- FAQs: Is Tomb Raider King suitable for remote and hybrid teams? | What platform do we need for Tomb Raider King? | Can Tomb Raider King include company themes or messages? | How do we keep people engaged online?
- Related links: /services/the-nuclear-fallout-escape-room-virtual, /services/the-great-zodiac-hunt-virtual, /services/treasure-heist, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### grand-christmas-delivery
- Title: Christmas Virtual Team Building | Elluminate
- Description: A festive virtual team building experience themed around Christmas. Perfect for year-end corporate events and remote holiday celebrations in Singapore.
- Canonical: https://elluminate.sg/services/grand-christmas-delivery
- Hero subline: A festive virtual activity for year-end teams that want holiday energy without a physical venue.
- What's Inside: Grand Christmas Delivery turns a remote year-end gathering into a hosted festive mission. It is useful for distributed teams that still want shared laughter, light competition, and a clear event moment. Share pax, platform, and any gifting plans early.
- FAQs: Is Grand Christmas Delivery suitable for remote and hybrid teams? | What platform do we need for Grand Christmas Delivery? | Can Grand Christmas Delivery include company themes or messages? | How do we keep people engaged online?
- Related links: /services/the-gameshow-experience-virtual, /services/amazing-race-virtual, /services/fit-in-your-team-virtual, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### overseas-retreats
- Title: Overseas Corporate Retreat Singapore | Elluminate
- Description: End-to-end overseas corporate retreat planning from Singapore. Bali, Bangkok, Tokyo, and beyond. Elluminate handles everything from flights to facilitation.
- Canonical: https://elluminate.sg/services/overseas-retreats
- Hero subline: A managed regional retreat service for companies that need travel, programme flow, and team outcomes aligned.
- What's Inside: Overseas Retreats help organisers shape the trip around destination, pax, objectives, budget, and activity flow. The work can include travel planning, venue coordination, facilitation, meals, and team-building layers. Share the rough brief first so the scope can be built responsibly.
- FAQs: How early should we plan an overseas corporate retreat? | Can an overseas corporate retreat include team building and workshops? | What information is needed for a an overseas corporate retreat quote? | Can you manage logistics for an overseas corporate retreat?
- Related links: /services/local-retreats, /services/incentive-travel, /services/leadership-offsites, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### local-retreats
- Title: Local Corporate Retreat Singapore | Elluminate
- Description: Singapore corporate retreats in 3 tiers: Staycation, Heritage, and Luxury. Fully planned, hotel-based retreats for teams of all sizes. Book now.
- Canonical: https://elluminate.sg/services/local-retreats
- Hero subline: A Singapore retreat option for teams that want offsite energy without overseas travel.
- What's Inside: Local Retreats combine Singapore venues, facilitation, meals, and activity planning into a contained offsite experience. They work when teams need a reset but travel is impractical. Share pax, preferred dates, staycation needs, and desired outcomes before quoting.
- FAQs: How early should we plan a local corporate retreat? | Can a local corporate retreat include team building and workshops? | What information is needed for a a local corporate retreat quote? | Can you manage logistics for a local corporate retreat?
- Related links: /services/overseas-retreats, /services/leadership-offsites, /services/wellness-events, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### incentive-travel
- Title: Incentive Travel Singapore | Elluminate
- Description: Reward your top performers with a fully managed incentive travel programme. Elluminate plans everything from criteria design to on-ground execution.
- Canonical: https://elluminate.sg/services/incentive-travel
- Hero subline: A reward-trip planning service for companies that need recognition, travel, and experience design handled carefully.
- What's Inside: Incentive Travel is for high-performing teams, sales groups, or partners who need a reward experience planned around destination, eligibility, budget, and experience quality. Share the participant profile, travel window, and recognition goal so planning can start with the right constraints.
- FAQs: How early should we plan an incentive travel programme? | Can an incentive travel programme include team building and workshops? | What information is needed for a an incentive travel programme quote? | Can you manage logistics for an incentive travel programme?
- Related links: /services/overseas-retreats, /services/local-retreats, /services/leadership-offsites, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### mbti
- Title: MBTI Workshop Singapore | Elluminate
- Description: MBTI personality profiling workshops for corporate teams in Singapore. Understand how your team thinks, communicates, and works best together.
- Canonical: https://elluminate.sg/services/mbti
- Hero subline: An MBTI profiling workshop for teams that want clearer communication and better cross-type collaboration.
- What's Inside: MBTI Profiling helps participants discuss personality preferences, working styles, communication patterns, and possible friction points. The workshop should be framed as a guided team conversation, not a label. Share group size, seniority mix, and desired outcomes before planning.
- FAQs: Who is an MBTI workshop best suited for? | Can an MBTI workshop be customised to our workplace context? | How long should we set aside for an MBTI workshop? | What should participants expect during an MBTI workshop?
- Related links: /services/disc, /services/ocean, /services/workshops, /services/leadership-offsites
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### disc
- Title: DISC Workshop Singapore | Elluminate
- Description: DISC behavioural profiling sessions for Singapore corporate teams. Improve communication, reduce conflict, and build stronger working relationships.
- Canonical: https://elluminate.sg/services/disc
- Hero subline: A DiSC workshop for teams that want a shared language for behaviour, communication, and conflict.
- What's Inside: DiSC Assessment sessions help teams discuss behavioural tendencies and how those tendencies show up at work. It is useful for improving meetings, collaboration, and manager conversations. Share the team context, group size, and workshop goal before confirming the structure.
- FAQs: Who is a DiSC workshop best suited for? | Can a DiSC workshop be customised to our workplace context? | How long should we set aside for a DiSC workshop? | What should participants expect during a DiSC workshop?
- Related links: /services/mbti, /services/ocean, /services/workshops, /services/leadership-offsites
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### ocean
- Title: OCEAN Profiling Singapore | Elluminate
- Description: OCEAN personality model training for corporate teams in Singapore. Understand the Big Five traits and build a more self-aware, high-performing team.
- Canonical: https://elluminate.sg/services/ocean
- Hero subline: An OCEAN profiling workshop for teams that want research-backed language for personality and work behaviour.
- What's Inside: OCEAN Profiling introduces the Big Five personality framework in a facilitated workplace context. The session should help teams reflect on tendencies, preferences, and collaboration patterns without overclaiming outcomes. Share the audience level, timing, and intended use case first.
- FAQs: Who is an OCEAN workshop best suited for? | Can an OCEAN workshop be customised to our workplace context? | How long should we set aside for an OCEAN workshop? | What should participants expect during an OCEAN workshop?
- Related links: /services/mbti, /services/disc, /services/workshops, /services/leadership-offsites
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### mass-talks
- Title: Corporate Mass Talks Singapore | Elluminate
- Description: Engaging mass talks and keynote sessions for large corporate groups in Singapore. Motivational, insightful, and tailored to your team's goals.
- Canonical: https://elluminate.sg/services/mass-talks
- Hero subline: A keynote or seminar format for larger groups that need a polished message, speaker flow, and audience focus.
- What's Inside: Mass Talks support townhall-style learning, motivation, or thematic sessions for larger audiences. Planning should cover the speaker brief, AV needs, audience profile, run-of-show, and desired takeaway. Share the event context and timing before confirming scope.
- FAQs: Who is a mass talk best suited for? | Can a mass talk be customised to our workplace context? | How long should we set aside for a mass talk? | What should participants expect during a mass talk?
- Related links: /services/workshops, /services/leadership-offsites, /services/corporate-days, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### workshops
- Title: Corporate Workshops Singapore | Elluminate
- Description: Interactive corporate workshops in Singapore covering communication, leadership, collaboration, and team development. Customised for your team's goals.
- Canonical: https://elluminate.sg/services/workshops
- Hero subline: A facilitated learning format for teams that need practical workplace skills, discussion, and takeaways.
- What's Inside: Corporate Workshops give teams a structured session around communication, collaboration, leadership, or team development. The focus is practical participation, not passive slides. Share the audience level, learning objective, timing, and preferred venue so the workshop can be scoped.
- FAQs: Who is a corporate workshop best suited for? | Can a corporate workshop be customised to our workplace context? | How long should we set aside for a corporate workshop? | What should participants expect during a corporate workshop?
- Related links: /services/mbti, /services/disc, /services/ocean, /services/mass-talks
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### youth-camps
- Title: Youth Camps Singapore | School Programmes | Elluminate
- Description: High-energy youth camps and school programmes in Singapore. Designed for student bonding, leadership development, and cohort-building experiences.
- Canonical: https://elluminate.sg/services/youth-camps
- Hero subline: A facilitated camp programme for schools or cohorts that need bonding, leadership practice, and safe structure.
- What's Inside: Youth Camps combine structured activities, facilitation, safety management, and cohort-building moments for student groups. Planning should cover age range, pax, venue, learning goals, supervision needs, and accessibility. Share the school context before confirming the programme.
- FAQs: What does a youth camp usually include? | Can a youth camp work for mixed departments or seniority levels? | How do we choose the right format for a youth camp? | What should we prepare before enquiring?
- Related links: /services/battle-of-the-olympians, /services/cultural-race, /services/workshops, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### corporate-days
- Title: Corporate & Family Day Singapore | Elluminate
- Description: Full-day corporate event planning for company days and family days in Singapore. Activities, logistics, catering, and facilitation, all by Elluminate.
- Canonical: https://elluminate.sg/services/corporate-days
- Hero subline: A managed company-day format for organisers who need activities, flow, and logistics coordinated end to end.
- What's Inside: Corporate Days bring activities, facilitation, catering coordination, and event flow into one professionally run programme. They work for staff days, department days, and family-friendly company moments. Share pax, venue, audience mix, and timing so the plan is practical.
- FAQs: What does a corporate day usually include? | Can a corporate day work for mixed departments or seniority levels? | How do we choose the right format for a corporate day? | What should we prepare before enquiring?
- Related links: /services/minute-to-win-it, /services/battle-of-the-olympians, /services/wellness-events, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### wellness-events
- Title: Corporate Wellness Events Singapore | Elluminate
- Description: Wellness days for corporate teams in Singapore. Yoga, mindfulness, nutrition, and team reset experiences. Fully facilitated by Elluminate.
- Canonical: https://elluminate.sg/services/wellness-events
- Hero subline: A workplace wellness format for teams that need a calmer reset, healthier habits, and shared participation.
- What's Inside: Wellness Events can combine movement, mindfulness, nutrition, recovery, and team reset activities depending on the audience. The goal is a credible, accessible programme rather than forced participation. Share pax, venue, health considerations, and desired tone before planning.
- FAQs: What does a corporate wellness event usually include? | Can a corporate wellness event work for mixed departments or seniority levels? | How do we choose the right format for a corporate wellness event? | What should we prepare before enquiring?
- Related links: /services/local-retreats, /services/fit-in-your-team-virtual, /services/corporate-days, /services/team-building
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

### leadership-offsites
- Title: Leadership Offsite Singapore | Elluminate
- Description: Strategy-focused leadership offsites for senior teams in Singapore. Premium venues, expert facilitation, structured alignment. Book with Elluminate.
- Canonical: https://elluminate.sg/services/leadership-offsites
- Hero subline: A structured offsite for leadership teams that need alignment, decisions, and space away from daily work.
- What's Inside: Leadership Offsites are planned around senior team objectives, agenda flow, facilitation needs, venue fit, and confidentiality. They can include strategy sessions, team alignment, and selected bonding moments. Share the leadership context and desired decisions before scoping.
- FAQs: What does a leadership offsite usually include? | Can a leadership offsite work for mixed departments or seniority levels? | How do we choose the right format for a leadership offsite? | What should we prepare before enquiring?
- Related links: /services/local-retreats, /services/overseas-retreats, /services/workshops, /services/mbti
- Content TODOs: TODO(content): Verify client logos, named-company references, and recent-event pax counts before using them as public proof. | TODO(content): Replace initials-only testimonials with permissioned full-name reviews where available.

## Human Verification Items
- TODO(content): Confirm client-logo usage rights and named-company proof before expanding proof surfaces.
- TODO(content): Confirm recent-event pax counts before displaying them publicly.
- TODO(content): Replace initials-only testimonials with permissioned, attributable reviews where available.
- TODO(seo): Confirm /portfolio as the temporary redirect target for quarantined Large Scale URLs.
