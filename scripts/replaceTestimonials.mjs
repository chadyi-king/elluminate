import fs from "fs";

const filePath = "src/data/servicesData.ts";
let content = fs.readFileSync(filePath, "utf8");

// Each service key maps to its new 6-testimonial array (2+ sentences, first+initial, industry label, no em dashes)
const newTestimonials = {
  "team-building": [
    { quote: "We ran an Amazing Race-style challenge for 200 people and every single team came back buzzing. The debrief tied it back to how we actually collaborate at work, which made it worth every dollar.", author: "Priya S.", company: "Banking & Finance" },
    { quote: "The facilitation team was sharp and kept the energy high throughout the entire day. Our staff left feeling more connected to each other than they had in years.", author: "Jason T.", company: "Technology" },
    { quote: "We had a mixed group of new hires and veterans and the activities brought both cohorts together naturally. It did not feel forced at all.", author: "Rachel L.", company: "Insurance" },
    { quote: "Elluminate handled everything from the run of show to the logistics and we did not have to worry about a single detail. The event ran perfectly to time.", author: "Marcus W.", company: "Logistics & Shipping" },
    { quote: "Our team building day has become something people genuinely look forward to every year now. The variety of activities kept everyone engaged regardless of their fitness level.", author: "Aisha B.", company: "Healthcare" },
    { quote: "The customisation they offered was impressive. They worked our company values into the challenges in a way that felt natural rather than preachy.", author: "Kevin O.", company: "Consumer Goods" },
  ],
  "overseas-retreats": [
    { quote: "We did a four-day retreat in Bali with Elluminate and it was the most seamless trip our company has ever organised. Every transfer, dinner, and activity was perfectly timed.", author: "Diana C.", company: "Management Consulting" },
    { quote: "The team in Bali had our whole group sorted from airport pickup to the farewell dinner. Our people kept saying it was the best company trip they had been on.", author: "Nathan K.", company: "Real Estate & Property" },
    { quote: "Planning an overseas retreat for 80 people felt daunting but Elluminate made it look effortless. The itinerary balanced culture, adventure, and relaxation in just the right way.", author: "Siti R.", company: "Pharmaceuticals" },
    { quote: "What impressed me most was how they handled the unexpected. A last-minute venue change mid-trip was resolved quietly and the group never even noticed.", author: "Thomas Y.", company: "Energy & Utilities" },
    { quote: "Our leadership team came back from Phuket with a different mindset. The strategic sessions built into the retreat hit harder because we were in a different environment altogether.", author: "Felicia N.", company: "Banking & Finance" },
    { quote: "Every detail was thoughtful, from the group activities to the free-time options. It never felt like a packaged tour and more like a personalised experience designed specifically for our team.", author: "Desmond H.", company: "Aviation" },
  ],
  "dinner-and-dance": [
    { quote: "Our Dinner and Dance was the most talked-about company event in years. The theming was immaculate and the performances kept the energy up all night.", author: "Claire T.", company: "Retail" },
    { quote: "Elluminate transformed our ballroom into something that looked straight out of a magazine. The production value far exceeded what we expected at that price point.", author: "Patrick C.", company: "Banking & Finance" },
    { quote: "From the table centrepieces to the stage backdrop, everything was consistent and polished. Our staff arrived and immediately started taking photos before dinner even began.", author: "Melissa F.", company: "Insurance" },
    { quote: "The emcee they provided kept the whole night flowing without any awkward silences or rushed transitions. It was exactly the right pace for a formal sit-down event.", author: "Gary O.", company: "Property Development" },
    { quote: "They managed our entire Dinner and Dance from concept through to the final walk-out song. We just showed up in our outfits and enjoyed the night alongside everyone else.", author: "Jocelyn M.", company: "Media & Communications" },
    { quote: "Our theme was Old Hollywood and they absolutely nailed it. The backdrop, lighting, and even the staff uniforms matched the brief perfectly.", author: "Alex W.", company: "Publishing" },
  ],
  "awards-ceremonies": [
    { quote: "Elluminate ran our annual sales awards night and turned it into a proper ceremony our team actually looks forward to. The staging and lighting made every winner feel like a star.", author: "Raymond L.", company: "Telecommunications" },
    { quote: "The awards presentation was smoothly paced and the video tributes they prepared for each category were a genuine surprise. Our staff were moved by how personal it all felt.", author: "Winnie T.", company: "FMCG" },
    { quote: "We had 12 award categories and over 300 guests and the whole ceremony ran without a single hitch. The production quality matched what you would expect at an industry gala.", author: "Bernard C.", company: "Financial Services" },
    { quote: "The team took our award categories and built a full narrative arc through the evening. It did not feel like a checklist but a real celebration of everything the company achieved.", author: "Serena K.", company: "Retail" },
    { quote: "Our employee of the year segment had three video montages and live stage reactions. The room was laughing and tearing up and it made for an unforgettable moment on the night.", author: "Jonathan H.", company: "Hospitality" },
    { quote: "Every winner walked a proper stage with lighting and music and it elevated the whole evening. People told us it was the most professional awards night we have ever put on.", author: "Peishan G.", company: "Education" },
  ],
  "corporate-anniversaries": [
    { quote: "Our 25th anniversary celebration brought together staff from three generations and Elluminate found a way to make it meaningful for all of them. The heritage wall they created was stunning.", author: "Vincent P.", company: "Manufacturing" },
    { quote: "The commemorative video they put together for our 30th year had our founders tearing up on stage. It captured the company journey in a way that felt both proud and deeply personal.", author: "Lynn S.", company: "Banking & Finance" },
    { quote: "We wanted something that celebrated our history without feeling like a dusty archive event. Elluminate balanced nostalgia with a forward-looking energy that matched our brand perfectly.", author: "Calvin T.", company: "Technology" },
    { quote: "From the anniversary logo to the themed activations, everything tied together seamlessly. Our guests kept commenting on how cohesive the whole event felt from arrival to end.", author: "Mei L.", company: "Consumer Goods" },
    { quote: "They helped us turn a milestone anniversary into a genuine brand moment. The media wall and live social feed kept the buzz going online long after the event had wrapped.", author: "Richard C.", company: "Food & Beverage" },
    { quote: "Our staff felt genuinely celebrated at our 20th anniversary event. The personalised name cards, the memory lane corridor, and the live band were all perfectly executed together.", author: "Shirley N.", company: "Healthcare" },
  ],
  "leadership-offsites": [
    { quote: "Our leadership offsite with Elluminate shifted something real in how our senior team communicates. The facilitated sessions surfaced things that had been unsaid for months.", author: "Grace H.", company: "Management Consulting" },
    { quote: "For the first time in years our C-suite actually disconnected from work mode and reconnected with each other. The agenda was tight but never rushed.", author: "Andrew F.", company: "Technology" },
    { quote: "The facilitators challenged our leaders in a constructive way that left everyone thinking rather than defensive. It was exactly the honest reset we needed as a team.", author: "Stephanie C.", company: "Pharmaceuticals" },
    { quote: "Our leadership team walked away with clearer priorities and a stronger sense of alignment than we had going in. The balance of strategy work and recreation was spot on.", author: "Jack T.", company: "Financial Services" },
    { quote: "Elluminate designed the offsite to flow naturally from social ice-breakers into deeper strategic work. The transition felt organic rather than staged at any point.", author: "Cynthia W.", company: "Insurance" },
    { quote: "The venue sourcing, catering choices, and programme design all reflected a genuine understanding of what a leadership team needs from an offsite. We were impressed at every stage.", author: "Eugene L.", company: "Real Estate & Property" },
  ],
  "product-launch": [
    { quote: "Our product launch with Elluminate sold out the venue and generated media coverage we are still riding. The staging and experiential zones made the product feel genuinely premium.", author: "Vivienne T.", company: "Consumer Electronics" },
    { quote: "They understood our brand voice immediately and every design choice reflected it accurately. From the teaser wall to the reveal moment, the tension was built perfectly throughout.", author: "Darren Y.", company: "FMCG" },
    { quote: "The reveal sequence they choreographed had the whole room gasping. It was the kind of moment that gets shared and that was exactly what we needed for social reach.", author: "Amanda K.", company: "Fashion & Lifestyle" },
    { quote: "Our regional partners were present at the launch and every one of them commented on how professionally it was run. It set exactly the tone we wanted for the product rollout.", author: "Marcus L.", company: "Technology" },
    { quote: "The experiential activations Elluminate designed gave guests a reason to stay, explore, and share. We trended locally on the day and the product messaging landed clearly.", author: "Huishan P.", company: "Beauty & Personal Care" },
    { quote: "They handled media registration, product demos, and the post-launch cocktail all under one seamless plan. Nothing slipped through the cracks on the day.", author: "Daniel O.", company: "Pharmaceutical" },
  ],
  "brand-activations": [
    { quote: "The activation Elluminate built for our consumer roadshow stopped people in their tracks. Footfall at our booth was three times higher than at previous shows.", author: "Priya M.", company: "Consumer Goods" },
    { quote: "Every element of the activation reinforced our brand message without feeling like a hard-sell. Visitors were genuinely engaged and stayed far longer than expected.", author: "Trevor N.", company: "Telecommunications" },
    { quote: "They turned a tight brief into an experience that had a queue forming within the first hour. The mechanics were simple enough for anyone to join but memorable enough to share later.", author: "Lily F.", company: "Retail" },
    { quote: "The data they collected through the activation gave us audience insight we did not expect. Combining experiential engagement with lead capture was a smart move on their part.", author: "Sean H.", company: "Technology" },
    { quote: "Our brand came alive in a way that static booths never could achieve. The staff Elluminate provided were enthusiastic, on-message, and genuinely drew people in throughout the day.", author: "Joanna K.", company: "Food & Beverage" },
    { quote: "They understood that the activation had to work for both walk-in traffic and social sharing. The selfie zones and interactive moments drove a lot of organic online content for us.", author: "Chris W.", company: "Media & Advertising" },
  ],
  "client-appreciation": [
    { quote: "Our clients felt genuinely special at the appreciation night Elluminate put together. It was intimate without feeling small and every detail reinforced how much we value each relationship.", author: "Sharon T.", company: "Financial Services" },
    { quote: "The personalised touches were what stood out most. From the welcome gifts to the seating arrangements, it was clear real thought had gone into every client's experience.", author: "Lucas C.", company: "Legal Services" },
    { quote: "Several of our top clients told us it was the best hospitality event they had attended in years. That kind of feedback strengthens relationships in a way that emails never could.", author: "Fiona H.", company: "Banking" },
    { quote: "Elluminate helped us host an evening that felt warm and genuine rather than transactional. The guests relaxed, the conversations flowed, and our business relationships deepened as a result.", author: "Ivan L.", company: "Real Estate & Property" },
    { quote: "We had a diverse group of VIP clients from different industries and the event catered to all of them equally well. The venue choice and programme design were both excellent.", author: "Nisha R.", company: "Professional Services" },
    { quote: "The flow of the evening was perfect. Cocktails, entertainment, dinner, and a short highlight reel all felt like one seamless experience rather than separate components bolted together.", author: "Kenneth G.", company: "Insurance" },
  ],
  "town-halls": [
    { quote: "Our town hall attendance went from reluctant to enthusiastic after Elluminate helped us redesign the format. The interactive segments made employees feel heard rather than talked at.", author: "Jessica C.", company: "Technology" },
    { quote: "The live polling and Q&A mechanics they set up changed the whole dynamic of our all-hands meeting. Leaders got real feedback and staff felt the communication was genuinely two-way.", author: "Patrick W.", company: "Banking & Finance" },
    { quote: "Elluminate turned what used to be a PowerPoint marathon into a real two-way conversation. The energy in the room was completely different from any town hall we had held before.", author: "Grace T.", company: "FMCG" },
    { quote: "The production value was much higher than we expected for an internal event. Good lighting, clear sound, and a polished run of show made our leadership team look credible on stage.", author: "Roy L.", company: "Insurance" },
    { quote: "We ran a hybrid town hall with staff in three countries and Elluminate managed the tech and facilitation flawlessly. Both online and in-room attendees felt equally connected throughout.", author: "Maria F.", company: "Logistics & Shipping" },
    { quote: "The themed town hall format they proposed gave our quarterly update a proper narrative arc. Staff came out understanding the company direction far better than after any previous session.", author: "David N.", company: "Healthcare" },
  ],
  "immersive-experiences": [
    { quote: "Elluminate built a fully immersive brand world for our product launch that guests were still talking about a week later. The sensory details at every turn made it feel genuinely real.", author: "Claudia T.", company: "Fashion & Lifestyle" },
    { quote: "It was clear from the first walk-through that the team had thought about every junction and sight line. The narrative pulled guests through the space in exactly the right order.", author: "Brandon C.", company: "Consumer Electronics" },
    { quote: "Guests did not just attend our event, they inhabited it. The immersive storyline meant they were active participants rather than passive observers and the social content they generated was phenomenal.", author: "Eunice H.", company: "Media & Entertainment" },
    { quote: "The blend of physical design and digital triggers created experiences you could not fully capture in a photo. That drove real curiosity and kept people exploring much longer than expected.", author: "Jamie L.", company: "Technology" },
    { quote: "We briefed them on a complex brand story and they translated it into a spatial experience that was intuitive without being simplified. Our target audience got it immediately on arrival.", author: "Rachel G.", company: "FMCG" },
    { quote: "From the entrance installation to the final reveal room, the pacing was impeccable. Nobody wanted to leave and several guests looped through multiple times across the evening.", author: "Terence M.", company: "Hospitality & Tourism" },
  ],
  "wellness-events": [
    { quote: "The wellness day Elluminate designed gave our team a real reset. From the breathwork session to the nutrition talk, everything was practical and actionable rather than vaguely inspirational.", author: "Karen Y.", company: "Financial Services" },
    { quote: "Staff came in looking tired and left looking noticeably lighter. The combination of movement, mindfulness, and good food made the day feel like genuine care from the company.", author: "Marcus T.", company: "Technology" },
    { quote: "We have run wellness events before but they have never felt as cohesive or professionally facilitated as this one. The variety of activities kept different personality types engaged throughout.", author: "Shing L.", company: "Pharmaceutical" },
    { quote: "Our employees often say they feel wellness days are a box-ticking exercise but this time the feedback was overwhelmingly positive. The quality of the facilitators made all the difference.", author: "Michelle C.", company: "Insurance" },
    { quote: "Elluminate understood that wellness looks different for different people. The programme offered options for different energy levels and preferences so nobody felt left out or out of place.", author: "Raj K.", company: "Healthcare" },
    { quote: "The day ended with a group stretch and a brief reflection session that brought everyone together in a surprisingly touching way. It set a shared intention that carried into the weeks that followed.", author: "Alexandra P.", company: "Education" },
  ],
  "event-concept": [
    { quote: "Elluminate took our vague brief and returned with three fully formed concepts that each felt distinct and executable. The depth of thinking at the concept stage was genuinely impressive.", author: "Natalie C.", company: "Consumer Goods" },
    { quote: "We had been going in circles on our annual event theme for weeks. One creative session with Elluminate and we had a direction everyone was excited to build toward.", author: "Timothy H.", company: "Banking & Finance" },
    { quote: "The concept deck they presented told a story from the first slide. It was not just ideas but a fully considered experience with a clear rationale behind every single choice.", author: "Peiling T.", company: "Technology" },
    { quote: "Their ability to translate a brand strategy into an event narrative is what sets them apart. Our concept was rooted in insight and it showed in how well guests responded throughout.", author: "Chris F.", company: "Retail" },
    { quote: "We had a challenging brief with multiple stakeholders and contradictory preferences. Elluminate found the creative thread that satisfied everyone without diluting the concept in the process.", author: "Janet W.", company: "Pharmaceutical" },
    { quote: "The concept they developed became the template for how we now approach all our events. It gave us a framework that is both flexible and consistently on-brand.", author: "Edwin L.", company: "Hospitality" },
  ],
  "stage-production": [
    { quote: "The stage Elluminate built for our annual gala was on a different level to anything we had done before. The LED wall alone changed the entire atmosphere of the evening.", author: "Stanley T.", company: "Financial Services" },
    { quote: "Every lighting cue, sound transition, and visual element was precisely timed to the script. You could tell the production team had drilled every handoff until it was second nature.", author: "Serene H.", company: "Consumer Electronics" },
    { quote: "We had performers, speeches, video segments, and a live band all on the same stage and everything was managed without a single technical issue throughout the evening.", author: "Bobby C.", company: "FMCG" },
    { quote: "The stage design communicated our brand story without a word being spoken on it. Guests arrived and immediately understood the tone, scale, and purpose of the evening.", author: "Jasmine K.", company: "Media & Communications" },
    { quote: "Our CEO is not a natural public speaker but with proper stage lighting and monitor support from Elluminate, the delivery landed powerfully. The production genuinely made the speaker.", author: "Albert N.", company: "Technology" },
    { quote: "The technical crew were invisible during the event, which is the highest possible compliment. Everything just worked, on cue, every single time without fail.", author: "Brenda L.", company: "Healthcare" },
  ],
  "custom-themes": [
    { quote: "We asked for a cyberpunk theme and Elluminate delivered something so detailed and cohesive it felt like stepping into a film set. From the signage to the staff costumes, it was total immersion.", author: "Felix T.", company: "Technology" },
    { quote: "The thematic consistency across every touchpoint was remarkable. Menus, table displays, entrance arch, and entertainment all told the same story without a single element breaking it.", author: "Valerie C.", company: "Fashion & Lifestyle" },
    { quote: "Our Masquerade Royale theme had guests posting their photos all night long. The costume standards they suggested to attendees matched the venue setup perfectly.", author: "Gerald W.", company: "Financial Services" },
    { quote: "They took our Great Gatsby brief seriously and found a way to elevate it beyond the standard gold and black colour scheme. The period details were genuinely considered and tasteful.", author: "Carmen H.", company: "Hospitality & Tourism" },
    { quote: "Every theme they proposed came with a practical execution plan alongside it. We never had to wonder whether the idea was achievable because they had already costed it out.", author: "Perry N.", company: "Consumer Goods" },
    { quote: "The theme they developed for our Retro Disco Night created moments that were inherently shareable. The photo booth queue lasted the entire evening and the energy never dropped.", author: "Sandy K.", company: "Media & Advertising" },
  ],
  "emcee-media": [
    { quote: "The emcee Elluminate provided read the room perfectly and adjusted the energy at exactly the right moments throughout. The crowd was with them for the full four hours without any dip.", author: "Elaine T.", company: "Banking & Finance" },
    { quote: "Having a professional emcee made an enormous difference to the flow of our gala. Dead air and awkward transitions disappeared completely from the evening.", author: "Dion W.", company: "Retail" },
    { quote: "The media playback team synced every video perfectly to the live programme. Not once did we sit waiting for a screen to load or a file to fail during any segment.", author: "Irene C.", company: "Healthcare" },
    { quote: "Our emcee took the briefing notes seriously and wove our company culture references naturally into the script. Guests thought the ad-libs were planned because they landed so well.", author: "Hugh L.", company: "Technology" },
    { quote: "The AV coordination between the emcee, stage manager, and playback team was seamless. It made our event look like it had a much bigger production budget than it actually did.", author: "Adeline N.", company: "Pharmaceutical" },
    { quote: "We used Elluminate for both the emcee and the media production on our awards night. The synergy between those two elements made the whole evening feel like one cohesive broadcast.", author: "Johnson K.", company: "Insurance" },
  ],
  "summits": [
    { quote: "Elluminate managed our two-day regional summit for 400 delegates and the operational precision was exceptional. Registration, breakouts, plenary, and gala dinner all ran on schedule.", author: "Dr Lim S.", company: "Professional Association" },
    { quote: "The delegate experience was well-mapped at every touchpoint. From the welcome kit to the networking sessions, guests felt guided rather than herded from one event to the next.", author: "Barbara H.", company: "Financial Services" },
    { quote: "Organising an international summit involves a thousand moving parts and Elluminate tracked all of them. Our planning team could focus on content because logistics were fully handled.", author: "Christopher Y.", company: "Trade Organisation" },
    { quote: "The hybrid summit they managed connected in-room delegates with virtual attendees in a way that felt genuinely inclusive rather than bolted on as an afterthought.", author: "Preethi R.", company: "Technology" },
    { quote: "Speaker coordination, AV production, and delegate management were all handled by the same team, which made communication much cleaner. Problems were solved before we knew they existed.", author: "William T.", company: "Academia" },
    { quote: "Our summit attracted C-suite attendees who have high expectations. Elluminate delivered at every stage and several delegates specifically mentioned the event management quality in post-event surveys.", author: "Angeline C.", company: "Consulting" },
  ],
  "government-events": [
    { quote: "Elluminate handled our National Day celebration with the sensitivity and precision that a government event demands. Every protocol was observed without making the evening feel rigid.", author: "Siew H.", company: "Public Sector" },
    { quote: "The team understood the compliance requirements and security briefings without needing to be reminded twice. That made working with them as a government client significantly easier.", author: "Patrick N.", company: "Statutory Board" },
    { quote: "Our agency's launch ceremony had ministerial attendance and Elluminate delivered an event that matched the occasion. The stage production and logistics were at the highest standard.", author: "Michelle T.", company: "Government Agency" },
    { quote: "They are one of the few event companies who grasp what it means to work with procurement requirements and approval chains. The documentation was always in order and on time.", author: "Kenneth C.", company: "Public Sector" },
    { quote: "The cultural sensitivity and attention to protocol they demonstrated throughout our community event reflected well on our organisation. Residents commented on how smooth and respectful the event was.", author: "Esther L.", company: "Community Organisation" },
    { quote: "Every element of our government convention was meticulously planned and executed. The professionalism of the Elluminate team gave our leadership confidence at every stage of delivery.", author: "Paul W.", company: "Statutory Board" },
  ],
  "private-events": [
    { quote: "I wanted our company anniversary dinner to feel like a personal celebration rather than a corporate function and that is exactly what Elluminate delivered. My team felt genuinely valued.", author: "Sandra T.", company: "Professional Services" },
    { quote: "From the first planning call to the final event, every interaction felt personalised. They remembered the details that mattered most to me and followed through on every single one.", author: "Derrick C.", company: "Healthcare" },
    { quote: "The event was exactly as I had imagined it, down to the floral arrangements and table lighting. Elluminate brought the brief to life with real care and skill.", author: "Josephine H.", company: "Retail" },
    { quote: "They managed a small event of 40 people with the same attention they would give a 400-person gala. That kind of consistency is genuinely hard to find in event companies.", author: "Rodney L.", company: "Financial Services" },
    { quote: "My guests arrived to a room that genuinely surprised them. The transformation from the venue photos I had seen in planning to the final dressed space was extraordinary.", author: "Andrea M.", company: "Technology" },
    { quote: "Working with Elluminate removed all the stress I had associated with hosting. They asked the right questions upfront and delivered exactly what they had promised.", author: "Samuel K.", company: "Education" },
  ],
  "family-fun-days": [
    { quote: "Our Family Fun Day ran for six hours across three activity zones and not a single child left without a smile. The Elluminate team managed the chaos with calm efficiency the whole time.", author: "Cindy T.", company: "Manufacturing" },
    { quote: "The activities Elluminate set up were age-appropriate for everyone from toddlers to grandparents. Families with mixed ages told us it was the most inclusive event we had ever run.", author: "Oliver L.", company: "Consumer Goods" },
    { quote: "We expected the usual carnival stalls but Elluminate added interactive games and facilitated team relays that got whole families competing together. The laughter was constant throughout.", author: "Wendy H.", company: "Healthcare" },
    { quote: "The carnival games were well-stocked and well-staffed and we never saw queues get too long. The logistics of a large family day can go wrong fast but everything ran smoothly.", author: "Jerome C.", company: "Technology" },
    { quote: "Staff morale after the Family Fun Day was noticeably higher. When employees see their families welcomed and celebrated by the company, it builds loyalty in a way that nothing else can.", author: "Pamela K.", company: "Logistics & Shipping" },
    { quote: "My kids are still talking about it three months later. The magic show and the mascot parade were highlights that turned a company event into a real family memory.", author: "Edmund N.", company: "Banking & Finance" },
  ],
  "corporate-carnivals": [
    { quote: "Elluminate transformed our carpark into a full carnival ground that had staff queuing before the event even officially opened. The scale and variety of stalls was incredible.", author: "Lionel T.", company: "Technology" },
    { quote: "The carnival atmosphere they created made our annual company day feel like a genuine festival. Employees brought their families and everyone mixed and mingled freely across departments.", author: "Celine C.", company: "FMCG" },
    { quote: "Managing 20 game booths, food stalls, a stage, and a crowd of 600 simultaneously is no small feat. Elluminate did it without any visible stress throughout the entire day.", author: "Thomas H.", company: "Manufacturing" },
    { quote: "The game operators Elluminate brought in were high energy and crowd-friendly. They drew people in naturally and kept the activity zones buzzing all day long.", author: "Pauline W.", company: "Retail" },
    { quote: "Our carnival had a photo booth that generated more internal social content than any professional shoot we have ever done. The branded backdrop and props were a smart touch.", author: "Leonard K.", company: "Insurance" },
    { quote: "We gave them a modest budget and they made it stretch in ways we did not expect. The creative use of space and the variety of activities made it feel like a much bigger investment.", author: "Frances L.", company: "Education" },
  ],
  "vip-gala": [
    { quote: "Elluminate produced a gala that our most discerning guests described as world-class. From the catering to the stage production, every single element was impeccable throughout.", author: "Renee H.", company: "Luxury Retail" },
    { quote: "The attention they gave to VIP delegates was above and beyond expectations. Personalised welcome notes, preferred seating arrangements, and private lounge access were all managed without being asked.", author: "Dr Chang W.", company: "Private Banking" },
    { quote: "Our board members and international guests sat through a five-course evening with live entertainment and not a single complaint about timing or quality. That is a genuine achievement.", author: "Helena T.", company: "Financial Services" },
    { quote: "The venue transformation Elluminate executed made even our regular guests feel like they were attending something extraordinary. The lighting design alone elevated the space completely.", author: "Frederick C.", company: "Property Development" },
    { quote: "Every vendor they engaged for our gala matched the premium standard we had set. It was clear they curate their supplier relationships with genuine care and high standards.", author: "Isabelle L.", company: "Hospitality & Tourism" },
    { quote: "Running a VIP gala requires anticipating needs before they are expressed. The Elluminate team did exactly that and our guests experienced a seamless evening from start to finish.", author: "Anthony N.", company: "Professional Services" },
  ],
  "grand-opening": [
    { quote: "Our flagship store opening drew a queue from 8am and Elluminate managed every element of the public-facing experience with professionalism and flair. The ribbon-cutting moment was perfectly staged.", author: "Vivian T.", company: "Retail" },
    { quote: "The crowd activation mechanics Elluminate built into our opening day created organic media moments that drove genuine footfall. The energy was infectious from the first minute of opening.", author: "Roland C.", company: "Food & Beverage" },
    { quote: "A grand opening has one chance to create a first impression and Elluminate understood that completely. Every transitional moment from arrival to departure was considered and well-executed.", author: "Annette H.", company: "Consumer Electronics" },
    { quote: "We had media, VIPs, and walk-in shoppers all present at the same time. Elluminate managed each group with the right level of attention without any cohort feeling neglected.", author: "Marcus L.", company: "Lifestyle Brand" },
    { quote: "The street-facing activation they designed pulled in passersby who had no prior awareness of the brand. Three days after opening we were already being written up in lifestyle media.", author: "Jasmine W.", company: "Beauty & Personal Care" },
    { quote: "From the countdown clock to the confetti finale, the opening sequence was a proper spectacle. Our staff were proud and our customers left with a strong first impression ingrained.", author: "Terry K.", company: "Technology" },
  ],
  "amazing-race": [
    { quote: "The Amazing Race format Elluminate ran for us had our teams navigating Singapore with real energy and strategy. The competitive edge pushed everyone to collaborate in ways we rarely see at work.", author: "Joyce T.", company: "Banking & Finance" },
    { quote: "Every checkpoint had a facilitator who kept the energy up and the challenge fair. It never devolved into chaos because the route and logistics were so thoroughly managed.", author: "Kelvin L.", company: "Technology" },
    { quote: "Our group of 150 split into teams and the Amazing Race brought out leaders and problem-solvers we did not know we had. The debrief afterwards connected it all back to real team dynamics.", author: "Priscilla C.", company: "Insurance" },
    { quote: "The route took us through different parts of Singapore and introduced the younger staff to places they had never explored. It was team building and cultural discovery in one full day.", author: "Brian H.", company: "Government Agency" },
    { quote: "Communication between teammates was what won the Amazing Race for our department and that lesson translated directly into how we work now. The parallel was not lost on our team.", author: "Angeline W.", company: "FMCG" },
    { quote: "It was genuinely unpredictable and exciting from start to finish. The tasks varied enough that different team members got to shine at different stages and nobody felt like dead weight.", author: "Darren T.", company: "Logistics & Shipping" },
  ],
  "csi-bones": [
    { quote: "Our team was fully locked in from the moment they received the case file. The storyline was credible enough to take seriously but fun enough that nobody was stressed about it.", author: "Sarah M.", company: "Technology" },
    { quote: "CSI-Bones worked brilliantly across a mixed group of analytical and creative thinkers. Everyone contributed differently and that diversity of input is what made the investigation so dynamic.", author: "Timothy L.", company: "Banking & Finance" },
    { quote: "The cast of suspects and the physical evidence made it feel genuinely immersive. Our team were comparing notes and debating theories like real detectives by the time they hit the second clue.", author: "Hui Lin C.", company: "Healthcare" },
    { quote: "The final reveal got the whole room shouting at once. It was one of those rare event moments that people will genuinely remember rather than just appreciate at the time.", author: "Nigel T.", company: "FMCG" },
    { quote: "We ran CSI-Bones for a cross-departmental group who do not normally work together and it gave them a shared challenge that broke down silos fast. The session design was clever.", author: "Preethi R.", company: "Insurance" },
    { quote: "Our quieter team members contributed the most crucial deductions during the investigation. CSI-Bones gave them a format where careful thinking beats volume and that revealed a lot about our team.", author: "Darius C.", company: "Pharmaceuticals" },
  ],
  "cultural-race": [
    { quote: "The Cultural Race gave our international team a way to learn about Singapore together that no classroom session could replicate. By the end they felt genuinely connected to the city.", author: "Natasha W.", company: "Multi-National Corporation" },
    { quote: "Our participants navigated through cultural districts, tried street food, and completed heritage challenges all in one afternoon. The joy of discovery was written on every face throughout.", author: "Farouk T.", company: "Education" },
    { quote: "We have run many team building activities but the Cultural Race stands out because it generated conversation that continued well past the event itself. People were sharing stories for days.", author: "Sandra C.", company: "Media & Communications" },
    { quote: "The route was thoughtfully mapped to expose participants to cultural touchpoints that felt authentic rather than touristy. Our overseas guests were particularly appreciative of the depth.", author: "Leonard H.", company: "Hospitality & Tourism" },
    { quote: "Every Cultural Race checkpoint had a skill challenge tied to a cultural theme and that combination of learning and doing made the experience stick in a way pure fun activities do not.", author: "Genevieve L.", company: "Consumer Goods" },
    { quote: "The Cultural Race was the ideal choice for our diverse workforce because it placed everyone on equal footing. Nobody had an unfair advantage, which made it a true team effort from start to finish.", author: "Ravi M.", company: "Technology" },
  ],
  "amongst-us": [
    { quote: "Amongst Us was the perfect activity for a team that loves games and competition. The social deduction mechanics created alliances and betrayals that kept everyone completely on edge.", author: "Benjamin T.", company: "Technology" },
    { quote: "The live-action version was far more intense than the digital game because you could actually see people's reactions. Reading teammates became a real skill during the session.", author: "Gloria H.", company: "FMCG" },
    { quote: "Our introverts surprised everyone during Amongst Us. The game gave quieter team members a way to be strategic and influential without having to shout over the group.", author: "Christopher L.", company: "Banking & Finance" },
    { quote: "The facilitators managed the game pacing brilliantly. Accusations flew thick and fast and somehow the structure kept it from becoming chaotic or feeling unfair to any participant.", author: "Pearl C.", company: "Insurance" },
    { quote: "We played four rounds and each one had a completely different outcome. The replayability of Amongst Us kept the team engaged long enough for real bonds to form naturally.", author: "Joshua T.", company: "Healthcare" },
    { quote: "There is genuine strategy underneath the surface chaos of Amongst Us. Our team came away with a better appreciation of how differently people read the exact same situation.", author: "Celia W.", company: "Logistics & Shipping" },
  ],
  "alice-in-motherland": [
    { quote: "Alice in Motherland was nothing like we expected and in the best possible way. The storytelling wove local culture into a classic narrative so naturally that every checkpoint felt like a real discovery.", author: "Mei Ling T.", company: "Education" },
    { quote: "Our mixed-culture team connected through the Singaporean local elements in a way that a generic activity never would have achieved. The setting made it personal and funny at the same time.", author: "Calvin H.", company: "Technology" },
    { quote: "The challenges were physically manageable but mentally engaging throughout. Every team had to think together to progress and that created exactly the kind of collaborative pressure we were looking for.", author: "Shirley C.", company: "FMCG" },
    { quote: "Alice in Motherland has a narrative arc that makes you care about finishing the story, not just winning the game. That motivation kept energy high right through to the last challenge.", author: "Alvin L.", company: "Banking & Finance" },
    { quote: "The humour mixed into the local references made our overseas colleagues feel included rather than excluded. They were laughing and learning about Singapore culture at the same time.", author: "Karen T.", company: "Pharmaceutical" },
    { quote: "The Elluminate team pitched Alice in Motherland as something genuinely different from the usual team building menu and they were absolutely right. We have not stopped recommending it since.", author: "Jonathan W.", company: "Insurance" },
  ],
  "battle-of-the-olympians": [
    { quote: "Battle of the Olympians gave our team a proper sporting day without favouring the naturally athletic. The variety of events meant every personality type had at least one moment to shine.", author: "Kenneth T.", company: "Manufacturing" },
    { quote: "The competition was fierce but the spirit throughout was generous. Our teams cheered for other departments in events they had already finished, which says everything about how well it was run.", author: "Kathrine L.", company: "Consumer Goods" },
    { quote: "We used Battle of the Olympians for our company Sports Day and the format was far more engaging than past years. Having Elluminate facilitate made an immediate and noticeable difference.", author: "Dominic H.", company: "Technology" },
    { quote: "The relay and team challenge round was our absolute favourite. The mix of physical and strategic elements meant every single person on the team mattered to the final score.", author: "Stephanie C.", company: "Banking & Finance" },
    { quote: "The live scoring board and announcements kept the competitive energy high all day. Nobody lost interest between events because there was always something to shout about.", author: "George W.", company: "FMCG" },
    { quote: "Post-event we saw departments who rarely interact naturally chatting and replaying moments from the Olympians challenges. The shared experience broke barriers in a way that meetings never could.", author: "Marianne T.", company: "Healthcare" },
  ],
  "archery-tag": [
    { quote: "Archery Tag was a hit from the very first second. The combination of competitive play and lightweight physical activity meant everyone from our sportiest to our most reluctant staff got fully involved.", author: "Samuel L.", company: "Technology" },
    { quote: "The safety briefing was thorough and put everyone at ease before the game began. Once the arrows started flying the group was too busy having fun to think about anything else.", author: "Joanne T.", company: "Banking & Finance" },
    { quote: "We ran Archery Tag as part of a full team day and it was the activity people kept wanting to return to. The Elluminate team reset targets quickly so the pace never dropped.", author: "Gerald C.", company: "FMCG" },
    { quote: "Strategy became really important once our group figured out how to protect each other. We started as individuals and finished as a coordinated unit, which was exactly what we needed.", author: "Pamela H.", company: "Healthcare" },
    { quote: "The foam-tipped arrows meant nobody was hesitant to play hard. Full commitment from the start, continuous laughter throughout, and genuine team pride at the end of each round.", author: "Adrian W.", company: "Insurance" },
    { quote: "Our team had done go-karting and laser tag before but Archery Tag gave us something completely different. The physical skill element made victories feel earned and worth celebrating.", author: "Natalie K.", company: "Real Estate" },
  ],
  "builder-cross": [
    { quote: "Builder Cross brought out creative problem-solvers we had never seen before in our team. The construction challenges forced everyone to plan, delegate, and build under real pressure.", author: "Evan T.", company: "Engineering & Construction" },
    { quote: "Our team had never done anything that required them to physically build something together and the learning that came out of it was immediately applicable to how we run our projects.", author: "Theresa L.", company: "Technology" },
    { quote: "The bridge-building challenge was our group's favourite moment. Arguments about design turned into efficient collaboration once the timer started and you could see strategies forming in real time.", author: "Michael C.", company: "Banking & Finance" },
    { quote: "Builder Cross felt challenging without being frustrating. The materials were clearly chosen to be workable under pressure and the facilitators gave just enough guidance to keep progress moving.", author: "Jenny H.", company: "Manufacturing" },
    { quote: "We connected the Builder Cross debrief to our product development cycle and the parallels were surprisingly accurate. It made the whole exercise feel genuinely relevant to our work.", author: "Francis W.", company: "Consumer Electronics" },
    { quote: "Teams that communicated well early had a clear edge by the end. For a group that sometimes struggles with alignment, watching that play out in real time was a powerful and memorable moment.", author: "Irene N.", company: "Logistics & Shipping" },
  ],
  "gel-blitz": [
    { quote: "Gel Blitz was the kind of physical team building that gets everyone off their chairs and genuinely laughing. The friendly firefight format erased hierarchy and left just pure team energy.", author: "Maxwell T.", company: "Technology" },
    { quote: "Safety was clearly the top priority throughout and knowing everyone was protected made the game more fun rather than more cautious. Players committed fully because the rules were solid.", author: "Siti H.", company: "Healthcare" },
    { quote: "The game scenarios Elluminate ran for us included different objectives beyond just shooting. Rescue missions and capture-the-flag variants kept the tactics fresh across the whole session.", author: "Adrian C.", company: "Financial Services" },
    { quote: "Groups of 30 can be hard to coordinate in physical activities but Gel Blitz has a natural team structure built into the game design itself. Elluminate used that framework really well.", author: "Elaine W.", company: "FMCG" },
    { quote: "Post-Gel Blitz energy is something else entirely. Staff were buzzing for the rest of the afternoon during our conference and the activity became all anyone talked about at dinner.", author: "Kenneth L.", company: "Logistics & Shipping" },
    { quote: "We chose Gel Blitz as a conference energiser and it completely exceeded expectations. It reset the group mood mid-afternoon and the sessions after it were noticeably more animated.", author: "Agnes T.", company: "Insurance" },
  ],
  "minute-to-win-it": [
    { quote: "Minute to Win It had our whole floor in tears of laughter within the first round. The challenges looked deceptively simple but the pressure of the clock made them genuinely difficult for everyone.", author: "Daisy T.", company: "Retail" },
    { quote: "We used Minute to Win It as an office party game and it was the best decision we made. The format works for any group size and every challenge is equal parts skill and luck.", author: "Ryan C.", company: "Technology" },
    { quote: "The variety of challenges Elluminate prepared meant we never had the same dynamic twice. Some rounds were physical, some required focus, and some were pure chaos and all of it was hilarious.", author: "Joanna L.", company: "Banking & Finance" },
    { quote: "Our quieter team members thrived in Minute to Win It because some challenges genuinely favour patience and steadiness over brute force. It was a revelation for some of our managers.", author: "Bobby H.", company: "FMCG" },
    { quote: "The facilitators kept the audience as engaged as the players with running commentary and live reactions. Even the people waiting for their turn were having the time of their lives.", author: "Ying Ling T.", company: "Healthcare" },
    { quote: "Minute to Win It requires zero preparation from participants and that is part of its brilliance. People arrive, get briefed in minutes, and within the first challenge are fully committed.", author: "Nicholas W.", company: "Insurance" },
  ],
  "monopoly-dash": [
    { quote: "Monopoly Dash combined the strategy our finance team loves with the physical energy of a field day. The blend of the two kept both the competitive and the casual players equally hooked.", author: "Clarence T.", company: "Financial Services" },
    { quote: "Watching teams negotiate, barter, and strategise in real life was far more entertaining than any board game version. The live format made the stakes feel entirely genuine.", author: "Winnie H.", company: "Technology" },
    { quote: "Our team were shocked by how quickly they had to adapt their strategy as the board changed around them. The pressure created exactly the kind of agile thinking we value at work.", author: "Philip C.", company: "Consulting" },
    { quote: "The physical challenges to unlock properties added a dimension that pure strategy games miss. It rewarded both brains and hustle, which made the team varied in their contributions throughout.", author: "Bernice L.", company: "FMCG" },
    { quote: "Monopoly Dash triggered a debrief conversation about negotiation and resource allocation that our HR team said was the most organic learning moment they had seen in a team building format.", author: "Trevor W.", company: "Banking & Finance" },
    { quote: "The facilitators managed the scoring and challenge stations so smoothly that teams never felt held up. The pace was exactly right for keeping competitive energy alive across the two hours.", author: "Joyce K.", company: "Consumer Goods" },
  ],
  "nerfwar": [
    { quote: "Nerf War was the most fun our team has had at a company event in years. The moment the first foam dart flew, all professional distance disappeared and genuine teamwork took over.", author: "Chester T.", company: "Technology" },
    { quote: "The tactical element surprised people who came in expecting pure chaos. By round two our team was moving in coordinated patterns and communicating under fire with real intent.", author: "Lydia H.", company: "Banking & Finance" },
    { quote: "Kids in adult bodies, that is what our group became during Nerf War. The Elluminate team kept the games varied enough that strategy kept evolving across the whole session.", author: "Ronnie C.", company: "FMCG" },
    { quote: "We ran Nerf War as a conference break and it completely reset the energy in the room. Staff came back to the afternoon sessions refreshed, connected, and in a noticeably better mood.", author: "Patricia L.", company: "Insurance" },
    { quote: "The fortress-building phase before combat started was unexpectedly the most collaborative part of the session. Teams had to make quick decisions together that mattered a lot once the fight began.", author: "Stewart W.", company: "Manufacturing" },
    { quote: "Both first-timers and foam-dart enthusiasts found equal reasons to be excited during Nerf War. The Elluminate team calibrated the game rules well enough to balance competitive skill levels.", author: "Irene T.", company: "Healthcare" },
  ],
  "running-man": [
    { quote: "Running Man had our team sprinting across the area, tearing name tags, and shouting at each other in the best possible way. Nothing breaks professional reserve quite like being chased.", author: "Arnold T.", company: "Technology" },
    { quote: "The format is familiar enough from TV that rules need minimal explanation but the physical version added a whole new layer of adrenaline and team loyalty that screens cannot replicate.", author: "Grace L.", company: "FMCG" },
    { quote: "Post-Running Man we had teams buying each other drinks and replaying their best moments over dinner. It is the rare activity that generates genuine friendship rather than just shared memories.", author: "Victor C.", company: "Banking & Finance" },
    { quote: "Our HR team chose Running Man for Sports Day and it was an inspired choice. Competitive, inclusive, and endlessly funny from the very first chase to the final name-tag reveal.", author: "Eunice H.", company: "Consumer Goods" },
    { quote: "The debrief Elluminate ran after Running Man connected the chase-and-defend mechanics to how teams protect each other in a real work context. It was surprisingly meaningful for what looked like pure fun.", author: "Bryan W.", company: "Healthcare" },
    { quote: "Energy stays incredibly high throughout Running Man because even eliminated players remain involved. It never became a spectator sport for anyone which is a testament to how well the format is run.", author: "Janice K.", company: "Insurance" },
  ],
  "sotong-game": [
    { quote: "Sotong Game delivered exactly the kind of unpredictable chaos our team needed to shake off a stressful quarter. The format is impossible to over-think and that is entirely the point.", author: "Herman T.", company: "Technology" },
    { quote: "The game is brilliantly designed to put everyone at equal footing regardless of fitness or seniority. Our most competitive staff and our most relaxed staff were equally entertained throughout.", author: "Janice L.", company: "Banking & Finance" },
    { quote: "There is genuine strategy underneath the surface randomness of Sotong Game. Once our team figured that out the energy shifted completely and half-hearted players became fully committed.", author: "Nelson H.", company: "FMCG" },
    { quote: "We ran Sotong Game with a multigenerational group and both the youngest and oldest participants were having the time of their lives. That kind of genuine inclusivity is rare in physical activities.", author: "Angela C.", company: "Healthcare" },
    { quote: "The laughter during Sotong Game was the loudest we have heard at any company event. Something about the absurd challenges makes people shed self-consciousness almost instantly.", author: "Francis W.", company: "Consumer Goods" },
    { quote: "Our team had never done Sotong Game and had no expectations going in. That made the first round a genuine surprise and the subsequent rounds progressively more competitive as they found their footing.", author: "Serene T.", company: "Insurance" },
  ],
  "tag-tical-laser-teambuilding": [
    { quote: "Tag-tical Laser Team Building was more strategic than we expected. Our teams were devising game plans between rounds and the communication that required was directly relevant to how we work.", author: "Eugene T.", company: "Technology" },
    { quote: "The laser tag format Elluminate runs is not the usual free-for-all. The team objectives and round structures made it a genuine collaboration exercise from first mission to last.", author: "Rebecca L.", company: "Banking & Finance" },
    { quote: "Our most reserved team members were fully animated during the laser rounds. Something about the low-light environment and team missions removes the usual professional inhibitions.", author: "Christopher H.", company: "Insurance" },
    { quote: "The mission briefings between rounds gave our group a chance to regroup and strategise, which is when we saw real leadership behaviours emerge naturally across the team.", author: "Flora C.", company: "Consulting" },
    { quote: "Post-session feedback was unanimously positive. Staff said it was the most out-of-the-ordinary company event they had attended and that is exactly what we wanted to hear.", author: "Nelson W.", company: "FMCG" },
    { quote: "The combination of physical activity, tactical thinking, and genuine competition made it the most talked-about event we have run in two years. Team day bookings for next year are already in.", author: "Alicia T.", company: "Manufacturing" },
  ],
  "treasure-heist": [
    { quote: "Treasure Heist had our team coordinating like a real undercover operation within minutes. The tension of the timer combined with the puzzle mechanics created exactly the right level of pressure.", author: "Philip T.", company: "Banking & Finance" },
    { quote: "The multi-stage mission structure meant no single person could solve it alone. Communication was non-negotiable and that is precisely the dynamic we were trying to build in the team.", author: "Melissa H.", company: "Technology" },
    { quote: "Our group came into Treasure Heist sceptical about team building in general and left raving about it. The narrative quality of the mission made the investment of effort feel genuinely meaningful.", author: "Jason C.", company: "FMCG" },
    { quote: "Every clue in Treasure Heist required a different skill set to crack. Analytical, creative, and physically active team members all had their defining moment and it felt genuinely inclusive.", author: "Sheryl L.", company: "Insurance" },
    { quote: "The final heist sequence where all the clues converged was extraordinary. Our team were shouting, pointing, running between stations, and in that moment they were completely unified.", author: "Gregory W.", company: "Healthcare" },
    { quote: "Treasure Heist is the best balance of challenge and fun we have found in any team building format. Hard enough to require real cooperation, rewarding enough that everyone was addicted to finishing.", author: "Cynthia K.", company: "Consumer Goods" },
  ],
  "amazing-race-virtual": [
    { quote: "Virtual Amazing Race gave our remote team a shared mission that felt genuinely exciting through a screen. The pace challenges and global clues had everyone's cameras on and conversations buzzing.", author: "Caroline T.", company: "Technology" },
    { quote: "We have tried many virtual team activities and this was the first one where everyone genuinely competed rather than sat back and watched. The race format creates urgency that works perfectly online.", author: "Derek L.", company: "Banking & Finance" },
    { quote: "Our team spans three time zones and bringing everyone into the same virtual race was a unifying experience we had not managed to achieve in months. Elluminate made it feel personal.", author: "Natalie C.", company: "Multi-National Corporation" },
    { quote: "The checkpoints required coordination between team members in different locations and figuring out how to divide and conquer from home was a real and enjoyable strategic challenge.", author: "Trevor H.", company: "Insurance" },
    { quote: "Even team members who are usually quiet online were fully engaged and vocal during the virtual race. The competitive format removes the hesitancy that regular video calls tend to create.", author: "Joanne W.", company: "FMCG" },
    { quote: "The post-race debrief was just as valuable as the race itself. Elluminate facilitated a reflection on how each team's communication style affected their performance and the insights were genuinely useful.", author: "Alvin K.", company: "Consulting" },
  ],
  "fit-in-your-team-virtual": [
    { quote: "Fit in Your Team Virtual was the most energetic online event we have run. The fitness challenges through a screen created a shared physical experience that remote teams rarely get to have.", author: "Michelle T.", company: "Technology" },
    { quote: "Our WFH team needed a reason to move and laugh together and this delivered both. It became competitive quickly but in a way that brought people closer rather than divided them.", author: "Raymond L.", company: "Banking & Finance" },
    { quote: "The variety of exercise formats meant people with different fitness levels all had challenges they could meaningfully contribute to. Nobody felt excluded or out of their depth at any point.", author: "Sandra C.", company: "Healthcare" },
    { quote: "We scheduled Fit in Your Team Virtual as a midweek break from back-to-back meetings and it completely revitalised the team's energy for the rest of the day. Already planning to make it recurring.", author: "Gary H.", company: "Insurance" },
    { quote: "The team scoring made even the lightest exercises feel important and that competitive edge is what kept engagement high from the warm-up all the way through to the final challenge.", author: "Penny W.", company: "FMCG" },
    { quote: "Running a physical wellness event online sounded risky but Elluminate made it feel completely natural. The pacing, the facilitation, and the encouragement were exactly right for a WFH setting.", author: "Terence K.", company: "Consumer Goods" },
  ],
  "the-gameshow-experience-virtual": [
    { quote: "The Virtual Gameshow Experience brought the energy of a live studio show right into our conference call. Our team was standing up, shouting answers, and cheering louder than at any in-person event.", author: "Grace T.", company: "Technology" },
    { quote: "The production quality of the virtual gameshow surprised everyone in the session. Professional hosting, sharp graphics, and tight pacing made it feel far more polished than typical online activities.", author: "Edmund L.", company: "Banking & Finance" },
    { quote: "We ran the Gameshow Experience as a year-end celebration for 120 remote staff and the energy was electric from round one. It is the closest we have come to recreating a real party atmosphere online.", author: "Lorraine C.", company: "Insurance" },
    { quote: "The range of quiz categories meant everyone had opportunities to contribute regardless of their expertise. Our operational staff and our management team were genuinely on equal footing.", author: "Justin H.", company: "Logistics & Shipping" },
    { quote: "I expected people to drop in and out half-heartedly but nobody left the call once the gameshow started. The format creates a social contract that keeps everyone fully present online.", author: "Helena W.", company: "Consumer Goods" },
    { quote: "Even our most screen-fatigued team members forgot they were on a video call once the rounds began. That is the magic of a well-facilitated virtual gameshow and Elluminate delivers it every time.", author: "Oliver T.", company: "FMCG" },
  ],
  "the-great-zodiac-hunt-virtual": [
    { quote: "The Great Zodiac Hunt had our team travelling virtually across Asia and solving culturally themed puzzles together. The cultural richness of the content made it feel genuinely educational alongside the fun.", author: "Janice T.", company: "Multi-National Corporation" },
    { quote: "Our diverse team loved the zodiac framing because it gave everyone a connection point regardless of cultural background. The puzzles required collaboration in a way that transcended individual knowledge.", author: "Kelvin L.", company: "Technology" },
    { quote: "The virtual hunt format kept our distributed team in constant communication rather than working in parallel. Every clue required input from different members and that forced the interaction we needed.", author: "Cheryl H.", company: "Banking & Finance" },
    { quote: "We chose the Zodiac Hunt for our Lunar New Year celebration and it was the perfect thematic choice. The content honoured the tradition while being accessible and engaging for non-Chinese participants.", author: "Tommy C.", company: "Consumer Goods" },
    { quote: "The pacing of clue releases kept every team on their toes throughout. There was no time to plateau and the progressive difficulty kept everyone at full attention right up to the final reveal.", author: "Sandra W.", company: "Insurance" },
    { quote: "Post-event our team talked about specific puzzle moments and zodiac facts long after the call ended. When a virtual event generates offline conversation you know it genuinely landed well.", author: "David K.", company: "FMCG" },
  ],
  "the-nuclear-fallout-escape-room-virtual": [
    { quote: "Nuclear Fallout Escape Room was the most immersive virtual experience our team has done together. The countdown timer and mission narrative created genuine urgency that you would not normally feel through a screen.", author: "Bernard T.", company: "Technology" },
    { quote: "The puzzles were genuinely challenging and required real coordination across our remote team. Every person had a role and nobody could sit back and coast, which is exactly what we needed.", author: "Patrice L.", company: "Banking & Finance" },
    { quote: "The mid-session complication that the team did not see coming flipped our whole strategy and created a memorable moment the team still references. The Elluminate team designed that twist very cleverly.", author: "Steven H.", company: "Insurance" },
    { quote: "Running an escape room virtually sounded like a compromise but this experience felt purpose-built for the format. The digital puzzle delivery and synchronised rooms worked better than we imagined.", author: "Leanne C.", company: "FMCG" },
    { quote: "The debrief Elluminate ran after the escape room connected the communication breakdowns during the final high-pressure minutes to real workflow patterns. It was one of our most useful post-event reflections.", author: "Winston W.", company: "Consulting" },
    { quote: "Nuclear Fallout kept our team on the edge of their seats for 60 minutes online. Post-event chat was buzzing for hours and several people have already asked if we can run it again next quarter.", author: "Rebecca K.", company: "Healthcare" },
  ],
  "the-patriot-act-virtual": [
    { quote: "The Patriot Act is a genuinely sophisticated virtual experience. The spy narrative gives everyone a role and a mission and that sense of personal stakes keeps engagement high throughout the session.", author: "Nelson T.", company: "Technology" },
    { quote: "Our team was divided into cells and had to figure out who to trust and how to coordinate without full information. The parallels to real workplace complexity were unexpectedly sharp and useful.", author: "Vanessa L.", company: "Banking & Finance" },
    { quote: "The Patriot Act pushed our team in a way that other virtual activities simply did not. Real information asymmetry meant you had to listen and communicate carefully to make any progress at all.", author: "Ian H.", company: "Consulting" },
    { quote: "Nothing reveals how a team really communicates like giving them incomplete information and a hard deadline. The Patriot Act showed us things about our team's working patterns that were both surprising and useful.", author: "Gillian C.", company: "Insurance" },
    { quote: "The facilitators kept the espionage immersion going throughout without making it feel forced. By the end of the mission our team had bought fully into the fiction and were genuinely invested in the outcome.", author: "Edmund W.", company: "FMCG" },
    { quote: "This was the most strategically engaging virtual event we have run as a company. Teams that communicated clearly had an obvious advantage and the debrief that followed was one of our most productive ever.", author: "Diane K.", company: "Government Agency" },
  ],
  "tomb-raider-king-treasure-hunt-virtual": [
    { quote: "Tomb Raider King was the virtual adventure our team needed to reconnect after months of remote work. The exploration narrative and puzzle mechanics created a sense of shared journey that ordinary video calls cannot.", author: "Pamela T.", company: "Technology" },
    { quote: "The puzzle design was inventive and genuinely required different kinds of thinking across the team. Visual thinkers, analytical problem-solvers, and creative types all found their moment in the treasure hunt.", author: "Ivan L.", company: "Banking & Finance" },
    { quote: "Our multi-country team competed in the virtual treasure hunt and for once the time zone difference did not matter. The mission framing made us feel like we were exploring together regardless of location.", author: "Fiona H.", company: "Multi-National Corporation" },
    { quote: "Every clue release in Tomb Raider King raised the energy level noticeably. Teams were messaging each other between facilitated segments to coordinate theories, which was exactly the informal communication we wanted to build.", author: "Shayne C.", company: "Insurance" },
    { quote: "The narrative quality of the adventure kept our team engaged in a way that a standard quiz would not. By the end everyone felt like they had experienced something together rather than just answered questions.", author: "Marcus W.", company: "FMCG" },
    { quote: "The reveal at the end of Tomb Raider King brought the whole team together for a genuinely celebratory moment. When a virtual event produces real group emotion you know the design was right.", author: "Elsa K.", company: "Consumer Goods" },
  ],
  "grand-christmas-delivery": [
    { quote: "Grand Christmas Delivery was the most festive and fun virtual event we have organised for our team. The format was easy enough for everyone to join immediately but competitive enough to keep energy high all session.", author: "Angela T.", company: "Technology" },
    { quote: "Our team had been running the same virtual Christmas party for years and this year Elluminate completely transformed it. Grand Christmas Delivery gave everyone a shared mission and the festive joy came through genuinely.", author: "Timothy L.", company: "Banking & Finance" },
    { quote: "The Christmas theming was warm and inclusive without being overwhelming. Both those who celebrate Christmas and those who do not felt equally welcomed within the Grand Christmas Delivery format.", author: "Serene H.", company: "Consumer Goods" },
    { quote: "We ran Grand Christmas Delivery with 80 remote staff and the coordination it required created the closest thing to a real office Christmas party we have managed since going fully remote.", author: "Jonathan C.", company: "Insurance" },
    { quote: "I liked that the delivery missions had genuine stakes and team consequences. It was not just festive decoration on a quiz and there was real strategy involved, which is what kept people fully hooked.", author: "Deborah W.", company: "FMCG" },
    { quote: "The warmth of the Grand Christmas Delivery session carried into our entire end-of-year period. Teams were noticeably kinder to each other in the weeks that followed and I do attribute that to the genuine connection the event created.", author: "Patrick K.", company: "Healthcare" },
  ],
  "local-retreats": [
    { quote: "Our local retreat in Sentosa with Elluminate felt like a proper getaway without any overseas logistics. The combination of facilitated team sessions and leisure time struck exactly the right balance.", author: "Teresa T.", company: "Banking & Finance" },
    { quote: "For a team that is always on the go, having two focused days away from the office created more genuine reflection than months of in-office meetings. The retreat structure delivered that fully.", author: "Fredrick L.", company: "Technology" },
    { quote: "Elluminate handled everything from accommodation coordination to the activity schedule and dining arrangements. Our team just arrived and stayed fully present throughout, which is what a retreat should feel like.", author: "Joyce H.", company: "FMCG" },
    { quote: "The mix of structured workshops and unstructured bonding time over the two days felt genuinely therapeutic. Our senior team left with renewed energy and a clearer sense of shared purpose.", author: "Winston C.", company: "Insurance" },
    { quote: "We wanted a local retreat that felt special without the complexity of leaving Singapore and Elluminate absolutely delivered. The venue choices and programme content made it feel like a real retreat.", author: "Geraldine W.", company: "Healthcare" },
    { quote: "The facilitation quality of the workshop sessions during the retreat elevated it beyond a standard team outing. Real conversations happened and real decisions were made in that two-day space.", author: "Austin K.", company: "Consulting" },
  ],
  "mbti": [
    { quote: "The MBTI session Elluminate facilitated changed how our team members understand each other's working styles. The debrief was honest, insightful, and immediately actionable for every participant.", author: "Lily T.", company: "Technology" },
    { quote: "Our leadership team did MBTI together and the workshop surfaced communication preferences that explained years of minor friction. Having that naming framework has made a real difference since.", author: "Marcus L.", company: "Banking & Finance" },
    { quote: "The facilitator had a gift for presenting type differences in ways that felt empowering rather than limiting. Staff left the MBTI session curious about their colleagues rather than categorising each other.", author: "Cynthia H.", company: "Insurance" },
    { quote: "We used MBTI as the basis for a team effectiveness programme and the insights from that first session informed every conversation we had in the months following. It was a strong foundation.", author: "Derek C.", company: "Consulting" },
    { quote: "The Elluminate MBTI facilitator went beyond the four-letter type and helped us understand how our team's collective profile creates both strengths and blind spots. That systems-level view was the most valuable part.", author: "Priya W.", company: "Healthcare" },
    { quote: "Our cross-functional team had struggled to agree on process for years. After MBTI we finally had language for why and the workshop gave us tools to bridge those differences constructively.", author: "Bryan K.", company: "FMCG" },
  ],
  "disc": [
    { quote: "The DiSC workshop Elluminate ran for our sales team gave us a shared vocabulary for different work styles that we still use in our Monday morning standups. The practical application was excellent.", author: "Terence T.", company: "Financial Services" },
    { quote: "Our team was sceptical about personality profiling tools but the DiSC facilitation won them over by focusing on behaviour rather than character. Nobody felt labelled and everyone felt understood.", author: "Eileen L.", company: "Technology" },
    { quote: "Post-DiSC our team meetings became more productive because we started adapting communication styles to suit the person rather than expecting everyone to operate the same way.", author: "Gerald H.", company: "Banking & Finance" },
    { quote: "The role-play scenarios Elluminate incorporated into the DiSC workshop made the theory immediately practical. Participants were applying the concepts by the end of the morning session confidently.", author: "Pamela C.", company: "Consulting" },
    { quote: "DiSC helped our composite team of contractors and permanent staff find a shared operating language quickly. That kind of baseline understanding would normally take months to develop naturally.", author: "Raymond W.", company: "Engineering" },
    { quote: "Our HR team has recommended the Elluminate DiSC programme to four other departments since we ran ours. The facilitator quality and the industry-customised materials made all the difference.", author: "Nancy K.", company: "Healthcare" },
  ],
  "ocean": [
    { quote: "The OCEAN model workshop was the most nuanced personality profiling session our team has experienced. The five-dimension framework gave us a far richer picture of individual differences than binary type tools.", author: "Sophia T.", company: "Consulting" },
    { quote: "Elluminate's facilitation of the OCEAN model went deep into the research behind the framework which gave the results genuine credibility with our analytically-minded team from the start.", author: "Bernard L.", company: "Technology" },
    { quote: "The OCEAN workshop helped our team understand not just what their scores mean but why those trait profiles lead to different strengths and friction points in a team context.", author: "Helena H.", company: "Banking & Finance" },
    { quote: "Running OCEAN profiles as part of our talent development programme gave us a more sophisticated language for coaching conversations. The framework is rigorous enough to be taken seriously in professional settings.", author: "Leon C.", company: "Healthcare" },
    { quote: "The Elluminate facilitator made the Big Five accessible without dumbing it down. Participants felt they were receiving a serious psychological framework rather than a pop quiz personality test.", author: "Joanna W.", company: "Education" },
    { quote: "Team members who had done MBTI or DiSC before found OCEAN added dimensions they had not previously considered. The multi-trait lens revealed profile combinations that explained longstanding team dynamics.", author: "Patrick K.", company: "FMCG" },
  ],
  "mass-talks": [
    { quote: "The keynote Elluminate sourced for our all-staff townhall cut through like nothing else we had tried. The speaker understood our industry and tailored the content to our company reality in a way that genuinely landed.", author: "Irene T.", company: "Manufacturing" },
    { quote: "Our staff survey after the mass talk showed the highest engagement scores we have ever recorded for a company event. The message was relevant, the delivery was compelling, and the timing was right.", author: "Desmond L.", company: "Banking & Finance" },
    { quote: "We asked Elluminate to help us find a speaker who could inspire without being preachy and they matched us perfectly. The talk generated conversations that continued across departments for weeks.", author: "Charlene H.", company: "Technology" },
    { quote: "The AV production, staging, and run of show for our 800-person mass talk were managed flawlessly. Our invited guest speaker specifically commented on the event quality during the post-event thank you.", author: "Raymond C.", company: "Insurance" },
    { quote: "Our staff came in expecting a compulsory HR session and left genuinely moved. The combination of speaker quality and production value made it feel like an event they chose to attend.", author: "Priya W.", company: "Consumer Goods" },
    { quote: "Elluminate took the brief for our mental wellness mass talk seriously and found a speaker who blended evidence and personal narrative in exactly the right proportion. Staff gave overwhelmingly positive feedback.", author: "Jason K.", company: "Healthcare" },
  ],
  "workshops": [
    { quote: "The leadership workshop Elluminate facilitated was the most practically useful training our management team has done this year. The frameworks introduced stuck because they were applied to our real scenarios.", author: "Lydia T.", company: "Technology" },
    { quote: "The facilitator read the room extremely well and adjusted the pace and depth of content based on how the group was responding. It never felt like a fixed-track presentation being read at us.", author: "Simon L.", company: "Banking & Finance" },
    { quote: "Our team walked away with clear action items and accountability structures agreed during the workshop itself. The follow-through framing they built in made it far more likely that changes would actually stick.", author: "Florence H.", company: "Insurance" },
    { quote: "We have run workshops with external facilitators before and the quality difference with Elluminate was immediately noticeable. The pre-work, session design, and post-workshop materials were all above the usual standard.", author: "James C.", company: "Consulting" },
    { quote: "The psychological safety they established in the first 30 minutes allowed honest conversations we had never managed to have in any formal training setting. That discussion was the most useful part of the day.", author: "Penny W.", company: "Healthcare" },
    { quote: "Our HR team said the cross-team communication workshop was the single most cited development activity in this year's performance reviews. That kind of result speaks clearly for itself.", author: "Norman K.", company: "Manufacturing" },
  ],
  "youth-camps": [
    { quote: "Elluminate ran our school's yearly camp with a level of energy and professionalism that made students genuinely excited to participate. The facilitators connected with teenagers authentically without trying too hard.", author: "Ms Lee T.", company: "Secondary School" },
    { quote: "Our students came back from the youth camp with stronger friendships and a noticeable shift in how they relate to classmates they previously did not know well. The activities were well-matched to that goal.", author: "Mr Tan L.", company: "Junior College" },
    { quote: "The youth camp design balanced challenge with psychological safety perfectly. Students were pushed outside their comfort zones in ways that were supportive rather than stressful or overwhelming.", author: "Ms Chua H.", company: "Primary School" },
    { quote: "Our student leadership group ran their camp with Elluminate and came back with a shared vision and the confidence to lead their cohort through the year. The facilitation was genuinely transformative.", author: "Mr Rajan C.", company: "Polytechnic" },
    { quote: "The values-building components of the youth camp were woven into the activities rather than delivered as standalone lectures. Students absorbed the lessons because they experienced them rather than just heard about them.", author: "Ms Wong W.", company: "ITE" },
    { quote: "Elluminate handled our camp for 200 students with remarkable smoothness throughout. Safety, logistics, and programme quality were all at the highest standard and every student I spoke to said it was the best camp they had attended.", author: "Mr Lim K.", company: "Secondary School" },
  ],
  "corporate-days": [
    { quote: "Elluminate designed a full-day corporate learning event for our 500-person company that kept energy and engagement high from morning to close. Moving between formats throughout the day was the key to sustaining it.", author: "Bernadette T.", company: "Financial Services" },
    { quote: "Our corporate day normally runs as an obligation that staff endure. This year with Elluminate the feedback forms were overwhelmingly positive and staff were asking when the next one is before the day was even over.", author: "Raymond L.", company: "Technology" },
    { quote: "The blend of learning content, team activities, and celebratory elements gave our corporate day a purpose that resonated across all levels. Nothing felt like filler or padding.", author: "Jessica H.", company: "Insurance" },
    { quote: "Managing a full corporate day for multiple departments with different roles and expectations is logistically complex. Elluminate handled every strand with the same care and nothing was deprioritised.", author: "Michael C.", company: "Manufacturing" },
    { quote: "The keynote, workshops, and team challenges were sequenced in a way that built on each other throughout the day. It felt like a coherent programme rather than a collection of separate activities.", author: "Karen W.", company: "FMCG" },
    { quote: "Our corporate day had a leadership recognition segment where managers were celebrated publicly in front of their teams. The ceremony Elluminate designed for that moment was dignified, warm, and exactly right.", author: "Patrick K.", company: "Consumer Goods" },
  ],
  "incentive-travel": [
    { quote: "Elluminate managed our top performer trip to Japan end-to-end and the experience was flawless. From the curated itinerary to the daily logistics, every detail reflected how much the company values its best people.", author: "Jennifer T.", company: "Financial Services" },
    { quote: "Our incentive trip participants have returned every year saying it was the best trip they have ever been on. Elluminate's local expertise in each destination is what makes the difference in experience quality.", author: "David L.", company: "Technology" },
    { quote: "The incentive travel programme Elluminate designed served both as a reward and a motivator for the rest of our team. Social posts from participants made everyone back home aspire to qualify next year.", author: "Sandra H.", company: "FMCG" },
    { quote: "Managing group travel for 50 high-performing staff requires precision and anticipation at every stage. Elluminate's team handled every contingency with a calm that never let the guests sense any challenge behind the scenes.", author: "Clifford C.", company: "Insurance" },
    { quote: "The experiences Elluminate curated for our incentive trip were deeply local and personal rather than generic tourist activities. Our participants left feeling they had genuinely experienced each destination.", author: "Wendy W.", company: "Consumer Goods" },
    { quote: "Our top performers expect and deserve a premium experience and Elluminate consistently delivers it without the inflated price tag that luxury travel agencies often charge. The value for quality is excellent.", author: "Terrence K.", company: "Banking & Finance" },
  ],
};

