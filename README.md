# **Task Management Website**  

## **Description**  
This project is a web-based task management application, developed with **React** for the frontend, **Node.js** for the backend, and **Mongoose** for managing the MongoDB database.  
**⚠️ Note: The application is not yet optimized for mobile devices.**  

---

## **Features**  
- **Task Creation**: Add new tasks with specific details.  
- **Task Update**: Modify the status of existing tasks.  
- **Task Deletion**: Delete completed or unnecessary tasks.  
- **Task List**: Display all tasks in a user-friendly interface.  

---

## **Technologies Used**  
- **Frontend**: React  
- **Backend**: Node.js (version `v22.9.0`)  
- **Database**: MongoDB with Mongoose  
- **Other Tools**: Express.js  

---

## **Prerequisites**  
Before starting, ensure you have installed:  
- **Node.js** (recommended version: `v22.9.0`)  
- **MongoDB** (local or hosted on a service like Atlas)  

---

## **Installation and Execution**  

### **1. Clone the Repository**  
```bash
git clone <repo-url>
cd <project-name>
```

### **2. Install Dependencies**  
Install dependencies for the backend:  
```bash
cd backend
npm install
```

Then for the frontend:  
```bash
cd ../taskmanagment
npm install
```

### **3. Run the Project**  
- Start the backend:  
```bash
cd backend
node index
```

- Start the frontend:  
```bash
cd ../taskmanagment
npm start
```

The application will be accessible at `http://localhost:3000`.

---

## **Limitations**  
- The application **is not yet responsive** and is not suitable for mobile use.
