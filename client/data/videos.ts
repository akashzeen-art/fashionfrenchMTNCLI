export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
  duration: string;
  designer: string;
  year: number;
}

const thumbnails = [
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i1.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i2.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i3.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i4.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i5.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i6.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i7.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i8.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i9.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i10.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i11.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i12.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i13.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i14.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i15.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i16.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i17.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i18.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i19.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i20.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i1.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i2.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i3.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i4.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i5.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i6.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i7.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i8.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i9.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i10.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i11.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i12.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i13.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i14.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i15.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i16.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i17.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i18.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i19.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i20.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i21.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i22.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i23.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i24.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i25.jpg",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/i26.jpg",
];

const videoUrls = [
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v1.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v2.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v3.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v4.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v5.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v6.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v7.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v8.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v9.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v10.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v11.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v12.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v13.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v14.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v15.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v16.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v17.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v18.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v19.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v20.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v1.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v2.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v3.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v4.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v5.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v6.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v7.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v8.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v9.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v10.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v11.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v12.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v13.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v14.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v15.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v16.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v17.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v18.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v19.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v20.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v21.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v22.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v23.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v24.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v25.mp4",
  "https://api.ameora.fun/content/GalaxiWebsite/FASHION-26/v26.mp4",
];

// Shuffle helper
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Helper: cycle through available assets for 50 videos
const t = (i: number) => thumbnails[i % thumbnails.length];
const v = (i: number) => videoUrls[i % videoUrls.length];

