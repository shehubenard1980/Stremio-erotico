const { addonBuilder } = require("stremio-addon-sdk");

const manifest = {
  id: "org.stremio.erotico",
  version: "1.0.0",
  name: "Erotico Select",
  description: "Filma dhe video erotike në stilin Tinto Brass",
  resources: ["catalog", "stream"],
  types: ["movie"],
  catalogs: [
    {
      type: "movie",
      id: "erotico-catalog",
      name: "Erotico Select"
    }
  ]
};

const builder = new addonBuilder(manifest);

builder.defineCatalogHandler(() => {
  return Promise.resolve({
    metas: [
      {
        id: "tinto-brass-1",
        name: "Tinto Brass Classic",
        type: "movie",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Salon_Kitty_poster.jpg/220px-Salon_Kitty_poster.jpg"
      }
    ]
  });
});

builder.defineStreamHandler(() => {
  return Promise.resolve({
    streams: [
      {
        title: "Erotico Stream",
        url: "https://archive.org/download/salon_kitty_202309/Salon%20Kitty.mp4"
      }
    ]
  });
});

module.exports = builder.getInterface();