
# Mechanical Keyboard Shop

## Introduction
Welcome to KeyGenius, your one-stop shop for premium mechanical keyboards. Our website offers a curated selection of high-quality keyboards tailored for enthusiasts, gamers, and professionals alike. With KeyGenius, you can easily browse, purchase, and enjoy the best mechanical keyboards on the market.
## Project Decription
### Purpose
KeyGenius is an e-commerce platform designed to cater to the growing community of mechanical keyboard enthusiasts. Our goal is to provide a seamless and enjoyable shopping experience for users seeking high-quality mechanical keyboards. We offer a diverse range of products, from beginner-friendly models to high-end, customizable options, ensuring that every customer can find the perfect keyboard to suit their needs.
### Goals
1. **Comprehensive Product Offering**: Provide a diverse catalog of mechanical keyboards with detailed information and high-quality images.
2. **User-Friendly Experience**: Develop an intuitive interface for easy browsing, searching, and purchasing.
3. **Efficient Inventory Management**: Offer robust admin tools for adding, editing, and deleting products.
4. **Secure Transactions**: Ensure secure payment processing and reliable order fulfillment.
5. **Community Engagement**: Build a community through resources, guides, and user reviews.
6. **Scalability and Performance**: Create a scalable, high-performance website with fast load times and responsive design.

## Features

- **Product Listings**: A well-organized catalog of mechanical keyboards with detailed descriptions, specifications, and images.
- **Search and Filters**: Advanced search functionality and filters to help users quickly find the products they are looking for.
- **Admin Dashboard**: A comprehensive admin panel for managing products, including adding, editing, and deleting products.
- **User Reviews**: A system for users to leave reviews and ratings on products, providing valuable feedback for other customers.
- **Secure Checkout**: A secure and streamlined checkout process with multiple payment options.
- **Responsive Design**: A fully responsive design that ensures a consistent experience across all devices, including desktops, tablets, and smartphones.

## Technology Stack

- **Frontend**:
  - HTML
  - CSS
  - Tailwind CSS
  - JavaScript
  - React
  - TypeScript
  - Redux

- **Backend**:
  - Node.js
  - Express

- **Database**:
  - MongoDB
  - Mongoose

### Installation Guideline

Follow these instructions to set up the project locally on your machine.

#### Prerequisites

Make sure you have the following installed:
- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB (either local or using a cloud service like MongoDB Atlas)

#### Clone the Repository

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/toukir15/mechanical-keyboard-shop.git

### Install server dependencies
cd server
npm install

### Install client dependencies
cd client
npm install

### Start the backend server
cd server
npm run start:dev

### Start the frontend development server
cd client
npm run dev

## Configuration

To configure the project for local development or deployment, follow these steps:

### Setting up Environment Variables

1. Create a `.env` file inside the server directory of the project if it doesn't already exist.

2. Add the necessary configuration variables to the `.env` file. Here are the variables used in our project:

   ```plaintext
   PORT=5000
   DATABASE_URL=your_mongodb_uri
   CLOUDINARY_CLOUD_NAME=your_cludinay_name
   CLOUDINARY_API_KEY=your_cludinay_api_key
   CLOUDINARY_API_SECRET=your_cludinay_api_secret
   STRIPE_SECRET=your_stripe_secret
