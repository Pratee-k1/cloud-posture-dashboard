// This file defines how a cloud misconfiguration looks

const Misconfiguration = {
  id: "",
  cloud: "",              // AWS, Azure, GCP
  accountId: "",          // Cloud account ID
  resourceType: "",       // S3, VM, IAM, etc
  resourceId: "",         // Resource name or ID
  ruleId: "",             // Security rule ID
  ruleName: "",           // Rule description
  severity: "",           // CRITICAL, HIGH, MEDIUM, LOW
  region: "",
  status: "",             // OPEN, RESOLVED
  firstDetected: "",
  lastSeen: "",
  compliance: [],         // CIS, NIST, PCI
  owner: ""               // Team or owner
};

module.exports = Misconfiguration;