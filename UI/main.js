const { app, BrowserWindow } = require("electron");

const url = require("url");

const path = require("path");
function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: "HomeSync",
    width: 1000,
    height: 800,
  });

  const startUrl = url.format({
    pathname: path.join(__dirname, "index.html"),
    protocol: "file",
  });

  mainWindow.loadURL(startUrl);
}

app.whenReady().then(() => {
  createMainWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
