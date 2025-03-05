import React from 'react';
import ChefifyHeader from './components/ChefifyHeader';
import RecipeBoxPage from './components/RecipeBoxPage';
import ChefifyFooter from './components/ChefifyFooter';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ChefifyHeader />
      
      <main className="flex-grow">
        <RecipeBoxPage />
      </main>
      
      <ChefifyFooter />
    </div>
  );
}

export default App;