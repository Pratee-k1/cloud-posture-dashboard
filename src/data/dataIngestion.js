// Fake cloud misconfiguration data

const misconfigurations = [
  {
    id: "1",
    cloud: "AWS",
    accountId: "prod-001",
    resourceType: "S3",
    resourceId: "prod-logs-bucket",
    ruleId: "AWS-S3-001",
    ruleName: "S3 bucket is public",
    severity: "CRITICAL",
    region: "us-east-1",
    status: "OPEN",
    firstDetected: "2026-01-20",
    lastSeen: "2026-01-28",
    compliance: ["CIS 2.1", "PCI 3.4"],
    owner: "Security Team"
  }
];

module.exports = misconfigurations;