export interface Product {
  id: number;
  name: string;
  imgUrl: string;
}

export interface Category {
  id: number;
  categorie: string;
  color: string;
  products: Product[];
}

export const PRODUCTS: Category[] = [
  {
    id: 0,
    categorie: "Lancement",
    color: "#FF00F5",
    products: [],
  },
  {
    id: 1,
    categorie: "gastro entérologie",
    color: "#FF4500", // matte red
    products: [
      {
        id: 1,
        name: "ircolax",
        imgUrl: require("../products/gastro-enterologie/ircolax.jpg"),
      },
      {
        id: 2,
        name: "rectolax",
        imgUrl: require("../products/gastro-enterologie/rectolax.jpg"),
      },
    ],
  },
  {
    id: 2,
    categorie: "gynécologie",
    color: "#FFB74D", // matte orange
    products: [
      {
        id: 1,
        name: "candidax ovules",
        imgUrl: require("../products/gynecologie/candidax-ovules.jpg"),
      },
    ],
  },
  {
    id: 3,
    categorie: "métabolisme energie",
    color: "#00BFFF", // matte yellow
    products: [
      {
        id: 1,
        name: "maxitone ampoules buvables",
        imgUrl: require("../products/metabolisme-energie/maxitone-ampoules.jpg"),
      },
      {
        id: 2,
        name: "maxitone comprimés effervescants",
        imgUrl: require("../products/metabolisme-energie/maxitone-effervescent.jpg"),
      },
      {
        id: 3,
        name: "nurax tonus",
        imgUrl: require("../products/metabolisme-energie/nurax-tonus.jpg"),
      },
      {
        id: 4,
        name: "neovimag plus",
        imgUrl: require("../products/metabolisme-energie/neovimag-plus.jpg"),
      },
      {
        id: 5,
        name: "theramag 375",
        imgUrl: require("../products/metabolisme-energie/theramag375.jpg"),
      },
    ],
  },
  {
    id: 4,
    categorie: "système respiratoire",
    color: "#FF1493", // pastel green
    products: [
      {
        id: 1,
        name: "apixol sirop",
        imgUrl: require("../products/systeme-respiratoire/apixol-sirop.jpg"),
      },
      {
        id: 2,
        name: "apixol comprimés à sucer",
        imgUrl: require("../products/systeme-respiratoire/apixol-cs.jpg"),
      },
      {
        id: 3,
        name: "apixol spray",
        imgUrl: require("../products/systeme-respiratoire/apixol-spray.jpg"),
      },
      {
        id: 4,
        name: "fitopolis sirop",
        imgUrl: require("../products/systeme-respiratoire/fitopolis-sirop.jpg"),
      },
      {
        id: 5,

        name: "fitopolis comprimés à sucer",
        imgUrl: require("../products/systeme-respiratoire/fitopolis-cs.jpg"),
      },
      {
        id: 6,
        name: "fitopolis spray",
        imgUrl: require("../products/systeme-respiratoire/fitopolis-spray.jpg"),
      },
      {
        id: 7,
        name: "fitorax sirop",
        imgUrl: require("../products/systeme-respiratoire/fitorax-sirop.jpg"),
      },
      {
        id: 8,
        name: "fitorax comprimés à sucer",
        imgUrl: require("../products/systeme-respiratoire/fitorax-cs.jpg"),
      },
      {
        id: 9,
        name: "fitorax spray",
        imgUrl: require("../products/systeme-respiratoire/fitorax-spray.jpg"),
      },
      {
        id: 10,
        name: "tossedyl",
        imgUrl: require("../products/systeme-respiratoire/tossedyl.jpg"),
      },
      {
        id: 11,
        name: "rhinolaya",
        imgUrl: require("../products/systeme-respiratoire/rhinolaya-gamme.jpg"),
      },
      {
        id: 12,
        name: "nobios",
        imgUrl: require("../products/systeme-respiratoire/nobios.jpg"),
      },
      {
        id: 13,
        name: "neovizinc",
        imgUrl: require("../products/systeme-respiratoire/neovizinc.jpg"),
      },
    ],
  },
];
