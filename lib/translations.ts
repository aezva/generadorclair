export const translations = {
  en: {
    // Configuration section
    configuration: "Configuration",
    nameType: "Name Type",
    characterName: "Character Name",
    characterNameWithSurname: "Character Name with Surname",
    placeName: "Place Name",
    objectName: "Object Name",
    random: "Random",
    
    // Cultural influence
    culturalInfluence: "Cultural Influence",
    none: "None",
    japanese: "Japanese",
    nordic: "Nordic",
    arabic: "Arabic",
    celtic: "Celtic",
    slavic: "Slavic",
    
    // Literary genre
    literaryGenre: "Literary Genre",
    fantasy: "Fantasy",
    historical: "Historical",
    modern: "Modern",
    exotic: "Exotic",
    
    // Character gender
    characterGender: "Character Gender",
    male: "Male",
    female: "Female",
    neutral: "Neutral",
    
    // Button
    generateNames: "Generate Names",
    
    // Results section
    generatedNames: "Generated Names",
    clickToStart: "Click 'Generate Names' to start",
    
    // Copy functionality
    copied: "Copied!",
    copy: "Copy"
  },
  es: {
    // Configuration section
    configuration: "Configuración",
    nameType: "Tipo de Nombre",
    characterName: "Nombre de Personaje",
    characterNameWithSurname: "Nombre de Personaje con Apellido",
    placeName: "Nombre de Lugar",
    objectName: "Nombre de Objeto",
    random: "Al Azar",
    
    // Cultural influence
    culturalInfluence: "Influencia Cultural",
    none: "Ninguna",
    japanese: "Japonesa",
    nordic: "Nórdica",
    arabic: "Árabe",
    celtic: "Celta",
    slavic: "Eslava",
    
    // Literary genre
    literaryGenre: "Género Literario",
    fantasy: "Fantasía",
    historical: "Histórico",
    modern: "Moderno",
    exotic: "Exótico",
    
    // Character gender
    characterGender: "Género del Personaje",
    male: "Masculino",
    female: "Femenino",
    neutral: "Neutral",
    
    // Button
    generateNames: "Generar Nombres",
    
    // Results section
    generatedNames: "Nombres Generados",
    clickToStart: "Haz clic en 'Generar Nombres' para comenzar",
    
    // Copy functionality
    copied: "¡Copiado!",
    copy: "Copiar"
  }
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en
