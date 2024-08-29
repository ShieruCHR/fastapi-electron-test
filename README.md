# Build Instructions

## Clone Repository

```bash
git clone https://github.com/ShieruCHR/fastapi-electron-test.git
cd fastapi-electron-test
```

## Build FastAPI application with `pyinstaller`

```bash
cd backend
pyinstaller --onefile --name backend main.py
```

## Build Electron

```bash
npm run build
```
