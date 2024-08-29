const { app, BrowserWindow } = require("electron");
const { spawn } = require("child_process");
const path = require("path");
let backendProcess;

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    win.loadFile("index.html");
};

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.whenReady().then(() => {
    startBackend();
    createWindow();
});
app.on("closed", () => {
    if (backendProcess) {
        backendProcess.kill();
    }
});

function startBackend() {
    const backendExecutablePath = path.resolve(
        process.resourcesPath,
        "../lib/backend.exe"
    );
    console.log(backendExecutablePath);
    backendProcess = spawn(backendExecutablePath, [], {
        cwd: path.dirname(backendExecutablePath),
        shell: true,
    });

    backendProcess.stdout.on("data", (data) => {
        console.log(`[Backend] ${data}`);
    });
}
