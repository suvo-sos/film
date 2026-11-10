# Film

A Video.js v10 video skin for React, styled with CSS. It started from the Scaffold skin.

## Design thinking

Film turns the player into a pocket-operator video deck. The controls are a pale, moulded plastic panel bolted over the footage — a dark chassis lip, an olive LCD for the time — rather than a translucent bar floating on it. An olive LCD holds the time in the deck's right corner, the timeline is a tape groove with an orange tape and a ridged fader cap, volume is a speaker key that opens a volume bar on click, and every function is a chunky key with a printed legend — except the transport, which is icon-only. One key is orange: the transport, like RECORD on a sampler. Depth comes from hard neumorphic shadow instead of glass or glow, so the deck reads the same over bright and dark video, and it stays honest underneath: real Video.js controls, keyboard focus visible on every key and slider, thumb-sized targets on phones, a reduced-motion mode that stops every animation, and no text hardcoded into the interface.

Mux playback ID (bonus): the preview plays Mux asset `pEPlVJYPMuiTQFXHuBrxKEou2702HeT1zLxkhRp0098uE` (`https://stream.mux.com/pEPlVJYPMuiTQFXHuBrxKEou2702HeT1zLxkhRp0098uE.m3u8`, HLS). Keep the asset live through judging.

## One minimal page

White page, nothing on top — just the player, streaming that Mux asset. No header, no icons, no picker, no upload, and no video file bundled with the site.

## Develop

```sh
npm run dev
```

The workbench opens your skin in a slimmed-down version of the Video.js sandbox. It plays NASA's Cosmic Dawn trailer from Mux, with chapters; change the media in `apps/preview/src/frame/player`. The options panel sets the player's width and aspect ratio, the color scheme, text direction, and language, and playback options such as autoplay, muted, loop, and preload. The arrow button opens the preview on its own. The settings live in the URL, so a link such as `/?width=384&ratio=9:16&dir=rtl&locale=ar` opens the workbench in that state, and `/preview.html#width=384&ratio=9:16` opens the preview alone.

## Deploy

```sh
npm run deploy
```

It asks where to deploy the workbench: Vercel, Netlify, or Cloudflare Pages. Name one to skip the question, such as `npm run deploy vercel`. The first time, the host's CLI signs you in and creates the project, then every run prints the URL. Vercel and Netlify deploy to a preview URL you can share; to deploy to production instead, add `--prod` to the `deploy:netlify` script, or to both commands in `deploy:vercel`.

To deploy on every push instead, put the project on GitHub and import it on Vercel or Netlify; `vercel.json` and `netlify.toml` already describe the build. The build uses relative URLs, so `dist/` also works on any static host, including in a subfolder.

## Where things live

- `src/`: your skin, and only your skin. Keep, rewrite, or delete any of it.
  - `src/video/`: the skin component and its parts.
  - `src/styles/`: theme tokens and shared styles the skin imports, when it started from a packaged skin.
  - `src/skin.css`: global styles for the skin.
- `apps/preview/`: the workbench that previews the skin. You don't need to change it.
  - `src/shell/`: the Shadcn shell.
  - `src/frame/`: the page the shell frames. `player` mounts your skin in a player and sets the media it plays.
  - `public/`: files the preview serves, such as the chapters track.
- `vercel.json`, `netlify.toml`: how those hosts build the workbench.
- `skin.json`: what this skin is built from. Keep it; it records the Video.js version the skin was created with.

## Learn more

- [Build your own skin](https://videojs.org/docs/framework/react/guides/build-your-own-skin)
- [Customize skins](https://videojs.org/docs/framework/react/guides/customize-skins)
- [UI components](https://videojs.org/docs/framework/react/guides/ui-components)
