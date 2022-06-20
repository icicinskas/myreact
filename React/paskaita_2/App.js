import "./App.css";
import Colors from "./components_v1/Colors";
import Form from "./components_v1/Form";
import UserProfile from "./components_v1/UserProfile";
import UsersProfile from "./components_v1/UsersProfile";
import FakeStore from "./components_v1/FakeStore";

function App() {
  const userNames = ["Jonas", "Petras", "Tadas"];
  const userPhoto =
    "https://images.unsplash.com/photo-1655330169962-d100e23d2aab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60";

  const posts = [
    {
      username: "Vytas",
      title: "Prie Seimo kilo muštynės: susikibo Šustauskas ir Subotinas",
      image:
        "https://images.unsplash.com/photo-1652849087560-dca05a9e95cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      description:
        "Ketvirtadienį prie Seimo rinkosi prieštaringai vertinami Vytauto Šustausko vedami piketuotojai. Jiems į šuns dienas dedant Lietuvos politiką bei Vakarų valstybes kilo susirėmimas tarp piketo lyderio ir Jurijaus Subotino. Į muštynes laiku sureagavo policijos pareigūnai. Palaikom Vytautą. ",
      id: "1TuVMvrLbE",
      timestamp: 1607003792823,
    },
    {
      username: "kramwalkis",
      title: "pavogiau sita posta is kazkokio kito zmogaus",
      image:
        "https://media3.giphy.com/media/iI4vhciiVh2b3j9sgo/giphy-downsized-large.gif",
      description:
        "hello, cia yra vagyste is kazkokio kito zmogaus, nieko nepadarysi, grazus paveikslelis tai ir pavogiau",
      id: "3kwNv7i6BV",
      timestamp: 1607090863880,
    },
    {
      username: "Renova",
      title:
        "Alex Grey is an American visionary artist, author, teacher, and Vajrayana practitioner.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/57/Alex_Grey_2013.jpg",
      description:
        "He and his wife Allyson Grey are the co-founders of The Chapel of Sacred Mirrors (CoSM), a non-profit church supporting Visionary Culture in Wappingers Falls, New York.",
      id: "gYev0Q48Cu",
      timestamp: 1606831307075,
    },
  ];

  const color = [
    {
      name: "INDIANRED",
      hex: "#CD5C5C",
      rgb: "RGB(205, 92, 92)",
      families: ["red", "brown"],
    },
    {
      name: "LIGHTCORAL",
      hex: "#F08080",
      rgb: "RGB(240, 128, 128)",
      families: ["red", "pink", "coral", "light"],
    },
    {
      name: "SALMON",
      hex: "#FA8072",
      rgb: "RGB(250, 128, 114)",
      families: ["red", "pink", "orange", "salmon"],
    },
    {
      name: "DARKSALMON",
      hex: "#E9967A",
      rgb: "RGB(233, 150, 122)",
      families: ["red", "pink", "orange", "salmon", "dark"],
    },
    {
      name: "LIGHTSALMON",
      hex: "#FFA07A",
      rgb: "RGB(255, 160, 122)",
      families: ["red", "pink", "orange", "salmon", "light"],
    },
    {
      name: "CRIMSON",
      hex: "#DC143C",
      rgb: "RGB(220, 20, 60)",
      families: ["red"],
    },
    {
      name: "RED",
      hex: "#FF0000",
      rgb: "RGB(255, 0, 0)",
      families: ["red"],
    },
    {
      name: "DARKRED",
      hex: "#8B0000",
      rgb: "RGB(139, 0, 0)",
      families: ["red", "dark"],
    },
    {
      name: "PINK",
      hex: "#FFC0CB",
      rgb: "RGB(255, 192, 203)",
      families: ["pink"],
    },
    {
      name: "LIGHTPINK",
      hex: "#FFB6C1",
      rgb: "RGB(255, 182, 193)",
      families: ["pink", "light"],
    },
    {
      name: "HOTPINK",
      hex: "#FF69B4",
      rgb: "RGB(255, 105, 180)",
      families: ["pink", "hot"],
    },
    {
      name: "DEEPPINK",
      hex: "#FF1493",
      rgb: "RGB(255, 20, 147)",
      families: ["pink", "deep"],
    },
    {
      name: "MEDIUMVIOLETRED",
      hex: "#C71585",
      rgb: "RGB(199, 21, 133)",
      families: ["pink", "purple", "violet", "medium"],
    },
    {
      name: "PALEVIOLETRED",
      hex: "#DB7093",
      rgb: "RGB(219, 112, 147)",
      families: ["pink", "pale", "violet"],
    },
    {
      name: "CORAL",
      hex: "#FF7F50",
      rgb: "RGB(255, 127, 80)",
      families: ["orange", "coral"],
    },
    {
      name: "TOMATO",
      hex: "#FF6347",
      rgb: "RGB(255, 99, 71",
      families: ["orange", "red"],
    },
    {
      name: "ORANGERED",
      hex: "#FF4500",
      rgb: "RGB(255, 69, 0)",
      families: ["orange", "red"],
    },
    {
      name: "DARKORANGE",
      hex: "#FF8C00",
      rgb: "RGB(255, 140, 0)",
      families: ["orange", "dark"],
    },
    {
      name: "ORANGE",
      hex: "#FFA500",
      rgb: "RGB(255, 165, 0)",
      families: ["orange"],
    },
    {
      name: "GOLD",
      hex: "#FFD700",
      rgb: "RGB(255, 215, 0)",
      families: ["yellow"],
    },
    {
      name: "YELLOW",
      hex: "#FFFF00",
      rgb: "RGB(255, 255, 0)",
      families: ["yellow"],
    },
    {
      name: "LIGHTYELLOW",
      hex: "#FFFFE0",
      rgb: "RGB(255, 255, 224)",
      families: ["yellow", "light"],
    },
    {
      name: "LEMONCHIFFON",
      hex: "#FFFACD",
      rgb: "RGB(255, 250, 205)",
      families: ["yellow", "lemon"],
    },
    {
      name: "LIGHTGOLDENRODYELLOW",
      hex: "#FAFAD2",
      rgb: "RGB(250, 250, 210)",
      families: ["yellow", "light", "goldenrod", "tan"],
    },
    {
      name: "PAPAYAWHIP",
      hex: "#FFEFD5",
      rgb: "RGB(255, 239, 213)",
      families: ["pink", "tan"],
    },
    {
      name: "MOCCASIN",
      hex: "#FFE4B5",
      rgb: "RGB(255, 228, 181)",
      families: ["pink", "tan"],
    },
    {
      name: "PEACHPUFF",
      hex: "#FFDAB9",
      rgb: "RGB(255, 218, 185)",
      families: ["pink", "orange", "peach"],
    },
    {
      name: "PALEGOLDENROD",
      hex: "#EEE8AA",
      rgb: "RGB(238, 232, 170)",
      families: ["yellow", "tan", "pale", "goldenrod"],
    },
    {
      name: "KHAKI",
      hex: "#F0E68C",
      rgb: "RGB(240, 230, 140)",
      families: ["yellow", "tan", "khaki"],
    },
    {
      name: "DARKKHAKI",
      hex: "#BDB76B",
      rgb: "RGB(189, 183, 107)",
      families: ["yellow", "tan", "khaki", "dark"],
    },
    {
      name: "LAVENDER",
      hex: "#E6E6FA",
      rgb: "RGB(230, 230, 250)",
      families: ["purple"],
    },
    {
      name: "THISTLE",
      hex: "#D8BFD8",
      rgb: "RGB(216, 191, 216)",
      families: ["purple"],
    },
    {
      name: "PLUM",
      hex: "#DDA0DD",
      rgb: "RGB(221, 160, 221)",
      families: ["purple"],
    },
    {
      name: "VIOLET",
      hex: "#EE82EE",
      rgb: "RGB(238, 130, 238)",
      families: ["purple", "violet", "pink"],
    },
    {
      name: "ORCHID",
      hex: "#DA70D6",
      rgb: "RGB(218, 112, 214)",
      families: ["purple", "orchid"],
    },
    {
      name: "FUCHSIA",
      hex: "#FF00FF",
      rgb: "RGB(255, 0, 255)",
      families: ["purple", "pink"],
    },
    {
      name: "MAGENTA",
      hex: "#FF00FF",
      rgb: "RGB(255, 0, 255)",
      families: ["purple", "pink", "magenta"],
    },
    {
      name: "MEDIUMORCHID",
      hex: "#BA55D3",
      rgb: "RGB(186, 85, 211)",
      families: ["purple", "orchid", "medium"],
    },
    {
      name: "MEDIUMPURPLE",
      hex: "#9370DB",
      rgb: "RGB(147, 112, 219)",
      families: ["purple", "medium"],
    },
    {
      name: "REBECCAPURPLE",
      hex: "#663399",
      rgb: "RGB(102, 51, 153)",
      families: ["purple", "blue"],
    },
    {
      name: "BLUEVIOLET",
      hex: "#8A2BE2",
      rgb: "RGB(138, 43, 226)",
      families: ["purple", "blue", "violet"],
    },
    {
      name: "DARKVIOLET",
      hex: "#9400D3",
      rgb: "RGB(148, 0, 211)",
      families: ["purple", "dark", "violet"],
    },
    {
      name: "DARKORCHID",
      hex: "#9932CC",
      rgb: "RGB(153, 50, 204)",
      families: ["purple", "dark", "orchid"],
    },
    {
      name: "DARKMAGENTA",
      hex: "#8B008B",
      rgb: "RGB(139, 0, 139)",
      families: ["purple", "dark", "magenta"],
    },
    {
      name: "PURPLE",
      hex: "#800080",
      rgb: "RGB(128, 0, 128)",
      families: ["purple"],
    },
    {
      name: "INDIGO",
      hex: "#4B0082",
      rgb: "RGB(75, 0, 130)",
      families: ["purple", "blue"],
    },
    {
      name: "SLATEBLUE",
      hex: "#6A5ACD",
      rgb: "RGB(106, 90, 205)",
      families: ["purple", "blue", "slate"],
    },
    {
      name: "DARKSLATEBLUE",
      hex: "#483D8B",
      rgb: "RGB(72, 61, 139)",
      families: ["purple", "blue", "slate", "dark"],
    },
    {
      name: "MEDIUMSLATEBLUE",
      hex: "#7B68EE",
      rgb: "RGB(123, 104, 238)",
      families: ["purple", "blue", "slate", "medium"],
    },
    {
      name: "GREENYELLOW",
      hex: "#ADFF2F",
      rgb: "RGB(173, 255, 47)",
      families: ["green", "yellow"],
    },
    {
      name: "CHARTREUSE",
      hex: "#7FFF00",
      rgb: "RGB(127, 255, 0)",
      families: ["green"],
    },
    {
      name: "LAWNGREEN",
      hex: "#7CFC00",
      rgb: "RGB(124, 252, 0)",
      families: ["green"],
    },
    {
      name: "LIME",
      hex: "#00FF00",
      rgb: "RGB(0, 255, 0)",
      families: ["green"],
    },
    {
      name: "LIMEGREEN",
      hex: "#32CD32",
      rgb: "RGB(50, 205, 50)",
      families: ["green"],
    },
    {
      name: "PALEGREEN",
      hex: "#98FB98",
      rgb: "RGB(152, 251, 152)",
      families: ["green", "pale"],
    },
    {
      name: "LIGHTGREEN",
      hex: "#90EE90",
      rgb: "RGB(144, 238, 144)",
      families: ["green", "light"],
    },
    {
      name: "MEDIUMSPRINGGREEN",
      hex: "#00FA9A",
      rgb: "RGB(0, 250, 154)",
      families: ["green", "medium", "spring"],
    },
    {
      name: "SPRINGGREEN",
      hex: "#00FF7F",
      rgb: "RGB(0, 255, 127)",
      families: ["green", "spring"],
    },
    {
      name: "MEDIUMSEAGREEN",
      hex: "#3CB371",
      rgb: "RGB(60, 179, 113)",
      families: ["green", "sea", "medium"],
    },
    {
      name: "SEAGREEN",
      hex: "#2E8B57",
      rgb: "RGB(46, 139, 87)",
      families: ["green", "sea"],
    },
    {
      name: "FORESTGREEN",
      hex: "#228B22",
      rgb: "RGB(34, 139, 34)",
      families: ["green", "forest"],
    },
    {
      name: "GREEN",
      hex: "#008000",
      rgb: "RGB(0, 128, 0)",
      families: ["green"],
    },
    {
      name: "DARKGREEN",
      hex: "#006400",
      rgb: "RGB(0, 100, 0)",
      families: ["green", "dark"],
    },
    {
      name: "YELLOWGREEN",
      hex: "#9ACD32",
      rgb: "RGB(154, 205, 50)",
      families: ["green", "yellow"],
    },
    {
      name: "OLIVEDRAB",
      hex: "#6B8E23",
      rgb: "RGB(107, 142, 35)",
      families: ["green", "olive"],
    },
    {
      name: "OLIVE",
      hex: "#6B8E23",
      rgb: "RGB(128, 128, 0)",
      families: ["green", "olive"],
    },
    {
      name: "DARKOLIVEGREEN",
      hex: "#556B2F",
      rgb: "RGB(85, 107, 47)",
      families: ["green", "olive", "dark"],
    },
    {
      name: "MEDIUMAQUAMARINE",
      hex: "#66CDAA",
      rgb: "RGB(102, 205, 170)",
      families: ["green", "blue", "aquamarine", "medium"],
    },
    {
      name: "DARKSEAGREEN",
      hex: "#8FBC8B",
      rgb: "RGB(143, 188, 139)",
      families: ["green", "sea", "dark"],
    },
    {
      name: "LIGHTSEAGREEN",
      hex: "#20B2AA",
      rgb: "RGB(32, 178, 170)",
      families: ["green", "blue", "sea", "light"],
    },
    {
      name: "DARKCYAN",
      hex: "#008B8B",
      rgb: "RGB(0, 139, 139)",
      families: ["green", "blue", "cyan", "dark"],
    },
    {
      name: "TEAL",
      hex: "#008080",
      rgb: "RGB(0, 128, 128)",
      families: ["green", "blue"],
    },
    {
      name: "AQUA",
      hex: "#00FFFF",
      rgb: "RGB(0, 255, 255)",
      families: ["blue", "aqua"],
    },
    {
      name: "CYAN",
      hex: "#00FFFF",
      rgb: "RGB(0, 255, 255)",
      families: ["blue", "cyan"],
    },
    {
      name: "LIGHTCYAN",
      hex: "#E0FFFF",
      rgb: "RGB(224, 255, 255)",
      families: ["blue", "cyan", "light"],
    },
    {
      name: "PALETURQUOISE",
      hex: "#AFEEEE",
      rgb: "RGB(175, 238, 238)",
      families: ["blue", "turquoise", "pale"],
    },
    {
      name: "AQUAMARINE",
      hex: "#7FFFD4",
      rgb: "RGB(127, 255, 212)",
      families: ["blue", "aquamarine"],
    },
    {
      name: "TURQUOISE",
      hex: "#40E0D0",
      rgb: "RGB(64, 224, 208)",
      families: ["blue", "turquoise"],
    },
    {
      name: "MEDIUMTURQUOISE",
      hex: "#48D1CC",
      rgb: "RGB(72, 209, 204)",
      families: ["blue", "turquoise", "medium"],
    },
    {
      name: "DARKTURQUOISE",
      hex: "#00CED1",
      rgb: "RGB(0, 206, 209)",
      families: ["blue", "turquoise", "dark"],
    },
    {
      name: "CADETBLUE",
      hex: "#5F9EA0",
      rgb: "RGB(95, 158, 160)",
      families: ["blue", "gray"],
    },
    {
      name: "STEELBLUE",
      hex: "#4682B4",
      rgb: "RGB(70, 130, 180)",
      families: ["blue", "steel"],
    },
    {
      name: "LIGHTSTEELBLUE",
      hex: "#B0C4DE",
      rgb: "RGB(176, 196, 222)",
      families: ["blue", "steel", "light"],
    },
    {
      name: "POWDERBLUE",
      hex: "#B0E0E6",
      rgb: "RGB(176, 224, 230)",
      families: ["blue"],
    },
    {
      name: "LIGHTBLUE",
      hex: "#ADD8E6",
      rgb: "RGB(173, 216, 230)",
      families: ["blue", "light"],
    },
    {
      name: "SKYBLUE",
      hex: "#87CEEB",
      rgb: "RGB(135, 206, 235)",
      families: ["blue", "sky"],
    },
    {
      name: "LIGHTSKYBLUE",
      hex: "#87CEFA",
      rgb: "RGB(135, 206, 250)",
      families: ["blue", "sky", "light"],
    },
    {
      name: "DEEPSKYBLUE",
      hex: "#00BFFF",
      rgb: "RGB(0, 191, 255)",
      families: ["blue", "sky", "deep"],
    },
    {
      name: "DODGERBLUE",
      hex: "#1E90FF",
      rgb: "RGB(30, 144, 255)",
      families: ["blue"],
    },
    {
      name: "CORNFLOWERBLUE",
      hex: "#6495ED",
      rgb: "RGB(100, 149, 237)",
      families: ["blue"],
    },
    {
      name: "ROYALBLUE",
      hex: "#4169E1",
      rgb: "RGB(65, 105, 225)",
      families: ["blue"],
    },
    {
      name: "BLUE",
      hex: "#0000FF",
      rgb: "RGB(0, 0, 255)",
      families: ["blue"],
    },
    {
      name: "MEDIUMBLUE",
      hex: "#0000CD",
      rgb: "RGB(0, 0, 205)",
      families: ["blue", "medium"],
    },
    {
      name: "DARKBLUE",
      hex: "#00008B",
      rgb: "RGB(0, 0, 139)",
      families: ["blue", "dark"],
    },
    {
      name: "NAVY",
      hex: "#00008B",
      rgb: "RGB(0, 0, 128)",
      families: ["blue", "dark"],
    },
    {
      name: "MIDNIGHTBLUE",
      hex: "#191970",
      rgb: "RGB(25, 25, 112))",
      families: ["blue", "dark"],
    },
    {
      name: "CORNSILK",
      hex: "#FFF8DC",
      rgb: "RGB(255, 248, 220)",
      families: ["brown", "tan"],
    },
    {
      name: "BLANCHEDALMOND",
      hex: "#FFEBCD",
      rgb: "RGB(255, 235, 205)",
      families: ["brown", "tan"],
    },
    {
      name: "BISQUE",
      hex: "#FFE4C4",
      rgb: "RGB(255, 228, 196)",
      families: ["brown", "tan"],
    },
    {
      name: "NAVAJOWHITE",
      hex: "#FFDEAD",
      rgb: "RGB(255, 222, 173)",
      families: ["brown", "tan"],
    },
    {
      name: "WHEAT",
      hex: "#F5DEB3",
      rgb: "RGB(245, 222, 179)",
      families: ["brown", "tan"],
    },
    {
      name: "BURLYWOOD",
      hex: "#DEB887",
      rgb: "RGB(222, 184, 135)",
      families: ["brown", "tan"],
    },
    {
      name: "TAN",
      hex: "#D2B48C",
      rgb: "RGB(210, 180, 140)",
      families: ["brown", "tan"],
    },
    {
      name: "ROSYBROWN",
      hex: "#BC8F8F",
      rgb: "RGB(188, 143, 143)",
      families: ["brown", "tan"],
    },
    {
      name: "SANDYBROWN",
      hex: "#F4A460",
      rgb: "RGB(244, 164, 96)",
      families: ["brown", "orange"],
    },
    {
      name: "GOLDENROD",
      hex: "#DAA520",
      rgb: "RGB(218, 165, 32)",
      families: ["brown", "goldenrod", "orange"],
    },
    {
      name: "DARKGOLDENROD",
      hex: "#B8860B",
      rgb: "RGB(184, 134, 11)",
      families: ["brown", "orange", "goldenrod", "dark"],
    },
    {
      name: "PERU",
      hex: "#CD853F",
      rgb: "RGB(205, 133, 63)",
      families: ["brown", "orange"],
    },
    {
      name: "CHOCOLATE",
      hex: "#D2691E",
      rgb: "RGB(210, 105, 30)",
      families: ["brown", "orange"],
    },
    {
      name: "SADDLEBROWN",
      hex: "#8B4513",
      rgb: "RGB(139, 69, 19)",
      families: ["brown"],
    },
    {
      name: "SIENNA",
      hex: "#A0522D",
      rgb: "RGB(160, 82, 45)",
      families: ["brown"],
    },
    {
      name: "BROWN",
      hex: "#A52A2A",
      rgb: "RGB(165, 42, 42)",
      families: ["brown", "red"],
    },
    {
      name: "MAROON",
      hex: "#800000",
      rgb: "RGB(128, 0, 0)",
      families: ["brown", "red"],
    },
    {
      name: "WHITE",
      hex: "#FFFFFF",
      rgb: "RGB(255, 255, 255)",
      families: ["white"],
    },
    {
      name: "SNOW",
      hex: "#FFFAFA",
      rgb: "RGB(255, 250, 250)",
      families: ["white"],
    },
    {
      name: "HONEYDEW",
      hex: "#F0FFF0",
      rgb: "RGB(240, 255, 240)",
      families: ["white"],
    },
    {
      name: "MINTCREAM",
      hex: "#F5FFFA",
      rgb: "RGB(245, 255, 250)",
      families: ["white"],
    },
    {
      name: "AZURE",
      hex: "#F0FFFF",
      rgb: "RGB(240, 255, 255)",
      families: ["white"],
    },
    {
      name: "ALICEBLUE",
      hex: "#F0F8FF",
      rgb: "RGB(240, 248, 255)",
      families: ["white"],
    },
    {
      name: "GHOSTWHITE",
      hex: "#F8F8FF",
      rgb: "RGB(248, 248, 255)",
      families: ["white"],
    },
    {
      name: "WHITESMOKE",
      hex: "#F5F5F5",
      rgb: "RGB(245, 245, 245)",
      families: ["white"],
    },
    {
      name: "SEASHELL",
      hex: "#FFF5EE",
      rgb: "RGB(255, 245, 238)",
      families: ["white", "pink"],
    },
    {
      name: "BEIGE",
      hex: "#F5F5DC",
      rgb: "RGB(245, 245, 220)",
      families: ["white", "tan"],
    },
    {
      name: "OLDLACE",
      hex: "#FDF5E6",
      rgb: "RGB(253, 245, 230)",
      families: ["white", "tan"],
    },
    {
      name: "FLORALWHITE",
      hex: "#FDF5E6",
      rgb: "RGB(253, 245, 230)",
      families: ["white", "tan"],
    },
    {
      name: "IVORY",
      hex: "#FFFFF0",
      rgb: "RGB(255, 255, 240)",
      families: ["white", "tan"],
    },
    {
      name: "ANTIQUEWHITE",
      hex: "#FAEBD7",
      rgb: "RGB(250, 235, 215)",
      families: ["white", "tan"],
    },
    {
      name: "LINEN",
      hex: "#FAF0E6",
      rgb: "RGB(250, 240, 230)",
      families: ["white", "tan"],
    },
    {
      name: "LAVENDERBLUSH",
      hex: "#FFF0F5",
      rgb: "RGB(255, 240, 245)",
      families: ["white", "lavender", "pink"],
    },
    {
      name: "MISTYROSE",
      hex: "#FFE4E1",
      rgb: "RGB(255, 228, 225)",
      families: ["white", "pink"],
    },
    {
      name: "GAINSBORO",
      hex: "#DCDCDC",
      rgb: "RGB(220, 220, 220)",
      families: ["gray"],
    },
    {
      name: "LIGHTGRAY",
      hex: "#D3D3D3",
      rgb: "RGB(211, 211, 211)",
      families: ["gray", "light"],
    },
    {
      name: "SILVER",
      hex: "#C0C0C0",
      rgb: "RGB(192, 192, 192)",
      families: ["gray"],
    },
    {
      name: "DARKGRAY",
      hex: "#A9A9A9",
      rgb: "RGB(169, 169, 169)",
      families: ["gray", "dark"],
    },
    {
      name: "GRAY",
      hex: "#808080",
      rgb: "RGB(128, 128, 128)",
      families: ["gray"],
    },
    {
      name: "DIMGRAY",
      hex: "#696969",
      rgb: "RGB(105, 105, 105)",
      families: ["gray"],
    },
    {
      name: "LIGHTSLATEGRAY",
      hex: "#778899",
      rgb: "RGB(119, 136, 153)",
      families: ["gray", "light", "slate"],
    },
    {
      name: "SLATEGRAY",
      hex: "#708090",
      rgb: "RGB(112, 128, 144)",
      families: ["gray", "slate"],
    },
    {
      name: "DARKSLATEGRAY",
      hex: "#2F4F4F",
      rgb: "RGB(47, 79, 79)",
      families: ["gray", "slate", "dark"],
    },
    {
      name: "BLACK",
      hex: "#000000",
      rgb: "RGB(0, 0, 0)",
      families: ["black"],
    },
  ];

  const store = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: { rate: 4.7, count: 500 },
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: { rate: 2.1, count: 430 },
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 4.6, count: 400 },
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 3.9, count: 70 },
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 3, count: 400 },
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 1.9, count: 100 },
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: { rate: 3.3, count: 203 },
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: { rate: 2.9, count: 470 },
    },
    {
      id: 11,
      title:
        "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      price: 109,
      description:
        "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      rating: { rate: 4.8, count: 319 },
    },
    {
      id: 12,
      title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price: 114,
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      rating: { rate: 4.8, count: 400 },
    },
    {
      id: 13,
      title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      price: 599,
      description:
        "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      rating: { rate: 2.9, count: 250 },
    },
    {
      id: 14,
      title:
        "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      price: 999.99,
      description:
        "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      rating: { rate: 2.2, count: 140 },
    },
    {
      id: 15,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price: 56.99,
      description:
        "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 16,
      title:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      price: 29.95,
      description:
        "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      rating: { rate: 2.9, count: 340 },
    },
    {
      id: 17,
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      price: 39.99,
      description:
        "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      rating: { rate: 3.8, count: 679 },
    },
    {
      id: 18,
      title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
      price: 9.85,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      rating: { rate: 4.7, count: 130 },
    },
    {
      id: 19,
      title: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      description:
        "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      rating: { rate: 4.5, count: 146 },
    },
    {
      id: 20,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 12.99,
      description:
        "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      rating: { rate: 3.6, count: 145 },
    },
  ];

  const users = [
    {
      id: 1,
      border: true,
      gender: "male",
      round: true,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      border: false,
      gender: "male",
      round: true,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
    {
      id: 3,
      border: true,
      round: true,
      gender: "male",
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653",
        },
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications",
      },
    },
    {
      id: 4,
      border: true,
      gender: "famale",
      round: true,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
        geo: {
          lat: "29.4572",
          lng: "-164.2990",
        },
      },
      phone: "493-170-9623 x156",
      website: "kale.biz",
      company: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services",
      },
    },
    {
      id: 5,
      border: false,
      round: true,
      gender: "male",
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
        geo: {
          lat: "-31.8129",
          lng: "62.5342",
        },
      },
      phone: "(254)954-1289",
      website: "demarco.info",
      company: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems",
      },
    },
  ];

  return (
    <div className="App">
      <div className="d-flex user">
        <UserProfile names={userNames[0]} image={userPhoto} />
        <UserProfile names={userNames[1]} image={userPhoto} />
        <UserProfile names={userNames[2]} image={userPhoto} />
      </div>

      <div className="d-flex posts">
        {posts.map((x) => (
          <Form post={x} />
        ))}
      </div>

      <div className="d-flex wrap-flex colors">
        {color.map((x) => (
          <Colors items={x} color={x.hex} />
        ))}
      </div>

      <div className="d-flex g40 m50 wrap-flex store">
        {store.map((x) => (
          <FakeStore item={x} />
        ))}
      </div>

      <div className="d-flex wrap-flex user">
        {users.map((x, i) => (
          <UsersProfile item={x} key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