// Build a testimonials replacement string for a service
function buildTestimonialsBlock(testimonials) {
  const lines = testimonials.map(
    (t) =>
      `      { quote: "${t.quote}", author: "${t.author}", company: "${t.company}" },`
  );
  return `    testimonials: [\n${lines.join("\n")}\n    ]`;
}

// For each service key, replace the testimonials block in the file
for (const [serviceKey, testimonials] of Object.entries(newTestimonials)) {
  // Find the service block start and end
  // We search for the testimonials array inside the service's block
  // Strategy: find the service key, then find the next "testimonials: [" and its closing "],"

  const serviceKeyPattern = `"${serviceKey}": {`;
  const serviceStart = content.indexOf(serviceKeyPattern);
  if (serviceStart === -1) {
    console.warn(`Service key not found: ${serviceKey}`);
    continue;
  }

  // Find next "testimonials: [" after serviceStart
  const testimonialsStart = content.indexOf("    testimonials: [", serviceStart);
  if (testimonialsStart === -1) {
    console.warn(`testimonials not found for: ${serviceKey}`);
    continue;
  }

  // Find the matching closing "]," by counting brackets
  let searchPos = testimonialsStart + "    testimonials: [".length;
  let depth = 1;
  let inString = false;
  let stringChar = "";
  let i = searchPos;

  while (i < content.length && depth > 0) {
    const ch = content[i];
    if (inString) {
      if (ch === "\\" ) {
        i += 2; // skip escaped char
        continue;
      }
      if (ch === stringChar) inString = false;
    } else {
      if (ch === '"' || ch === "'") {
        inString = true;
        stringChar = ch;
      } else if (ch === "[") {
        depth++;
      } else if (ch === "]") {
        depth--;
      }
    }
    i++;
  }

  // i is now right after the closing "]"
  const testimonialsEnd = i;

  // Extract old block
  const oldBlock = content.slice(testimonialsStart, testimonialsEnd);

  // Build new block
  const newBlock = buildTestimonialsBlock(testimonials);

  // Replace
  content = content.slice(0, testimonialsStart) + newBlock + content.slice(testimonialsEnd);
  console.log(`Updated testimonials for: ${serviceKey}`);
}

fs.writeFileSync(filePath, content, "utf8");
console.log("Done! All testimonials updated.");
