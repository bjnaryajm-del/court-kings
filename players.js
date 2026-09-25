(function(){
'use strict';
 
// =========================================================================
// DATA
// =========================================================================
const TEAMS = [
  {abbr:"ATL", name:"Atlanta Hawks", color:"#E13A3E"},
  {abbr:"BOS", name:"Boston Celtics", color:"#0C7C43"},
  {abbr:"BKN", name:"Brooklyn Nets", color:"#6B6B6B"},
  {abbr:"CHA", name:"Charlotte Hornets", color:"#3A2E8C"},
  {abbr:"CHI", name:"Chicago Bulls", color:"#CE1141"},
  {abbr:"CLE", name:"Cleveland Cavaliers", color:"#93003A"},
  {abbr:"DAL", name:"Dallas Mavericks", color:"#0072B5"},
  {abbr:"DEN", name:"Denver Nuggets", color:"#F4B62E"},
  {abbr:"DET", name:"Detroit Pistons", color:"#D0132E"},
  {abbr:"GSW", name:"Golden State Warriors", color:"#3560A8"},
  {abbr:"HOU", name:"Houston Rockets", color:"#CE1141"},
  {abbr:"IND", name:"Indiana Pacers", color:"#FDBB30"},
  {abbr:"LAC", name:"LA Clippers", color:"#D0132E"},
  {abbr:"LAL", name:"Los Angeles Lakers", color:"#6a3fa0"},
  {abbr:"MEM", name:"Memphis Grizzlies", color:"#6488BE"},
  {abbr:"MIA", name:"Miami Heat", color:"#B3002F"},
  {abbr:"MIL", name:"Milwaukee Bucks", color:"#1E7A44"},
  {abbr:"MIN", name:"Minnesota Timberwolves", color:"#3564AE"},
  {abbr:"NOP", name:"New Orleans Pelicans", color:"#2A6E9E"},
  {abbr:"NYK", name:"New York Knicks", color:"#1F7ABF"},
  {abbr:"OKC", name:"Oklahoma City Thunder", color:"#1E96D4"},
  {abbr:"ORL", name:"Orlando Magic", color:"#1E96D4"},
  {abbr:"PHI", name:"Philadelphia 76ers", color:"#1F7ABF"},
  {abbr:"PHX", name:"Phoenix Suns", color:"#E5732A"},
  {abbr:"POR", name:"Portland Trail Blazers", color:"#E13A3E"},
  {abbr:"SAC", name:"Sacramento Kings", color:"#7A3D9E"},
  {abbr:"SAS", name:"San Antonio Spurs", color:"#9AA0A6"},
  {abbr:"TOR", name:"Toronto Raptors", color:"#CE1141"},
  {abbr:"UTA", name:"Utah Jazz", color:"#3A6E9E"},
  {abbr:"WAS", name:"Washington Wizards", color:"#D0132E"},
];
 
const PLAYER_SEED_DATA = [
{name:"Luka Dončić",pos:"PG",ovr:97,team:"LAL"},{name:"Shai Gilgeous-Alexander",pos:"PG",ovr:97,team:"OKC"},
{name:"Stephen Curry",pos:"PG",ovr:92,team:"GSW"},{name:"Jalen Brunson",pos:"PG",ovr:89,team:"NYK"},
{name:"Tyrese Maxey",pos:"PG",ovr:87,team:"PHI"},{name:"Tyrese Haliburton",pos:"PG",ovr:88,team:"IND"},
{name:"Trae Young",pos:"PG",ovr:85,team:"ATL"},{name:"De'Aaron Fox",pos:"PG",ovr:86,team:"SAS"},
{name:"LaMelo Ball",pos:"PG",ovr:85,team:"CHA"},{name:"Ja Morant",pos:"PG",ovr:87,team:"MEM"},
{name:"Damian Lillard",pos:"PG",ovr:85,team:"MIL"},{name:"Jamal Murray",pos:"PG",ovr:84,team:"DEN"},
{name:"Cade Cunningham",pos:"PG",ovr:88,team:"DET"},{name:"Darius Garland",pos:"PG",ovr:83,team:"CLE"},
{name:"Fred VanVleet",pos:"PG",ovr:78,team:"HOU"},{name:"Jrue Holiday",pos:"PG",ovr:80,team:"POR"},
{name:"Derrick White",pos:"PG",ovr:83,team:"BOS"},{name:"Coby White",pos:"PG",ovr:79,team:"CHI"},
{name:"Josh Giddey",pos:"PG",ovr:78,team:"CHI"},{name:"D'Angelo Russell",pos:"PG",ovr:77,team:"BKN"},
{name:"Scoot Henderson",pos:"PG",ovr:75,team:"POR"},{name:"Immanuel Quickley",pos:"PG",ovr:77,team:"TOR"},
{name:"Keyonte George",pos:"PG",ovr:76,team:"UTA"},{name:"Amen Thompson",pos:"PG",ovr:81,team:"HOU"},
{name:"Collin Sexton",pos:"PG",ovr:76,team:"CHA"},{name:"Chris Paul",pos:"PG",ovr:75,team:"LAC"},
{name:"Russell Westbrook",pos:"PG",ovr:76,team:"SAC"},{name:"Mike Conley",pos:"PG",ovr:74,team:"MIN"},
{name:"Tyus Jones",pos:"PG",ovr:73,team:"ORL"},{name:"T.J. McConnell",pos:"PG",ovr:74,team:"IND"},
{name:"Payton Pritchard",pos:"PG",ovr:78,team:"BOS"},{name:"Jose Alvarado",pos:"PG",ovr:72,team:"NOP"},
{name:"Dennis Schroder",pos:"PG",ovr:75,team:"SAC"},{name:"Spencer Dinwiddie",pos:"PG",ovr:72,team:"DAL"},
{name:"Davion Mitchell",pos:"PG",ovr:71,team:"MIA"},{name:"Isaiah Collier",pos:"PG",ovr:70,team:"UTA"},
{name:"Reed Sheppard",pos:"PG",ovr:72,team:"HOU"},{name:"Rob Dillingham",pos:"PG",ovr:69,team:"MIN"},
{name:"Jeremiah Fears",pos:"PG",ovr:70,team:"NOP"},{name:"Egor Demin",pos:"PG",ovr:68,team:"BKN"},
{name:"Dylan Harper",pos:"PG",ovr:74,team:"SAS"},{name:"Tre Jones",pos:"PG",ovr:70,team:"CHI"},
{name:"Ty Jerome",pos:"PG",ovr:73,team:"MEM"},{name:"Jared McCain",pos:"PG",ovr:74,team:"PHI"},
{name:"Ryan Rollins",pos:"PG",ovr:71,team:"MIL"},{name:"Killian Hayes",pos:"PG",ovr:66,team:"BOS"},
{name:"Vasilije Micic",pos:"PG",ovr:69,team:"CHA"},{name:"AJ Green",pos:"PG",ovr:68,team:"MIL"},
{name:"Marcus Sasser",pos:"PG",ovr:68,team:"DET"},{name:"Jared Butler",pos:"PG",ovr:66,team:"NOP"},
{name:"Trey Alexander",pos:"PG",ovr:65,team:"OKC"},{name:"Craig Porter Jr.",pos:"PG",ovr:65,team:"CLE"},
{name:"Monte Morris",pos:"PG",ovr:67,team:"PHX"},{name:"Bub Carrington",pos:"PG",ovr:68,team:"WAS"},
{name:"Anthony Edwards",pos:"SG",ovr:94,team:"MIN"},{name:"Devin Booker",pos:"SG",ovr:92,team:"PHX"},
{name:"Donovan Mitchell",pos:"SG",ovr:89,team:"CLE"},{name:"Jaylen Brown",pos:"SG",ovr:89,team:"BOS"},
{name:"Kyrie Irving",pos:"SG",ovr:90,team:"DAL"},{name:"Desmond Bane",pos:"SG",ovr:84,team:"ORL"},
{name:"Bradley Beal",pos:"SG",ovr:78,team:"LAC"},{name:"Paul George",pos:"SG",ovr:82,team:"PHI"},
{name:"Austin Reaves",pos:"SG",ovr:83,team:"LAL"},{name:"Tyler Herro",pos:"SG",ovr:83,team:"MIA"},
{name:"Zach LaVine",pos:"SG",ovr:80,team:"SAC"},{name:"Jordan Poole",pos:"SG",ovr:76,team:"WAS"},
{name:"Jalen Green",pos:"SG",ovr:79,team:"PHX"},{name:"Anfernee Simons",pos:"SG",ovr:78,team:"BOS"},
{name:"Klay Thompson",pos:"SG",ovr:77,team:"DAL"},{name:"Jalen Suggs",pos:"SG",ovr:78,team:"ORL"},
{name:"RJ Barrett",pos:"SG",ovr:78,team:"TOR"},{name:"Cam Thomas",pos:"SG",ovr:79,team:"BKN"},
{name:"Malik Monk",pos:"SG",ovr:78,team:"SAC"},{name:"Alex Caruso",pos:"SG",ovr:76,team:"OKC"},
{name:"Donte DiVincenzo",pos:"SG",ovr:76,team:"MIN"},{name:"Jaden Ivey",pos:"SG",ovr:76,team:"DET"},
{name:"Bennedict Mathurin",pos:"SG",ovr:78,team:"IND"},{name:"Bogdan Bogdanovic",pos:"SG",ovr:76,team:"LAC"},
{name:"Marcus Smart",pos:"SG",ovr:75,team:"WAS"},{name:"CJ McCollum",pos:"SG",ovr:78,team:"WAS"},
{name:"Norman Powell",pos:"SG",ovr:78,team:"MIA"},{name:"Terry Rozier",pos:"SG",ovr:75,team:"MIA"},
{name:"Gary Trent Jr.",pos:"SG",ovr:73,team:"MIL"},{name:"Buddy Hield",pos:"SG",ovr:76,team:"GSW"},
{name:"Malik Beasley",pos:"SG",ovr:75,team:"DET"},{name:"Gradey Dick",pos:"SG",ovr:73,team:"TOR"},
{name:"Dyson Daniels",pos:"SG",ovr:79,team:"ATL"},{name:"Stephon Castle",pos:"SG",ovr:78,team:"SAS"},
{name:"Devin Vassell",pos:"SG",ovr:79,team:"SAS"},{name:"Dalton Knecht",pos:"SG",ovr:73,team:"LAL"},
{name:"Tre Johnson",pos:"SG",ovr:67,team:"WAS"},{name:"VJ Edgecombe",pos:"SG",ovr:75,team:"PHI"},
{name:"Ayo Dosunmu",pos:"SG",ovr:73,team:"CHI"},{name:"Jaylen Wells",pos:"SG",ovr:66,team:"MEM"},
{name:"Nickeil Alexander-Walker",pos:"SG",ovr:76,team:"ATL"},{name:"Kobe Bufkin",pos:"SG",ovr:68,team:"ATL"},
{name:"Kentavious Caldwell-Pope",pos:"SG",ovr:74,team:"ORL"},{name:"Sam Merrill",pos:"SG",ovr:70,team:"CLE"},
{name:"Damion Lee",pos:"SG",ovr:65,team:"PHX"},{name:"Cole Anthony",pos:"SG",ovr:71,team:"MIN"},
{name:"Duncan Robinson",pos:"SG",ovr:74,team:"MIA"},{name:"Josh Okogie",pos:"SG",ovr:69,team:"CHA"},
{name:"Landry Shamet",pos:"SG",ovr:68,team:"NYK"},{name:"Christian Braun",pos:"SG",ovr:76,team:"DEN"},
{name:"Aaron Holiday",pos:"SG",ovr:68,team:"HOU"},{name:"Jordan Hawkins",pos:"SG",ovr:71,team:"NOP"},
{name:"Shaedon Sharpe",pos:"SG",ovr:79,team:"POR"},{name:"Johnny Juzang",pos:"SG",ovr:68,team:"UTA"},
{name:"Jayson Tatum",pos:"SF",ovr:95,team:"BOS"},{name:"Kevin Durant",pos:"SF",ovr:91,team:"HOU"},
{name:"LeBron James",pos:"SF",ovr:93,team:"LAL"},{name:"Kawhi Leonard",pos:"SF",ovr:87,team:"LAC"},
{name:"Jimmy Butler",pos:"SF",ovr:87,team:"GSW"},{name:"Scottie Barnes",pos:"SF",ovr:87,team:"TOR"},
{name:"Franz Wagner",pos:"SF",ovr:86,team:"ORL"},{name:"Mikal Bridges",pos:"SF",ovr:82,team:"NYK"},
{name:"DeMar DeRozan",pos:"SF",ovr:80,team:"SAC"},{name:"Brandon Ingram",pos:"SF",ovr:82,team:"TOR"},
{name:"OG Anunoby",pos:"SF",ovr:82,team:"NYK"},{name:"Michael Porter Jr.",pos:"SF",ovr:79,team:"BKN"},
{name:"Brandon Miller",pos:"SF",ovr:80,team:"CHA"},{name:"Deni Avdija",pos:"SF",ovr:82,team:"POR"},
{name:"Miles Bridges",pos:"SF",ovr:78,team:"CHA"},{name:"Josh Hart",pos:"SF",ovr:78,team:"NYK"},
{name:"Khris Middleton",pos:"SF",ovr:76,team:"WAS"},{name:"Trey Murphy III",pos:"SF",ovr:81,team:"NOP"},
{name:"Jaden McDaniels",pos:"SF",ovr:79,team:"MIN"},{name:"Andrew Wiggins",pos:"SF",ovr:77,team:"MIA"},
{name:"Herbert Jones",pos:"SF",ovr:78,team:"NOP"},{name:"Luguentz Dort",pos:"SF",ovr:77,team:"OKC"},
{name:"Keldon Johnson",pos:"SF",ovr:74,team:"SAS"},{name:"Max Strus",pos:"SF",ovr:74,team:"CLE"},
{name:"Dillon Brooks",pos:"SF",ovr:75,team:"PHX"},{name:"Bilal Coulibaly",pos:"SF",ovr:76,team:"WAS"},
{name:"Ausar Thompson",pos:"SF",ovr:77,team:"DET"},{name:"Toumani Camara",pos:"SF",ovr:74,team:"POR"},
{name:"Kelly Oubre Jr.",pos:"SF",ovr:75,team:"PHI"},{name:"Harrison Barnes",pos:"SF",ovr:72,team:"SAS"},
{name:"Torrey Craig",pos:"SF",ovr:67,team:"CHI"},{name:"Nicolas Batum",pos:"SF",ovr:72,team:"LAC"},
{name:"Ace Bailey",pos:"SF",ovr:74,team:"UTA"},{name:"Ron Holland",pos:"SF",ovr:71,team:"DET"},
{name:"Matas Buzelis",pos:"SF",ovr:73,team:"CHI"},{name:"GG Jackson II",pos:"SF",ovr:72,team:"MEM"},
{name:"Simone Fontecchio",pos:"SF",ovr:70,team:"MIA"},{name:"Isaac Okoro",pos:"SF",ovr:71,team:"CLE"},
{name:"Cam Whitmore",pos:"SF",ovr:74,team:"HOU"},{name:"Cody Williams",pos:"SF",ovr:66,team:"UTA"},
{name:"Cooper Flagg",pos:"SF",ovr:81,team:"DAL"},{name:"Kon Knueppel",pos:"SF",ovr:73,team:"CHA"},
{name:"Jaime Jaquez Jr.",pos:"SF",ovr:73,team:"MIA"},{name:"Kyle Anderson",pos:"SF",ovr:68,team:"GSW"},
{name:"Ziaire Williams",pos:"SF",ovr:69,team:"BKN"},{name:"Talen Horton-Tucker",pos:"SF",ovr:66,team:"IND"},
{name:"Danuel House Jr.",pos:"SF",ovr:65,team:"NOP"},{name:"Georges Niang",pos:"SF",ovr:67,team:"BOS"},
{name:"Vit Krejci",pos:"SF",ovr:65,team:"ATL"},{name:"Peyton Watson",pos:"SF",ovr:73,team:"DEN"},
{name:"Taurean Prince",pos:"SF",ovr:68,team:"MIL"},
{name:"Giannis Antetokounmpo",pos:"PF",ovr:97,team:"MIL"},{name:"Zion Williamson",pos:"PF",ovr:83,team:"NOP"},
{name:"Paolo Banchero",pos:"PF",ovr:89,team:"ORL"},{name:"Jaren Jackson Jr.",pos:"PF",ovr:86,team:"MEM"},
{name:"Karl-Anthony Towns",pos:"PF",ovr:88,team:"NYK"},{name:"Julius Randle",pos:"PF",ovr:82,team:"MIN"},
{name:"Evan Mobley",pos:"PF",ovr:88,team:"CLE"},{name:"Pascal Siakam",pos:"PF",ovr:85,team:"IND"},
{name:"Jalen Williams",pos:"PF",ovr:87,team:"OKC"},{name:"Jalen Johnson",pos:"PF",ovr:84,team:"ATL"},
{name:"Aaron Gordon",pos:"PF",ovr:81,team:"DEN"},{name:"Kyle Kuzma",pos:"PF",ovr:75,team:"MIL"},
{name:"Tobias Harris",pos:"PF",ovr:74,team:"DET"},{name:"Keegan Murray",pos:"PF",ovr:78,team:"SAC"},
{name:"Jabari Smith Jr.",pos:"PF",ovr:78,team:"HOU"},{name:"Jerami Grant",pos:"PF",ovr:76,team:"POR"},
{name:"Draymond Green",pos:"PF",ovr:78,team:"GSW"},{name:"John Collins",pos:"PF",ovr:76,team:"LAC"},
{name:"Cameron Johnson",pos:"PF",ovr:77,team:"DEN"},{name:"PJ Washington",pos:"PF",ovr:76,team:"DAL"},
{name:"Jonathan Kuminga",pos:"PF",ovr:79,team:"GSW"},{name:"Tari Eason",pos:"PF",ovr:76,team:"HOU"},
{name:"Bobby Portis",pos:"PF",ovr:75,team:"MIL"},{name:"Rui Hachimura",pos:"PF",ovr:75,team:"LAL"},
{name:"Kelly Olynyk",pos:"PF",ovr:70,team:"SAS"},{name:"Precious Achiuwa",pos:"PF",ovr:70,team:"NYK"},
{name:"Marvin Bagley III",pos:"PF",ovr:69,team:"WAS"},{name:"Santi Aldama",pos:"PF",ovr:74,team:"MEM"},
{name:"Trey Lyles",pos:"PF",ovr:67,team:"SAC"},{name:"Grant Williams",pos:"PF",ovr:70,team:"DAL"},
{name:"Patrick Williams",pos:"PF",ovr:73,team:"CHI"},{name:"Obi Toppin",pos:"PF",ovr:72,team:"IND"},
{name:"Nikola Jovic",pos:"PF",ovr:73,team:"MIA"},{name:"Kyle Filipowski",pos:"PF",ovr:72,team:"UTA"},
{name:"Zaccharie Risacher",pos:"PF",ovr:74,team:"ATL"},{name:"Alex Sarr",pos:"PF",ovr:75,team:"WAS"},
{name:"Moussa Diabate",pos:"PF",ovr:67,team:"CHA"},{name:"Kevin Knox II",pos:"PF",ovr:65,team:"POR"},
{name:"MarJon Beauchamp",pos:"PF",ovr:65,team:"MIL"},{name:"Jarace Walker",pos:"PF",ovr:72,team:"IND"},
{name:"Taylor Hendricks",pos:"PF",ovr:69,team:"UTA"},{name:"Georges Condition",pos:"PF",ovr:64,team:"BOS"},
{name:"Mouhamed Gueye",pos:"PF",ovr:66,team:"ATL"},{name:"Jaylin Williams",pos:"PF",ovr:71,team:"OKC"},
{name:"Noah Clowney",pos:"PF",ovr:68,team:"BKN"},{name:"Guerschon Yabusele",pos:"PF",ovr:72,team:"PHI"},
{name:"Ryan Dunn",pos:"PF",ovr:68,team:"PHX"},{name:"Sandro Mamukelashvili",pos:"PF",ovr:68,team:"TOR"},
{name:"Nikola Jokić",pos:"C",ovr:99,team:"DEN"},{name:"Victor Wembanyama",pos:"C",ovr:96,team:"SAS"},
{name:"Joel Embiid",pos:"C",ovr:87,team:"PHI"},{name:"Anthony Davis",pos:"C",ovr:89,team:"DAL"},
{name:"Domantas Sabonis",pos:"C",ovr:89,team:"SAC"},{name:"Bam Adebayo",pos:"C",ovr:87,team:"MIA"},
{name:"Chet Holmgren",pos:"C",ovr:86,team:"OKC"},{name:"Alperen Şengün",pos:"C",ovr:87,team:"HOU"},
{name:"Myles Turner",pos:"C",ovr:80,team:"MIL"},{name:"Rudy Gobert",pos:"C",ovr:82,team:"MIN"},
{name:"Jarrett Allen",pos:"C",ovr:82,team:"CLE"},{name:"Nikola Vucevic",pos:"C",ovr:78,team:"CHI"},
{name:"Deandre Ayton",pos:"C",ovr:77,team:"LAL"},{name:"Jalen Duren",pos:"C",ovr:80,team:"DET"},
{name:"Nic Claxton",pos:"C",ovr:77,team:"BKN"},{name:"Walker Kessler",pos:"C",ovr:79,team:"UTA"},
{name:"Mark Williams",pos:"C",ovr:77,team:"PHX"},{name:"Isaiah Hartenstein",pos:"C",ovr:79,team:"OKC"},
{name:"Jakob Poeltl",pos:"C",ovr:76,team:"TOR"},{name:"Jonas Valančiūnas",pos:"C",ovr:73,team:"WAS"},
{name:"Brook Lopez",pos:"C",ovr:75,team:"MIL"},{name:"Ivica Zubac",pos:"C",ovr:79,team:"LAC"},
{name:"Mitchell Robinson",pos:"C",ovr:75,team:"NYK"},{name:"Naz Reid",pos:"C",ovr:80,team:"MIN"},
{name:"Dereck Lively II",pos:"C",ovr:77,team:"DAL"},{name:"Kristaps Porzingis",pos:"C",ovr:81,team:"ATL"},
{name:"Al Horford",pos:"C",ovr:73,team:"BOS"},{name:"Onyeka Okongwu",pos:"C",ovr:79,team:"ATL"},
{name:"Isaiah Stewart",pos:"C",ovr:73,team:"DET"},{name:"Daniel Gafford",pos:"C",ovr:75,team:"DAL"},
{name:"Clint Capela",pos:"C",ovr:73,team:"HOU"},{name:"Robert Williams III",pos:"C",ovr:69,team:"POR"},
{name:"Kevon Looney",pos:"C",ovr:68,team:"GSW"},{name:"Donovan Clingan",pos:"C",ovr:76,team:"POR"},
{name:"Yves Missi",pos:"C",ovr:71,team:"NOP"},{name:"Zach Edey",pos:"C",ovr:72,team:"MEM"},
{name:"Kel'el Ware",pos:"C",ovr:73,team:"MIA"},{name:"Neemias Queta",pos:"C",ovr:67,team:"BOS"},
{name:"Khaman Maluach",pos:"C",ovr:69,team:"PHX"},{name:"Derik Queen",pos:"C",ovr:71,team:"NOP"},
{name:"Colin Castleton",pos:"C",ovr:64,team:"CHA"},{name:"Moses Brown",pos:"C",ovr:65,team:"WAS"},
{name:"Jericho Sims",pos:"C",ovr:66,team:"NYK"},{name:"Charles Bassey",pos:"C",ovr:63,team:"SAS"},
{name:"Isaiah Jackson",pos:"C",ovr:71,team:"IND"},{name:"Wendell Carter Jr.",pos:"C",ovr:74,team:"ORL"},
];
 
const POSITIONS = ['PG','SG','SF','PF','C'];
const LADDER_ORDER = ['PG','SG','SF','PF','C'];
 
const TIERS = [
  { key:'legendary', name:'Legendary', min:94, max:99, chance:0.03, rp:3000 },
  { key:'epic',      name:'Epic',      min:88, max:93, chance:0.07, rp:1000 },
  { key:'rare',      name:'Rare',      min:80, max:87, chance:0.15, rp:400  },
  { key:'uncommon',  name:'Uncommon',  min:70, max:79, chance:0.30, rp:150  },
  { key:'common',    name:'Common',    min:60, max:69, chance:0.45, rp:50   },
];
 
const STARTING_COINS = 1000;
const SEASON_LENGTH = 10;
const SEASON_PLAYOFF_WIN_REQ = 6;
 
const MAKE_2_LINES = [
  "{p} scores in the paint!", "{p} knocks down the mid-range jumper.",
  "{p} finishes strong at the rim!", "{p} banks it home.",
  "{p} works it inside and scores.", "{p} pulls up and hits it."
];
const MAKE_3_LINES = [
  "{p} buries a three!", "{p} splashes it from deep!",
  "{p} drills a triple!", "{p} steps back and connects from three!",
  "{p} lets it fly from way downtown — good!"
];
const MISS_LINES = [
  "{p}'s shot rims out.", "{p} can't connect, off the back iron.",
  "{p} misses the jumper.", "{p} gets denied at the rim!",
  "{p} airballs it from deep.", "{p}'s shot is short."
];
const TURNOVER_LINES = [
  "Turnover — the ball is stripped away.", "Bad pass, picked off.",
  "Offensive foul, turnover.", "Travel called, turnover.",
  "Ball knocked loose, turnover."
];
 
// =========================================================================
// STATE
// =========================================================================
const state = {
  user:null, players:[], coins:0, wins:0, losses:0,
  team: emptyTeam(),
  season:null, tournament:null, ladder:null,
  customSize:3, customMy:null, customCpu:null,
  authMode:'login', pendingMatch:null,
};
 
function emptyTeam(){
  return {
    starters: {PG:null,SG:null,SF:null,PF:null,C:null},
    bench: {PG:null,SG:null,SF:null,PF:null,C:null},
    franchiseName: null
  };
}
 
// =========================================================================
// BACKEND ABSTRACTION (Google Apps Script <-> local browser fallback)
// =========================================================================
function cyrb53(str){
  let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (let i=0;i<str.length;i++){
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
  h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1>>>0)).toString(16);
}
 
function createGasBackend(){
  function call(name, ...args){
    return new Promise((resolve, reject)=>{
      google.script.run.withSuccessHandler(resolve).withFailureHandler(reject)[name](...args);
    });
  }
  return {
    mode:'gas',
    getPlayerDatabase: () => call('getPlayerDatabase'),
    registerUser: (u,p) => call('registerUser', u, p),
    loginUser: (u,p) => call('loginUser', u, p),
    saveGameData: (u,s) => call('saveGameData', u, s),
    listUsers: (u) => call('listUsers', u),
    getUserRoster: (u) => call('getUserRoster', u),
    proposeTrade: (f,t,os,op,rs,rp) => call('proposeTrade', f,t,os,op,rs,rp),
    listTradesFor: (u) => call('listTradesFor', u),
    respondTrade: (id,u,accept) => call('respondTrade', id,u,accept),
    cancelTrade: (id,u) => call('cancelTrade', id,u),
  };
}
 
function createLocalBackend(){
  const DB_KEY = 'courtkings_local_accounts';
  function readDb(){ try { return JSON.parse(localStorage.getItem(DB_KEY)||'{}'); } catch(e){ return {}; } }
  function writeDb(db){ try { localStorage.setItem(DB_KEY, JSON.stringify(db)); } catch(e){} }
 
  return {
    mode:'local',
    getPlayerDatabase: () => Promise.resolve(PLAYER_SEED_DATA),
    registerUser: (username, password) => new Promise(resolve=>{
      username = (username||'').trim();
      if (!username || username.length<3) return resolve({success:false, message:'Coach name must be at least 3 characters.'});
      if (!password || password.length<4) return resolve({success:false, message:'Password must be at least 4 characters.'});
      const db = readDb();
      const key = username.toLowerCase();
      if (db[key]) return resolve({success:false, message:'That coach name is already taken on this device.'});
      db[key] = { username, hash: cyrb53(password), coins:STARTING_COINS, wins:0, losses:0, team:null, season:null, tournament:null, ladder:null };
      writeDb(db);
      resolve({success:true, username, coins:STARTING_COINS, wins:0, losses:0, team:null, season:null, tournament:null, ladder:null});
    }),
    loginUser: (username, password) => new Promise(resolve=>{
      const db = readDb();
      const rec = db[(username||'').trim().toLowerCase()];
      if (!rec) return resolve({success:false, message:'No local account with that coach name on this device.'});
      if (rec.hash !== cyrb53(password||'')) return resolve({success:false, message:'Incorrect password.'});
      resolve({success:true, username:rec.username, coins:rec.coins, wins:rec.wins, losses:rec.losses, team:rec.team, season:rec.season, tournament:rec.tournament, ladder:rec.ladder});
    }),
    saveGameData: (username, data) => new Promise(resolve=>{
      const db = readDb();
      const key = (username||'').trim().toLowerCase();
      if (!db[key]) return resolve({success:false});
      db[key] = { ...db[key], coins:data.coins, wins:data.wins, losses:data.losses, team:data.team, season:data.season, tournament:data.tournament, ladder:data.ladder };
      writeDb(db);
      resolve({success:true});
    }),
    listUsers: () => Promise.resolve([]),
    getUserRoster: () => Promise.resolve(null),
    proposeTrade: () => Promise.resolve({success:false, message:'Trading needs the deployed Apps Script version with a shared account database.'}),
    listTradesFor: () => Promise.resolve({incoming:[], outgoing:[]}),
    respondTrade: () => Promise.resolve({success:false, message:'Trading needs the deployed Apps Script version.'}),
    cancelTrade: () => Promise.resolve({success:false}),
  };
}
 
const backend = (typeof google !== 'undefined' && google.script && google.script.run) ? createGasBackend() : createLocalBackend();
 
// =========================================================================
// RNG / RARITY / RP
// =========================================================================
function tierOf(ovr){
  for (const t of TIERS) if (ovr>=t.min && ovr<=t.max) return t;
  return TIERS[TIERS.length-1];
}
function scaledTiers(difficulty){
  const scaled = TIERS.map(t => ({...t, chance: t.chance * Math.pow(difficulty, (t.min-60)/6)}));
  const total = scaled.reduce((s,t)=>s+t.chance,0);
  return scaled.map(t => ({...t, chance: t.chance/total}));
}
function rollPlayer(pos, difficulty){
  const pool = state.players.filter(p=>p.pos===pos);
  if (!pool.length) return null;
  const tiers = (difficulty && difficulty!==1) ? scaledTiers(difficulty) : TIERS;
  const r = Math.random();
  let cum=0, tier=tiers[tiers.length-1];
  for (const t of tiers){ cum+=t.chance; if (r<=cum){ tier=t; break; } }
  let tierPool = pool.filter(p=>p.ovr>=tier.min && p.ovr<=tier.max);
  if (!tierPool.length) tierPool = pool;
  return tierPool[Math.floor(Math.random()*tierPool.length)];
}
function rerollCost(currentOvr){ return 60 + currentOvr; }
function teamOf(abbr){ return TEAMS.find(t=>t.abbr===abbr); }
function teamRP(team){
  let total = 0;
  ['starters','bench'].forEach(g => POSITIONS.forEach(pos=>{
    const p = team[g][pos];
    if (p) total += tierOf(p.ovr).rp;
  }));
  return total;
}
 
// =========================================================================
// REAL-TEAM OPPONENTS (season / tournament / quick match)
// =========================================================================
function teamAverageOvr(abbr){
  const roster = state.players.filter(p=>p.team===abbr);
  if (!roster.length) return 70;
  return roster.reduce((s,p)=>s+p.ovr,0)/roster.length;
}
function teamsSortedByStrength(){
  return TEAMS.map(t=>({...t, avgOvr: teamAverageOvr(t.abbr)})).sort((a,b)=>b.avgOvr-a.avgOvr);
}
function pickOpponentTeam(difficulty, excludeAbbr){
  const sorted = teamsSortedByStrength().filter(t=>t.abbr!==excludeAbbr);
  const norm = Math.min(1, Math.max(0, (difficulty-0.8)/0.8));
  const band = 9;
  const center = Math.round((1-norm) * Math.max(0, sorted.length-band));
  const idx = Math.min(sorted.length-1, Math.max(0, center + Math.floor(Math.random()*band)));
  return sorted[idx];
}
function buildRealTeamRoster(abbr){
  const roster = state.players.filter(p=>p.team===abbr);
  const starters = {}, bench = {};
  POSITIONS.forEach(pos=>{
    const atPos = roster.filter(p=>p.pos===pos).sort((a,b)=>b.ovr-a.ovr);
    starters[pos] = atPos[0] || roster[0] || null;
    bench[pos] = atPos[1] || atPos[0] || roster[0] || null;
  });
  return { starters, bench, franchiseName: teamOf(abbr) ? teamOf(abbr).name : abbr };
}
 
// =========================================================================
// SIMULATION
// =========================================================================
function pickLine(arr, name){ return arr[Math.floor(Math.random()*arr.length)].replace('{p}', name); }
function avgOvr(players){ if (!players || !players.length) return 0; return players.reduce((s,p)=>s+p.ovr,0)/players.length; }
function teamPower(team){
  const st = Object.values(team.starters).filter(Boolean);
  const bn = Object.values(team.bench).filter(Boolean);
  const avg = a => a.length ? a.reduce((s,p)=>s+p.ovr,0)/a.length : 0;
  return avg(st)*0.75 + avg(bn)*0.25;
}
function buildPool(team){
  return Object.values(team.starters).filter(Boolean).map(p=>({p,w:p.ovr*1.5}))
    .concat(Object.values(team.bench).filter(Boolean).map(p=>({p,w:p.ovr*0.7})));
}
function weightedPick(pool){
  const total = pool.reduce((s,x)=>s+x.w,0);
  let r = Math.random()*total;
  for (const x of pool){ if (r<x.w) return x.p; r-=x.w; }
  return pool[pool.length-1].p;
}
 
function simulateGame(myTeam, cpuTeam, myLabel, cpuLabel){
  const score = { home:0, away:0 };
  const myPool = buildPool(myTeam), cpuPool = buildPool(cpuTeam);
  const myPower = teamPower(myTeam), cpuPower = teamPower(cpuTeam);
  const events = [];
  for (let q=1; q<=4; q++){
    events.push({ text:`Start of Quarter ${q}`, cls:'quarter', quarter:q });
    for (let poss=0; poss<50; poss++){
      if (Math.random() < 0.11){ events.push({ text: pickLine(TURNOVER_LINES,''), cls:'' }); continue; }
      const offenseIsMe = Math.random() < (0.5 + (myPower-cpuPower)/280);
      const offPool = offenseIsMe ? myPool : cpuPool;
      const offPower = offenseIsMe ? myPower : cpuPower;
      const defPower = offenseIsMe ? cpuPower : myPower;
      const shooter = weightedPick(offPool);
      const baseChance = 0.46 + (shooter.ovr-75)/220 + (offPower-defPower)/300;
      const chance = Math.min(0.72, Math.max(0.22, baseChance));
      const isThree = Math.random() < (['PG','SG'].includes(shooter.pos) ? 0.42 : shooter.pos==='SF' ? 0.32 : 0.14);
      if (Math.random() < chance){
        const pts = isThree?3:2;
        if (offenseIsMe) score.home+=pts; else score.away+=pts;
        events.push({ text: pickLine(isThree?MAKE_3_LINES:MAKE_2_LINES, shooter.name), cls: offenseIsMe?'score-me':'score-cpu', score:{home:score.home, away:score.away} });
      } else {
        events.push({ text: pickLine(MISS_LINES, shooter.name), cls:'' });
      }
    }
    events.push({ text:`End of Q${q}: ${myLabel} ${score.home} – ${score.away} ${cpuLabel}`, cls:'quarter' });
  }
  return { score, events, winner: score.home>score.away?'home':score.away>score.home?'away':'tie' };
}
 
function simulatePickupGame(myPlayers, cpuPlayers, myLabel, cpuLabel, target){
  target = target || 21;
  const score = { home:0, away:0 };
  const events = [];
  const myPower = avgOvr(myPlayers), cpuPower = avgOvr(cpuPlayers);
  const myPool = myPlayers.map(p=>({p, w:p.ovr}));
  const cpuPool = cpuPlayers.map(p=>({p, w:p.ovr}));
  let guard = 0;
  while (score.home < target && score.away < target && guard < 600){
    guard++;
    if (Math.random() < 0.09){ events.push({ text: pickLine(TURNOVER_LINES,''), cls:'' }); continue; }
    const offenseIsMe = Math.random() < (0.5 + (myPower-cpuPower)/260);
    const offPool = offenseIsMe ? myPool : cpuPool;
    const offPower = offenseIsMe ? myPower : cpuPower;
    const defPower = offenseIsMe ? cpuPower : myPower;
    const shooter = weightedPick(offPool);
    const baseChance = 0.5 + (shooter.ovr-75)/220 + (offPower-defPower)/300;
    const chance = Math.min(0.76, Math.max(0.26, baseChance));
    const isThree = Math.random() < (['PG','SG'].includes(shooter.pos) ? 0.38 : shooter.pos==='SF' ? 0.28 : 0.12);
    if (Math.random() < chance){
      const pts = isThree?3:2;
      if (offenseIsMe) score.home+=pts; else score.away+=pts;
      events.push({ text: pickLine(isThree?MAKE_3_LINES:MAKE_2_LINES, shooter.name), cls: offenseIsMe?'score-me':'score-cpu', score:{home:score.home, away:score.away} });
    } else {
      events.push({ text: pickLine(MISS_LINES, shooter.name), cls:'' });
    }
  }
  events.push({ text:`Game to ${target}: ${myLabel} ${score.home} – ${score.away} ${cpuLabel}`, cls:'quarter' });
  return { score, events, winner: score.home>score.away?'home':'away' };
}
 
function isTeamReady(team){ return POSITIONS.every(pos => !!team.starters[pos]); }
 
// =========================================================================
// PERSISTENCE
// =========================================================================
function serializeState(){
  return { team: state.team, coins: state.coins, wins: state.wins, losses: state.losses, season: state.season, tournament: state.tournament, ladder: state.ladder };
}
let saveTimer = null;
function persist(){
  try { localStorage.setItem('courtkings_cache_'+state.user, JSON.stringify(serializeState())); } catch(e){}
  clearTimeout(saveTimer);
  saveTimer = setTimeout(()=>{ backend.saveGameData(state.user, serializeState()).catch(()=>{}); }, 400);
}
 
// =========================================================================
// SMALL UTILITIES
// =========================================================================
function escapeHtml(str){ const d = document.createElement('div'); d.textContent = String(str); return d.innerHTML; }
let toastTimer = null;
function toast(msg){
  let el = document.getElementById('ck-toast');
  if (!el){
    el = document.createElement('div');
    el.id = 'ck-toast';
    el.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:var(--ink3);border:1px solid var(--line-bright);color:var(--paper);padding:10px 18px;border-radius:6px;font-size:13px;z-index:200;max-width:90vw;text-align:center;transition:opacity 200ms ease;';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.style.opacity = '1';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>{ el.style.opacity = '0'; }, 2800);
}
function cpuOpponentName(t){ return t.name; }
 
// =========================================================================
// SCREEN MANAGEMENT
// =========================================================================
const SCREENS = ['auth','home','builder','match','season','tournament','custom','ladder','trade'];
function showScreen(name){
  SCREENS.forEach(s => { const el = document.getElementById('screen-'+s); if (el) el.classList.toggle('hidden', s!==name); });
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.screen===name));
  window.scrollTo(0,0);
}
function renderTopbar(){
  const c = document.getElementById('topbar-coins'); if (c) c.textContent = state.coins;
  const r = document.getElementById('topbar-record'); if (r) r.textContent = `${state.wins}-${state.losses}`;
}
 
