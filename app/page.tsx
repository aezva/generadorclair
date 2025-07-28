"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shuffle, Copy } from "lucide-react"

const nameData = {
  fantasy: {
    male: ["Aldric", "Theron", "Kael", "Darian", "Lysander", "Orion", "Caspian", "Evander", "Lucian", "Zephyr"],
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
    ],
    neutral: ["Sage", "River", "Phoenix", "Rowan", "Ember", "Quinn", "Ash", "Vale", "Storm", "Raven"],
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
    ],
    neutral: ["Francis", "Morgan", "Sidney", "Aubrey", "Avery", "Cameron", "Jordan", "Taylor", "Casey", "Riley"],
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
    ],
    female: ["Isabella", "Sophia", "Charlotte", "Amelia", "Olivia", "Emma", "Ava", "Mia", "Harper", "Evelyn"],
    neutral: ["Alex", "Jordan", "Taylor", "Casey", "Morgan", "Riley", "Avery", "Cameron", "Sage", "Blake"],
  },
  exotic: {
    male: ["Zafir", "Kai", "Akira", "Dante", "Enzo", "Mateo", "Diego", "Rafael", "Santiago", "Leonardo"],
    female: ["Aria", "Luna", "Stella", "Valentina", "Camila", "Sofia", "Isabella", "Gabriela", "Natalia", "Esperanza"],
    neutral: ["Indigo", "Ocean", "Sky", "Rain", "Star", "Moon", "Sun", "Dawn", "Sage", "River"],
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
  ],
  modern: ["Anderson", "Johnson", "Williams", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Jackson"],
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
  ],
}

// Nuevos datos para influencias culturales
const culturalInfluences = {
  japanese: {
    character: {
      male: ["Akihiro", "Takeshi", "Hiroshi", "Kenji", "Masato", "Ryouta", "Satoshi", "Yuuki", "Daichi", "Haruto"],
      female: ["Sakura", "Yuki", "Akane", "Misaki", "Rei", "Ayame", "Kiyomi", "Natsuki", "Shiori", "Emiko"],
      neutral: ["Sora", "Haru", "Yuki", "Aki", "Ren", "Kai", "Michi", "Nao", "Tomo", "Yuu"],
    },
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
    ],
  },
  nordic: {
    character: {
      male: ["Bjorn", "Erik", "Magnus", "Ragnar", "Thorvald", "Gunnar", "Olaf", "Sven", "Leif", "Ulf"],
      female: ["Astrid", "Ingrid", "Sigrid", "Freydis", "Solveig", "Ragnhild", "Thora", "Gudrun", "Helga", "Brynja"],
      neutral: ["Raven", "Storm", "Frost", "Ember", "Stone", "Wolf", "Bear", "Ice", "Fire", "Wind"],
    },
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
    ],
  },
  arabic: {
    character: {
      male: ["Khalil", "Rashid", "Hakim", "Tariq", "Samir", "Farid", "Malik", "Nasir", "Zaid", "Amjad"],
      female: ["Layla", "Amira", "Yasmin", "Zahra", "Nadia", "Soraya", "Fatima", "Aisha", "Maryam", "Safiya"],
      neutral: ["Noor", "Salam", "Farah", "Jamal", "Karim", "Latif", "Majid", "Nadir", "Qasim", "Rami"],
    },
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
    ],
  },
  celtic: {
    character: {
      male: ["Cian", "Eamon", "Fergus", "Niall", "Oisin", "Ruairi", "Seamus", "Tadhg", "Brendan", "Cormac"],
      female: ["Siobhan", "Aoife", "Brigid", "Ciara", "Deirdre", "Fiona", "Grainne", "Maeve", "Niamh", "Orla"],
      neutral: ["Rowan", "Sage", "River", "Bryn", "Cael", "Dara", "Erin", "Glen", "Iona", "Kerry"],
    },
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
    ],
  },
  slavic: {
    character: {
      male: ["Dmitri", "Alexei", "Nikolai", "Sergei", "Mikhail", "Andrei", "Pavel", "Viktor", "Yuri", "Maxim"],
      female: ["Katarina", "Anastasia", "Svetlana", "Natasha", "Yelena", "Irina", "Olga", "Vera", "Zoya", "Lyudmila"],
      neutral: ["Sasha", "Misha", "Zhenya", "Valya", "Dima", "Kostya", "Petya", "Vanya", "Grisha", "Stenya"],
    },
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
  const [copiedToast, setCopiedToast] = useState<{ show: boolean; name: string }>({ show: false, name: "" })

  const generateNames = () => {
    const newNames: string[] = []

    if (culturalInfluence !== "none" && nameType !== "random") {
      // Usar influencia cultural
      const culturalData = culturalInfluences[culturalInfluence as keyof typeof culturalInfluences]

      if (nameType === "character") {
        const names = culturalData.character[gender as keyof typeof culturalData.character]
        newNames.push(...generateUniqueNames(names, 5))
      } else if (nameType === "character-surname") {
        const firstNames = culturalData.character[gender as keyof typeof culturalData.character]
        const lastNames = surnames[genre as keyof typeof surnames]
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
      }
    } else {
      // Usar datos originales
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
  }

  const generateSingleName = (nameType: string, culturalInfluence: string, genre: string, gender: string): string => {
    if (culturalInfluence !== "none" && nameType !== "random") {
      const culturalData = culturalInfluences[culturalInfluence as keyof typeof culturalInfluences]
      if (nameType === "character") {
        const names = culturalData.character[gender as keyof typeof culturalData.character]
        return names[Math.floor(Math.random() * names.length)]
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

  const copyName = async (name: string) => {
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

      // Show toast notification
      setCopiedToast({ show: true, name })
      setTimeout(() => {
        setCopiedToast({ show: false, name: "" })
      }, 2000)
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
        // Show toast notification even for fallback
        setCopiedToast({ show: true, name })
        setTimeout(() => {
          setCopiedToast({ show: false, name: "" })
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
                        onClick={() => copyName(name)}
                        className="text-[#8168FF] hover:text-[#6d5ce6] transition-colors p-2 md:p-0 border-0 bg-transparent focus:outline-none flex-shrink-0 min-w-[44px] min-h-[44px] md:min-w-[auto] md:min-h-[auto] flex items-center justify-center"
                      >
                        <Copy className="w-5 h-5 md:w-4 md:h-4" />
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
        {/* Toast notification */}
        {copiedToast.show && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 md:top-4 md:right-4 md:left-auto md:transform-none z-50 animate-in slide-in-from-top-2 duration-300">
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-4 py-3 mx-4 md:mx-0 max-w-xs">
              <span className="text-gray-600 text-sm font-medium truncate block">"{copiedToast.name}" copiado</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
