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
