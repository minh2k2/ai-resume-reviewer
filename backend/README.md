# AI Resume Reviewer Backend

Đây là phần Backend cho dự án AI Resume Reviewer, được xây dựng bằng FastAPI. Dịch vụ này cung cấp API để phân tích Resume (CV) định dạng PDF và trả về kết quả đánh giá giả lập (Mock AI).

## Yêu cầu hệ thống

- Python 3.8+
- pip

## Cài đặt

1. Di chuyển vào thư mục `backend`:
   ```bash
   cd backend
   ```

2. Cài đặt các thư viện cần thiết:
   ```bash
   pip install -r requirements.txt
   ```

## Chạy Server

Để khởi động server phát triển (development server):

```bash
uvicorn app.main:app --reload
```

Server sẽ chạy tại địa chỉ: `http://127.0.0.1:8000`

## Tài liệu API (Swagger UI)

Sau khi chạy server, bạn có thể truy cập tài liệu API tương tác tại:

- **Swagger UI**: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- **ReDoc**: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

## Sử dụng API

### Endpoint: Phân tích Resume

- **URL**: `/api/analyze`
- **Method**: `POST`
- **Body**: `multipart/form-data`
  - `file`: File PDF cần phân tích.
- **Response**: JSON chứa điểm số, điểm mạnh, điểm yếu và gợi ý cải thiện.

Ví dụ response:
```json
{
  "score": 75,
  "strengths": [
    "Kỹ năng Python tốt",
    "Cấu trúc CV rõ ràng"
  ],
  "weaknesses": [
    "CV hơi ngắn, cần bổ sung thêm chi tiết kinh nghiệm"
  ],
  "suggestions": [
    "Nên bổ sung kỹ năng Git/Version Control"
  ]
}
```

## Cấu trúc dự án

- `app/main.py`: Điểm khởi chạy của ứng dụng FastAPI.
- `app/api/endpoints.py`: Định nghĩa các API endpoints.
- `app/models/schemas.py`: Định nghĩa các Pydantic models (Request/Response schemas).
- `app/services/resume_service.py`: Logic xử lý nghiệp vụ (Parsing PDF, Mock AI analysis).
