const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gardenista");

const plantsSeed = [
  {
    name: "Abelia",
    botanical_name: "Abelia grandiflora",
    height: "3-6 ft.",
    usda_zones: "6-9",
    image:
      "https://www.gardenia.net/storage/app/public/uploads/images/sxToWePBHwBLxedmnXiUcXvqCqd8VEKL3BuhQ1at.jpeg",
    description:
      "Abelia is a very durable and adaptable shrub with dense, glossy dark green foliage. It produces hundreds of 1 inch funnel shaped flowers from early summer until the first frost",
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
  },
  {
    name: "Begonia Rex",
    botanical_name: "Begonia rex-cultorum",
    height: "4-12in.",
    usda_zones: "10-12",
    image:
      "https://i.pinimg.com/originals/0e/bc/6e/0ebc6ec1bf204e0c90cba35047b026b5.jpg",
    description:
      "The Rex or Painted-Leaf Begonias are rhizomatous, clump forming, tender perennials that are normally grown as house plants. Their leaves vary considerably in texture, size, shape, patterns and colors. The inconspicuous, small, pink or white flowers may appear at any time of the year",
  },
  {
    name: "Spotted Lungwort",
    botanical_name: "Pulmonaria officinalis",
    height: "8-12in.",
    usda_zones: "6-9",
    image:
      "https://images.squarespace-cdn.com/content/v1/5a7d005d8c56a819b62222e3/1588259578755-CNXZENJTPIR7HEH95LMK/ke17ZwdGBToddI8pDm48kDwOVZBzyCFHt1F9vRpCRKJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIruUZ2Dr7im-WOKQF0Dhtd07SbgqT3m0Zy7-SZ53tExQKMshLAGzx4R3EDFOm1kBS/lungwort.jpg?format=1000w",
    description:
      "Spotted Lungwort is a clumping, evergreen perennial that is known for its pretty, marbled foliage and brilliantly colored spikes of nodding flowers that appear in early spring and last for several weeks",
  },
  {
    name: "Bird of Paradise",
    botanical_name: "Strelitzia reginae",
    height: "4-5 ft.",
    usda_zones: "8-11",
    image:
      "https://www.gardenia.net/storage/app/public/uploads/images/detail/Bird%20of%20paradise%20(Strelitzia%20reginae),.jpg",
    description:
      "Bird of Paradise plants are evergreen perennials with large paddle shaped leaves, that are grown for their spectacular flowers. They can be grown from seed, which take up to 18 months to germinate, or they can be propagated by division. Can be grown as a house plant",
  },
  {
    name: "Bluebell of Scotland",
    botanical_name: "Campanula rotundifolia",
    height: "1-3 ft.",
    usda_zones: "3-9",
    image:
      "https://static.ashwoodnurseries.com/shop/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/h/a/harebell2.jpg",
    description:
      "The Bluebell Bellflower is a clump forming perennial that, from June through September, produces multiple stems, each with a single nodding bell shaped flower. Campanula can be grown from seed or propagated by division. (Campanula comes from the Latin word campana, which means 'bell')",
  },
  {
    name: "Blue Fescue",
    botanical_name: "Festuca glauca",
    height: "8-12in.",
    usda_zones: "4-9",
    image:
      "https://previews.123rf.com/images/elesi/elesi2005/elesi200500019/147452053-festuca-glauca-commonly-known-as-blue-fescue-is-a-species-of-flowering-plant-in-the-grass-family-poa.jpg",
    description:
      "Blue Fescue is a durable plant that grows in clumping mounds of fine blue foliage. They tend to die out in the center after a couple years and will need to be divided",
  },
  {
    name: "Blue Hill Sage",
    botanical_name: "Salvia superba",
    height: "	12-15in.",
    usda_zones: "4-8",
    image:
      "https://bluestoneperennials.global.ssl.fastly.net/img/SAMB/650/SAMB_0_salvia_merleau_blue_fg.1491331436.jpg",
    description:
      "Narrow erect plant with irregular leaves, spikes of intensely bluish purple flowers all Summer if spent flowers are removed. Drought tolerant, Prefers slightly alkaline soil",
  },
  {
    name: "Bottlebrush",
    botanical_name: "Callistemon lanceolatus",
    height: "10-20 ft.",
    usda_zones: "8-11",
    image: "https://pfaf.org/Admin/PlantImages/CallistemonCitrinus2.jpg",
    description:
      "Bottlebrush is a small, slow growing evergreen tree with light green, elliptical shaped 6in. leaves. New growth has a nice copper hue. Brightly colored, 1½ in.bottle brush flowers appear conspicuously in the spring",
  },

  // http://www.thegardenhelper.com/commindex.html
];
function seedPlants() {
  db.Plants.remove({})
    .then(() => db.Plants.collection.insertMany(plantsSeed))
    .then((data) => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

module.exports = seedPlants();
