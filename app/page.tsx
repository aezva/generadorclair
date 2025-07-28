"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shuffle, Copy, Check } from "lucide-react" // Import Check icon

const nameData = {
  fantasy: {
    male: [
      "Aldric",
      "Theron",
      "Kael",
      "Darian",
      "Lysander",
      "Orion",
      "Caspian",
      "Evander",
      "Lucian",
      "Zephyr",
      "Alistair",
      "Bram",
      "Corbin",
      "Draven",
      "Elias",
      "Finnian",
      "Gareth",
      "Hadrian",
      "Ignatius",
      "Jareth",
      "Kaelen",
      "Loric",
      "Marius",
      "Niall",
      "Oberon",
      "Perrin",
      "Quillon",
      "Roric",
      "Silas",
      "Torvin",
      "Ulric",
      "Valerius",
      "Wulfric",
      "Xavier",
      "Yorick",
      "Zane",
      "Arion",
      "Blaise",
      "Caelum",
      "Damon",
      "Eldrin",
      "Faelar",
      "Gideon",
      "Haldor",
      "Ithiel",
      "Joric",
      "Kaelan",
      "Lothar",
      "Malachi",
      "Nereus",
      "Oswin",
      "Perrin",
      "Quintus",
      "Ragnar",
      "Sylvan",
      "Thorne",
      "Ulfric",
      "Valerius",
      "Wyatt",
      "Xerxes",
      "Yvain",
      "Zoltan",
    ],
    female: [
      "Seraphina",
      "Lyralei",
      "Celestine",
      "Isadora",
      "Evangeline",
      "Aurelia",
      "Cordelia",
      "Ophelia",
      "Vivienne",
      "Elara",
      "Aerith",
      "Briar",
      "Caelia",
      "Daphne",
      "Elowen",
      "Faelan",
      "Gwenore",
      "Hazel",
      "Isolde",
      "Juniper",
      "Kaelen",
      "Lyra",
      "Morwen",
      "Niamh",
      "Oriana",
      "Phoebe",
      "Rowan",
      "Sylvana",
      "Thalia",
      "Undine",
      "Valeriana",
      "Willow",
      "Xylia",
      "Yara",
      "Zara",
      "Amara",
      "Bronte",
      "Cassia",
      "Delia",
      "Eira",
      "Faelan",
      "Giselle",
      "Helia",
      "Ilyana",
      "Jocelyn",
      "Kaelen",
      "Lorelei",
      "Melisande",
      "Nyx",
      "Ondine",
      "Persephone",
      "Rhiannon",
      "Selene",
      "Tamsin",
      "Una",
      "Valeria",
      "Wynter",
      "Xenia",
      "Yara",
      "Zephyrine",
    ],
    neutral: [
      "Sage",
      "River",
      "Phoenix",
      "Rowan",
      "Ember",
      "Quinn",
      "Ash",
      "Vale",
      "Storm",
      "Raven",
      "Blaze",
      "Cinder",
      "Echo",
      "Fable",
      "Gale",
      "Indigo",
      "Journey",
      "Kai",
      "Lark",
      "Mist",
      "Nova",
      "Onyx",
      "Pebble",
      "Rune",
      "Sky",
      "Terra",
      "Umbra",
      "Whisper",
      "Zephyr",
      "Arbor",
      "Aura",
      "Bay",
      "Cloud",
      "Dew",
      "Flint",
      "Glimmer",
      "Haven",
      "Jade",
      "Lake",
      "Moss",
      "Ocean",
      "Pebble",
      "Rain",
      "Shadow",
      "Stone",
      "Thorn",
      "Twilight",
      "Willow",
      "Winter",
      "Zenith",
    ],
  },
  historical: {
    male: [
      "Edmund",
      "Bartholomew",
      "Percival",
      "Reginald",
      "Cornelius",
      "Archibald",
      "Mortimer",
      "Algernon",
      "Cedric",
      "Roderick",
      "Arthur",
      "Edward",
      "Frederick",
      "George",
      "Henry",
      "James",
      "John",
      "Louis",
      "Philip",
      "Richard",
      "Robert",
      "Stephen",
      "Thomas",
      "William",
      "Charles",
      "Francis",
      "Harold",
      "Julian",
      "Lawrence",
      "Miles",
      "Oliver",
      "Peter",
      "Samuel",
      "Theodore",
      "Vincent",
      "Walter",
      "Augustus",
      "Benedict",
      "Clement",
      "Dominic",
      "Edgar",
      "Felix",
      "Giles",
      "Hugh",
      "Ignatius",
      "Jasper",
      "Kenneth",
      "Leopold",
      "Maximilian",
      "Nicholas",
      "Oscar",
      "Patrick",
      "Quentin",
      "Raymond",
      "Sebastian",
      "Timothy",
      "Ulysses",
      "Victor",
      "Wilfred",
      "Xerxes",
      "Yves",
      "Zachary",
    ],
    female: [
      "Cordelia",
      "Beatrice",
      "Genevieve",
      "Penelope",
      "Arabella",
      "Josephine",
      "Evangeline",
      "Constance",
      "Prudence",
      "Millicent",
      "Alice",
      "Catherine",
      "Eleanor",
      "Elizabeth",
      "Florence",
      "Helen",
      "Isabel",
      "Jane",
      "Margaret",
      "Mary",
      "Matilda",
      "Philippa",
      "Rose",
      "Sophia",
      "Victoria",
      "Agnes",
      "Amelia",
      "Charlotte",
      "Dorothy",
      "Edith",
      "Frances",
      "Harriet",
      "Louisa",
      "Martha",
      "Rebecca",
      "Sarah",
      "Theresa",
      "Ursula",
      "Winifred",
      "Adelaide",
      "Blanche",
      "Cecilia",
      "Dorothea",
      "Esther",
      "Felicity",
      "Georgiana",
      "Henrietta",
      "Imogen",
      "Juliana",
      "Katherine",
      "Lavinia",
      "Margery",
      "Nora",
      "Octavia",
      "Patience",
      "Rosalind",
      "Sybil",
      "Theodora",
      "Violet",
      "Wilhelmina",
      "Xenia",
      "Yvonne",
      "Zelda",
    ],
    neutral: [
      "Francis",
      "Morgan",
      "Sidney",
      "Aubrey",
      "Avery",
      "Cameron",
      "Jordan",
      "Taylor",
      "Casey",
      "Riley",
      "Blair",
      "Drew",
      "Ellis",
      "Jamie",
      "Kelly",
      "Leslie",
      "Pat",
      "Robin",
      "Shannon",
      "Terry",
      "Alex",
      "Chris",
      "Dakota",
      "Jesse",
      "Kai",
      "Lee",
      "Max",
      "Sam",
      "Skylar",
      "Tracy",
      "Addison",
      "Bailey",
      "Brooklyn",
      "Dakota",
      "Emerson",
      "Finley",
      "Harper",
      "Indigo",
      "Jules",
      "Kennedy",
      "London",
      "Marley",
      "Parker",
      "Quinn",
      "Rowan",
      "Sawyer",
      "Spencer",
      "Whitney",
      "Winter",
      "Dakota",
    ],
  },
  modern: {
    male: [
      "Adrian",
      "Sebastian",
      "Gabriel",
      "Alexander",
      "Nathaniel",
      "Theodore",
      "Benjamin",
      "Christopher",
      "Jonathan",
      "Nicholas",
      "Ethan",
      "Liam",
      "Noah",
      "Oliver",
      "William",
      "James",
      "Lucas",
      "Henry",
      "Daniel",
      "Matthew",
      "Jackson",
      "Samuel",
      "David",
      "Joseph",
      "Michael",
      "Charles",
      "Thomas",
      "Anthony",
      "Andrew",
      "Joshua",
      "Ryan",
      "Jacob",
      "Caleb",
      "Dylan",
      "Isaac",
      "Owen",
      "Wyatt",
      "Luke",
      "Julian",
      "Levi",
      "Asher",
      "Ezra",
      "Grayson",
      "Isaiah",
      "Leo",
      "Maverick",
      "Milo",
      "Nolan",
      "Silas",
      "Ezra",
      "Finn",
      "Jasper",
      "Kai",
      "Leo",
      "Milo",
      "Noah",
      "Owen",
      "Silas",
      "Wyatt",
    ],
    female: [
      "Isabella",
      "Sophia",
      "Charlotte",
      "Amelia",
      "Olivia",
      "Emma",
      "Ava",
      "Mia",
      "Harper",
      "Evelyn",
      "Abigail",
      "Emily",
      "Elizabeth",
      "Sofia",
      "Ella",
      "Chloe",
      "Grace",
      "Victoria",
      "Scarlett",
      "Zoey",
      "Lily",
      "Hannah",
      "Layla",
      "Nora",
      "Zoe",
      "Mila",
      "Aria",
      "Eleanor",
      "Luna",
      "Hazel",
      "Aurora",
      "Penelope",
      "Violet",
      "Bella",
      "Camila",
      "Nova",
      "Willow",
      "Stella",
      "Paisley",
      "Everly",
      "Adeline",
      "Brooklyn",
      "Cora",
      "Delilah",
      "Eliza",
      "Freya",
      "Genevieve",
      "Iris",
      "Juniper",
      "Kinsley",
      "Lila",
      "Maeve",
      "Nora",
      "Olive",
      "Piper",
      "Ruby",
      "Sadie",
      "Skylar",
      "Teagan",
      "Willow",
    ],
    neutral: [
      "Alex",
      "Jordan",
      "Taylor",
      "Casey",
      "Morgan",
      "Riley",
      "Avery",
      "Cameron",
      "Sage",
      "Blake",
      "Dakota",
      "Jamie",
      "Kai",
      "Leslie",
      "Peyton",
      "Quinn",
      "Rowan",
      "Skylar",
      "Sydney",
      "Terry",
      "Charlie",
      "Drew",
      "Ellis",
      "Jesse",
      "Jules",
      "Lee",
      "Max",
      "Sam",
      "Sawyer",
      "Spencer",
      "Addison",
      "Bailey",
      "Brooklyn",
      "Dakota",
      "Emerson",
      "Finley",
      "Harper",
      "Indigo",
      "Jules",
      "Kennedy",
      "London",
      "Marley",
      "Parker",
      "Quinn",
      "Rowan",
      "Sawyer",
      "Spencer",
      "Whitney",
      "Winter",
    ],
  },
  exotic: {
    male: [
      "Zafir",
      "Kai",
      "Akira",
      "Dante",
      "Enzo",
      "Mateo",
      "Diego",
      "Rafael",
      "Santiago",
      "Leonardo",
      "Aarav",
      "Caius",
      "Darius",
      "Ezio",
      "Faelan",
      "Gael",
      "Hiroki",
      "Iskander",
      "Jian",
      "Kaelen",
      "Lazarus",
      "Malik",
      "Nadir",
      "Orion",
      "Pavel",
      "Quillon",
      "Ramiro",
      "Soren",
      "Tariq",
      "Uriel",
      "Viggo",
      "Xylon",
      "Yael",
      "Zoltan",
      "Adonis",
      "Balthazar",
      "Caspian",
      "Dorian",
      "Elian",
      "Fabian",
      "Gideon",
      "Hassan",
      "Ibrahim",
      "Javier",
      "Kian",
      "Lysander",
      "Marius",
      "Nico",
      "Omar",
      "Phoenix",
      "Rohan",
      "Silas",
      "Titus",
      "Uriah",
      "Valerius",
      "Xavier",
      "Yusuf",
      "Zayn",
    ],
    female: [
      "Aria",
      "Luna",
      "Stella",
      "Valentina",
      "Camila",
      "Sofia",
      "Isabella",
      "Gabriela",
      "Natalia",
      "Esperanza",
      "Amara",
      "Celeste",
      "Dahlia",
      "Elara",
      "Fiora",
      "Genevieve",
      "Isolde",
      "Jasmine",
      "Kira",
      "Lila",
      "Maya",
      "Nia",
      "Oriana",
      "Priya",
      "Rhea",
      "Seraphina",
      "Thalia",
      "Uma",
      "Zara",
      "Zia",
      "Anya",
      "Bianca",
      "Catalina",
      "Dina",
      "Esme",
      "Freya",
      "Giselle",
      "Inara",
      "Juno",
      "Kiana",
      "Leilani",
      "Malika",
      "Nala",
      "Opal",
      "Paloma",
      "Raina",
      "Saffron",
      "Tiana",
      "Uma",
      "Veda",
      "Ximena",
      "Yasmin",
      "Zahra",
    ],
    neutral: [
      "Indigo",
      "Ocean",
      "Sky",
      "Rain",
      "Star",
      "Moon",
      "Sun",
      "Dawn",
      "Sage",
      "River",
      "Azure",
      "Bliss",
      "Canyon",
      "Dream",
      "Forest",
      "Glimmer",
      "Harmony",
      "Journey",
      "Lyric",
      "Mystic",
      "Nimbus",
      "Opal",
      "Peace",
      "Quartz",
      "Rhapsody",
      "Solstice",
      "Twilight",
      "Unity",
      "Vesper",
      "Wilder",
      "Aether",
      "Cosmo",
      "Dusk",
      "Everest",
      "Galaxy",
      "Horizon",
      "Infinity",
      "Juno",
      "Kismet",
      "Lumen",
      "Mirage",
      "Nebula",
      "Orion",
      "Polaris",
      "Quasar",
      "Rift",
      "Serenity",
      "Terra",
      "Umbra",
      "Vortex",
      "Zenith",
    ],
  },
}

