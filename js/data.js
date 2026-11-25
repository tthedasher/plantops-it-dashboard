// PlantOps IT Dashboard
// Simulated manufacturing facility infrastructure

const infrastructureData = {

    // Infrastructure assets
    assets: [
        {
            id: "SRV-001",
            name: "Domain Controller",
            type: "Server",
            department: "IT",
            ip: "192.168.10.10",
            os: "Windows Server 2022",
            status: "Online"
        },
        {
            id: "SRV-002",
            name: "File Server",
            type: "Server",
            department: "Administration",
            ip: "192.168.10.20",
            os: "Windows Server 2022",
            status: "Online"
        },
        {
            id: "SRV-003",
            name: "Manufacturing System",
            type: "Server",
            department: "Production",
            ip: "192.168.30.10",
            os: "Windows Server 2022",
            status: "Online"
        },
        {
            id: "SRV-004",
            name: "Backup Server",
            type: "Server",
            department: "IT",
            ip: "192.168.10.30",
            os: "Windows Server 2022",
            status: "Online"
        },
        {
            id: "NET-001",
            name: "Core Switch",
            type: "Network",
            department: "IT",
            ip: "192.168.10.2",
            os: "Managed Switch Firmware",
            status: "Online"
        },
        {
            id: "NET-002",
            name: "Production Switch",
            type: "Network",
            department: "Production",
            ip: "192.168.30.2",
            os: "Managed Switch Firmware",
            status: "Online"
        },
        {
            id: "NET-003",
            name: "Firewall",
            type: "Network",
            department: "IT",
            ip: "192.168.10.1",
            os: "Firewall Firmware",
            status: "Online"
        },
        {
            id: "PC-001",
            name: "Reception Workstation",
            type: "Workstation",
            department: "Administration",
            ip: "192.168.20.101",
            os: "Windows 11",
            status: "Online"
        },
        {
            id: "PC-002",
            name: "Engineering Workstation",
            type: "Workstation",
            department: "Engineering",
            ip: "192.168.20.102",
            os: "Windows 11",
            status: "Online"
        },
        {
            id: "PC-003",
            name: "Production Terminal 01",
            type: "Workstation",
            department: "Production",
            ip: "192.168.30.101",
            os: "Windows 11 IoT",
            status: "Warning"
        },
        {
            id: "PC-004",
            name: "Production Terminal 02",
            type: "Workstation",
            department: "Production",
            ip: "192.168.30.102",
            os: "Windows 11 IoT",
            status: "Online"
        },
        {
            id: "WAP-001",
            name: "Office Wireless AP",
            type: "Wireless",
            department: "IT",
            ip: "192.168.10.50",
            os: "Access Point Firmware",
            status: "Online"
        }
    ],

    // Network segmentation
    networks: [
        {
            vlan: 10,
            name: "Server Network",
            subnet: "192.168.10.0/24",
            gateway: "192.168.10.1",
            purpose: "Servers and IT infrastructure",
            status: "Active"
        },
        {
            vlan: 20,
            name: "Office Network",
            subnet: "192.168.20.0/24",
            gateway: "192.168.20.1",
            purpose: "Office workstations and employee devices",
            status: "Active"
        },
        {
            vlan: 30,
            name: "Production Network",
            subnet: "192.168.30.0/24",
            gateway: "192.168.30.1",
            purpose: "Manufacturing systems and plant-floor devices",
            status: "Active"
        },
        {
            vlan: 40,
            name: "Guest Network",
            subnet: "192.168.40.0/24",
            gateway: "192.168.40.1",
            purpose: "Guest wireless internet access",
            status: "Active"
        }
    ],

    // Backup records
    backups: [
        {
            system: "Domain Controller",
            lastBackup: "2026-11-25 02:00",
            type: "System State",
            status: "Successful",
            restoreTest: "2026-11-18",
            frequency: "Daily"
        },
        {
            system: "File Server",
            lastBackup: "2026-11-25 01:30",
            type: "Incremental",
            status: "Successful",
            restoreTest: "2026-11-20",
            frequency: "Daily"
        },
        {
            system: "Manufacturing System",
            lastBackup: "2026-11-25 00:30",
            type: "Full",
            status: "Successful",
            restoreTest: "2026-11-15",
            frequency: "Daily"
        },
        {
            system: "Backup Server",
            lastBackup: "2026-11-24 23:00",
            type: "Configuration",
            status: "Warning",
            restoreTest: "2026-11-10",
            frequency: "Daily"
        }
    ],

    // IT operational issues
    issues: [
        {
            id: "INC-1001",
            title: "Production Terminal 01 connectivity issue",
            category: "Network",
            priority: "Medium",
            status: "Open",
            department: "Production"
        },
        {
            id: "INC-1002",
            title: "Backup Server configuration backup warning",
            category: "Backup",
            priority: "Low",
            status: "Investigating",
            department: "IT"
        },
        {
            id: "INC-1003",
            title: "Engineering workstation software update",
            category: "Maintenance",
            priority: "Low",
            status: "Scheduled",
            department: "Engineering"
        }
    ]

};
