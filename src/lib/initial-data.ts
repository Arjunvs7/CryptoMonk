import type { UserData } from "./types";

export const keralaDistricts: string[] = [
  "Thiruvananthapuram",
  "Kollam",
  "Pathanamthitta",
  "Alappuzha",
  "Kottayam",
  "Idukki",
  "Ernakulam",
  "Thrissur",
  "Palakkad",
  "Malappuram",
  "Kozhikode",
  "Wayanad",
  "Kannur",
  "Kasaragod",
].sort();

export const initialData: UserData[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice.j@gmail.com",
    phone: "555-0101",
    hobbies: ["Reading", "Hiking"],
    place: "Thiruvananthapuram",
    gender: "female",
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob.smith@gmail.com",
    phone: "555-0102",
    hobbies: ["Gaming", "Coding", "Music"],
    place: "Kollam",
    gender: "male",
  },
  {
    id: "3",
    name: "Carol Williams",
    email: "carol.w@gmail.com",
    phone: "555-0103",
    hobbies: ["Cooking", "Traveling"],
    place: "Pathanamthitta",
    gender: "female",
  },
  {
    id: "4",
    name: "David Brown",
    email: "d.brown@gmail.com",
    phone: "555-0104",
    hobbies: ["Sports", "Movies"],
    place: "Alappuzha",
    gender: "male",
  },
  {
    id: "5",
    name: "Eve Davis",
    email: "eve.davis@gmail.com",
    phone: "555-0105",
    hobbies: ["Photography", "Art"],
    place: "Kottayam",
    gender: "female",
  },
  {
    id: "6",
    name: "Frank Miller",
    email: "frank.m@gmail.com",
    phone: "555-0106",
    hobbies: ["Gardening", "Music"],
    place: "Idukki",
    gender: "male",
  },
  {
    id: "7",
    name: "Grace Wilson",
    email: "g.wilson@gmail.com",
    phone: "555-0107",
    hobbies: ["Yoga", "Reading"],
    place: "Ernakulam",
    gender: "female",
  },
  {
    id: "8",
    name: "Henry Moore",
    email: "h.moore@gmail.com",
    phone: "555-0108",
    hobbies: ["Fishing", "Hiking", "Sports"],
    place: "Thrissur",
    gender: "male",
  },
  {
    id: "9",
    name: "Isabel Taylor",
    email: "isabel.t@gmail.com",
    phone: "555-0109",
    hobbies: ["Writing", "Music"],
    place: "Palakkad",
    gender: "female",
  },
  {
    id: "10",
    name: "Jack Anderson",
    email: "jack.a@gmail.com",
    phone: "555-0110",
    hobbies: ["Coding", "Gaming"],
    place: "Malappuram",
    gender: "male",
  },
];

// Use the defined Kerala districts for the places filter and form dropdown
export const places: string[] = keralaDistricts;

// Hobbies are still derived from the initial data, or could be a predefined list too
export const allHobbies = Array.from(new Set(initialData.flatMap(item => item.hobbies))).sort();
