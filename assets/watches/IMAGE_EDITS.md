# Catalog image edits

Tool mode: built-in image generation/editing tool.

The current renders below start directly from original manufacturer photographs.
Each accepted image is a fresh source-based render; generated images are never
used as inputs to another render. Reference URLs are in [SOURCES.md](SOURCES.md).
The accepted PNGs stay outside git; the site serves one losslessly encoded WebP
per watch. CSS handles framing and the string attachment.

The Steinhart uses its original manufacturer transparent photograph with no
generated edit. The Serica retains its original single-pass background extraction, documented
in SOURCES.md. The DOXA retains the source-based reset documented below.

## Dietrich OT-3

Serving asset: `dietrich-ot3.webp`

Inputs: the user’s Barnebys head-on photograph for pose and the manufacturer photograph for fine dial details.

Exact prompt:

Use case: product-mockup / fresh reference-based catalog photograph. Use only these ORIGINAL PHOTOGRAPHS to produce one faithful new catalog image. A straight-on face-on watch with dial parallel to sensor, centered lens perpendicular to dial, 12 o'clock up, no camera pitch or yaw. Full watch with compact matching vertical strap/bracelet sections above and below, about .35 case diameter each, no open loops or undersides, modest 5% empty margin. Neutral softly diffused photographic studio lighting, restrained natural colors and reflections. Preserve actual product identity and fine original markings, no redesign, stylization, cartoon appearance, waxy smoothing or illustration. Real genuinely transparent alpha background, including lug gaps. No vignette, halo, white fringe, jagged edges, gray backdrop, shadow, text labels or props. IMAGE 1 is the AUTHORITATIVE CAMERA POSE AND CASE GEOMETRY: copy its genuinely head-on, nearly planar appearance. IMAGE 2 supplies high-resolution original dial/material details ONLY, NOT its bottom-up viewpoint. The previous attempts exposed too much of the LOWER CASE/LUG and looked up at the watch. Do not do that. The lower lug/case lip should be almost hidden beneath the bezel, a thin unobtrusive sliver like image1; do not create a deep curved lower apron or tall lower wall. Match image1's compact balanced top/bottom case perimeter and narrow lower lip exactly. Preserve the organic rounded hexagonal steel case, four dark hex screws, DIETRICH plaque at12, OT-3 at6, complex grey X-bridge skeleton with exposed black gear at9 and jewels, lime-green shaped hands/lume, gold spiky small-seconds star at4, original curved inscriptions and ridged crown at3. Original black woven nylon textile strap, with equal visible lengths above/below. Keep details sharp and photographic without exaggerating texture, contrast or the lower case.

## Autodromo Group C Turbo Sport · Grey

Serving asset: `autodromo-groupc.webp`

Inputs: original Autodromo Group C Turbo Sport · Grey photograph.

Exact prompt:

Use case: product-mockup / reference-guided fresh catalog render. Inputs are ORIGINAL PHOTOGRAPHS of the real product, NOT earlier generated renders. Build ONE fresh faithful product photograph directly from these original references. A strictly FACE-ON orthographic catalog view: camera centered on the dial, optical axis perpendicular to its plane, 12 up, 6 down. Absolutely no low/bottom-up angle, top-down angle, side view, keystone, foreshortening or skew. Upper and lower case edges balanced, no extra visible lower case wall. Preserve the actual watch's design and natural material textures, crisp original typography, exact hands/markers/scales, case shape, crown/pushers and strap/bracelet type. This is the same real watch, not a redesign. Use neutral diffused studio light with controlled realistic metal/glass highlights; no colored lighting, no theatrical glare, no waxy smoothing. Compact symmetrical vertical strap/bracelet sections above AND below the case, about .35 case diameter each, no open loops/buckles/undersides. Complete watch centered with ~5% transparent margin all around, watch occupies about 90% of canvas height. Smooth antialiased cutout edges without white fringe or jagged/chipped parts. OUTPUT GENUINELY TRANSPARENT ALPHA PNG, including all gaps between lugs and strap. No solid backdrop, gray glow, vignette, checkerboard, ground shadow, strings, labels or props. Generate directly from these original references in this one pass; do not base any detail on earlier generated images. Model-specific requirements: Preserve exactly the unique rounded oval grey anodized case with its softly bulbous body, black gridded combined analog/digital face, coral-red applied baton indices and two coral-red hands in original positions, red AUTODROMO emblem/lettering and Group C script, bottom LCD window reading 0:30.00 with SPLIT below, tiny TURBO SPORT CHRONO detail above LCD, grey stitched leather strap with its fabric-like textured center. Keep the two left pushers, black crown at3, orange pusher at4:30. These are real controls: do not crop away, add, move or distort. Exact case silhouette and crisp readable digital numerals; no invented extra dial, blobs or disconnected parts.

