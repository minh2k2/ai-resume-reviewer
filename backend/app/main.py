from fastapi import FastAPI
from app.api.endpoints import router as api_router

app = FastAPI(title="AI Resume Reviewer Backend")

app.include_router(api_router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "AI Resume Reviewer API is running"}
