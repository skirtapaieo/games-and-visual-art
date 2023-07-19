# games-and-visual-art
Doing small games and visual art 



# History 


## Intellivision 


The Intellivision Entertainment Computer System (ECS) was essentially an add-on for the Intellivision that turned it into a rudimentary personal computer, with the capability to run a variant of the BASIC programming language.

The ECS BASIC was provided in a ROM cartridge that plugged into the Intellivision's cartridge slot. It allowed you to write and run simple BASIC programs.

When writing a BASIC program, you could use PEEK and POKE commands to read and write directly to specific memory addresses. These commands were common in 8-bit computing and they are used to interact with the computer at a low level. 

Here's what those commands look like:

```
A = PEEK(ADDRESS)     ' Reads the byte at ADDRESS into variable A
POKE ADDRESS, VALUE   ' Writes VALUE into the byte at ADDRESS
```

The Intellivision hardware has a designated area in memory for the 8 hardware sprites (also known as Moving Graphic Objects or MGOs). Each sprite is defined by a 8x8 or 8x16 pixel bitmap.

For example, to draw a sprite on the Intellivision ECS, you would need to POKE the bitmap data to the video chip's memory, and then set the sprite's X and Y position, size, and color with further POKE commands. 

Here's an example of what that might look like:

```
POKE SPRITE_ADDRESS, BITMAP_DATA   ' Writes the bitmap data to the sprite's address
POKE SPRITE_X_ADDRESS, X           ' Sets the sprite's X position
POKE SPRITE_Y_ADDRESS, Y           ' Sets the sprite's Y position
POKE SPRITE_SIZE_ADDRESS, SIZE     ' Sets the sprite's size
POKE SPRITE_COLOR_ADDRESS, COLOR   ' Sets the sprite's color
```

Note that SPRITE_ADDRESS, SPRITE_X_ADDRESS, SPRITE_Y_ADDRESS, SPRITE_SIZE_ADDRESS, and SPRITE_COLOR_ADDRESS would need to be replaced with the actual addresses for these properties, and BITMAP_DATA, X, Y, SIZE, and COLOR would need to be replaced with the values you want to set.

Also, remember that this code will only work if the Intellivision's memory map is set up in a certain way, and different games may have different setups. Furthermore, accessing data from a cartridge requires the cartridge to be inserted and the system to be set up to read from the cartridge's memory address space.

On a final note, be aware that messing with the memory directly can be risky—if you write to a memory address that's used for something important, you can crash the system or cause other unexpected behavior. Always make sure you understand what you're doing before you start poking around in the memory.

In conclusion, ECS BASIC has limitations. It was designed for educational purposes and to demonstrate the potential of the ECS, rather than as a serious tool for game development. Many of the Intellivision's features are difficult or impossible to access from BASIC, which is one reason why commercial Intellivision games were written in assembly language rather than BASIC.

### Intellivision - a first "game" 

``` BASIC

10 PRINT "Sprite Collision Test"
20 PRINT "Loading Sprite..."
30 FOR I = 5000 TO 5015
40 POKE I, 255 ' Set sprite data
50 NEXT I
60 PRINT "Sprite Loaded."

70 PRINT "Starting Game..."
80 POKE 53248, 0 ' Set sprite 1 X position
90 POKE 53249, 0 ' Set sprite 1 Y position
100 POKE 53250, 5000 ' Set sprite 1 image data pointer

110 POKE 53252, 50 ' Set sprite 2 X position
120 POKE 53253, 50 ' Set sprite 2 Y position
130 POKE 53254, 5000 ' Set sprite 2 image data pointer

140 PRINT "Game Running."
150 GOSUB 1000 ' Check for collision

160 FOR I = 1 TO 100
170 POKE 53248, PEEK(53248) + 1 ' Move sprite 1 X position
180 GOSUB 1000 ' Check for collision
190 NEXT I

200 PRINT "Game Over."
210 END

1000 ' Collision Check
1010 IF PEEK(53264) AND 3 THEN PRINT "Collision Detected."
1020 RETURN
```

## Atari 600 XL 

The Atari 600XL was a home computer and part of the Atari 8-bit family, released by Atari, Inc. in 1983. It was the low-end replacement for the Atari 400, and included the newer FREDDIE chip, which improved memory management.

The machine came with 16KB of RAM, but could be extended, often using Atari's own 1064 memory module, which added 48KB to the system for a total of 64KB. You mentioned a 6KB extension, but typically, RAM expansions were in larger increments for these systems (like the 48KB one just mentioned). 

Here are some specs for the Atari 600XL:

- **CPU:** MOS Technology 6502B running at 1.79 MHz (NTSC version) or 1.77 MHz (PAL version).
- **Memory:** 16KB RAM, expandable up to 64KB.
- **Graphics:** ANTIC and GTIA chips providing a variety of graphics modes, with a maximum resolution of 320x192 in monochrome or 160x192 in four colors.
- **Sound:** POKEY chip providing four channels of sound.
- **Storage:** ROM cartridge slot, and an external port for a cassette tape drive or floppy disk drive.
- **Input/Output:** Ports for two joysticks, one cartridge, TV output, serial I/O, and a parallel bus interface.
- **Operating System:** Atari 8-bit OS, along with the built-in Atari BASIC language for programming.

If you're looking to write a game for the Atari 600XL, you'll likely be using Atari BASIC, though Assembly was also used for more performance-critical or complex games. As with Intellivision, your game development process will involve writing the game, typically in an emulator on a modern PC, before testing it out on the actual hardware (or within the emulator).

You can definitely access and manipulate sprites (known as player/missile graphics in Atari parlance) directly in memory using PEEK and POKE commands, as well as utilize various hardware tricks that the Atari 8-bit family was known for.

If you're interested in the specifics of writing a game for the Atari 600XL, including creating sprites, managing player input, and so on, it's recommended that you find a good resource or book on Atari BASIC or Atari 600XL game development, as the process is too complex to fully cover here.

In general, though, the key is to learn and understand the hardware capabilities of the Atari 600XL, learn how to program in Atari BASIC or Assembly (depending on your ambition level and the complexity of the game you want to create), and then practice creating simple games and gradually work your way up to more complex projects. The Atari community is very active and you can find a lot of resources and help online.


# ABC-80

##


