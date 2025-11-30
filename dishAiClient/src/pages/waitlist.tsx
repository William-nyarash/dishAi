import { useState } from "react";
import axios from "axios";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // You can change to your own endpoint
      await axios.post("http://localhost:3000/api/waitlist", { email });
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting waitlist:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-red-500 mb-6">Join the Waitlist</h1>

      <p className="text-gray-700 mb-6">
        Be the first to access DishAl when we launch. Enter your email below.
      </p>

      {submitted ? (
        <div className="p-4 bg-green-100 text-green-800 border border-green-300 rounded">
          🎉 You're on the list! We'll notify you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full border p-3 rounded focus:outline-red-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 transition"
          >
            Join Waitlist
          </button>
        </form>
      )}
    </div>
  );
}
