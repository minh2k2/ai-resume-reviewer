import random
from pypdf import PdfReader
from typing import BinaryIO
from app.models.schemas import ResumeAnalysisResponse


def parse_pdf(file: BinaryIO) -> str:
    file.seek(0)
    reader = PdfReader(file)
    text = ""
    for page in reader.pages:
        try:
            text += page.extract_text() + "\n"
        except Exception:
            # Skip page if extraction fails (e.g. bbox error)
            continue
    return text


def analyze_resume(text: str) -> ResumeAnalysisResponse:
    # Logic giả lập (Mock logic)
    # Kiểm tra một số từ khóa đơn giản để tạo cảm giác "phân tích"
    text_lower = text.lower()

    strengths = []
    if "python" in text_lower:
        strengths.append("Kỹ năng Python tốt")
    if "fastapi" in text_lower:
        strengths.append("Có kiến thức về FastAPI")
    if "sql" in text_lower:
        strengths.append("Có kinh nghiệm làm việc với CSDL")
    if "docker" in text_lower:
        strengths.append("Biết sử dụng Docker")
    if not strengths:
        strengths.append("Cấu trúc CV rõ ràng")

    weaknesses = []
    if len(text) < 500:
        weaknesses.append("CV hơi ngắn, cần bổ sung thêm chi tiết kinh nghiệm")
    if "project" not in text_lower and "dự án" not in text_lower:
        weaknesses.append("Thiếu thông tin về các dự án thực tế")
    else:
        # Random weakness for variety if mostly good
        potential_weaknesses = [
            "Cần mô tả chi tiết hơn về kết quả đạt được (số liệu cụ thể)",
            "Chưa làm nổi bật kỹ năng mềm",
            "Phần giới thiệu bản thân còn sơ sài",
        ]
        if random.random() > 0.5:
            weaknesses.append(random.choice(potential_weaknesses))

    suggestions = []
    if "git" not in text_lower:
        suggestions.append("Nên bổ sung kỹ năng Git/Version Control")
    if "english" not in text_lower and "tiếng anh" not in text_lower:
        suggestions.append("Nên thêm trình độ ngoại ngữ")

    suggestions.append(
        "Sử dụng các động từ mạnh để mô tả kinh nghiệm (ví dụ: Phát triển, Tối ưu hóa, Dẫn dắt)"
    )

    # Score calculation mock
    base_score = 60
    score = base_score + (len(strengths) * 5) - (len(weaknesses) * 5)
    score = max(0, min(100, score))  # Ensure 0-100 range

    return ResumeAnalysisResponse(
        score=score, strengths=strengths, weaknesses=weaknesses, suggestions=suggestions
    )
