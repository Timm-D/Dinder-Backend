const Restaurants = [
  {
    name: "50 Degrees North",
    addressLine1: "Copthorne Hotel, Armada Way, Plymouth",
    postCode: "PL1 1AR",
    ratingValue: 4,
    geoLong: -4.1430832636010955,
    geoLat: 50.3745463,
    type: "French"
  },
  {
    name: "Jake's",
    addressLine1: "Regent Terrace, 5 Regent St, Plymouth",
    postCode: "PL4 8BA",
    ratingValue: 4,
    geoLong: -4.13551,
    geoLat: 50.3735,
    type: "English"
  },
  {
    name: "Toot",
    addressLine1: "46 Mayflower St, Plymouth ",
    postCode: "PL1 1QX",
    ratingValue: 5,
    geoLong: -4.1412255,
    geoLat: 50.3733769,
    type: "Indian"
  },
  {
    name: "Crispy's",
    addressLine1: "134 Armada Way, Plymouth",
    postCode: "PL1 1LA",
    ratingValue: 4,
    geoLong: -4.14205,
    geoLat: 50.37177,
    type: "English"
  },
  {
    name: "Turtle Bay Plymouth",
    addressLine1: "5 St Andrews Cross Roundabout, Plymouth",
    postCode: "PL1 1AB",
    ratingValue: 4,
    geoLong: -4.15902,
    geoLat: 50.36954,
    type: "Caribbean"
  },
  {
    name: "Lanterns Restaurant",
    addressLine1: "88 Cornwall St, Plymouth",
    postCode: "PL1 1LR",
    ratingValue: 5,
    geoLong: -4.14387,
    geoLat: 50.37253,
    type: "English"
  },
  {
    name: "Steak & Omelette",
    addressLine1: "116-118 Cornwall St, Plymouth",
    postCode: "PL1 1NF",
    ratingValue: 5,
    geoLong: -4.14511,
    geoLat: 50.37254,
    type: "Italian"
  },
  {
    name: "City grill",
    addressLine1: "130 Cornwall St, Plymouth",
    postCode: "PL1 1NJ",
    ratingValue: 5,
    geoLong: -4.14654,
    geoLat: 50.37245,
    type: "English"
  },
  {
    name: "Zeus",
    addressLine1: "150-152 Cornwall St, Plymouth",
    postCode: "PL1 1NJ",
    ratingValue: 4,
    geoLong: -4.146753,
    geoLat: 50.37245,
    type: "Grill"
  },
  {
    name: "Nawroz Restaurant",
    addressLine1: "142 King St, Stonehouse, Plymouth",
    postCode: "PL1 5JE",
    ratingValue: 5,
    geoLong: -4.14964,
    geoLat: 50.37201,
    type: "Italian"
  },
  {
    name: "Dunya Restaurant Turkish Cuisine",
    addressLine1: "10 Derrys Cross, Plymouth",
    postCode: "PL1 2SH",
    ratingValue: 5,
    geoLong: -4.14661,
    geoLat: 50.37037,
    type: "Grill"
  },
  {
    name: "Fletcher's Restaurant",
    addressLine1: "Gill Akaster House, 27 Princess St, Plymouth",
    postCode: "PL1 2EX",
    ratingValue: 5,
    geoLong: -4.14278,
    geoLat: 50.3687,
    type: "French"
  },
  {
    name: "Positano",
    addressLine1: "36-38 Mayflower St, Plymouth",
    postCode: "PL1 1QX",
    ratingValue: 5,
    geoLong: -4.14131,
    geoLat: 50.37353,
    type: "Italian"
  },
  {
    name: "McDonald's",
    addressLine1: "13/17 New George St, Plymouth",
    postCode: "PL1 1QZ",
    ratingValue: 3,
    geoLong: -4.13965,
    geoLat: 50.37116,
    type: "FastFood"
  },
  {
    name: "Tea & Bun",
    addressLine1: "135 Cornwall St, Plymouth",
    postCode: "PL1 1PA",
    ratingValue: 5,
    geoLong: -4.14611,
    geoLat: 50.37219,
    type: "English"
  },
  {
    name: "Soul Food Vendor",
    addressLine1: "18-20 Market Ave, Plymouth",
    postCode: "PL1 1PH",
    ratingValue: 5,
    geoLong: -4.1469,
    geoLat: 50.37206,
    type: "Caribbean"
  },
  {
    name: "Oishi Sushi",
    addressLine1: "49 Mayflower St, Plymouth",
    postCode: "PL1 1QL",
    ratingValue: 4,
    geoLong: -4.14175,
    geoLat: 50.37318,
    type: "Sushi"
  },
  {
    name: "Malcolm Barnecutt Bakery",
    addressLine1: "11 Cornwall St, Plymouth",
    postCode: "PL1 1NL",
    ratingValue: 5,
    geoLong: -4.14611,
    geoLat: 50.37227,
    type: "Bakery"
  },
  {
    name: "Taco Bell",
    addressLine1: "19 New George St, Plymouth",
    postCode: "PL1 1QZ",
    ratingValue: 4,
    geoLong: -4.13965,
    geoLat: 50.37116,
    type: "Mexican"
  },
  {
    name: "KFC",
    addressLine1: "10 Old Town St, Plymouth",
    postCode: "PL1 1DD",
    ratingValue: 4,
    geoLong: -4.13879,
    geoLat: 50.37116,
    type: "FastFood"
  },
  {
    name: "The Caffeine Club",
    addressLine1: "46 Tavistock Pl, Plymouth",
    postCode: "PL4 8AX",
    ratingValue: 4,
    geoLong: -4.13705,
    geoLat: 50.37414,
    type: "Grill"
  },
  {
    name: "Manuka Bar & Eatery",
    addressLine1: "40 Drake Circus, Plymouth",
    postCode: "PL4 8AB",
    ratingValue: 4,
    geoLong: -4.13731,
    geoLat: 50.37480,
    type: "Bakery"
  },
  {
    name: "Mrs Browns",
    addressLine1: "12 Gibbon Ln, Plymouth",
    postCode: "PL4 8BR",
    ratingValue: 5,
    geoLong: -4.13579,
    geoLat: 50.37506,
    type: "Bakery"
  },
  {
    name: "The Nowhere Inn",
    addressLine1: "21 Gilwell St, Plymouth",
    postCode: "PL4 8BU",
    ratingValue: 4,
    geoLong: -4.13481,
    geoLat: 50.37469,
    type: "English"
  },
  {
    name: "The Camel",
    addressLine1: "51 Regent St, Plymouth",
    postCode: "PL4 8DE",
    ratingValue: 4,
    geoLong: -4.13440,
    geoLat: 50.37282,
    type: "Grill"
  },
  {
    name: "New Jade Garden",
    addressLine1: "74 Ebrington St, Plymouth",
    postCode: "PL4 9AQ",
    ratingValue: 3,
    geoLong: -4.13350,
    geoLat: 50.37251,
    type: "Chinese"
  },
  {
    name: "The Woodside Bar & Kitchen",
    addressLine1: "12 Gasking St, Plymouth",
    postCode: "PL4 8DQ",
    ratingValue: 4,
    geoLong: -4.13255,
    geoLat: 50.37255,
    type: "English"
  },
  {
    name: "Friary Mill Bakery Ltd",
    addressLine1: "1 Beaumont Rd, Plymouth",
    postCode: "PL4 9BA",
    ratingValue: 5,
    geoLong: -4.13224,
    geoLat: 50.37232,
    type: "Bakery"
  },
  {
    name: "Domino's Pizza - Plymouth - City Centre",
    addressLine1: "65-67 Exeter St, Plymouth",
    postCode: "PL4 0AH",
    ratingValue: 3,
    geoLong: -4.13318,
    geoLat: 50.37180,
    type: "Italian"
  },
  {
    name: "Babawok",
    addressLine1: "35 Bretonside, Plymouth",
    postCode: "PL4 0BB",
    ratingValue: 4,
    geoLong: -4.13458,
    geoLat: 50.37078,
    type: "Chinese"
  },
  {
    name: "Little India ( Best Indian Takeaway Plymouth )",
    addressLine1: "44 Armada St, Plymouth",
    postCode: "PL4 8LZ",
    ratingValue: 4,
    geoLong: -4.13298,
    geoLat: 50.37585,
    type: "Indian"
  },
  {
    name: "HonkyTonk Wine Library",
    addressLine1: "N E Quay, Sutton Harbour, Plymouth",
    postCode: "PL4 0BN",
    ratingValue: 5,
    geoLong: -4.13139,
    geoLat: 50.37020,
    type: "French"
  },
  {
    name: "Suphas",
    addressLine1: "Sugar House Studios, Marrowbone Slip, Plymouth",
    postCode: "PL4 0HX",
    ratingValue: 4,
    geoLong: -4.13089,
    geoLat: 50.36906,
    type: "Caribbean"
  },
  {
    name: "China House",
    addressLine1: "Sutton Wharf, Plymouth",
    postCode: "PL4 0DW",
    ratingValue: 5,
    geoLong: -4.13388,
    geoLat: 50.36894,
    type: "Grill"
  },
  {
    name: "Lockyers Quay Cookhouse + Pub",
    addressLine1: "1 Lockyers Quay, Plymouth",
    postCode: "PL4 0DX",
    ratingValue: 4,
    geoLong: -4.12783,
    geoLat: 50.36742,
    type: "French"
  },
  {
    name: "Rockfish Plymouth",
    addressLine1: "Rope Walk, Sutton Harbour 3, Plymouth",
    postCode: "PL4 0LB",
    ratingValue: 4,
    geoLong: -4.13242,
    geoLat: 50.36665,
    type: "FastFood"
  },
  {
    name: "Waypoint Bar and Bistro",
    addressLine1: "Queen Anne's Battery, Plymouth",
    postCode: "PL4 0LP",
    ratingValue: 4,
    geoLong: -4.12788,
    geoLat: 50.36500,
    type: "English"
  },
  {
    name: "Pizza Express",
    addressLine1: "Leisure Centre, Unit 2, 16 The Barbican, Barbican Approach, Plymouth",
    postCode: "PL4 0LG",
    ratingValue: 4,
    geoLong: -4.12520,
    geoLat: 50.36739,
    type: "Italian"
  },
  {
    name: "East End",
    addressLine1: "168 Exeter St, Plymouth",
    postCode: "PL4 0NG",
    ratingValue: 4,
    geoLong: -4.12762,
    geoLat: 50.37010,
    type: "Chinese"

  },
  {
    name: "Silver Bird",
    addressLine1: "198 Exeter St, Plymouth",
    postCode: "PL4 0NH",
    ratingValue: 4,
    geoLong: -4.12583,
    geoLat: 50.36978,
    type: "FastFood"
  }
];

module.exports = Restaurants;
