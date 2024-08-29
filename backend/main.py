from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def root():
    return {"message": "Hello World from Backend!"}


if __name__ == "__main__":
    import asyncio
    import uvicorn

    loop = asyncio.get_event_loop()
    asyncio.set_event_loop(loop)

    loop.run_until_complete(uvicorn.run(app, host="127.0.0.1", port=8000))
