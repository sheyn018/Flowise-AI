import requests

API_URL = "https://sheyn018-flowise.hf.space/api/v1/vector/upsert/c85c2ccf-fda9-4bcc-acb8-c94b94786bdb"

# use form data to upload files
form_data = {
    "files": ('Sheane.txt', open('Sheane.txt', 'rb'))
}
body_data = {
    "openAIApiKey": "",
    "modelName": "text-embedding-ada-002",
    "stripNewLines": True,
}

def query(form_data, body_data):
    response = requests.post(API_URL, files=form_data, data=body_data)
    return response.json()

output = query(form_data, body_data)

print(output)