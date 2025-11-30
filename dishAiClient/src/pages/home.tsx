import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [result, setResult] = useState<{ ingredients: string; meal: string } | null>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    const res = await axios.post("http://localhost:3000/api/meal", formData);
    setResult(res.data);
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">AI Ingredient Detector</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="file" accept="image/*" onChange={handleImage} className="bg-green-100 text-black px-4 py-2 rounded hover:bg-black hover:text-green-100 mr-2"/> 
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Process
        </button>
      </form>

      {result && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="font-bold">Ingredients:</h2>
          <p>{result.ingredients}</p>

          <h2 className="font-bold mt-4">Suggested Meal:</h2>
          <p>{result.meal}</p>
        </div>
      )}
    </div>
  );
}
