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
// Local videos list by category
const videosData = {
  air: [
    {
      id: 1,
      title: "Sky Atmosphere Tutorial",
      thumbnail: "../VIDEOS/air/airThumbnail1.png",
      file: "../VIDEOS/air/Educational puppet show on air quality.mov",
    },
  ],
  water: [
    {
      id: 2,
      title: "जल ही जीवन है",
      thumbnail: "../VIDEOS/water/Hindil_puppet_Portal.jpg",
      file: "../VIDEOS/water/earthwatch_water_puppet.mov",
    },
    {
      id: 3,
      title: "Save Water",
      thumbnail: "../VIDEOS/water/English_Puppet_Portal.jpg",
      file: "../VIDEOS/water/earthwatch_water_puppet_English.mp4",
    },
    {
      id: 4,
      title: "पाणी हे जीवन आहे",
      thumbnail: "../VIDEOS/water/Marathi_puppet_Portal.jpg",
      file: "../VIDEOS/water/earthwatch_water_puppet_Marathi.mp4",
    },
    {
      id: 5,
      title: "நீர் தான் வாழ்க்கை",
      thumbnail: "../VIDEOS/water/Tamil_puppet_Portal.jpg",
      file: "../VIDEOS/water/earthwatch_water_puppet_Tamil.mp4",
    },
  ],
  lake: [
    {
      id: 6,
      title: "Educational Resource on Beautiful Wetlands and Biodiversity of Chennai",
      about: `Promoting conservation of waterbodies and biodiversity through building knowledge and appreciation \n Explore | Learn | Inspire | Conserve`,
      thumbnail: "../VIDEOS/lake/lakeThumbnail1.png",
      file: "../VIDEOS/lake/lakeVideo1.mp4"
    },

    {
      id: 7,
      title: "Educational Resource on the Beautiful Lakes of Pimpri Chinchwad and Talegaon",
      about: `Connecting people with lakes and biodiversity For today, tomorrow, and future generations`,
      thumbnail: "../VIDEOS/lake/lakeThumbnail2.png",
      file: "../VIDEOS/lake/lakeVideo2.mp4"
    },
    {
      id: 8,
      title: "Conservation of the Mangrove Ecosystem",
      about: `Building knowledge, raising awareness, and strengthening community support for mangrove conservation`,
      thumbnail: "../VIDEOS/lake/lakeThumbnail3.png",
      file: "../VIDEOS/lake/lakeVideo3.mp4"
    },
  ],
};
