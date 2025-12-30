//Loads and imports the list of premade symbols from symbols.js

import {
  symbolMap
} from "./symbols.js";

//Stores all doms and ids in one const var "els"
const els = {
  shape: document.getElementById("shape"),
  shapeSearch: document.getElementById("shapeSearch"),
  affiliation: document.getElementById("affiliation"),
  color: document.getElementById("color"),
  label: document.getElementById("label"),
  quantity: document.getElementById("quantity"),
  higherFormation: document.getElementById("higherFormation"),
  status: document.getElementById("status"),
  echelon: document.getElementById("echelon"),
  mobility: document.getElementById("mobility"),
  hq: document.getElementById("hq"),
  reinforcedReduced: document.getElementById("reinforcedReduced"),
  direction: document.getElementById("direction"),
  hideText: document.getElementById("hideText"),
  preview: document.getElementById("symbolPreview"),
  saveSvg: document.getElementById("saveSvg"),
  reset: document.getElementById("resetSymbol"),
  useCustomColor: document.getElementById("useCustomColor"),
  customColorWrapper: document.getElementById("customColorWrapper"),

};

//Logic for tracking if the user has changed the color picker
els.color.addEventListener("input", () => {
  els.color.dataset.userChanged = "true";
});

// Show/hide color picker when toggle is changed
els.useCustomColor.addEventListener("change", () => {
  if (els.useCustomColor.checked) {
    els.customColorWrapper.style.display = "block";
  } else {
    els.customColorWrapper.style.display = "none";
  }
  updateSymbol();
});


// Show/hide color picker when toggle is changed
els.useCustomColor.addEventListener("change", () => {
  if (els.useCustomColor.checked) {
    els.customColorWrapper.style.display = "block";
  } else {
    els.customColorWrapper.style.display = "none";
  }
  updateSymbol();
});


//Sets the Affilation Colors to the NATO defaults based on the UI secltion if not secleted these colors will be used instead 
//set to nato standards 
const affilationColors = {
  'F': '#0000FF', // Freiendly Colors - Freiendly Blue
  'H': '#ff0000', // Hostile - Red
  'N': '#00ff00', //Neutral - Green
  'U': '#ffff00', //Unkown - Yellow
};

//Creatres and populates the dropdown for symbol searching with the names from symbols.js 
//Gets rid of the sidc code  and fliters the searched term to lowercase 
//Turns all search results into a option html element
//Can now search the list using the new list structure with categories
function populateDropdown(filter = "") {
  const current = els.shape.value;
  els.shape.innerHTML = "";

  const groups = {};
  symbolMap.forEach(symbol => {
    if (filter && !symbol.name.toLowerCase().includes(filter.toLowerCase())) return;
    if (!groups[symbol.category]) groups[symbol.category] = [];
    groups[symbol.category].push(symbol);
  });

  Object.entries(groups).forEach(([category, symbols]) => {
    const optgroup = document.createElement("optgroup");
    optgroup.label = category;

    symbols.forEach(symbol => {
      const option = document.createElement("option");
      option.value = symbol.code;
      option.textContent = symbol.name;
      optgroup.appendChild(option);
    });

    els.shape.appendChild(optgroup);
  });

  // Restore previously selected value if it exists
  if ([...els.shape.options].some(opt => opt.value === current)) {
    els.shape.value = current;
  } else if (els.shape.options.length) {
    els.shape.selectedIndex = 0;
  }
}