const surnames = {
  fantasy: [
    "Stormwind",
    "Nightshade",
    "Silverleaf",
    "Goldmane",
    "Ironforge",
    "Moonwhisper",
    "Starweaver",
    "Shadowbane",
    "Lightbringer",
    "Dragonheart",
    "Blackwood",
    "Stonehaven",
    "Grimfang",
    "Darkwater",
    "Brightblade",
    "Whisperwind",
    "Deeproot",
    "Firebrand",
    "Swiftfoot",
    "Ironhide",
    "Shadowbrook",
    "Moonshadow",
    "Stonemarch",
    "Riverbend",
    "Highpeak",
    "Wintergale",
    "Sunstrider",
    "Thornwood",
    "Ashfall",
    "Ravencrest",
    "Frostbeard",
    "Greymane",
    "Strongarm",
    "Lightfoot",
    "Deepwater",
    "Fairchild",
    "Goodfellow",
    "Longstride",
    "Shadowdancer",
    "Trueheart",
  ],
  historical: [
    "Ashworth",
    "Blackwood",
    "Whitmore",
    "Pemberton",
    "Worthington",
    "Kensington",
    "Harrington",
    "Wellington",
    "Covington",
    "Huntington",
    "Fitzwilliam",
    "Montague",
    "Fairfax",
    "Hawksmoor",
    "Throckmorton",
    "Cholmondeley",
    "Wetherby",
    "Baskerville",
    "Pendleton",
    "Strickland",
    "Beaumont",
    "Clarendon",
    "Davenport",
    "Everleigh",
    "Farnsworth",
    "Gresham",
    "Haverford",
    "Inglewood",
    "Jocelyn",
    "Kingsley",
    "Lancaster",
    "Marlborough",
    "Northumberland",
    "Pembroke",
    "Richmond",
    "Somerset",
    "Warwick",
    "Westminster",
    "York",
    "Windsor",
  ],
  modern: [
    "Anderson",
    "Johnson",
    "Williams",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
    "Taylor",
    "Jackson",
    "White",
    "Harris",
    "Martin",
    "Thompson",
    "Garcia",
    "Martinez",
    "Robinson",
    "Clark",
    "Rodriguez",
    "Lewis",
    "Lee",
    "Walker",
    "Hall",
    "Allen",
    "Young",
    "Hernandez",
    "King",
    "Wright",
    "Lopez",
    "Hill",
    "Scott",
    "Green",
    "Adams",
    "Baker",
    "Nelson",
    "Carter",
    "Mitchell",
    "Roberts",
    "Turner",
    "Phillips",
  ],
  exotic: [
    "Delacroix",
    "Montoya",
    "Nakamura",
    "Petrov",
    "Singh",
    "Chen",
    "Rodriguez",
    "Kowalski",
    "Andersson",
    "Rossi",
    "Dubois",
    "Moreau",
    "Schmidt",
    "Müller",
    "Gonzales",
    "Silva",
    "Kim",
    "Wang",
    "Khan",
    "Popov",
    "Ferrari",
    "Bianchi",
    "Russo",
    "Moretti",
    "Ricci",
    "Romano",
    "Esposito",
    "Colombo",
    "Bruno",
    "Gallo",
    "Nguyen",
    "Li",
    "Garcia",
    "Martinez",
    "Hernandez",
    "Lopez",
    "Perez",
    "Sanchez",
    "Ramirez",
    "Torres",
  ],
}

