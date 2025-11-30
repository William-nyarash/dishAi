export default function About() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-red-500 mb-6">About DishAl</h1>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        DishAl helps you turn the ingredients you already have into
        delicious meals. Simply upload a photo of your ingredients,
        and our AI analyzes them to recommend personalized recipes.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Powered by Vertex AI and modern image recognition technology,
        DishAl makes cooking efficient, creative, and fun — even on
        busy days.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed">
        Our mission is to reduce food waste, simplify cooking,
        and inspire more people to enjoy homemade meals.
      </p>
    </div>
  );
}