//Main Function that handles symbol creation and updating 
//Spilts the sidc code into chars that can be modifed with the values from the index 
function updateSymbol() {
  let sidc = els.shape.value;
  if (!sidc) return;

  let affiliation = els.affiliation.value;
  let color;

  // If custom color is NOT used → affiliation color
  if (!els.useCustomColor.checked) {
    color = affilationColors[affiliation] || "#000000";
    els.color.value = color; // sync picker just in case
  }
  // If custom color IS used → user-picked color
  else {
    color = els.color.value;
  }

  //spiltting the sidc of the symbol into a array of characters for easy modifaction 
  //Will scale to any format of sidc in the list 
  const chars = sidc.split("");
  chars[1] = els.affiliation.value || chars[1]; //Modifies the first character of the sidc to match the affiliation value (second letter in sidc)
  chars[3] = els.status.value || chars[3]; //Modifies the third character of the sidc to match the status value (fourth letter in sidc)

  chars[10] = els.echelon.value || chars[10]; // Modifies the eleventh character of the sidc to match the echelon value (eleventh letter in sidc)
  chars[11] = els.mobility.value || chars[11]; // Modifies the twelfth character of the sidc to match the mobility value (twelfth letter in sidc)

  //Rejoins the modified array back into a string for the sidc
  sidc = chars.join("");

  //Tries to create a new symbol with the modified sidc and the other options selected in the UI
  //ms.symbol is from the milsymbols library must be named the same to creatre a new symbol
  try {
    const symbol = new ms.Symbol(sidc, {
      size: 130, //sets the size of the smbol the symbols are made as SVG so this should not be modified.
      monoColor: color, //sets the color of the symbol gotten from the color picker in the UI
      direction: parseFloat(els.direction.value) || 0, //sets the direction of the symbol based on the input in the UI
      svg: true, //ensures the symbol is created as an SVG
      uniqueDesignation: els.hideText.checked ? "" : els.label.value, //Checks if the hide text checkbox is checked if so it hides the label
      quantity: els.hideText.checked ? "" : els.quantity.value, //Checks if the hide text checkbox is checked if so it hides the quantity
      higherFormation: els.hideText.checked ? "" : els.higherFormation.value,
      infoFields: !els.hideText.checked,
      headquartersElement: els.hq.value || undefined, //Sets the hq character to either a "" empty string or the selceted A for headquetrs in sidc
      reinforcedReduced: els.reinforcedReduced.value || undefined //Sets the reinforced/reduced character to either a "" empty string or the selceted + or - in sidc
    });

    //Clears the preview area and appends the new symbol as a DOM element
    els.preview.innerHTML = "";
    els.preview.appendChild(symbol.asDOM());
    //Errors checking may not be necessary as milsymbols library should handle invalid sidc codes internally via question mark symbols
  } catch (e) {
    els.preview.innerHTML = ` Invalid symbol: ${e.message}`;
  }
}

//Event listeners for the various UI elements to update the symbol preview when changed
els.shapeSearch.addEventListener("input", () => {
  populateDropdown(els.shapeSearch.value);
});

els.shape.addEventListener("change", updateSymbol);

//Listens for input changes on multiple elements and calls updateSymbol
[
  els.affiliation,
  els.status,
  els.echelon,
  els.mobility,
  els.hq,
  els.reinforcedReduced,
  els.color,
  els.label,
  els.quantity,
  els.higherFormation,
  els.direction,
  els.hideText,
].forEach(el => el.addEventListener("input", updateSymbol));

//Saves the current symbol as an SVG file when the save button is clicked
els.saveSvg.addEventListener("click", () => {
  const svg = els.preview.querySelector("svg");
  if (!svg) return alert(" No symbol to save!");
  const blob = new Blob([new XMLSerializer().serializeToString(svg)], {
    type: "image/svg+xml"
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${els.shape.options[els.shape.selectedIndex].textContent.replace(/ /g, "_")}.svg`;
  link.click();
  URL.revokeObjectURL(link.href);
});

//Resets all symbol settings to default values when the reset button is clicked
//Add any els tjat are added to this line to ensure proper reset
els.reset.addEventListener("click", () => {
  els.useCustomColor.checked = false;
  els.customColorWrapper.style.display = "none";
  els.shapeSearch.value = "";
  els.shape.selectedIndex = 0;
  els.affiliation.value = "F";
  els.status.value = "P";
  els.echelon.value = "";
  els.mobility.value = "";
  els.hq.value = "";
  els.reinforcedReduced.value = "";
  els.color.value = "#00aaff";
  els.label.value = "";
  els.quantity.value = "";
  els.higherFormation.value = "";
  els.direction.value = "45";
  els.hideText.checked = false;
  delete els.color.dataset.userChanged;
  populateDropdown();
  updateSymbol();
});
//Initial population of the dropdown and symbol preview on page load
populateDropdown();
updateSymbol();