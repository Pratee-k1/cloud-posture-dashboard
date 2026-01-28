const data = [
  {
    cloud: "AWS",
    resourceId: "prod-logs-bucket",
    ruleName: "S3 bucket is public",
    severity: "CRITICAL"
  }
];

function loadData() {
  const severity = document.getElementById("severity").value;
  const table = document.getElementById("tableBody");
  table.innerHTML = "";

  data
    .filter(item => !severity || item.severity === severity)
    .forEach(item => {
      const row = `<tr>
        <td>${item.cloud}</td>
        <td>${item.resourceId}</td>
        <td>${item.ruleName}</td>
        <td>${item.severity}</td>
      </tr>`;
      table.innerHTML += row;
    });
}