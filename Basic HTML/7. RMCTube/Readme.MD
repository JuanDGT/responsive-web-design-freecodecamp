# RMCTube

A lightweight HTML5-based media player demonstrating native audio and video capabilities with a clean, responsive UI.

This project was built as part of a frontend development lab focused on semantic HTML structure, media handling, and cross-format compatibility.

---

## Overview

RMCTube implements a minimal multimedia interface using native browser APIs.  
It is intentionally framework-free to emphasize direct control over HTML media elements and their behavior across different formats and browsers.

The layout follows a clean, Apple-inspired design approach prioritizing clarity, spacing, and visual hierarchy.

---

## Features

- Native HTML5 video player
  - Multi-format support (MP4, WebM, OGG, MOV)
  - Poster image support
  - Built-in browser controls

- Native HTML5 audio player
  - Loop-enabled playback
  - Multiple source fallback support

- Responsive layout
- Minimal, system-based typography
- Clean card-based UI structure

---

## Technical Stack

- HTML5 (semantic markup)
- CSS3 (flexbox, spacing, visual hierarchy)

No external frameworks or libraries are used.

---

## 🚀 Live Demo
Check it out on CodePen:  
[RMCTube](https://codepen.io/Juan-Diego-Gutierrez-Torres/pen/wBoBJWL)


---

## Design Decisions

- **Native-first approach**: Uses built-in browser media capabilities instead of external players.
- **Format redundancy**: Multiple `<source>` elements ensure cross-browser compatibility.
- **Minimal UI philosophy**: Focus on content hierarchy rather than visual complexity.
- **Separation of concerns**: Strict separation between structure and presentation.

---

## Browser Support

Tested on modern evergreen browsers:
- Chrome
- Firefox
- Edge
- Safari (codec-dependent support applies)

---

## Limitations

- No custom media controls (intentionally excluded to preserve native behavior)
- No streaming backend integration
- No adaptive bitrate support

---

## Future Improvements

- Custom media control layer (playback, timeline, volume)
- Keyboard accessibility enhancements
- Picture-in-picture integration
- Theming system (light/dark mode)
- React/vanilla JS refactor into reusable component

---

## Context

Built as a frontend learning exercise to reinforce:
- HTML media APIs
- Semantic structure
- Cross-format compatibility strategies
- Minimal UI design principles

---

## License

MIT — for educational and personal use.