// PS3 PPC OP Codes
// PS3Xploit Team 2018 / ps3xploit.com


var li = 0x38;
var lis = 0x3C;

var mr = 0x78;
var extsw = 0xB4;

var addic = 0x30;
var cmpwi = 0x2C;

var lbz = 0x88;
var lwz = 0x80;
var ld = 0xE8;

var stb = 0x98;
var stw = 0x90;
var std = 0xF8;

var b1 = 0x48;
var b2 = 0x4B;
var bl1 = 0x48;
var bl2 = 0x4B;
var beq1 = 0x41;
var beq2 = 0x82;
var bne1 = 0x40;
var bne2 = 0x82;
var blt1 = 0x41;
var blt2 = 0x80;
var bgt1 = 0x41;
var bgt2 = 0x81;

var mtspr = 0x7C0903A6;
var mfspr = 0x7C0802A6;

var bctrl = 0x4E800421;
var blr = 0x4E800020;

var nop = 0x60000000;