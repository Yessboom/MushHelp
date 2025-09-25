let selectedArea = null;

// Store original coordinates for scaling
const areaCoords = {
    'Bridge': [160,192,156,119,176,84,272,35,292,53,353,53,516,136,311,236,232,189,192,213],
    'Front Beta Turret': [228,194,312,237,256,268,269,318,236,394,160,345,140,233],
    'Front Alpha Turret': [516,132,610,90,551,62,521,46,492,54,439,38,471,64,435,86],
    'Front Corridor': [253,266,611,88,650,109,487,190,813,353,768,377,440,212,279,295],
    'Medlab': [443,373,443,423,276,336,277,294,435,210,603,294],
    'Garden': [660,271,489,187,651,108,818,192],
    'Front Storage': [664,272,818,195,974,272,814,354],
    'Infirmary': [619,453,498,395,443,422,445,372,603,295,766,379],
    'Central Beta Turret': [421,440,500,401,574,438,451,498,419,482],
    'Central Alpha Turret': [895,229,953,201,958,190,976,187,992,187,1001,190,1019,180,1034,179,1048,179,1038,192,1021,203,1011,206,1047,227,969,266],
    'Central Corridor': [626,455,655,471,1009,294,977,276],
    'Kitchen': [764,424,918,346,1076,425,922,503],
    'Beta Bay': [582,442,421,520,418,578,451,597,413,610,411,621,476,654,519,631,547,642,511,658,508,667,572,700,616,679,643,691,606,707,605,715,666,749,709,728,843,642,913,608],
    'Central Beta Storage': [663,474,755,427,864,482,769,529],
    'Beta Dorm': [779,533,874,486,922,510,953,494,1050,542,921,604],
    'Central Alpha Storage': [926,343,1014,299,1124,353,1037,398],
    'Alpha Bay 1': [976,269,1129,193,1437,348,1282,424],
    'Alpha Dorm': [1159,486,1059,434,1082,421,1043,400,1132,355,1275,427],
    'Nexus' : [1055,535,961,488,1056,440,1155,488],
    'Rear Corridor': [845,643,1280,430,1313,447,1234,485,1234,529,1061,614,1027,600,964,630,951,622,938,624,845,674],
    'Icarus bay': [785,710,943,628,1198,756,1201,770,1117,810,1117,856,1042,893,1011,878,995,886,800,791,813,778,785,764],
    'Alpha Bay 2': [1600,580,1288,428,1448,349,1767,507,1764,564,1754,572,1729,561,1745,554,1764,540,1751,527,1711,546,1687,540,1661,545,1651,556],
    'Rear Alpha Storage': [1493,540,1319,451,1240,492,1240,532,1342,582,1408,550,1416,555,1417,564,1425,572],
    'Rear Beta Storage': [1029,606,1193,688,1135,718,969,634],
    'Rear Beta Turret': [1124,816,1201,775,1279,816,1285,862,1255,899,1271,912,1279,916,1277,925,1259,920,1232,912,1214,933,1217,946,1217,958,1188,962,1184,938,1188,933,1184,938,1121,858],
    'Rear Alpha Turret': [1730,645,1606,587,1659,558,1664,547,1680,542,1695,543,1709,547,1742,534,1751,530,1761,540,1722,564,1764,585,1766,626],
    'Engine Room': [1140,718,1198,694,1200,676,1208,658,1411,557,1422,578,1500,542,1759,670,1754,710,1716,729,1750,749,1735,784,1706,792,1654,767,1590,797,1608,805,1617,829,1596,850,1571,854,1527,828,1463,860,1480,868,1484,888,1475,905,1466,917,1448,918,1396,892,1375,902,1288,858,1287,812,1205,768,1205,752]
};

