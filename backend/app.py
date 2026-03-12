from fastapi import FastAPI
from pydantic import BaseModel
import uuid
from fastapi.middleware.cors import CORSMiddleware

from agent import workflow

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class QuestionRequest(BaseModel):
    topic: str


@app.post("/question")
def get_question(req: QuestionRequest):

    config = {"configurable": {"thread_id": str(uuid.uuid4())}}
    result = workflow.invoke(req.topic, config=config)
    text = result[0]["text"]
    
    return {"question": text}