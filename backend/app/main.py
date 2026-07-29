from fastapi import FastAPI


app = FastAPI(
    title="AI Accounting Assistant API",
)


@app.get("/")
def root():
    return {"status": "running"}