// =========================================================================
// AUTH
// =========================================================================
function setAuthLoading(loading){
  document.getElementById('btn-login').disabled = loading;
  document.getElementById('btn-register').disabled = loading;
}
function showAuthMessage(text, kind){
  document.getElementById('auth-message').innerHTML = `<div class="auth-msg ${kind}">${escapeHtml(text)}</div>`;
}
function wireAuth(){
  const formLogin = document.getElementById('form-login');
  const formRegister = document.getElementById('form-register');
  const toggleBtn = document.getElementById('btn-toggle-auth');
  const toggleText = document.getElementById('auth-toggle-text');
 
  function setMode(mode){
    state.authMode = mode;
    formLogin.classList.toggle('hidden', mode!=='login');
    formRegister.classList.toggle('hidden', mode!=='register');
    toggleText.textContent = mode==='login' ? 'New here?' : 'Already have an account?';
    toggleBtn.textContent = mode==='login' ? 'Create an account' : 'Log in instead';
    document.getElementById('auth-message').innerHTML = '';
  }
  toggleBtn.addEventListener('click', ()=> setMode(state.authMode==='login' ? 'register':'login'));
 
  formLogin.addEventListener('submit', async (e)=>{
    e.preventDefault();
    setAuthLoading(true);
    try {
      const res = await backend.loginUser(document.getElementById('login-username').value, document.getElementById('login-password').value);
      if (res.success) await onAuthSuccess(res); else showAuthMessage(res.message||'Login failed.', 'error');
    } catch(err){ showAuthMessage('Could not reach the server. Try again.', 'error'); }
    setAuthLoading(false);
  });
 
  formRegister.addEventListener('submit', async (e)=>{
    e.preventDefault();
    setAuthLoading(true);
    try {
      const res = await backend.registerUser(document.getElementById('reg-username').value, document.getElementById('reg-password').value);
      if (res.success) await onAuthSuccess(res); else showAuthMessage(res.message||'Could not create account.', 'error');
    } catch(err){ showAuthMessage('Could not reach the server. Try again.', 'error'); }
    setAuthLoading(false);
  });
 
  document.getElementById('btn-logout').addEventListener('click', ()=>{
    state.user = null; state.team = emptyTeam(); state.season=null; state.tournament=null; state.ladder=null;
    document.getElementById('bottomnav').classList.add('hidden');
    document.getElementById('topbar-user').classList.add('hidden');
    formLogin.reset(); formRegister.reset();
    showScreen('auth');
  });
 
  try {
    const match = document.cookie.match(/(?:^|; )ck_last_user=([^;]*)/);
    if (match) document.getElementById('login-username').value = decodeURIComponent(match[1]);
  } catch(e){}
 
  const note = document.getElementById('auth-note');
  note.textContent = backend.mode === 'gas'
    ? 'Your account and roster are saved to this game\'s Google Sheet.'
    : 'Preview mode: your account is saved locally in this browser only.';
}
 