## MING 37.08 Twilight

Serving asset: `ming-twilight.webp`

Inputs: original MING 37.08 Twilight photograph.

Exact prompt:

Use case: product-mockup / reference-guided fresh catalog render. Inputs are ORIGINAL PHOTOGRAPHS of the real product, NOT earlier generated renders. Build ONE fresh faithful product photograph directly from these original references. A strictly FACE-ON orthographic catalog view: camera centered on the dial, optical axis perpendicular to its plane, 12 up, 6 down. Absolutely no low/bottom-up angle, top-down angle, side view, keystone, foreshortening or skew. Upper and lower case edges balanced, no extra visible lower case wall. Preserve the actual watch's design and natural material textures, crisp original typography, exact hands/markers/scales, case shape, crown/pushers and strap/bracelet type. This is the same real watch, not a redesign. Use neutral diffused studio light with controlled realistic metal/glass highlights; no colored lighting, no theatrical glare, no waxy smoothing. Compact symmetrical vertical strap/bracelet sections above AND below the case, about .35 case diameter each, no open loops/buckles/undersides. Complete watch centered with ~5% transparent margin all around, watch occupies about 90% of canvas height. Smooth antialiased cutout edges without white fringe or jagged/chipped parts. OUTPUT GENUINELY TRANSPARENT ALPHA PNG, including all gaps between lugs and strap. No solid backdrop, gray glow, vignette, checkerboard, ground shadow, strings, labels or props. Generate directly from these original references in this one pass; do not base any detail on earlier generated images. Model-specific requirements: MING 37.08 Twilight. Preserve the anthracite DLC case (do not turn it silver), dark blue aventurine star-like speckled dial, white outlined hour and minute hands, interrupted white chapter ring, MING signature, and anthracite leather strap with its original stitching. It has TWO central hands; do not add a seconds hand.

## MING 37.09 Bluefin

Serving asset: `ming-bluefin.webp`

Inputs: original GPHG front-facing photograph for the dial, case and handset; original maker photograph for the blue FKM strap; user-supplied Beans & Bezels photograph for the paired 12 o’clock marks and shaped crystal marker.

Exact prompt:

Use case: precise-object-edit / faithful photographic catalog cutout. Image1 is the ORIGINAL GPHG front-facing MING37.09 Bluefin photo, authoritative for the entire photographed watch face, case and hand positions. Preserve its exact dial artwork, original deep blue/black gradient, white double chapter rings, twin white capsule hash marks at12 and distinctive rounded triangular MING crystal marker beneath them. Do NOT redraw or simplify these markings. Keep its exact THREE hands and their positions, no extra hand or long minute-hand tail. The original face must remain photographic and faithful. Extend its original blue FKM rubber strap into short equal vertical sections above and below, using Image2 ONLY for original strap texture and embossed logo; no loop/buckle/underside. Image3 confirms the two luminous marks and shield-shaped marker at12 ONLY. Keep these correctly shaped and visible. Set the case truly head-on, lens perpendicular to dial, circle unforeshortened,12up6down. Preserve two original crowns, flared lugs, polished/brushed steel, and MING at6. Use neutral diffused studio light and restrained reflections. No offset ghost ring/circle/shield or extra black circular shape anywhere inside the dial; suppress double reflections of crystal markings, keep the blue dial clean like image1. Genuinely transparent background with natural fine antialiasing, no white fringe, backdrop, halo, vignette or shadow. Center complete watch and compact strap with5%clear margin, roughly90%canvas height. Real product photograph, not CGI or illustration. Use only these original photos; never a previous generated image.

## MING 37.02 Minimalist

Serving asset: `ming-minimalist.webp`

Inputs: original MING 37.02 Minimalist photograph.

Exact prompt:

