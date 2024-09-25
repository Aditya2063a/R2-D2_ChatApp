<h1 classname="text-center flex justify-center items-center">R2-D2 Chat_App</h1>

## Overview
Our chat website is designed with User Experience at the forefront. With advanced security measures, your privacy is always protected.

<h3>Deploy link: </h3> https://sprightly-cendol-36c4bb.netlify.app
<h3>UI UX folder link: </h3> https://drive.google.com/drive/folders/1AJ8tSignzWOPwPvzDfRjTOc5m3CWCkBA?usp=drive_link
<h3>Demo Video: </h3> https://photos.app.goo.gl/Fy8huFG5cuorj2v49


#### Instruction to use ChatAI
1.Use '@ai' to initiate any AI-driven query in the chat. <br/>
2.Type your question immediately after '@ai' without spaces. <br/>
3.Ensure clear and concise questions for accurate responses. <br/>
4.Example: "@ai What's the weather like today?" <br/>

## Architectural Overview

### Technology Stack:
1. **Frontend**: React.js, Tailwind CSS, JavaScript
2. **Backend**: Node.js, Socket.io, Express
3. **Database**: MongoDB
4. **APIs**: REST

---

## Setup & Running the Prototype

### (i) Dependencies and Libraries

#### Frontend:
- `@radix-ui/react-avatar`: ^1.0.4
- `@radix-ui/react-dialog`: ^1.1.1
- `@radix-ui/react-scroll-area`: ^1.1.0
- `@radix-ui/react-slot`: ^1.0.2
- `@radix-ui/react-tabs`: ^1.0.4
- `@radix-ui/react-tooltip`: ^1.0.7
- `axios`: ^1.7.2
- `class-variance-authority`: ^0.7.0
- `clsx`: ^2.1.1
- `cmdk`: ^1.0.0
- `emoji-picker-react`: ^4.10.0
- `js-cookie`: ^3.0.5
- `lucide-react`: ^0.394.0
- `moment`: ^2.30.1
- `next-themes`: ^0.3.0
- `react`: ^18.2.0
- `react-cookie`: ^7.1.4
- `react-dom`: ^18.2.0
- `react-icons`: ^5.2.1
- `react-lottie`: ^1.2.4
- `react-lottie-player`: ^2.0.0
- `react-router-dom`: ^6.23.1
- `react-tsparticles`: ^2.12.2
- `socket.io-client`: ^4.7.5
- `sonner`: ^1.5.0
- `tailwind-merge`: ^2.3.0
- `tailwindcss-animate`: ^1.0.7
- `tsparticles`: ^3.5.0
- `zustand`: ^4.5.2

#### Backend:
- `@google/generative-ai`: ^0.19.0
- `bcrypt`: ^5.1.1
- `cookie-parser`: ^1.4.6
- `cors`: ^2.8.5
- `dotenv`: ^16.4.5
- `express`: ^4.21.0
- `jsonwebtoken`: ^9.0.2
- `mongoose`: ^8.4.1
- `multer`: ^1.4.5-lts.1
- `socket.io`: ^4.7.5

---

### (ii) Installation Guide

#### Frontend:
```bash
# Install dependencies
npm install

# Start the frontend server
npm run dev
```
#### BacKend:
``` bash
# Install dependencies
npm install

# Start the backend server
npm run dev

```

#### Instruction to setup .env file 

#### Frontend:
```bash
VITE_SERVER_URL="http://localhost:8747"
VITE_SOCKET_URL="http://localhost:3001"

```
#### BacKend:
``` bash
PORT=8747
JWT_KEY="" # Please enter JWT_KEY (any value for passwords)
ORIGIN="http://localhost:5173"
DATABASE_URL="" # Please enter the database URL (e.g., MongoDB)
API_KEY="" # Please enter the API key for Gemini
```