async function loadPlayers(){
  try { state.players = await backend.getPlayerDatabase(); }
  catch(e){ state.players = PLAYER_SEED_DATA; }
  if (!state.players || !state.players.length) state.players = PLAYER_SEED_DATA;
}
 
async function onAuthSuccess(res){
  state.user = res.username;
  state.coins = res.coins ?? STARTING_COINS;
  state.wins = res.wins ?? 0;
  state.losses = res.losses ?? 0;
  state.team = res.team || emptyTeam();
  if (!state.team.bench) state.team = { ...emptyTeam(), ...state.team };
  state.season = res.season || null;
  state.tournament = res.tournament || null;
  state.ladder = res.ladder || null;
 
  try { document.cookie = `ck_last_user=${encodeURIComponent(state.user)}; max-age=31536000; path=/; samesite=lax`; } catch(e){}
 
  await loadPlayers();
  if (!state.team.franchiseName) state.team.franchiseName = TEAMS[Math.floor(Math.random()*TEAMS.length)].name;
 
  document.getElementById('bottomnav').classList.remove('hidden');
  document.getElementById('topbar-user').classList.remove('hidden');
  renderTopbar();
  showScreen('home');
  renderHome();
}
 
// =========================================================================
// HOME
// =========================================================================
function renderHome(){
  document.getElementById('home-greeting').textContent = `Welcome back, Coach ${state.user}.`;
  document.getElementById('home-power').textContent = isTeamReady(state.team) ? Math.round(teamPower(state.team)) : '—';
  document.getElementById('home-record').textContent = `${state.wins}-${state.losses}`;
  document.getElementById('home-coins').textContent = state.coins;
}
function requireReadyTeam(){
  if (!isTeamReady(state.team)) {
    toast('Fill all 5 starter slots in Fantasy Mode first.');
    showScreen('builder'); renderBuilder();
    return false;
  }
  return true;
}
function wireHome(){
  document.getElementById('btn-goto-builder').addEventListener('click', ()=>{ showScreen('builder'); renderBuilder(); });
  document.getElementById('mode-quick').addEventListener('click', ()=>{
    if (!requireReadyTeam()) return;
    const t = pickOpponentTeam(0.9+Math.random()*0.35, null);
    startMatch(buildRealTeamRoster(t.abbr), t.name, {type:'quick'}, {win:75, loss:20});
  });
  document.getElementById('mode-custom').addEventListener('click', ()=>{ showScreen('custom'); renderCustomScreen(); });
  document.getElementById('mode-ladder').addEventListener('click', ()=>{ showScreen('ladder'); renderLadder(); });
  document.getElementById('mode-season').addEventListener('click', ()=>{ showScreen('season'); renderSeason(); });
  document.getElementById('mode-tournament').addEventListener('click', ()=>{ showScreen('tournament'); renderTournament(); });
  document.getElementById('mode-trade').addEventListener('click', ()=>{ showScreen('trade'); renderTradeScreen(); });
}
function wireNav(){
  document.querySelectorAll('.nav-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const s = btn.dataset.screen;
      showScreen(s);
      if (s==='home') renderHome();
      if (s==='builder') renderBuilder();
      if (s==='season') renderSeason();
      if (s==='tournament') renderTournament();
      if (s==='trade') renderTradeScreen();
    });
  });
}
 
