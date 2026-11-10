# AGENTS.md

We are building this for the Video.js hackathon, where we have to build the next video player — like we are redesigning the wheel.

## What this is

- A custom skin for the Video.js v10 player (Vite + React, Video.js 10.3.0).
- The skin lives in `src/video/` (edit `src/video/skin.tsx` and `src/video/skin.css`).
- The preview page lives in `apps/preview/` — `apps/preview/index.html` mounts the player alone at `/`.

## The player right now

- **The preview renders the Film Old Film skin**: `apps/preview/src/frame/player.tsx` imports `VideoSkin` from `@/video/skin`. Nothing uses the stock Video.js skin or `@videojs/react/video/skin.css`.
- `src/skins/kanwar/` is an older saved snapshot and is unused.
- One page, white background, just the player — no header, no picker, no upload.
- It plays one video: the Mux HLS asset in `apps/preview/src/frame/home.tsx`.
- **The concept**: the controls are a pale, moulded plastic deck bolted over the video, built from the Teenage Engineering EP-133 Old Film reference — a dark chassis lip, an olive LCD for the time, and chunky keys with printed legends. The palette is the reference's: pale plastic `#c7c3c0`, ink `#4a4846`, orange `#d42a02` with highlight `#fb702c`, and the dark PLAY key `#545251`. Depth is hard neumorphic shadow (off-white inset top-left, grey inset bottom-right, cast shadow below), never glass or glow, so the deck reads the same over bright and dark footage.
- The deck is one short row: the orange PLAY key (set a little lower than the keycaps, like a chunky transport button), the timeline and the volume fader on the left, the time LCD centred, then the pale function keys CC, SET, AIR, PIP, FULL parked in the right corner. It is about 53px tall on a wide player — deliberately half a two-storey control bar — so it sits on the footage without covering it.
- The timeline is a tape groove pressed into the panel: tick marks in the slot, an orange tape behind the playhead with a bright top edge, and a ridged pale fader cap that sits proud of the groove, sinks while dragged and darkens the fill.
- The volume key is a speaker key that opens a volume bar (a horizontal fader in a dark chassis plate) on click; the speaker reflects the level and mutes/unmutes, the bar sets the level by click or drag, and the arrow keys, Home, End and `m` work when it has keyboard focus. Wheel over the player is still volume.
- Keys are about 50px wide and 38px tall on a wide deck and step down to 48, 46 and 44px wide as the player narrows; PIP drops below 40rem, AIR below 34rem, CC below 26rem (SET still reaches captions), labels go in short players, and touch pointers get thumb-height keys back. The LCD keeps `min-width` + `tabular-nums`, so times never shift, and drops to a centred second line below 22rem. Keyboard focus is a white ring with a dark halo on every key, the slider thumb and menu items.
- Menus, tooltips and the volume readout are dark chassis plates; the settings menu has real Audio, Speed and Captions lists (no fake quality list). Menu highlight is orange.
- Clean mode: by default the video shows nothing at all, even on hover. A real cursor movement in the player (small shakes under 20px don't count) slides the deck up; it stays while the cursor rests on it, while a menu is open, or while a Tab focus is inside, and fades out after 1.5s of stillness. Clicking the seekbar focuses its thumb but never pins the deck open. A right-drag whose release is missed outside the window ends itself on the next press or move.
- Right-click and drag anywhere on the player to seek: left back, right forward, full width covers the whole video. A right-click without dragging skips 10s (±10s stacking for quick repeats) with a dark plate, orange chevrons and the seconds on that side. Seeks are throttled to one per animation frame (`fastSeek` where available).
- Play/pause is a click on the video, double-click is fullscreen, keyboard still works (Space, arrows, F, M). Every play/pause stamps a dark disc with an orange glyph in the centre; volume changes show a dark plate with the level; buffering is a LoaderCircle spinner, all of which stop moving under reduced motion.
- Icons are all Lucide. The play/pause, mute, captions, fullscreen, PiP and AirPlay glyphs swap in place with a 0.14s fade/scale. Labels printed on the keys are decorative (`aria-hidden`); every key's real name and tooltip come from Video.js i18n.
- Fonts: Montserrat (Google Fonts, SIL OFL) for legends and menus, a system mono stack for LCD digits. `apps/preview/index.html` loads it with a system fallback.

## Commands

- `npm install`, then `npm run dev` to run it.
- `npm run typecheck` and `npm run build` must stay clean.

and we are building this for this hackathon - Tag badge
#Video.js Skins Design Challenge
Join to submit!
$10K
Cash prize
9hr 38m 54s
Until it starts
Trending

Recent

Social

Guidelines

Guidelines
Everything you need to know to participate

Open source license 
By entering this challenge and accepting the guidelines, you license your entry under the Apache License, Version 2.0, so Video.js and others may use, adapt, and redistribute it with credit. You keep ownership of your entry. Any submission may be chosen and inclusion isn’t guaranteed. You accept the guidelines by checking the box when you join the challenge.
Why enter
$10,000 in prizes, judged by the creators of Video.js and Plyr
A chance to see your skin featured by Video.js
Hands-on time with Video.js v10, the ground-up rewrite of the open source player behind video on millions of websites
Theme
Design a custom skin for the Video.js v10 player.
In Video.js v10, a skin is the player’s interface: the UI components plus the styles that present them. Video.js is open source and community-driven, and the player can end up on almost any website, so every skin makes a choice: how much personality it has, how well it fits into someone else’s design, and how far it pushes the controls. The built-in v10 skins show this range. Default is deliberately distinctive, Neutral is quieter and fits more places, Compat keeps things plain for broader browser support, and Scaffold has minimal styling and is a good starting point if you're designing your own skin.
Now show us your design! This is all about craft and fun: the best player, the most unconventional player, the one nobody saw coming. Anything goes, as long as it works and stays usable for everyone.
Design your skin in any tool, then build it one of three ways (see How to enter):
With AI: Describe your design to your coding agent (Claude Code, Codex, Cursor, or your tool of choice) using the Video.js skill.
By hand: Start a skin project with the Video.js CLI and follow the Build your own skin guide.
From scratch: Any framework (HTML, React, Vue, Svelte, or another) and styling approach (CSS, Tailwind, or another), as long as it uses Video.js v10.
Need some inspiration? A player for a video podcast app, a meditation site, a museum archive, or a design portfolio. Anything you can imagine!
Submission requirements
Every submission must include:
A working, publicly accessible URL (no login or local setup) showing your skin on a Video.js v10 player playing video.
A visual and short written description of your design thinking (a few sentences).
Minimum requirements
Each entry is reviewed against these requirements before it's scored. Ensure your skin:
Works: Your URL loads, uses the Video.js v10 player, and plays video.
Has essential controls: Play/pause, seek bar, time, volume/mute, and fullscreen are present and working.
Is responsive: Controls stay visible and usable at desktop and mobile player sizes.
Works with a keyboard: Controls can be reached and operated with a keyboard, and menus can be exited.
Accessibility tips - Several small touches make a skin work for everyone:
Readable over any video: Keep text and icons legible over both bright and dark footage.
Easy to tap: Make controls big enough for a thumb on a phone.
Visible focus: Leave the focus outline on, so keyboard users can see where they are.
Calm on request: If your skin animates, tone it down when reduced motion is turned on.
Evaluation criteria
Entries are scored out of 25 points, plus up to 2 bonus points.
Visual design and originality (10 pts): A distinctive concept with cohesive typography, color, iconography, and layout. Top scores go to memorable, original designs with a clear visual direction and carefully resolved details.
Usability and interaction (5 pts): Intuitive controls and a layout that works across player sizes and touch devices. Controls should be easy to discover and operate, with clear feedback on desktop and mobile.
Accessibility (5 pts): Controls stay readable over any video, keyboard focus is visible, touch targets are comfortable, and motion calms down when reduced motion is on.
Execution and polish (5 pts): A complete, functional skin with consistent styling across controls, menus, and player states. No bugs, broken layouts, or unfinished states.
Bonus points
+1 pt: Host your video on Mux and include the asset’s public playback ID. Your player must play that video, and the asset must stay live through judging. Why Mux? They're the corporate shepherd of Video.js (learn more below).
+1 pt: Put your skin to work. Share the URL of a real, live website of yours (a portfolio, a project, a client site) that plays video with your skin.
Account creation - Video.js is free and open source. Mux’s Free Plan offers you what you need to earn the bonus point, with no promo code or credit card needed. To host your video on Mux:
Sign up at mux.com.
In the dashboard, go to Video > Assets and click Create New Asset to upload a video.
When the status shows Ready, open the ⋮ menu on your asset and choose Copy > Playback ID.
Paste the Playback ID into the submission form, and keep the asset live through judging.
How to enter
Start with your idea: sketch your design in any tool, or skip straight to building.
Get set up: Install Node.js (a free download that the setup commands run on; with AI you won’t use it directly). To build with AI, also have a coding agent such as Claude Code, Codex, or Cursor. To deploy, make a free account with a host such as Vercel or Netlify.
Build your skin. Pick a route:
With AI (easiest if you design more than you code): Paste the AI quickstart prompt from the Build with AI guide into your coding agent to install the Video.js skill, then start a new session. Ask it to help you design your own Video.js skin and choose the video preset when it asks. Then describe your design, share your own icons or images, and iterate.
By hand: Run npx @videojs/cli skin create, choose the video preset when prompted, then follow the Build your own skin guide to preview and build it.
From scratch: Any framework (HTML, React, Vue, Svelte, or another) and styling approach (CSS, Tailwind, or another), as long as it uses Video.js v10.
Optional bonuses (see Bonus points above): 
Mux: Host your video on Mux and play it in your player. 
Live-site:  Move your skin into a real site of yours. If your submitted URL is already a real site, use that.
Check your work: Test your player over a bright and a dark video, resized, and with only a keyboard. With AI, also ask your agent, “Audit my skin for working controls, responsive layout, keyboard access, visible focus, contrast over bright and dark video, tap-friendly controls, and reduced motion. Fix any issues.”
Deploy your skin to Vercel or Netlify for a public URL by running npm run deploy, or ask your agent to do it.
Submit your URL and description. For the bonuses, include your Mux playback ID and live-site URL.
Resources
Video.js skins design inspiration: Read Sam's blog post on how he designed the v10 skins.
Build your own skin: Step-by-step guide to creating a skin project, previewing it, and deploying it. Start from Scaffold, Default, Neutral, or Compat. Want a quick look first? Try the skin sandbox.
Skill + prompts: The Build with AI guide has a quickstart prompt that installs the Video.js skill in your coding agent (Claude Code, Codex, Cursor, or tool of your choice). Then try: “Help me design my own Video.js skin for a podcast player.”
Docs: Read about skins and how to customize them, and a handy icons reference.
Video walkthrough: Watch Sam go from design to a working skin.
Questions?
Questions about the challenge or your submission? Contact Contra at hello@contra.com. Contra will pass technical questions about Video.js v10 to the Video.js team.
The prizes
The following prizes will be distributed to the winners selected by our judges.
🏆 Total: $10,000
$5,000 for 1st place
$3,000 for 2nd place
$2,000 for 3rd place
Video.js Skins Design Challenge Sponsor: Mux is the proud corporate shepherd of Video.js. Mux is video infrastructure for developers. From video streaming to video intelligence and AI-powered context, Mux helps teams do more with video. Stream it, moderate it, search it, analyze it, transform it. https://www.mux.com/
Meet the judges
Industry experts who will evaluate your submissions


Sam Potts
