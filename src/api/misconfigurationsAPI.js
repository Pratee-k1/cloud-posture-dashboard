const data = require("../data/dataIngestion");

// Filter function
function getMisconfigurations(filters) {
  return data.filter(item => {
    if (filters.cloud && item.cloud !== filters.cloud) return false;
    if (filters.severity && item.severity !== filters.severity) return false;
    if (filters.accountId && item.accountId !== filters.accountId) return false;
    return true;
  });
}

module.exports = { getMisconfigurations };