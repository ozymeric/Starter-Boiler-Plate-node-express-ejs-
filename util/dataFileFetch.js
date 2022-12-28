// #########################################################
// #########################################################
// #########################################################

const path = require("path");
const fs = require("fs");

const jsonFile = path.join(__dirname, "..", "data", "data.json");

// #########################################################
// #########################################################
// #########################################################

function fetchFileData() {
  const rawData = fs.readFileSync(jsonFile);
  const jsonifiedData = JSON.parse(rawData);
  return jsonifiedData;
}

// #########################################################
// #########################################################
// #########################################################

function storeUsers(updatedContent) {
  fs.writeFileSync(jsonFile, JSON.stringify(updatedContent));
}

// #########################################################
// #########################################################
// #########################################################

module.exports = {
  fetchFileData: fetchFileData,
  storeUsers: storeUsers,
};

// #########################################################
// #########################################################
// #########################################################
