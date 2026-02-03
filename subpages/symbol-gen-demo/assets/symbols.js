/*
Redoes the list using categories for better organization

Codes are still defnied by the MIL-STD-2525 specification
S – Scheme (Warfighting)

F – Affiliation (Friendly)

G – Battle Dimension (Ground Unit)

P – Status (Present)

U – Function (Unit)

C – Unit Type (Infantry)

I – Additional Unit Descriptor (e.g., Mechanized / specific subtype)
However they are now spilted into a code section where the SIDC codes are defined and a name and category section for easier browsing and selection in the UI

All symbols have been tested to work with most options in the UI 
Remove any that do not work with the current rendering system

mil-std----e 2525
*/
export const symbolMap = [
  // ==========================
  // Ground Units
  // ==========================
  { code: "SFGPUCI---R----", name: "Infantry Unit (Motorized, Reduced)", category: "Ground / Infantry" },
  { code: "SFGPUCA---F----", name: "Armor Unit (Battalion)", category: "Ground / Armor" },
  { code: "SFGPUCF---C----", name: "Engineer Unit (Section)", category: "Ground / Engineer" },
  { code: "SFGPUCR---E----", name: "Reconnaissance Unit (Company)", category: "Ground / Reconnaissance" },
  { code: "SFGPUSMM----", name: "Medical Unit (Battalion)", category: "Ground / Support" },
  { code: "SFGPU-------", name: "Unspecified Ground Unit", category: "Ground / General" },
  { code: "SFGPUULC----", name: "Logistics Unit (Corps)", category: "Ground / Logistics" },
  { code: "SFGPUC------", name: "Combat Unit (Unspecified Echelon)", category: "Ground / Combat" },
  { code: "SFGPUCD-----", name: "Dismounted Infantry Unit", category: "Ground / Infantry" },
  { code: "SFGPUCDS----", name: "Dismounted Infantry Support Unit", category: "Ground / Infantry" },
  { code: "SFGPUCDM----", name: "Dismounted Infantry (Mechanized)", category: "Ground / Infantry" },
  { code: "SFGPUCDML---", name: "Dismounted Infantry (Mechanized, Light)", category: "Ground / Infantry" },
  { code: "SFGPUCDMLA--", name: "Dismounted Infantry (Mechanized, Light, Airborne)", category: "Ground / Infantry" },
  { code: "SFGPUCDMM---", name: "Dismounted Infantry (Mechanized, Medium)", category: "Ground / Infantry" },
  { code: "SFGPUCDMH---", name: "Dismounted Infantry (Mechanized, Heavy)", category: "Ground / Infantry" },
  { code: "SFGPUCDH----", name: "Dismounted Infantry (Heavy)", category: "Ground / Infantry" },
  { code: "SFGPUCDG----", name: "Dismounted Infantry (General)", category: "Ground / Infantry" },
  { code: "SFGPUCDC----", name: "Dismounted Infantry (Command)", category: "Ground / Infantry" },
  { code: "SFGPUCDT----", name: "Dismounted Infantry (Tactical)", category: "Ground / Infantry" },
  { code: "SFGPUCDO----", name: "Dismounted Infantry (Observation)", category: "Ground / Infantry" },
  { code: "SFGPUCIZ----", name: "Infantry Unit (Zone)", category: "Ground / Infantry" },
  { code: "SFGPUCIC----", name: "Infantry Unit (Command)", category: "Ground / Infantry" },
  { code: "SFGPUCA-----", name: "Armor Unit", category: "Ground / Armor" },
  { code: "SFGPUCAA----", name: "Armor Assault Unit", category: "Ground / Armor" },
  { code: "SFGPUCAAD---", name: "Armor Air Defense Unit", category: "Ground / Armor" },
  { code: "SFGPUCAAL---", name: "Armor Unit (Light)", category: "Ground / Armor" },
  { code: "SFGPUCV-----", name: "Vehicle Unit", category: "Ground / Vehicle" },
  { code: "SFGPUCVF----", name: "Vehicle Unit (Fire Support)", category: "Ground / Vehicle" },
  { code: "SFGPUCVFU---", name: "Vehicle Unit (Fire Utility)", category: "Ground / Vehicle" },
  { code: "SFGPUCVFA---", name: "Vehicle Unit (Fire Assault)", category: "Ground / Vehicle" },
  { code: "SFGPUCVR----", name: "Vehicle Unit (Reconnaissance)", category: "Ground / Vehicle" },
  { code: "SFGPUCVRA---", name: "Vehicle Unit (Reconnaissance, Airborne)", category: "Ground / Vehicle" },
  { code: "SFGPUCVRS---", name: "Vehicle Unit (Reconnaissance, Support)", category: "Ground / Vehicle" },
  { code: "SFGPUCVRW---", name: "Vehicle Unit (Reconnaissance, Wheeled)", category: "Ground / Vehicle" },
  { code: "SFGPUCVRU---", name: "Vehicle Unit (Reconnaissance, Utility)", category: "Ground / Vehicle" },
  { code: "SFGPUCVRUL--", name: "Vehicle Unit (Reconnaissance, Utility, Light)", category: "Ground / Vehicle" },
  { code: "SFGPUCVRUM--", name: "Vehicle Unit (Reconnaissance, Utility, Medium)", category: "Ground / Vehicle" },
  { code: "SFGPUCVRUH--", name: "Vehicle Unit (Reconnaissance, Utility, Heavy)", category: "Ground / Vehicle" },
  { code: "SFGPUCVRUC--", name: "Vehicle Unit (Reconnaissance, Utility, Command)", category: "Ground / Vehicle" },
  { code: "SFGPUCVRUE--", name: "Vehicle Unit (Reconnaissance, Utility, Engineer)", category: "Ground / Vehicle" },
  { code: "SFGPUCVRM---", name: "Vehicle Unit (Reconnaissance, Mechanized)", category: "Ground / Vehicle" },
  { code: "SFGPUCE-----", name: "Engineer Unit", category: "Ground / Engineer" },
  { code: "SFGPUCEC----", name: "Engineer Unit (Command)", category: "Ground / Engineer" },
  { code: "SFGPUCECS---", name: "Engineer Unit (Command, Support)", category: "Ground / Engineer" },
  { code: "SFGPUCECA---", name: "Engineer Unit (Command, Airborne)", category: "Ground / Engineer" },
  { code: "SFGPUCM-----", name: "Mortar Unit", category: "Ground / Artillery" },
  { code: "SFGPUCMT----", name: "Mortar Unit (Tactical)", category: "Ground / Artillery" },
  { code: "SFGPUCMS----", name: "Mortar Unit (Support)", category: "Ground / Artillery" },
  { code: "SFGPUCR-----", name: "Reconnaissance Unit", category: "Ground / Reconnaissance" },
  { code: "SFGPUCRH----", name: "Reconnaissance Unit (Heavy)", category: "Ground / Reconnaissance" },
  { code: "SFGPUCRV----", name: "Reconnaissance Unit (Vehicle)", category: "Ground / Reconnaissance" },
  { code: "SFGPUCS-----", name: "Supply Unit", category: "Ground / Support" },
  { code: "SFGPUCSW----", name: "Supply Unit (Wheeled)", category: "Ground / Support" },
  { code: "SFGPUCSG----", name: "Supply Unit (General)", category: "Ground / Support" },
  
  // ==========================
  // Air Units / Aviation
  // ==========================
  { code: "SFGPUCAT----", name: "Attack Aviation Unit", category: "Air / Attack Aviation" },
  { code: "SFGPUCATA---", name: "Attack Aviation (Airborne)", category: "Air / Attack Aviation" },
  { code: "SFGPUCATW---", name: "Attack Aviation (Wheeled)", category: "Air / Attack Aviation" },
  { code: "SFGPUCATWR--", name: "Attack Aviation (Wheeled, Reduced)", category: "Air / Attack Aviation" },
  { code: "SFGPUCATL---", name: "Attack Aviation (Light)", category: "Air / Attack Aviation" },
  { code: "SFGPUCATM---", name: "Attack Aviation (Mechanized)", category: "Air / Attack Aviation" },
  { code: "SFGPUCATH---", name: "Attack Aviation (Heavy)", category: "Air / Attack Aviation" },
  { code: "SFGPUCATR---", name: "Attack Aviation (Reconnaissance)", category: "Air / Attack Aviation" },
  { code: "SFGPUCAW----", name: "Aviation Unit (Wheeled)", category: "Air / Aviation" },
  { code: "SFGPUCAAA---", name: "Aviation Assault Unit", category: "Air / Aviation" },
  { code: "SFGPUCAAAT--", name: "Aviation Assault (Tactical)", category: "Air / Aviation" },
  { code: "SFGPUCAAU---", name: "Aviation Utility Unit", category: "Air / Aviation" },
  { code: "SFGPUCAAOS--", name: "Aviation Observation (Support)", category: "Air / Aviation" },
  { code: "SFGPUCAAO---", name: "Aviation Observation Unit", category: "Air / Aviation" },
  { code: "SFGPUCAAAW--", name: "Aviation Assault (Wheeled)", category: "Air / Aviation" },
  { code: "SFGPUCAWS---", name: "Aviation Support (Wheeled)", category: "Air / Aviation" },
  { code: "SFGPUCAWA---", name: "Aviation Assault (Wheeled, Airborne)", category: "Air / Aviation" },
  { code: "SFGPUCAAC---", name: "Aviation Composite Unit", category: "Air / Aviation" },
  { code: "SFGPUCAWM---", name: "Aviation Unit (Wheeled, Mechanized)", category: "Air / Aviation" },
  { code: "SFGPUCAWH---", name: "Aviation Unit (Wheeled, Heavy)", category: "Air / Aviation" },
  { code: "SFGPUCAWL---", name: "Aviation Unit (Wheeled, Light)", category: "Air / Aviation" },
  { code: "SFGPUCAWW---", name: "Aviation Unit (Wheeled, Wheeled)", category: "Air / Aviation" },
  { code: "SFGPUCATL---", name: "Attack Aviation (Light)", category: "Air / Attack Aviation" },

  // ==========================
  // Civil / Special / Miscellaneous
  // ==========================
  { code: "SFAPC---------", name: "Civil Aircraft Unit", category: "Civil / Aircraft" },
  { code: "O*O*S-----*****", name: "Spy", category: "Special / Operations" },
  { code: "O*O*O-----*****", name: "Food distribution", category: "Special / Operations" },
  { code: "O*O*E-----*****", name: "Extortion", category: "Special / Operations" },
  { code: "O*O*HT----*****", name: "Hijacking (Vehicle)", category: "Special / Operations" },
  { code: "O*O*HA----*****", name: "Hijacking (Airplane)", category: "Special / Operations" },
  { code: "O*O*HV----*****", name: "Hijacking (Boat)", category: "Special / Operations" },
  { code: "O*O*K-----*****", name: "Kidnapping", category: "Special / Operations" },
  { code: "O*O*A-----*****", name: "Arrest", category: "Special / Operations" },
  { code: "O*O*U-----*****", name: "Drug operation", category: "Special / Operations" },
  { code: "O*I*R-----*****", name: "Refugees", category: "Special / Operations" },

  // ==========================
  // Space Units
  // ==========================
  { code: "S*P*------*****", name: "Space Track", category: "Space / Track" },
  { code: "S*P*S-----*****", name: "Satellite", category: "Space / Satellite" },
  { code: "S*P*V-----*****", name: "Crewed Space Vehicle", category: "Space / Vehicle" },
  { code: "S*P*T-----*****", name: "Space Station", category: "Space / Station" },

  // ==========================
  // Air / Aircraft (more detailed from S*A* list)
  // ==========================
  { code: "S*A*------*****", name: "Air Track", category: "Air / Track" },
  { code: "S*A*M-----*****", name: "Military", category: "Air / Military" },
  { code: "S*A*MF----*****", name: "Fixed Wing", category: "Air / Fixed Wing" },
  { code: "S*A*MFB---*****", name: "Bomber", category: "Air / Fixed Wing" },
  { code: "S*A*MFF---*****", name: "Fighter", category: "Air / Fixed Wing" },
  { code: "S*A*MFFI--*****", name: "Interceptor", category: "Air / Fixed Wing" },
  { code: "S*A*MFT---*****", name: "Trainer", category: "Air / Fixed Wing" },
  { code: "S*A*MFA---*****", name: "Attack/Strike", category: "Air / Fixed Wing" },
  { code: "S*A*MFL---*****", name: "VSTOL", category: "Air / Fixed Wing" },
  { code: "S*A*MFK---*****", name: "Tanker", category: "Air / Fixed Wing" },
  { code: "S*A*MFC---*****", name: "Cargo Airlift (Transport)", category: "Air / Fixed Wing" },
  { code: "S*A*MFCL--*****", name: "Cargo Airlift (Light)", category: "Air / Fixed Wing" },
  { code: "S*A*MFCM--*****", name: "Cargo Airlift (Medium)", category: "Air / Fixed Wing" },
  { code: "S*A*MFCH--*****", name: "Cargo Airlift (Heavy)", category: "Air / Fixed Wing" },
  { code: "S*A*MFJ---*****", name: "Electronic Countermeasures (ECM/Jammer)", category: "Air / Fixed Wing" },
  { code: "S*A*MFO---*****", name: "Medevac", category: "Air / Fixed Wing" },
  { code: "S*A*MFR---*****", name: "Reconnaissance", category: "Air / Fixed Wing" },
  { code: "S*A*MFRW--*****", name: "Airborne Early Warning (AEW)", category: "Air / Fixed Wing" },
  { code: "S*A*MFRZ--*****", name: "Electronic Surveillance Measures", category: "Air / Fixed Wing" },
  { code: "S*A*MFRX--*****", name: "Photographic", category: "Air / Fixed Wing" },
  { code: "S*A*MFP---*****", name: "Patrol", category: "Air / Fixed Wing" },
  { code: "S*A*MFPN--*****", name: "Anti-Surface Warfare (ASuW)", category: "Air / Fixed Wing" },
  { code: "S*A*MFPM--*****", name: "Mine Countermeasures", category: "Air / Fixed Wing" },
  { code: "S*A*MFU---*****", name: "Utility", category: "Air / Fixed Wing" },
  { code: "S*A*MFUL--*****", name: "Utility (Light)", category: "Air / Fixed Wing" },
  { code: "S*A*MFUM--*****", name: "Utility (Medium)", category: "Air / Fixed Wing" },
  { code: "S*A*MFUH--*****", name: "Utility (Heavy)", category: "Air / Fixed Wing" },
  { code: "S*A*MFY---*****", name: "Communications (C3I)", category: "Air / Fixed Wing" },
  { code: "S*A*MFH---*****", name: "Combat Search and Rescue (CSAR)", category: "Air / Fixed Wing" },
  { code: "S*A*MFD---*****", name: "Airborne Command Post (C2)", category: "Air / Fixed Wing" },
  { code: "S*A*MFQ---*****", name: "Drone (RPV/UAV)", category: "Air / Fixed Wing" },
  { code: "S*A*MFS---*****", name: "ASW (Carrier Based)", category: "Air / Fixed Wing" },
  { code: "S*A*MFM---*****", name: "Special Operations Forces (SOF)", category: "Air / Fixed Wing" },
  { code: "S*A*MH----*****", name: "Rotary Wing", category: "Air / Rotary Wing" },
  { code: "S*A*MHA---*****", name: "Attack", category: "Air / Rotary Wing" },
  { code: "S*A*MHS---*****", name: "ASW / MPA", category: "Air / Rotary Wing" },
  { code: "S*A*MHU---*****", name: "Utility", category: "Air / Rotary Wing" },
  { code: "S*A*MHUL--*****", name: "Utility (Light)", category: "Air / Rotary Wing" },
  { code: "S*A*MHUM--*****", name: "Utility (Medium)", category: "Air / Rotary Wing" },
  { code: "S*A*MHUH--*****", name: "Utility (Heavy)", category: "Air / Rotary Wing" },
  { code: "S*A*MHI---*****", name: "Mine Countermeasures", category: "Air / Rotary Wing" },
  { code: "S*A*MHH---*****", name: "Combat Search and Rescue (CSAR)", category: "Air / Rotary Wing" },
  { code: "S*A*MHR---*****", name: "Reconnaissance", category: "Air / Rotary Wing" },
  { code: "S*A*MHQ---*****", name: "Drone (RPV/UAV)", category: "Air / Rotary Wing" },
  { code: "S*A*MHC---*****", name: "Cargo Airlift (Transport)", category: "Air / Rotary Wing" },
  { code: "S*A*MHCL--*****", name: "Cargo Airlift (Light)", category: "Air / Rotary Wing" },
  { code: "S*A*MHCM--*****", name: "Cargo Airlift (Medium)", category: "Air / Rotary Wing" },
  { code: "S*A*MHCH--*****", name: "Cargo Airlift (Heavy)", category: "Air / Rotary Wing" },
  { code: "S*A*MHT---*****", name: "Trainer", category: "Air / Rotary Wing" },
  { code: "S*A*MHO---*****", name: "Medevac", category: "Air / Rotary Wing" },
  { code: "S*A*MHM---*****", name: "Special Operations Forces (SOF)", category: "Air / Rotary Wing" },
  { code: "S*A*MHD---*****", name: "Airborne Command Post (C2)", category: "Air / Rotary Wing" },
  { code: "S*A*MHK---*****", name: "Tanker", category: "Air / Rotary Wing" },
  { code: "S*A*MHJ---*****", name: "Electronic Countermeasures (ECM/Jammer)", category: "Air / Rotary Wing" },
  { code: "S*A*ML----*****", name: "Lighter Than Air", category: "Air / Lighter Than Air" },

  // ==========================
  // Weapons / Missiles
  // ==========================
  { code: "S*A*W-----*****", name: "Weapon", category: "Weapons / General" },
  { code: "S*A*WM----*****", name: "Missile in Flight", category: "Weapons / Missile" },
  { code: "S*A*WMS---*****", name: "Surface Launched Missile", category: "Weapons / Missile" },
  { code: "S*A*WMSS--*****", name: "Surface-to-Surface Missile (SSM)", category: "Weapons / Missile" },
  { code: "S*A*WMSA--*****", name: "Surface-to-Air Missile (SAM)", category: "Weapons / Missile" },
  { code: "S*A*WMA---*****", name: "Air Launched Missile", category: "Weapons / Missile" },
  { code: "S*A*WMAS--*****", name: "Air-to-Surface Missile (ASM)", category: "Weapons / Missile" },
  { code: "S*A*WMAA--*****", name: "Air-to-Air Missile (AAM)", category: "Weapons / Missile" },
  { code: "S*A*WMU---*****", name: "Subsurface-to-Surface Missile (S/SSM)", category: "Weapons / Missile" },
  { code: "S*A*WD----*****", name: "Decoy", category: "Weapons / Decoy" },

  // ==========================
  // Air Civil Aircraft
  // ==========================
  { code: "S*A*C-----*****", name: "Civil Aircraft", category: "Civil / Aircraft" },
  { code: "S*A*CF----*****", name: "Fixed Wing", category: "Civil / Aircraft" },
  { code: "S*A*CH----*****", name: "Rotary Wing", category: "Civil / Aircraft" },
  { code: "S*A*CL----*****", name: "Lighter Than Air", category: "Civil / Aircraft" },

  // ==========================
  // Ground Combat / Air Defense
  // ==========================
  { code: "S*G*U-----*****", name: "Unit", category: "Ground / General" },
  { code: "S*G*UC----*****", name: "Combat", category: "Ground / Combat" },
  { code: "S*G*UCD---*****", name: "Air Defense", category: "Ground / Air Defense" },
  { code: "S*G*UCDS--*****", name: "Air Defense (Short Range)", category: "Ground / Air Defense" },
  { code: "S*G*UCDM--*****", name: "Air Defense Missile", category: "Ground / Air Defense" },
  { code: "S*G*UCDML-*****", name: "Air Defense Missile (Light)", category: "Ground / Air Defense" },
  { code: "S*G*UCDMLA*****", name: "Air Defense Missile (Motorized - AVENGER)", category: "Ground / Air Defense" },
  { code: "S*G*UCDMM-*****", name: "Air Defense Missile (Medium)", category: "Ground / Air Defense" },
  { code: "S*G*UCDMH-*****", name: "Air Defense Missile (Heavy)", category: "Ground / Air Defense" }
];