const polygonIds = {
    'Bridge': 'bridge-polygon',
    'Front Beta Turret': 'beta-polygon',
    'Front Alpha Turret': 'alpha-polygon',
    'Front Corridor': 'front-corridor-polygon',
    'Central Corridor': 'central-corridor-polygon',
    'Medlab': 'medlab-polygon',
    'Garden': 'garden-polygon',
    'Front Storage': 'front-storage-polygon',
    'Infirmary': 'infirmary-polygon',
    'Central Beta Turret': 'central-beta-turret-polygon',
    'Central Alpha Turret': 'central-alpha-turret-polygon',
    'Kitchen': 'kitchen-polygon',
    'Beta Bay': 'beta-bay-polygon',
    'Central Beta Storage': 'central-beta-storage-polygon',
    'Beta Dorm': 'beta-dorm-polygon',
    'Central Alpha Storage': 'central-alpha-storage-polygon',
    'Alpha Bay 1': 'alpha-bay-1-polygon',
    'Alpha Dorm': 'alpha-dorm-polygon',
    'Nexus': 'nexus-polygon',
    'Rear Corridor': 'rear-corridor-polygon',
    'Icarus bay': 'icarus-bay-polygon',
    'Alpha Bay 2': 'alpha-bay-2-polygon',
    'Rear Alpha Storage': 'rear-alpha-storage-polygon',
    'Rear Beta Storage': 'rear-beta-storage-polygon',
    'Rear Beta Turret': 'rear-beta-turret-polygon',
    'Rear Alpha Turret': 'rear-alpha-turret-polygon',
    'Engine Room': 'engine-room-polygon'
};




function mouseover(name) {
    //document.getElementById("Info").innerHTML = name;
    
    // Only show hover highlight if no area is currently selected
    showPolygonHighlight(name, false);
    

}

function mouseout() {
    // Only hide highlight if no area is selected
    if (!selectedArea) {
        hideAllHighlights();
    }
    if (selectedArea) {
        hideAllHighlights();
        showPolygonHighlight(selectedArea, true);
    }
}

    


function clickArea(name) {


    // Toggle selection
    if (selectedArea === name) {
        selectedArea = null;
        hideAllHighlights();
        closeCard();
        document.getElementById("Info").innerHTML = "Click on areas to select them";
    } else {
        selectedArea = name;
        hideAllHighlights();
        showPolygonHighlight(name, true);
        showAreaCard(name);
        document.getElementById("Info").innerHTML = `Selected: ${name}`;
    }

}

function highlightCharacterRooms(characterName, data) {
    // First, hide all current highlights
    hideAllHighlights();
    
    // Find all rooms where this character is a usual suspect
    const characterRooms = [];
    
    // Loop through all areas in the data
    for (const areaName in data["area"]) {
        const area = data["area"][areaName];
        
        // Check if this character is in the usual suspects list
        if (area.usual_suspects && area.usual_suspects.includes(characterName)) {
            characterRooms.push(areaName);
        }
    }
    
    // Highlight all rooms where this character hangs out
    characterRooms.forEach(roomName => {
        showPolygonHighlight(roomName, false); // false = red hover highlight, not green selected
    });
}

function populateElementList(area, data) {
    const elementsList = document.getElementById("elements-list");
    elementsList.innerHTML = "";
    if (data["area"][area].elements && data["area"][area].elements.length > 0) {
        data["area"][area].elements.forEach(element => {
            const li = document.createElement("li");
            li.textContent = element;
            elementsList.appendChild(li);
        });
    } else {
        const li = document.createElement("li");
        li.textContent = "No key elements listed.";
        elementsList.appendChild(li);
    }
}

function populateSuspectList(area, data) {
    const suspectsList = document.getElementById("suspects-list");
    suspectsList.innerHTML = "";
    if (data["area"][area].usual_suspects && data["area"][area].usual_suspects.length > 0) {
        data["area"][area].usual_suspects.forEach(suspect => {
            const li = document.createElement("li");
            li.textContent = suspect;
            li.onclick = () => showCharacterCard(suspect);
            suspectsList.appendChild(li);
        });
    } else {
        const li = document.createElement("li");
        li.textContent = "No usual suspects listed.";
        suspectsList.appendChild(li);
    }
}

