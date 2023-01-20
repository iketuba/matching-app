from fastapi import FastAPI

from schemas import SuccessMsg

app = FastAPI()

@app.get("/", response_model=SuccessMsg)
def root():
  return {"message":"Hello world!"}
