# CODEX BUILD INSTRUCTIONS

## IMPORTANT FILE SEPARATION

This file explains **what to build and how to build it**.

`PROJECT_CONTENT.txt` explains **what the website must say**.

Do not mix these roles:

- Do not move coding or design instructions into `PROJECT_CONTENT.txt`.
- Do not invent or rewrite personal facts in this file.
- Pull all approved wording, times, habits, emotions, techniques, station details, and the conclusion from `PROJECT_CONTENT.txt`.

## SOURCE-OF-TRUTH ORDER

Before writing code, inspect every relevant file in the `homework2` folder. Use this priority order:

1. The official Assignment 2 file — final authority for the task.
2. The official Assignment 2 rubric — final authority for grading criteria.
3. `PROJECT_CONTENT.txt` — final authority for approved personal and academic content.
4. `CODEX_INSTRUCTIONS.md` — implementation, design, testing, and deployment requirements.
5. Any additional psychology class files — supporting reference only.

If two files appear to conflict, follow the higher-priority source. Do not silently invent a compromise.

## ROLE

Design, implement, test, and document a complete responsive website for the university psychology assignment **“My Emotional Metro Map.”** Work directly inside the current `homework2` project folder.

Do not replace the student’s real routine with a generic wellness routine. Do not fabricate personal facts, times, habits, emotions, class techniques, appearance details, or life events. Do not remove imperfect habits simply to make the student look better; realism and honest reflection are grading requirements.

==================================================
PRIMARY GOAL
============

Build a polished interactive website that presents:

1. Part 1 — An approximately 300-word conceptual reflection.
2. Part 2 — An interactive emotional roadmap containing eight complete stations.
3. A clear connection between the psychological concepts in Part 1 and the habits and techniques shown in Part 2.

The website must be visually creative enough to feel like a small interactive experience while remaining academically clear, readable, reliable, and easy for a teacher to navigate.

The final result should feel impressive but not childish, confusing, excessive, or technically fragile.

==================================================
CORE INTERACTION CONCEPT
========================

Build the assignment as a polished 2.5D interactive journey, not as a plain document and not as a heavy full-3D game.

The experience should include:

- An original student avatar representing the user.
- One winding road connecting eight stations.
- Automatic character movement between selected stations.
- A different scene, atmosphere, time of day, and information presentation at every stop.
- Smooth layered motion, parallax, shadows, lighting changes, and transitions that create depth without requiring a heavy 3D engine.
- Clear academic content at every step.

The general roadmap may be inspired by the idea of a casual-game level path, but all visuals must be original. Do not copy Candy Crush or any other game’s characters, maps, art, sounds, logos, fonts, or assets.

The teacher must not need technical knowledge or game controls. The character moves automatically after a station is selected.

==================================================
RECOMMENDED TECHNICAL DIRECTION
===============================

Preferred stack:

React
Vite
TypeScript if it improves code reliability
Modern CSS
SVG, CSS illustration, optimized WebP/PNG assets, or a combination
A lightweight animation solution

The project must deploy cleanly to Cloudflare Pages as a static front-end website.

No backend is required.

Do not add:
A database.
Authentication.
Accounts.
Server-side storage.
A CMS.
Payments.
User tracking.
Advertising.
Unnecessary APIs.
Heavy three-dimensional models.
A large game engine.

Use actual full 3D only if it provides a clear advantage and remains performant on ordinary phones. The preferred direction is 2.5D, not full 3D.

A 2.5D experience means:
Layered illustrated scenes.
Parallax movement.
Depth through scale and shadows.
Smooth character motion.
Animated environmental elements.
Color and lighting transitions.
No heavy 3D world required.

==================================================
ACADEMIC REQUIREMENTS
=====================

Do not let the visuals hide the assignment requirements.

Part 1 must clearly answer:

What it means to treat daily moments as points of reference and navigation.
Why small repeated moments can support emotional well-being.
How the idea connects to at least one psychological concept.
How the idea connects to tools discussed in class.

The main psychological concepts are:
Habit formation.
Emotional regulation.

The main class tools include:
Meditation.
Breathing.
Mental visualization.
Mindful eating.
Anchoring.
Physical movement.
Sensory grounding.
Self-control.
Recovery and relaxation.

Part 2 must contain all eight stations from `PROJECT_CONTENT.txt`.

Every station must clearly show:

1. Time or point in the day.
2. Specific activity.
3. Automatic habit or current pattern.
4. Tool or technique from class.
5. Honest emotional effect or challenge.
6. Emotional state supported.
7. Small realistic improvement.

Do not omit the automatic habit field.

Do not present the routine as perfect.

