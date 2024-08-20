---
marp: true
paginate: true
---
# Vigenere Cipher

Vigenere Cipher

<!-- 
$theme: gaia
template: invert
-->

<!-- footer: Vigenere Cipher -->

---
## Basic knowledge

### Simple substitution cipher

The most famous example: the Caesar cipher.

Example: Shift one character.
H A L
↓ ↓ ↓
I B M

Simple substitution cipher is
each 'd' of plain text become the same charactor.

---
## Vigenere Cipher

plain text: 'CODE'

key: 'ARM'

![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Vigenere-square.png/350px-Vigenere-square.png)

cipher text: 'CFPE'

---
## Using Computer

We assume the below:

$ P_i $ : The i-rd charactor of plain text

$ K_i $ : The i-rd charactor of key

$ C_i $ : The i-rd charactor of ciphered text

$ C_i = (P_i + K_i) mod 26 $

$ P_i = (C_i - K_i) mod 26 $

---
## Kasisky Test

Babbage found the below:

1. Search for strings of the same characters.
1. Count the intervals between the strings.
1. Calculate the common factors of these numbers.
For example: we found the intervals number are 9, 63, 180, we can calculate the common factors of these numbers is 3 or 9.
1. We can find the length of the key is 3 or 9.
1. We run it through frequency analysis.

Finally, this is the same as the Caesar cipher with intervals of 3 or 9.

---
