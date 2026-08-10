# MERN CRUD App — Setup Guide

All the code is written for you. Below is exactly what **you** need to do manually
on your own machine to get it running (these steps can't be done inside this chat
because they require your own computer, MongoDB install, and terminals).

## 1. Install prerequisites (manual)
- Install **Node.js** (v18+): https://nodejs.org
- Install **MongoDB Community Server**: https://www.mongodb.com/try/download/community
  - OR create a free **MongoDB Atlas** cluster: https://www.mongodb.com/cloud/atlas
- (Optional but recommended) Install **MongoDB Compass** to view your data visually.

## 2. Unzip this project (manual)
Extract the zip you downloaded. You'll see:
```
mern-crud/
  client/    <- React frontend
  server/    <- Express backend
```

## 3. Set up the database (manual)
- Open MongoDB Compass (or Atlas)
- Create a database named `crud`
- Create a collection named `users` inside it
- If using **Atlas**, copy your connection string.

## 4. Configure the connection string (manual edit — one line)
Open `server/index.js` and find this line:
```js
mongoose.connect("mongodb://127.0.0.1:27017/crud");
```
- If using **local MongoDB**, leave as-is (this is the default local address).
- If using **Atlas**, replace it with your Atlas connection string, e.g.:
```js
mongoose.connect("mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/crud");
```

## 5. Install dependencies (manual — run in terminal)
Open a terminal in the `server` folder:
```bash
cd server
npm install
```

Open a **second terminal** in the `client` folder:
```bash
cd client
npm install
```

## 6. Run the app (manual — two terminals, both must stay running)
**Terminal 1 (backend):**
```bash
cd server
npm start
```
You should see `server is running on port 3001`.

**Terminal 2 (frontend):**
```bash
cd client
npm run dev
```
This will print a local URL, usually `http://localhost:5173`.

## 7. Use the app (manual — in your browser)
- Open `http://localhost:5173`
- Click **Add +** to create a record
- Click **Edit** to update a record
- Click **Delete** to remove a record
- Open MongoDB Compass and refresh the `users` collection to confirm changes are saved.

## Troubleshooting
- **404 errors**: check that route paths in `axios` calls match the routes in `server/index.js` exactly (including leading `/`).
- **CastError on update/delete**: make sure you're passing MongoDB's `_id` field, not a custom `id`.
- **CORS errors**: confirm `server/index.js` has `app.use(cors())` before your routes, and that the backend is running on port 3001.
- **"Cannot connect to MongoDB"**: make sure your local MongoDB service is running, or that your Atlas connection string/password is correct and your IP is whitelisted in Atlas.