const rawVideos: Video[] = shuffle([
  { id: "1",  title: "Haute Couture Paris Spring 2024",  description: "An exclusive collection from Paris Fashion Week",                    thumbnail: t(0),  videoUrl: v(0),  category: "Haute Couture",   duration: "8:45",  designer: "Maison Chanel",       year: 2024 },
  { id: "2",  title: "Street Style Essentials",          description: "Parisian street style - Complete guide",                             thumbnail: t(1),  videoUrl: v(1),  category: "Street Fashion",  duration: "12:30", designer: "Urban Fashion",        year: 2024 },
  { id: "3",  title: "Luxury Heritage Dior",             description: "The history and evolution of the house of Dior",                     thumbnail: t(2),  videoUrl: v(2),  category: "Luxury Brands",   duration: "15:20", designer: "Christian Dior",       year: 2024 },
  { id: "4",  title: "Runway Walk Masterclass",          description: "How to walk like a professional model",                              thumbnail: t(3),  videoUrl: v(3),  category: "Runway",          duration: "10:15", designer: "Elite Models",         year: 2024 },
  { id: "5",  title: "Fashion Film Collection",          description: "Cinema and fashion - Masterpiece fashion films",                     thumbnail: t(4),  videoUrl: v(4),  category: "Fashion Films",   duration: "18:00", designer: "FilmFashion Studios",  year: 2024 },
  { id: "6",  title: "Paris Fashion Week Finale",        description: "The best moments of fashion week",                                   thumbnail: t(5),  videoUrl: v(5),  category: "Paris Fashion",   duration: "14:10", designer: "Fédération de la Mode",year: 2024 },
  { id: "7",  title: "Beauty and Style Tutorial",        description: "Makeup and hairstyling for events",                                  thumbnail: t(6),  videoUrl: v(6),  category: "Beauty & Style",  duration: "9:35",  designer: "Beauty Academy",       year: 2024 },
  { id: "8",  title: "Sustainable Fashion Movement",     description: "The ethical and sustainable fashion of the future",                  thumbnail: t(7),  videoUrl: v(7),  category: "Haute Couture",   duration: "11:45", designer: "Eco Couture",          year: 2024 },
  { id: "9",  title: "Vintage Style Evolution",          description: "How to create an authentic vintage look",                            thumbnail: t(8),  videoUrl: v(8),  category: "Street Fashion",  duration: "13:20", designer: "Vintage Collective",   year: 2024 },
  { id: "10", title: "Hermès Craftsmanship",             description: "The artisanal craftsmanship behind Hermès creations",                thumbnail: t(9),  videoUrl: v(9),  category: "Luxury Brands",   duration: "16:50", designer: "Hermès",               year: 2024 },
  { id: "11", title: "Summer Trends 2024",               description: "The colors and cuts of summer",                                      thumbnail: t(10), videoUrl: v(10), category: "Runway",          duration: "12:05", designer: "Trend Forecasters",    year: 2024 },
  { id: "12", title: "Designer Interview Series",        description: "Meet the most influential French designers",                         thumbnail: t(11), videoUrl: v(11), category: "Fashion Films",   duration: "22:30", designer: "Fashion Magazine",      year: 2024 },
  { id: "13", title: "Parisian Elegance Guide",          description: "The Parisian elegance code explained",                               thumbnail: t(12), videoUrl: v(12), category: "Paris Fashion",   duration: "10:40", designer: "Style Expert",          year: 2024 },
  { id: "14", title: "Hair Styling Secrets",             description: "The season's trending hairstyles",                                   thumbnail: t(13), videoUrl: v(13), category: "Beauty & Style",  duration: "8:15",  designer: "Salon Paris",           year: 2024 },
  { id: "15", title: "Couture Detail Masterpiece",       description: "The details that make the difference in haute couture",              thumbnail: t(14), videoUrl: v(14), category: "Haute Couture",   duration: "14:25", designer: "Couture Institute",     year: 2024 },
  { id: "16", title: "Casual Chic Combinations",         description: "Creating chic looks with basic pieces",                              thumbnail: t(15), videoUrl: v(15), category: "Street Fashion",  duration: "11:10", designer: "Style Coach",           year: 2024 },
  { id: "17", title: "Louis Vuitton Documentary",        description: "The history and heritage of the LVMH group",                         thumbnail: t(16), videoUrl: v(16), category: "Luxury Brands",   duration: "25:45", designer: "Louis Vuitton",         year: 2024 },
  { id: "18", title: "Footwear Fashion Showcase",        description: "Footwear from the greatest designers",                               thumbnail: t(17), videoUrl: v(17), category: "Runway",          duration: "13:50", designer: "Shoe Gallery",          year: 2024 },
  { id: "19", title: "Behind the Scenes",                description: "Behind the scenes of Paris Fashion Week",                            thumbnail: t(18), videoUrl: v(18), category: "Fashion Films",   duration: "17:20", designer: "Fashion TV",            year: 2024 },
  { id: "20", title: "French Silk Technique",            description: "The making of French silk",                                          thumbnail: t(19), videoUrl: v(19), category: "Paris Fashion",   duration: "12:40", designer: "Silk Masters",          year: 2024 },
  { id: "21", title: "Skincare for Models",              description: "Beauty routine of professional models",                              thumbnail: t(20), videoUrl: v(20), category: "Beauty & Style",  duration: "9:25",  designer: "Beauty Pro",            year: 2024 },
  { id: "22", title: "Avant-Garde Fashion Art",          description: "When fashion becomes art",                                           thumbnail: t(21), videoUrl: v(21), category: "Haute Couture",   duration: "16:15", designer: "Art Fashion",           year: 2024 },
  { id: "23", title: "Seasonal Transitions",             description: "How to transition from one season to the next with style",           thumbnail: t(22), videoUrl: v(22), category: "Street Fashion",  duration: "10:30", designer: "Fashion Blogger",       year: 2024 },
  { id: "24", title: "Gucci Heritage",                   description: "60 years of Gucci history and innovation",                           thumbnail: t(23), videoUrl: v(23), category: "Luxury Brands",   duration: "20:10", designer: "Gucci",                 year: 2024 },
  { id: "25", title: "Model Preparation Guide",          description: "How to prepare for a runway show",                                   thumbnail: t(24), videoUrl: v(24), category: "Runway",          duration: "14:45", designer: "Model Academy",         year: 2024 },
  { id: "26", title: "Cinematic Fashion Story",          description: "Visual storytelling of a complete collection",                       thumbnail: t(25), videoUrl: v(25), category: "Fashion Films",   duration: "19:35", designer: "Cinema Fashion",        year: 2024 },
  { id: "27", title: "Le Marais District Style",         description: "The style of the boutiques in Le Marais, Paris",                    thumbnail: t(26), videoUrl: v(26), category: "Paris Fashion",   duration: "11:20", designer: "Local Guide",           year: 2024 },
  { id: "28", title: "Makeup Artists Secrets",           description: "Techniques of the greatest Parisian makeup artists",                 thumbnail: t(27), videoUrl: v(27), category: "Beauty & Style",  duration: "13:55", designer: "Makeup Studio",         year: 2024 },
  { id: "29", title: "Embroidery Masterclass",           description: "The art of embroidery in haute couture",                             thumbnail: t(28), videoUrl: v(28), category: "Haute Couture",   duration: "15:10", designer: "Couture Atelier",       year: 2024 },
  { id: "30", title: "Minimalist Wardrobe Build",        description: "Building a minimalist and timeless wardrobe",                        thumbnail: t(29), videoUrl: v(29), category: "Street Fashion",  duration: "12:50", designer: "Style Minimalist",      year: 2024 },
  { id: "31", title: "Chanel Perfection",                description: "The philosophy and history of Chanel",                               thumbnail: t(30), videoUrl: v(30), category: "Luxury Brands",   duration: "21:30", designer: "Chanel",                year: 2024 },
  { id: "32", title: "Accessory Styling",                description: "How to accessorize to elevate your outfit",                          thumbnail: t(31), videoUrl: v(31), category: "Runway",          duration: "10:05", designer: "Accessory Expert",      year: 2024 },
  { id: "33", title: "Fashion Documentary Series",       description: "The social impact of fashion on society",                            thumbnail: t(32), videoUrl: v(32), category: "Fashion Films",   duration: "28:15", designer: "Documentary Films",     year: 2024 },
  { id: "34", title: "Champs-Élysées Fashion Walk",      description: "Shopping and style on the most beautiful avenue",                    thumbnail: t(33), videoUrl: v(33), category: "Paris Fashion",   duration: "9:40",  designer: "Paris Tours",           year: 2024 },
  { id: "35", title: "Eyebrow Design Techniques",        description: "Eyebrow sculpting according to your face shape",                     thumbnail: t(34), videoUrl: v(34), category: "Beauty & Style",  duration: "7:50",  designer: "Beauty Expert",         year: 2024 },
  { id: "36", title: "Draping Techniques",               description: "The art of draping in haute couture",                                thumbnail: t(35), videoUrl: v(35), category: "Haute Couture",   duration: "16:30", designer: "Couture School",        year: 2024 },
  { id: "37", title: "Urban Fashion Photography",        description: "Capturing street style in photos",                                   thumbnail: t(36), videoUrl: v(36), category: "Street Fashion",  duration: "11:15", designer: "Photography Studio",    year: 2024 },
  { id: "38", title: "Prada Innovation",                 description: "Technology and design in Prada collections",                         thumbnail: t(37), videoUrl: v(37), category: "Luxury Brands",   duration: "18:40", designer: "Prada",                 year: 2024 },
  { id: "39", title: "Gait and Posture Training",        description: "Improving your posture to appear more elegant",                      thumbnail: t(38), videoUrl: v(38), category: "Runway",          duration: "12:25", designer: "Posture Coach",         year: 2024 },
  { id: "40", title: "Fashion Art Collaboration",        description: "When artists meet designers",                                        thumbnail: t(39), videoUrl: v(39), category: "Fashion Films",   duration: "20:50", designer: "Art Collective",        year: 2024 },
  { id: "41", title: "Sacré-Cœur Fashion Walk",          description: "Authentic Parisian styles from Montmartre",                          thumbnail: t(40), videoUrl: v(40), category: "Paris Fashion",   duration: "10:15", designer: "Paris Vlog",            year: 2024 },
  { id: "42", title: "Color Theory in Fashion",          description: "Choosing the right colors for your complexion",                      thumbnail: t(41), videoUrl: v(41), category: "Beauty & Style",  duration: "13:10", designer: "Color Analyst",         year: 2024 },
  { id: "43", title: "Pattern Cutting Mastery",          description: "The secrets of pattern-making in couture",                           thumbnail: t(42), videoUrl: v(42), category: "Haute Couture",   duration: "17:45", designer: "Pattern Master",        year: 2024 },
  { id: "44", title: "Festival Fashion Styles",          description: "Dressing stylishly for fashion festivals",                           thumbnail: t(43), videoUrl: v(43), category: "Street Fashion",  duration: "9:30",  designer: "Festival Guide",        year: 2024 },
  { id: "45", title: "Versace Legacy",                   description: "The eternal impact of Versace on fashion",                           thumbnail: t(44), videoUrl: v(44), category: "Luxury Brands",   duration: "19:20", designer: "Versace",               year: 2024 },
  { id: "46", title: "Styling for Body Types",           description: "Style guide according to your body shape",                           thumbnail: t(45), videoUrl: v(45), category: "Runway",          duration: "14:55", designer: "Style Consultant",      year: 2024 },
  { id: "47", title: "Fashion Industry Documentary",     description: "The reality behind the scenes of the fashion industry",              thumbnail: t(0),  videoUrl: v(0),  category: "Fashion Films",   duration: "45:10", designer: "Indie Films",           year: 2024 },
  { id: "48", title: "Montmartre to Marais",             description: "A journey through the chic neighborhoods of Paris",                  thumbnail: t(1),  videoUrl: v(1),  category: "Paris Fashion",   duration: "12:05", designer: "Paris Explorer",        year: 2024 },
  { id: "49", title: "Fragrance Selection Guide",        description: "Choosing your fragrance by season and occasion",                     thumbnail: t(2),  videoUrl: v(2),  category: "Beauty & Style",  duration: "10:40", designer: "Perfume Specialist",    year: 2024 },
  { id: "50", title: "Final Haute Couture Vision",       description: "The futuristic vision of Parisian haute couture",                    thumbnail: t(3),  videoUrl: v(3),  category: "Haute Couture",   duration: "23:30", designer: "Future Fashion",        year: 2024 },
]);

