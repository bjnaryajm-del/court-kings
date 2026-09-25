// Court Kings — player database (2026 season pool)
// pos: PG, SG, SF, PF, C | ovr: 60-99 overall rating (drives RNG rarity)
const PLAYERS = [
// ---- POINT GUARDS ----
{name:"Luka Dončić",pos:"PG",ovr:97},{name:"Shai Gilgeous-Alexander",pos:"PG",ovr:97},
{name:"Stephen Curry",pos:"PG",ovr:92},{name:"Jalen Brunson",pos:"PG",ovr:89},
{name:"Tyrese Maxey",pos:"PG",ovr:87},{name:"Tyrese Haliburton",pos:"PG",ovr:88},
{name:"Trae Young",pos:"PG",ovr:85},{name:"De'Aaron Fox",pos:"PG",ovr:86},
{name:"LaMelo Ball",pos:"PG",ovr:85},{name:"Ja Morant",pos:"PG",ovr:87},
{name:"Damian Lillard",pos:"PG",ovr:86},{name:"Jamal Murray",pos:"PG",ovr:84},
{name:"Cade Cunningham",pos:"PG",ovr:88},{name:"Darius Garland",pos:"PG",ovr:83},
{name:"Fred VanVleet",pos:"PG",ovr:78},{name:"Jrue Holiday",pos:"PG",ovr:80},
{name:"Derrick White",pos:"PG",ovr:83},{name:"Coby White",pos:"PG",ovr:79},
{name:"Josh Giddey",pos:"PG",ovr:78},{name:"D'Angelo Russell",pos:"PG",ovr:77},
{name:"Scoot Henderson",pos:"PG",ovr:75},{name:"Immanuel Quickley",pos:"PG",ovr:77},
{name:"Keyonte George",pos:"PG",ovr:76},{name:"Amen Thompson",pos:"PG",ovr:81},
{name:"Collin Sexton",pos:"PG",ovr:76},{name:"Chris Paul",pos:"PG",ovr:76},
{name:"Russell Westbrook",pos:"PG",ovr:77},{name:"Mike Conley",pos:"PG",ovr:74},
{name:"Tyus Jones",pos:"PG",ovr:73},{name:"T.J. McConnell",pos:"PG",ovr:74},
{name:"Payton Pritchard",pos:"PG",ovr:78},{name:"Jose Alvarado",pos:"PG",ovr:72},
{name:"Dennis Schroder",pos:"PG",ovr:76},{name:"Spencer Dinwiddie",pos:"PG",ovr:73},
{name:"Davion Mitchell",pos:"PG",ovr:71},{name:"Isaiah Collier",pos:"PG",ovr:70},
{name:"Reed Sheppard",pos:"PG",ovr:72},{name:"Rob Dillingham",pos:"PG",ovr:69},
{name:"Jeremiah Fears",pos:"PG",ovr:70},{name:"Egor Demin",pos:"PG",ovr:68},
{name:"Dylan Harper",pos:"PG",ovr:74},
// ---- SHOOTING GUARDS ----
{name:"Anthony Edwards",pos:"SG",ovr:94},{name:"Devin Booker",pos:"SG",ovr:92},
{name:"Donovan Mitchell",pos:"SG",ovr:89},{name:"Jaylen Brown",pos:"SG",ovr:89},
{name:"Kyrie Irving",pos:"SG",ovr:90},{name:"Desmond Bane",pos:"SG",ovr:84},
{name:"Bradley Beal",pos:"SG",ovr:80},{name:"Paul George",pos:"SG",ovr:84},
{name:"Austin Reaves",pos:"SG",ovr:82},{name:"Tyler Herro",pos:"SG",ovr:83},
{name:"Zach LaVine",pos:"SG",ovr:81},{name:"Jordan Poole",pos:"SG",ovr:76},
{name:"Jalen Green",pos:"SG",ovr:79},{name:"Anfernee Simons",pos:"SG",ovr:79},
{name:"Klay Thompson",pos:"SG",ovr:79},{name:"Jalen Suggs",pos:"SG",ovr:78},
{name:"RJ Barrett",pos:"SG",ovr:78},{name:"Cam Thomas",pos:"SG",ovr:79},
{name:"Malik Monk",pos:"SG",ovr:78},{name:"Alex Caruso",pos:"SG",ovr:76},
{name:"Donte DiVincenzo",pos:"SG",ovr:76},{name:"Jaden Ivey",pos:"SG",ovr:76},
{name:"Bennedict Mathurin",pos:"SG",ovr:78},{name:"Bogdan Bogdanovic",pos:"SG",ovr:77},
{name:"Marcus Smart",pos:"SG",ovr:76},{name:"CJ McCollum",pos:"SG",ovr:79},
{name:"Norman Powell",pos:"SG",ovr:77},{name:"Terry Rozier",pos:"SG",ovr:76},
{name:"Gary Trent Jr.",pos:"SG",ovr:74},{name:"Buddy Hield",pos:"SG",ovr:76},
{name:"Malik Beasley",pos:"SG",ovr:74},{name:"Gradey Dick",pos:"SG",ovr:73},
{name:"Dyson Daniels",pos:"SG",ovr:79},{name:"Stephon Castle",pos:"SG",ovr:76},
{name:"Devin Vassell",pos:"SG",ovr:79},{name:"Dalton Knecht",pos:"SG",ovr:73},
{name:"Tre Johnson",pos:"SG",ovr:67},{name:"VJ Edgecombe",pos:"SG",ovr:74},
{name:"Ayo Dosunmu",pos:"SG",ovr:73},{name:"Jaylen Wells",pos:"SG",ovr:66},
// ---- SMALL FORWARDS ----
{name:"Jayson Tatum",pos:"SF",ovr:95},{name:"Kevin Durant",pos:"SF",ovr:93},
{name:"LeBron James",pos:"SF",ovr:93},{name:"Kawhi Leonard",pos:"SF",ovr:89},
{name:"Jimmy Butler",pos:"SF",ovr:88},{name:"Scottie Barnes",pos:"SF",ovr:87},
{name:"Franz Wagner",pos:"SF",ovr:86},{name:"Mikal Bridges",pos:"SF",ovr:82},
{name:"DeMar DeRozan",pos:"SF",ovr:82},{name:"Brandon Ingram",pos:"SF",ovr:84},
{name:"OG Anunoby",pos:"SF",ovr:82},{name:"Michael Porter Jr.",pos:"SF",ovr:81},
{name:"Brandon Miller",pos:"SF",ovr:80},{name:"Deni Avdija",pos:"SF",ovr:81},
{name:"Miles Bridges",pos:"SF",ovr:79},{name:"Josh Hart",pos:"SF",ovr:78},
{name:"Khris Middleton",pos:"SF",ovr:79},{name:"Trey Murphy III",pos:"SF",ovr:80},
{name:"Jaden McDaniels",pos:"SF",ovr:79},{name:"Andrew Wiggins",pos:"SF",ovr:78},
{name:"Herbert Jones",pos:"SF",ovr:78},{name:"Luguentz Dort",pos:"SF",ovr:77},
{name:"Keldon Johnson",pos:"SF",ovr:75},{name:"Max Strus",pos:"SF",ovr:74},
{name:"Dillon Brooks",pos:"SF",ovr:75},{name:"Bilal Coulibaly",pos:"SF",ovr:76},
{name:"Ausar Thompson",pos:"SF",ovr:77},{name:"Toumani Camara",pos:"SF",ovr:74},
{name:"Kelly Oubre Jr.",pos:"SF",ovr:75},{name:"Harrison Barnes",pos:"SF",ovr:73},
{name:"Torrey Craig",pos:"SF",ovr:67},{name:"Nicolas Batum",pos:"SF",ovr:73},
{name:"Ace Bailey",pos:"SF",ovr:74},{name:"Ron Holland",pos:"SF",ovr:71},
{name:"Matas Buzelis",pos:"SF",ovr:73},{name:"GG Jackson II",pos:"SF",ovr:72},
{name:"Kentavious Caldwell-Pope",pos:"SF",ovr:75},{name:"Simone Fontecchio",pos:"SF",ovr:71},
{name:"Isaac Okoro",pos:"SF",ovr:72},{name:"Cam Whitmore",pos:"SF",ovr:74},
{name:"Cody Williams",pos:"SF",ovr:66},{name:"Cooper Flagg",pos:"SF",ovr:81},
{name:"Kon Knueppel",pos:"SF",ovr:73},
// ---- POWER FORWARDS ----
{name:"Giannis Antetokounmpo",pos:"PF",ovr:97},{name:"Zion Williamson",pos:"PF",ovr:84},
{name:"Paolo Banchero",pos:"PF",ovr:89},{name:"Jaren Jackson Jr.",pos:"PF",ovr:86},
{name:"Karl-Anthony Towns",pos:"PF",ovr:88},{name:"Julius Randle",pos:"PF",ovr:82},
{name:"Evan Mobley",pos:"PF",ovr:88},{name:"Pascal Siakam",pos:"PF",ovr:85},
{name:"Jalen Williams",pos:"PF",ovr:87},{name:"Jalen Johnson",pos:"PF",ovr:84},
{name:"Aaron Gordon",pos:"PF",ovr:81},{name:"Kyle Kuzma",pos:"PF",ovr:77},
{name:"Tobias Harris",pos:"PF",ovr:76},{name:"Keegan Murray",pos:"PF",ovr:78},
{name:"Jabari Smith Jr.",pos:"PF",ovr:78},{name:"Jerami Grant",pos:"PF",ovr:77},
{name:"Draymond Green",pos:"PF",ovr:79},{name:"John Collins",pos:"PF",ovr:76},
{name:"Cameron Johnson",pos:"PF",ovr:77},{name:"PJ Washington",pos:"PF",ovr:76},
{name:"Jonathan Kuminga",pos:"PF",ovr:79},{name:"Tari Eason",pos:"PF",ovr:76},
{name:"Bobby Portis",pos:"PF",ovr:76},{name:"Rui Hachimura",pos:"PF",ovr:76},
{name:"Kelly Olynyk",pos:"PF",ovr:72},{name:"Precious Achiuwa",pos:"PF",ovr:71},
{name:"Marvin Bagley III",pos:"PF",ovr:71},{name:"Santi Aldama",pos:"PF",ovr:74},
{name:"Trey Lyles",pos:"PF",ovr:69},{name:"Grant Williams",pos:"PF",ovr:71},
{name:"Jaime Jaquez Jr.",pos:"PF",ovr:75},{name:"Patrick Williams",pos:"PF",ovr:74},
{name:"Obi Toppin",pos:"PF",ovr:73},{name:"Nikola Jovic",pos:"PF",ovr:74},
{name:"Kyle Filipowski",pos:"PF",ovr:72},{name:"Zaccharie Risacher",pos:"PF",ovr:74},
{name:"Alex Sarr",pos:"PF",ovr:74},{name:"Moussa Diabate",pos:"PF",ovr:68},
{name:"Kevin Knox II",pos:"PF",ovr:66},{name:"MarJon Beauchamp",pos:"PF",ovr:67},
// ---- CENTERS ----
{name:"Nikola Jokić",pos:"C",ovr:99},{name:"Victor Wembanyama",pos:"C",ovr:96},
{name:"Joel Embiid",pos:"C",ovr:90},{name:"Anthony Davis",pos:"C",ovr:90},
{name:"Domantas Sabonis",pos:"C",ovr:89},{name:"Bam Adebayo",pos:"C",ovr:87},
{name:"Chet Holmgren",pos:"C",ovr:86},{name:"Alperen Şengün",pos:"C",ovr:87},
{name:"Myles Turner",pos:"C",ovr:81},{name:"Rudy Gobert",pos:"C",ovr:83},
{name:"Jarrett Allen",pos:"C",ovr:82},{name:"Nikola Vucevic",pos:"C",ovr:79},
{name:"Deandre Ayton",pos:"C",ovr:78},{name:"Jalen Duren",pos:"C",ovr:80},
{name:"Nic Claxton",pos:"C",ovr:78},{name:"Walker Kessler",pos:"C",ovr:79},
{name:"Mark Williams",pos:"C",ovr:77},{name:"Isaiah Hartenstein",pos:"C",ovr:79},
{name:"Jakob Poeltl",pos:"C",ovr:77},{name:"Jonas Valančiūnas",pos:"C",ovr:76},
{name:"Brook Lopez",pos:"C",ovr:76},{name:"Ivica Zubac",pos:"C",ovr:79},
{name:"Mitchell Robinson",pos:"C",ovr:76},{name:"Naz Reid",pos:"C",ovr:80},
{name:"Dereck Lively II",pos:"C",ovr:78},{name:"Kristaps Porzingis",pos:"C",ovr:82},
{name:"Al Horford",pos:"C",ovr:76},{name:"Onyeka Okongwu",pos:"C",ovr:79},
{name:"Isaiah Stewart",pos:"C",ovr:74},{name:"Daniel Gafford",pos:"C",ovr:75},
{name:"Clint Capela",pos:"C",ovr:74},{name:"Robert Williams III",pos:"C",ovr:71},
{name:"Kevon Looney",pos:"C",ovr:70},{name:"Donovan Clingan",pos:"C",ovr:75},
{name:"Yves Missi",pos:"C",ovr:71},{name:"Zach Edey",pos:"C",ovr:72},
{name:"Kel'el Ware",pos:"C",ovr:73},{name:"Neemias Queta",pos:"C",ovr:68},
{name:"Khaman Maluach",pos:"C",ovr:69},{name:"Derik Queen",pos:"C",ovr:71},
];