Do not describe all phone use as harmful.

Important examples of balance:

The controlled twenty-minute phone period in the morning is enjoyable and helps the student wake up. It should remain.

The two ninety-minute university phone periods are the larger issue. The realistic improvement is only ten to fifteen minutes without the phone, plus water, breathing, meditation, anchoring, or quiet recovery.

The student does not want to stop nighttime chess. The improvement is managing frustration, not banning the hobby.

The thirty-minute nap is a planned experiment, not an established successful habit.

The student has already practiced mindful eating for four days, but should not claim that it has completely transformed his life.

==================================================
WEBSITE STRUCTURE
=================

Create a clear experience with the following broad structure.

SECTION 1 — INTRODUCTION

Display:

My Emotional Metro Map

Suggested subtitle:
Small stations that help me navigate my day

Include:
An original student character.
A subtle animated background.
A visible “Begin the Journey” button.
A secondary option to view Part 1 directly if appropriate.

The opening must immediately show that the website is an academic psychology project.

Do not require login, signup, scrolling instructions, or complicated controls.

SECTION 2 — PART 1: CONCEPTUAL REFLECTION

Use the exact approved reflection from `PROJECT_CONTENT.txt` unless a tiny grammatical correction is absolutely necessary.

Do not rewrite it into a different argument without approval.

The complete reflection must remain available as readable continuous text.

It may also be broken visually into supporting cards or bubbles such as:

Points of Reference.
Small Habits Add Up.
Habit Formation.
Emotional Regulation.
Tools From Class.
Realistic Improvement.

Do not scatter the paragraph so aggressively that the teacher cannot read it normally.

Provide a clear transition from Part 1 to Part 2.

Suggested transition:
“Now follow me through the eight stations of my day.”

PART 1 VISUAL EMPHASIS:

Keep the full reflection readable as one continuous academic text. Around it, use optional bubbles or cards to emphasize these six approved ideas without replacing the reflection:

1. Points of Reference — a predictable moment where the next useful action is already known.
2. Small Habits Add Up — a small repeated pause can gradually improve the routine.
3. Habit Formation — linking an action to a specific moment makes it easier to repeat.
4. Emotional Regulation — pausing helps identify tiredness, frustration, anxiety, or low motivation before they control the next decision.
5. Realistic Improvement — improve the existing routine instead of rebuilding life completely.
6. Main Class Tools — meditation, breathing, visualization, mindful eating, anchoring, movement, sensory awareness, and self-control.

SECTION 3 — FULL ROADMAP OVERVIEW

Create an original winding roadmap with eight connected station markers.

The general feel may resemble a casual game’s level-selection journey, but all graphics must be original.

Do not use copyrighted Candy Crush:
Logos.
Characters.
Maps.
Candy designs.
Sounds.
Backgrounds.
Fonts.
Copied layouts.

Each station marker should visually communicate its theme.

Suggested station order:

1. Morning Spark.
2. Window of Ideas.
3. Sea-View Reset.
4. Social Battery Recharge.
5. Present at the Table.
6. Rest, Plan, Begin.
7. Energy in Motion.
8. One More Game.

Show all eight stations on the overview.

On large screens, the roadmap may stretch vertically, horizontally, or diagonally.

On phones, it should become a clear vertical or gently winding path without tiny unreadable markers.

The path must remain easy to follow.

SECTION 4 — INDIVIDUAL STATION EXPERIENCES

When a station is selected:

Move the character automatically along the roadmap.
Transition smoothly into the station scene.
Change the background and emotional atmosphere.
Display the station content through readable animated panels.
Show the station number and progress, such as “Station 3 of 8.”
Provide obvious Previous, Next, and Full Map controls.

The character movement is presentation, not gameplay.

Do not require:
Arrow-key movement.
Dragging the character.
Precise tapping.
A joystick.
Game physics.
Complex instructions.

Each station scene must use the exact personal details in `PROJECT_CONTENT.txt`.

SECTION 5 — COMPLETION AND CONCLUSION

After Station 8:

Return to the complete map.
Show all stations as completed, illuminated, or active.
Display the approved conclusion from `PROJECT_CONTENT.txt`.
Provide a way to revisit any station.
Provide a way to return to Part 1.

A subtle completion animation is welcome.

Do not use loud celebration effects that make the academic project feel childish.

==================================================
VISUAL DIRECTION
================

Overall feeling:

Creative.
Modern.
Warm.
Personal.
Polished.
Calm.
Slightly game-like.
Academically readable.