// =========================================================================
// FANTASY MODE — TEAM BUILDER (team-then-player reveal, RP)
// =========================================================================
function slotHTML(player, posKey, group){
  if (!player){
    return `<div class="slot" data-group="${group}" data-pos="${posKey}">
      <div><div class="slot-pos">${posKey}</div><div class="slot-team">&nbsp;</div>
      <div class="slot-name" style="color:var(--paper-dim)">Empty</div></div>
      <button class="btn btn-sm roll-btn" data-action="roll" data-group="${group}" data-pos="${posKey}">Roll player</button>
    </div>`;
  }
  const tier = tierOf(player.ovr);
  const t = teamOf(player.team);
  const cost = rerollCost(player.ovr);
  return `<div class="slot filled tier-${tier.key}" data-group="${group}" data-pos="${posKey}">
    <div>
      <div class="slot-pos">${posKey}</div>
      <div class="slot-team">${t ? escapeHtml(t.name) : ''}</div>
      <div class="slot-name">${escapeHtml(player.name)}</div>
      <div class="slot-tier">${tier.name} · ${tier.rp} RP</div>
    </div>
    <div class="slot-ovr">${player.ovr}</div>
    <button class="btn btn-sm roll-btn" data-action="reroll" data-group="${group}" data-pos="${posKey}">Reroll — 🪙${cost}</button>
  </div>`;
}
 