// Nuevos datos para influencias culturales
const culturalInfluences = {
  japanese: {
    character: {
      male: [
        "Akihiro",
        "Takeshi",
        "Hiroshi",
        "Kenji",
        "Masato",
        "Ryouta",
        "Satoshi",
        "Yuuki",
        "Daichi",
        "Haruto",
        "Kaito",
        "Ren",
        "Sora",
        "Yuto",
        "Hayato",
        "Shota",
        "Tsubasa",
        "Kazuki",
        "Riku",
        "Yuma",
        "Ryota",
        "Takumi",
        "Yuki",
        "Akira",
        "Haruki",
        "Issei",
        "Jiro",
        "Kenshin",
        "Makoto",
        "Naoki",
        "Ryo",
        "Shinji",
        "Taro",
        "Yamato",
        "Zen",
        "Fumio",
        "Hideki",
        "Isamu",
        "Katsuo",
        "Minoru",
      ],
      female: [
        "Sakura",
        "Yuki",
        "Akane",
        "Misaki",
        "Rei",
        "Ayame",
        "Kiyomi",
        "Natsuki",
        "Shiori",
        "Emiko",
        "Hana",
        "Kiko",
        "Mio",
        "Rina",
        "Yui",
        "Aoi",
        "Chiyo",
        "Emi",
        "Fumiko",
        "Haruna",
        "Izumi",
        "Kana",
        "Mai",
        "Nana",
        "Riko",
        "Sana",
        "Tomoko",
        "Yoko",
        "Yumiko",
        "Akari",
        "Asuka",
        "Chie",
        "Eri",
        "Fuyuko",
        "Hina",
        "Kaede",
        "Kanon",
        "Miku",
        "Nozomi",
        "Risa",
      ],
      neutral: [
        "Sora",
        "Haru",
        "Yuki",
        "Aki",
        "Ren",
        "Kai",
        "Michi",
        "Nao",
        "Tomo",
        "Yuu",
        "Hikari",
        "Izumi",
        "Kyo",
        "Masa",
        "Nagi",
        "Ryo",
        "Shin",
        "Taki",
        "Yasu",
        "Zen",
        "Aoba",
        "Chikara",
        "Fumi",
        "Hoshi",
        "Kaze",
        "Kumo",
        "Mizu",
        "Nami",
        "Rai",
        "Sato",
      ],
    },
    surname: [
      "Tanaka",
      "Suzuki",
      "Sato",
      "Yamamoto",
      "Watanabe",
      "Takahashi",
      "Kobayashi",
      "Kato",
      "Yoshida",
      "Yamada",
      "Sasaki",
      "Matsumoto",
      "Inoue",
      "Kimura",
      "Hayashi",
      "Shimizu",
      "Mori",
      "Ikeda",
      "Hashimoto",
      "Yamaguchi",
      "Ishikawa",
      "Nakajima",
      "Maeda",
      "Fujita",
      "Ogawa",
      "Okada",
      "Goto",
      "Hasegawa",
      "Murakami",
      "Kondo",
      "Abe",
      "Endo",
      "Fukuda",
      "Hoshino",
      "Ito",
      "Kawai",
      "Kojima",
      "Maruyama",
      "Miyazaki",
      "Nagata",
    ],
    place: [
      "Kazehara",
      "Mizukage",
      "Yamakiri",
      "Tsukimori",
      "Hanabira",
      "Shirogane",
      "Kurogawa",
      "Aozora",
      "Kinmoku",
      "Yukiguni",
      "Sakurajima",
      "Fujiyama",
      "Kyoto",
      "Nara",
      "Hokkaido",
      "Okinawa",
      "Shinjuku",
      "Shibuya",
      "Akihabara",
      "Gion",
      "Kamikochi",
      "Hakone",
      "Nikko",
      "Miyajima",
      "Tottori",
      "Kanazawa",
      "Takayama",
      "Shirakawa",
      "Naoshima",
      "Yakushima",
      "Hiroshima",
      "Nagasaki",
      "Osaka",
      "Sapporo",
      "Sendai",
      "Yokohama",
      "Kamakura",
      "Matsumoto",
      "Nikkō",
      "Okayama",
    ],
    object: [
      "Tsukikage",
      "Hanazakari",
      "Yamabuki",
      "Mizuhoshi",
      "Kazehana",
      "Shirayuki",
      "Kurenai",
      "Aokaze",
      "Kintsuba",
      "Yukibare",
      "Katana",
      "Shuriken",
      "Kimono",
      "Origami",
      "Sakura",
      "Koto",
      "Shamisen",
      "Daruma",
      "Maneki-neko",
      "Kokeshi",
      "Furoshiki",
      "Geta",
      "Hachimaki",
      "Ikebana",
      "Jitte",
      "Kanzashi",
      "Netsuke",
      "Obi",
      "Sensu",
      "Tanto",
      "Bonsai",
      "Chopsticks",
      "Fan",
      "Lantern",
      "Mask",
      "Scroll",
      "Tea Set",
      "Umbrella",
      "Wagasa",
      "Zori",
    ],
  },
  nordic: {
    character: {
      male: [
        "Bjorn",
        "Erik",
        "Magnus",
        "Ragnar",
        "Thorvald",
        "Gunnar",
        "Olaf",
        "Sven",
        "Leif",
        "Ulf",
        "Axel",
        "Einar",
        "Freyr",
        "Hakon",
        "Ivar",
        "Knut",
        "Lars",
        "Nils",
        "Stig",
        "Torsten",
        "Anders",
        "Bodil",
        "Dag",
        "Frode",
        "Gudmund",
        "Halfdan",
        "Jarl",
        "Kare",
        "Odd",
        "Sigurd",
        "Arvid",
        "Birk",
        "Casper",
        "Draco",
        "Egil",
        "Falk",
        "Gorm",
        "Hjalmar",
        "Ingmar",
        "Jorgen",
      ],
      female: [
        "Astrid",
        "Ingrid",
        "Sigrid",
        "Freydis",
        "Solveig",
        "Ragnhild",
        "Thora",
        "Gudrun",
        "Helga",
        "Brynja",
        "Dagny",
        "Eira",
        "Frida",
        "Hilda",
        "Ida",
        "Liv",
        "Maja",
        "Nanna",
        "Runa",
        "Saga",
        "Signe",
        "Siri",
        "Tyra",
        "Ulla",
        "Vigdis",
        "Ylva",
        "Alva",
        "Birgit",
        "Elin",
        "Greta",
        "Hedda",
        "Inga",
        "Kari",
        "Lena",
        "Malin",
        "Nanna",
        "Oda",
        "Petra",
        "Randi",
        "Siv",
      ],
      neutral: [
        "Raven",
        "Storm",
        "Frost",
        "Ember",
        "Stone",
        "Wolf",
        "Bear",
        "Ice",
        "Fire",
        "Wind",
        "Blizzard",
        "Boulder",
        "Drift",
        "Gale",
        "Glacier",
        "Mist",
        "Peak",
        "Rune",
        "Shadow",
        "Sky",
        "Aurora",
        "Blaze",
        "Canyon",
        "Dawn",
        "Echo",
        "Fjord",
        "Glimmer",
        "Haven",
        "Lark",
        "Ocean",
      ],
    },
    surname: [
      "Andersson",
      "Larsson",
      "Karlsson",
      "Nilsson",
      "Eriksson",
      "Olsson",
      "Persson",
      "Svensson",
      "Gustafsson",
      "Johansson",
      "Jensen",
      "Nielsen",
      "Hansen",
      "Pedersen",
      "Christensen",
      "Larsen",
      "Sørensen",
      "Rasmussen",
      "Jørgensen",
      "Møller",
      "Halvorsen",
      "Olsen",
      "Haugen",
      "Berg",
      "Myhre",
      "Dahl",
      "Lund",
      "Bakke",
      "Moen",
      "Solberg",
      "Fjeld",
      "Grimstad",
      "Hegg",
      "Knutsen",
      "Lie",
      "Nygard",
      "Riis",
      "Skaar",
      "Tveit",
      "Viken",
    ],
    place: [
      "Ironhold",
      "Frostheim",
      "Stormfjord",
      "Ravenshollow",
      "Wolfsburg",
      "Icewind",
      "Thornvale",
      "Ironpeak",
      "Stormhaven",
      "Frostgate",
      "Valhalla",
      "Asgard",
      "Midgard",
      "Jotunheim",
      "Niflheim",
      "Muspelheim",
      "Svartalfheim",
      "Alfheim",
      "Vanaheim",
      "Helheim",
      "Fjords",
      "Tundra",
      "Glacierpeak",
      "Runestone",
      "Whispering Woods",
      "Dragon's Tooth",
      "Serpent's Pass",
      "Giant's Causeway",
      "Sunken City",
      "Hidden Vale",
      "Bergen",
      "Oslo",
      "Stockholm",
      "Copenhagen",
      "Reykjavik",
      "Helsinki",
      "Gothenburg",
      "Malmo",
      "Trondheim",
      "Stavanger",
    ],
    object: [
      "Stormbreaker",
      "Frostbane",
      "Ironwill",
      "Ravenclaw",
      "Wolfsbane",
      "Iceforge",
      "Thornspike",
      "Ironheart",
      "Stormcaller",
      "Frostbite",
      "Mjolnir",
      "Gungnir",
      "Draupnir",
      "Skidbladnir",
      "Hofund",
      "Gram",
      "Tyrfing",
      "Hringhorni",
      "Gjallarhorn",
      "Megingjord",
      "Aegishjalmur",
      "Vegvisir",
      "Valknut",
      "Triquetra",
      "Yggdrasil",
      "Runes",
      "Longship",
      "Berserker Axe",
      "Seax",
      "Drinking Horn",
      "Viking Shield",
      "Dragon Head",
      "Fenrir's Tooth",
      "Odin's Eye",
      "Thor's Hammer",
      "Freya's Necklace",
      "Loki's Trick",
      "Heimdall's Horn",
      "Sleipnir's Hoof",
      "Gullinbursti's Bristle",
    ],
  },
  arabic: {
    character: {
      male: [
        "Khalil",
        "Rashid",
        "Hakim",
        "Tariq",
        "Samir",
        "Farid",
        "Malik",
        "Nasir",
        "Zaid",
        "Amjad",
        "Ahmed",
        "Ali",
        "Omar",
        "Yusuf",
        "Hassan",
        "Ibrahim",
        "Jamal",
        "Kamal",
        "Nabil",
        "Riyad",
        "Salim",
        "Sultan",
        "Walid",
        "Yahya",
        "Zaki",
        "Adnan",
        "Anwar",
        "Bashir",
        "Faisal",
        "Ghazi",
        "Hamza",
        "Ismail",
        "Jafar",
        "Kareem",
        "Luqman",
        "Mahmoud",
        "Mustafa",
        "Osman",
        "Qadir",
        "Rauf",
      ],
      female: [
        "Layla",
        "Amira",
        "Yasmin",
        "Zahra",
        "Nadia",
        "Soraya",
        "Fatima",
        "Aisha",
        "Maryam",
        "Safiya",
        "Dalia",
        "Hafsa",
        "Jana",
        "Khadija",
        "Lina",
        "Mona",
        "Nour",
        "Rania",
        "Samira",
        "Shirin",
        "Siham",
        "Souad",
        "Warda",
        "Zainab",
        "Zoya",
        "Amina",
        "Basma",
        "Farah",
        "Huda",
        "Iman",
        "Jumana",
        "Kenza",
        "Lulwa",
        "Malak",
        "Nada",
        "Ola",
        "Qamar",
        "Rawan",
        "Sahar",
        "Thuraya",
      ],
      neutral: [
        "Noor",
        "Salam",
        "Farah",
        "Jamal",
        "Karim",
        "Latif",
        "Majid",
        "Nadir",
        "Qasim",
        "Rami",
        "Adel",
        "Anis",
        "Basim",
        "Danyal",
        "Elias",
        "Faris",
        "Ghassan",
        "Hadi",
        "Ihsan",
        "Jamil",
        "Kamran",
        "Lutfi",
        "Mounir",
        "Naim",
        "Omar",
        "Rayan",
        "Sami",
        "Tamer",
        "Wael",
        "Yasin",
      ],
    },
    surname: [
      "Al-Farsi",
      "Al-Masri",
      "Al-Shammar",
      "Al-Qahtani",
      "Al-Harbi",
      "Al-Ghamdi",
      "Al-Zahrani",
      "Al-Otaibi",
      "Al-Dosari",
      "Al-Mutairi",
      "Khan",
      "Hussain",
      "Ali",
      "Ahmed",
      "Mohamed",
      "Abdullah",
      "Rahman",
      "Siddiqui",
      "Choudhury",
      "Begum",
      "Fahad",
      "Hamad",
      "Jaber",
      "Kamel",
      "Mansour",
      "Nasser",
      "Omar",
      "Qureshi",
      "Rizvi",
      "Shaikh",
      "Al-Saud",
      "Al-Thani",
      "Al-Nahyan",
      "Al-Sabah",
      "Al-Khalifa",
      "Al-Hashimi",
      "Al-Ansari",
      "Al-Maktoum",
      "Al-Qassimi",
      "Al-Mualla",
    ],
    place: [
      "Al-Zahara",
      "Bayt-Noor",
      "Madinat-Salam",
      "Qasr-Farid",
      "Dar-Yasmin",
      "Burj-Khalil",
      "Wadi-Amira",
      "Jabal-Hakim",
      "Bahr-Layla",
      "Sahra-Malik",
      "Cairo",
      "Baghdad",
      "Damascus",
      "Jerusalem",
      "Mecca",
      "Medina",
      "Petra",
      "Dubai",
      "Marrakech",
      "Fez",
      "Alexandria",
      "Beirut",
      "Amman",
      "Riyadh",
      "Doha",
      "Abu Dhabi",
      "Sharjah",
      "Muscat",
      "Sana'a",
      "Khartoum",
      "Casablanca",
      "Tunis",
      "Algiers",
      "Tripoli",
      "Kuwait City",
      "Manama",
      "Doha",
      "Jeddah",
      "Aqaba",
      "Luxor",
    ],
    object: [
      "Sayf-Noor",
      "Khatam-Yasmin",
      "Taj-Khalil",
      "Mirath-Amira",
      "Kitab-Hakim",
      "Qalam-Layla",
      "Siraj-Malik",
      "Burda-Zahra",
      "Kanz-Farid",
      "Lulu-Soraya",
      "Dagger of Truth",
      "Lamp of Wishes",
      "Carpet of Flight",
      "Talisman of Power",
      "Scroll of Ages",
      "Jewel of the Desert",
      "Star of Guidance",
      "Blade of Justice",
      "Shield of Faith",
      "Crown of Wisdom",
      "Amulet of Protection",
      "Book of Secrets",
      "Chalice of Life",
      "Crescent Moon",
      "Desert Rose",
      "Falcon's Eye",
      "Golden Scarab",
      "Hourglass of Time",
      "Incense Burner",
      "Jasmine Bloom",
      "Kohl",
      "Lute",
      "Minaret",
      "Oud",
      "Perfume Bottle",
      "Qur'an",
      "Ring of Solomon",
      "Sandalwood",
      "Turban",
      "Zither",
    ],
  },
  celtic: {
    character: {
      male: [
        "Cian",
        "Eamon",
        "Fergus",
        "Niall",
        "Oisin",
        "Ruairi",
        "Seamus",
        "Tadhg",
        "Brendan",
        "Cormac",
        "Aidan",
        "Brogan",
        "Conall",
        "Declan",
        "Finnegan",
        "Gavin",
        "Kieran",
        "Liam",
        "Paddy",
        "Ronan",
        "Tiernan",
        "Alastar",
        "Bran",
        "Cathal",
        "Dermot",
        "Fionn",
        "Lorcan",
        "Murchadh",
        "Padraig",
        "Rory",
        "Colm",
        "Darragh",
        "Eoghan",
        "Fintan",
        "Malachy",
        "Piran",
        "Rian",
        "Senan",
        "Ultan",
        "Conor",
      ],
      female: [
        "Siobhan",
        "Aoife",
        "Brigid",
        "Ciara",
        "Deirdre",
        "Fiona",
        "Grainne",
        "Maeve",
        "Niamh",
        "Orla",
        "Aisling",
        "Bronagh",
        "Caoimhe",
        "Clodagh",
        "Eilis",
        "Fionnuala",
        "Keira",
        "Mairead",
        "Roisin",
        "Saoirse",
        "Tara",
        "Una",
        "Anya",
        "Brenda",
        "Catriona",
        "Dara",
        "Enya",
        "Faye",
        "Gemma",
        "Isla",
        "Kerry",
        "Lana",
        "Moira",
        "Neve",
        "Oona",
        "Riona",
        "Sorcha",
        "Tegan",
        "Willow",
        "Yara",
      ],
      neutral: [
        "Rowan",
        "Sage",
        "River",
        "Bryn",
        "Cael",
        "Dara",
        "Erin",
        "Glen",
        "Iona",
        "Kerry",
        "Arden",
        "Blaine",
        "Devin",
        "Fallon",
        "Kael",
        "Lagan",
        "Phelan",
        "Quinn",
        "Shannon",
        "Teagan",
        "Ash",
        "Blair",
        "Brooke",
        "Cody",
        "Dakota",
        "Ellis",
        "Finley",
        "Harper",
        "Jamie",
        "Jordan",
      ],
    },
    surname: [
      "Murphy",
      "Kelly",
      "Byrne",
      "Walsh",
      "Doyle",
      "McCarthy",
      "Gallagher",
      "Ryan",
      "O'Neill",
      "O'Brien",
      "MacDonald",
      "Campbell",
      "Stewart",
      "Fraser",
      "Mackenzie",
      "Robertson",
      "Cameron",
      "Murray",
      "Wallace",
      "Graham",
      "Fitzgerald",
      "Kennedy",
      "Duffy",
      "Lynch",
      "Moore",
      "Quinn",
      "Reilly",
      "Sweeney",
      "Tierney",
      "Doherty",
      "Brennan",
      "Clarke",
      "Collins",
      "Connolly",
      "Daly",
      "Farrell",
      "Hayes",
      "Hogan",
      "Joyce",
      "Keane",
    ],
    place: [
      "Gleann-Mor",
      "Dun-Aoife",
      "Rath-Cian",
      "Cnoc-Brigid",
      "Loch-Niamh",
      "Coill-Eamon",
      "Sliabh-Maeve",
      "Baile-Fergus",
      "Cluain-Siobhan",
      "Inis-Oisin",
      "Emerald Isle",
      "Stonehenge",
      "Giant's Causeway",
      "Loch Ness",
      "Isle of Skye",
      "Cliffs of Moher",
      "Ring of Kerry",
      "Ben Nevis",
      "Glencoe",
      "Newgrange",
      "Tara Hill",
      "Killarney",
      "Connemara",
      "Aran Islands",
      "Skellig Michael",
      "Cairngorms",
      "Snowdonia",
      "Dartmoor",
      "Brecon Beacons",
      "Lake District",
      "Dublin",
      "Edinburgh",
      "Cardiff",
      "Belfast",
      "Cork",
      "Galway",
      "Glasgow",
      "Inverness",
      "Limerick",
      "Waterford",
    ],
    object: [
      "Claidheamh-Mor",
      "Torc-Aoife",
      "Scian-Cian",
      "Cloch-Brigid",
      "Crann-Niamh",
      "Slat-Eamon",
      "Bonn-Maeve",
      "Ceol-Fergus",
      "Deoch-Siobhan",
      "Sgiath-Oisin",
      "Shamrock",
      "Celtic Cross",
      "Harp",
      "Bagpipes",
      "Kilts",
      "Brooch",
      "Torc",
      "Ogham Stone",
      "Cauldron",
      "Leprechaun's Gold",
      "Faerie Ring",
      "Whispering Well",
      "Druid's Staff",
      "Banshee's Wail",
      "Pooka's Charm",
      "Will-o'-the-Wisp",
      "Shepherd's Crook",
      "Fisherman's Net",
      "Warrior's Shield",
      "Bard's Lyre",
      "Book of Kells",
      "Stone of Destiny",
      "Holy Grail",
      "Sword of Light",
      "Spear of Lugh",
      "Dagda's Harp",
      "Manannán's Cloak",
      "Fionn's Bowl",
      "Cuchulainn's Gae Bolg",
      "Morrigan's Raven",
    ],
  },
  slavic: {
    character: {
      male: [
        "Dmitri",
        "Alexei",
        "Nikolai",
        "Sergei",
        "Mikhail",
        "Andrei",
        "Pavel",
        "Viktor",
        "Yuri",
        "Maxim",
        "Boris",
        "Ivan",
        "Konstantin",
        "Leonid",
        "Oleg",
        "Pyotr",
        "Ruslan",
        "Stanislav",
        "Vladimir",
        "Vyacheslav",
        "Bogdan",
        "Czeslaw",
        "Filip",
        "Grigori",
        "Kazimir",
        "Miroslav",
        "Rostislav",
        "Sasha",
        "Taras",
        "Zoltan",
        "Anatoliy",
        "Bohdan",
        "Danylo",
        "Fedir",
        "Hryhoriy",
        "Ihor",
        "Kyrylo",
        "Mykola",
        "Oleksandr",
        "Roman",
      ],
      female: [
        "Katarina",
        "Anastasia",
        "Svetlana",
        "Natasha",
        "Yelena",
        "Irina",
        "Olga",
        "Vera",
        "Zoya",
        "Lyudmila",
        "Daria",
        "Elena",
        "Galina",
        "Larisa",
        "Marina",
        "Nadezhda",
        "Polina",
        "Sofia",
        "Tatiana",
        "Valentina",
        "Viktoria",
        "Yana",
        "Zlata",
        "Alina",
        "Anna",
        "Eva",
        "Kira",
        "Lilia",
        "Masha",
        "Nina",
        "Oksana",
        "Raisa",
        "Snezana",
        "Tamara",
        "Ulyana",
        "Valeriya",
        "Yaroslava",
        "Zinaida",
        "Albina",
        "Bronislava",
      ],
      neutral: [
        "Sasha",
        "Misha",
        "Zhenya",
        "Valya",
        "Dima",
        "Kostya",
        "Petya",
        "Vanya",
        "Grisha",
        "Stenya",
        "Borya",
        "Kolya",
        "Lyova",
        "Pasha",
        "Slava",
        "Vova",
        "Yura",
        "Zhenya",
        "Kuzma",
        "Vasya",
        "Lesha",
        "Mitya",
        "Nika",
        "Roma",
        "Senya",
        "Tima",
        "Vitya",
        "Yasha",
        "Zlata",
        "Lyuba",
      ],
    },
    surname: [
      "Ivanov",
      "Smirnov",
      "Kuznetsov",
      "Popov",
      "Sokolov",
      "Mikhailov",
      "Novikov",
      "Fedorov",
      "Morozov",
      "Volkov",
      "Kovalev",
      "Lebedev",
      "Semenov",
      "Egorov",
      "Kozlov",
      "Pavlov",
      "Stepanov",
      "Nikolaev",
      "Orlov",
      "Andreev",
      "Petrov",
      "Vasilev",
      "Makarov",
      "Zakharov",
      "Sergeev",
      "Vinogradov",
      "Bogdanov",
      "Vorobyov",
      "Gusev",
      "Kiselev",
      "Belov",
      "Komarov",
      "Krylov",
      "Nazarov",
      "Pankov",
      "Rodionov",
      "Sorokin",
      "Titov",
      "Uvarov",
      "Frolov",
    ],
    place: [
      "Belgorod",
      "Chernoles",
      "Zlatograd",
      "Krasnodar",
      "Novgorod",
      "Starograd",
      "Zelengrad",
      "Vysokograd",
      "Dubrovka",
      "Borograd",
      "Moscow",
      "St. Petersburg",
      "Kyiv",
      "Warsaw",
      "Prague",
      "Krakow",
      "Budapest",
      "Sofia",
      "Belgrade",
      "Zagreb",
      "Carpathian Mountains",
      "Black Sea",
      "Volga River",
      "Siberian Forest",
      "Balkan Peninsula",
      "Danube River",
      "Baltic Coast",
      "Pripet Marshes",
      "Ural Mountains",
      "Kamchatka",
      "Bratislava",
      "Ljubljana",
      "Sarajevo",
      "Skopje",
      "Tirana",
      "Minsk",
      "Chisinau",
      "Bucharest",
      "Vladivostok",
      "Kaliningrad",
    ],
    object: [
      "Zlatokryl",
      "Chernomech",
      "Belokamen",
      "Krasnozar",
      "Zelenlist",
      "Sinekamen",
      "Vysokolet",
      "Starokor",
      "Novosvet",
      "Dubosil",
      "Matryoshka",
      "Balalaika",
      "Samovar",
      "Ushanka",
      "Valenki",
      "Kokoshnik",
      "Pysanka",
      "Amber",
      "Icon",
      "Scythe",
      "Axe of the Bear",
      "Winter's Cloak",
      "Forest Spirit's Charm",
      "River Stone",
      "Mountain Crystal",
      "Sun Amulet",
      "Moon Pendant",
      "Star Compass",
      "Whispering Birch",
      "Iron Key",
      "Firebird Feather",
      "Baba Yaga's Hut",
      "Koschei's Needle",
      "Rusalka's Comb",
      "Vodyanoy's Net",
      "Domovoi's Broom",
      "Leshy's Staff",
      "Mokosh's Loom",
      "Perun's Axe",
      "Svarog's Hammer",
    ],
  },
}

