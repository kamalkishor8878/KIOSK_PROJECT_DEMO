const categories = [
  {
    id: "air",
    name: "Air Quality",
    subHeading: "Air Quality Learning Materials",
    image: "assets/images/air.png",
  },
  {
    id: "water",
    name: "Water",
    subHeading: "Water, Sanitation and Hygiene",
    image: "assets/images/water.jpg",
  },
  {
    id: "lake",
    name: "Lake",
    subHeading: "Lakes, Wetlands and Mangroves",
    image: "assets/images/lake.jpg",
  },
];
const base = `file://${__dirname}/../../VIDEOS`;

const videosData = {
  air: [
    { title: "Sky Atmosphere Tutorial", file: `${base}/air/air.mp4` },
  ],
  water: [
    { title: "Ocean & Rivers", file: `${base}/water/earthwatch_water_puppet_English.mp4` },
    { title: "Ocean & Rivers", file: `${base}/water/earthwatch_water_puppet_Marathi.mp4` },
    { title: "Ocean & Rivers", file: `${base}/water/earthwatch_water_puppet_Tamil.mp4` },
    { title: "Ocean & Rivers", file: `${base}/water/earthwatch_water_puppet.mov` },
  ],
  lake: [
    { title: "Introduction to Lakes", file: `${base}/lake/lake1.mp4` },
  ],
};

window.videosData = videosData;


// // Local videos list by category
// const videosData = {
//   air: [
//     {
//       title: "Sky Atmosphere Tutorial",
//       file: "assets/videos/air/airVideo.mov",
//     },
//   ],
//   water: [
//     {
//       title: "Ocean & Rivers",
//       file: "assets/videos/water/earthwatch_water_puppet_English.mp4",
//     },
//     {
//       title: "Ocean & Rivers",
//       file: "assets/videos/water/earthwatch_water_puppet_Marathi.mp4",
//     },
//     {
//       title: "Ocean & Rivers",
//       file: "assets/videos/water/earthwatch_water_puppet_Tamil.mp4",
//     },
//     {
//       title: "Ocean & Rivers",
//       file: "assets/videos/water/earthwatch_water_puppet.mov",
//     },
//   ],
//   lake: [
//     { title: "Introduction to Lakes", file: "assets/videos/lake/lake1.mp4" },
//   ],
// };
