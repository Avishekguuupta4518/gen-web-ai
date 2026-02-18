# 🤖 AI Website Builder SaaS

Generate & Deploy Websites in One Click

A production-ready AI SaaS platform built using the **MERN Stack** that allows users to generate full websites using AI and deploy them instantly with a credit-based system and Stripe payments.

This is not a toy project — it follows real-world SaaS architecture with authentication, payments, webhooks, protected routes, and deployment workflows.

---

## 🚀 Live Features

- 🤖 **AI Website Generation**  
  Describe your idea → AI generates a full website instantly

- 🚀 **One-Click Deployment**  
  Deploy generated websites immediately

- 💰 **Credit-Based System**  
  Each generation consumes user credits

- 💳 **Stripe Payments (Checkout + Webhooks)**  
  Users purchase credits securely

- 🔐 **Authentication & Protected Routes**  
  Email + Google Auth (Firebase)

- 🎞 **Premium UI Animations**  
  Framer Motion powered transitions

- ☁️ **Production Deployment**  
  Frontend + Backend deployed on Render

---

## 🛠 Tech Stack

### Frontend
- React.js  
- Tailwind CSS  
- Framer Motion  
- Redux Toolkit  
- Firebase Authentication  

### Backend
- Node.js  
- Express.js  
- MongoDB + Mongoose  

### Payments
- Stripe Checkout  
- Stripe Webhooks  

### AI
- OpenRouter API (LLM response generation)  

### Deployment
- Render (Frontend + Backend)  

---

## 🧱 Project Architecture


🧱 Project Architecture
```
gen-web-ai/
│
├── frontend/                     # React Frontend
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # App pages (Home, Dashboard, Editor, Pricing)
│   │   ├── redux/              # Redux store & slices
│   │   ├── hooks/              # Custom hooks
│   │   ├── utils/              # Helper functions
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/                     # Node.js Backend
│   ├── config/
│   │   ├── db.js               # MongoDB connection
│   │   ├── stripe.js           # Stripe config
│   │   └── openRouter.js
│   │   └── plan.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── billing.controller.js
│   │   ├── stripeWebHook.controller.js
│   │   └── user.controller.js
│   │   └── website.controller.js
│   ├── models/
│   │   ├── user.model.js
│   │   └── website.model.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── billing.routes.js
│   │   ├── user.routes.js
│   │   └── website.routes.js
│   │
│   ├── middleware/
│   │   ├── isAuth.js
|   |
│   │── utils/
│   │   ├── ectract.json
│   ├── index.js
│   └── package.json
│
├── .env.example
├── README.md
└── package-lock.json
```

---

## 🔐 Environment Variables

### Backend (`server/.env`)
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```
---
## Frontend (frontend/.env)

```
OPENROUTER_API_KEY=your_openrouter_api_key
CLIENT_URL=http://localhost:5173
```
---

# ▶️ How to Run Locally
## 1️⃣ Clone the Repositor
```
https://github.com/Avishekguuupta4518/gen-web-ai.git
cd gen-wen-ai
```
---
## 2️⃣ Backend Setu
```
cd backend
npm install
npm run dev
```
---
### Backend will run on:
```
http://localhost:5000
```
---

##  3️⃣ Frontend Setu
```
cd frontend
npm install
npm run dev
```
---
### Frontend will run on:
```
http://localhost:5173
```
---

## 💳 Stripe Webhooks (Local Testing)
## Use Stripe CLI:
```
stripe listen --forward-to localhost:5000/api/stripe/webhook
```
---
## Copy the webhook secret and paste it into:
```
STRIPE_WEBHOOK_SECRET=whsec_*****
```
---

# 🧠 Credit Logic (How It Works)
- New users start with free credits
- AI generation costs X credits
- Credits are deducted after successful generation
- Users purchase credits via Stripe Checkout
- Webhooks securely update credits after payment success
---
# 🔐 Security Measures
- JWT-based authentication
- Firebase Google Auth
- Protected routes (frontend + backend)
- Stripe webhook signature verification
- Server-side credit validation

---

# ☁️ Deployment (Render)
- Backend deployed as Web Service
- Frontend deployed as Static Site
- MongoDB Atlas for production DB
- Stripe in Live Mode
---
# 🎯 Use Cases
- Final Year Major Project
- SaaS Startup MVP
- Advanced MERN Portfolio
- Freelancing / Client Projects
- AI + Fullstack Learning
---
# 🧪 Status
✅ Production-ready
✅ Scalable architecture
✅ Real payment system
✅ Real deployment workflow
---
# 📌 Credits
- Inspired by Virtual Code
- Built & customized as a full SaaS-grade project
---
# 📬 Feedback & Contributions
- PRs are welcome.
- Issues? Open one.
- Want enterprise features? Fork and scale. 