function populateAreaSkillList(area, data) {
    
    const skillsList = document.getElementById("skillsArea-list");
    skillsList.innerHTML = "";
    if (data["area"][area].skills && data["area"][area].skills.length > 0) {
        data["area"][area].skills.forEach(skill => {
            const li = document.createElement("li");
            li.style.cursor = "pointer";
            
            // Create skill header
            const skillHeader = document.createElement("div");
            skillHeader.className = "skill-header";
            skillHeader.textContent = skill;
            skillHeader.style.padding = "10px";
            skillHeader.style.backgroundColor = "#f8f9fa";
            skillHeader.style.borderRadius = "4px";
            skillHeader.style.marginBottom = "5px";
            
            // Create accordion content (initially hidden)
            const accordionContent = document.createElement("div");
            accordionContent.className = "skill-accordion-content";
            accordionContent.style.display = "none";
            accordionContent.style.padding = "10px";
            accordionContent.style.backgroundColor = "#ffffff";
            accordionContent.style.border = "1px solid #dee2e6";
            accordionContent.style.borderRadius = "4px";
            accordionContent.style.marginBottom = "10px";
            
            // Populate accordion with character images
            if (data["skill"][skill] && data["skill"][skill].learnedBy) {
                const charactersContainer = document.createElement("div");
                charactersContainer.style.display = "flex";
                //charactersContainer.style.flexWrap = "wrap";
                charactersContainer.style.gap = "10px";
                
                data["skill"][skill].learnedBy.forEach(learner => {
                    if (learner.name !== "Mage Book" && data["character"][learner.name]) {
                        const characterDiv = document.createElement("div");
                        characterDiv.style.textAlign = "center";
                        characterDiv.style.cursor = "pointer";
                        characterDiv.style.transition = "transform 0.2s ease";
                        
                        // Character image
                        const img = document.createElement("img");
                        if (data["character"][learner.name].image) {
                            img.src = `public/images/charactersHead/${data["character"][learner.name].image}`;
                        } else {
                            img.src = "public/images/charactersHead/default.png"; // fallback image
                        }
                        img.alt = learner.name;
                        //img.style.width = "60px";
                        //img.style.height = "60px";
                        //img.style.borderRadius = "50%";
                        //img.style.border = "2px solid #dee2e6";
                        //img.style.objectFit = "cover";
                        
                        // Character name and level
                        const nameLabel = document.createElement("div");
                        // nameLabel.textContent = learner.level !== null ? 
                        //     `${learner.name} (Lvl ${learner.level})` : 
                        //     learner.name;
                        // nameLabel.style.fontSize = "12px";
                        // nameLabel.style.marginTop = "5px";
                        // nameLabel.style.maxWidth = "80px";
                        // nameLabel.style.wordWrap = "break-word";
                        
                        // Add hover effect
                        characterDiv.addEventListener('mouseenter', () => {
                            characterDiv.style.transform = "scale(1.1)";
                        });
                        
                        characterDiv.addEventListener('mouseleave', () => {
                            characterDiv.style.transform = "scale(1)";
                        });
                        
                        // Click to open character card
                        characterDiv.addEventListener('click', (e) => {
                            e.stopPropagation(); // Prevent accordion toggle
                            showCharacterCard(learner.name);
                        });
                        
                        characterDiv.appendChild(img);
                        characterDiv.appendChild(nameLabel);
                        charactersContainer.appendChild(characterDiv);
                    }
                });
                
                if (charactersContainer.children.length > 0) {
                    accordionContent.appendChild(charactersContainer);
                } else {
                    accordionContent.textContent = "No characters learn this skill.";
                }
            } else {
                accordionContent.textContent = "No character data available for this skill.";
            }
            
            // Add click event to toggle accordion
            skillHeader.addEventListener('click', () => {
                const isOpen = accordionContent.style.display === "block";
                accordionContent.style.display = isOpen ? "none" : "block";
                
                // Add visual indicator (arrow)
                const arrow = skillHeader.querySelector('.arrow') || document.createElement('span');
                if (!skillHeader.querySelector('.arrow')) {
                    arrow.className = 'arrow';
                    arrow.style.float = 'right';
                    skillHeader.appendChild(arrow);
                }
                arrow.textContent = isOpen ? '▼' : '▲';
            });
            
            li.appendChild(skillHeader);
            li.appendChild(accordionContent);
            skillsList.appendChild(li);
        });
    } else {
        const li = document.createElement("li");
        li.textContent = "No skills listed.";
        skillsList.appendChild(li);
    }
}


async function showAreaCard(name) {

    const card = document.getElementById("area-card");
    const title = document.getElementById("card-title");
    const description = document.getElementById("card-description");
    const suspectsList = document.getElementById("suspects-list");
    const elementsList = document.getElementById("elements-list");
    
    //Get data from Json
    const response = await fetch('DataFr.json');
    const data = await response.json();
    // Update card content
    title.textContent = data["area"][name].name || name;
    description.textContent = data["area"][name].description || "No description available.";

    //Populate Elements
    populateElementList(name, data);

    //Populate Suspects
    //populateSuspectList(name, data);

    //Populate Skills
    populateAreaSkillList(name, data);

    // Show the card
    card.classList.add("visible");
}



