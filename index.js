const http = require("http");
const { url } = require("inspector");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(`
      <h1>Mahmoud Hussin</h1>
      <form action="/getPassword">
        <input type='number' name='length' placeholder='password length' />
        <button type='submit'>create</button>
      </form>
  `);
  } else if(req.url.includes("/getPassword?length=")){
    let length = req.url.slice("/getPassword?length=".length, req.url.length);
    let lest = ["a","b","c","d","e","f","g","h","i","j","k","l",];
    let rd   = (Math.random() * 999999999999).toString().split("");
    let pass = "";
    for(i=0 ; i < length; i++){
      pass += lest[rd[i]];
    }
    res.write(`
      is your password: ${pass}
    `)
  }
  res.end();
});

server.listen(5000);