Avoid:
A generic corporate dashboard.
A basic slideshow.
Eight identical cards.
A childish cartoon worksheet.
A dark cyberpunk interface.
An overcomplicated video game.
Excessive glassmorphism that damages readability.
Tiny text.
Constant motion.
Random neon colors.
Copied commercial-game assets.

Use a consistent design system across the website:
Typography.
Spacing.
Button shapes.
Card styles.
Illustration style.
Character design.
Motion timing.
Icon style.

Each station may have a different palette, but all stations must clearly belong to the same website.

Suggested emotional progression:

Station 1:
Warm sunrise colors.

Station 2:
Cool road and morning-sky colors.

Station 3:
Bright sea blue with sunlight.

Station 4:
Softer afternoon sea colors and calmer tones.

Station 5:
Warm home and food colors.

Station 6:
Muted restful colors transitioning into focused desk colors.

Station 7:
Energetic but controlled workout colors.

Station 8:
Deep night colors with chessboard highlights and soft moonlight.

STATION-SPECIFIC SCENE DIRECTION:

Station 1 — Morning Spark:
Bedroom at sunrise, a visible 7:00 clock, phone, short-message bubbles, short-video symbols, chess pieces, and clothes ready for the day. Do not use real app logos unless licensing clearly allows it; generic symbols are safer.

Station 2 — Window of Ideas:
Car interior, moving road or coastal scenery, music or radio cues, and thought bubbles containing books, code, website layouts, future plans, or study goals.

Station 3 — Sea-View Reset:
Bright morning sea, heat and sunlight, bench or sitting area, cold-water bottle, phone placed aside, breathing waves, birds or clouds, and a clear ten-minute pause indicator.

Station 4 — Social Battery Recharge:
Softer afternoon sea, quiet bench, water bottle, a low social-battery icon recharging, and a visual memory bubble of the grandfather’s mountain balcony, swing, wind, and anchoring gesture.

Station 5 — Present at the Table:
Warm family dining area, balanced meal, salad, bread or added portion, phone placed away, sensory cues for taste and smell, family conversation, and a subtle four-day habit streak.

Station 6 — Rest, Plan, Begin:
A scene transitioning from bed or sofa with a thirty-minute timer into a study desk with books, laptop, programming symbols, planning cards, and a visual shift from fatigue to manageable focus.

Station 7 — Energy in Motion:
Home workout area, dumbbell kit, small pre-workout snack, three-day weekly calendar, energy meter, and controlled movement effects showing motivation rather than extreme fitness imagery.

Station 8 — One More Game:
Dark bedroom, moonlight, phone glow, chessboard, clock approaching midnight, losing-streak tension, and breathing or anchoring cues that show frustration management without pretending the student stops playing.

Do not hard-code a physical appearance for the student unless an appearance reference is provided.

Use a neutral original avatar or simplified student character.

==================================================
ANIMATION REQUIREMENTS
======================

Use motion to support understanding.

Good animation examples:
Character walking or sliding between stations.
Path lighting up.
Subtle clouds, sea movement, trees, or passing scenery.
Cards entering smoothly.
Thought bubbles appearing.
Battery recharging.
A clock progressing through the day.
Background lighting changing.
Gentle parallax.
Chess pieces moving subtly.

Avoid:
Animations that delay access to content.
Long unskippable sequences.
Constant bouncing.
Aggressive zooming.
Motion sickness.
Excessive particles.
Large video backgrounds.
Sound that plays automatically.

Respect the user’s reduced-motion preference.

When reduced motion is enabled:
Disable nonessential parallax.
Use fades or immediate transitions.
Keep all navigation and content fully functional.

==================================================
RESPONSIVE DESIGN
=================

The website must work well on:

Small phones.
Large phones.
Tablets.
Laptops.
Desktop screens.

Design mobile-first.

On phones:
Text must remain readable without zooming.
Buttons must be large enough to tap.
No information may depend on hover.
Station content should stack clearly.
The roadmap should remain understandable.
The character must not cover text.
Panels must not overflow horizontally.

On laptops:
Use the extra space for richer scenery and a wider roadmap.
Do not stretch paragraphs into extremely long lines.

Test several viewport sizes.

==================================================
ACCESSIBILITY AND USABILITY
===========================

The teacher should understand the website immediately.

Required:

Clear labels.
High text contrast.
Logical heading order.
Keyboard-accessible controls.
Visible focus indicators.
Alternative text for meaningful images.
Semantic HTML.
No hover-only information.
No autoplay audio.
No flashing content.
Reduced-motion support.
Readable font sizes.
Reasonable line lengths.
Obvious navigation.

Add a persistent or easily accessible control for:
Home or Introduction.
Part 1.
Full Map.

The website must still be understandable if animations fail.

==================================================
CONTENT RULES
=============

