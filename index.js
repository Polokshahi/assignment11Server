const express = require('express');
const app = express();
var cors = require('cors')
const port = 3000;


const rooms = [
    {
      "roomId": 1,
      "roomNumber": "101",
      "type": "Single",
      "price": 50,
      "availability": true,
      "description": "A cozy single room with all basic amenities.",
      "bedType": "Single Bed",
      "image": "https://example.com/images/room101.jpg"
    },
    {
      "roomId": 2,
      "roomNumber": "102",
      "type": "Double",
      "price": 75,
      "availability": true,
      "description": "A comfortable double room ideal for couples.",
      "bedType": "Double Bed",
      "image": "https://example.com/images/room102.jpg"
    },
    {
      "roomId": 3,
      "roomNumber": "103",
      "type": "Deluxe",
      "price": 120,
      "availability": false,
      "description": "A luxurious deluxe room with a beautiful view.",
      "bedType": "King Bed",
      "image": "https://example.com/images/room103.jpg"
    },
    {
      "roomId": 4,
      "roomNumber": "104",
      "type": "Suite",
      "price": 200,
      "availability": true,
      "description": "An extravagant suite with premium services.",
      "bedType": "King Bed",
      "image": "https://example.com/images/room104.jpg"
    },
    {
      "roomId": 5,
      "roomNumber": "105",
      "type": "Single",
      "price": 50,
      "availability": true,
      "description": "A cozy single room with modern facilities.",
      "bedType": "Single Bed",
      "image": "https://example.com/images/room105.jpg"
    },
    {
      "roomId": 6,
      "roomNumber": "106",
      "type": "Double",
      "price": 80,
      "availability": false,
      "description": "A spacious double room with a comfortable ambiance.",
      "bedType": "Double Bed",
      "image": "https://example.com/images/room106.jpg"
    },
    {
      "roomId": 7,
      "roomNumber": "107",
      "type": "Deluxe",
      "price": 130,
      "availability": true,
      "description": "A deluxe room with a stunning city view.",
      "bedType": "Queen Bed",
      "image": "https://example.com/images/room107.jpg"
    },
    {
      "roomId": 8,
      "roomNumber": "108",
      "type": "Suite",
      "price": 250,
      "availability": true,
      "description": "A lavish suite with exclusive features.",
      "bedType": "King Bed",
      "image": "https://example.com/images/room108.jpg"
    },
    {
      "roomId": 9,
      "roomNumber": "109",
      "type": "Single",
      "price": 60,
      "availability": true,
      "description": "A stylish single room with premium amenities.",
      "bedType": "Single Bed",
      "image": "https://example.com/images/room109.jpg"
    },
    {
      "roomId": 10,
      "roomNumber": "110",
      "type": "Double",
      "price": 85,
      "availability": true,
      "description": "A modern double room with elegant decor.",
      "bedType": "Double Bed",
      "image": "https://example.com/images/room110.jpg"
    },
    {
      "roomId": 11,
      "roomNumber": "111",
      "type": "Single",
      "price": 55,
      "availability": false,
      "description": "A compact single room with basic facilities.",
      "bedType": "Single Bed",
      "image": "https://example.com/images/room111.jpg"
    },
    {
      "roomId": 12,
      "roomNumber": "112",
      "type": "Deluxe",
      "price": 150,
      "availability": true,
      "description": "A deluxe room with a serene garden view.",
      "bedType": "Queen Bed",
      "image": "https://example.com/images/room112.jpg"
    },
    {
      "roomId": 13,
      "roomNumber": "113",
      "type": "Suite",
      "price": 300,
      "availability": false,
      "description": "An exclusive suite offering ultimate luxury.",
      "bedType": "King Bed",
      "image": "https://example.com/images/room113.jpg"
    },
    {
      "roomId": 14,
      "roomNumber": "114",
      "type": "Single",
      "price": 65,
      "availability": true,
      "description": "A premium single room with city views.",
      "bedType": "Single Bed",
      "image": "https://example.com/images/room114.jpg"
    },
    {
      "roomId": 15,
      "roomNumber": "115",
      "type": "Double",
      "price": 95,
      "availability": false,
      "description": "A well-furnished double room for a relaxing stay.",
      "bedType": "Double Bed",
      "image": "https://example.com/images/room115.jpg"
    },
    {
      "roomId": 16,
      "roomNumber": "116",
      "type": "Deluxe",
      "price": 170,
      "availability": true,
      "description": "A spacious deluxe room with elegant interiors.",
      "bedType": "King Bed",
      "image": "https://example.com/images/room116.jpg"
    },
    {
      "roomId": 17,
      "roomNumber": "117",
      "type": "Suite",
      "price": 350,
      "availability": true,
      "description": "A presidential suite with top-notch amenities.",
      "bedType": "King Bed",
      "image": "https://example.com/images/room117.jpg"
    },
    {
      "roomId": 18,
      "roomNumber": "118",
      "type": "Single",
      "price": 70,
      "availability": true,
      "description": "A chic single room with modern furnishings.",
      "bedType": "Single Bed",
      "image": "https://example.com/images/room118.jpg"
    },
    {
      "roomId": 19,
      "roomNumber": "119",
      "type": "Double",
      "price": 100,
      "availability": true,
      "description": "A vibrant double room with scenic views.",
      "bedType": "Double Bed",
      "image": "https://example.com/images/room119.jpg"
    },
    {
      "roomId": 20,
      "roomNumber": "120",
      "type": "Suite",
      "price": 400,
      "availability": true,
      "description": "An ultra-luxury suite with exclusive services.",
      "bedType": "King Bed",
      "image": "https://example.com/images/room120.jpg"
    }
  ]
  

// Middleware: parse JSON bodies
app.use(express.json());
app.use(cors());

// Example route
app.get('/rooms', (req, res) => {
    res.send(rooms);
  });
  


app.post('/rooms', (req, res) =>{
    res.send(rooms);
    
})









// Example API route
app.get('/api', (req, res) => {
  res.json({ message: 'This is an API endpoint' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