function populateCharacterSkillList(characterName, data) {
    const skillsList = document.getElementById("skills-list");
    skillsList.innerHTML = "";
    if (data["character"][characterName].skills && data["character"][characterName].skills.length > 0) {
        data["character"][characterName].skills.forEach(skill => {
            const li = document.createElement("li");

            // Check if skill exists in data and has a non-empty icon
                const skillData = data["skill"][skill];
                const skillName = skillData ? skillData.name : skill;
                const hasIcon = skillData && skillData.icon && skillData.icon !== "";
                
                if (hasIcon) {
                    const skillElement = document.createElement("div");
                    skillElement.className = "skill-item";
                    skillElement.innerHTML = `
                        <div class="rowskill" style="display: flex; align-items: center; cursor: pointer;">
                            <img src="${skillData.icon}" alt="${skill} icon" style="width:16px; height:16px; margin-right:5px;">
                            <span>${skillName}</span>
                        </div>
                        <div class="skill-tooltip" style="display: none; position: absolute; background: rgba(0,0,0,0.9); color: white; padding: 10px; border-radius: 5px; z-index: 1000; min-width: 200px; max-width: 300px;">
                            <strong>${skillName}</strong><br>
                            <div style="margin-top: 5px;">${skillData.description || "No description available."}</div>
                            ${skillData.effects ? `<div style="margin-top: 5px; font-style: italic;">Effect: ${skillData.effects}</div>` : ""}
                        </div>
                    `;

                    const tooltip = skillElement.querySelector('.skill-tooltip');
                    const rowSkill = skillElement.querySelector('.rowskill');

                    rowSkill.addEventListener('mouseenter', (e) => {
                        const rect = rowSkill.getBoundingClientRect();
                        const charImageRect = document.getElementById("character-img").getBoundingClientRect();

                        
                        tooltip.style.display = 'block';
                        tooltip.style.position = 'fixed';  // Use fixed positioning
                        tooltip.style.left = `${charImageRect.left - 20}px`;
                        tooltip.style.maxWidth = `${charImageRect.width + 30}px`; // Ensure tooltip doesn't exceed image width
                        tooltip.style.top = `${rect.top}px`;
                        tooltip.style.zIndex = '2000';
                        
                    });

                    rowSkill.addEventListener('mouseleave', () => {
                        tooltip.style.display = 'none';
                    });

                    li.appendChild(skillElement);
                } else {
                    li.textContent = skillName;
                }
                
                skillsList.appendChild(li);
            });
        } else {
            const li = document.createElement("li");
            li.textContent = "No skills listed.";
            skillsList.appendChild(li);
        }
}

function populateCharacterTraitList(characterName, data) {
const traitList = document.getElementById("trait-list");
        traitList.innerHTML = "";
        if (data["character"][characterName].traits && data["character"][characterName].traits.name) {
            const li = document.createElement("li");
            
            const traitElement = document.createElement("div");
            traitElement.className = "trait-item";
            traitElement.innerHTML = `
                <div class="rowtrait" style="display: flex; align-items: center; cursor: pointer;">
                    <span>${data["character"][characterName].traits.name}</span>
                </div>
                <div class="trait-tooltip" style="display: none; position: absolute; background: rgba(0,0,0,0.9); color: white; padding: 10px; border-radius: 5px; z-index: 1000; min-width: 200px; max-width: 300px;">
                    <strong>${data["character"][characterName].traits.name}</strong><br>
                    <div style="margin-top: 5px;">${data["character"][characterName].traits.description || "No description available."}</div>
                </div>
            `;

            const tooltip = traitElement.querySelector('.trait-tooltip');
            const rowTrait = traitElement.querySelector('.rowtrait');

            rowTrait.addEventListener('mouseenter', (e) => {
                const rect = rowTrait.getBoundingClientRect();
                const charImageRect = document.getElementById("character-img").getBoundingClientRect();

                tooltip.style.display = 'block';
                        tooltip.style.position = 'fixed';  // Use fixed positioning
                        tooltip.style.left = `${charImageRect.left - 20}px`;
                        tooltip.style.maxWidth = `${charImageRect.width + 30}px`; // Ensure tooltip doesn't exceed image width
                        tooltip.style.top = `${rect.top}px`;
                        tooltip.style.zIndex = '2000';
                        
                    });
            rowTrait.addEventListener('mouseleave', () => {
                tooltip.style.display = 'none';
            });

            li.appendChild(traitElement);
            traitList.appendChild(li);
        } else {
            const li = document.createElement("li");
            li.textContent = "No traits listed.";
            traitList.appendChild(li);
        }
}