Use case: product-mockup / reference-guided fresh catalog render. Inputs are ORIGINAL PHOTOGRAPHS of the real product, NOT earlier generated renders. Build ONE fresh faithful product photograph directly from these original references. A strictly FACE-ON orthographic catalog view: camera centered on the dial, optical axis perpendicular to its plane, 12 up, 6 down. Absolutely no low/bottom-up angle, top-down angle, side view, keystone, foreshortening or skew. Upper and lower case edges balanced, no extra visible lower case wall. Preserve the actual watch's design and natural material textures, crisp original typography, exact hands/markers/scales, case shape, crown/pushers and strap/bracelet type. This is the same real watch, not a redesign. Use neutral diffused studio light with controlled realistic metal/glass highlights; no colored lighting, no theatrical glare, no waxy smoothing. Compact symmetrical vertical strap/bracelet sections above AND below the case, about .35 case diameter each, no open loops/buckles/undersides. Complete watch centered with ~5% transparent margin all around, watch occupies about 90% of canvas height. Smooth antialiased cutout edges without white fringe or jagged/chipped parts. OUTPUT GENUINELY TRANSPARENT ALPHA PNG, including all gaps between lugs and strap. No solid backdrop, gray glow, vignette, checkerboard, ground shadow, strings, labels or props. Generate directly from these original references in this one pass; do not base any detail on earlier generated images. Model-specific requirements: MING 37.02 Minimalist. Image 1 is the straight-on geometry reference; image 2 gives the gloss BLACK dial color and black FKM rubber strap. Preserve the polished steel case, single crown, TWO outlined central hands, exact broken white concentric chapter ring and MING signature. Remove the gray glare on image 1's dial; keep it black. Do not add a seconds hand.

## WMT Sanford MKII Interchangeable Bezel

Serving asset: `wmt-sanford.webp`

Inputs: original WMT Sanford MKII Interchangeable Bezel photograph.

Exact prompt:

Use case: product-mockup / reference-guided fresh catalog render. Inputs are ORIGINAL PHOTOGRAPHS of the real product, NOT earlier generated renders. Build ONE fresh faithful product photograph directly from these original references. A strictly FACE-ON orthographic catalog view: camera centered on the dial, optical axis perpendicular to its plane, 12 up, 6 down. Absolutely no low/bottom-up angle, top-down angle, side view, keystone, foreshortening or skew. Upper and lower case edges balanced, no extra visible lower case wall. Preserve the actual watch's design and natural material textures, crisp original typography, exact hands/markers/scales, case shape, crown/pushers and strap/bracelet type. This is the same real watch, not a redesign. Use neutral diffused studio light with controlled realistic metal/glass highlights; no colored lighting, no theatrical glare, no waxy smoothing. Compact symmetrical vertical strap/bracelet sections above AND below the case, about .35 case diameter each, no open loops/buckles/undersides. Complete watch centered with ~5% transparent margin all around, watch occupies about 90% of canvas height. Smooth antialiased cutout edges without white fringe or jagged/chipped parts. OUTPUT GENUINELY TRANSPARENT ALPHA PNG, including all gaps between lugs and strap. No solid backdrop, gray glow, vignette, checkerboard, ground shadow, strings, labels or props. Generate directly from these original references in this one pass; do not base any detail on earlier generated images. Model-specific requirements: WMT Sanford MKII Interchangeable Bezel. Preserve its chunky light-blue and red 24-hour bezel with the exact numerals, aged dark dial and gilt hour markers, gilt Mercedes-style hands and red GMT hand, cyclops date at 3, WMT dial lettering, and original steel THREE-LINK bracelet. Retain deliberate aged patina; remove the blue lighting cast.

## WMT Panton MKII · Heavy Aged

Serving asset: `wmt-panton.webp`

Inputs: original Panton photograph and original bezel macro; restrained color/contrast and subtle gloss.

Exact prompt:

