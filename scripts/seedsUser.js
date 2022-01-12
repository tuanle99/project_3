const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gardenista");

const userSeed = [
  {
    username: "test",
    password: "test123",
    plants: [
      {
        name: "Abelia",
        botanical_name: "Abelia grandiflora",
        height: "3-6 ft.",
        usda_zones: "6-9",
        image:
          "https://www.gardenia.net/storage/app/public/uploads/images/sxToWePBHwBLxedmnXiUcXvqCqd8VEKL3BuhQ1at.jpeg",
        description:
          "Abelia is a very durable and adaptable shrub with dense, glossy dark green foliage. It produces hundreds of 1 inch funnel shaped flowers from early summer until the first frost",
        next_water: "",
      },
      {
        name: "Algerian Ivy",
        botanical_name: "Hedera canariensis",
        height: "1-2 ft.",
        usda_zones: "9-11",
        image:
          "https://www.architecturalplants.com/wp-content/uploads/2020/10/1277790506.jpg",
        description:
          "African Daisies typically have bold, beautiful foliage and large, 3-4 inches, intensely colored flowers with bright centers. The foliage is gray to silvery green and coated with soft, downy silver hairs. The flowers close at night.",
        next_water: "",
      },
      {
        name: "Flowering Onion",
        botanical_name: "Allium species",
        height: "	1-6 ft.",
        usda_zones: "vary",
        image:
          "https://static.onecms.io/wp-content/uploads/sites/37/2020/03/allium-aflatunense-summer-bulbs-6ea11821.jpg",
        description:
          "Flowering Onions are bulb type plants with green, grass-like foliage. They produce hollow, leafless stems that are topped with 1-5inch flower clusters that can contain as many as 100 tiny, star shaped flowers.",
        next_water: "",
      },
      {
        name: "Alpine Aster",
        botanical_name: "Aster alpinus",
        height: "6-12 in.",
        usda_zones: "3-9",
        image:
          "https://www.gardenia.net/storage/app/public/uploads/images/detail/MkO7Tw6C5isTWodSVHBseYFfS4cAmq7lTsecmtNO.jpeg",
        description:
          "The Alpine Aster plant forms a nice compact mound and produces an abundance of 1 ½ inch white flowers in May and June",
        next_water: "",
      },
      {
        name: "Alpine Poppy",
        botanical_name: "Papaver alpinum",
        height: "6-10 in.",
        usda_zones: "4-9",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/5/57/Papaver_alpinum_subsp_alpinum_s_str_%28AlpMohn%29_IMG_3067.jpg",
        description:
          "This short lived, miniature version of the Iceland Poppy readily re seeds itself. It produces saucer shaped 1in. white, yellow or peach flowers in mid summer",
        next_water: "",
      },
      {
        name: "American Dune Grass",
        botanical_name: "Leymus racemosus 'Glaucus'",
        height: "2-3 ft.",
        usda_zones: "4-9",
        image:
          "https://www.thompson-morgan.com/product_images/100/optimised/LEY4515-A_h.jpg",
        description:
          "American Dune Grass is a valuable plant for the prevention of the wind eroding your soil due to its rhizomatous spreading habit",
        next_water: "",
      },
      {
        name: "Aubrieta",
        botanical_name: "Aubrieta deltoidea",
        height: "2-6in.",
        usda_zones: "4-9",
        image:
          "https://plantcaretoday.com/wp-content/uploads/aubrieta-deltoidea-1200-630-FB-06302019-min.jpg",
        description:
          "Common Aubrieta is a vigorous growing, mat forming ground cover and rock garden plant. It is tolerant of a wide range of conditions, and rewards you with a long lasting cover of delicate flowers in early Spring.",
        next_water: "",
      },
      {
        name: "Azalea",
        botanical_name: "Rhododendron",
        height: "	1-8 ft.",
        usda_zones: "6-8",
        image:
          "https://static.onecms.io/wp-content/uploads/sites/37/2020/03/23/pink-purple-rhododendron-7d131722.jpg",
        description:
          "Azaleas must be grown in an acid soil, with a pH of 5.0 to 6.5. The buds for next years blooms will be formed this year, so it important that the faded blooms are removed",
        next_water: "",
      },
      {
        name: "Bearded Iris",
        botanical_name: "Iris germanica",
        height: "6-48in.",
        usda_zones: "Hardy",
        image:
          "https://www.whiteflowerfarm.com/mas_assets/cache/image/6/4/8/2/25730.Jpg",
        description:
          "Bearded Iris are a rhizomous type of Iris should be planted fertile, well drained soil where they will receive 5-8 hours of sun each day. They are available in almost every color imaginable.",
        next_water: "",
      },
      {
        name: "Bears Breeches",
        botanical_name: "Acanthus species",
        height: "3-4 ft.",
        usda_zones: "5-10",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/7a/Acanthus_montanus3.jpg",
        description:
          "Bear's Breeches are huge, mound forming perennials with dramatic, deeply cut, bright green leaves that can reach one foot wide and two feet long. From late spring until mid summer, they produce impressive, 2-3 foot tall spikes of hooded, white or light pink flowers.",
        next_water: "",
      },
    ],
    journals: [
      { title: "title 1", note: "note1" },
      { title: "title 1_2", note: "note1_2" },
    ],
  },
  {
    username: "test2",
    password: "test123",
    plants: [
      {
        name: "American Dune Grass",
        botanical_name: "Leymus racemosus 'Glaucus'",
        height: "2-3 ft.",
        usda_zones: "4-9",
        image:
          "https://www.thompson-morgan.com/product_images/100/optimised/LEY4515-A_h.jpg",
        description:
          "American Dune Grass is a valuable plant for the prevention of the wind eroding your soil due to its rhizomatous spreading habit",
        next_water: "",
      },
      {
        name: "Aubrieta",
        botanical_name: "Aubrieta deltoidea",
        height: "2-6in.",
        usda_zones: "4-9",
        image:
          "https://plantcaretoday.com/wp-content/uploads/aubrieta-deltoidea-1200-630-FB-06302019-min.jpg",
        description:
          "Common Aubrieta is a vigorous growing, mat forming ground cover and rock garden plant. It is tolerant of a wide range of conditions, and rewards you with a long lasting cover of delicate flowers in early Spring.",
        next_water: "",
      },
    ],
    journals: [{ title: "title 2", note: "note2" }],
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " record inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
