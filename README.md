# AMD_hackathon_CodeLingua
Project CodeLingua

How to Run
Create an environment, activate it and install dependencies
```
conda create -n code-lingua python=3.11 -y
conda activate code-lingua
pip install -r requirements.txt
```

Cd into frontend and run the frontend
```
cd frontend
npm install
npm run dev
```

Open another terminal and activate the environment to run the backend
```
cd backend
uvicorn app:app --reload