Use case: product-mockup / fresh reference-based catalog photograph. Use only these ORIGINAL PHOTOGRAPHS to produce one faithful new catalog image. A straight-on face-on watch with dial parallel to sensor, centered lens perpendicular to dial, 12 o'clock up, no camera pitch or yaw. Full watch with compact matching vertical strap/bracelet sections above and below, about .35 case diameter each, no open loops or undersides, modest 5% empty margin. Neutral softly diffused photographic studio lighting, restrained natural colors and reflections. Preserve actual product identity and fine original markings, no redesign, stylization, cartoon appearance, waxy smoothing or illustration. Real genuinely transparent alpha background, including lug gaps. No vignette, halo, white fringe, jagged edges, gray backdrop, shadow, text labels or props. WMT Panton MKII black dial Heavy Aged. IMAGE1 is authoritative for the product, colors and real photographic texture. IMAGE2 is a macro reference only for the clear curved bezel material. The previous render was too cartoon-like, candy-colored, too contrasty and chrome-shiny. Produce a QUIET NATURAL PHOTOGRAPH: aged deep NAVY and subdued dark WINE/BURGUNDY bezel, low-to-moderate saturation, soft small highlights, natural midtone contrast and understated gold/cream lume. No electric blue, bright magenta, blazing gold, huge white speculars or overly polished chrome. Preserve the real aged mottled black dial, thin cream printed bezel numerals/dots underneath the clear subtly curved lens, Mercedes gilt hands, red GMT hand, gilt hour indices, exact WMT lettering, red date18 and original steel FIVE-LINK Jubilee bracelet. The clear bezel has gentle optical depth and a restrained smooth reflection, not a candy-like thick clear dome or inflated/embossed numerals. Do not exaggerate bezel depth, patina, metal edges, or numeral thickness. Bracelet silver should look mostly softly brushed with controlled small polished highlights. Preserve deliberate aging while keeping it believable rather than decorative high-contrast marbling. Faithful front-facing photographic packshot with a subdued palette matching the original, not a shiny promotional 3D render.

## WMT Montana Racer Tropical Dial

Serving asset: `wmt-montana.webp`

Inputs: original WMT Montana Racer Tropical Dial photograph.

Exact prompt:

Use case: product-mockup / reference-guided fresh catalog render. Inputs are ORIGINAL PHOTOGRAPHS of the real product, NOT earlier generated renders. Build ONE fresh faithful product photograph directly from these original references. A strictly FACE-ON orthographic catalog view: camera centered on the dial, optical axis perpendicular to its plane, 12 up, 6 down. Absolutely no low/bottom-up angle, top-down angle, side view, keystone, foreshortening or skew. Upper and lower case edges balanced, no extra visible lower case wall. Preserve the actual watch's design and natural material textures, crisp original typography, exact hands/markers/scales, case shape, crown/pushers and strap/bracelet type. This is the same real watch, not a redesign. Use neutral diffused studio light with controlled realistic metal/glass highlights; no colored lighting, no theatrical glare, no waxy smoothing. Compact symmetrical vertical strap/bracelet sections above AND below the case, about .35 case diameter each, no open loops/buckles/undersides. Complete watch centered with ~5% transparent margin all around, watch occupies about 90% of canvas height. Smooth antialiased cutout edges without white fringe or jagged/chipped parts. OUTPUT GENUINELY TRANSPARENT ALPHA PNG, including all gaps between lugs and strap. No solid backdrop, gray glow, vignette, checkerboard, ground shadow, strings, labels or props. Generate directly from these original references in this one pass; do not base any detail on earlier generated images. Model-specific requirements: WMT Montana Racer Tropical Dial. Preserve ivory panda chronograph dial, THREE dark tropical-brown subdials with their exact numerals, dark brown outer dial track, black numbered tachymeter bezel, exact WMT WATCH EXPERIMENTAL UNIT lettering and red MONTANA lettering, rectangular baton markers and original brushed steel THREE-LINK bracelet. Retain the watch's brown/tropical coloring, while removing warm color cast from the lighting.

## WMT GP1 MKII 0060C

Serving asset: `wmt-gp1.webp`

Inputs: original WMT GP1 MKII 0060C photograph.

Exact prompt:

Use case: product-mockup / reference-guided fresh catalog render. Inputs are ORIGINAL PHOTOGRAPHS of the real product, NOT earlier generated renders. Build ONE fresh faithful product photograph directly from these original references. A strictly FACE-ON orthographic catalog view: camera centered on the dial, optical axis perpendicular to its plane, 12 up, 6 down. Absolutely no low/bottom-up angle, top-down angle, side view, keystone, foreshortening or skew. Upper and lower case edges balanced, no extra visible lower case wall. Preserve the actual watch's design and natural material textures, crisp original typography, exact hands/markers/scales, case shape, crown/pushers and strap/bracelet type. This is the same real watch, not a redesign. Use neutral diffused studio light with controlled realistic metal/glass highlights; no colored lighting, no theatrical glare, no waxy smoothing. Compact symmetrical vertical strap/bracelet sections above AND below the case, about .35 case diameter each, no open loops/buckles/undersides. Complete watch centered with ~5% transparent margin all around, watch occupies about 90% of canvas height. Smooth antialiased cutout edges without white fringe or jagged/chipped parts. OUTPUT GENUINELY TRANSPARENT ALPHA PNG, including all gaps between lugs and strap. No solid backdrop, gray glow, vignette, checkerboard, ground shadow, strings, labels or props. Generate directly from these original references in this one pass; do not base any detail on earlier generated images. Model-specific requirements: WMT GP1 MKII 0060C. Preserve ivory chronograph dial, THREE BLACK subdials with distinctive hand-drawn white numerals, hand-drawn WMT CHRONOGRAPH lettering and red GREEN LABEL text, black tachymeter bezel with the exact numerals, slim baton indices, three crowns/pushers and original brushed steel THREE-LINK bracelet. Remove the strong cyan/blue lighting cast; do not replace the charming irregular handwritten dial numerals with neat conventional numerals. CRITICAL: the actual three black subdials are NOT perfect circles. They are intentionally uneven hand-drawn ovals/rounded polygons with flats and corners. Match their photographed contours, all crooked handwritten white numbers/ticks and thin uneven red GREEN LABEL lettering exactly. Do NOT regularize subdials, replace lettering with a font, make red lettering bold, or clean up the watch's deliberate imperfect drawing. Keep those handmade quirks faithfully.

## WMT Cabochon Arabic Numerals Edition

Serving asset: `wmt-cabochon.webp`

Inputs: original WMT Cabochon Arabic Numerals Edition photograph.

Exact prompt:

Use case: product-mockup / reference-guided fresh catalog render. Inputs are ORIGINAL PHOTOGRAPHS of the real product, NOT earlier generated renders. Build ONE fresh faithful product photograph directly from these original references. A strictly FACE-ON orthographic catalog view: camera centered on the dial, optical axis perpendicular to its plane, 12 up, 6 down. Absolutely no low/bottom-up angle, top-down angle, side view, keystone, foreshortening or skew. Upper and lower case edges balanced, no extra visible lower case wall. Preserve the actual watch's design and natural material textures, crisp original typography, exact hands/markers/scales, case shape, crown/pushers and strap/bracelet type. This is the same real watch, not a redesign. Use neutral diffused studio light with controlled realistic metal/glass highlights; no colored lighting, no theatrical glare, no waxy smoothing. Compact symmetrical vertical strap/bracelet sections above AND below the case, about .35 case diameter each, no open loops/buckles/undersides. Complete watch centered with ~5% transparent margin all around, watch occupies about 90% of canvas height. Smooth antialiased cutout edges without white fringe or jagged/chipped parts. OUTPUT GENUINELY TRANSPARENT ALPHA PNG, including all gaps between lugs and strap. No solid backdrop, gray glow, vignette, checkerboard, ground shadow, strings, labels or props. Generate directly from these original references in this one pass; do not base any detail on earlier generated images. Model-specific requirements: WMT Cabochon Arabic Numerals Edition. Preserve black dial, exact EASTERN ARABIC numeral shapes and positions, silver hands, cyclops date at 3, WMT WATCH EXPERIMENTAL UNIT ACCURATE lettering, fluted silver steel bezel, right-side crown and original steel THREE-LINK bracelet. Sharpen the view naturally by using a frontal catalog pose, without changing the Arabic dial to Western numerals.

## WMT Royal Marine Black Dial Heavy Aged

Serving asset: `wmt-royal.webp`

Inputs: original WMT Royal Marine Black Dial Heavy Aged photograph.

Exact prompt:

