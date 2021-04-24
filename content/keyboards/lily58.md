---
title: Lily58
details:
  keys: 58
  oled: true
  leds:
    perkey: false
    glowing: true
  splitted: true
  keys_distribuition: Staggered
  license: Open Source
  hotswappable: true
  source:
    repository: https://github.com/kata0510/Lily58
    user:
      name: Naoki Katahira
      url: https://github.com/kata0510
  revisions:
    - Pro
    - Classic
    - Lite
    - SplitKB
    - MysticMechs
switch_socket:
  - MX
  - Choc
images:
  - keyboard/lily58/1.jpg
  - keyboard/lily58/2.jpg
  - keyboard/lily58/3.webp
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
  - component: TRRS Jack
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
  - url: https://imgur.com/gallery/eM0zWS9
    revision: Pro
    language: english
    type: gallery
    author:
      name: Finestnothing
      url: https://imgur.com/user/Finestnothing
  - url: https://www.youtube.com/watch?v=kRrzfWv39G4&t=8308s
    revision: Pro
    language: english
    type: video
    author:
      name: Nicell
      url: https://www.youtube.com/channel/UCSC-GHVIaXR6q66bxuB_0Kg
diy_kits:
    - store: KeyHive
      url: https://keyhive.xyz/shop/lily58
      revision: Pro
      pre_assembled: false
    - store: MechBoards
      url: https://mechboards.co.uk/shop/kits/lily58-kit/
      revision: Pro
      pre_assembled: false
    - store: LittleKeyboards
      url: https://www.littlekeyboards.com/products/lily58-pro-pcb-kit
      revision: Pro
      pre_assembled: false
    - store: MysticMechs
      url: https://mysticmechs.com/products/lily58-pro-kit?variant=31711752159322
      revision: MysticMechs
      pre_assembled: false
    - store: 42Keebs
      url: https://42keebs.eu/shop/kits/lily58-split-ergo-50-kit-black/
      revision: Pro
      pre_assembled: false
    - store: Yushakobo
      url: https://shop.yushakobo.jp/products/lily58-pro
      revision: Pro
      pre_assembled: false
    - store: SplitKB
      url: https://splitkb.com/products/lily58-kb-pcb-kit
      revision: SplitKB
      pre_assembled: false
    - store: BoardSource
      url: https://boardsource.xyz/store/5ec9df84c6b834480de6c3d0
      revision: Pro
      pre_assembled: true

cases:
---

Lily58 is 6\*4+4keys column-staggered split keyboard.
