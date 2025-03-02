# URL Shortener

A simple and stylish URL shortener built using **Next.js, TypeScript, Tailwind CSS** for the frontend and **Node.js, Express, MongoDB** for the backend.

- Live URL: 
- Backend URL: 

## 🚀 Features

- Shorten long URLs instantly
- Copy shortened URLs with a single click
- Automatically increments click counts
- Backend API built with Express and MongoDB
- Beautiful and responsive UI with Tailwind CSS


## 🛠️ Tech Stack

### **Frontend:**

- Next.js 13 (App Router)
- TypeScript
- Tailwind CSS
- Axios
- React Icons

### **Backend:**

- Node.js
- Express.js
- MongoDB (Mongoose)
- TypeScript


## 📦 Installation & Setup

### **Clone the Repository**

```sh
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```

### **Backend Setup**

```sh
cd backend
npm install
```

#### **Configure MongoDB in**

```sh
MONGO_URI=your_mongodb_connection_string
PORT=8082
```

#### **Run the Backend**

```sh
npm run dev
```

### **Frontend Setup**

```sh
cd ../frontend
npm install
npm run dev
```



## API Endpoints

### **Shorten URL**

**POST** `/api/url/shorten`

#### Request:

```json
{
  "longUrl": "https://example.com"
}
```

#### Response:

```json
{
  "shortUrl": "abcd1234"
}
```

### **Redirect Shortened URL**

**GET** `/:shortUrl`

- Redirects to the original long URL.



## 🛠️ Future Enhancements

- 🔗 User authentication (Sign in with Google)
- 📊 Click analytics dashboard
- 📌 Custom short URL aliases
- 🌎 Public API access with rate limiting



## 📜 License

This project is open-source under the **MIT License**.



## ✨ Contributing

Pull requests are welcome! Feel free to open an issue for any bugs or suggestions.