function renderBuilder(){
  document.getElementById('starter-slots').innerHTML = POSITIONS.map(pos=>slotHTML(state.team.starters[pos], pos, 'starters')).join('');
  document.getElementById('bench-slots').innerHTML = POSITIONS.map(pos=>slotHTML(state.team.bench[pos], pos, 'bench')).join('');
  document.getElementById('builder-power').textContent = isTeamReady(state.team) ? Math.round(teamPower(state.team)) : '—';
  document.getElementById('builder-rp').innerHTML = `${teamRP(state.team)} <span style="font-size:13px;color:var(--paper-dim);">RP</span>`;
  populateFranchiseSelect();
  renderTopbar();
}
 
function populateFranchiseSelect(){
  const sel = document.getElementById('franchise-select');
  sel.innerHTML = TEAMS.map(t=>`<option value="${t.name}" ${t.name===state.team.franchiseName?'selected':''}>${t.name}</option>`).join('');
}
 
function renderOddsTable(){
  document.getElementById('odds-table').innerHTML = TIERS.map(t=>`
    <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--line);">
      <span style="color:var(--t-${t.key});font-weight:600;">${t.name} (${t.min}-${t.max} OVR)</span>
      <span>${Math.round(t.chance*100)}% · ${t.rp} RP</span>
    </div>`).join('');
}
 
function disableAllRollButtons(disabled){
  document.querySelectorAll('#screen-builder .roll-btn').forEach(b => b.disabled = disabled);
}
 
// two-stage reveal: spins real NBA teams, then real players — lands on a result already
// determined by rollPlayer() so rarity odds/RP stay exactly correct.
function animateTeamThenPlayerReveal(slotEl, finalPlayer, onComplete){
  slotEl.classList.add('rolling');
  const nameEl = slotEl.querySelector('.slot-name');
  const teamEl = slotEl.querySelector('.slot-team');
  const teamTicks = 9, playerTicks = 9, tickMs = 65;
  let tick = 0;
 
  function spinTeams(){
    const t = TEAMS[Math.floor(Math.random()*TEAMS.length)];
    if (teamEl) teamEl.textContent = t.name;
    slotEl.style.setProperty('--flash', t.color);
    tick++;
    if (tick < teamTicks) { setTimeout(spinTeams, tickMs); }
    else {
      const finalT = teamOf(finalPlayer.team);
      if (teamEl) teamEl.textContent = finalT ? finalT.name : '';
      slotEl.style.setProperty('--flash', finalT ? finalT.color : 'var(--hardwood-bright)');
      setTimeout(spinPlayers, 260);
    }
  }
  let ptick = 0;
  function spinPlayers(){
    const pool = state.players.filter(p=>p.pos===finalPlayer.pos);
    const rnd = pool[Math.floor(Math.random()*pool.length)];
    if (nameEl) nameEl.textContent = rnd ? rnd.name : '???';
    ptick++;
    if (ptick < playerTicks) { setTimeout(spinPlayers, tickMs); }
    else { slotEl.classList.remove('rolling'); onComplete(); }
  }
  spinTeams();
}
 
