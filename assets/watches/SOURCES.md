# Watch photographs and specifications

The page is static HTML/CSS. These links record source photographs and
specifications used when adding it (October 2026); they are not a runtime
dependency. The Serica and the front-facing Dietrich, ochs, MING, WMT
and Kurono catalog views, plus Autodromo, use the built-in image editing tool.
These are fresh renders from original photographs, without generated-image inputs.
Original PNGs and reference photographs stay outside git. Each watch has one serving WebP,
resized to at most 720 pixels wide and encoded losslessly with its alpha by
`scripts/prepare-watch-images.mjs`. CSS handles framing; no browser image masks
or extra image-size variants are used.
The DOXA uses a fresh cutout of its original manufacturer photograph, with
an all-black crown end, replacing the earlier generated catalog revisions.
The Steinhart uses the maker’s original head-on transparent product photo,
with resizing and lossless encoding only. Its published 30 ATM rating is shown
as 300 m, alongside its 42 mm diameter and 13.0 mm total height.
Photographs remain the property of their respective owners. Exact edit prompts
and extra reference sources are recorded in [IMAGE_EDITS.md](IMAGE_EDITS.md).

Measurements are in millimetres, water resistance in metres. Displayed
thicknesses are rounded to one decimal. Thickness includes the crystal where
published. The Toki uses approximately 11.0 mm including sapphire, explicitly
reported in Worn & Wound's owner review; Beans & Bezels measured 10.5 mm overall.
The maker's 7 mm specification excludes sapphire. The tag uses an approximation
rather than presenting the conflicting overall measurements as an exact
manufacturer specification. The Dietrich uses its largest stated case dimension,
48 mm; the DOXA uses the larger side of its 42.5 × 45 mm case.
The Autodromo uses its published 38.5 mm case width (40 mm is lug-to-lug).
UNIMATIC uses 41.5 mm including the bezel and 14.1 mm including the crystal.
The settimana raw is the 40 mm version requested by the owner. The DOXA and
Autodromo photographs match the black-strap and Grey Anodized variants in the
supplied links. WMT's VK63 is classified as mechaquartz (quartz timekeeping,
mechanical chronograph reset); the other WMT models are automatic.

Additional specification sources:

- Toki including sapphire: https://wornandwound.com/review/owners-review-kurono-tokyo-toki/
- Toki measured overall height: https://www.beansandbezels.com/reviews/kurono-tokyo-toki/
- Dietrich preferred head-on pose: https://www.barnebys.co.uk/realised-prices/lot/dietrich-organic-time-automatic-skeleton-silver-green-ay5D6PX-629061972
- Dietrich pose photograph: https://bbys.imgix.net/34/bb9a6138df1b95323dc9b86c8f5bbb94197145215e3b680f1782bdac46e28c92.jpg
- Bluefin GPHG original front-facing photograph: https://cms.gphg.org/uploads/photothumbnail_gphg2024_MING_37_9_Bluefin_001_ff97df63e5.jpg
- Bluefin crystal and 12 o’clock details: https://www.beansandbezels.com/wp-content/uploads/2025/02/ming_3709_bluefin_gphg_award_winner_dive_watch_16_2025__4_29_24_PM-1229x1536.jpg
- Steinhart technical specifications: https://www.steinhartwatches.de/en/diver-watch/diver-watch-42mm/ocean-one-vintage-red.html
- Panton clear bezel material reference: https://wmtwatches.com/wp-content/uploads/2025/02/P2050346.jpg
- settimana raw: https://www.ochsundjunior.swiss/watches/settimana-raw/
- UNIMATIC dimensions: https://www.unimaticwatches.com/cdn/shop/files/TECH-SPECS-POUCH-UC3.pdf
- Sinn 903 St II: https://sinn-japan.jp/product/chronographs/903st2
- Sinn 140 St: https://sinn-japan.jp/product/new_models/140st
- Sinn U50 SDR TEGIMENT: https://www.abtsaat.com/sinn-u50-sdr-tegiment-1050-050-otomatik-erkek-kol-saati
- VK63 hybrid chronograph: https://www.timemodule.com/en/product_line_up/quartz/chronograph/premium_chronograph_VK/

| Watch | Case / thickness | WR | Movement | Product / specification source | Photograph |
| --- | --- | --- | --- | --- | --- |
| Dietrich OT-3 | 48 / 13.7 | 50 | Automatic | [Product](https://dietrich.com/product/ot-3/) | [dietrich-ot3.webp](https://dietrich.com/wp-content/uploads/2024/11/OT-3-Front.jpg) |
| Serica 5303-3 · Crystal Blue | 39 / 12.2 | 300 | Automatic | [Product](https://serica-watches.com/en/collections/collection-5303/products/5303-3-diving-chronometer) | [serica-5303.webp](https://serica-watches.com/cdn/shop/files/5303-blue-3h-packshot-01.jpg?v=1747301155&width=1200) |
| ochs und junior settimana raw | 40 / 10.8 | 50 | Automatic | [Product](https://www.ochsundjunior.swiss/watches/settimana-raw/shop/) | [ochs-settimana.webp](https://www.ochsundjunior.swiss/wp-content/uploads/40mm_NEU-settimana_201208_7151-Front_nickel_RGB-2-3540x2359.jpg) |
| MING 37.08 Twilight | 38 / 10.9 | 100 | Manual | [Product](https://www.ming.watch/featured-product/ming-37-08-twilight) | [ming-twilight.webp](https://cdn.prod.website-files.com/62cd089edd0c372e58a75932/69c4fc773fd97e1ec239d8ac_907X_B0008225.jpg) |
| MING 37.09 Bluefin | 38 / 12.8 | 600 | Automatic | [Product](https://www.ming.watch/featured-product/ming-37-09-bluefin) | [ming-bluefin.webp](https://cdn.prod.website-files.com/62cd089edd0c372e58a75932/673eb5244357102f363426c5_907X_B0005362.jpg) |
| MING 37.02 Minimalist | 38 / 11 | 100 | Automatic | [Product](https://www.ming.watch/featured-product/ming-37-02-minimalist) | [ming-minimalist.webp](https://cdn.prod.website-files.com/62cd089edd0c372e58a75932/67173d33912d60d1eb919623_907X_B0006228.jpg) |
| Sinn 903 St II | 41 / 14.5 | 200 | Automatic | [Product](https://www.sinn.de/en/watches/design-awards-honours/903-st-ii.html) | [sinn-903.webp](https://storage.googleapis.com/studio-cms-assets/projects/7kadV938O3/s-1000x1000_e723723d-9a57-41bf-8f88-22fa4feb1966.webp) |
| Sinn 140 St | 44 / 15 | 100 | Automatic | [Product](https://www.sinn.de/en/watches/140-st.html) | [sinn-140.webp](https://storage.googleapis.com/studio-cms-assets/projects/7kadV938O3/s-1000x1000_7b8e0a9e-51ba-421a-9313-0824eb0424fd.webp) |
| Sinn U50 SDR · TEGIMENT | 41 / 11.2 | 500 | Automatic | [Product](https://www.sinn.de/en/watches/u50-sdr-tegiment.html) | [sinn-u50.webp](https://www.abtsaat.com/productimages/102312/original/sinn-1050.050-erkek-kol-saati-1.png) |
| echo/neutra 1956 Chrono · Black | 40 / 14.1 | 100 | Manual | [Product](https://echoneutra.com/products/1956-chrono-black) | [echo-1956.webp](https://echoneutra.com/cdn/shop/files/1956-5H-Nero-Vintage.png?v=1736862157) |
| UNIMATIC Modello Tre UC3 | 41.5 / 14.1 | 300 | Mechaquartz | [Product](https://www.unimaticwatches.com/products/uwk-uc3) | [unimatic-uc3.webp](https://www.unimaticwatches.com/cdn/shop/files/UC-3-Hero.png?v=1785834808&width=1200) |
| WMT Sanford MKII | 39.5 / 14.89 | 100 | Automatic | [Product](https://wmtwatches.com/product/sanford-mkii-interchangeable-bezel/) | [wmt-sanford.webp](https://wmtwatches.com/wp-content/uploads/PC070621.jpg) |
| WMT Panton MKII · Heavy Aged | 38 / 14.5 | 100 | Automatic | [Product](https://wmtwatches.com/product/panton-mkii-black-dial-heavy-aged-shipping-date-end-of-june-2025/) | [wmt-panton.webp](https://wmtwatches.com/wp-content/uploads/2025/02/P2050337.jpg) |
| WMT Montana Racer · Tropical | 37.5 / 14.23 | 100 | Automatic | [Product](https://wmtwatches.com/product/montana-racer-tropical-dial-limited-30pc-pre-order-shipping-date-mid-of-nov-2022/) | [wmt-montana.webp](https://wmtwatches.com/wp-content/uploads/P1010432-2.jpg) |
| WMT GP1 MKII · 0060C | 37 / 13.8 | 100 | Mechaquartz | [Product](https://wmtwatches.com/product/gp1mkii0060c-pre-order-delivery-date-end-of-sep-2025/) | [wmt-gp1.webp](https://wmtwatches.com/wp-content/uploads/2025/08/P8031484.jpg) |
| WMT Cabochon · Arabic Numerals | 36 / 13 | 100 | Automatic | [Product](https://wmtwatches.com/product/cabochon-arabic-numerals-edition-limited-50pcs-pre-order-delivery-date-early-of-november-2025/) | [wmt-cabochon.webp](https://wmtwatches.com/wp-content/uploads/2025/10/P9290598.jpg) |
| WMT Royal Marine · Heavy Aged | 39.5 / 14.8 | 100 | Automatic | [Product](https://wmtwatches.com/product/royal-marine-black-dial-heavy-aged-edition-pre-order-shipping-date-end-of-oct-2024/) | [wmt-royal.webp](https://wmtwatches.com/wp-content/uploads/2024/10/P9300825.jpg) |
| Steinhart Ocean One · Vintage Red | 42 / 13.0 | 300 | Automatic | [Product](https://www.steinhartwatches.de/en/diver-watch/ocean-one-vintage-red.html) | [steinhart-vintage-red.webp](https://www.steinhartwatches.de/media/catalog/product/1/_/1_frontal_10.png) |
| NOMOS Glashütte Autobahn · Sports Gray | 41 / 10.5 | 100 | Automatic | [Product](https://nomos-glashuette.com/en/autobahn/autobahn-neomatik-41-date-sports-gray-1303) | [nomos-autobahn.webp](https://cdn.nomos-glashuette.com/img/f=scale-down,w=1024,bg=gray,sf=png/webshop/20/7f/a2/1743076881/1303_Autobahn_neomatik_41_D_sportgrau_1Bn_PR-01.jpg) |
| DOXA SUB 300 Carbon · Professional | 45 / 13.4 | 300 | Automatic | [Product](https://ch.doxawatches.com/products/sub-300-carbon-professional?variant=39247869837391) | [doxa-carbon.webp](https://ch.doxawatches.com/cdn/shop/products/DOXA_SUB_300_822_70_351_20.jpg?width=900) |
| Kurono Tokyo Chronograph 3 · Hisui | 38 / 13.5 | 30 | Automatic | [Product](https://kuronotokyo.com/pages/chronograph-3) | [kurono-hisui.webp](https://kuronotokyo.com/cdn/shop/files/C3-02-W-SS.jpg?width=900) |
| Kurono Tokyo 2021 Anniversary · Toki | 37 / ≈11.0 | 30 | Automatic | [Product](https://kuronotokyo.com/pages/2021-anniversary-toki) | [kurono-toki.webp](https://kuronotokyo.com/cdn/shop/files/Kurono__Toki__01_SPF_Toki_c29fdf98-b037-4fdc-a230-615d2078b1ee.jpg?v=1668412158&width=1080) |
| Autodromo Group C Turbo Sport · Grey | 38.5 / 11.4 | 50 | Quartz | [Product](https://autodromo.com/products/group-c-turbo-sport?variant=44026647019654) | [autodromo-groupc.webp](https://autodromo.com/cdn/shop/files/gray_ano_front.jpg?width=900) |

## Serica image edit

The accepted Serica source PNG was produced with the built-in image editing
tool using the manufacturer photograph linked above. Its serving WebP uses
the same accepted artwork, with resizing/encoding only; CSS handles framing.

Prompt used:

> Use case: background-extraction. Edit target: the supplied original Serica 5303 watch product photograph. Remove ONLY the plain white/light gray background and output a genuinely transparent PNG cutout. Precisely retain the ENTIRE photographed watch including the solid polished steel lugs, complete crown, tiny bezel teeth, and both lengths of mesh bracelet down to the dark bottom tip. Make the outside edges clean and naturally antialiased, without chipped sections, white halos or black outlines. Invariants: keep the original watch photograph and its exact design; preserve dial, hands, every numeral and letter, colors, reflection, perspective and geometry. Do not redraw, restyle, relight, invent, sharpen or enhance the watch. Preserve original image canvas placement and scale if possible. No shadow, no other objects, no background, no checkerboard.