const categoryMap: Record<string, string> = {
  "Haute Couture": "Haute Couture",
  "Street Fashion": "Mode de Rue",
  "Luxury Brands": "Marques de Luxe",
  Runway: "Defile",
  "Fashion Films": "Films de Mode",
  "Paris Fashion": "Mode Parisienne",
  "Beauty & Style": "Beaute et Style",
};

const designerMap: Record<string, string> = {
  "Urban Fashion": "Mode Urbaine",
  "Elite Models": "Modeles d Elite",
  "FilmFashion Studios": "Studios Cine Mode",
  "Beauty Academy": "Academie de Beaute",
  "Vintage Collective": "Collectif Vintage",
  "Trend Forecasters": "Analystes de Tendances",
  "Fashion Magazine": "Magazine de Mode",
  "Style Expert": "Experte du Style",
  "Couture Institute": "Institut de Couture",
  "Style Coach": "Coach de Style",
  "Shoe Gallery": "Galerie de Chaussures",
  "Fashion TV": "Tele Mode",
  "Silk Masters": "Maitres de la Soie",
  "Beauty Pro": "Pro Beaute",
  "Art Fashion": "Art de la Mode",
  "Fashion Blogger": "Blogueuse Mode",
  "Model Academy": "Academie de Mannequins",
  "Cinema Fashion": "Cinema Mode",
  "Local Guide": "Guide Local",
  "Makeup Studio": "Studio Maquillage",
  "Style Minimalist": "Style Minimaliste",
  "Accessory Expert": "Experte des Accessoires",
  "Documentary Films": "Films Documentaires",
  "Paris Tours": "Visites de Paris",
  "Beauty Expert": "Experte Beaute",
  "Couture School": "Ecole de Couture",
  "Photography Studio": "Studio Photo",
  "Posture Coach": "Coach Posture",
  "Art Collective": "Collectif d Art",
  "Paris Vlog": "Chronique Parisienne",
  "Color Analyst": "Analyste Couleurs",
  "Pattern Master": "Maitre du Patronage",
  "Festival Guide": "Guide des Festivals",
  "Style Consultant": "Consultante Style",
  "Indie Films": "Films Independants",
  "Paris Explorer": "Exploratrice Paris",
  "Perfume Specialist": "Specialiste Parfum",
  "Future Fashion": "Mode du Futur",
};

export const videos: Video[] = rawVideos.map((video, index) => {
  const translatedCategory = categoryMap[video.category] ?? video.category;
  const translatedDesigner = designerMap[video.designer] ?? video.designer;

  return {
    ...video,
    category: translatedCategory,
    designer: translatedDesigner,
    title: `${translatedCategory} - Edition ${index + 1}`,
    description: `Une video exclusive de ${translatedCategory.toLowerCase()} presentee par ${translatedDesigner}.`,
  };
});

export const categories = [
  "Haute Couture",
  "Mode de Rue",
  "Marques de Luxe",
  "Defile",
  "Films de Mode",
  "Mode Parisienne",
  "Beaute et Style",
];
