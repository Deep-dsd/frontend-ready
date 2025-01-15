//This Data is for creating the Movie Cards
export const movieDataList = [
  {
    movieId: 1,
    movieName: "Memento",
    moviePoster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28578_p_v10_ac.jpg",
    movieRating: 4,
    shortDescription: "A man with short-term memory loss attempts to track down his wife's murderer."
  },
  {
    movieId: 2,
    movieName: "Inception",
    moviePoster: "https://m.media-amazon.com/images/I/71thFiIUSpL._AC_UF894,1000_QL80_.jpg",
    movieRating: 5,
    shortDescription: "A thief who steals corporate secrets through dream-sharing technology is given a chance to erase his criminal record."
  },
  {
    movieId: 3,
    movieName: "The Dark Knight",
    moviePoster: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/z/n/7/small-poster-dark-knight-joker-sl-15603-wall-poster-13x19-inches-original-imagdqez7gfxcbpz.jpeg?q=90&crop=false",
    movieRating: 5,
    shortDescription: "Batman faces the Joker in a battle for Gotham's soul."
  },
  {
    movieId: 4,
    movieName: "Interstellar",
    moviePoster: "https://images-cdn.ubuy.co.in/634e4ec907b708191f1c204b-kodiakprints-interstellar-movie-poster.jpg",
    movieRating: 4.5,
    shortDescription: "A team of explorers travel through a wormhole in space to ensure humanity's survival."
  },
  {
    movieId: 5,
    movieName: "The Prestige",
    moviePoster: "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg",
    movieRating: 4.5,
    shortDescription: "Two rival magicians engage in a battle to create the ultimate illusion."
  },
  {
    movieId: 6,
    movieName: "Dunkirk",
    moviePoster: "https://rukminim2.flixcart.com/image/720/864/kyvvtzk0/poster/f/q/t/medium-dunkirk-christopher-nolan-movie-matte-finish-poster-original-imagbygfgs74q9gg.jpeg?q=60&crop=false",
    movieRating: 4,
    shortDescription: "Allied soldiers are trapped and evacuated during World War II."
  },
  {
    movieId: 7,
    movieName: "Tenet",
    moviePoster: "https://m.media-amazon.com/images/M/MV5BYjI0NDQzYmEtNzMwZC00ODA3LTgzZDYtZTk5ODZjY2Y2OTkzXkEyXkFqcGc@._V1_.jpg",
    movieRating: 4,
    shortDescription: "A secret agent manipulates time to prevent a global catastrophe."
  },
  {
    movieId: 8,
    movieName: "The Matrix",
    moviePoster: "https://rukminim2.flixcart.com/image/850/1000/kmns7m80/poster/l/p/f/medium-the-matrix-an-american-maxi-origins-jumbo-medium-size-original-imagfgb6gx9yhwzs.jpeg?q=90&crop=false",
    movieRating: 5,
    shortDescription: "A hacker discovers the shocking truth about his reality."
  },
  {
    movieId: 9,
    movieName: "The Godfather",
    moviePoster: "https://m.media-amazon.com/images/I/81C9FT0-8CL.jpg",
    movieRating: 5,
    shortDescription: "The story of a powerful mafia family and its struggles."
  },
  {
    movieId: 10,
    movieName: "Pulp Fiction",
    moviePoster: "https://i.pinimg.com/originals/cf/1d/bb/cf1dbb4af57af837f0d10e4ea284312d.jpg",
    movieRating: 4.5,
    shortDescription: "Interwoven tales of crime and redemption."
  },
  {
    movieId: 11,
    movieName: "Fight Club",
    moviePoster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcIew_w1yXXZdXt1Ltw7f82-WdksJ6T5BDoQ&s",
    movieRating: 4,
    shortDescription: "A disillusioned man forms an underground fight club."
  },
  {
    movieId: 12,
    movieName: "Forrest Gump",
    moviePoster: "https://images-cdn.ubuy.co.in/6341130b59f5d1339534ead5-forrest-gump-movie-poster-regular.jpg",
    movieRating: 5,
    shortDescription: "The story of a kind-hearted man with an extraordinary life."
  },
  {
    movieId: 13,
    movieName: "The Shawshank Redemption",
    moviePoster: "https://m.media-amazon.com/images/I/51R0XUE2OAL.jpg",
    movieRating: 5,
    shortDescription: "Two imprisoned men bond over decades."
  },
  {
    movieId: 14,
    movieName: "Gladiator",
    moviePoster: "https://rukminim2.flixcart.com/image/850/1000/juk4gi80/poster/8/u/c/large-newposter9527-the-gladiator-poster-poster-large-print-on-original-imaf5tevvswegu76.jpeg?q=90&crop=false",
    movieRating: 4.5,
    shortDescription: "A betrayed Roman general seeks revenge."
  },
  {
    movieId: 15,
    movieName: "Avatar",
    moviePoster: "https://m.media-amazon.com/images/I/61O8KP0CYVS.jpg",
    movieRating: 4.5,
    shortDescription: "A paraplegic Marine becomes involved in a conflict on an alien planet."
  }
];

