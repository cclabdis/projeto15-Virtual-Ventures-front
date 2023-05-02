import React, { useState, useEffect } from 'react';

function LoadingPage() {
  return (
    <div>
      <h2>Carregando...</h2>
      {/* Adicione aqui um spinner ou animação para tornar a página de loading mais interessante */}
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div>
          {/* Conteúdo principal da sua aplicação */}
        </div>
      )}
    </div>
  );
}

export default App;