// Función para generar nombres únicos
const generateUniqueNames = (sourceArray: string[], count: number): string[] => {
  const shuffled = [...sourceArray].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, Math.min(count, sourceArray.length))
}

const getEmbedCode = () => {
  return `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generador de Nombres Literarios</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: white;
            color: #000;
            line-height: 1.6;
            min-height: 100vh;
        }
        
        .container {
            max-width: 64rem;
            margin: 0 auto;
            padding: 1.5rem;
        }
        
        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }
        
        @media (max-width: 768px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }
        
        .card {
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        }
        
        .card-header {
            padding: 1.5rem 1.5rem 0 1.5rem;
        }
        
        .card-title {
            font-family: 'Cinzel', serif;
            font-size: 1.125rem;
            font-weight: 600;
            color: #000;
            margin-bottom: 0;
        }
        
        .card-content {
            padding: 1.5rem;
        }
        
        .space-y-4 > * + * {
            margin-top: 1rem;
        }
        
        .control-group {
            margin-bottom: 0;
        }
        
        label {
            display: block;
            margin-bottom: 0.5rem;
            font-size: 0.875rem;
            font-weight: 500;
            color: #000;
        }
        
        /* Custom Select Styles - Exact shadcn/ui replica */
        .select-container {
            position: relative;
        }
        
        .select-trigger {
            display: flex;
            height: 2.5rem;
            width: 100%;
            align-items: center;
            justify-content: between;
            border-radius: 0.375rem;
            border: 1px solid #d1d5db;
            background-color: white;
            padding: 0.5rem 0.75rem;
            font-size: 0.875rem;
            color: #000;
            cursor: pointer;
            outline: none;
            transition: border-color 0.2s;
            position: relative;
        }
        
        .select-trigger:focus,
        .select-trigger.open {
            border-color: #8168FF;
            outline: 2px solid transparent;
            outline-offset: 2px;
        }
        
        .select-trigger:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }
        
        .select-value {
            flex: 1;
            text-align: left;
        }
        
        .select-icon {
            height: 1rem;
            width: 1rem;
            opacity: 0.5;
            transition: transform 0.2s;
            margin-left: 0.5rem;
        }
        
        .select-trigger.open .select-icon {
            transform: rotate(180deg);
        }
        
        .select-content {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 50;
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 0.375rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            margin-top: 0.25rem;
            max-height: 15rem;
            overflow-y: auto;
            display: none;
            animation: fadeIn 0.15s ease-out;
        }
        
        .select-content.open {
            display: block;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-0.25rem);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .select-item {
            position: relative;
            display: flex;
            width: 100%;
            cursor: pointer;
            select: none;
            align-items: center;
            border-radius: 0.125rem;
            padding: 0.375rem 0.5rem 0.375rem 2rem;
            font-size: 0.875rem;
            outline: none;
            transition: background-color 0.15s;
            color: #000;
        }
        
        .select-item:hover {
            background-color: #f3f4f6;
        }
        
        .select-item:focus {
            background-color: #f3f4f6;
        }
        
        .select-item.selected {
            background-color: #f3f4f6;
        }
        
        .select-item.selected::before {
            content: "✓";
            position: absolute;
            left: 0.5rem;
            display: flex;
            height: 0.875rem;
            width: 0.875rem;
            align-items: center;
            justify-content: center;
            color: #8168FF;
            font-size: 0.75rem;
        }
        
        .generate-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 0.375rem;
            font-size: 0.875rem;
            font-weight: 500;
            transition: background-color 0.2s;
            outline: none;
            border: none;
            background-color: #8168FF;
            color: white;
            height: 2.5rem;
            padding: 0.5rem 1rem;
            width: 100%;
            cursor: pointer;
            gap: 0.5rem;
        }
        
        .generate-btn:hover {
            background-color: #6d5ce6;
        }
        
        .generate-btn:focus-visible {
            outline: 2px solid #8168FF;
            outline-offset: 2px;
        }
        
        .generate-btn:disabled {
            pointer-events: none;
            opacity: 0.5;
        }
        
        .shuffle-icon {
            height: 1rem;
            width: 1rem;
        }
        
        .results-content {
            min-height: 200px;
        }
        
        .name-list {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        
        .space-y-3 > * + * {
            margin-top: 0.75rem;
        }
        
        .name-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.75rem;
            background: #f9fafb;
            border: 1px solid #e5e7eb;
            border-radius: 0.5rem;
            transition: border-color 0.2s;
        }
        
        .name-item:hover {
            border-color: #8168FF;
        }
        
        .name-text {
            font-size: 1rem;
            font-weight: 500;
            color: #000;
        }
        
        .copy-btn {
            background: transparent;
            border: none;
            color: #8168FF;
            cursor: pointer;
            padding: 0.25rem;
            outline: none;
            transition: color 0.2s;
            font-size: 1rem;
            border-radius: 0.25rem;
        }
        
        .copy-btn:hover {
            color: #6d5ce6;
            background-color: #f3f4f6;
        }
        
        .copy-icon {
            height: 1rem;
            width: 1rem;
        }
        
        .empty-state {
            text-align: center;
            color: #6b7280;
            font-style: italic;
            padding: 2rem 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="grid">
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">Configuración</h2>
                </div>
                <div class="card-content">
                    <div class="space-y-4">
                        <div class="control-group">
                            <label>Tipo de Nombre</label>
                            <div class="select-container">
                                <button class="select-trigger" id="nameTypeTrigger" onclick="toggleSelect('nameType')">
                                    <span class="select-value" id="nameTypeValue">Nombre de Personaje</span>
                                    <svg class="select-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m6 9 6 6 6-6"/>
                                    </svg>
                                </button>
                                <div class="select-content" id="nameTypeContent">
                                    <div class="select-item selected" onclick="selectOption('nameType', 'character', 'Nombre de Personaje')">Nombre de Personaje</div>
                                    <div class="select-item" onclick="selectOption('nameType', 'character-surname', 'Nombre de Personaje con Apellido')">Nombre de Personaje con Apellido</div>
                                    <div class="select-item" onclick="selectOption('nameType', 'place', 'Nombre de Lugar')">Nombre de Lugar</div>
                                    <div class="select-item" onclick="selectOption('nameType', 'object', 'Nombre de Objeto')">Nombre de Objeto</div>
                                    <div class="select-item" onclick="selectOption('nameType', 'random', 'Al Azar')">Al Azar</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="control-group">
                            <label>Influencia Cultural</label>
                            <div class="select-container">
                                <button class="select-trigger" id="culturalInfluenceTrigger" onclick="toggleSelect('culturalInfluence')">
                                    <span class="select-value" id="culturalInfluenceValue">Ninguna</span>
                                    <svg class="select-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m6 9 6 6 6-6"/>
                                    </svg>
                                </button>
                                <div class="select-content" id="culturalInfluenceContent">
                                    <div class="select-item selected" onclick="selectOption('culturalInfluence', 'none', 'Ninguna')">Ninguna</div>
                                    <div class="select-item" onclick="selectOption('culturalInfluence', 'japanese', 'Japonesa')">Japonesa</div>
                                    <div class="select-item" onclick="selectOption('culturalInfluence', 'nordic', 'Nórdica')">Nórdica</div>
                                    <div class="select-item" onclick="selectOption('culturalInfluence', 'arabic', 'Árabe')">Árabe</div>
                                    <div class="select-item" onclick="selectOption('culturalInfluence', 'celtic', 'Celta')">Celta</div>
                                    <div class="select-item" onclick="selectOption('culturalInfluence', 'slavic', 'Eslava')">Eslava</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="control-group">
                            <label>Género Literario</label>
                            <div class="select-container">
                                <button class="select-trigger" id="genreTrigger" onclick="toggleSelect('genre')">
                                    <span class="select-value" id="genreValue">Fantasía</span>
                                    <svg class="select-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m6 9 6 6 6-6"/>
                                    </svg>
                                </button>
                                <div class="select-content" id="genreContent">
                                    <div class="select-item selected" onclick="selectOption('genre', 'fantasy', 'Fantasía')">Fantasía</div>
                                    <div class="select-item" onclick="selectOption('genre', 'historical', 'Histórico')">Histórico</div>
                                    <div class="select-item" onclick="selectOption('genre', 'modern', 'Moderno')">Moderno</div>
                                    <div class="select-item" onclick="selectOption('genre', 'exotic', 'Exótico')">Exótico</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="control-group">
                            <label>Género del Personaje</label>
                            <div class="select-container">
                                <button class="select-trigger" id="genderTrigger" onclick="toggleSelect('gender')">
                                    <span class="select-value" id="genderValue">Masculino</span>
                                    <svg class="select-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m6 9 6 6 6-6"/>
                                    </svg>
                                </button>
                                <div class="select-content" id="genderContent">
                                    <div class="select-item selected" onclick="selectOption('gender', 'male', 'Masculino')">Masculino</div>
                                    <div class="select-item" onclick="selectOption('gender', 'female', 'Femenino')">Femenino</div>
                                    <div class="select-item" onclick="selectOption('gender', 'neutral', 'Neutral')">Neutral</div>
                                </div>
                            </div>
                        </div>
                        
                        <button class="generate-btn" onclick="generateNames()">
                            <svg class="shuffle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 3h5v5"/>
                                <path d="m21 3-5 5"/>
                                <path d="M8 21H3v-5"/>
                                <path d="m3 21 5-5"/>
                                <path d="M21 16v5h-5"/>
                                <path d="m21 21-5-5"/>
                                <path d="M8 3H3v5"/>
                                <path d="m3 3 5 5"/>
                            </svg>
                            Generar Nombres
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">Nombres Generados</h2>
                </div>
                <div class="card-content">
                    <div class="results-content">
                        <div class="name-list space-y-3" id="nameList">
                            <div class="empty-state">Haz clic en "Generar Nombres" para comenzar</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // State variables
        let currentValues = {
            nameType: 'character',
            culturalInfluence: 'none',
            genre: 'fantasy',
            gender: 'male'
        };

        // Data arrays
        const nameData = {
            fantasy: {
                male: ['Aldric', 'Theron', 'Kael', 'Darian', 'Lysander', 'Orion', 'Caspian', 'Evander', 'Lucian', 'Zephyr'],
                female: ['Seraphina', 'Lyralei', 'Celestine', 'Isadora', 'Evangeline', 'Aurelia', 'Cordelia', 'Ophelia', 'Vivienne', 'Elara'],
                neutral: ['Sage', 'River', 'Phoenix', 'Rowan', 'Ember', 'Quinn', 'Ash', 'Vale', 'Storm', 'Raven']
            },
            historical: {
                male: ['Edmund', 'Bartholomew', 'Percival', 'Reginald', 'Cornelius', 'Archibald', 'Mortimer', 'Algernon', 'Cedric', 'Roderick'],
                female: ['Cordelia', 'Beatrice', 'Genevieve', 'Penelope', 'Arabella', 'Josephine', 'Evangeline', 'Constance', 'Prudence', 'Millicent'],
                neutral: ['Francis', 'Morgan', 'Sidney', 'Aubrey', 'Avery', 'Cameron', 'Jordan', 'Taylor', 'Casey', 'Riley']
            },
            modern: {
                male: ['Adrian', 'Sebastian', 'Gabriel', 'Alexander', 'Nathaniel', 'Theodore', 'Benjamin', 'Christopher', 'Jonathan', 'Nicholas'],
                female: ['Isabella', 'Sophia', 'Charlotte', 'Amelia', 'Olivia', 'Emma', 'Ava', 'Mia', 'Harper', 'Evelyn'],
                neutral: ['Alex', 'Jordan', 'Taylor', 'Casey', 'Morgan', 'Riley', 'Avery', 'Cameron', 'Sage', 'Blake']
            },
            exotic: {
                male: ['Zafir', 'Kai', 'Akira', 'Dante', 'Enzo', 'Mateo', 'Diego', 'Rafael', 'Santiago', 'Leonardo'],
                female: ['Aria', 'Luna', 'Stella', 'Valentina', 'Camila', 'Sofia', 'Isabella', 'Gabriela', 'Natalia', 'Esperanza'],
                neutral: ['Indigo', 'Ocean', 'Sky', 'Rain', 'Star', 'Moon', 'Sun', 'Dawn', 'Sage', 'River']
            }
        };

        const surnames = {
            fantasy: ['Stormwind', 'Nightshade', 'Silverleaf', 'Goldmane', 'Ironforge', 'Moonwhisper', 'Starweaver', 'Shadowbane', 'Lightbringer', 'Dragonheart'],
            historical: ['Ashworth', 'Blackwood', 'Whitmore', 'Pemberton', 'Worthington', 'Kensington', 'Harrington', 'Wellington', 'Covington', 'Huntington'],
            modern: ['Anderson', 'Johnson', 'Williams', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Jackson'],
            exotic: ['Delacroix', 'Montoya', 'Nakamura', 'Petrov', 'Singh', 'Chen', 'Rodriguez', 'Kowalski', 'Andersson', 'Rossi']
        };

        const culturalInfluences = {
            japanese: {
                character: {
                    male: ["Akihiro", "Takeshi", "Hiroshi", "Kenji", "Masato", "Ryouta", "Satoshi", "Yuuki", "Daichi", "Haruto"],
                    female: ["Sakura", "Yuki", "Akane", "Misaki", "Rei", "Ayame", "Kiyomi", "Natsuki", "Shiori", "Emiko"],
                    neutral: ["Sora", "Haru", "Yuki", "Aki", "Ren", "Kai", "Michi", "Nao", "Tomo", "Yuu"]
                },
                place: ["Kazehara", "Mizukage", "Yamakiri", "Tsukimori", "Hanabira", "Shirogane", "Kurogawa", "Aozora", "Kinmoku", "Yukiguni"],
                object: ["Tsukikage", "Hanazakari", "Yamabuki", "Mizuhoshi", "Kazehana", "Shirayuki", "Kurenai", "Aokaze", "Kintsuba", "Yukibare"]
            },
            nordic: {
                character: {
                    male: ["Bjorn", "Erik", "Magnus", "Ragnar", "Thorvald", "Gunnar", "Olaf", "Sven", "Leif", "Ulf"],
                    female: ["Astrid", "Ingrid", "Sigrid", "Freydis", "Solveig", "Ragnhild", "Thora", "Gudrun", "Helga", "Brynja"],
                    neutral: ["Raven", "Storm", "Frost", "Ember", "Stone", "Wolf", "Bear", "Ice", "Fire", "Wind"]
                },
                place: ["Ironhold", "Frostheim", "Stormfjord", "Ravenshollow", "Wolfsburg", "Icewind", "Thornvale", "Ironpeak", "Stormhaven", "Frostgate"],
                object: ["Stormbreaker", "Frostbane", "Ironwill", "Ravenclaw", "Wolfsbane", "Iceforge", "Thornspike", "Ironheart", "Stormcaller", "Frostbite"]
            },
            arabic: {
                character: {
                    male: ["Khalil", "Rashid", "Hakim", "Tariq", "Samir", "Farid", "Malik", "Nasir", "Zaid", "Amjad"],
                    female: ["Layla", "Amira", "Yasmin", "Zahra", "Nadia", "Soraya", "Fatima", "Aisha", "Maryam", "Safiya"],
                    neutral: ["Noor", "Salam", "Farah", "Jamal", "Karim", "Latif", "Majid", "Nadir", "Qasim", "Rami"]
                },
                place: ["Al-Zahara", "Bayt-Noor", "Madinat-Salam", "Qasr-Farid", "Dar-Yasmin", "Burj-Khalil", "Wadi-Amira", "Jabal-Hakim", "Bahr-Layla", "Sahra-Malik"],
                object: ["Sayf-Noor", "Khatam-Yasmin", "Taj-Khalil", "Mirath-Amira", "Kitab-Hakim", "Qalam-Layla", "Siraj-Malik", "Burda-Zahra", "Kanz-Farid", "Lulu-Soraya"]
            },
            celtic: {
                character: {
                    male: ["Cian", "Eamon", "Fergus", "Niall", "Oisin", "Ruairi", "Seamus", "Tadhg", "Brendan", "Cormac"],
                    female: ["Siobhan", "Aoife", "Brigid", "Ciara", "Deirdre", "Fiona", "Grainne", "Maeve", "Niamh", "Orla"],
                    neutral: ["Rowan", "Sage", "River", "Bryn", "Cael", "Dara", "Erin", "Glen", "Iona", "Kerry"]
                },
                place: ["Gleann-Mor", "Dun-Aoife", "Rath-Cian", "Cnoc-Brigid", "Loch-Niamh", "Coill-Eamon", "Sliabh-Maeve", "Baile-Fergus", "Cluain-Siobhan", "Inis-Oisin"],
                object: ["Claidheamh-Mor", "Torc-Aoife", "Scian-Cian", "Cloch-Brigid", "Crann-Niamh", "Slat-Eamon", "Bonn-Maeve", "Ceol-Fergus", "Deoch-Siobhan", "Sgiath-Oisin"]
            },
            slavic: {
                character: {
                    male: ["Dmitri", "Alexei", "Nikolai", "Sergei", "Mikhail", "Andrei", "Pavel", "Viktor", "Yuri", "Maxim"],
                    female: ["Katarina", "Anastasia", "Svetlana", "Natasha", "Yelena", "Irina", "Olga", "Vera", "Zoya", "Lyudmila"],
                    neutral: ["Sasha", "Misha", "Zhenya", "Valya", "Dima", "Kostya", "Petya", "Vanya", "Grisha", "Stenya"]
                },
                place: ["Belgorod", "Chernoles", "Zlatograd", "Krasnodar", "Novgorod", "Starograd", "Zelengrad", "Vysokograd", "Dubrovka", "Borograd"],
                object: ["Zlatokryl", "Chernomech", "Belokamen", "Krasnozar", "Zelenlist", "Sinekamen", "Vysokolet", "Starokor", "Novosvet", "Dubosil"]
            }
        };

        // Custom select functionality
        function toggleSelect(selectId) {
            const trigger = document.getElementById(selectId + 'Trigger');
            const content = document.getElementById(selectId + 'Content');
            
            if (!trigger || !content) return;
            
            // Close all other selects first
            document.querySelectorAll('.select-content').forEach(el => {
                if (el.id !== selectId + 'Content') {
                    el.classList.remove('open');
                }
            });
            document.querySelectorAll('.select-trigger').forEach(el => {
                if (el.id !== selectId + 'Trigger') {
                    el.classList.remove('open');
                }
            });
            
            // Toggle current select
            const isOpen = content.classList.contains('open');
            if (isOpen) {
                trigger.classList.remove('open');
                content.classList.remove('open');
            } else {
                trigger.classList.add('open');
                content.classList.add('open');
                }
        }

        function selectOption(selectId, value, displayText) {
            currentValues[selectId] = value;
            
            // Update display
            const valueElement = document.getElementById(selectId + 'Value');
            if (valueElement) {
                valueElement.textContent = displayText;
            }
            
            // Update selected state
            const content = document.getElementById(selectId + 'Content');
            if (content) {
                content.querySelectorAll('.select-item').forEach(item => {
                    item.classList.remove('selected');
                });
                
                // Add selected class to clicked item
                if (event && event.target) {
                    event.target.classList.add('selected');
                }
            }
            
            // Close dropdown
            const trigger = document.getElementById(selectId + 'Trigger');
            if (trigger) {
                trigger.classList.remove('open');
            }
            if (content) {
                content.classList.remove('open');
            }
        }

        // Close dropdowns when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.select-container')) {
                document.querySelectorAll('.select-content').forEach(el => {
                    el.classList.remove('open');
                });
                document.querySelectorAll('.select-trigger').forEach(el => {
                    el.classList.remove('open');
                });
            }
        });

        function generateUniqueNames(sourceArray, count) {
            const shuffled = [...sourceArray].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, Math.min(count, sourceArray.length));
        }

        function generateNames() {
            const nameType = currentValues.nameType;
            const culturalInfluence = currentValues.culturalInfluence;
            const genre = currentValues.genre;
            const gender = currentValues.gender;

            let newNames = [];

            if (culturalInfluence !== "none" && nameType !== "random") {
                const culturalData = culturalInfluences[culturalInfluence];

                if (nameType === "character") {
                    const names = culturalData.character[gender];
                    newNames = generateUniqueNames(names, 5);
                } else if (nameType === "character-surname") {
                    const firstNames = culturalData.character[gender];
                    const lastNames = surnames[genre];
                    const uniqueFirstNames = generateUniqueNames(firstNames, 5);
                    const uniqueLastNames = generateUniqueNames(lastNames, 5);
                    
                    for (let i = 0; i < 5; i++) {
                        newNames.push(uniqueFirstNames[i] + ' ' + uniqueLastNames[i]);
                    }
                } else if (nameType === "place") {
                    const places = culturalData.place;
                    newNames = generateUniqueNames(places, 5);
                } else if (nameType === "object") {
                    const objects = culturalData.object;
                    newNames = generateUniqueNames(objects, 5);
                }
            } else {
                if (nameType === "character") {
                    const firstNames = nameData[genre][gender];
                    newNames = generateUniqueNames(firstNames, 5);
                } else if (nameType === "character-surname") {
                    const firstNames = nameData[genre][gender];
                    const lastNames = surnames[genre];
                    const uniqueFirstNames = generateUniqueNames(firstNames, 5);
                    const uniqueLastNames = generateUniqueNames(lastNames, 5);
                    
                    for (let i = 0; i < 5; i++) {
                        newNames.push(uniqueFirstNames[i] + ' ' + uniqueLastNames[i]);
                    }
                } else if (nameType === "place") {
                    const lastNames = surnames[genre];
                    const prefixes = ["New", "Old", "North", "South", "East", "West", "Upper", "Lower", "Great", "Little"];
                    const uniqueLastNames = generateUniqueNames(lastNames, 5);
                    
                    for (let i = 0; i < 5; i++) {
                        const base = uniqueLastNames[i];
                        const usePrefix = Math.random() > 0.5;
                        const name = usePrefix ? prefixes[Math.floor(Math.random() * prefixes.length)] + ' ' + base : base;
                        newNames.push(name);
                    }
                } else if (nameType === "object") {
                    const firstNames = nameData[genre][gender];
                    const lastNames = surnames[genre];
                    const objectPrefixes = ["The", "Ancient", "Mystic", "Sacred", "Lost", "Forgotten", "Legendary", "Cursed", "Blessed", "Eternal"];
                    const uniqueFirstNames = generateUniqueNames(firstNames, 5);
                    const uniqueLastNames = generateUniqueNames(lastNames, 5);
                    
                    for (let i = 0; i < 5; i++) {
                        const first = uniqueFirstNames[i];
                        const last = uniqueLastNames[i];
                        const prefix = objectPrefixes[Math.floor(Math.random() * objectPrefixes.length)];
                        const name = prefix + ' ' + first + ' ' + last;
                        newNames.push(name);
                    }
                } else if (nameType === "random") {
                    const allTypes = ["character", "character-surname", "place", "object"];
                    for (let i = 0; i < 5; i++) {
                        const randomType = allTypes[Math.floor(Math.random() * allTypes.length)];
                        const singleName = generateSingleName(randomType, culturalInfluence, genre, gender);
                        newNames.push(singleName);
                    }
                }
            }

            const nameList = document.getElementById('nameList');
            if (!nameList) return;
            
            nameList.innerHTML = '';
            nameList.className = 'name-list space-y-3';

            if (newNames.length === 0) {
                const emptyDiv = document.createElement('div');
                emptyDiv.className = 'empty-state';
                emptyDiv.textContent = 'Haz clic en "Generar Nombres" para comenzar';
                nameList.appendChild(emptyDiv);
            } else {
                for (let i = 0; i < newNames.length; i++) {
                    const fullName = newNames[i];

                    const div = document.createElement('div');
                    div.className = 'name-item';
                    div.innerHTML = '<span class="name-text">' + fullName + '</span><button class="copy-btn" onclick="copyName(\\'' + fullName.replace(/'/g, "\\\\'") + '\\')"><svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="m4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg></button>';
                    nameList.appendChild(div);
                }
            }
        }

        function generateSingleName(nameType, culturalInfluence, genre, gender) {
            if (culturalInfluence !== "none" && nameType !== "random") {
                const culturalData = culturalInfluences[culturalInfluence];
                if (nameType === "character") {
                    const names = culturalData.character[gender];
                    return names[Math.floor(Math.random() * names.length)];
                } else if (nameType === "place") {
                    const places = culturalData.place;
                    return places[Math.floor(Math.random() * places.length)];
                } else if (nameType === "object") {
                    const objects = culturalData.object;
                    return objects[Math.floor(Math.random() * objects.length)];
                }
            } else {
                if (nameType === "character") {
                    const firstNames = nameData[genre][gender];
                    return firstNames[Math.floor(Math.random() * firstNames.length)];
                } else if (nameType === "character-surname") {
                    const firstNames = nameData[genre][gender];
                    const lastNames = surnames[genre];
                    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
                    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
                    return firstName + ' ' + lastName;
                }
            }
            return "Nombre";
        }

        function copyName(name) {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(name).then(() => {
                    console.log('Nombre copiado: ' + name);
                }).catch(err => {
                    console.error('Error al copiar: ', err);
                });
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = name;
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    document.execCommand('copy');
                    console.log('Nombre copiado: ' + name);
                } catch (err) {
                    console.error('Error al copiar: ', err);
                }
                document.body.removeChild(textArea);
            }
        }
    </script>
</body>
</html>`
}

