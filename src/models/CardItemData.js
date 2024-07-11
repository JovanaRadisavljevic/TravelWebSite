export default class CardItemData {
  constructor(id, nazivAkcije, tezina, kilometraza, datumOd, datumDo, vodic, src, label, path, text, description) {
    this.id = id;
    this.nazivAkcije = nazivAkcije;
    this.tezina = tezina;
    this.kilometraza = kilometraza;
    this.datumOd = datumOd;
    this.datumDo = datumDo;
    this.vodic = vodic;
    this.src = src;
    this.label = label;
    this.path = path;
    this.text = text;
    this.description = description;
  }
}

export const cardItemsData = [
  new CardItemData(
    1,
    "Triglav",
    "Srednja",
    "20km",
    "2024-07-01",
    "2024-07-03",
    "Petar Petrović",
    "/images/triglav.jpg",
    "Avantura",
    "/planinarska_akcija",
    "Triglav - Ikonični Vrh Slovenskih Alpa",
    "Triglav je najviši vrh Slovenije, visok 2,864 metara, smešten u Triglavskom nacionalnom parku. Poznat je po svojoj spektakularnoj lepoti i kulturnom značaju kao simbol slovenskih Alpa. Planina privlači planinare iz celog sveta svojim izazovnim stazama i panoramama koje oduzimaju dah. Okružen je bujnim zelenilom, kristalno čistim jezerima i alpskim dolinama, čineći ga idealnim mestom za istraživanje prirodnih lepota."
  ),
  new CardItemData(
    2,
    "Dolomiti",
    "Teška",
    "15km",
    "2024-07-10",
    "2024-07-12",
    "Marko Marković",
    "/images/dolomiti.jpg",
    "Avantura",
    "/planinarska_akcija",
    "Dolomiti - Raj za Planinare i Ljubitelje Prirode",
    "Dolomiti su planinski lanac u severnoj Italiji, poznat po svojim karakterističnim stenama, visokim vrhovima i izuzetnim alpskim pejzažima. Ovi planinski vrhovi, koji su deo UNESCO-ve svetske baštine, privlače planinare, alpiniste i ljubitelje prirode svojim raznovrsnim aktivnostima. Dolomiti nude ne samo spektakularne poglede na vrhove, zelene doline i kristalno čista jezera, već i bogatu istoriju i kulturno nasleđe koje se reflektuje u lokalnoj arhitekturi i tradicijama."
  ),
  new CardItemData(
    3,
    "Ararat",
    "Teška",
    "20km",
    "2024-05-10",
    "2024-05-18",
    "Marko Marković",
    "/images/ararat.jpg",
    "Avantura",
    "/planinarska_akcija",
    "Ararat - Mistični Vrh Punu Legendi i Avantura",
    "Ararat je monumentalna planina u Turskoj, poznata po svojoj istorijskoj i kulturnoj važnosti. Sa visinom od 5,137 metara, Ararat je legendarno mesto gde se prema Bibliji smatra da je Nojeva barka pronašla utočište nakon Potopa. Planina je domaćin bogate flore i faune, sa svojim vrhovima prekrivenim snegom tokom većeg dela godine. Pored svog značaja u religijskim tekstovima, Ararat privlači i avanturiste i istraživače zbog svoje izazovne staze za penjanje i nezaboravnih pejzaža."
  ),
  new CardItemData(
    4,
    "Tatare",
    "Laka",
    "20km",
    "2024-08-10",
    "2024-08-15",
    "Marko Marković",
    "/images/tatre.jpg",
    "Adrenalin",
    "/planinarska_akcija",
    "Tatre - Biser Centralne Evrope za Planinare",
    "Tatre su planinski lanac koji se prostire između Slovačke i Poljske, poznat po svojim spektakularnim vrhovima, kristalno čistim jezerima i bujnim šumama. Ovaj deo Karpati planinskog sistema nudi raznolike staze za planinarenje, od laganih do izazovnih ruta koje privlače posetioce svih nivoa iskustva. Tatre su dom mnogim retkim biljnim i životinjskim vrstama, čineći ih važnim biodiverzitetnim područjem."
  ),
  new CardItemData(
    5,
    "Maganik",
    "Srednje teška",
    "12km",
    "2024-03-10",
    "2024-03-18",
    "Marko Marković",
    "/images/maganik.png",
    "Adrenalin",
    "/planinarska_akcija",
    "Maganik - Skriveni Dragulj Crnogorskih Planina",
    "Maganik je skriveni dragulj crnogorskih planina, poznat po svojoj divljini i netaknutoj prirodi. Sa vrhovima koji dosežu visinu od oko 2,000 metara, Maganik pruža izazovne staze za planinare i spektakularne poglede na okolne krajeve Crne Gore. Ova planina obiluje bujnom vegetacijom, kristalno čistim rekama i slikovitim pejzažima koji privlače ljubitelje prirode i istraživače iz raznih delova sveta."
  ),
];
