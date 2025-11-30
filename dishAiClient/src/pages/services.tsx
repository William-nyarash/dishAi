export default function Services() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-red-500 mb-8">Our Services</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Ingredient Detection</h2>
          <p className="text-gray-600">
            Upload a picture of ingredients you have at home and let our AI
            identify everything in the image with precision.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Smart Meal Suggestions</h2>
          <p className="text-gray-600">
            Receive recipe ideas based on available ingredients, preferences,
            and dietary restrictions.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Food Waste Reduction</h2>
          <p className="text-gray-600">
            DishAl helps you make the most of what you already have, preventing
            unused food and saving money.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Cooking Inspiration</h2>
          <p className="text-gray-600">
            Explore creative meal ideas and cooking tips tailored to your
            pantry and lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
}
