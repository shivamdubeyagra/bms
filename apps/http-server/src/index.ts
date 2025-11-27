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
      <title>Shivam's Deployment Journey</title>

      <style>
        /* Smooth fade animation */
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        body {
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #4b79a1, #283e51);
          font-family: "Segoe UI", Arial, Helvetica, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          color: #fff;
        }

        .container {
          width: 90%;
          max-width: 800px;
          background: rgba(255, 255, 255, 0.12);
          padding: 40px;
          border-radius: 18px;
          box-shadow: 0 10px 35px rgba(0,0,0,0.3);
          backdrop-filter: blur(10px);
          animation: fadeIn 1s ease-in-out;
        }

        h1 {
          text-align: center;
          font-size: 36px;
          margin-bottom: 10px;
        }

        h3 {
          margin-top: 25px;
          color: #ffe082;
          font-size: 22px;
        }

        p, li {
          font-size: 18px;
          line-height: 1.6;
          opacity: 0.95;
        }

        .steps {
          margin-top: 20px;
        }

        ul {
          padding-left: 20px;
        }

        .footer {
          text-align: center;
          margin-top: 30px;
          opacity: 0.8;
          font-size: 14px;
        }

      </style>
    </head>

    <body>
      <div class="container">
        <h1>🚀 Shivam's Deployment Journey</h1>
        <p style="text-align:center;">A quick story of how I deployed, configured, and secured my website on AWS EC2.</p>

        <div class="steps">
          <h3>1️⃣ Built My HTTP Server</h3>
          <p>I started by creating a monolithic setup using <strong>TurboRepo</strong> and built my Express.js HTTP server.</p>

          <h3>2️⃣ Deployed on AWS EC2</h3>
          <p>I purchased an EC2 instance and deployed my backend/server on it.</p>

          <h3>3️⃣ Setup CI/CD Pipeline</h3>
          <p>I created a CI/CD pipeline so that whenever I push code to the <strong>main</strong> branch, it auto-deploys to my EC2 instance.</p>

          <h3>4️⃣ Configured NGINX</h3>
          <ul>
            <li>Configured NGINX as a reverse proxy</li>
            <li>Port 80 → HTTP</li>
            <li>Port 443 → HTTPS</li>
            <li>Opened these ports in AWS Security Groups</li>
          </ul>

          <h3>5️⃣ Secured My Website with SSL</h3>
          <p>Finally, I installed an SSL certificate using <strong>Certbot</strong> and enabled full HTTPS support for my domain.</p>
        </div>

        <div class="footer">
          Made with ❤️ by Shivam | Fully deployed & secured on AWS EC2
        </div>
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