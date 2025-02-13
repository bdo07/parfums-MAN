import { createSlice } from "@reduxjs/toolkit";



const initialDoubleState = {
  womenn: [
    { id: 1 ,image:'/public/tousFemme/12.jpg', imageHover : '/public/tousFemme/122.jpg', title: "allure", description: "Parfum pour femme raffiné et envoûtant.", prix: 500 },
    { id: 2 ,image:'/public/tousFemme/1.jpg', imageHover : '/public/tousFemme/11.jpg', title: "Charme", description: "Une fragrance féminine captivante et intemporelle.", prix: 500 },
    { id: 3 ,image:'/public/tousFemme/allure 2.jpg', imageHover : '/public/tousFemme/allure 1.jpg', title: "Mystique", description: " Un parfum pour femme aux notes sensuelles et envoûtantes.", prix: 500 },
    { id: 4 ,image:'/public/tousFemme/18.jpg', imageHover : '/public/tousFemme/188.jpg', title: "Féminité", description: " Une essence délicate qui sublime la femme moderne.", prix: 500 },
    { id: 5 ,image:'/public/tousFemme/13.jpg', imageHover : '/public/tousFemme/133.jpg', title: "Élixir", description: " Un parfum sophistiqué et irrésistible pour femme.", prix: 500 },

    { id: 6 , image: '../public/tousFemme/bright crystal 1.jpg',imageHover:'../public/tousFemme/bright crystal 2.jpg', title: "Sensuelle", description: "Une fragrance enivrante qui révèle votre féminité.", prix: 500 },
    { id: 7 ,image:'/public/tousFemme/15.jpg', imageHover : '/public/tousFemme/155.jpg', title: "Divine", description:  "Un parfum élégant et sophistiqué pour la femme audacieuse", prix: 500 },
    { id: 8,image:'/public/tousFemme/99.jpg', imageHover : '/public/tousFemme/999.jpg', title: "Enchantement", description: "Une essence séduisante pour exprimer votre sensualité.", prix: 500 },
    { id: 9 ,image:'/public/tousFemme/allure.jpg', imageHover:  '/public/tousFemme/allure1.jpg', title: "Élégance", description: "Une essence florale et boisée pour un charme irrésistible.", prix: 83 },
    { id: 10 ,image:'/public/tousFemme/ange 2.jpg', imageHover:  '/public/tousFemme/ange1.jpg', title: "angel", description: "Une essence florale et boisée pour un charme irrésistible.", prix: 1200 },
    { id: 11 , image: '../public/tousFemme/black orchid.jpg',imageHover:'../public/tousFemme/black orchid1.jpg', title: " Désir", description: "Une essence séduisante pour exprimer votre sensualité.", prix: 500 },
    { id: 12 , image: '../public/tousFemme/cafe rose 2.jpg',imageHover:'../public/tousFemme/cafe rose 1.jpg', title: "siont", description: "Une essence séduisante pour exprimer votre sensualité.", prix: 500 },
    { id: 13 , image: '../public/tousFemme/Dolce nd gabana 2.jpg',imageHover:'../public/tousFemme/Dolce nd gabana 1.jpg', title: "Dolce nd gabana", description: "Un mélange raffiné de notes florales comme le jasmin et la rose, rehaussé de touches fruitées de mandarine et de pêche, sur un fond chaud de vanille et de bois.", prix: 500 },
    { id: 14 , image: '../public/tousFemme/bloom2.jpg',imageHover:'../public/tousFemme/bloom.jpg', title: "bloom", description: "Un parfum opulent aux notes envoûtantes de truffe noire, d'ylang-ylang et de jasmin, mêlées à des accents épicés et boisés sur un fond sensuel de vanille et de patchouli.", prix: 500 },
    { id: 15 , image: '../public/tousFemme/caban 1.jpg',imageHover:'../public/tousFemme/caban 2.jpg', title: "caban", description: "Un parfum opulent aux notes envoûtantes de truffe noire, d'ylang-ylang et de jasmin, mêlées à des accents épicés et boisés sur un fond sensuel de vanille et de patchouli.", prix: 500 },
    
    { id: 16 , image: '../public/tousFemme/flora2.jpg',imageHover:'../public/tousFemme/flora 1.jpg', title: "flora ", description: "Une fragrance sophistiquée mêlant l’intensité du café noir aux notes veloutées de rose, relevées par des accents épicés de poivre et un fond chaud de bois et d’encens.", prix: 500 },
    { id: 17 , image: '../public/tousFemme/garden 1.jpg',imageHover:'../public/tousFemme/garden 2.jpg', title: "pgarden ", description: "Un mélange raffiné de notes florales comme le jasmin et la rose, rehaussé de touches fruitées de mandarine et de pêche, sur un fond chaud de vanille et de bois.", prix: 500 },
    { id: 18 , image: '../public/tousFemme/her2.jpg',imageHover:'../public/tousFemme/her1.jpg', title: "parfum women", description: "Un parfum élégant aux notes florales de jasmin et de rose, mêlées à des touches fruitées de mandarine et pêche, sur un fond sensuel de vanille et de bois.", prix: 500 },
    { id: 19 , image: '../public/tousFemme/interdit 2.jpg',imageHover:'../public/tousFemme/interdit1.jpg', title: "her", description: "Un parfum opulent aux notes envoûtantes de truffe noire, d'ylang-ylang et de jasmin, mêlées à des accents épicés et boisés sur un fond sensuel de vanille et de patchouli.", prix: 500 },
    { id: 20 ,  image: '../public/tousFemme/jadore 3.jpg',imageHover:'../public/tousFemme/jadore 1.jpg', title: "j'adore", description: "Un parfum opulent aux notes envoûtantes de truffe noire, d'ylang-ylang et de jasmin, mêlées à des accents épicés et boisés sur un fond sensuel de vanille et de patchouli.", prix: 500 },
    { id: 21 , image: '../public/tousFemme/jean paul gaultier 2.jpg',imageHover:'../public/tousFemme/jean paul gaultier1.jpg', title: "jean paul gaultier", description: "Un parfum élégant aux notes florales de jasmin et de rose, mêlées à des touches fruitées de mandarine et pêche, sur un fond sensuel de vanille et de bois.", prix: 500 },
    { id: 22 , image: '../public/tousFemme/la belle 2.jpg',imageHover:'../public/tousFemme/la belle 1.jpg', title: "la belle", description: "Un parfum élégant aux notes florales de jasmin et de rose, mêlées à des touches fruitées de mandarine et pêche, sur un fond sensuel de vanille et de bois.", prix: 500 },
    { id: 23 , image: '../public/tousFemme/leclat 2.jpg',imageHover:'../public/tousFemme/leclat 1.jpg', title: "leclat ", description: "Une fragrance sophistiquée mêlant l’intensité du café noir aux notes veloutées de rose, relevées par des accents épicés de poivre et un fond chaud de bois et d’encens.", prix: 500 },
    { id: 24 , image: '../public/tousFemme/mon paris 2.jpg',imageHover:'../public/tousFemme/mon paris 1.jpg', title: "mon paris", description: "Un parfum opulent aux notes envoûtantes de truffe noire, d'ylang-ylang et de jasmin, mêlées à des accents épicés et boisés sur un fond sensuel de vanille et de patchouli.", prix: 500 },
    { id: 25 , image: '../public/tousFemme/oud isaphan 1.jpg',imageHover:'../public/tousFemme/oud isaphan 2.jpg', title: "oud isaphan", description: "Un parfum élégant aux notes florales de jasmin et de rose, mêlées à des touches fruitées de mandarine et pêche, sur un fond sensuel de vanille et de bois.", prix: 500 },
    { id: 26 , image: '../public/tousFemme/pi.jpg',imageHover:'../public/tousFemme/pi1.jpg', title: "pi", description: "Un parfum opulent aux notes envoûtantes de truffe noire, d'ylang-ylang et de jasmin, mêlées à des accents épicés et boisés sur un fond sensuel de vanille et de patchouli.", prix: 500 },
    { id: 27 , image: '../public/tousFemme/saharienne.jpg',imageHover:'../public/tousFemme/saharienne1.jpg', title: "saharienne", description: "ne fragrance sophistiquée mêlant l’intensité du café noir aux notes veloutées de rose, relevées par des accents épicés de poivre et un fond chaud de bois et d’encens.", prix: 500 },
    { id: 28 , image: '../public/tousFemme/mon paris 2.jpg',imageHover:'../public/tousFemme/mon paris 1.jpg', title: "mon paris", description: "Un parfum opulent aux notes envoûtantes de truffe noire, d'ylang-ylang et de jasmin, mêlées à des accents épicés et boisés sur un fond sensuel de vanille et de patchouli.", prix: 1200 },
    { id: 29 , image: '../public/tousFemme/oud isaphan 1.jpg',imageHover:'../public/tousFemme/oud isaphan 2.jpg', title: "oud isaphan", description: "Un parfum élégant aux notes florales de jasmin et de rose, mêlées à des touches fruitées de mandarine et pêche, sur un fond sensuel de vanille et de bois.", prix: 780 },
    { id: 30 , image: '../public/tousFemme/pi.jpg',imageHover:'../public/tousFemme/pi1.jpg', title: "pi", description: "Un parfum opulent aux notes envoûtantes de truffe noire, d'ylang-ylang et de jasmin, mêlées à des accents épicés et boisés sur un fond sensuel de vanille et de patchouli.", prix: 800 },
    { id: 31 , image: '../public/tousFemme/saharienne.jpg',imageHover:'../public/tousFemme/saharienne1.jpg', title: "saharienne", description: "ne fragrance sophistiquée mêlant l’intensité du café noir aux notes veloutées de rose, relevées par des accents épicés de poivre et un fond chaud de bois et d’encens.", prix: 790 },

   
    ],
  men: [
    { id: 32,image:'/public/homme/5.jpg',imageHover:"/public/homme/51.jpeg", title: "valentino homme", description: "En cœur, la lavande apporte une touche aromatique et élégante, tandis que le poivre rose et l’élémi renforcent l’intensité épicée du parfum. ", prix: 300 },
    { id: 33 ,image:'/public/homme/6.jpg',imageHover:"/public/homme/61.jpeg", title: "sauvage", description: "Le fond du parfum est dominé par des notes boisées et résineuses, avec du bois de santal, du patchouli et du vétiver, qui lui confèrent une profondeur crémeuse et terreuse. ", prix: 450 },
    { id: 34,image:'/public/homme/7.jpg',imageHover:"/public/homme/71.jpeg", title: "polo", description: "Le cœur du parfum est dominé par des notes épicées et boisées avec du pin, du girofle et du poivre, qui créent une sensation chaleureuse et intense. ", prix: 700 },
    { id: 35,image:'/public/homme/8.jpg',imageHover:"/public/homme/81.jpeg", title: "le beau", description: "le fond est dominé par l’ambroxan, une molécule boisée et minérale qui donne une profondeur sensuelle, associée à des notes de cèdre et vétiver pour une signature masculine et raffinée.", prix: 850 },

    { id: 36 ,image:'/public/tousHomme/bleu1.jpg', imageHover:'../public/tousHomme/bleu.jpg', title: "bleu channel", description: "Une fragrance fraîche et boisée alliant des notes d’agrumes vifs, de gingembre épicé et de poivre rose, sur un fond sophistiqué de cèdre, d’encens et de bois de santal.", prix: 620 },
    { id: 37 ,image:'/public/tousHomme/dylan blue.jpg', imageHover:'../public/tousHomme/dylan bleu1.jpg', title: "dylan blue", description: "Une fragrance vibrante et masculine mêlant des notes fraîches d’agrumes et de bergamote, relevées par des accents épicés de poivre noir et d’encens.", prix: 480 },
    { id: 38 ,image:'/public/tousHomme/elixir.jpg', imageHover:'../public/tousHomme/elixir1.jpg', title: "elixir", description: "Une fragrance puissante et sophistiquée mêlant des notes fraîches de pamplemousse, des épices vibrantes comme la cannelle et la muscade, sur un fond boisé intense de lavande, de réglisse et de santal.", prix: 950 },
    { id: 39 ,image:'/public/tousHomme/for men.jpg', imageHover:'../public/tousHomme/for men1.jpg', title: "for men", description: "Une fragrance élégante et intemporelle mêlant des notes fraîches d’agrumes et de néroli, réchauffées par des accents épicés de poivre et de cardamome.", prix: 610 },
    { id: 40 ,image:'/public/tousHomme/gentle.jpg', imageHover:'../public/tousHomme/gentle1.jpg', title: "gentle", description: "Une fragrance fraîche et boisée alliant des notes d’agrumes vifs, de gingembre épicé et de poivre rose, sur un fond sophistiqué de cèdre, d’encens et de bois de santal.", prix: 840 },
    { id: 41 ,image:'/public/tousHomme/guilty.jpg', imageHover:'../public/tousHomme/guilty1.jpg', title: "guilty", description: "Une fragrance vibrante et masculine mêlant des notes fraîches d’agrumes et de bergamote, relevées par des accents épicés de poivre noir et d’encens.", prix: 120 },
    { id: 42 ,image:'/public/tousHomme/hero.jpg', imageHover:'../public/tousHomme/hero1.jpg', title: "hero", description: "Une fragrance puissante et sophistiquée mêlant des notes fraîches de pamplemousse, des épices vibrantes comme la cannelle et la muscade, sur un fond boisé intense de lavande, de réglisse et de santal.", prix: 350 },
    { id: 43 ,image:'/public/tousHomme/inter.jpg', imageHover:'../public/tousHomme/inter1.jpg', title: "inter", description: "Une fragrance fraîche et boisée alliant des notes d’agrumes vifs, de gingembre épicé et de poivre rose, sur un fond sophistiqué de cèdre, d’encens et de bois de santal.", prix: 590 },
    { id: 44 ,image:'/public/tousHomme/k.jpg', imageHover:'../public/tousHomme/k1.jpg', title: "k", description: "Une fragrance vibrante et masculine mêlant des notes fraîches d’agrumes et de bergamote, relevées par des accents épicés de poivre noir et d’encens.", prix: 300 },
    { id: 45 ,image:'/public/tousHomme/la nuit de homme1.jpg', imageHover:'../public/tousHomme/la nuit de homme.jpg', title: "la nuit de homme", description: "Une fragrance puissante et sophistiquée mêlant des notes fraîches de pamplemousse, des épices vibrantes comme la cannelle et la muscade, sur un fond boisé intense de lavande, de réglisse et de santal.", prix: 630 },
    { id: 46 ,image:'/public/tousHomme/le beau.jpg', imageHover:'../public/tousHomme/le beau1.jpg', title: "le beau", description: "Une fragrance fraîche et boisée alliant des notes d’agrumes vifs, de gingembre épicé et de poivre rose, sur un fond sophistiqué de cèdre, d’encens et de bois de santal.", prix: 850 },
    { id: 47 ,image:'/public/tousHomme/le male bleu.jpg', imageHover:'../public/tousHomme/le male essence.jpg', title: "le male bleu", description: "Une fragrance vibrante et masculine mêlant des notes fraîches d’agrumes et de bergamote, relevées par des accents épicés de poivre noir et d’encens.", prix: 620 },
    { id: 48 ,image:'/public/tousHomme/le male.jpg', imageHover:'../public/tousHomme/le male1.jpg', title: "le male", description: "Une fragrance puissante et sophistiquée mêlant des notes fraîches de pamplemousse, des épices vibrantes comme la cannelle et la muscade, sur un fond boisé intense de lavande, de réglisse et de santal.", prix: 1150 },
    { id: 49 ,image:'/public/tousHomme/libre 2.jpg', imageHover:'../public/tousHomme/libre 1.jpg', title: "libre ", description: "Une fragrance élégante et intemporelle mêlant des notes fraîches d’agrumes et de néroli, réchauffées par des accents épicés de poivre et de cardamome.", prix: 300 },
    { id: 50 ,image:'/public/tousHomme/lightblue.jpg', imageHover:'../public/tousHomme/lightblue1.jpg', title: "lightblue", description: "Une fragrance fraîche et boisée alliant des notes d’agrumes vifs, de gingembre épicé et de poivre rose, sur un fond sophistiqué de cèdre, d’encens et de bois de santal.", prix: 700 },
    { id: 51 ,image:'/public/tousHomme/made.jpg', imageHover:'../public/tousHomme/made1.jpg', title: "made", description: "Une fragrance vibrante et masculine mêlant des notes fraîches d’agrumes et de bergamote, relevées par des accents épicés de poivre noir et d’encens.", prix: 590 },
    { id: 52 ,image:'/public/tousHomme/memoire.jpg', imageHover:'../public/tousHomme/memoire1.jpg', title: "memoire", description: "Une fragrance élégante et intemporelle mêlant des notes fraîches d’agrumes et de néroli, réchauffées par des accents épicés de poivre et de cardamome.", prix: 430 },
    { id: 53 ,image:'/public/tousHomme/myslf.jpg', imageHover:'../public/tousHomme/myslf1.jpg', title: "myslf", description: "Une fragrance puissante et sophistiquée mêlant des notes fraîches de pamplemousse, des épices vibrantes comme la cannelle et la muscade, sur un fond boisé intense de lavande, de réglisse et de santal.", prix: 320 },
    { id: 54 ,image:'/public/tousHomme/noirr.jpg', imageHover:'../public/tousHomme/noir1.jpg', title: "noirr", description: "Une fragrance fraîche et boisée alliant des notes d’agrumes vifs, de gingembre épicé et de poivre rose, sur un fond sophistiqué de cèdre, d’encens et de bois de santal.", prix: 740 },
    { id: 55 ,image:'/public/tousHomme/only.jpg', imageHover:'../public/tousHomme/only1.jpg', title: "only", description: "Une fragrance vibrante et masculine mêlant des notes fraîches d’agrumes et de bergamote, relevées par des accents épicés de poivre noir et d’encens.", prix: 800 },


  ],
};

 

const productsSlice = createSlice({
  name: 'tousproduct',
  initialState: initialDoubleState,
  reducers: {},
});

export const productsReducer = productsSlice.reducer;
