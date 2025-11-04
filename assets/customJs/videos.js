const path = require("path");

const videosBasePath = path.join(__dirname, "..", "VIDEOS");

const videosData = {
  air: [
    {
      title: "Sky Atmosphere Tutorial",
      file: path.join(videosBasePath, "air", "air.mp4"),
    },
  ],
  water: [
    {
      title: "Ocean & Rivers",
      file: path.join(videosBasePath, "water", "earthwatch_water_puppet_English.mp4"),
    },
    {
      title: "Ocean & Rivers",
      file: path.join(videosBasePath, "water", "earthwatch_water_puppet_Marathi.mp4"),
    },
    {
      title: "Ocean & Rivers",
      file: path.join(videosBasePath, "water", "earthwatch_water_puppet_Tamil.mp4"),
    },
    {
      title: "Ocean & Rivers",
      file: path.join(videosBasePath, "water", "earthwatch_water_puppet.mov"),
    },
  ],
  lake: [
    {
      title: "Introduction to Lakes",
      file: path.join(videosBasePath, "lake", "lake1.mp4"),
    },
  ],
};
 
