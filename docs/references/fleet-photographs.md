# Fleet photographs and service journey assets

Supplied by the client via Downloads. Originals remain unchanged.

- `public/fleet/tanker-front-portrait.jpg`: `0cc371b0518538270fe4f05d391ae71a.jpeg`
- `public/fleet/tanker-side-road.jpg`: `WhatsApp Image 2026-09-03 at 12.38.16 PM.jpeg`
- `public/fleet/tanker-side-yard.jpg`: `WhatsApp Image 2026-09-09 at 7.34.20 PM.jpeg`
- `public/fleet/tanker-rear.jpg`: `WhatsApp Image 2026-09-09 at 7.34.35 PM.jpeg`
- `public/fleet/tanker-front-road.jpg`: `WhatsApp Image 2026-09-09 at 7.38.34 PM.jpeg`

Journey artwork comes from `shree_maruti_transport_truck_movement_animation_assets`. The tanker uses an SVG colour-to-alpha filter to remove white pixels and is sized smaller than the roadside buildings. The plant artwork uses a CSS crop; original files are preserved. The dispatch and receiving offices use detailed SVG elevations with windows, entrances, loading bays and red fascia accents. Two branched trees sit between the stops. The sequence loops left to right when visible, exits the viewport before restarting, and has pause/replay controls. The roadside scene includes two trees and a customer building; the moving tanker paints a red road trail and its wheel spokes rotate. Reduced motion shows a static journey. The supplied stock plant photo is archived with the assets but not displayed because the line illustration fits the sequence.

The journey now uses one scoped GSAP timeline for travel, road fill and distance-based wheel rotation. Short stops highlight the matching copy. The trail fades after the tanker exits; resize and visibility changes preserve a bounded, pausable loop. Mobile tanker width has a 48px minimum.
