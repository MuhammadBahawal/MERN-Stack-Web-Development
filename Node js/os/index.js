// Importing built-in os module
const os = require("os");

// ✅ Returns the operating system type
console.log("OS Type:", os.type()); // e.g., 'Windows_NT', 'Linux', 'Darwin'

// ✅ Returns the OS release/version
console.log("OS Release:", os.release()); // e.g., '10.0.19045'

// ✅ Returns architecture of CPU (e.g., x64)
console.log("CPU Architecture:", os.arch()); // e.g., 'x64'

// ✅ Returns system uptime in seconds
console.log("System Uptime (in sec):", os.uptime());

// ✅ Returns info about the currently logged-in user
console.log("User Info:", os.userInfo());


// ✅ Returns total system memory in bytes
console.log("Total Memory:", os.totalmem());

// ✅ Returns free system memory in bytes
console.log("Free Memory:", os.freemem());

// ✅ Converts memory from bytes to GB
const toGB = (bytes) => (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
console.log("Total Memory (GB):", toGB(os.totalmem()));
console.log("Free Memory (GB):", toGB(os.freemem()));

// ✅ Returns the current user's home directory
console.log("Home Directory:", os.homedir());

// ✅ Returns the hostname of the system
console.log("Hostname:", os.hostname());

// ✅ Returns the system's default directory for temp files
console.log("Temporary Directory:", os.tmpdir());

// ✅ Returns network interfaces info (e.g., IP addresses)
console.log("Network Interfaces:", os.networkInterfaces());
