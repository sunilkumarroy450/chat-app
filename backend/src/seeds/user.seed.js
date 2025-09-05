import { config } from "dotenv";

import User from "../models/user.model.js";
import { connectDB } from "../config/db.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "aarti.sharma@example.com",
    fullName: "Aarti Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "priya.verma@example.com",
    fullName: "Priya Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "sneha.patel@example.com",
    fullName: "Sneha Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "kavya.iyer@example.com",
    fullName: "Kavya Iyer",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "isha.reddy@example.com",
    fullName: "Isha Reddy",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "meera.nair@example.com",
    fullName: "Meera Nair",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "ananya.kapoor@example.com",
    fullName: "Ananya Kapoor",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "rhea.mehra@example.com",
    fullName: "Rhea Mehra",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "arjun.singh@example.com",
    fullName: "Arjun Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "rahul.kumar@example.com",
    fullName: "Rahul Kumar",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "rohan.pillai@example.com",
    fullName: "Rohan Pillai",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "amit.desai@example.com",
    fullName: "Amit Desai",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "vikram.chopra@example.com",
    fullName: "Vikram Chopra",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "siddharth.banerjee@example.com",
    fullName: "Siddharth Banerjee",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "rajat.jain@example.com",
    fullName: "Rajat Jain",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
