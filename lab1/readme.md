# FS (file system)
it direct connect with client OS rather tha browser

## Major task of  FS Module
- Reading and writing files
     -readFile()
     -writeFile()
     -appendFile()
-Directory Managrmrnt
    -mkdir()
    -rmdir()-depricated
    -readdir()
-Metadata/Information
    -start()
    -lstat()
    -fstat()
-Watching for changes
    -watch()
    -watachFile()
    -unwatchFiles()
-streaming large files
    -createReadStream()
    -createWriteStream()
-file Operation
    -rename()
    -truncate()
    -link()
    -syslink()


## CURD OPERATION
creat/Insert , Read/Retrieve , update ,delete
each item (id , name,prize,quty)
Feature:
1. Add to Cart
2. Show cart
3. Remove from cart
4. Update quantity from cart
5. Checkout
   NOTE: all items will  be stored in hdd, so after termination of program we can retrieve cart details

## Required File
1. crud.js - it contains all the methods and entry point
2. products.js - it contains the produt details in array from