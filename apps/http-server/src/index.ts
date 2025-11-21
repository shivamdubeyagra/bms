import express from "express";
import {client} from "@repo/db/client";
const app = express();
app.use(express.json())

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Welcome Page</title>

      <style>
        body {
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #6e8efb, #a777e3);
          font-family: Arial, Helvetica, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          color: #fff;
        }

        .card {
          text-align: center;
          background: rgba(255, 255, 255, 0.15);
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
          backdrop-filter: blur(8px);
        }

        h1 {
          font-size: 32px;
          margin-bottom: 10px;
        }

        p {
          font-size: 18px;
          opacity: 0.9;
        }
      </style>

    </head>
    <body>
      <div class="card">
        <h1>✨ Hi There ✨</h1>
        <p><strong>Shivam</strong></p>
        <p>Welcome to your beautiful Express server page!</p>
      </div>
    </body>
    </html>
  `);
});


app.post("/signup",async(req,res)=>{
    const {username,password} = req.body;
    const user = await client.user.create({
        data:{
            username,
            password
        }
    })
    res.json({
        message:"User created",
        user
    });
})


app.listen(3002,()=>{
    console.log("Server started on port 3002");
})