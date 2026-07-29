from fastapi import FastAPI

from app.core.config import settings
from app.routers.router import api_router


import logging

logging.basicConfig(
    level=logging.INFO
)

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.VERSION
)


app.include_router(
    api_router,
    prefix="/api"
)


@app.get("/")
def root():
    return {
        "message": "AI Accounting Assistant API running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }