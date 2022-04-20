const data = [
  {
    id: 16,
    titulo: "The Martian",
    genero: "Adventure",
    actores: "Matt Damon",
    fecha: "2015",
    duracion: "2h 24min",
    img: "../images2/The martian.jpg",
    descripcion:
      "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive and can survive until a potential rescue.",
  },
  {
    id: 19,
    titulo: "Back to the future",
    genero: "Science Fiction",
    actores: "Michael J. Fox",
    fecha: "1985",
    duracion: "1h 56min",
    img: "../images2/Back to the future.jpg",
    descripcion:
      "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
  },
  {
    id: 1,
    titulo: "Oblivion",
    genero: "Science Fiction",
    actores: "Tom Cruise",
    fecha: "2013",
    duracion: "2h 04min",
    img: "../images2/mv1.jpg",
    descripcion:
      "A veteran assigned to extract Earth's remaining resources begins to question what he knows about his mission and himself.",
  },
  {
    id: 2,
    titulo: "Into the wild",
    genero: "Adventure",
    actores: "Emile Hirsch",
    fecha: "2007",
    duracion: "2h 28min",
    img: "../images2/mv2.jpg",
    descripcion:
      "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.",
  },
  {
    id: 3,
    titulo: "Atomic Blonde",
    genero: "Action",
    actores: "Charlize Theron",
    fecha: "2017",
    duracion: "1h 55min",
    img: "../images2/atomic-blonde.jpg",
    descripcion:
      "An undercover MI6 agent is sent to Berlin during the Cold War to investigate the murder of a fellow agent and recover a missing list of double agents.",
  },
  {
    id: 4,
    titulo: "It",
    genero: "Horror",
    actores: "Bill Skarsgård",
    fecha: "2017",
    duracion: "2h 15min",
    img: "../images2/mv-it7.jpg",
    descripcion:
      "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.",
  },
  {
    id: 5,
    titulo: "Prisoners",
    genero: "Thriller",
    actores: "Hug Jackman, Jake Gyllenhaal",
    fecha: "2013",
    duracion: "2h 21min",
    img: "../images2/prisoners.jpg",
    descripcion:
      "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts.",
  },
  {
    id: 6,
    titulo: "SKYFALL: Evil of Boss",
    genero: "Action",
    actores: "Daniel Craig",
    fecha: "2012",
    duracion: "2h 23min",
    img: "../images2/mv5.jpg",
    descripcion:
      "James Bond's loyalty to M is tested when her past comes back to haunt her. When MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost.",
  },
  {
    id: 7,
    titulo: "Inception",
    genero: "Science Fiction",
    actores: "Leonardo Di caprio",
    fecha: "2010",
    duracion: "2h 28min",
    img: "../images2/mv-it8.jpg",
    descripcion:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
  },
  {
    id: 8,
    titulo: "Blade Runner2049",
    genero: "Science Fiction",
    actores: "Harrison Ford, Ryan Gosling ",
    fecha: "2017",
    duracion: "2h 44min",
    img: "../images2/mv3.jpg",
    descripcion:
      "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
  },
  {
    id: 9,
    titulo: "The Guardians of the galaxy",
    genero: "Adventure",
    actores: "Chriss Pratt",
    fecha: "2014",
    duracion: "2h 01min",
    img: "../images2/guardians.jpg",
    descripcion:
      "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
  },
  {
    id: 10,
    titulo: "1917",
    genero: "War",
    actores: "Dean Charles Chapman",
    fecha: "2019",
    duracion: "1h 59min",
    img: "../images2/1917.jpg",
    descripcion:
      "April 6th, 1917. As an infantry battalion assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
  },
  {
    id: 11,
    titulo: "The Godfather",
    genero: "Drama",
    actores: "Marlon Brando, Al Pacino",
    fecha: "1972",
    duracion: "2h 55min",
    img: "../images2/mv-it12.jpg",
    descripcion:
      "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
  },
  {
    id: 12,
    titulo: "The Green Mile",
    genero: "Science Fiction",
    actores: "Tom Hanks",
    fecha: "1999",
    duracion: "3h 09min",
    img: "../images2/green-mile.jpg",
    descripcion:
      "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
  },
  {
    id: 13,
    titulo: "The Shawshank Redemption",
    genero: "Drama",
    actores: "Tim Robbins, Morgan Freeman",
    fecha: "1999",
    duracion: "2h 22min",
    img: "../images2/the shawshank redemption .jpg",
    descripcion:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  },
  {
    id: 14,
    titulo: "Braveheart",
    genero: "Drama",
    actores: "Mel Gibson",
    fecha: "1995",
    duracion: "2h 58min",
    img: "../images2/Braveheart..jpg",
    descripcion:
      "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
  },
  {
    id: 15,
    titulo: "Seven",
    genero: "Thriller",
    actores: "Morgan Freeman, Brad Pitt",
    fecha: "1995",
    duracion: "2h 7min",
    img: "../images2/Seven.jpg",
    descripcion:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
  },
  {
    id: 17,
    titulo: "Pulp Fiction",
    genero: "Drama",
    actores: "",
    fecha: "1994",
    duracion: "2h 34min",
    img: "../images2/pulp-fiction.jpg",
    descripcion:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  },
  {
    id: 18,
    titulo: "Inglourious Basterds",
    genero: "War",
    actores: "Brad Pitt, Diane Kraig",
    fecha: "2009",
    duracion: "2h 33min",
    img: "../images2/poster_inglourious.jpg",
    descripcion:
      "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
  },

  {
    id: 20,
    titulo: "Fight club",
    genero: "Drama",
    actores: "Edward Norton",
    fecha: "1999",
    duracion: "2h 19min",
    img: "../images2/fight club.jpeg",
    descripcion:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
  },
];

export default data;
