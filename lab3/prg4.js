import http from 'http';
import{reviews} from "./data.js";

const server = http.createServer((req, res) => {
    const products = {
        id: 1,
        name: "Mobile",
        price: 4000,
        rating: 4.7,
        review: 225,
    };

    const item =[
  {
    "id": 1,
    "name": "Laptop",
    "price": 55000,
    "disc": 10
  },
  {
    "id": 2,
    "name": "Smartphone",
    "price": 25000,
    "disc": 15
  },
  {
    "id": 3,
    "name": "Headphones",
    "price": 2000,
    "disc": 20
  },
  {
    "id": 4,
    "name": "Smart Watch",
    "price": 5000,
    "disc": 12
  },
  {
    "id": 5,
    "name": "Keyboard",
    "price": 1500,
    "disc": 10
  },
  {
    "id": 6,
    "name": "Mouse",
    "price": 800,
    "disc": 5
  },
  {
    "id": 7,
    "name": "Monitor",
    "price": 12000,
    "disc": 18
  },
  {
    "id": 8,
    "name": "Tablet",
    "price": 18000,
    "disc": 15
  },
  {
    "id": 9,
    "name": "Speaker",
    "price": 3000,
    "disc": 10
  },
  {
    "id": 10,
    "name": "Power Bank",
    "price": 1200,
    "disc": 8
  }
]
    if (req.url === "/api/products") {
        //res.end(JSON.stringify(products));
        res.end(JSON.stringify(items));
    } 
    else if (req.url==='/api/reviews'){
        res.end(JSON.stringify(reviews))

    }
        else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(3000, () => console.log("prg4 is running "));