function populateCharacterObjectiveList(characterName, data) {
const objectivesList = document.getElementById("objectives-list");
        console.log(data["character"][characterName].objectives);
        objectivesList.innerHTML = "";
        if (data["character"][characterName].objectives) {
            // Handle both single objective (object) and multiple objectives (array)
            const objectives = Array.isArray(data["character"][characterName].objectives) 
                ? data["character"][characterName].objectives 
                : [data["character"][characterName].objectives];
            
            objectives.forEach(objective => {
                if (objective && objective.name) {
                    const li = document.createElement("li");
                    console.log(objective.description);
                    
                    const objectiveElement = document.createElement("div");
                    objectiveElement.className = "objective-item";
                    objectiveElement.innerHTML = `
                        <div class="rowobjective" style="display: flex; align-items: center; cursor: pointer;">
                            <span>${objective.name}</span>
                        </div>
                        <div class="objective-tooltip" style="display: none; position: absolute; background: rgba(0,0,0,0.9); color: white; padding: 10px; border-radius: 5px; z-index: 1000; min-width: 200px; max-width: 300px;">
                            <strong>${objective.name}</strong><br>
                            <div style="margin-top: 5px;">${objective.description || "No description available."}</div>
                        </div>
                    `;

                    const tooltip = objectiveElement.querySelector('.objective-tooltip');
                    const rowObjective = objectiveElement.querySelector('.rowobjective');

                    rowObjective.addEventListener('mouseenter', (e) => {
                        const rect = rowObjective.getBoundingClientRect();
                        const charImageRect = document.getElementById("character-img").getBoundingClientRect();

                        tooltip.style.display = 'block';
                                tooltip.style.position = 'fixed';  // Use fixed positioning
                                tooltip.style.left = `${charImageRect.left - 20}px`;
                                tooltip.style.maxWidth = `${charImageRect.width + 30}px`; // Ensure tooltip doesn't exceed image width
                                tooltip.style.top = `${rect.top}px`;
                                tooltip.style.zIndex = '2000';
                                
                            });

                    rowObjective.addEventListener('mouseleave', () => {
                        tooltip.style.display = 'none';
                    });

                    li.appendChild(objectiveElement);
                    objectivesList.appendChild(li);
                }
            });
            
            // If no valid objectives were found
            if (objectivesList.children.length === 0) {
                const li = document.createElement("li");
                li.textContent = "No objectives listed.";
                objectivesList.appendChild(li);
            }
        } else {
            const li = document.createElement("li");
            li.textContent = "No objectives listed.";
            objectivesList.appendChild(li);
        }
    }





    
async function showCharacterCard(characterName) {
    const card = document.getElementById("character-card");
    const title = document.getElementById("character-title");
    const description = document.getElementById("character-description");
    const characterImage = document.getElementById("character-img");
    
    try {
        // Get data from Json
        const response = await fetch('DataFr.json');
        const data = await response.json();
        
        // Update card content
        title.textContent = data["character"][characterName].name || characterName;
        description.textContent = data["character"][characterName].description || "No description available.";

        //Populate Character Skills
        populateCharacterSkillList(characterName, data);



        // Populate Trait
        populateCharacterTraitList(characterName, data);


        // Populate Objectives
        populateCharacterObjectiveList(characterName, data);

        // Set character image
        if (data["character"][characterName].image) {
            characterImage.src = `public/images/charactersPortrait/${data["character"][characterName].image}`;
            characterImage.style.display = "block";
        }

        //Highlight rooms where character hangs out:
        highlightCharacterRooms(characterName, data);

        // Show the character card
        card.classList.add("visible");
    } catch (error) {
        console.error("Error loading character data:", error);
    }
}

