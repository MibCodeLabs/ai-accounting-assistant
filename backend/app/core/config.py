from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str = "AI-Powered Accounting Assistant API"
    VERSION: str = "1.0.0"

    DATABASE_URL: str

    OPENAI_API_KEY: str = ""

    class Config:
        env_file = ".env"


settings = Settings()