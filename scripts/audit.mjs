import { readFileSync } from 'fs'
const lines = readFileSync('src/data/servicesData.ts','utf8').split('\n')
let slug = 'unknown'
const outcomeCounts = []
const testimonialCounts = []
const flowVariants = []

for (let i = 0; i < lines.length; i++) {
  const sm = lines[i].match(/"([a-z][a-z0-9-]+)":\s*\{/)
  if (sm) slug = sm[1]
  
  if (lines[i].includes('outcomes: [')) {
    let count = 0, j = i+1
    while (j < lines.length && !lines[j].match(/^\s+\],/)) { 
      if (lines[j].includes('icon:')) count++
      j++ 
    }
    outcomeCounts.push({ slug, count })
  }
  
  if (lines[i].includes('testimonials: [')) {
    let count = 0, j = i+1
    while (j < lines.length && !lines[j].match(/^\s+\],/)) { 
      if (lines[j].includes('quote:')) count++
      j++ 
    }
    testimonialCounts.push({ slug, count })
  }
  
  if (lines[i].includes('perfectForVariant:')) {
    const v = lines[i].match(/:\s*"([^"]+)"/)
    if (v) flowVariants.push({ slug, variant: v[1], line: i+1 })
  }
}

console.log('\n=== OUTCOMES ===')
outcomeCounts.forEach(({slug, count}) => console.log(`  ${slug}: ${count} ${count < 6 ? '⚠️ NEEDS ' + (6-count) + ' MORE' : '✅'}`))

console.log('\n=== TESTIMONIALS ===')
testimonialCounts.forEach(({slug, count}) => console.log(`  ${slug}: ${count} ${count < 6 ? '⚠️ NEEDS ' + (6-count) + ' MORE' : '✅'}`))

console.log('\n=== PERFECT FOR VARIANT (flow = needs fixing) ===')
flowVariants.forEach(({slug, variant, line}) => console.log(`  L${line} ${slug}: "${variant}" ${variant === 'flow' ? '⚠️ CHANGE TO PILLS' : '✅'}`))
