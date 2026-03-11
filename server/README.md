# DocuForge – Dynamic PDF Generation Platform

DocuForge is a full-stack web application that allows users to generate dynamic PDF documents from customizable HTML templates.
It supports bulk PDF generation, secure document sharing, and automated email delivery.

This project demonstrates a production-style architecture using Node.js, Express, MongoDB, Puppeteer, and React.

---

## 🚀 Features

### Authentication

* Secure user registration and login
* Password hashing using bcrypt
* JWT-based authentication
* Protected API routes

### Dynamic PDF Generation

* Convert HTML templates into PDFs using Puppeteer
* Replace template variables dynamically
* Generate professional documents like:

  * Certificates
  * Invoices
  * Offer Letters
  * Reports

### Bulk PDF Generation

* Upload CSV file
* Generate hundreds of PDFs automatically
* Useful for:

  * School certificates
  * Event participation certificates
  * Company offer letters

### Public Document Sharing

* Share documents using public links
* Anyone can verify or download shared documents

Example:

```
/api/public/doc/:id
```

### Email Delivery

* Automatically send generated PDFs via email
* Attach generated document to email

### Secure PDF Access

* Authenticated download routes
* Users can only access their own documents

### Security

* JWT authentication
* Helmet security headers
* API rate limiting
* Password hashing
* Input validation

---

## 🧰 Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* Puppeteer
* Nodemailer
* JWT Authentication

### Security

* Helmet
* Express Rate Limit
* bcryptjs

### Utilities

* UUID
* dotenv

### Future Frontend

* React
* TailwindCSS
* Shadcn UI
* Axios

---

## 📂 Project Structure

```
docuforge
│
├── server
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   ├── authController.js
│   │   ├── documentController.js
│   │   └── bulkController.js
│   │
│   ├── middleware
│   │   ├── authMiddleware.js
│   │   └── uploadMiddleware.js
│   │
│   ├── models
│   │   ├── User.js
│   │   ├── Template.js
│   │   └── Document.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── documentRoutes.js
│   │   ├── bulkRoutes.js
│   │   └── publicRoutes.js
│   │
│   ├── services
│   │   ├── pdfService.js
│   │   └── emailService.js
│   │
│   ├── templates
│   │
│   ├── utils
│   │   └── replaceVariables.js
│   │
│   ├── generated-pdfs
│   │
│   ├── server.js
│   └── .env
│
└── client (React frontend - upcoming)
```

---

## ⚙️ Installation

### 1. Clone the repository

```
git clone https://github.com/yourusername/docuforge.git
```

### 2. Navigate to server folder

```
cd docuforge/server
```

### 3. Install dependencies

```
npm install
```

### 4. Create environment variables

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

EMAIL=your_email
APP_PASSWORD=your_email_app_password
```

### 5. Run development server

```
npm run dev
```

### 6. Run production server

```
npm start
```

---

## 📡 Example API Endpoints

### Register User

```
POST /api/auth/register
```

### Login User

```
POST /api/auth/login
```

### Generate PDF

```
POST /api/document/generate
```

### Bulk PDF Generation

```
POST /api/bulk/generate
```

### Public Document Access

```
GET /api/public/doc/:id
```

---

## 🔐 Security Features

* JWT Authentication
* Protected API routes
* Secure password hashing
* Rate limiting
* Helmet security headers

---

## 🛣 Future Roadmap

Planned features for future updates:

### Frontend Dashboard

* React-based user dashboard
* Template selection UI
* Document preview

### Drag-and-Drop Template Builder

Users can design document templates visually like Canva.

### Live Document Preview

Preview document before generating PDF.

### Cloud Storage Integration

Store PDFs using:

* Cloudinary
* AWS S3

### Email Service Upgrade

Replace SMTP with email APIs for scalability.

### Document Verification System

Allow organizations to verify certificates publicly.

### Analytics Dashboard

Track:

* Generated documents
* Downloads
* Popular templates

### Multi-template Marketplace

Users can upload and share templates.

---

## 📌 Use Cases

* Education certificate generation
* Event participation certificates
* Invoice generation
* HR offer letters
* Automated document workflows

---

## 👨‍💻 Author

Rahul Kumar
B.Tech Computer Engineering Student

---

## 📜 License

This project is licensed under the MIT License.