Use `PROJECT_CONTENT.txt` as the primary content source.

Preserve the student’s first-person voice.

Do not exaggerate the results of new habits.

Do not claim:
The four-day mindful eating habit has already transformed the student’s life.
The student already follows the workout routine consistently.
The power nap has already succeeded.
The student has stopped using his phone at night.
The student has eliminated procrastination.
Meditation solves every problem.

Use honest wording such as:
“I want to try.”
“I am beginning.”
“I can see how it may help.”
“My goal is.”
“I currently.”
“I sometimes.”

Keep the language natural and appropriate for a university student.

Do not make the wording sound like a clinical psychology paper or an AI-generated motivational speech.

Do not use fake quotations from psychologists.

Do not add medical claims.

==================================================
ASSET RULES
===========

Prefer:
Original SVG illustrations.
CSS-created scenery.
Simple locally stored icons.
Optimized WebP or PNG images.
Openly licensed assets when necessary.

Document the source and license of any external asset.

Do not hotlink important assets from random websites.

Do not use copyrighted game assets.

Keep asset sizes reasonable.

Avoid individual files above Cloudflare Pages’ relevant limits.

Compress images.

Lazy-load noncritical station art where appropriate.

Ensure the website remains usable on slower connections.

==================================================
DATA AND CODE ORGANIZATION
==========================

Store the eight stations in a structured data file or array rather than duplicating the same component eight times.

Each station object should support fields such as:

ID.
Number.
Title.
Time.
Location.
Activity.
Automatic habit.
Emotional effect.
Technique.
Realistic improvement.
Supported emotional state.
Palette or visual theme.
Icons or scene metadata.

Build reusable components for:

Station marker.
Roadmap.
Character.
Station detail panel.
Progress display.
Navigation controls.
Concept card.
Scene background.
Conclusion.

Keep academic content separate from visual component logic where practical.

Use clear file and component names.

Avoid one enormous component containing the entire application.

==================================================
STATE AND NAVIGATION
====================

The experience should work without a backend.

Manage locally:
Current section.
Current station.
Visited stations.
Animation state.
Reduced-motion behavior.

It is acceptable to preserve progress during the current browser session, but this is not required.

The teacher must be able to jump directly to any station from the map.

Do not force the teacher to complete every previous station before viewing another station.

The route or state should not break browser Back behavior.

A simple single-page application is acceptable.

==================================================
CLOUDFLARE PAGES DEPLOYMENT
===========================

Prepare the project for static deployment to Cloudflare Pages.

The production build must succeed with a standard command.

Document:

Required Node version if relevant.
Dependency installation command.
Development command.
Production build command.
Output directory.
Cloudflare Pages configuration.
How to deploy using Git integration.
How to deploy using direct upload if appropriate.

Do not include secrets.

Do not require environment variables unless truly necessary.

Do not depend on a local development server in production.

Test direct loading and refreshing.

If using client-side routing, configure it correctly for Cloudflare Pages or avoid unnecessary route complexity.

==================================================
QUALITY CONTROL
===============

Before considering the project complete:

1. Compare the site against the official assignment.
2. Compare the site against every rubric criterion.
3. Confirm that all eight stations are present.
4. Confirm that every station contains all required fields.
5. Confirm that automatic habits are visible.
6. Confirm that the map is realistic rather than idealized.
7. Confirm that Part 1 concepts appear clearly in Part 2.
8. Check spelling and grammar.
9. Test phone and laptop layouts.
10. Test all buttons.
11. Test keyboard navigation.
12. Test reduced-motion mode.
13. Run the production build.
14. Fix all console errors.
15. Remove unused dependencies and placeholder content.
16. Make sure no station contains invented facts.
17. Make sure no copyrighted commercial-game assets were copied.
18. Verify that the website can be understood without verbal explanation from the student.

==================================================
EXPECTED DELIVERABLES
=====================

Produce:

1. Complete working source code.
2. A successful production build.
3. A polished responsive interface.
4. All eight interactive stations.
5. The full Part 1 reflection.
6. The final completed-map conclusion.
7. A README containing setup and Cloudflare Pages deployment instructions.
8. An asset-credit section if external assets are used.
9. A short rubric checklist showing where each requirement is satisfied.

Do not stop after creating a visual mockup.

Do not provide only a plan.

Implement the full website, test it, and leave the project in a deployable state.

When uncertain, prioritize:

Academic clarity over visual spectacle.
Personal honesty over generic wellness advice.
Reliable 2.5D design over fragile full 3D.
Mobile usability over desktop-only effects.
Original visuals over copied assets.
Simple navigation over game-like complexity.