function handleRollClick(group, pos, isReroll){
  const slotEl = document.querySelector(`.slot[data-group="${group}"][data-pos="${pos}"]`);
  if (!slotEl) return;
  const currentPlayer = state.team[group][pos];
  if (isReroll){
    const cost = rerollCost(currentPlayer.ovr);
    if (state.coins < cost){ toast(`Not enough coins — need 🪙${cost}`); return; }
  }
  const finalPlayer = rollPlayer(pos);
  if (!finalPlayer){ toast('No players available for that position.'); return; }
  disableAllRollButtons(true);
  animateTeamThenPlayerReveal(slotEl, finalPlayer, ()=>{
    if (isReroll) state.coins -= rerollCost(currentPlayer.ovr);
    state.team[group][pos] = finalPlayer;
    renderBuilder();
    persist();
    disableAllRollButtons(false);
  });
}
 
function autofillEmpty(){
  let filled = 0;
  ['starters','bench'].forEach(group=>POSITIONS.forEach(pos=>{
    if (!state.team[group][pos]){ state.team[group][pos] = rollPlayer(pos); filled++; }
  }));
  if (!filled){ toast('No empty slots to fill.'); return; }
  renderBuilder();
  persist();
}
 
let resetArmed = false;
function handleResetTeam(){
  const btn = document.getElementById('btn-reset-team');
  if (!resetArmed){
    resetArmed = true;
    btn.textContent = 'Click again to confirm';
    setTimeout(()=>{ resetArmed=false; btn.textContent='Reset team'; }, 3000);
    return;
  }
  resetArmed = false;
  btn.textContent = 'Reset team';
  const franchiseName = state.team.franchiseName;
  state.team = emptyTeam();
  state.team.franchiseName = franchiseName;
  renderBuilder();
  persist();
}
 
function wireBuilder(){
  function handleSlotClick(e){
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    handleRollClick(btn.dataset.group, btn.dataset.pos, btn.dataset.action==='reroll');
  }
  document.getElementById('starter-slots').addEventListener('click', handleSlotClick);
  document.getElementById('bench-slots').addEventListener('click', handleSlotClick);
  document.getElementById('btn-autofill').addEventListener('click', autofillEmpty);
  document.getElementById('btn-reset-team').addEventListener('click', handleResetTeam);
  document.getElementById('btn-odds').addEventListener('click', ()=> document.getElementById('odds-panel').classList.toggle('hidden'));
  document.getElementById('franchise-select').addEventListener('change', (e)=>{
    state.team.franchiseName = e.target.value;
    persist();
  });
}
 
// =========================================================================
// MATCH SCREEN (shared by quick / season / tournament / custom / ladder)
// =========================================================================
function matchTitle(context){
  if (context.type==='quick') return 'Quick match';
  if (context.type==='custom') return `Custom match — ${context.myPlayers.length}v${context.myPlayers.length}`;
  if (context.type==='ladder') return `Streetball ladder — ${context.myPlayers.length}v${context.myPlayers.length}`;
  if (context.type==='season'){
    if (context.stage==='regular') return `Season — Week ${context.scheduleIndex+1}`;
    if (context.stage==='semifinal') return 'Season — Semifinal';
    if (context.stage==='final') return 'Season — Final';
  }
  if (context.type==='tournament') return 'Tournament — ' + context.stage.charAt(0).toUpperCase()+context.stage.slice(1);
  return 'Match';
}
function isPickupContext(context){ return context.type==='custom' || context.type==='ladder'; }
 
function startMatch(cpuTeamOrRoster, cpuName, context, rewards){
  state.pendingMatch = { cpuTeam: cpuTeamOrRoster, cpuName, context, rewards };
  showScreen('match');
  document.getElementById('match-preview-panel').classList.remove('hidden');
  document.getElementById('match-live-panel').classList.add('hidden');
  document.getElementById('match-result-panel').classList.add('hidden');
  document.getElementById('match-title').textContent = matchTitle(context);
 
  const myLabel = isPickupContext(context) ? 'You' : (state.team.franchiseName || state.user);
  const myPower = isPickupContext(context) ? avgOvr(context.myPlayers) : teamPower(state.team);
  const cpuPower = isPickupContext(context) ? avgOvr(context.cpuPlayers) : teamPower(cpuTeamOrRoster);
 
  document.getElementById('match-my-name').textContent = myLabel;
  document.getElementById('match-my-power').textContent = Math.round(myPower);
  document.getElementById('match-cpu-name').textContent = cpuName;
  document.getElementById('match-cpu-power').textContent = Math.round(cpuPower);
}
 
function appendLogLine(ev){
  const log = document.getElementById('pbp-log');
  const div = document.createElement('div');
  div.className = 'pbp-line' + (ev.cls ? ' '+ev.cls : '');
  div.textContent = ev.text;
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
  if (ev.score){
    document.getElementById('live-my-score').textContent = ev.score.home;
    document.getElementById('live-cpu-score').textContent = ev.score.away;
  }
  if (ev.quarter) document.getElementById('live-quarter').textContent = `Quarter ${ev.quarter}`;
}
function playbackLog(events){
  return new Promise(resolve=>{
    let i=0, skip=false;
    const skipBtn = document.getElementById('btn-skip-sim');
    skipBtn.onclick = () => { skip = true; };
    function step(){
      if (skip){ while (i<events.length){ appendLogLine(events[i]); i++; } resolve(); return; }
      if (i>=events.length){ resolve(); return; }
      appendLogLine(events[i]); i++;
      setTimeout(step, 65);
    }
    step();
  });
}
 
async function playPendingMatch(){
  const { cpuTeam, cpuName, context } = state.pendingMatch;
  document.getElementById('match-preview-panel').classList.add('hidden');
  document.getElementById('match-live-panel').classList.remove('hidden');
  document.getElementById('live-my-name').textContent = isPickupContext(context) ? 'You' : (state.team.franchiseName || state.user);
  document.getElementById('live-cpu-name').textContent = cpuName;
  document.getElementById('live-my-score').textContent = '0';
  document.getElementById('live-cpu-score').textContent = '0';
  document.getElementById('live-quarter').textContent = isPickupContext(context) ? 'Race to 21' : 'Quarter 1';
  document.getElementById('pbp-log').innerHTML = '';
 
  const result = isPickupContext(context)
    ? simulatePickupGame(context.myPlayers, context.cpuPlayers, state.user, cpuName, 21)
    : simulateGame(state.team, cpuTeam, state.team.franchiseName || state.user, cpuName);
 
  state.pendingMatch.result = result;
  await playbackLog(result.events);
  finishMatch(result);
}
 
function applyMatchOutcomeToContext(context, won){
  if (context.type === 'season'){
    const s = state.season;
    if (context.stage === 'regular'){
      s.schedule[context.scheduleIndex].played = true;
      s.schedule[context.scheduleIndex].result = won ? 'W':'L';
      if (won) s.wins++; else s.losses++;
      if (s.schedule.every(g=>g.played)){
        if (s.wins >= SEASON_PLAYOFF_WIN_REQ){
          const semiT = pickOpponentTeam(1.35, state.team.franchiseName);
          const finalT = pickOpponentTeam(1.55, state.team.franchiseName);
          s.stage = 'playoffs';
          s.playoffs = { semiResult:null, finalResult:null, semiAbbr:semiT.abbr, semiName:semiT.name, finalAbbr:finalT.abbr, finalName:finalT.name };
        } else { s.stage = 'missed'; }
      }
    } else if (context.stage === 'semifinal'){
      s.playoffs.semiResult = won ? 'W':'L';
      if (!won) s.stage = 'done-eliminated';
    } else if (context.stage === 'final'){
      s.playoffs.finalResult = won ? 'W':'L';
      s.stage = won ? 'done-champion' : 'done-eliminated';
    }
  } else if (context.type === 'tournament'){
    const t = state.tournament;
    t.results[context.stage] = won ? 'W':'L';
    if (!won) t.stage = 'eliminated';
    else if (context.stage==='quarterfinal') t.stage='semifinal';
    else if (context.stage==='semifinal') t.stage='final';
    else if (context.stage==='final') t.stage='champion';
  } else if (context.type === 'ladder'){
    const l = state.ladder;
    if (won){ l.round += 1; l.stage = 'roll'; }
    else { l.stage = 'over'; }
  }
}
 
function finishMatch(result){
  document.getElementById('match-live-panel').classList.add('hidden');
  document.getElementById('match-result-panel').classList.remove('hidden');
  const won = result.winner === 'home';
  const banner = document.getElementById('result-banner');
  banner.textContent = won ? `Win! ${result.score.home}-${result.score.away}` : `Loss — ${result.score.home}-${result.score.away}`;
  banner.className = 'result-banner ' + (won?'win':'loss');
 
  const { context, rewards } = state.pendingMatch;
  const reward = won ? rewards.win : rewards.loss;
  state.coins += reward;
  if (won) state.wins++; else state.losses++;
  document.getElementById('result-reward').textContent = `+${reward} coins`;
 
  applyMatchOutcomeToContext(context, won);
  persist();
  renderTopbar();
}
 
