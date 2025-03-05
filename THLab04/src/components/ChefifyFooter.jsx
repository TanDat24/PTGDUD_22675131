import React, { useState } from 'react';

const ChefifyFooter = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">About Us</h4>
          <p className="text-gray-400 mb-4">
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-l-full w-full text-gray-800"
            />
            <button 
              className="bg-pink-500 text-white px-4 py-2 rounded-r-full hover:bg-pink-600"
            >
              Send
            </button>
          </div>
        </div>

        {/* Learn More Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">Learn More</h4>
          <div className="space-y-2">
            <a href="#" className="block text-gray-400 hover:text-white">Our Cooks</a>
            <a href="#" className="block text-gray-400 hover:text-white">See Our Features</a>
            <a href="#" className="block text-gray-400 hover:text-white">FAQ</a>
          </div>
        </div>

        {/* Recipes Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">Recipes</h4>
          <div className="space-y-2">
            <a href="#" className="block text-gray-400 hover:text-white">What to Cook This Week</a>
            <a href="#" className="block text-gray-400 hover:text-white">Pasta</a>
            <a href="#" className="block text-gray-400 hover:text-white">Dinner</a>
            <a href="#" className="block text-gray-400 hover:text-white">Healthy</a>
            <a href="#" className="block text-gray-400 hover:text-white">Vegetarian</a>
            <a href="#" className="block text-gray-400 hover:text-white">Vegan</a>
            <a href="#" className="block text-gray-400 hover:text-white">Christmas</a>
          </div>
        </div>

        {/* Shop Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">Shop</h4>
          <div className="space-y-2">
            <a href="#" className="block text-gray-400 hover:text-white">Gift Subscription</a>
            <a href="#" className="block text-gray-400 hover:text-white">Send Us Feedback</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 mt-8 pt-4 border-t border-gray-800 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="/api/placeholder/40/40?text=C" 
            alt="Chefify Logo" 
            className="w-10 h-10"
          />
          <span className="text-gray-400">© 2024 Chefify Company</span>
        </div>
        <div className="space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
        </div>
        <div className="text-gray-400">
          Made with ♥ by Visily
        </div>
      </div>
    </footer>
  );
};

export default ChefifyFooter;