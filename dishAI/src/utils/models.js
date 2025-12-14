import { VertexAI } from "@google-cloud/vertexai";
import dotenv from 'dotenv'
dotenv.config();

const vertex = new VertexAI({
    project:process.env.PROJECT_ID,
    location:process.env.LOCATION
});

export const  Model = vertex.getGenerativeModel({
    model:process.env.MODEL
});

 const [index, setIndex ] = useState(0);


  const messages = [
    "Consulting the chef",
    "Curating the perfect recipe",
    "On your marks, set, cook...."
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    },50000);

    return () => clearInterval(interval);

  }, [messages.length])

 