Use case: product-mockup / reference-guided fresh catalog render. Inputs are ORIGINAL PHOTOGRAPHS of the real product, NOT earlier generated renders. Build ONE fresh faithful product photograph directly from these original references. A strictly FACE-ON orthographic catalog view: camera centered on the dial, optical axis perpendicular to its plane, 12 up, 6 down. Absolutely no low/bottom-up angle, top-down angle, side view, keystone, foreshortening or skew. Upper and lower case edges balanced, no extra visible lower case wall. Preserve the actual watch's design and natural material textures, crisp original typography, exact hands/markers/scales, case shape, crown/pushers and strap/bracelet type. This is the same real watch, not a redesign. Use neutral diffused studio light with controlled realistic metal/glass highlights; no colored lighting, no theatrical glare, no waxy smoothing. Compact symmetrical vertical strap/bracelet sections above AND below the case, about .35 case diameter each, no open loops/buckles/undersides. Complete watch centered with ~5% transparent margin all around, watch occupies about 90% of canvas height. Smooth antialiased cutout edges without white fringe or jagged/chipped parts. OUTPUT GENUINELY TRANSPARENT ALPHA PNG, including all gaps between lugs and strap. No solid backdrop, gray glow, vignette, checkerboard, ground shadow, strings, labels or props. Generate directly from these original references in this one pass; do not base any detail on earlier generated images. Model-specific requirements: WMT Royal Marine Black Dial Heavy Aged. Preserve aged black dive dial and black 60-minute bezel, gilt aged triangular/round/rectangular hour markers and Mercedes-style hands, exact WMT lettering and red ROYAL MARINE text, original brushed steel THREE-LINK bracelet and single crown. Retain deliberate patina and the original dial texture; remove cyan lighting and strong crystal glare.

## Kurono Tokyo Chronograph 3 Hisui

Serving asset: `kurono-hisui.webp`

Inputs: original Kurono Tokyo Chronograph 3 Hisui photograph.

Exact prompt:

Use case: product-mockup / reference-guided fresh catalog render. Inputs are ORIGINAL PHOTOGRAPHS of the real product, NOT earlier generated renders. Build ONE fresh faithful product photograph directly from these original references. A strictly FACE-ON orthographic catalog view: camera centered on the dial, optical axis perpendicular to its plane, 12 up, 6 down. Absolutely no low/bottom-up angle, top-down angle, side view, keystone, foreshortening or skew. Upper and lower case edges balanced, no extra visible lower case wall. Preserve the actual watch's design and natural material textures, crisp original typography, exact hands/markers/scales, case shape, crown/pushers and strap/bracelet type. This is the same real watch, not a redesign. Use neutral diffused studio light with controlled realistic metal/glass highlights; no colored lighting, no theatrical glare, no waxy smoothing. Compact symmetrical vertical strap/bracelet sections above AND below the case, about .35 case diameter each, no open loops/buckles/undersides. Complete watch centered with ~5% transparent margin all around, watch occupies about 90% of canvas height. Smooth antialiased cutout edges without white fringe or jagged/chipped parts. OUTPUT GENUINELY TRANSPARENT ALPHA PNG, including all gaps between lugs and strap. No solid backdrop, gray glow, vignette, checkerboard, ground shadow, strings, labels or props. Generate directly from these original references in this one pass; do not base any detail on earlier generated images. Model-specific requirements: Retain polished steel circular case, TWO pushers and ONE crown on right, white central dial, mint jade-green outer annulus and TWO mint-green subdials at3 and9, raised12, exact Japanese Kurono logo and BUNKYO TOKYO lettering, original silver hands/dot indices, date at6, black finely textured leather strap. Clean transparency between lugs; zero gray backdrop/glow. Do not replace mint with saturated green or invent any third subdial.

## Kurono Tokyo 2021 Anniversary Toki

Serving asset: `kurono-toki.webp`

Inputs: original Kurono Tokyo 2021 Anniversary Toki photograph.

Exact prompt:

