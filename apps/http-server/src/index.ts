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
      <title>Shivam Deployment Documentation</title>

      <style>
        body {
          margin: 0;
          background: #0d1117;
          font-family: "Inter", Arial, sans-serif;
          color: #e6edf3;
          line-height: 1.6;
        }

        .header {
          background: linear-gradient(135deg, #5b86e5, #36d1dc);
          padding: 40px 20px;
          text-align: center;
          color: #fff;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }

        .header h1 {
          margin: 0;
          font-size: 40px;
        }

        .container {
          padding: 40px 20px;
          max-width: 900px;
          margin: auto;
        }

        h2 {
          margin-top: 40px;
          border-bottom: 2px solid #30363d;
          padding-bottom: 6px;
          font-size: 26px;
        }

        p, li {
          font-size: 18px;
          color: #c9d1d9;
        }

        .box {
          background: #161b22;
          padding: 20px;
          border-radius: 10px;
          margin-top: 15px;
          border: 1px solid #30363d;
        }

        pre {
          background: #0e1117;
          padding: 14px;
          border-radius: 6px;
          overflow-x: auto;
          border: 1px solid #30363d;
        }

        code {
          color: #79c0ff;
          font-size: 16px;
        }

        .toc {
          background: #161b22;
          border: 1px solid #30363d;
          padding: 20px;
          border-radius: 10px;
        }

        .toc a {
          color: #58a6ff;
          text-decoration: none;
          font-size: 18px;
        }

        .toc a:hover {
          text-decoration: underline;
        }

        .footer {
          text-align: center;
          padding: 40px 0;
          color: #8b949e;
          margin-top: 40px;
        }
      </style>
    </head>

    <body>

      <div class="header">
        <h1>🚀 Shivam's Deployment Documentation</h1>
        <p style="font-size:18px; opacity:0.9;">A complete journey of deploying, configuring & securing my website on AWS EC2</p>
      </div>

      <div class="container">

        <div class="toc">
          <h2>📘 Table of Contents</h2>
          <ul>
            <li><a href="#server">1. Built My HTTP Server using TurboRepo</a></li>
            <li><a href="#domain">2. Purchased Domain from Hostinger</a></li>
            <li><a href="#dns">3. Configured DNS to Point to EC2</a></li>
            <li><a href="#deploy">4. Deployed on AWS EC2</a></li>
            <li><a href="#cicd">5. Created CI/CD Pipeline</a></li>
            <li><a href="#nginx">6. Configured NGINX (80 & 443)</a></li>
            <li><a href="#ssl">7. Secured Website with SSL (Certbot)</a></li>
          </ul>
        </div>


        <h2 id="server">1️⃣ Built My HTTP Server using TurboRepo</h2>
        <div class="box">
          <p>I created a monolithic architecture using <strong>TurboRepo</strong> and set up my Express.js server as the foundation of the project.</p>
        </div>


        <h2 id="domain">2️⃣ Purchased Domain from Hostinger</h2>
        <div class="box">
          <p>I bought my domain <strong>shivamdev.online</strong> from Hostinger.</p>
          <p>This is where I manage all DNS records, SSL verification, and hosting configurations.</p>
        </div>


        <h2 id="dns">3️⃣ Configured DNS to Point to EC2</h2>
        <div class="box">
          <p>Inside Hostinger's DNS panel, I created A-records:</p>
          <pre><code>A  @  →  &lt;EC2 Public IP&gt;
A  www → &lt;EC2 Public IP&gt;
</code></pre>
          <p>This ensures that my domain routes traffic to my AWS EC2 instance.</p>
        </div>


        <h2 id="deploy">4️⃣ Deployed on AWS EC2</h2>
        <div class="box">
          <p>I launched an Amazon EC2 Ubuntu instance and deployed my HTTP server using PM2.</p>
          <pre><code>pm2 start server.js
pm2 save
pm2 startup</code></pre>
        </div>


        <h2 id="cicd">5️⃣ Created CI/CD Pipeline</h2>
        <div class="box">
          <p>I set up GitHub Actions to deploy automatically whenever I push code to the <strong>main</strong> branch.</p>
        </div>


        <h2 id="nginx">6️⃣ Configured NGINX for Reverse Proxy</h2>
        <div class="box">
          <p>I configured NGINX to route traffic to my Node.js server:</p>
          <pre><code>server {
  listen 80;
  server_name shivamdev.online;

  location / {
    proxy_pass http://localhost:3000;
  }
}</code></pre>
          <p>Also opened ports 80 and 443 in AWS Security Group.</p>
        </div>


        <h2 id="ssl">7️⃣ Secured My Website with SSL (Certbot)</h2>
        <div class="box">
          <p>Finally, I installed an SSL certificate using <strong>Certbot</strong>:</p>
          <pre><code>sudo certbot --nginx</code></pre>
          <p>This enabled HTTPS and secured my entire website.</p>
        </div>


        <div class="footer">
          Made with ❤️ by Shivam • Fully Secured & Deployed on AWS EC2
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