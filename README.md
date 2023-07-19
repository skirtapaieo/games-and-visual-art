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

The Atari 600XL, part of the Atari 8-bit family, was launched in 1983 as a low-end replacement for the Atari 400. It came with 16KB of RAM which could be expanded up to 64KB using Atari's 1064 memory module. It was equipped with a MOS Technology 6502B CPU, ANTIC and GTIA graphics chips, a POKEY sound chip, a ROM cartridge slot, and ports for various devices. It operated on the Atari 8-bit OS and Atari BASIC language was typically used for programming.

To develop a game for the Atari 600XL, one would write the game in Atari BASIC or Assembly, test it on an emulator or the actual hardware, and manipulate player/missile graphics in memory. To grasp the specifics of game development on the Atari 600XL, resources on Atari BASIC or Atari 600XL game development are recommended. To achieve success, understanding the hardware capabilities and mastering programming in Atari BASIC or Assembly are crucial, as is gradual progression from simple to complex projects. Active online Atari communities offer ample resources and support.

### A business application 

Not exactly right but close enough to create the "simplest" inventory program: 

``` BASIC 
10 PRINT "MENU"
20 PRINT "1. List Inventory"
30 PRINT "2. Edit Item"
40 PRINT "3. Delete Item"
50 PRINT "4. List All Items"
60 PRINT "5. Exit"
70 PRINT "Enter your choice:"
80 INPUT choice
90 IF choice=1 THEN GOTO 200
100 IF choice=2 THEN PRINT "Edit Item selected": GOTO 10
110 IF choice=3 THEN PRINT "Delete Item selected": GOTO 10
120 IF choice=4 THEN LIST: GOTO 10
130 IF choice=5 THEN END
140 GOTO 10

200 LIST 1010
210 LIST 1050
220 LIST 1100
...
230 GOTO 10

REM Inventory data
1010 REM 5
1050 REM 3
1100 REM 7
...
4000 REM 1
```


# ABC-80

##


