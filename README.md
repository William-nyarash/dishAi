#   DishAi

## AI-powered meal suggestions from the ingredients you already have.

DishAI is an intelligent cooking assistant that uses Google Vertex AI to analyze user-uploaded images, detect ingredients, and automatically generate simple, easy-to-make meal ideas. Whether you're trying to reduce food waste or just don’t know what to cook, DishAI turns a quick photo into instant meal inspiration.

https://github.com/user-attachments/assets/1130dbda-048f-4e97-b886-0acb82332133


##  Table of Contents

- Features

- How It Works

- Architecture Overview

- Tech Stack

- Setup & Installation

- Environment Variables

- Running the App

- Using the App

- Folder Structure

- Future Enhancements

- License
<hr>


### Features

- Image Upload
Users upload a photo of their ingredients (e.g., veggies, pantry items, leftovers).

- Vertex AI Image Understanding
The app sends the image to Google Vertex AI Vision / Multimodal models to identify ingredients.

- AI Meal Generator
Based on detected ingredients, DishAI suggests simple recipes such as salads, stir-fries, wraps, sandwiches, bowls, etc.

- Fast & Lightweight
Optimized to return suggestions within seconds.

- User-Friendly UI
Clean interface for uploading images and viewing generated meals.
### How It Works
1. User uploads an image
    -   The image can contain raw ingredients, leftovers, or packaged items.

2. Backend sends image to Vertex AI

- DishAI uses:

    -   Vertex AI Vision for ingredient detection

    - optionally Gemini via Vertex AI for reasoning and generating recipe ideas

3. Ingredients are extracted

    ```bash 
    #Example output:

        ["tomatoes", "avocado", "limes", "onions"]
    ```

4. Meal ideas are generated
    - An LLM generates simple recipes such as:

        -   Avocado Tomato Salad

        -   Simple Guacamole

        -   Tomato Lime Rice Bowl

        -   Veggie Wrap

5. User receives a list of easy-to-follow meal suggestions.

6. Intrested in the [presentation](https://drive.google.com/drive/folders/1Y4fNH5BFRpIocVweVivQ0OD3TUWZdztx?usp=sharing) 
### Architecture Overview
- Frontend
    - React

- Backend
    - Node.js / Express
    - Google Cloud SDK
    - Vertex AI APIs

- AI / Cloud
    - Vertex AI Vision for ingredient recognition
    - Gemini on Vertex AI for recipe generation
    - Google Cloud Storage for temporary image storage

### setup & installation
1. Clone the repository
 ``` bash 
 git clone https://github.com/your-username/dishai.git
 # navigate to the folder
cd dishai
 ```
 2. Enable Google Cloud Services
Make sure the following are enabled in your GCP project:

    - Vertex AI API

    - Cloud Storage

    - IAM permissions for service account

3. Authenticate
Authenticate  the models locally
```bash
 gcloud auth application-default login
```
Or use a service account key:
```bash 
    export GOOGLE_APPLICATION_CREDENTIALS="/path-to-your/service-account.json"
```
### Environmental variables
> [!NOTICE]
> copy  the content below to a .env file in the backend folder then populate it with your environmental varible values

```bash 
PROJECT_ID="your project id"
PORT="port to run the backend"
LOCATION="the location from which your model is deployed "
MODEL="Your prefered model"
ROLE="the role"
MODEL_TEMP="the model temp"
MODEL_MAX_OUPUT_TOKENS="your maximum output tokens"
```

### Running the app
for local deployment 

#### backend 
```bash 
    # navigate to the dishAI folder
    cd dishAI
    #  run 
    npm install  #note run this after cloning / forking the repo
    
    npm run dev
```
#### frontend

```bash
  #navigate to the dishAiclient 
  cd dishAiclient

  # run 
  npm install 
  # to install the dependancies the run 
  npm run dev
```
### Using the app

1.  Open the app in your browser.

2. Upload a photo of your available ingredients.

3. Wait a few seconds while DishAI analyzes the image.

4. Enjoy a list of easy meal suggestions!

5. Click any recipe to view instructions and variations
### Folder Structure 
```bash 
    dishai/
├── backend/
│   ├── app.py / index.js
│   ├── services/
│   │   ├── vertex_vision.py
│   │   ├── meal_generator.py
│   └── utils/
│       └── storage.py
├── frontend/
│   ├── components/
│   ├── pages/
│   └── styles/
├── README.md
└── package.json / requirements.txt
```

### Future Enhancements

- Ingredient expiration detection

- Step-by-step cooking instructions

- Nutrition breakdown

- Meal planning & grocery suggestions

- Support for multiple cuisines

- Mobile app version (React Native / Flutter)

### License

MIT License