export default function NameGenerator() {
  const [genre, setGenre] = useState("fantasy")
  const [gender, setGender] = useState("male")
  const [nameType, setNameType] = useState("character")
  const [culturalInfluence, setCulturalInfluence] = useState("none")
  const [generatedNames, setGeneratedNames] = useState<string[]>([])
  const [showEmbedCode, setShowEmbedCode] = useState(false)
  // Estado para controlar qué botón de "copiado" muestra el check
  const [copiedStates, setCopiedStates] = useState<{ [key: number]: boolean }>({})

  const generateNames = () => {
    const newNames: string[] = []

    if (culturalInfluence !== "none") {
      // Simplified condition, as random type will handle its own logic
      // Usar influencia cultural
      const culturalData = culturalInfluences[culturalInfluence as keyof typeof culturalInfluences]

      if (nameType === "character") {
        const names = culturalData.character[gender as keyof typeof culturalData.character]
        newNames.push(...generateUniqueNames(names, 5))
      } else if (nameType === "character-surname") {
        const firstNames = culturalData.character[gender as keyof typeof culturalData.character]
        const lastNames = culturalData.surname // Use cultural surname list
        const uniqueFirstNames = generateUniqueNames(firstNames, 5)
        const uniqueLastNames = generateUniqueNames(lastNames, 5)

        for (let i = 0; i < 5; i++) {
          newNames.push(`${uniqueFirstNames[i]} ${uniqueLastNames[i]}`)
        }
      } else if (nameType === "place") {
        const places = culturalData.place
        newNames.push(...generateUniqueNames(places, 5))
      } else if (nameType === "object") {
        const objects = culturalData.object
        newNames.push(...generateUniqueNames(objects, 5))
      } else if (nameType === "random") {
        const allCulturalTypes = ["character", "character-surname", "place", "object"]
        for (let i = 0; i < 5; i++) {
          const randomType = allCulturalTypes[Math.floor(Math.random() * allCulturalTypes.length)]
          const singleName = generateSingleName(randomType, culturalInfluence, genre, gender)
          newNames.push(singleName)
        }
      }
    } else {
      // Usar datos originales (sin influencia cultural específica)
      if (nameType === "character") {
        const firstNames = nameData[genre as keyof typeof nameData][gender as keyof typeof nameData.fantasy]
        newNames.push(...generateUniqueNames(firstNames, 5))
      } else if (nameType === "character-surname") {
        const firstNames = nameData[genre as keyof typeof nameData][gender as keyof typeof nameData.fantasy]
        const lastNames = surnames[genre as keyof typeof surnames]
        const uniqueFirstNames = generateUniqueNames(firstNames, 5)
        const uniqueLastNames = generateUniqueNames(lastNames, 5)

        for (let i = 0; i < 5; i++) {
          newNames.push(`${uniqueFirstNames[i]} ${uniqueLastNames[i]}`)
        }
      } else if (nameType === "place") {
        const lastNames = surnames[genre as keyof typeof surnames]
        const prefixes = ["New", "Old", "North", "South", "East", "West", "Upper", "Lower", "Great", "Little"]
        const uniqueLastNames = generateUniqueNames(lastNames, 5)

        for (let i = 0; i < 5; i++) {
          const base = uniqueLastNames[i]
          const usePrefix = Math.random() > 0.5
          const name = usePrefix ? `${prefixes[Math.floor(Math.random() * prefixes.length)]} ${base}` : base
          newNames.push(name)
        }
      } else if (nameType === "object") {
        const firstNames = nameData[genre as keyof typeof nameData][gender as keyof typeof nameData.fantasy]
        const lastNames = surnames[genre as keyof typeof surnames]
        const objectPrefixes = [
          "The",
          "Ancient",
          "Mystic",
          "Sacred",
          "Lost",
          "Forgotten",
          "Legendary",
          "Cursed",
          "Blessed",
          "Eternal",
        ]
        const uniqueFirstNames = generateUniqueNames(firstNames, 5)
        const uniqueLastNames = generateUniqueNames(lastNames, 5)

        for (let i = 0; i < 5; i++) {
          const first = uniqueFirstNames[i]
          const last = uniqueLastNames[i]
          const prefix = objectPrefixes[Math.floor(Math.random() * objectPrefixes.length)]
          const name = `${prefix} ${first} ${last}`
          newNames.push(name)
        }
      } else if (nameType === "random") {
        const allTypes = ["character", "character-surname", "place", "object"]
        for (let i = 0; i < 5; i++) {
          const randomType = allTypes[Math.floor(Math.random() * allTypes.length)]
          const singleName = generateSingleName(randomType, culturalInfluence, genre, gender)
          newNames.push(singleName)
        }
      }
    }

    setGeneratedNames(newNames)
    // Reset copied states when new names are generated
    setCopiedStates({})
  }

  const generateSingleName = (nameType: string, culturalInfluence: string, genre: string, gender: string): string => {
    if (culturalInfluence !== "none") {
      const culturalData = culturalInfluences[culturalInfluence as keyof typeof culturalInfluences]
      if (nameType === "character") {
        const names = culturalData.character[gender as keyof typeof culturalData.character]
        return names[Math.floor(Math.random() * names.length)]
      } else if (nameType === "character-surname") {
        const firstNames = culturalData.character[gender as keyof typeof culturalData.character]
        const lastNames = culturalData.surname // Use cultural surname list
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
        return `${firstName} ${lastName}`
      } else if (nameType === "place") {
        const places = culturalData.place
        return places[Math.floor(Math.random() * places.length)]
      } else if (nameType === "object") {
        const objects = culturalData.object
        return objects[Math.floor(Math.random() * objects.length)]
      }
    } else {
      if (nameType === "character") {
        const firstNames = nameData[genre as keyof typeof nameData][gender as keyof typeof nameData.fantasy]
        return firstNames[Math.floor(Math.random() * firstNames.length)]
      } else if (nameType === "character-surname") {
        const firstNames = nameData[genre as keyof typeof nameData][gender as keyof typeof nameData.fantasy]
        const lastNames = surnames[genre as keyof typeof surnames]
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
        return `${firstName} ${lastName}`
      }
    }
    return "Nombre"
  }

  const copyName = async (name: string, index: number) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(name)
      } else {
        // Fallback para navegadores que no soportan clipboard API
        const textArea = document.createElement("textarea")
        textArea.value = name
        textArea.style.position = "fixed"
        textArea.style.left = "-999999px"
        textArea.style.top = "-999999px"
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        document.execCommand("copy")
        document.body.removeChild(textArea)
      }

      // Show checkmark for the specific item
      setCopiedStates((prev) => ({ ...prev, [index]: true }))
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [index]: false }))
      }, 2000) // Hide after 2 seconds
    } catch (err) {
      console.error("Error al copiar:", err)
      // Fallback adicional
      const textArea = document.createElement("textarea")
      textArea.value = name
      textArea.style.position = "fixed"
      textArea.style.left = "-999999px"
      textArea.style.top = "-999999px"
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      try {
        document.execCommand("copy")
        // Show checkmark even for fallback
        setCopiedStates((prev) => ({ ...prev, [index]: true }))
        setTimeout(() => {
          setCopiedStates((prev) => ({ ...prev, [index]: false }))
        }, 2000)
      } catch (fallbackErr) {
        console.error("Error en fallback:", fallbackErr)
      }
      document.body.removeChild(textArea)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&display=swap" rel="stylesheet" />

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 p-3 md:p-6">
          <Card className="border-gray-200">
            <CardHeader className="pb-3 md:pb-6">
              <CardTitle className="text-black text-base md:text-lg" style={{ fontFamily: "Cinzel, serif" }}>
                Configuración
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4 pt-0">
              <div>
                <label className="block text-sm font-medium text-black mb-1.5 md:mb-2">Tipo de Nombre</label>
                <Select value={nameType} onValueChange={setNameType}>
                  <SelectTrigger className="border-gray-300 focus:border-[#8168FF] focus:ring-0 focus:ring-offset-0 h-11 md:h-10 text-base md:text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="character">Nombre de Personaje</SelectItem>
                    <SelectItem value="character-surname">Nombre de Personaje con Apellido</SelectItem>
                    <SelectItem value="place">Nombre de Lugar</SelectItem>
                    <SelectItem value="object">Nombre de Objeto</SelectItem>
                    <SelectItem value="random">Al Azar</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1.5 md:mb-2">Influencia Cultural</label>
                <Select value={culturalInfluence} onValueChange={setCulturalInfluence}>
                  <SelectTrigger className="border-gray-300 focus:border-[#8168FF] focus:ring-0 focus:ring-offset-0 h-11 md:h-10 text-base md:text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Ninguna</SelectItem>
                    <SelectItem value="japanese">Japonesa</SelectItem>
                    <SelectItem value="nordic">Nórdica</SelectItem>
                    <SelectItem value="arabic">Árabe</SelectItem>
                    <SelectItem value="celtic">Celta</SelectItem>
                    <SelectItem value="slavic">Eslava</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1.5 md:mb-2">Género Literario</label>
                <Select value={genre} onValueChange={setGenre}>
                  <SelectTrigger className="border-gray-300 focus:border-[#8168FF] focus:ring-0 focus:ring-offset-0 h-11 md:h-10 text-base md:text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fantasy">Fantasía</SelectItem>
                    <SelectItem value="historical">Histórico</SelectItem>
                    <SelectItem value="modern">Moderno</SelectItem>
                    <SelectItem value="exotic">Exótico</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1.5 md:mb-2">Género del Personaje</label>
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger className="border-gray-300 focus:border-[#8168FF] focus:ring-0 focus:ring-offset-0 h-11 md:h-10 text-base md:text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Masculino</SelectItem>
                    <SelectItem value="female">Femenino</SelectItem>
                    <SelectItem value="neutral">Neutral</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={generateNames}
                className="w-full bg-[#8168FF] hover:bg-[#6d5ce6] text-white focus:ring-0 focus:ring-offset-0 h-11 md:h-10 text-base md:text-sm font-medium"
              >
                <Shuffle className="w-5 h-5 md:w-4 md:h-4 mr-2" />
                Generar Nombres
              </Button>

              {/*
              <Button
                onClick={() => setShowEmbedCode(!showEmbedCode)}
                variant="outline"
                className="w-full border-[#8168FF] text-[#8168FF] hover:bg-[#8168FF] hover:text-white focus:ring-0 focus:ring-offset-0"
              >
                <Download className="w-4 h-4 mr-2" />
                {showEmbedCode ? "Ocultar" : "Mostrar"} Código HTML
              </Button>
              */}
            </CardContent>
          </Card>

          <Card className="border-gray-200">
            <CardHeader className="pb-3 md:pb-6">
              <CardTitle className="text-black text-base md:text-lg" style={{ fontFamily: "Cinzel, serif" }}>
                Nombres Generados
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              {generatedNames.length === 0 ? (
                <p className="text-gray-500 text-center py-6 md:py-8 italic text-sm md:text-base">
                  Haz clic en "Generar Nombres" para comenzar
                </p>
              ) : (
                <div className="space-y-2 md:space-y-3">
                  {generatedNames.map((name, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 md:p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#8168FF] transition-colors min-h-[48px] md:min-h-[auto]"
                    >
                      <span className="text-black font-medium text-sm md:text-base pr-2">{name}</span>
                      <button
                        onClick={() => copyName(name, index)} // Pass index to copyName
                        className="text-[#8168FF] hover:text-[#6d5ce6] transition-colors p-2 md:p-0 border-0 bg-transparent focus:outline-none flex-shrink-0 min-w-[44px] min-h-[44px] md:min-h-[auto] md:min-h-[auto] flex items-center justify-center"
                      >
                        {copiedStates[index] ? (
                          <Check className="w-5 h-5 md:w-4 md:h-4 animate-in zoom-in-90 duration-300" />
                        ) : (
                          <Copy className="w-5 h-5 md:w-4 md:h-4" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* {showEmbedCode && (
          <Card className="mt-8 border-gray-200">
            <CardHeader>
              <CardTitle className="text-black" style={{ fontFamily: "Cinzel, serif" }}>
                Código HTML para Embebido
              </CardTitle>
              <p className="text-gray-600 text-sm">
                Copia este código y pégalo en cualquier página web para integrar el generador
              </p>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <pre className="bg-gray-100 p-4 rounded-lg text-xs overflow-x-auto border border-gray-200 max-h-96">
                  <code className="text-black">{getEmbedCode()}</code>
                </pre>
                <Button
                  onClick={() => navigator.clipboard.writeText(getEmbedCode())}
                  className="absolute top-2 right-2 bg-[#8168FF] hover:bg-[#6d5ce6] text-white focus:ring-0 focus:ring-offset-0"
                  size="sm"
                >
                  <Copy className="w-3 h-3 mr-1" />
                  Copiar
                </Button>
              </div>
            </CardContent>
          </Card>
        )} */}
      </div>
    </div>
  )
}
