# DocuForge – AI Powered Dynamic PDF Generation Platform

DocuForge is a **full-stack document automation platform** that allows users to generate professional PDF documents using customizable templates.

The system supports **AI-powered template generation, dynamic PDF creation, bulk document generation, secure authentication, and public document sharing**.

The project demonstrates a **production-ready architecture** using:

Node.js • Express • MongoDB • React • Puppeteer • JWT Authentication

---

# 🚀 Features

## 🔐 Authentication System

* Secure user registration and login
* Email OTP verification system
* Password hashing using bcrypt
* JWT-based authentication
* Protected API routes
* Session based access control

### OTP Security

* 6-digit OTP verification
* OTP expiration system
* Fallback OTP system if email service fails
* Development mode OTP display

---

# 🤖 AI Features

## AI Template Generator

Users can generate **new document templates using AI prompts**.

Example prompt:

```
Create a professional internship certificate template with placeholders:
{{name}}, {{company}}, {{duration}}, {{date}}
```

AI automatically generates:

* Template structure
* Required fields
* HTML document layout

---

## AI Content Generator

Generate professional content for documents automatically.

Examples:

* Certificate description
* Offer letter content
* Invoice notes
* Professional summaries

AI content appears in **live preview before PDF generation**.

---

# 📄 Dynamic PDF Generation

DocuForge converts HTML templates into PDFs using **Puppeteer**.

Features:

* Dynamic variable replacement
* Live preview system
* High-quality PDF output
* Custom document templates

Supported document types:

* Certificates
* Invoices
* Offer Letters
* Biodata / Resume
* AI Generated Templates

---

# 📦 Bulk Document Generation

Generate hundreds of PDFs instantly using CSV uploads.

Use cases:

* School certificates
* Event participation certificates
* HR onboarding letters
* Bulk invoice generation

Workflow:

```
Upload CSV
↓
Parse data
↓
Generate PDFs automatically
```

---

# 🌐 Public Document Verification

Documents can be shared with a **public verification link**.

Example:

```
/api/public/doc/:id
```

Anyone with the link can verify or download the document.

Useful for:

* Certificate verification
* Offer letter validation
* Public document sharing

---

# 📧 Email Delivery System

Generated documents can be emailed automatically.

Features:

* PDF attachment support
* Nodemailer SMTP integration
* Development fallback OTP system
* Production-ready email architecture

---

# 📊 Dynamic Dashboard

User dashboard provides:

* Total templates available
* Generated document count
* Bulk job statistics
* Quick template access

Templates are loaded **dynamically from database**.

---

# 🔒 Security Features

* JWT authentication
* Protected API routes
* Password hashing with bcrypt
* Rate limiting
* Helmet security headers
* Secure file handling
* Input validation

---

# 🧰 Tech Stack

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Puppeteer
* Nodemailer
* JWT Authentication
* bcryptjs

## AI Logic

* AI Template Generator
* AI Content Generator
* Prompt-based template creation

## Frontend

* React
* Vite
* TailwindCSS
* Axios
* React Router

---

# 📂 Project Structure

```
docuforge
│
├── server
│
│   ├── config
│   │   └── db.js
│
│   ├── controllers
│   │   ├── authController.js
│   │   ├── documentController.js
│   │   ├── aiController.js
│   │   └── aiTemplateController.js
│
│   ├── middleware
│   │   ├── authMiddleware.js
│   │   └── uploadMiddleware.js
│
│   ├── models
│   │   ├── User.js
│   │   ├── Template.js
│   │   └── Document.js
│
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── documentRoutes.js
│   │   ├── bulkRoutes.js
│   │   ├── aiRoutes.js
│   │   └── publicRoutes.js
│
│   ├── services
│   │   ├── pdfService.js
│   │   ├── emailService.js
│   │   └── aiTemplateService.js
│
│   ├── utils
│   │   ├── replaceVariables.js
│   │   └── otpStore.js
│
│   ├── generated-pdfs
│
│   ├── server.js
│   └── .env
│
└── client
    ├── src
    │   ├── pages
    │   │   ├── Dashboard.jsx
    │   │   ├── Builder.jsx
    │   │   ├── AITemplate.jsx
    │   │   └── Register.jsx
    │   │
    │   ├── components
    │   │   └── Navbar.jsx
    │   │
    │   ├── services
    │   │   └── api.js
    │
    └── vite.config.js
```

---

# ⚙️ Installation

## Clone Repository

```
git clone https://github.com/yourusername/docuforge.git
```

---

## Install Backend

```
cd server
npm install
```

---

## Environment Variables

Create `.env`

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

EMAIL=your_email
APP_PASSWORD=your_email_app_password
```

---

## Run Development Server

```
npm run dev
```

---

# 📡 API Endpoints

## Authentication

```
POST /api/auth/send-otp
POST /api/auth/verify-otp
POST /api/auth/login
```

---

## AI Features

```
POST /api/ai/generate
POST /api/ai/template
```

---

## Document Generation

```
POST /api/document/generate
POST /api/bulk/generate
```

---

## Templates

```
GET /api/templates/all
GET /api/public/template/:name
```

---

## Public Access

```
GET /api/public/doc/:id
```

---

# 🛣 Future Roadmap

Upcoming features planned for DocuForge.

### Drag and Drop Template Builder

Users will design document templates visually like **Canva**.

---

### Live Document Designer

Create templates using UI instead of HTML.

---

### Cloud Storage Integration

Store PDFs using:

* AWS S3
* Cloudinary
* Google Cloud Storage

---

### Template Marketplace

Users can publish and share their templates.

---

### Analytics Dashboard

Track:

* Generated documents
* Downloads
* Popular templates

---

### Organization Verification System

Allow companies or universities to verify documents publicly.

---

# 📌 Use Cases

* Certificate generation systems
* School and university document automation
* Event participation certificates
* Invoice generation
* HR offer letter automation
* Bulk document generation

---

# 👨‍💻 Author

Rahul Kumar
B.Tech Computer Engineering Student
MERN Stack Developer

---

# 📜 License

This project is licensed under the MIT License.