function wireMatch(){
  document.getElementById('btn-play-game').addEventListener('click', playPendingMatch);
  document.getElementById('btn-match-continue').addEventListener('click', ()=>{
    const type = state.pendingMatch.context.type;
    state.pendingMatch = null;
    if (type==='season'){ showScreen('season'); renderSeason(); }
    else if (type==='tournament'){ showScreen('tournament'); renderTournament(); }
    else if (type==='ladder'){ showScreen('ladder'); renderLadder(); }
    else if (type==='custom'){ showScreen('custom'); renderCustomScreen(); }
    else { showScreen('home'); renderHome(); }
  });
}
 
// =========================================================================
// SEASON
// =========================================================================
function newSeason(){
  const schedule = [];
  for (let i=0;i<SEASON_LENGTH;i++){
    const t = pickOpponentTeam(0.85+i*0.05, state.team.franchiseName);
    schedule.push({ difficulty:0.85+i*0.05, played:false, result:null, cpuAbbr:t.abbr, cpuName:t.name });
  }
  return { schedule, wins:0, losses:0, stage:'regular', playoffs:null };
}
function renderSeason(){
  if (!state.season) state.season = newSeason();
  const s = state.season;
  const statusEl = document.getElementById('season-status');
  const trackEl = document.getElementById('season-track');
  const playBtn = document.getElementById('btn-season-play');
  const bracketPanel = document.getElementById('season-bracket-panel');
 
  trackEl.innerHTML = s.schedule.map((g,i)=>{
    let cls = 'season-node';
    if (g.played) cls += g.result==='W' ? ' win':' loss';
    else if (i === s.schedule.findIndex(x=>!x.played)) cls += ' next';
    return `<div class="${cls}" title="${escapeHtml(g.cpuName)}">${i+1}</div>`;
  }).join('');
 
  if (s.stage === 'regular'){
    statusEl.textContent = `Regular season: ${s.wins}-${s.losses}. Win ${SEASON_PLAYOFF_WIN_REQ}+ of ${SEASON_LENGTH} to make the playoffs.`;
    playBtn.classList.remove('hidden'); playBtn.textContent='Play next game';
    bracketPanel.classList.add('hidden');
  } else if (s.stage === 'playoffs'){
    statusEl.textContent = `Playoffs! Regular season: ${s.wins}-${s.losses}.`;
    bracketPanel.classList.remove('hidden'); renderSeasonBracket();
    if (!s.playoffs.semiResult){ playBtn.classList.remove('hidden'); playBtn.textContent='Play semifinal'; }
    else if (!s.playoffs.finalResult){ playBtn.classList.remove('hidden'); playBtn.textContent='Play final'; }
    else playBtn.classList.add('hidden');
  } else if (s.stage === 'missed'){
    statusEl.textContent = `Season complete: ${s.wins}-${s.losses}. You missed the playoffs — start a new season to try again.`;
    playBtn.classList.add('hidden'); bracketPanel.classList.add('hidden');
  } else if (s.stage === 'done-champion'){
    statusEl.innerHTML = `🏆 Champions! Final regular-season record ${s.wins}-${s.losses}, plus a title run.`;
    playBtn.classList.add('hidden'); bracketPanel.classList.remove('hidden'); renderSeasonBracket();
  } else if (s.stage === 'done-eliminated'){
    statusEl.textContent = `Eliminated from the playoffs. Regular season: ${s.wins}-${s.losses}.`;
    playBtn.classList.add('hidden'); bracketPanel.classList.remove('hidden'); renderSeasonBracket();
  }
}
function renderSeasonBracket(){
  const p = state.season.playoffs;
  document.getElementById('season-bracket').innerHTML = `
    <div class="bracket-round">
      <div class="bracket-round-label">Semifinal</div>
      <div class="bracket-match">
        <div class="bm-team ${p.semiResult==='W'?'winner':''}">${escapeHtml(state.team.franchiseName||state.user)}</div>
        <div class="bm-team ${p.semiResult==='L'?'winner':''}">${escapeHtml(p.semiName)}</div>
      </div>
    </div>
    <div class="bracket-round">
      <div class="bracket-round-label">Final</div>
      <div class="bracket-match">
        <div class="bm-team ${p.semiResult!=='W' ? 'pending' : (p.finalResult==='W'?'winner':'')}">${p.semiResult==='W' ? escapeHtml(state.team.franchiseName||state.user) : 'TBD'}</div>
        <div class="bm-team ${p.semiResult!=='W' ? 'pending' : (p.finalResult==='L'?'winner':'')}">${p.semiResult==='W' ? escapeHtml(p.finalName) : 'TBD'}</div>
      </div>
    </div>`;
}
function wireSeason(){
  document.getElementById('btn-season-play').addEventListener('click', ()=>{
    if (!requireReadyTeam()) return;
    const s = state.season;
    if (s.stage === 'regular'){
      const idx = s.schedule.findIndex(g=>!g.played);
      const g = s.schedule[idx];
      startMatch(buildRealTeamRoster(g.cpuAbbr), g.cpuName, {type:'season', stage:'regular', scheduleIndex:idx}, {win:50, loss:15});
    } else if (s.stage === 'playoffs' && !s.playoffs.semiResult){
      startMatch(buildRealTeamRoster(s.playoffs.semiAbbr), s.playoffs.semiName, {type:'season', stage:'semifinal'}, {win:150, loss:40});
    } else if (s.stage === 'playoffs' && !s.playoffs.finalResult){
      startMatch(buildRealTeamRoster(s.playoffs.finalAbbr), s.playoffs.finalName, {type:'season', stage:'final'}, {win:300, loss:80});
    }
  });
  document.getElementById('btn-season-new').addEventListener('click', ()=>{
    state.season = newSeason();
    renderSeason();
    persist();
  });
}
 
// =========================================================================
// TOURNAMENT
// =========================================================================
function newTournament(){
  return {
    stage:'quarterfinal',
    results:{quarterfinal:null, semifinal:null, final:null},
    teams:{
      quarterfinal: pickOpponentTeam(1.0, state.team.franchiseName),
      semifinal: pickOpponentTeam(1.3, state.team.franchiseName),
      final: pickOpponentTeam(1.55, state.team.franchiseName),
    }
  };
}
const STAGE_LABEL = {quarterfinal:'Quarterfinal', semifinal:'Semifinal', final:'Final', champion:'Champion', eliminated:'Eliminated'};
function renderTournament(){
  if (!state.tournament) state.tournament = newTournament();
  const t = state.tournament;
  const statusEl = document.getElementById('tourney-status');
  const playBtn = document.getElementById('btn-tourney-play');
 
  if (t.stage === 'champion'){
    statusEl.innerHTML = `🏆 Tournament champions! You swept the bracket.`;
    playBtn.classList.add('hidden');
  } else if (t.stage === 'eliminated'){
    statusEl.textContent = `Eliminated from the tournament.`;
    playBtn.classList.add('hidden');
  } else {
    statusEl.textContent = `Up next: ${STAGE_LABEL[t.stage]} vs ${t.teams[t.stage].name}.`;
    playBtn.classList.remove('hidden');
    playBtn.textContent = `Play ${STAGE_LABEL[t.stage].toLowerCase()}`;
  }
 
  document.getElementById('tourney-bracket').innerHTML = ['quarterfinal','semifinal','final'].map(stage=>{
    const res = t.results[stage];
    return `<div class="bracket-round">
      <div class="bracket-round-label">${STAGE_LABEL[stage]}</div>
      <div class="bracket-match">
        <div class="bm-team ${res==='W'?'winner':(res?'':'pending')}">${escapeHtml(state.team.franchiseName||state.user)}</div>
        <div class="bm-team ${res==='L'?'winner':(res?'':'pending')}">${escapeHtml(t.teams[stage].name)}</div>
      </div>
    </div>`;
  }).join('');
}
function wireTournament(){
  document.getElementById('btn-tourney-play').addEventListener('click', ()=>{
    if (!requireReadyTeam()) return;
    const t = state.tournament;
    const rewardMap = {quarterfinal:{win:60,loss:15}, semifinal:{win:120,loss:30}, final:{win:400,loss:60}};
    const opp = t.teams[t.stage];
    startMatch(buildRealTeamRoster(opp.abbr), opp.name, {type:'tournament', stage:t.stage}, rewardMap[t.stage]);
  });
  document.getElementById('btn-tourney-new').addEventListener('click', ()=>{
    state.tournament = newTournament();
    renderTournament();
    persist();
  });
}
 
// =========================================================================
// CUSTOM MATCH (direct NvN pickup, no persistence, no RP)
// =========================================================================
function squadCardHTML(p){
  const tier = tierOf(p.ovr);
  const t = teamOf(p.team);
  return `<div class="slot filled tier-${tier.key}"><div>
    <div class="slot-pos">${p.pos}</div><div class="slot-team">${t?escapeHtml(t.name):''}</div>
    <div class="slot-name">${escapeHtml(p.name)}</div><div class="slot-tier">${tier.name}</div>
  </div><div class="slot-ovr">${p.ovr}</div></div>`;
}
function renderCustomScreen(){
  const picker = document.getElementById('custom-size-picker');
  picker.innerHTML = [1,2,3,4,5].map(n=>`<button class="btn btn-sm ${state.customSize===n?'btn-primary':''}" data-size="${n}">${n}v${n}</button>`).join('');
  picker.querySelectorAll('[data-size]').forEach(b=>b.addEventListener('click', ()=>{
    state.customSize = Number(b.dataset.size);
    renderCustomScreen();
  }));
  document.getElementById('custom-squads-panel').classList.add('hidden');
}
function wireCustom(){
  document.getElementById('btn-custom-roll').addEventListener('click', ()=>{
    const n = state.customSize;
    const order = LADDER_ORDER.slice(0, n);
    state.customMy = order.map(pos => rollPlayer(pos));
    state.customCpu = order.map(pos => rollPlayer(pos, 0.95+Math.random()*0.35));
    document.getElementById('custom-squads-panel').classList.remove('hidden');
    document.getElementById('custom-my-squad').innerHTML = state.customMy.map(squadCardHTML).join('');
    document.getElementById('custom-cpu-squad').innerHTML = state.customCpu.map(squadCardHTML).join('');
  });
  document.getElementById('btn-custom-play').addEventListener('click', ()=>{
    if (!state.customMy || !state.customCpu) return;
    startMatch(null, `Pickup crew (${state.customSize}v${state.customSize})`,
      { type:'custom', myPlayers:state.customMy, cpuPlayers:state.customCpu },
      { win: 30*state.customSize, loss: 10 });
  });
}
 
