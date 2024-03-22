import bookingAppImage from "../../assets/images/Studio Booking.jpg";
import ipTrackerImage from "../../assets/images/ip address tracker.jpg";
import waterTankImage from "../../assets/images/water tank challenge.jpg";
import teerexImage from '../../assets/images/teerex store.jpg';

export const projectsList = [
  {
    name: "Art Studio Booking Website",
    description:
      "A website that lets users make hourly/weekly bookings based on availability of the Studio fetched from a Google Calendar. The app then fires appropriate API calls and e-mails to block the Studio's calendar once payment is successful and informs both the parties. Built with React JS and Express.",
    image : bookingAppImage,
    url : "https://phpstack-597847-3725768.cloudwaysapps.com/"
  },
  {
    name : "E-commerce Geektrust Challenge",
    description : "A React coding challenge by Geektrust Job Portal. Scored 85/100 for this project earning badges for Readable, Extensible and Modular Code.",
    image : teerexImage,
    url : "https://stirring-choux-4caa60.netlify.app/"
  },
 /*  {
    name : "To-Do Pesto Project",
    description : "Lorem ipsum ",
    image : "",
    url : ""
  }, */
  {
    name : "IP Address Tracker",
    description : "A mini-project developed as part of the Pesto Tech curriculum. The application provides relevant data about an IP address given by the user. It also updates the map to show the location of the IP. Built with React, Material UI",
    image : ipTrackerImage,
    url : "https://fascinating-beignet-aa55b7.netlify.app/"
  },
  {
    name : "React Water Tank Challenge",
    description : "A React challenge posted by Ankush Dharkar on X.",
    image : waterTankImage,
    url : "https://watertankchallenge.netlify.app/"
  },

];
