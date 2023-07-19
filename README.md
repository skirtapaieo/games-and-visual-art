# games-and-visual-art
Doing small games and visual art 



# Intellivision 


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


##  

# ABC-80

##


