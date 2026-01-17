from fastapi import APIRouter, UploadFile, File, HTTPException
from app.models.schemas import ResumeAnalysisResponse
from app.services.resume_service import parse_pdf, analyze_resume

router = APIRouter()

@router.post("/analyze", response_model=ResumeAnalysisResponse)
async def analyze_resume_endpoint(file: UploadFile = File(...)):
    if file.content_type != "application/pdf":
        raise HTTPException(status_code=400, detail="Chỉ chấp nhận file PDF")
    
    try:
        # Read file content
        content = parse_pdf(file.file)
        
        # Analyze
        result = analyze_resume(content)
        
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Lỗi khi xử lý file: {str(e)}")
