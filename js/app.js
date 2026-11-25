// PlantOps IT Dashboard
// Dashboard summary calculations

document.addEventListener("DOMContentLoaded", () => {

    // Calculate total infrastructure assets
    const totalAssets = infrastructureData.assets.length;

    // Calculate systems currently online
    const systemsOnline = infrastructureData.assets.filter(
        asset => asset.status === "Online"
    ).length;

    // Calculate active issues (excluding scheduled maintenance)
    const activeIssues = infrastructureData.issues.filter(
        issue => issue.status === "Open" || issue.status === "Investigating"
    ).length;

    // Determine overall backup status
    const backupStatus = infrastructureData.backups.every(
        backup => backup.status === "Successful"
    ) ? "Healthy" : "Warning";

    // Update dashboard summary cards
    document.getElementById("total-assets").textContent = totalAssets;
    document.getElementById("systems-online").textContent = systemsOnline;
    document.getElementById("active-issues").textContent = activeIssues;
    document.getElementById("backup-status").textContent = backupStatus;

});
