// symbols.js
/*

This is pulled from an XML list found on an open source github project using the same libary using the format 
Done to save time in creating the list form hand

S – Scheme (Warfighting)

F – Affiliation (Friendly)

G – Battle Dimension (Ground Unit)

P – Status (Present)

U – Function (Unit)

C – Unit Type (Infantry)

I – Additional Unit Descriptor (e.g., Mechanized / specific subtype)

Important Notes:

Some units will not be able to have certain settings applied to them.

Some units may appear as a question mark, indicating a failed or invalid unit code in this list.
*/

export const symbolMap = {
  // Ground Units (Friendly, Ground, Unit)
  "SFGPUCI---R----": "Infantry Unit (Motorized, Reduced)", // From second list
  "SFGPUCA---F----": "Armor Unit (Battalion)", // From second list
  "SFGPUCF---C----": "Engineer Unit (Section)", // From second list
  "SFGPUCR---E----": "Reconnaissance Unit (Company)", // From second list
  "SFAPC---------": "Civil Aircraft Unit", // From second list
  "SFGPUSMM----": "Medical Unit (Battalion)",
  "SFGPU-------": "Unspecified Ground Unit",
  "SFGPUULC----": "Logistics Unit (Corps)",
  "SFGPUC------": "Combat Unit (Unspecified Echelon)",
  "SFGPUCD-----": "Dismounted Infantry Unit",
  "SFGPUCDS----": "Dismounted Infantry Support Unit",
  "SFGPUCAT----": "Attack Aviation Unit",
  "SFGPUCATA---": "Attack Aviation (Airborne)",
  "SFGPUCATW---": "Attack Aviation (Wheeled)",
  "SFGPUCAAM---": "Anti-Armor Unit",
  "SFGPUCAAS---": "Air Assault Unit",
  "SFGPUCAAU---": "Aviation Utility Unit",
  "SFGPUCATWR--": "Attack Aviation (Wheeled, Reduced)",
  "SFGPUCATL---": "Attack Aviation (Light)",
  "SFGPUCATM---": "Attack Aviation (Mechanized)",
  "SFGPUCAAC---": "Aviation Composite Unit",
  "SFGPUCAAA---": "Aviation Assault Unit",
  "SFGPUCAAAT--": "Aviation Assault (Tactical)",
  "SFGPUCDM----": "Dismounted Infantry (Mechanized)",
  "SFGPUCDML---": "Dismounted Infantry (Mechanized, Light)",
  "SFGPUCDMLA--": "Dismounted Infantry (Mechanized, Light, Airborne)",
  "SFGPUCDMM---": "Dismounted Infantry (Mechanized, Medium)",
  "SFGPUCATH---": "Attack Aviation (Heavy)",
  "SFGPUCATR---": "Attack Aviation (Reconnaissance)",
  "SFGPUCAW----": "Aviation Unit (Wheeled)",
  "SFGPUCAAAW--": "Aviation Assault (Wheeled)",
  "SFGPUCAAAS--": "Aviation Assault (Support)",
  "SFGPUCAAO---": "Aviation Observation Unit",
  "SFGPUCAWS---": "Aviation Support (Wheeled)",
  "SFGPUCAWA---": "Aviation Assault (Wheeled, Airborne)",
  "SFGPUCAAOS--": "Aviation Observation (Support)",
  "SFGPUCV-----": "Vehicle Unit",
  "SFGPUCDMH---": "Dismounted Infantry (Mechanized, Heavy)",
  "SFGPUCDH----": "Dismounted Infantry (Heavy)",
  "SFGPUCDG----": "Dismounted Infantry (General)",
  "SFGPUCDC----": "Dismounted Infantry (Command)",
  "SFGPUCAWW---": "Aviation Unit (Wheeled, Wheeled)",
  "SFGPUCAWL---": "Aviation Unit (Wheeled, Light)",
  "SFGPUCVF----": "Vehicle Unit (Fire Support)",
  "SFGPUCVFU---": "Vehicle Unit (Fire Utility)",
  "SFGPUCVFA---": "Vehicle Unit (Fire Assault)",
  "SFGPUCAWM---": "Aviation Unit (Wheeled, Mechanized)",
  "SFGPUCAWH---": "Aviation Unit (Wheeled, Heavy)",
  "SFGPUCVFR---": "Vehicle Unit (Fire Reconnaissance)",
  "SFGPUCVR----": "Vehicle Unit (Reconnaissance)",
  "SFGPUCVRA---": "Vehicle Unit (Reconnaissance, Airborne)",
  "SFGPUCDT----": "Dismounted Infantry (Tactical)",
  "SFGPUCDO----": "Dismounted Infantry (Observation)",
  "SFGPUCA-----": "Armor Unit",
  "SFGPUCAA----": "Armor Assault Unit",
  "SFGPUCAAD---": "Armor Air Defense Unit",
  "SFGPUCAAL---": "Armor Unit (Light)",
  "SFGPUCVRS---": "Vehicle Unit (Reconnaissance, Support)",
  "SFGPUCVRW---": "Vehicle Unit (Reconnaissance, Wheeled)",
  "SFGPUCVRU---": "Vehicle Unit (Reconnaissance, Utility)",
  "SFGPUCVRUL--": "Vehicle Unit (Reconnaissance, Utility, Light)",
  "SFGPUCVRUM--": "Vehicle Unit (Reconnaissance, Utility, Medium)",
  "SFGPUCVRUH--": "Vehicle Unit (Reconnaissance, Utility, Heavy)",
  "SFGPUCIZ----": "Infantry Unit (Zone)",
  "SFGPUCIC----": "Infantry Unit (Command)",
  "SFGPUCE-----": "Engineer Unit",
  "SFGPUCVRUC--": "Vehicle Unit (Reconnaissance, Utility, Command)",
  "SFGPUCVRUE--": "Vehicle Unit (Reconnaissance, Utility, Engineer)",
  "SFGPUCVRM---": "Vehicle Unit (Reconnaissance, Mechanized)",
  "SFGPUCEC----": "Engineer Unit (Command)",
  "SFGPUCECS---": "Engineer Unit (Command, Support)",
  "SFGPUCECA---": "Engineer Unit (Command, Airborne)",
  "SFGPUCFHA---": "Field Artillery Unit (Heavy, Airborne)",
  "SFGPUCFHC---": "Field Artillery Unit (Heavy, Command)",
  "SFGPUCFHO---": "Field Artillery Unit (Heavy, Observation)",
  "SFGPUCFT----": "Field Artillery Unit (Tactical)",
  "SFGPUCFTCM--": "Field Artillery Unit (Tactical, Command, Mechanized)",
  "SFGPUCFHL---": "Field Artillery Unit (Heavy, Light)",
  "SFGPUCFHM---": "Field Artillery Unit (Heavy, Mechanized)",
  "SFGPUCFHH---": "Field Artillery Unit (Heavy, Heavy)",
  "SFGPUCFM----": "Field Artillery Unit (Missile)",
  "SFGPUCFMS---": "Field Artillery Unit (Missile, Support)",
  "SFGPUCFOA---": "Field Artillery Unit (Observation, Airborne)",
  "SFGPUCFOL---": "Field Artillery Unit (Observation, Light)",
  "SFGPUCFOO---": "Field Artillery Unit (Observation, Observation)",
  "SFGPUCM-----": "Mortar Unit",
  "SFGPUCMT----": "Mortar Unit (Tactical)",
  "SFGPUCMS----": "Mortar Unit (Support)",
  "SFGPUCR-----": "Reconnaissance Unit",
  "SFGPUCRH----": "Reconnaissance Unit (Heavy)",
  "SFGPUCRV----": "Reconnaissance Unit (Vehicle)",
  "SFGPUCS-----": "Supply Unit",
  "SFGPUCSW----": "Supply Unit (Wheeled)",
  "SFGPUCSG----": "Supply Unit (General)",
  "SFGPUUACSA--": "Air Control Unit (Support, Airborne)",
  "SFGPUUACR---": "Air Control Unit (Reconnaissance)",
  "SFGPUUACRW--": "Air Control Unit (Reconnaissance, Wheeled)",
  "SFGPUUMRG---": "Military Intelligence Unit (Reconnaissance, General)",
  "SFGPUUMRS---": "Military Intelligence Unit (Reconnaissance, Support)",
  "SFGPUUMRSS--": "Military Intelligence Unit (Reconnaissance, Support, Support)",
//Added more units from pdf 
  "O*O*S-----*****": "Spy",
  "O*O*O-----*****": "Food distribution",
  "O*O*E-----*****": "Extortion",
  "O*O*HT----*****": "Hijacking (Vehicle)",
  "O*O*HA----*****": "Hijacking (Airplane)",
  "O*O*HV----*****": "Hijacking (Boat)",
  "O*O*K-----*****": "Kidnapping",
  "O*O*A-----*****": "Arrest",
  "O*O*U-----*****": "Drug operation",
  "O*I*R-----*****": "Refugees",
  "S*P*------*****": "Space Track",
  "S*P*S-----*****": "Satellite",
  "S*P*V-----*****": "Crewed Space Vehicle",
  "S*P*T-----*****": "Space Station",

  "S*A*------*****": "Air Track",
  "S*A*M-----*****": "Military",

  "S*A*MF----*****": "Fixed Wing",
  "S*A*MFB---*****": "Bomber",
  "S*A*MFF---*****": "Fighter",
  "S*A*MFFI--*****": "Interceptor",
  "S*A*MFT---*****": "Trainer",
  "S*A*MFA---*****": "Attack/Strike",
  "S*A*MFL---*****": "VSTOL",
  "S*A*MFK---*****": "Tanker",

  "S*A*MFC---*****": "Cargo Airlift (Transport)",
  "S*A*MFCL--*****": "Cargo Airlift (Light)",
  "S*A*MFCM--*****": "Cargo Airlift (Medium)",
  "S*A*MFCH--*****": "Cargo Airlift (Heavy)",

  "S*A*MFJ---*****": "Electronic Countermeasures (ECM/Jammer)",
  "S*A*MFO---*****": "Medevac",
  "S*A*MFR---*****": "Reconnaissance",

  "S*A*MFRW--*****": "Airborne Early Warning (AEW)",
  "S*A*MFRZ--*****": "Electronic Surveillance Measures",
  "S*A*MFRX--*****": "Photographic",

  "S*A*MFP---*****": "Patrol",
  "S*A*MFPN--*****": "Anti-Surface Warfare (ASuW)",
  "S*A*MFPM--*****": "Mine Countermeasures",

  "S*A*MFU---*****": "Utility",
  "S*A*MFUL--*****": "Utility (Light)",
  "S*A*MFUM--*****": "Utility (Medium)",
  "S*A*MFUH--*****": "Utility (Heavy)",

  "S*A*MFY---*****": "Communications (C3I)",
  "S*A*MFH---*****": "Combat Search and Rescue (CSAR)",
  "S*A*MFD---*****": "Airborne Command Post (C2)",
  "S*A*MFQ---*****": "Drone (RPV/UAV)",

  "S*A*MFS---*****": "ASW (Carrier Based)",
  "S*A*MFM---*****": "Special Operations Forces (SOF)",

  "S*A*MH----*****": "Rotary Wing",
  "S*A*MHA---*****": "Attack",
  "S*A*MHS---*****": "ASW / MPA",
  "S*A*MHU---*****": "Utility",

  "S*A*MHUL--*****": "Utility (Light)",
  "S*A*MHUM--*****": "Utility (Medium)",
  "S*A*MHUH--*****": "Utility (Heavy)",

  "S*A*MHI---*****": "Mine Countermeasures",
  "S*A*MHH---*****": "Combat Search and Rescue (CSAR)",
  "S*A*MHR---*****": "Reconnaissance",
  "S*A*MHQ---*****": "Drone (RPV/UAV)",

  "S*A*MHC---*****": "Cargo Airlift (Transport)",
  "S*A*MHCL--*****": "Cargo Airlift (Light)",
  "S*A*MHCM--*****": "Cargo Airlift (Medium)",
  "S*A*MHCH--*****": "Cargo Airlift (Heavy)",

  "S*A*MHT---*****": "Trainer",
  "S*A*MHO---*****": "Medevac",
  "S*A*MHM---*****": "Special Operations Forces (SOF)",
  "S*A*MHD---*****": "Airborne Command Post (C2)",
  "S*A*MHK---*****": "Tanker",
  "S*A*MHJ---*****": "Electronic Countermeasures (ECM/Jammer)",

  "S*A*ML----*****": "Lighter Than Air",

  "S*A*W-----*****": "Weapon",
  "S*A*WM----*****": "Missile in Flight",

  "S*A*WMS---*****": "Surface Launched Missile",
  "S*A*WMSS--*****": "Surface-to-Surface Missile (SSM)",
  "S*A*WMSA--*****": "Surface-to-Air Missile (SAM)",

  "S*A*WMA---*****": "Air Launched Missile",
  "S*A*WMAS--*****": "Air-to-Surface Missile (ASM)",
  "S*A*WMAA--*****": "Air-to-Air Missile (AAM)",

  "S*A*WMU---*****": "Subsurface-to-Surface Missile (S/SSM)",
  "S*A*WD----*****": "Decoy",

  "S*A*C-----*****": "Civil Aircraft",
  "S*A*CF----*****": "Fixed Wing",
  "S*A*CH----*****": "Rotary Wing",
  "S*A*CL----*****": "Lighter Than Air",

  "S*G*U-----*****": "Unit",
  "S*G*UC----*****": "Combat",

  "S*G*UCD---*****": "Air Defense",
  "S*G*UCDS--*****": "Air Defense (Short Range)",

  "S*G*UCDM--*****": "Air Defense Missile",
  "S*G*UCDML-*****": "Air Defense Missile (Light)",
  "S*G*UCDMLA*****": "Air Defense Missile (Motorized - AVENGER)",

  "S*G*UCDMM-*****": "Air Defense Missile (Medium)",
  "S*G*UCDMH-*****": "Air Defense Missile (Heavy)",
};