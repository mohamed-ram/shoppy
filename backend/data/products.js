const data = [
  {
    title: "Wenona",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    brand: "Mid-Con Energy Partners, LP",
    category: "Rebar & Wire Mesh Install",
    price: "$8.32",
    countInStock: 1,
    rating: 4,
    numReviews: 5,
  },
  {
    title: "Malissia",
    image:
      "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    brand: "Entergy Arkansas, Inc.",
    category: "RF Shielding",
    price: "$2.33",
    countInStock: 2,
    rating: 4,
    numReviews: 96,
  },
  {
    title: "Jillene",
    image:
      "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    brand: "Axis Capital Holdings Limited",
    category: "Drywall & Acoustical (FED)",
    price: "$3.96",
    countInStock: 3,
    rating: 2,
    numReviews: 67,
  },
  {
    title: "Rosmunda",
    image:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1201&q=80",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    brand: "Voya Natural Resources Equity Income Fund",
    category: "Waterproofing & Caulking",
    price: "$8.72",
    countInStock: 4,
    rating: 5,
    numReviews: 64,
  },
  {
    title: "Yvette",
    image:
      "https://images.unsplash.com/photo-1537151377170-9c19a791bbea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    brand: "WSI Industries Inc.",
    category: "Fire Sprinkler System",
    price: "$5.41",
    countInStock: 5,
    rating: 2,
    numReviews: 64,
  },
  {
    title: "Casar",
    image:
      "https://images.unsplash.com/photo-1557701197-2f99da0922dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    brand: "TheStreet, Inc.",
    category: "Asphalt Paving",
    price: "$5.85",
    countInStock: 6,
    rating: 1,
    numReviews: 45,
  },
  {
    title: "Mitchell",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    brand: "PrimeEnergy Corporation",
    category: "Electrical and Fire Alarm",
    price: "$3.78",
    countInStock: 7,
    rating: 1,
    numReviews: 77,
  },
  {
    title: "Richardo",
    image:
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    brand: "21Vianet Group, Inc.",
    category: "Glass & Glazing",
    price: "$4.49",
    countInStock: 8,
    rating: 5,
    numReviews: 47,
  },
  {
    title: "Daven",
    image:
      "https://images.unsplash.com/photo-1606741965326-cb990ae01bb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    brand: "SG Blocks, Inc.",
    category: "Landscaping & Irrigation",
    price: "$5.95",
    countInStock: 9,
    rating: 1,
    numReviews: 25,
  },
  {
    title: "Jackquelin",
    image:
      "https://images.unsplash.com/photo-1566863244489-a5e7946f46f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    brand: "Kimco Realty Corporation",
    category: "Electrical",
    price: "$9.63",
    countInStock: 10,
    rating: 5,
    numReviews: 38,
  },
  {
    title: "Malena",
    image:
      "https://images.unsplash.com/photo-1585351650024-8e333a17aeff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    brand: "NetApp, Inc.",
    category: "Framing (Steel)",
    price: "$9.44",
    countInStock: 11,
    rating: 4,
    numReviews: 60,
  },
  {
    title: "Blinni",
    image:
      "https://images.unsplash.com/photo-1586062129117-08db958ba215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    brand: "Citigroup Inc.",
    category: "Hard Tile & Stone",
    price: "$5.18",
    countInStock: 12,
    rating: 5,
    numReviews: 87,
  },
  {
    title: "Guillaume",
    image:
      "https://images.unsplash.com/photo-1598717873846-0418a74950f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGVsZWN0cm9uaWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    brand: "Cornerstone OnDemand, Inc.",
    category: "Drilled Shafts",
    price: "$3.95",
    countInStock: 13,
    rating: 3,
    numReviews: 6,
  },
  {
    title: "Marge",
    image:
      "https://images.unsplash.com/photo-1573920011462-eb3003086611?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    brand: "AMERIPRISE FINANCIAL SERVICES, INC.",
    category: "Electrical",
    price: "$5.01",
    countInStock: 14,
    rating: 4,
    numReviews: 23,
  },
  {
    title: "Briano",
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    description:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    brand: "NetSol Technologies Inc.",
    category: "Asphalt Paving",
    price: "$4.03",
    countInStock: 15,
    rating: 5,
    numReviews: 38,
  },
];

export default data;