module.exports = PLAYERS;

// ---- validation (run directly with `node players.js`) ----
if (require.main === module) {
  const byPos = {};
  const seen = new Set();
  let dupes = [];
  for (const p of PLAYERS) {
    byPos[p.pos] = (byPos[p.pos]||0)+1;
    const key = p.name.toLowerCase();
    if (seen.has(key)) dupes.push(p.name);
    seen.add(key);
    if (p.ovr < 60 || p.ovr > 99) console.log("OUT OF RANGE:", p.name, p.ovr);
  }
  console.log("Total players:", PLAYERS.length);
  console.log("By position:", byPos);
  console.log("Duplicates:", dupes.length ? dupes : "none");

  const TIERS = [
    { name:'Legendary', min:94, max:99 },
    { name:'Epic',      min:88, max:93 },
    { name:'Rare',      min:80, max:87 },
    { name:'Uncommon',  min:70, max:79 },
    { name:'Common',    min:60, max:69 },
  ];
  for (const pos of ['PG','SG','SF','PF','C']) {
    const counts = TIERS.map(t => {
      const c = PLAYERS.filter(p => p.pos===pos && p.ovr>=t.min && p.ovr<=t.max).length;
      return `${t.name}:${c}`;
    });
    console.log(pos, counts.join(' '));
  }
}
