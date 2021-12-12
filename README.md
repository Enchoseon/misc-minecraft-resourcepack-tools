# Misc Minecraft Resourcepack Tools
Assorted tools to help with creating some types of Minecraft resourcepacks.

# Installation

`npm install`

# Panorama Assembler

**Instructions:**
1. Place six (6) images in the `_input` folder. (See: *Tips on aligning photos* for more info.)
    - In alphabetical order, they should be:
      - North (-Z)
      - East (+X)
      - South (+Z)
      - West (-X)
      - Upwards (facing -Z)
      - Downwards (facing -Z)
2. `node panorama-assembler.js`
3. Enter name of pack.
4. Enter description of pack.
     - Remember to keep it short!
5. Enter a version between 1 & 8. (See: *Version Cheat Sheet* below for more info.)
6. Your resource pack will be in `_output/Panorama Assembler/`

**Tips on aligning photos:**
- Set your FOV to 90
- Use rotatation commands if your client/mod supports it—or use [Vistas](https://github.com/TerraformersMC/Vistas).
- Disable the daylight cycle—or use a time changer mod to lock the time.
- Disable dynamic exposure/color adjustment in your shader if possible.

# Player-to-Totem

**Instructions:**
1. `node player-to-totem.js`
2. Enter playername.
3. Enter a version between 1 & 8. (See: *Version cheat sheet* below for more info.)
4. Your resource pack will be in `_output/Player-to-Totem/`

# Version Cheat Sheet

| Pack Version | Minecraft Version |
|:------------:|:-----------------:|
| 1            | 1.6.1 – 1.8.9     |
| 2            | 1.9 – 1.10.2      |
| 3            | 1.11 – 1.12.2     |
| 4            | 1.13 – 1.14.4     |
| 5            | 1.15 – 1.16.1     |
| 6            | 1.16.2 – 1.16.5   |
| 7            | 1.17.x            |
| 8            | 1.18.x            |
