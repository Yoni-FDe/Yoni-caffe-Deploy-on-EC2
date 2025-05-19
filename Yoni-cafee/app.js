
// app.js
const http = require('http');

const hostname = 'localhost';
const port = 3003;

const server = http.createServer((req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Yoni caffe</title>
      <style>
        body {
          background: linear-gradient(to right, rgb(79, 254, 146), rgb(229, 254, 0));
          color: #fff;
          font-family: Arial, sans-serif;
          text-align: center;
          padding-top: 60px;
          margin: 0;
        }
        h1 {
          font-size: 3rem;
          background-color: rgba(0, 0, 0, 0.3);
          padding: 20px;
          border-radius: 10px;
          display: inline-block;
        }
        select, button {
          margin-top: 20px;
          padding: 10px 20px;
          font-size: 1rem;
          border-radius: 5px;
          border: none;
        }
        button {
          background-color: #000;
          color: #fff;
          cursor: pointer;
          margin-left: 10px;
        }
        button:hover {
          background-color: #333;
        }
        ul {
          list-style: none;
          padding: 0;
          margin-top: 10px;
        }
        li {
          background-color: rgba(0, 0, 0, 0.3);
          margin: 10px auto;
          padding: 10px;
          width: 200px;
          border-radius: 5px;
        }
        footer {
          position: absolute;
          bottom: 20px;
          width: 100%;
          font-size: 0.9rem;
        }
        footer h2 {
          color: black;
        }
      </style>
    </head>
    <body>
      <h1>Yoni's caffe online order</h1>
      
      <div>
        <h2 style="color:black; margin-top:30px;">Your Orders</h2>
        <ul id="orderList"></ul>

        <select id="itemSelect">
          <option value="Coffee">Coffee</option>
          <option value="Donut">Donut</option>
          <option value="Cappuccino">Cappuccino</option>
          <option value="Latte">Latte</option>
          <option value="Espresso">Espresso</option>
        </select>
        <button onclick="addOrder()">Order Item</button>
      </div>
      
      <footer><h2>Welcome to Yoni caffe</h2></footer>

      <script>
        let orderNumber = 1;
        function addOrder() {
          const select = document.getElementById('itemSelect');
          const selectedItem = select.value;

          const ul = document.getElementById('orderList');
          const li = document.createElement('li');
          li.textContent = \`#\${orderNumber++}: \${selectedItem}\`;
          ul.appendChild(li);
        }
      </script>
    </body>
    </html>
  `;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(html);
});

server.listen(port, hostname, () => {
  console.log(`🚀 Server running at http://${hostname}:${port}/`);
});

