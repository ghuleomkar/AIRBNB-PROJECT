AIRBNB Project
full-stack web application inspired by Airbnb. It allows users to browse, create, and review travel listings with features like image uploads and map integration.

🚀 Tech Stack

Frontend: HTML, CSS, Bootstrap, EJS (Embedded JavaScript)

Backend: Node.js, Express.js

Database: MongoDB, Mongoose

Authentication: Passport.js

Maps: Mapbox SDK

Image Storage: Cloudinary

✨ Features

Authentication: User Login and Signup functionality.

CRUD Operations: Users can Create, Read, Update, and Delete listings.

Reviews: Users can add reviews and ratings to listings.

Map Integration: Displays listing locations on a map using Mapbox.

Image Upload: Upload listing images directly to Cloudinary.

🛠️ Installation & Setup


Clone the repository:
git clone https://github.com/ghuleomkar/AIRBNB-PROJECT
cd AirBNB_Project

⚙️Install dependencies:

  npm install


 🛠️   Configure Environment Variables:

 
  Create a .env file in the root directory and add the following keys:
  
ATLASDB_URL=your_mongodb_atlas_connection_string

SECRET=your_session_secret

MAP_TOKEN=your_mapbox_access_token

CLOUDINARY_CLOUD_NAME=your_cloudinary_name

CLOUDINARY_KEY=your_cloudinary_key

CLOUDINARY_SECRET=your_cloudinary_secret

▶️ Start the application:

• node app.js


🔗 Access the app:

Open your browser and go to http://localhost:3000/listings


📁 Project Structure

 
• app.js: Main entry point of the application.

• models/: Database schemas (Listing, Review, User).

• controllers/: Logic for handling routes.

• views/: EJS templates for the frontend.

• routes/: Express routes for listings, reviews, and users.

• public/: Static files (CSS, JS, Images).


📄 License
This project is licensed under the ISC License.

⭐ Contributions

• Contributors are welcome!

Feel free to open issues or submit pull requests to improve this project.






