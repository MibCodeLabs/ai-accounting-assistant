from fastapi import APIRouter
from app.routers.chat import router as chat_router

api_router = APIRouter()

api_router.include_router(
    chat_router,
    prefix="/ai",
    tags=["AI"]
)

@api_router.get("/test")
def test_route():
    return {
        "message": "API router working"
    }