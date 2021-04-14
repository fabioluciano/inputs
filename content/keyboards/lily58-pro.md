---
title: Lily58 Pro
details:
  keys: 58
  oled: true
  splitted: true
  license: Open Source
  hotswappable: true
  source:
    repository: https://github.com/kata0510/Lily58
    user:
      name: Naoki Katahira
      url: https://github.com/kata0510
  switch_socket:
    - MX
    - Choc
  revisions:
    - Pro
    - Classic
    - Lite
images:
  - /assets/images/keyboard/lily58/1.jpg
  - /assets/images/keyboard/lily58/2.jpg
  - /assets/images/keyboard/lily58/3.webp
components:
  - component: PCB
    required: true
    revision:
      - Pro
    quantity: 2
    where_to_buy:
      - url: https://keycapsss.com/keyboard-parts/pcb/71/lily58-pro-split-keyboard-pcb?c=14
        store: Keycapsss
  - component: SMD Diodes 1N4148W
    revision:
      - Pro
    required: true
    quantity: 58
    where_to_buy:
      - url: https://www.aliexpress.com/item/200PCS-1N4148-1N4148WS-T4-1N4148W-SMD-0805-SOD-323-IN4148-0805-SOD323-Switching-Diode-new-and/32774047563.html?spm=a2g0o.cart.0.0.74333c00fty2j5
        store: AliExpress
  - component: Tactile reset switch
    revision:
      - Pro
    required: true
    quantity: 2
    where_to_buy:
      - url: https://pt.aliexpress.com/item/32703078819.html?spm=a2g0o.cart.0.0.74333c00dVqFLu
        store: AliExpress
  - component: TRRS jack
    revision:
      - Pro
    required: true
    quantity: 2
    where_to_buy:
      - url: https://pt.aliexpress.com/item/33029465106.html?spm=a2g0o.cart.0.0.74333c00dVqFLu
        store: AliExpress
buildlogs:
  - url: https://github.com/kata0510/Lily58/blob/master/Pro/Doc/buildguide_en.md
    revision: Pro
    language: english
    type: gallery
    author:
      name: Naoki Katahira
      url: https://github.com/kata0510
  - url: https://www.youtube.com/watch?v=kRrzfWv39G4&t=8308s
    revision: Pro
    language: english
    type: video
    author:
      name: Nicell
      url: https://www.youtube.com/channel/UCSC-GHVIaXR6q66bxuB_0Kg
---

Lily58 is 6\*4+4keys column-staggered split keyboard.
