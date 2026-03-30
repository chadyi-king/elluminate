/**
 * Script to replace all recentEvents arrays in servicesData.ts 
 * with ~200 unique company names distributed across all services.
 * Run with: bun scripts/generate-recent-events.ts
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ── 200 unique Singapore-relevant company names ──
const companies = [
  "DBS Bank", "OCBC Bank", "UOB Group", "Singtel", "Grab Holdings",
  "Shopee Singapore", "NTUC Enterprise", "GovTech Singapore", "Sentosa Development Corporation", "SP Group",
  "SMRT Corporation", "Prudential Singapore", "Marina Bay Sands", "CapitaLand Group", "Singapore Airlines",
  "Changi Airport Group", "StarHub", "POSB", "Great Eastern Life", "AIA Singapore",
  "HSBC Singapore", "Standard Chartered SG", "Maybank Singapore", "M1 Limited", "Keppel Corporation",
  "SembCorp Industries", "Mapletree Investments", "Ascendas Reit", "ComfortDelGro", "SBS Transit",
  "Frasers Property", "City Developments Limited", "Singapore Press Holdings", "Mediacorp", "Razer Inc",
  "Sea Limited", "Lazada Singapore", "Foodpanda Singapore", "Deliveroo Singapore", "PropertyGuru",
  "Carousell", "Ninja Van", "RedMart", "ShopBack", "Circles.Life",
  "Ninjavan", "Xendit", "Funding Societies", "Endowus", "StashAway",
  "Synapxe", "Integrated Health Information Systems", "National University Hospital", "Singapore General Hospital", "KK Women's Hospital",
  "Changi General Hospital", "National Heart Centre", "SingHealth", "Parkway Pantai", "Raffles Medical Group",
  "Thomson Medical", "Mount Elizabeth Hospital", "Fullerton Healthcare", "Ministry of Education", "Ministry of Defence",
  "Ministry of Health", "Ministry of Manpower", "Housing Development Board", "Jurong Town Corporation", "Building Construction Authority",
  "Land Transport Authority", "Maritime Port Authority", "National Parks Board", "PUB Singapore", "NEA Singapore",
  "Enterprise Singapore", "IMDA Singapore", "EDB Singapore", "A*STAR Singapore", "NUS",
  "NTU Singapore", "SMU Singapore", "SUTD", "SIT Singapore", "Republic Polytechnic",
  "Ngee Ann Polytechnic", "Singapore Polytechnic", "Temasek Polytechnic", "Nanyang Polytechnic", "ITE College",
  "Deloitte Singapore", "PwC Singapore", "Ernst & Young SG", "KPMG Singapore", "Accenture Singapore",
  "McKinsey Singapore", "Boston Consulting Group SG", "Bain & Company SG", "SAP Singapore", "Salesforce Singapore",
  "Google Singapore", "Meta Singapore", "Amazon Singapore", "Microsoft Singapore", "Apple Singapore",
  "IBM Singapore", "Oracle Singapore", "Cisco Singapore", "HP Singapore", "Dell Technologies SG",
  "Samsung Electronics SG", "Sony Singapore", "Panasonic Singapore", "LG Electronics SG", "Huawei Singapore",
  "ByteDance Singapore", "TikTok Singapore", "Alibaba Singapore", "Tencent Singapore", "Binance Singapore",
  "JPMorgan Singapore", "Goldman Sachs SG", "Citibank Singapore", "Barclays Singapore", "BNP Paribas SG",
  "Credit Suisse SG", "Deutsche Bank SG", "Morgan Stanley SG", "Bank of America SG", "UBS Singapore",
  "Manulife Singapore", "Aviva Singapore", "Zurich Insurance SG", "Tokio Marine SG", "FWD Insurance SG",
  "Income Insurance", "Etiqa Insurance SG", "MSIG Insurance SG", "Sompo Insurance SG", "QBE Insurance SG",
  "Shell Singapore", "ExxonMobil Singapore", "Chevron Singapore", "Total Energies SG", "BP Singapore",
  "Olam International", "Wilmar International", "Golden Agri-Resources", "Glencore Singapore", "Trafigura Singapore",
  "PSA International", "Jurong Port", "Pacific International Lines", "BW Group", "Hafnia Limited",
  "ST Engineering", "Surbana Jurong", "WorleyParsons SG", "AECOM Singapore", "Arcadis Singapore",
  "JLL Singapore", "CBRE Singapore", "Cushman & Wakefield SG", "Colliers Singapore", "Knight Frank SG",
  "DHL Singapore", "FedEx Singapore", "UPS Singapore", "Maersk Singapore", "CMA CGM Singapore",
  "Singapore Food Industries", "Haidilao Singapore", "Breadtalk Group", "BreadTalk Group", "Ya Kun Kaya Toast",
  "TWG Tea", "Charles & Keith", "Razer Singapore", "Creative Technology", "HyFlux",
  "Starhub Green", "Gojek Singapore", "Carro Singapore", "Patsnap Singapore", "Advance.AI",
  "Acronis Singapore", "Element AI SG", "Thoughtworks SG", "Zendesk Singapore", "Stripe Singapore",
  "Visa Singapore", "Mastercard Singapore", "PayPal Singapore", "WorldPay SG", "Adyen Singapore",
  "Unilever Singapore", "Procter & Gamble SG", "Nestlé Singapore", "Mars Singapore", "3M Singapore",
  "Johnson & Johnson SG", "Abbott Singapore", "Roche Singapore", "Novartis Singapore", "Pfizer Singapore",
  "GlaxoSmithKline SG", "AstraZeneca Singapore", "Sanofi Singapore", "Merck Singapore", "Bayer Singapore",
  "Rolls-Royce Singapore", "Siemens Singapore", "Schneider Electric SG", "ABB Singapore", "Bosch Singapore",
  "Continental Singapore", "Dyson Singapore", "James Dyson Foundation", "Micron Technology SG", "GlobalFoundries SG"
];

// Seeded pseudo-random (deterministic so results are stable)
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

// Service-specific event descriptions
const eventTemplates: Record<string, string[]> = {
  "amazing-race": ["City Race at Marina Bay", "Heritage Trail Challenge", "MRT Station Race", "Gardens by the Bay Race", "City Explorer Race", "Neighbourhood Discovery Race", "Sentosa Race Challenge", "Downtown Race Adventure", "East Coast Park Trail Race", "Cultural Amazing Race"],
  "csi-bones": ["CSI Murder Mystery", "Crime Scene Investigation", "Forensic Team Challenge", "Detective Investigation Day", "Mystery Solving Challenge", "Cold Case Investigation", "Forensic Lab Experience", "Crime & Clues Challenge"],
  "cultural-race": ["Cultural Heritage Trail", "Kampong Glam Discovery", "Chinatown Heritage Walk", "Little India Exploration", "Multi-Cultural Challenge", "Heritage District Race", "Cultural Discovery Walk", "Diversity Day Race"],
  "amongst-us": ["Imposter Hunt Challenge", "Crew vs Imposter Day", "Space Station Mystery", "Trust & Betrayal Challenge", "Emergency Meeting Day", "Crewmate Challenge", "Who's the Imposter?", "Sabotage Detection Day"],
  "alice-in-motherland": ["Wonderland Adventure Day", "Mad Hatter Challenge", "Down the Rabbit Hole", "Tea Party Team Day", "Wonderland Quest", "Looking Glass Adventure", "Fantasy Quest Day", "Enchanted Forest Challenge"],
  "battle-of-the-olympians": ["Olympic Challenge Day", "Battle of Champions", "Athletic Team Tournament", "Olympian Showdown", "Champion's Arena", "Sports Day Championship", "Gladiator Challenge", "Medal Quest Day"],
  "archery-tag": ["Archery Tag Showdown", "Bow & Arrow Battle", "Target Shooting Day", "Archery Team Tournament", "Sharp Shooter Challenge", "Archery Combat Day", "Bullseye Battle", "Archer's Arena"],
  "builder-cross": ["Build & Create Challenge", "Construction Team Day", "Engineering Challenge", "Blueprint Build Day", "Master Builder Tournament", "Structure Challenge", "Creative Build Off", "Design & Build Day"],
  "gel-blitz": ["Gel Blaster Battle", "Tactical Gel Combat", "Splatter Zone Challenge", "Gel Tag Team Day", "Blaster Showdown", "Gel Warfare Team Day", "Tactical Strike Day", "Combat Zone Challenge"],
  "minute-to-win-it": ["60-Second Challenge Showdown", "Minute Madness Day", "Rapid Fire Games Day", "Speed Challenge Tournament", "Quick-Fire Team Games", "One Minute Showdown", "Timed Challenge Day", "Beat the Clock Day"],
  "monopoly-dash": ["Property Race Challenge", "Monopoly City Dash", "Real Estate Race Day", "Property Trading Adventure", "City Mogul Challenge", "Business Empire Race", "Trade & Run Day", "Boardwalk Dash"],
  "nerfwar": ["Foam Dart Battle", "Nerf Combat Day", "Blaster Tag Wars", "Dart Strike Challenge", "Nerf Team Showdown", "Tactical Foam Fight", "Nerf Arena Battle", "Dart Storm Day"],
  "running-man": ["Name Tag Ripping Challenge", "Running Man Games Day", "Ultimate Chase Challenge", "Name Tag Battle", "Team Chase Day", "R-M Team Challenge", "Running Man Showdown", "Tag & Run Challenge"],
  "sotong-game": ["Red Light Green Light Day", "Squid-Inspired Games", "Dalgona Challenge Day", "Glass Bridge Challenge", "Tug of War Showdown", "Elimination Games Day", "Survival Game Day", "Final Round Challenge"],
  "tag-tical-laser-teambuilding": ["Laser Tag Battle", "Tactical Laser Combat", "Laser Showdown Day", "Team Laser Strike", "Laser Arena Challenge", "Phaser Tag Tournament", "Tactical Ops Day", "Laser Warfare Day"],
  "treasure-heist": ["Vault Break Challenge", "Heist Planning Day", "Treasure Hunt Adventure", "The Great Heist", "Safe Cracking Challenge", "Heist Team Day", "Gold Rush Adventure", "Bank Heist Escape"],
  "amazing-race-virtual": ["Virtual City Race", "Online Amazing Race", "Remote Race Challenge", "Digital Amazing Race", "Virtual Heritage Trail", "Online Race Adventure"],
  "fit-in-your-team-virtual": ["Virtual Fitness Challenge", "Online Wellness Day", "Remote Fitness Showdown", "Digital Health Challenge", "Virtual Team Workout", "Online Fitness Games"],
  "the-gameshow-experience-virtual": ["Virtual Game Show Night", "Online Trivia Showdown", "Remote Quiz Challenge", "Digital Game Show", "Virtual Buzzer Battle", "Online Game Night"],
  "the-great-zodiac-hunt-virtual": ["Virtual Zodiac Hunt", "Online Zodiac Challenge", "Remote Animal Hunt", "Digital Zodiac Quest", "Virtual Chinese Zodiac Game", "Online Zodiac Race"],
  "the-nuclear-fallout-escape-room-virtual": ["Virtual Escape Room", "Online Fallout Challenge", "Remote Escape Mission", "Digital Escape Room", "Virtual Bunker Escape", "Online Nuclear Mission"],
  "the-patriot-act-virtual": ["Virtual SG Heritage Quiz", "Online Patriot Challenge", "Remote Singapore Quiz", "Digital SG Trivia", "Virtual National Day Quiz", "Online Singapore Challenge"],
  "tomb-raider-king-treasure-hunt-virtual": ["Virtual Treasure Hunt", "Online Tomb Raider Quest", "Remote Treasure Challenge", "Digital Treasure Hunt", "Virtual Lost Temple Quest", "Online Artifact Hunt"],
  "grand-christmas-delivery": ["Grand Christmas Party", "Holiday Delivery Challenge", "Christmas Team Celebration", "Festive Gift Exchange", "Holiday Season Challenge", "Christmas Team Day"],
  "team-building": ["Annual Team Building Day", "Team Bonding Retreat", "Department Team Day", "Team Spirit Challenge", "Quarterly Team Event", "Team Engagement Day", "All Hands Team Day", "Annual Company Outing"],
  "overseas-retreats": ["Bali Team Retreat", "Bangkok Corporate Offsite", "Bintan Team Getaway", "Batam Retreat Day", "Phuket Team Escape", "Langkawi Corp Retreat", "JB Team Outing", "Penang Corp Retreat"],
  "dinner-and-dance": ["Annual Gala Dinner", "Year-End D&D Celebration", "Company Dinner & Dance", "Black Tie Gala Night", "Annual Awards Dinner", "Glamour Night Gala", "Corporate D&D", "Celebration Dinner Night"],
  "awards-ceremonies": ["Annual Awards Night", "Employee Excellence Awards", "Star Awards Ceremony", "Achievement Awards Night", "Year-End Awards Gala", "Best Employee Awards", "Service Awards Ceremony", "Team Excellence Night"],
  "corporate-anniversaries": ["10th Anniversary Gala", "25th Anniversary Celebration", "Silver Jubilee Event", "Milestone Anniversary Dinner", "Company Anniversary Day", "Corporate Birthday Bash", "Golden Jubilee Dinner", "Legacy Celebration Night"],
  "leadership-offsites": ["Q1 Leadership Summit", "Senior Leaders Retreat", "Management Strategy Day", "Executive Offsite", "Leadership Vision Day", "Directors' Planning Retreat", "C-Suite Planning Day", "Annual Strategy Meeting"],
  "product-launch": ["Product Launch Event", "Innovation Showcase Day", "New Product Unveiling", "Tech Launch Event", "Product Debut Night", "Grand Launch Ceremony", "Innovation Day", "Market Launch Event"],
  "brand-activations": ["Brand Experience Day", "Pop-Up Activation Event", "Brand Engagement Day", "Live Brand Experience", "Interactive Brand Day", "Immersive Brand Event", "Brand Showcase Day", "Consumer Brand Day"],
  "client-appreciation": ["Client Appreciation Dinner", "VIP Client Night", "Thank You Luncheon", "Client Awards Night", "Partners Appreciation Day", "Client Engagement Evening", "Key Accounts Dinner", "Client Celebration Day"],
  "town-halls": ["All-Hands Town Hall", "Quarterly Town Hall Meeting", "Annual Town Hall", "Employee Town Hall", "Company-Wide Town Hall", "Leadership Town Hall", "Global Town Hall", "Team Town Hall"],
  "event-concept": ["Creative Event Concept", "Bespoke Theme Design", "Custom Event Concept", "Themed Event Planning", "Concept Design Day", "Event Ideation Workshop"],
  "stage-production": ["Grand Stage Show", "Tech Stage Setup", "Concert Production", "Theatre Production Day", "Stage & Sound Setup", "Live Show Production"],
  "custom-themes": ["Custom Theme Gala", "Themed Event Night", "Bespoke Theme Event", "Creative Theme Night", "Fantasy Theme Event", "Unique Theme Dinner"],
  "emcee-media": ["Emcee & AV Setup", "Media Production Day", "Content & Hosting Day", "Emcee Hosting Night", "Production & Emcee Setup", "Live Hosting Event"],
  "summits": ["Industry Summit Day", "Tech Summit Event", "Innovation Summit", "Leadership Summit", "Annual Industry Summit", "Knowledge Summit"],
  "government-events": ["National Day Event", "Government Appreciation Night", "Public Sector Day", "Community Engagement Day", "Ministry Team Day", "Public Service Event"],
  "private-events": ["Private Celebration Night", "Exclusive Event Night", "VIP Private Event", "Private Milestone Party", "Intimate Gathering Night", "Private Gala Night"],
  "corporate-carnivals": ["Family Carnival Day", "Corporate Fun Fair", "Annual Carnival", "Community Carnival Day", "Team Carnival Challenge", "Fun Fair Day"],
  "vip-gala": ["VIP Gala Dinner", "Platinum Gala Night", "Exclusive VIP Evening", "Black Tie VIP Gala", "Presidents Gala Night", "VIP Awards Gala"],
  "grand-opening": ["Grand Opening Ceremony", "Flagship Store Launch", "New Office Opening", "Ribbon Cutting Ceremony", "Grand Launch Day", "Store Opening Day"],
  "local-retreats": ["Sentosa Team Retreat", "Marina Bay Hideaway", "Changi Village Team Day", "Fort Canning Retreat", "Labrador Park Outing", "Jurong Lake Gardens Day"],
  "mbti": ["MBTI Workshop Day", "Personality Profiling Day", "MBTI Team Discovery", "MBTI Leadership Workshop", "MBTI Communication Day", "MBTI Team Dynamics Session"],
  "disc": ["DISC Profiling Workshop", "DISC Team Day", "DISC Communication Session", "DISC Leadership Lab", "DISC Team Dynamics Day", "DISC Discovery Workshop"],
  "ocean": ["OCEAN Personality Workshop", "Big Five Workshop Day", "OCEAN Team Discovery", "OCEAN Leadership Session", "OCEAN Communication Day", "Big Five Team Workshop"],
  "mass-talks": ["Keynote Speaker Event", "Corporate Mass Talk", "Motivational Talk Day", "Leadership Talk Day", "Inspirational Mass Talk", "Guest Speaker Event"],
  "workshops": ["Skills Workshop Day", "Interactive Workshop", "Team Training Workshop", "Professional Development Day", "Creative Workshop Day", "Learning & Dev Workshop"],
  "youth-camps": ["Youth Leadership Camp", "Student Adventure Camp", "Youth Team Camp", "Student Leadership Retreat", "Youth Bonding Camp", "School Adventure Day"],
  "corporate-days": ["Annual Corporate Day", "Company Day Celebration", "Department Fun Day", "Team Sport Day", "Corporate Family Day", "Annual Staff Day"],
  "incentive-travel": ["Incentive Trip to Bali", "Top Performers Getaway", "Sales Incentive Trip", "Achievers' Retreat", "Performance Reward Trip", "Top Team Incentive Escape"],
};

// Default templates for any missing slugs
const defaultEventTemplates = ["Team Building Day", "Corporate Event Day", "Annual Team Outing", "Department Engagement Day", "Team Challenge Day", "Quarterly Team Event"];

const filePath = join(__dirname, "..", "src", "data", "servicesData.ts");
let content = readFileSync(filePath, "utf-8");

// Match every recentEvents array
const recentEventsRegex = /recentEvents:\s*\[[\s\S]*?\]/g;
let matchIndex = 0;

// Service slugs in order (extracted from the file)
const serviceOrder: string[] = [];
const slugRegex = /^\s*"([a-z][a-z0-9-]*)"\s*:\s*\{/gm;
let slugMatch: RegExpExecArray | null;
while ((slugMatch = slugRegex.exec(content)) !== null) {
  serviceOrder.push(slugMatch[1]);
}

console.log(`Found ${serviceOrder.length} services`);

// For each recentEvents, figure out which service it belongs to
// by looking at the position in the file
const recentEventsMatches: { index: number; length: number; text: string }[] = [];
let reMatch: RegExpExecArray | null;
const recentEventsRegex2 = /recentEvents:\s*\[[\s\S]*?\]/g;
while ((reMatch = recentEventsRegex2.exec(content)) !== null) {
  recentEventsMatches.push({ index: reMatch.index, length: reMatch[0].length, text: reMatch[0] });
}

console.log(`Found ${recentEventsMatches.length} recentEvents arrays`);

// Map each recentEvents to its service by finding the nearest object key above it
function getServiceForPosition(pos: number): string {
  let bestSlug = "team-building";
  let bestDist = Infinity;
  // Match service keys like:   "amazing-race": {
  const keyRegex = /^\s*"([a-z][a-z0-9-]*)"\s*:\s*\{/gm;
  let m: RegExpExecArray | null;
  while ((m = keyRegex.exec(content)) !== null) {
    const dist = pos - m.index;
    if (dist > 0 && dist < bestDist) {
      bestDist = dist;
      bestSlug = m[1];
    }
  }
  return bestSlug;
}

// Build replacement, processing from end to start so indices don't shift
const sortedMatches = [...recentEventsMatches].sort((a, b) => b.index - a.index);

for (const match of sortedMatches) {
  const slug = getServiceForPosition(match.index);
  const rand = seededRandom(slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0));
  
  // Pick 8-16 unique companies for this service
  const count = 8 + Math.floor(rand() * 9); // 8 to 16
  const shuffled = [...companies].sort(() => rand() - 0.5);
  const picked = shuffled.slice(0, count);
  
  // Get event descriptions for this slug
  const templates = eventTemplates[slug] || defaultEventTemplates;
  
  // Build entries
  const entries = picked.map((company, i) => {
    const event = templates[i % templates.length];
    const pax = 20 + Math.floor(rand() * 480); // 20-500
    return `      { client: "${company}", event: "${event}", pax: ${pax} }`;
  });
  
  const replacement = `recentEvents: [\n${entries.join(",\n")}\n    ]`;
  
  content = content.substring(0, match.index) + replacement + content.substring(match.index + match.length);
}

writeFileSync(filePath, content, "utf-8");
console.log("Done! All recentEvents arrays replaced.");
