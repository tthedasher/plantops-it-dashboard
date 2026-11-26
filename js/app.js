document.addEventListener("DOMContentLoaded", () => {
    // Generate color-coded status badges
    const createBadge = (value) => {
        const className = value.toLowerCase().replace(/\s+/g, "-");
        return `<span class="status-badge status-${className}">${value}</span>`;
    };
    
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
    const searchInput = document.getElementById("inventory-search");
    const filterInput = document.getElementById("inventory-filter");

    const renderInventory = () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const selectedType = filterInput.value;

        const inventoryCount = document.getElementById("inventory-count");
        const filteredAssets = infrastructureData.assets.filter(asset => {
            const searchableText = [
                asset.id,
                asset.name,
                asset.type,
                asset.department,
                asset.ip,
                asset.os,
                asset.status
            ].join(" ").toLowerCase();

            const matchesSearch = searchableText.includes(searchTerm);
            const matchesType = selectedType === "all" || asset.type === selectedType;

            return matchesSearch && matchesType;
        });

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
                        ${filteredAssets.map(asset => `
                            <tr>
                                <td>${asset.id}</td>
                                <td>${asset.name}</td>
                                <td>${asset.type}</td>
                                <td>${asset.department}</td>
                                <td>${asset.ip}</td>
                                <td>${asset.os}</td>
                                <td>${createBadge(asset.status)}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
                ${filteredAssets.length === 0 ? "<p>No matching assets found.</p>" : ""}
            </div>
        `;

        inventoryContainer.innerHTML = assetTable;
        inventoryCount.textContent = `Showing ${filteredAssets.length} of ${infrastructureData.assets.length} assets`;
    };

    renderInventory();

    searchInput.addEventListener("input", renderInventory);
    filterInput.addEventListener("change", renderInventory);
    
    // Network overview
    const networkContainer = document.getElementById("network-overview");

    const networkTable = `
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>VLAN ID</th>
                        <th>Network Name</th>
                        <th>Subnet</th>
                        <th>Gateway</th>
                        <th>Purpose</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${infrastructureData.networks.map(network => `
                        <tr>
                            <td>${network.vlan}</td>
                            <td>${network.name}</td>
                            <td>${network.subnet}</td>
                            <td>${network.gateway}</td>
                            <td>${network.purpose}</td>
                            <td>${createBadge(network.status)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;

    networkContainer.innerHTML = networkTable;

    // Backup and recovery overview
    const backupContainer = document.getElementById("backup-overview");

    const backupTable = `
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>System</th>
                        <th>Backup Type</th>
                        <th>Last Backup</th>
                        <th>Frequency</th>
                        <th>Restore Test</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${infrastructureData.backups.map(backup => `
                        <tr>
                            <td>${backup.system}</td>
                            <td>${backup.type}</td>
                            <td>${backup.lastBackup}</td>
                            <td>${backup.frequency}</td>
                            <td>${backup.restoreTest}</td>
                            <td>${createBadge(backup.status)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;

    backupContainer.innerHTML = backupTable;

    // IT Operations
    const operationsContainer = document.getElementById("operations-overview");

    const operationsTable = `
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Incident ID</th>
                        <th>Issue</th>
                        <th>Category</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    ${infrastructureData.issues.map(issue => `
                        <tr>
                            <td>${issue.id}</td>
                            <td>${issue.title}</td>
                            <td>${issue.category}</td>
                            <td>${createBadge(issue.priority)}</td>
                            <td>${createBadge(issue.status)}</td>
                            <td>${issue.department}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;

    operationsContainer.innerHTML = operationsTable;
});
