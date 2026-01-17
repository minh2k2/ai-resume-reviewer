import requests

import sys


def test_analyze():
    url = "http://127.0.0.1:8000/api/analyze"

    # Create a dummy PDF file in memory
    # A minimal valid PDF header
    pdf_content = b"%PDF-1.4\n1 0 obj\n<<\n/Type /Catalog\n/Pages 2 0 R\n>>\nendobj\n2 0 obj\n<<\n/Kids [3 0 R]\n/Count 1\n/Type /Pages\n>>\nendobj\n3 0 obj\n<<\n/MediaBox [0 0 595 842]\n/Type /Page\n/Parent 2 0 R\n/Resources <<\n/Font <<\n/F1 <<\n/Type /Font\n/Subtype /Type1\n/BaseFont /Times-Roman\n>>\n>>\n>>\n/Contents 4 0 R\n>>\nendobj\n4 0 obj\n<<\n/Length 55\n>>\nstream\nBT\n/F1 24 Tf\n100 100 Td\n(Python FastAPI Resume) Tj\nET\nendstream\nendobj\nxref\n0 5\n0000000000 65535 f \n0000000010 00000 n \n0000000060 00000 n \n0000000117 00000 n \n0000000272 00000 n \ntrailer\n<<\n/Size 5\n/Root 1 0 R\n>>\nstartxref\n377\n%%EOF"

    files = {"file": ("test.pdf", pdf_content, "application/pdf")}

    try:
        response = requests.post(url, files=files)
        if response.status_code == 200:
            print("Success! Response:")
            print(response.json())
        else:
            print(f"Failed with status {response.status_code}:")
            print(response.text)
            sys.exit(1)
    except Exception as e:
        print(f"Error connecting to server: {e}")
        sys.exit(1)


if __name__ == "__main__":
    test_analyze()
