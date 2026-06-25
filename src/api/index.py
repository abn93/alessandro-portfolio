import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from langchain_classic.chains import ConversationChain
from langchain_classic.memory import ConversationBufferMemory
from langchain_deepseek import ChatDeepSeek

load_dotenv()

app = FastAPI(title="AI Assistant - Alessandro", version="1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    message: str

llm = ChatDeepSeek(
    model="deepseek-chat",
    temperature=0.7,
    api_key=os.getenv("DEEPSEEK_API_KEY"),
)

memory = ConversationBufferMemory()

conversation = ConversationChain(
    llm=llm,
    memory=memory,
    verbose=True,
)

@app.get("/api/health")
async def health():
    return {"status": "ok", "message": "AI Assistant is running!"}

@app.post("/api/chat")
async def chat(data: Message):
    try:
        response = conversation.predict(input=data.message)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
async def root():
    return {
        "message": "Welcome to Alessandro's AI Assistant API!",
        "docs": "/docs",
        "health": "/api/health",
        "chat": "/api/chat (POST)"
    }