/* ============================================================
   MISSION CONFIG  —  edit this file to update the facts.
   Anything marked TODO is a guess or a blank you should fill in.
   ============================================================ */

window.MISSION = {

  missionary: {
    firstName: "James",
    lastName: "Pond",
    title: "Elder",
    get fullName() { return this.title + " " + this.firstName + " " + this.lastName; },
    email: "stillman.pond@missionary.org",
    portrait: "photos/james.jpg",            // drop his mission photo here
    tagline: "¡Pura vida! Serving the people of Costa Rica with his whole heart.",
    homeWard: "Peacefield",                  // as the family gave it
    farewellDate: ""                         // TODO: optional, YYYY-MM-DD
  },

  mission: {
    name: "Costa Rica San José West Mission",
    shortName: "San José",
    country: "Costa Rica",
    language: "Spanish",
    languageNative: "Español",
    presidentName: "President John C. Maddux and Sister Laurie H. Maddux",
    // The About page's "mission president" section. bio is in our own words from
    // the source; the section stays hidden while names or bio are empty.
    president: {
      names: "President John C. Maddux and Sister Laurie H. Maddux",
      since: "2024-07-01",                   // the 2024 mission leaders began on or about July 1
      photo: "",                             // optional: a photo of them, e.g. one he sends
      bio: [
        "President and Sister Maddux came to Costa Rica from the Valley Vista Ward of the Camarillo California Stake, and they are the parents of three children. They began leading the mission in the summer of 2024.",
        "President Maddux was born in Los Angeles, California, and served his own mission in Texas, in the San Antonio Mission. He has been a bishop, a stake mission president and a counselor in a stake presidency. Sister Maddux was born in Ogden, Utah."
      ],
      source: { label: "Church News", url: "https://www.thechurchnews.com/leaders/2024/03/01/learn-about-the-new-leaders-who-will-preside-over-16-missions-from-australia-to-venezuela/" }
    },
    officeAddress: [                         // TODO: confirm the street address from the mission office
      "Costa Rica San José West Mission",
      "Costa Rica"
    ],
    mapCenter: [9.9281, -84.0907],           // San José, Costa Rica
    mapZoom: 7,
    // Rough outline of the mission (the western Central Valley around San José,
    // Heredia and Alajuela, out toward Guanacaste in the northwest). Decorative only.
    boundsHint: [[11.2, -86.0], [9.4, -83.8]]
  },

  dates: {
    mtcStart: "2026-08-27",                  // entered the Mexico MTC (home MTC training began 2026-08-12)
    manilaMtcStart: "",                      // no second MTC on this path
    fieldStart: "2026-09-23",                // arrived in Costa Rica
    release: "2028-08-12",                   // expected release / homecoming
    transferLength: 6                        // weeks per transfer
  },

  links: {
    // The shared album the family gave
    googlePhotos: "https://photos.app.goo.gl/B26MFZGLfg2bpqnK7"
  },

  /* ------------------------------------------------------------
     GOOGLE MAPS
     Paste your Maps JavaScript API key below and the map page turns
     on. See "Setting up the map" in README.md for how to get one.
     Until a key is here, the page shows a friendly notice instead of
     a broken map. The key is visible in the page source — that is
     normal for Google Maps — so restrict it by website in the Google
     Cloud console once the site is deployed.
     ------------------------------------------------------------ */
  maps: {
    apiKey: "AIzaSyAFgOVCbW4-VKrasthQZ4g2PvMfPcQm0J4",           // <-- paste the key between the quotes
    defaultZoom: 17,      // how close the map starts. 15 = neighbourhood, 18 = rooftops
    mapType: "hybrid"     // "hybrid" = satellite with street names, "satellite" = imagery only
  },

  /* ------------------------------------------------------------
     AREAS — add a new entry every time he gets transferred.
     Set `current: true` on exactly one, and give the previous one
     an `end` date. Look up lat/lng by searching the town on
     Google Maps and copying the two numbers from the URL.
     ------------------------------------------------------------ */
  areas: [
    {
      name: "Mexico MTC",
      region: "Mexico City, Mexico",
      type: "mtc",
      start: "2026-08-27",
      end: "2026-09-23",
      lat: null,                             // TODO: exact coordinates of the Mexico MTC campus not confirmed
      lng: null,
      companion: "Elder Adams",
      note: "Companions from the start of home MTC training on 2026-08-12 through the Mexico MTC.",
      current: false
    },
    {
      name: "Flores",
      region: "Heredia, Costa Rica",
      type: "area",
      start: "2026-09-23",
      end: "2026-11-04",
      lat: 10.0060,                          // Flores canton (San Joaquín de Flores), Heredia
      lng: -84.1539,
      companion: "Elder Gardner and Elder Bailey",
      note: "First transfer in Costa Rica, in a trio with two zone leaders.",
      current: false
    },
    {
      name: "Nicoya",
      region: "Guanacaste, Costa Rica",
      type: "area",
      start: "2026-11-04",
      end: null,
      lat: 10.1504,                          // Nicoya, Guanacaste
      lng: -85.4509,
      companion: "",                         // TODO: not named yet
      note: "",
      current: true
    }
  ]
};
