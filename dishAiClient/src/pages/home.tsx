import { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [result, setResult] = useState<{ ingredients: string; meal: string } | null>(null);
  const  [isLoading, setIsLoading ] = useState(false);
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
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) return;
    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", image);

  try {
  const res = await axios.post("https://node-vertex-ai-68618013693.us-central1.run.app/api/meal", formData);
  setResult(res.data);
} catch {
    console.log("there is an error");
  }finally {
    setIsLoading(false);
  }
  };

  return (
    <div className="relative min-h-screen bg-[url('../public/david-tip.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 backdrop-blur-sm bg-black/40" />
      <div className=" relative max-w-xl mx-auto py-10 px-4">
        <div className="background"></div>
        <h1 className="text-[clamp(2rem,8vw,3rem)] font-extrabold leading-[3.2rem] mb-6 text-green-700">Transform Ingredients Into Memorable Delicacies powered by DishAi</h1>
        <p className="text-2xl font-extralight  py-3 leading-[2.3rem]  mb-5 ">
          Ready for your next meal.... !
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="file" accept="image/*" onChange={handleImage} className="bg-green-100 text-black px-4 py-2 rounded hover:bg-black hover:text-green-100 mr-2"/>
          <button className={`bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ${isLoading ? "opacity-50 cursor-not-allowed" : "" }`}
          disabled={isLoading}
          >
            Process
          </button>
        </form>
      {
        isLoading ? (
          <div style={{ display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "2rem" }}>
            <ClipLoader loading={true} size={250} color="#36d7b7" />
            <p style={{ marginTop: "1rem", fontSize: "1rem", color: "#555" }}>
              {messages[index]}
            </p>
          </div>
        ) : result && (
          <div className="mt-6 p-4 border rounded bg-gray-100">
            <h2 className="font-bold">Ingredients:</h2>
            <p>{result.ingredients}</p>
            <h2 className="font-bold mt-4">Suggested Meal:</h2>
            <p>{result.meal}</p>
          </div>
        )}
      </div>
  </div>
  );
}