//This Data is for Individual Movie Details
export const movie = [
  {
    movieId: 1,
    largePoster: "https://wallpapercave.com/wp/wp2372747.jpg",
    movieName: "Memento",
    longDescription: "Leonard Shelby is plagued by short-term memory loss following a traumatic event. Unable to remember anything for more than a few minutes, he uses an intricate system of notes, Polaroid photos, and tattoos to hunt for the man he believes killed his wife.",
    cast: [
      { actor: ["Guy Pearce", "Carrie-Anne Moss"] },
      { director: "Christopher Nolan" }
    ],
    detailedRating: {
      acting: 4,
      direction: 5,
      cinematography: 5,
      screenplay: 4.5,
      music: 4
    },
    cumulativeRating: 4
  },
  {
    movieId: 2,
    largePoster: "https://images2.alphacoders.com/851/85182.jpg",
    movieName: "Inception",
    longDescription: "Dom Cobb, a skilled thief, specializes in extracting secrets from within people's subconscious during the dream state. Tasked with planting an idea in someone's mind, Cobb and his team navigate a dangerous web of layered dreams.",
    cast: [
      { actor: ["Leonardo DiCaprio", "Elliot Page"] },
      { director: "Christopher Nolan" }
    ],
    detailedRating: {
      acting: 5,
      direction: 5,
      cinematography: 5,
      screenplay: 4.8,
      music: 5
    },
    cumulativeRating: 5
  },
  {
    movieId: 3,
    largePoster: "https://motionbgs.com/media/3708/the-dark-knight.jpg",
    movieName: "The Dark Knight",
    longDescription: "With the help of allies Lt. Jim Gordon and Harvey Dent, Batman sets out to dismantle Gotham's remaining criminal organizations. However, a mysterious and sadistic criminal mastermind known as the Joker emerges, threatening to bring chaos to the city.",
    cast: [
      { actor: ["Christian Bale", "Heath Ledger"] },
      { director: "Christopher Nolan" }
    ],
    detailedRating: {
      acting: 5,
      direction: 5,
      cinematography: 5,
      screenplay: 5,
      music: 5
    },
    cumulativeRating: 5
  },
  {
    movieId: 4,
    largePoster: "https://wallpapers.com/images/featured/interstellar-d5hpgadclxszmpeh.jpg",
    movieName: "Interstellar",
    longDescription: "In a future where Earth is on the brink of environmental collapse, a former pilot and a team of scientists embark on a journey through a wormhole to find a habitable planet for humanity. The journey tests their limits and explores the boundaries of human survival.",
    cast: [
      { actor: ["Matthew McConaughey", "Anne Hathaway"] },
      { director: "Christopher Nolan" }
    ],
    detailedRating: {
      acting: 4.8,
      direction: 5,
      cinematography: 5,
      screenplay: 4.7,
      music: 5
    },
    cumulativeRating: 4.5
  },
  {
    movieId: 5,
    largePoster: "https://wallpaperaccess.com/full/1613716.jpg",
    movieName: "The Prestige",
    longDescription: "Two magicians, once friends and now bitter rivals, engage in a deadly game of one-upmanship to create the ultimate stage illusion. Their obsession leads them down a dark path of deceit and tragedy.",
    cast: [
      { actor: ["Hugh Jackman", "Christian Bale"] },
      { director: "Christopher Nolan" }
    ],
    detailedRating: {
      acting: 4.7,
      direction: 5,
      cinematography: 5,
      screenplay: 4.8,
      music: 4.5
    },
    cumulativeRating: 4.5
  },
  {
    movieId: 6,
    largePoster: "https://papers.co/wallpaper/papers.co-ba21-dunkirk-war-film-illustration-art-flare-36-3840x2400-4k-wallpaper.jpg",
    movieName: "Dunkirk",
    longDescription: "Set during World War II, Dunkirk chronicles the harrowing evacuation of Allied soldiers surrounded by enemy forces. Told through three interconnected timelines, the story unfolds on land, sea, and air.",
    cast: [
      { actor: ["Fionn Whitehead", "Tom Hardy"] },
      { director: "Christopher Nolan" }
    ],
    detailedRating: {
      acting: 4,
      direction: 4.8,
      cinematography: 5,
      screenplay: 4.5,
      music: 4.5
    },
    cumulativeRating: 4
  },
  {
    movieId: 7,
    largePoster: "https://wallpapers.com/images/featured/tenet-tu1b44axi1ewo7ya.jpg",
    movieName: "Tenet",
    longDescription: "A secret agent is tasked with preventing World War III. To achieve this, he must navigate a shadowy world of espionage and master the complex concept of time inversion.",
    cast: [
      { actor: ["John David Washington", "Robert Pattinson"] },
      { director: "Christopher Nolan" }
    ],
    detailedRating: {
      acting: 4.2,
      direction: 4.5,
      cinematography: 5,
      screenplay: 4.3,
      music: 4
    },
    cumulativeRating: 4
  },
  {
    movieId: 8,
    largePoster: "https://4kwallpapers.com/images/wallpapers/the-matrix-movie-3840x2160-15947.jpg",
    movieName: "The Matrix",
    longDescription: "Thomas Anderson, a computer programmer, discovers the shocking truth about his reality and is drawn into a rebellion against the machines that enslave humanity.",
    cast: [
      { actor: ["Keanu Reeves", "Carrie-Anne Moss"] },
      { director: "Lana Wachowski, Lilly Wachowski" }
    ],
    detailedRating: {
      acting: 4.5,
      direction: 5,
      cinematography: 5,
      screenplay: 5,
      music: 4.8
    },
    cumulativeRating: 5
  },
  {
    movieId: 9,
    largePoster: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ffa8ce7-69ab-4894-97b1-90499f0a3a22/d24gf9a-f20f31d3-5358-481b-aec7-20ee97f9324c.png/v1/fill/w_900,h_507,q_80,strp/the_godfather_the_wallpaper_by_donvito62_d24gf9a-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTA3IiwicGF0aCI6IlwvZlwvMmZmYThjZTctNjlhYi00ODk0LTk3YjEtOTA0OTlmMGEzYTIyXC9kMjRnZjlhLWYyMGYzMWQzLTUzNTgtNDgxYi1hZWM3LTIwZWU5N2Y5MzI0Yy5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.TBefymes6lGn_6D1_sKi8x80sPP71TBMdvbmgemIUpU",
    movieName: "The Godfather",
    longDescription: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son. The film chronicles the rise and fall of a powerful mafia family.",
    cast: [
      { actor: ["Marlon Brando", "Al Pacino"] },
      { director: "Francis Ford Coppola" }
    ],
    detailedRating: {
      acting: 5,
      direction: 5,
      cinematography: 4.9,
      screenplay: 5,
      music: 4.8
    },
    cumulativeRating: 5
  },
  {
    movieId: 10,
    largePoster: "https://images3.alphacoders.com/693/693718.jpg",
    movieName: "Pulp Fiction",
    longDescription: "A darkly comedic anthology of interconnected stories revolving around crime, redemption, and violence in Los Angeles. The film explores the lives of a hitman, a boxer, and two petty criminals.",
    cast: [
      { actor: ["John Travolta", "Uma Thurman"] },
      { director: "Quentin Tarantino" }
    ],
    detailedRating: {
      acting: 4.8,
      direction: 5,
      cinematography: 4.8,
      screenplay: 5,
      music: 4.9
    },
    cumulativeRating: 4.5
  },
  {
    movieId: 11,
    largePoster: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6fcf7889-a7ee-4d8b-9d34-77ed3965d61e/d5wgva5-f62a1609-b2ea-4bb2-a9f0-9c29580af9b2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZmY2Y3ODg5LWE3ZWUtNGQ4Yi05ZDM0LTc3ZWQzOTY1ZDYxZVwvZDV3Z3ZhNS1mNjJhMTYwOS1iMmVhLTRiYjItYTlmMC05YzI5NTgwYWY5YjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.55Wn9rVRhMlFmjrphhwSIfQHWiDQVrK1Pe0QqbOqzZE",
    movieName: "Fight Club",
    longDescription: "A disillusioned man befriends an enigmatic soap salesman, and together they form an underground fight club. The club's popularity spirals out of control, leading to unforeseen consequences.",
    cast: [
      { actor: ["Brad Pitt", "Edward Norton"] },
      { director: "David Fincher" }
    ],
    detailedRating: {
      acting: 4.7,
      direction: 4.5,
      cinematography: 4.9,
      screenplay: 4.8,
      music: 4.5
    },
    cumulativeRating: 4
  },
  {
    movieId: 12,
    largePoster: "https://images6.alphacoders.com/650/650608.jpg",
    movieName: "Forrest Gump",
    longDescription: "Forrest Gump, a kind-hearted man with a low IQ, inadvertently influences significant historical events in 20th-century America while searching for his true love, Jenny.",
    cast: [
      { actor: ["Tom Hanks", "Robin Wright"] },
      { director: "Robert Zemeckis" }
    ],
    detailedRating: {
      acting: 5,
      direction: 4.8,
      cinematography: 4.5,
      screenplay: 4.8,
      music: 5
    },
    cumulativeRating: 5
  },
  {
    movieId: 13,
    largePoster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFb_RiBRAbjQr_axDpYqD6AfMaJbuWkeYKXw&s",
    movieName: "The Shawshank Redemption",
    longDescription: "Andy Dufresne, a banker convicted of a crime he didn't commit, forms a lasting friendship with Red while enduring years in the brutal Shawshank prison.",
    cast: [
      { actor: ["Tim Robbins", "Morgan Freeman"] },
      { director: "Frank Darabont" }
    ],
    detailedRating: {
      acting: 5,
      direction: 5,
      cinematography: 4.9,
      screenplay: 5,
      music: 4.8
    },
    cumulativeRating: 5
  },
  {
    movieId: 14,
    largePoster: "https://rukminim2.flixcart.com/image/850/1000/kt0enww0/poster/r/t/n/medium-crowe-gladiator-movie-matte-finish-poster-original-imag6ghspeugdwng.jpeg?q=20&crop=false",
    movieName: "Gladiator",
    longDescription: "A betrayed Roman general becomes a gladiator and rises through the ranks to seek revenge against the corrupt emperor who murdered his family.",
    cast: [
      { actor: ["Russell Crowe", "Joaquin Phoenix"] },
      { director: "Ridley Scott" }
    ],
    detailedRating: {
      acting: 4.8,
      direction: 4.9,
      cinematography: 5,
      screenplay: 4.7,
      music: 5
    },
    cumulativeRating: 4.5
  },
  {
    movieId: 15,
    largePoster: "https://lumiere-a.akamaihd.net/v1/images/avatar_coverart_1600x686_36ea5484.jpeg?region=0,0,1600,686",
    movieName: "Avatar",
    longDescription: "A paraplegic Marine travels to the alien world of Pandora, where he becomes torn between following orders and protecting the native inhabitants and their planet.",
    cast: [
      { actor: ["Sam Worthington", "Zoe Saldana"] },
      { director: "James Cameron" }
    ],
    detailedRating: {
      acting: 4.5,
      direction: 4.8,
      cinematography: 5,
      screenplay: 4.5,
      music: 5
    },
    cumulativeRating: 4.5
  }
];



