---
title: Mysterium
details:
  keys: 88
  oled: false
  leds:
    perkey: false
    glowing: false
  splitted: false
  keys_distribuition: Orthogonal
  license: Open Source
  hotswappable: false
  firmware:
    - QMK
  source:
    repository: https://github.com/coseyfannitutti/mysterium
    user:
      name: Cosey Fannitutti
      url: https://github.com/coseyfannitutti
  revisions:
    - v1
    - v2
switch_socket:
  - MX
images:
  - keyboard/mysterium/1.jpg
  - keyboard/mysterium/2.jpg
  - keyboard/mysterium/3.jpg
components:
  - component: Mysterium Keyboard PCB
    revision:
      - v1
    required: true
    quantity: 1
    where_to_buy:
      - url: https://www.cftkb.com/shop/mysterium-tkl-diy-keyboard-kit
        store: cftkb
  - component: ATMega32A
    revision:
      - v1
    required: true
    quantity: 1
  - component: 40-pin IC Socket
    revision:
      - v1
    required: true
    quantity: 1
  - component: 16 Mhz Crystal
    revision:
      - v1
    required: true
    quantity: 1
  - component: 75Ohm Through-Hole Resistor
    revision:
      - v1
    required: true
    quantity: 2
  - component: 1.5KOhm Through-Hole Resistor
    revision:
      - v1
    required: true
    quantity: 2
  - component: 5.1KOhm Through-Hole Resistor
    revision:
      - v1
    required: true
    quantity: 2
  - component: 10KOhm Through-Hole Resistor
    revision:
      - v1
    required: true
    quantity: 1
  - component: 22pF Through-Hole Capacitor
    revision:
      - v1
    required: true
    quantity: 2
  - component: 0.1uF Through-Hole Capacitor
    revision:
      - v1
    required: true
    quantity: 2
  - component: 4.7uF Through-Hole Capacitor
    revision:
      - v1
    required: true
    quantity: 1
  - component: 3mm Through-Hole LED
    revision:
      - v1
    required: true
    quantity: 1
  - component: Through-Hole Diodes 1N4148
    revision:
      - v1
    required: true
    quantity: 90
  - component: Tactile reset switch
    revision:
      - v1
    required: true
    quantity: 2
  - component: 2x3 Through-Hole Header
    revision:
      - v1
    required: false
    quantity: 1
  - component: USB-C Through-Hole Port
    revision:
      - v1
    required: true
    quantity: 1
  - component: 3.6V Through-Hole Zenner Diodes
    revision:
      - v1
    required: true
    quantity: 2
  - component: 500mA Through-Hole Resettable Fuse (5.1mm)
    revision:
      - v1
    required: true
    quantity: 1
buildlogs:
  - url: https://static1.squarespace.com/static/5c533d33348cd92b886e544d/t/5faf630b1cc5cc6622868843/1605329678506/MYSTERIUM+V2+BUILD+GUIDE.pdf
    language: english
    type: pdf
    revision: v1
    author:
      name: Cosey Fannitutti
      url: https://github.com/coseyfannitutti
---

A through-hole TKL keyboard with exposed components. Everything comes in a kit.
