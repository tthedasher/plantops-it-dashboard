document.addEventListener("DOMContentLoaded", () => {
    // Dashboard summary calculations
    const totalAssets = infrastructureData.assets.length;
    const systemsOnline = infrastructureData.assets.filter(asset => asset.status === "Online").length;
    const activeIssues = infrastructureData.issues.filter(issue =>
        issue.status === "Open" || issue.status === "Investigating"
    ).length;
    const backupStatus = infrastructureData.backups.every(backup =>
        backup.status === "Successful"
    ) ? "Healthy" : "Warning";

    document.getElementById("total-assets").textContent = totalAssets;
    document.getElementById("systems-online").textContent = systemsOnline;
    document.getElementById("active-issues").textContent = activeIssues;
    document.getElementById("backup-status").textContent = backupStatus;

    // Infrastructure inventory
    const inventoryContainer = document.getElementById("asset-inventory");

    const assetTable = `
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Asset ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Department</th>
                        <th>IP Address</th>
                        <th>Operating System</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${infrastructureData.assets.map(asset => `
                        <tr>
                            <td>${asset.id}</td>
                            <td>${asset.name}</td>
                            <td>${asset.type}</td>
                            <td>${asset.department}</td>
                            <td>${asset.ip}</td>
                            <td>${asset.os}</td>
                            <td>${asset.status}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;

    inventoryContainer.innerHTML = assetTable;
});