Use case: product-mockup / reference-guided fresh catalog render. Inputs are ORIGINAL PHOTOGRAPHS of the real product, NOT earlier generated renders. Build ONE fresh faithful product photograph directly from these original references. A strictly FACE-ON orthographic catalog view: camera centered on the dial, optical axis perpendicular to its plane, 12 up, 6 down. Absolutely no low/bottom-up angle, top-down angle, side view, keystone, foreshortening or skew. Upper and lower case edges balanced, no extra visible lower case wall. Preserve the actual watch's design and natural material textures, crisp original typography, exact hands/markers/scales, case shape, crown/pushers and strap/bracelet type. This is the same real watch, not a redesign. Use neutral diffused studio light with controlled realistic metal/glass highlights; no colored lighting, no theatrical glare, no waxy smoothing. Compact symmetrical vertical strap/bracelet sections above AND below the case, about .35 case diameter each, no open loops/buckles/undersides. Complete watch centered with ~5% transparent margin all around, watch occupies about 90% of canvas height. Smooth antialiased cutout edges without white fringe or jagged/chipped parts. OUTPUT GENUINELY TRANSPARENT ALPHA PNG, including all gaps between lugs and strap. No solid backdrop, gray glow, vignette, checkerboard, ground shadow, strings, labels or props. Generate directly from these original references in this one pass; do not base any detail on earlier generated images. Model-specific requirements: Warm coral-copper SALMON sunburst dial (not gold, pink or red), polished silver case, slender curved lugs, original three shaped silver central hands in photographed positions, fine concentric silver chapter rings and black minute track, applied silver batons at12/3/6/9, Japanese Kurono logo and BUNKYO TOKYO under12, cursive Automatic above6, original plain black leather strap with pale stitching. No date, numerals or subdials. Keep fine real sunburst texture and clean transparency in lug gaps.

## ochs und junior settimana raw 40 mm

Serving asset: `ochs-settimana.webp`

Inputs: original ochs und junior settimana raw 40 mm photograph.

Exact prompt:

Use case: precise-object-edit / background-extraction. Use ONLY this ORIGINAL manufacturer photograph of the ochs und junior settimana raw 40mm as the source. It is already face-on. Preserve the actual photographic case and dial: exact circular raw brushed silver, fine straight machining scratches, original seven weekday recesses and dark dot, exact three black hands, crown and broad rectangular lugs. Change only: extend the ORIGINAL charcoal woven textile strap into straight matching sections about .35 case diameter above AND below; isolate the complete watch cleanly on truly transparent alpha. Camera square-on with no tilt. Compact centered catalog photo, full watch inside canvas, ~5% margin. IMPORTANT EDGE QUALITY: there must be NO white or cream fragments sticking outside the metal silhouette, NO white halos, no white pixels in transparent gaps, no pale residue around crown, NO spikes or protrusions along the round case. A natural continuously round smooth antialiased case boundary. No outer bright outline: the silver highlight belongs INSIDE the metal silhouette. The transparent canvas immediately outside that exact boundary must be entirely empty alpha zero. This will be displayed on nearly black, so every leftover pale background fragment is conspicuous. Do not add glow, vignette, backdrop, shadow, sharpening halo, invented texture or extra objects. Do not redesign or polish the raw watch. ONE fresh output straight from the original photograph, not a revision of a generated image.

## DOXA — reset to original photograph, all-black crown

Serving asset: `doxa-carbon.webp`

Supersedes the previous generated catalog and crown repairs. Fresh cutout from the original manufacturer photograph, preserving its pose and lighting, with a black crown end. Built-in image editing tool.

Use case: background-extraction / precise-object-edit. EDIT TARGET: this ORIGINAL manufacturer product photograph of the DOXA SUB 300 Carbon Professional on white. Make a clean transparent-background cutout of this exact photograph. Do NOT regenerate the watch or reinterpret its details: previous generated versions became overedited. Retain the original photographic pixels and natural sharpness, marbled carbon texture, bezel numerals, dial lettering, orange dial, hand positions, date 16, case shape, black rubber strap, perspective and lighting. Remove only the white background and ground shadow, including any white fringe at the crown. One tiny local correction: the crown at 3 o'clock must be entirely black, including its far-right rounded end. Remove the small orange sliver at that tip and reconstruct only that tiny end with matching black crown material. No orange, cream, white, or pale metal protrusion at the crown tip; preserve natural black ridges and subtle gray highlights. Keep the complete original watch centered at the same size and placement on the original 900x981 canvas if possible. Do not straighten, relight, sharpen, beautify, smooth, enlarge, redraw, or change any other part of the watch. Genuinely transparent alpha PNG. No background/checkerboard, no shadow or glow. Exact photographic preservation is more important than stylization.
