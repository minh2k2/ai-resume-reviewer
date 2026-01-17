import urllib.request
import json
import sys


def check_backend():
    url = "http://127.0.0.1:8000/"
    try:
        print(f"Connecting to {url}...")
        with urllib.request.urlopen(url) as response:
            if response.status == 200:
                data = json.loads(response.read().decode())
                print("Success! Backend responded:", data)
                return True
            else:
                print(f"Backend returned status {response.status}")
                return False
    except urllib.error.URLError as e:
        print(f"Failed to connect: {e}")
        return False
    except Exception as e:
        print(f"An error occurred: {e}")
        return False


if __name__ == "__main__":
    if check_backend():
        print("Backend is running.")
    else:
        print("Backend seems to be down or unreachable.")
        sys.exit(1)