function populateSkillCharacterList(skillName, data) {
    const relatedCharactersList = document.getElementById("related-characters-list");
    relatedCharactersList.innerHTML = "";
    
    // Check if skill exists in data
    if (data["skill"][skillName] && data["skill"][skillName].learnedBy) {
        data["skill"][skillName].learnedBy.forEach(learner => {
            const li = document.createElement("li");
            
            // Display character name and level
            if (learner.level !== null) {
                li.textContent = `${learner.name} (Level ${learner.level})`;
            } else {
                li.textContent = learner.name;
            }
            
            // Make it clickable to show character card (if it's not "Mage Book")
            if (learner.name !== "Mage Book") {
                li.style.cursor = "pointer";
                li.onclick = () => showCharacterCard(learner.name);
                li.classList.add("clickable-character"); // Add class for styling
            }
            
            relatedCharactersList.appendChild(li);
        });
    } else {
        const li = document.createElement("li");
        li.textContent = "No characters learn this skill.";
        relatedCharactersList.appendChild(li);
    }
}

async function showSkillCard(skillName) {
    const card = document.getElementById("skill-card");
    const title = document.getElementById("skill-title");
    const description = document.getElementById("skill-description");
    const relatedCharactersList = document.getElementById("related-characters-list");
    
    //Get data from Json
    const response = await fetch('DataFr.json');
    const data = await response.json(); 

    // Update card content
    title.textContent = data["skill"][skillName].name || skillName;
    description.textContent = data["skill"][skillName].description || "No description available.";

    // Populate related characters
    populateSkillCharacterList(skillName, data);
    
    // Show the card
    card.classList.add("visible");
}




function closeCharacterCard() {
    const card = document.getElementById("character-card");
    card.classList.remove("visible");
}


function closeCard() {
    const card = document.getElementById("area-card");
    card.classList.remove("visible");

    closeCharacterCard();
    
    // Also clear selection
    selectedArea = null;
    hideAllHighlights();
    //document.getElementById("Info").innerHTML = "Click on areas to see details";
}



function showPolygonHighlight(name, isSelected) {
    const polygonId = polygonIds[name];
    const coords = areaCoords[name];

    if (!polygonId || !coords) return;

    const polygon = document.getElementById(polygonId);
    const image = document.getElementById('ship-image');
    const svg = document.getElementById('polygon-overlay');

    if (!polygon || !image || !svg) return;

    // Use the same scaling logic as imageMapResizer
    const scaleX = image.width / image.naturalWidth;
    const scaleY = image.height / image.naturalHeight;

    // Update SVG to match image size
    svg.style.width = image.width + 'px';
    svg.style.height = image.height + 'px';
    svg.setAttribute('viewBox', `0 0 ${image.width} ${image.height}`);

    // Scale coordinates exactly like imageMapResizer does
    const points = [];
    for (let i = 0; i < coords.length; i += 2) {
        const x = Math.floor(coords[i] * scaleX);
        const y = Math.floor(coords[i + 1] * scaleY);
        points.push(`${x},${y}`);
    }

    polygon.setAttribute('points', points.join(' '));

    // Apply styling
    polygon.classList.remove('selected');
    if (isSelected) {
        polygon.classList.add('selected');
    }
    polygon.classList.add('active');
}

function hideAllHighlights() {
    const polygons = document.querySelectorAll('.area-polygon');
    polygons.forEach(polygon => {
        polygon.classList.remove('active', 'selected');
    });
}

function updatePolygonOverlay() {
    const image = document.getElementById('ship-image');
    const svg = document.getElementById('polygon-overlay');
    
    if (!image || !svg) return;
    
    // Update SVG viewBox when image loads or resizes
    const updateViewBox = () => {
        svg.setAttribute('viewBox', `0 0 ${image.naturalWidth || 1000} ${image.naturalHeight || 600}`);
        
        // Re-show selected area if any
        if (selectedArea) {
            showPolygonHighlight(selectedArea, true);
        }
    };
    
    if (image.complete) {
        updateViewBox();
    } else {
        image.addEventListener('load', updateViewBox);
    }
}

// Update highlights when window resizes
window.addEventListener('resize', () => {
    setTimeout(() => {
        updatePolygonOverlay();
    }, 300); // Small delay to let imageMapResize finish
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    //document.getElementById("Info").innerHTML = "Click on areas to select them";
    updatePolygonOverlay();
});