localhost
127.0.0.1 - IP address

ctrl+c - stop the server


every request from client has a pair of {request,response}

npm = node package manager
1.Used to install, run , uninstall any program/project and package
 -- npm install <packageName>
 -- npm uninstall <packageName>

to use npm, the project must be npm project,
to create npm project we can use
 -- npm init -y
 -- it creates a package.json file automaticall 
 package.json holds all the information related to install package from npm
 -- it also create a folder node_modules automaically
 -- node_modules holds the package/libarary file
 -- generally we ignore the node_modules by .gitignore

Nodemon - it restart the server automaticall when file changes, to install

> npm i nodemon -D

Note -D flag will install this package as developer dependency

- to execute any program , update the package.json file then start the srver as
<b> npm run dev </b>

- start -> it will execute the app on deployment
- dev -> it will start server in development phase(only for developer)

- res: it will return contents (json/html/plain) to the user/client
- req: it will retrive the information from client to the server
- server send also statusCodes to the client, that indicates the error/success message

# Status Code
- 200 -> OK
- 201 -> Created
- 400 -> Bad Request
- 401 -> Unauthorized
- 403 -> forbidden
- 404 -> Not Found
- 500 -> Internal Server Error

## Content Type

- text/plain
- text/html
- application/json
-text/css

the content type and status code can be send back to client by two ways

1. res.writeHead
2. res.setHeader
3. res.satatusCode

## Content Type
1. res.writeHead
2. res.setHeader
3. res.statusCode

## send html file to client
1. html file
- read html file using createReadStream
- pipe it with res object

2. html content
- send any html tags/content by using
- res.end('<any html tag>')

## JSON 
server returns data only not html content because
html contents will be retain by front end developer. The data is in JSON format

- JSON format-: it always stores data in key value pair enclosed by "{}". Array can be stored by "[]". One pair of curly bracket will represent one object and its property will be seperated by ",".


## Headers 
headers is used to tell the client , the type of data sent by the server it maybe html file , json data , plain text files , css file , any tokens (for login)

1.  text/ plain -> text file
2. text/html -> html contents/ file
3. application/json -> json contents/file
4. text/css -> stylesheet
5. application/form-data -> for uploading file
6. application/auth -> for tokens
   this 
7. 