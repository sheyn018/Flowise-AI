import requests

API_URL = "https://sjmt-flowise.hf.space/api/v1/vector/upsert/4fce5049-feb5-40c7-bec9-256738aa520c"

# use form data to upload files
form_data = {
    "files": ('example.txt', open('example.txt', 'rb'))
}
body_data = {
    "openAIApiKey": "example",
    "modelName": "example",
    "stripNewLines": true,
}

def query(form_data, body_data):
    response = requests.post(API_URL, files=form_data, data=body_data)
    return response.json()

output = query(form_data, body_data)