// =========================================================================
// STREETBALL LADDER
// =========================================================================
function newLadder(){ return { round:1, myPlayers:[], cpuPlayers:[], stage:'roll' }; }
function renderLadder(){
  if (!state.ladder) state.ladder = newLadder();
  const l = state.ladder;
  const statusEl = document.getElementById('ladder-status');
  const trackEl = document.getElementById('ladder-track');
  const rollBtn = document.getElementById('btn-ladder-roll');
  const squadsPanel = document.getElementById('ladder-squads-panel');
 
  trackEl.innerHTML = [1,2,3,4,5].map(r=>{
    let cls='season-node';
    if (r < l.round) cls+=' win'; else if (r===l.round) cls+=' next';
    return `<div class="${cls}">${r}v${r}</div>`;
  }).join('');
 
  if (l.round > 5){
    statusEl.textContent = `🏆 Full squad champion! You won all 5 rounds.`;
    rollBtn.classList.add('hidden'); squadsPanel.classList.add('hidden');
  } else if (l.stage === 'over'){
    statusEl.textContent = `Run ended in the ${l.round}v${l.round} round. Start a new run to try again.`;
    rollBtn.classList.add('hidden'); squadsPanel.classList.add('hidden');
  } else if (l.stage === 'roll'){
    statusEl.textContent = `Round ${l.round} of 5 — next up: ${l.round}v${l.round} to 21. Roll a ${LADDER_ORDER[l.round-1]}.`;
    rollBtn.classList.remove('hidden'); rollBtn.textContent = `Roll round ${l.round} player (${LADDER_ORDER[l.round-1]})`;
    squadsPanel.classList.add('hidden');
  } else {
    statusEl.textContent = `Round ${l.round} of 5 — ${l.round}v${l.round} to 21. Ready when you are.`;
    rollBtn.classList.add('hidden');
    squadsPanel.classList.remove('hidden');
    document.getElementById('ladder-my-squad').innerHTML = l.myPlayers.map(squadCardHTML).join('');
    document.getElementById('ladder-cpu-squad').innerHTML = l.cpuPlayers.map(squadCardHTML).join('');
  }
}
function wireLadder(){
  document.getElementById('btn-ladder-roll').addEventListener('click', ()=>{
    const l = state.ladder;
    const pos = LADDER_ORDER[l.round-1];
    l.myPlayers.push(rollPlayer(pos));
    l.cpuPlayers.push(rollPlayer(pos, 0.95+Math.random()*0.3));
    l.stage = 'ready';
    renderLadder();
    persist();
  });
  document.getElementById('btn-ladder-play').addEventListener('click', ()=>{
    const l = state.ladder;
    startMatch(null, `Streetball crew`, { type:'ladder', myPlayers:l.myPlayers, cpuPlayers:l.cpuPlayers }, { win: 40*l.round, loss: 10 });
  });
  document.getElementById('btn-ladder-new').addEventListener('click', ()=>{
    state.ladder = newLadder();
    renderLadder();
    persist();
  });
}
 
// =========================================================================
// TRADE CENTER (only Fantasy Mode / persistent roster players)
// =========================================================================
function rosterOptions(team){
  const opts = [];
  ['starters','bench'].forEach(group=>POSITIONS.forEach(pos=>{
    const p = team[group] && team[group][pos];
    if (p) opts.push({ slot:`${group}:${pos}`, label:`${p.name} · ${p.pos} ${p.ovr} OVR · ${tierOf(p.ovr).rp} RP (${group==='starters'?'Starter':'Bench'})`, player:p });
  }));
  return opts;
}
async function renderTradeScreen(){
  if (backend.mode !== 'gas'){
    document.getElementById('trade-unavailable').classList.remove('hidden');
    document.getElementById('trade-panel').classList.add('hidden');
    document.getElementById('trade-incoming').innerHTML = '';
    document.getElementById('trade-outgoing').innerHTML = '';
    return;
  }
  document.getElementById('trade-unavailable').classList.add('hidden');
  document.getElementById('trade-panel').classList.remove('hidden');
 
  let users = [];
  try { users = await backend.listUsers(state.user); } catch(e){}
  const sel = document.getElementById('trade-user-select');
  sel.innerHTML = users.length ? users.map(u=>`<option value="${escapeHtml(u)}">${escapeHtml(u)}</option>`).join('') : '<option value="">No other coaches yet</option>';
  sel.onchange = renderTradeBuilder;
  await renderTradeBuilder();
  await renderTradeLists();
}
async function renderTradeBuilder(){
  const target = document.getElementById('trade-user-select').value;
  const wrap = document.getElementById('trade-builder');
  if (!target){ wrap.innerHTML = ''; return; }
  const myOptions = rosterOptions(state.team);
  let theirTeam = null;
  try { theirTeam = await backend.getUserRoster(target); } catch(e){}
  const theirOptions = theirTeam ? rosterOptions(theirTeam) : [];
  wrap.innerHTML = `
    <div class="field"><label>Your player to offer</label>
      <select id="trade-offer-select">${myOptions.map(o=>`<option value="${o.slot}">${escapeHtml(o.label)}</option>`).join('') || '<option value="">No players in your Fantasy Mode roster yet</option>'}</select>
    </div>
    <div class="field"><label>Their player you want</label>
      <select id="trade-request-select">${theirOptions.map(o=>`<option value="${o.slot}">${escapeHtml(o.label)}</option>`).join('') || '<option value="">No players found on their roster</option>'}</select>
    </div>`;
}
async function renderTradeLists(){
  let lists = {incoming:[], outgoing:[]};
  try { lists = await backend.listTradesFor(state.user); } catch(e){}
  const inEl = document.getElementById('trade-incoming');
  const outEl = document.getElementById('trade-outgoing');
 
  inEl.innerHTML = lists.incoming.length ? lists.incoming.map(t=>`
    <div class="panel" style="margin-bottom:10px;padding:12px;">
      <p style="margin:0 0 8px;font-size:13px;">${escapeHtml(t.from)} offers <b>${escapeHtml(t.offeredPlayer.name)}</b> (${t.offeredPlayer.ovr} OVR · ${tierOf(t.offeredPlayer.ovr).rp} RP) for your <b>${escapeHtml(t.requestedPlayer.name)}</b> (${t.requestedPlayer.ovr} OVR · ${tierOf(t.requestedPlayer.ovr).rp} RP)</p>
      <button class="btn btn-sm btn-primary" data-accept="${t.id}">Accept</button>
      <button class="btn btn-sm btn-ghost" data-reject="${t.id}">Reject</button>
    </div>`).join('') : '<p class="panel-desc">No pending offers.</p>';
 
  outEl.innerHTML = lists.outgoing.length ? lists.outgoing.map(t=>`
    <div class="panel" style="margin-bottom:10px;padding:12px;">
      <p style="margin:0 0 8px;font-size:13px;">You offered <b>${escapeHtml(t.offeredPlayer.name)}</b> to ${escapeHtml(t.to)} for their <b>${escapeHtml(t.requestedPlayer.name)}</b></p>
      <button class="btn btn-sm btn-ghost" data-cancel="${t.id}">Cancel</button>
    </div>`).join('') : '<p class="panel-desc">No outgoing offers.</p>';
 
  inEl.querySelectorAll('[data-accept]').forEach(b=>b.addEventListener('click', ()=>respondToTrade(b.dataset.accept, true)));
  inEl.querySelectorAll('[data-reject]').forEach(b=>b.addEventListener('click', ()=>respondToTrade(b.dataset.reject, false)));
  outEl.querySelectorAll('[data-cancel]').forEach(b=>b.addEventListener('click', ()=>cancelMyTrade(b.dataset.cancel)));
}
async function respondToTrade(id, accept){
  let res = {success:false};
  try { res = await backend.respondTrade(id, state.user, accept); } catch(e){}
  toast(res.message || (accept?'Trade accepted.':'Trade rejected.'));
  if (res.success && accept){
    try {
      const fresh = await backend.getUserRoster(state.user);
      if (fresh){ state.team = { ...emptyTeam(), ...fresh }; persist(); renderTopbar(); }
    } catch(e){}
  }
  renderTradeLists();
}
async function cancelMyTrade(id){
  try { await backend.cancelTrade(id, state.user); } catch(e){}
  renderTradeLists();
}
function wireTrade(){
  document.getElementById('btn-propose-trade').addEventListener('click', async ()=>{
    const target = document.getElementById('trade-user-select').value;
    const offerSel = document.getElementById('trade-offer-select');
    const requestSel = document.getElementById('trade-request-select');
    const offerSlot = offerSel && offerSel.value;
    const requestSlot = requestSel && requestSel.value;
    if (!target || !offerSlot || !requestSlot){ toast('Pick a coach and both players first.'); return; }
    const [og,op] = offerSlot.split(':');
    const offeredPlayer = state.team[og][op];
    let theirTeam = null;
    try { theirTeam = await backend.getUserRoster(target); } catch(e){}
    if (!theirTeam){ toast('Could not load their roster.'); return; }
    const [rg,rp] = requestSlot.split(':');
    const requestedPlayer = theirTeam[rg][rp];
    let res = {success:false};
    try { res = await backend.proposeTrade(state.user, target, offerSlot, offeredPlayer, requestSlot, requestedPlayer); } catch(e){}
    document.getElementById('trade-propose-msg').textContent = res.message || '';
    if (res.success) renderTradeLists();
  });
}
 
// =========================================================================
// INIT
// =========================================================================
async function init(){
  wireAuth(); wireHome(); wireBuilder(); wireMatch(); wireSeason(); wireTournament(); wireCustom(); wireLadder(); wireTrade(); wireNav();
  renderOddsTable();
  showScreen('auth');
}
document.addEventListener('DOMContentLoaded', init);
 
})();
 
