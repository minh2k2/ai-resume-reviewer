import urllib.request
import json
import sys


def test_analyze():
    url = "http://127.0.0.1:8000/api/analyze"

    # Create a minimal valid PDF content (header + body + EOF)
    pdf_content = (
        b"%PDF-1.4\n"
        b"1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj\n"
        b"2 0 obj<</Kids[3 0 R]/Type/Pages/Count 1>>endobj\n"
        b"3 0 obj<</Type/Page/MediaBox[0 0 595 842]/Parent 2 0 R/Resources<<>>>>endobj\n"
        b"xref\n0 4\n0000000000 65535 f\n0000000010 00000 n\n0000000053 00000 n\n0000000102 00000 n\n"
        b"trailer<</Size 4/Root 1 0 R>>\n"
        b"startxref\n178\n%%EOF"
    )

    boundary = "----WebKitFormBoundary7MA4YWxkTrZu0gW"
    data = (
        (
            f"--{boundary}\r\n"
            'Content-Disposition: form-data; name="file"; filename="test.pdf"\r\n'
            "Content-Type: application/pdf\r\n\r\n"
        ).encode()
        + pdf_content
        + f"\r\n--{boundary}--\r\n".encode()
    )

    req = urllib.request.Request(url, data=data, method="POST")
    req.add_header("Content-Type", f"multipart/form-data; boundary={boundary}")

    try:
        print(f"POSTing to {url}...")
        with urllib.request.urlopen(req) as response:
            if response.status == 200:
                print("Success! Response:", json.loads(response.read().decode()))
                return True
            else:
                print(f"Failed: {response.status} {response.read().decode()}")
                return False
    except urllib.error.URLError as e:
        print(f"Connection failed: {e}")
        if hasattr(e, "read"):
            print(e.read().decode())
        return False


if __name__ == "__main__":
    test_analyze()
