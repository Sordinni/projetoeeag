import React, { useState } from 'react';
import { Trophy, Home, RotateCcw } from 'lucide-react';

// Updated image data with real and AI images
const imageData = [
  // Real Images (22)
  { id: 1, url: 'https://i.ibb.co/3mwW40CD/matheus-seiji-goto-3-Rl-CP0f-HY-unsplash.jpg', is_ai: false },
  { id: 2, url: 'https://i.ibb.co/hJnz2MrD/kalen-emsley-Bkci-8qcdv-Q-unsplash.jpg', is_ai: false },
  { id: 3, url: 'https://i.ibb.co/xS8CwfvW/vincentiu-solomon-ln5drpv-Im-I-unsplash.jpg', is_ai: false },
  { id: 4, url: 'https://i.ibb.co/v4Wy54MS/pine-watt-2-Hzmz15w-Gik-unsplash.jpg', is_ai: false },
  { id: 5, url: 'https://i.ibb.co/4RLvyR0H/pine-watt-2-Hzmz15w-Gik-unsplash.jpg', is_ai: false },
  { id: 6, url: 'https://i.ibb.co/DDHN14dB/benjamin-voros-ph-IFd-C6l-A4-E-unsplash.jpg', is_ai: false },
  { id: 7, url: 'https://i.ibb.co/wZdhGbzY/adam-kool-nd-N00-Kmb-J1c-unsplash.jpg', is_ai: false },
  { id: 8, url: 'https://i.ibb.co/jP5gkjxD/raphael-nogueira-JMYBet-GDIKY-unsplash.jpg', is_ai: false },
  { id: 9, url: 'https://i.ibb.co/Y7DqkNXy/marcos-paulo-prado-UHGZVk6-WAkw-unsplash.jpg', is_ai: false },
  { id: 10, url: 'https://i.ibb.co/k2QfJKZF/ryoji-iwata-IBa-Vu-Zs-JJTo-unsplash.jpg', is_ai: false },
  { id: 11, url: 'https://i.ibb.co/Rpv7XJc5/timon-studler-ABGa-Vh-Jxw-DQ-unsplash.jpg', is_ai: false },
  { id: 12, url: 'https://i.ibb.co/GvvC0Sh2/jacek-dylag-PMx-T0-Xt-Q-A-unsplash.jpg', is_ai: false },
  { id: 13, url: 'https://i.ibb.co/ymtrH5Tp/mauro-mora-31-p-Oduw-ZGE-unsplash.jpg', is_ai: false },
  { id: 14, url: 'https://i.ibb.co/yFtfk39n/josh-hild-Lu-KMc-Tm-GW-k-unsplash.jpg', is_ai: false },
  { id: 15, url: 'https://i.ibb.co/XZ69PJnj/gwen-weustink-I3-C1s-SXj1i8-unsplash.jpg', is_ai: false },
  { id: 16, url: 'https://i.ibb.co/5hYyMVv4/hans-jurgen-mager-q-QWV91-TTBr-E-unsplash.jpg', is_ai: false },
  { id: 17, url: 'https://i.ibb.co/673K1T2y/smit-patel-d-GMcpbzcq1-I-unsplash.jpg', is_ai: false },
  { id: 18, url: 'https://i.ibb.co/dJzy0rq5/wynand-van-poortvliet-4-Amy-Od-XZAQc-unsplash.jpg', is_ai: false },
  { id: 19, url: 'https://i.ibb.co/fd6Sz1ZM/transly-translation-agency-qyt0c-PBy-Jjs-unsplash.jpg', is_ai: false },
  { id: 20, url: 'https://i.ibb.co/B2gTDVxG/scott-carroll-fav-Qn8-Wg-Ryk-unsplash.jpg', is_ai: false },
  { id: 21, url: 'https://i.ibb.co/SDZhC0K8/jon-anders-dalan-Dm-A484-UHAzw-unsplash.jpg', is_ai: false },
  { id: 22, url: 'https://i.ibb.co/jdkKLGD/lightscape-Ltn-Pej-WDSAY-unsplash.jpg', is_ai: false },

  // AI Images (22)
  { id: 23, url: 'https://i.ibb.co/3YWNLsk9/2c65c0da-d9fc-4b76-9a90-d7445748fdc3.webp', is_ai: true },
  { id: 24, url: 'https://i.ibb.co/7tS080mZ/3540a854-7b97-4ba3-a703-b23915be1724.webp', is_ai: true },
  { id: 25, url: 'https://i.ibb.co/0Vqv5gg0/0fe10b9d-767e-4f9a-8f93-6b8bb862ebba.webp', is_ai: true },
  { id: 26, url: 'https://i.ibb.co/60Kf5g4H/d8262da6-4453-48a7-b3e3-f6a8e086bc94.webp', is_ai: true },
  { id: 27, url: 'https://i.ibb.co/0yb47Z0y/a0e5cab3-1d6f-44f3-8bab-4e5e14580d4e.webp', is_ai: true },
  { id: 28, url: 'https://i.ibb.co/W4h9KBGr/e96e82df-a471-4141-bcaa-0e40bbd8b63d.webp', is_ai: true },
  { id: 29, url: 'https://i.ibb.co/LzXzX9X6/6599b4c1-67e9-4284-8d4b-2ff5c8b45eb8.webp', is_ai: true },
  { id: 30, url: 'https://i.ibb.co/Fk1XwDym/b03667e0-e7b2-4b55-bda1-33ea17b11c37.webp', is_ai: true },
  { id: 31, url: 'https://i.ibb.co/8Lq5NXK5/97bb0730-80af-4d5e-bce7-cddbdc9bc147.webp', is_ai: true },
  { id: 32, url: 'https://i.ibb.co/8LrC4TMX/IMG-20251114-WA0217.jpg', is_ai: true },
  { id: 33, url: 'https://i.ibb.co/Cp1rYPTH/2940f509-6ca9-4e3c-ae7e-0bec473f3aac.webp', is_ai: true },
  { id: 34, url: 'https://i.ibb.co/j90Kfn0W/d17e0602-8c2c-4091-9f92-7754928536a0.webp', is_ai: true },
  { id: 35, url: 'https://i.ibb.co/TMcLGwkz/2e409f73-c452-4678-b49f-a0bc7e8b54fd.webp', is_ai: true },
  { id: 36, url: 'https://i.ibb.co/q3v4mVdN/199a3159-1493-4321-b3d2-cc591997eb28.webp', is_ai: true },
  { id: 37, url: 'https://i.ibb.co/3mfqjrc7/IMG-20251114-WA0043.jpg', is_ai: true },
  { id: 38, url: 'https://i.ibb.co/whxMVBkK/IMG-20251114-WA0036.jpg', is_ai: true },
  { id: 39, url: 'https://i.ibb.co/xKRfjmC6/IMG-20251114-WA0030.jpg', is_ai: true },
  { id: 40, url: 'https://i.ibb.co/mmdR1fn/IMG-20251114-WA0028.jpg', is_ai: true },
  { id: 41, url: 'https://i.ibb.co/XfgPFZwr/IMG-20251114-WA0031.jpg', is_ai: true },
  { id: 42, url: 'https://i.ibb.co/mrDLkQXN/IMG-20251114-WA0039.jpg', is_ai: true },
  { id: 43, url: 'https://i.ibb.co/x8HKsY8T/IMG-20251114-WA0044.jpg', is_ai: true },
  { id: 44, url: 'https://i.ibb.co/Bm2XhBC/IMG-20251114-WA0209.jpg', is_ai: true }
];

const App = () => {
  const [currentView, setCurrentView] = useState('start'); // 'start', 'game', 'game-complete'
  const [username, setUsername] = useState('');
  const [currentRound, setCurrentRound] = useState(1);
  const [totalRounds] = useState(10);
  const [currentImages, setCurrentImages] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [roundResults, setRoundResults] = useState([]); // Armazena os resultados de todos os rounds
  const [totalScore, setTotalScore] = useState(0);
  const [showFinalResults, setShowFinalResults] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const startGame = () => {
    if (!username.trim()) return;
    setCurrentRound(1);
    setTotalScore(0);
    setUserAnswers({});
    setRoundResults([]);
    setShowFinalResults(false);
    
    const shuffledImages = shuffleArray([...imageData]);
    const roundImages = shuffledImages.slice(0, 2); // Apenas 2 imagens por round
    setCurrentImages(roundImages);
    setCurrentView('game');
  };

  const handleAnswerSelect = (imageId, answer) => {
    setUserAnswers(prev => ({
      ...prev,
      [imageId]: answer
    }));
  };

  const verifyAnswers = () => {
    let correctCount = 0;
    let roundPoints = 0;
    
    currentImages.forEach(image => {
      const userAnswer = userAnswers[image.id];
      const isCorrect = (userAnswer === 'ai' && image.is_ai) || (userAnswer === 'real' && !image.is_ai);
      
      if (isCorrect) {
        correctCount++;
        roundPoints += 10;
      }
    });
    
    // Bonus for getting all 2 correct
    if (correctCount === 2) {
      roundPoints += 20;
    }
    
    // Save round result
    const roundResult = {
      round: currentRound,
      images: currentImages.map(img => ({
        id: img.id,
        url: img.url,
        is_ai: img.is_ai,
        user_answer: userAnswers[img.id],
        is_correct: (userAnswers[img.id] === 'ai' && img.is_ai) || (userAnswers[img.id] === 'real' && !img.is_ai)
      })),
      score: roundPoints
    };
    
    const newRoundResults = [...roundResults, roundResult];
    setRoundResults(newRoundResults);
    
    // Update total score
    const newTotalScore = totalScore + roundPoints;
    setTotalScore(newTotalScore);
    
    // Move to next round or end game
    if (currentRound < totalRounds) {
      setCurrentRound(currentRound + 1);
      setUserAnswers({});
      const shuffledImages = shuffleArray([...imageData]);
      const startIndex = (currentRound) * 2;
      const roundImages = shuffledImages.slice(startIndex, startIndex + 2);
      setCurrentImages(roundImages);
    } else {
      // Game complete, add to leaderboard and show final results button
      const newLeaderboard = [...leaderboard, { name: username, score: newTotalScore }]
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
      setLeaderboard(newLeaderboard);
      setCurrentView('game-complete');
    }
  };

  const resetGame = () => {
    setUsername('');
    setCurrentView('start');
  };

  // Start Screen
  if (currentView === 'start') {
    return (
      <div className="min-h-screen bg-[#332575] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
          {/* Logo da Escola */}
          <div className="mb-6">
            <img 
              src="https://i.ibb.co/qLsHfq9h/logo-eeag.png" 
              alt="Escola Estadual Gomes" 
              className="w-48 h-auto mx-auto mb-4"
            />
          </div>
          
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-[#099CD9] mb-2">IA ou REAL?</h1>
            <p className="text-gray-700">Você consegue diferenciar a criação da máquina da realidade?</p>
          </div>
          
          <div className="space-y-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu nome de jogador"
              className="w-full px-4 py-3 bg-gray-100 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#099CD9]"
            />
            <button
              onClick={startGame}
              disabled={!username.trim()}
              className="w-full bg-[#099CD9] text-white py-3 rounded-lg font-semibold hover:bg-[#088bc0] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              INICIAR JOGO
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Game Screen
  if (currentView === 'game') {
    const allAnswered = currentImages.length > 0 && 
      currentImages.every(img => userAnswers[img.id] !== undefined);
    
    return (
      <div className="min-h-screen bg-[#332575] text-white p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-[#332575] rounded-lg p-4 mb-6 flex flex-wrap items-center justify-between gap-4 border border-[#099CD9]">
            <div className="flex items-center gap-4">
              <span className="bg-[#099CD9] px-3 py-1 rounded-full text-sm font-semibold text-white">
                Jogo
              </span>
              <span>Round: {currentRound} de {totalRounds}</span>
            </div>
            <div className="text-right">
              <p>Pontuação Total: {totalScore}</p>
            </div>
          </div>
          
          {/* Game Area - Apenas 2 imagens por round */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {currentImages.map((image, index) => {
              const userAnswer = userAnswers[image.id];
              
              return (
                <div key={image.id} className="bg-[#332575] rounded-xl p-4 border border-[#099CD9]">
                  <div className="relative mb-3 aspect-video overflow-hidden rounded border-2 border-[#2256BB]">
                    <img 
                      src={image.url} 
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAnswerSelect(image.id, 'ai')}
                      className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-all duration-200 ${
                        userAnswer === 'ai' 
                          ? 'bg-[#2256BB] text-white' 
                          : 'bg-[#2a1f66] hover:bg-[#2552b1] text-white'
                      }`}
                    >
                      🤖 É IA
                    </button>
                    <button
                      onClick={() => handleAnswerSelect(image.id, 'real')}
                      className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-all duration-200 ${
                        userAnswer === 'real' 
                          ? 'bg-[#2256BB] text-white' 
                          : 'bg-[#2a1f66] hover:bg-[#2552b1] text-white'
                      }`}
                    >
                      👤 É Real
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Action Button */}
          {allAnswered && (
            <div className="text-center">
              <button
                onClick={verifyAnswers}
                className="bg-[#099CD9] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#088bc0] transition-all duration-200"
              >
                {currentRound < totalRounds ? 'Próximo Round' : 'Ver Resultados'}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Game Complete Screen
  if (currentView === 'game-complete') {
    if (!showFinalResults) {
      return (
        <div className="min-h-screen bg-[#332575] text-white flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
            <div className="mb-6">
              <Trophy className="w-16 h-16 text-[#099CD9] mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">
                Parabéns, {username}!
              </h2>
              <p className="text-lg mb-4">Você completou todos os desafios!</p>
              <p className="text-3xl font-bold text-[#099CD9]">Pontuação Total: {totalScore}</p>
            </div>
            
            <div className="bg-[#099CD9]/20 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-[#099CD9] mb-2">MURAL DOS DETETIVES</h3>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {leaderboard.map((player, index) => {
                  const isCurrentUser = player.name === username;
                  return (
                    <div key={index} className={`flex justify-between items-center p-2 rounded ${
                      isCurrentUser ? 'bg-[#099CD9]/20' : ''
                    }`}>
                      <span className={`font-semibold ${isCurrentUser ? 'text-[#099CD9]' : 'text-gray-800'}`}>
                        #{index + 1} {player.name}
                        {isCurrentUser && <span className="text-xs bg-[#099CD9] text-white px-1 py-0.5 rounded ml-2">Você</span>}
                      </span>
                      <span className="font-bold text-[#099CD9]">{player.score} pts</span>
                    </div>
                  );
                })}
                {leaderboard.length === 0 && (
                  <p className="text-gray-600 text-center">Nenhum jogador ainda!</p>
                )}
              </div>
            </div>
            
            <button
              onClick={() => setShowFinalResults(true)}
              className="w-full bg-[#2256BB] text-white py-3 rounded-lg font-semibold hover:bg-[#1d4daa] transition-all duration-200"
            >
              Ver Acertos
            </button>
            
            <button
              onClick={resetGame}
              className="w-full bg-[#332575] text-white py-3 rounded-lg font-semibold hover:bg-[#2a1f66] transition-all duration-200 mt-4"
            >
              Jogar Novamente
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="min-h-screen bg-[#332575] text-white p-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Trophy className="w-16 h-16 text-[#099CD9] mx-auto mb-4" />
              <h1 className="text-3xl font-bold mb-2">Seus Resultados</h1>
              <p className="text-xl text-[#099CD9]">Pontuação Total: {totalScore}</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 mb-8">
              {roundResults.map((round, index) => (
                <div key={index} className="mb-6 border-b border-gray-200 pb-6 last:border-b-0">
                  <h3 className="text-xl font-bold text-[#332575] mb-4">Round {round.round}</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    {round.images.map((image) => (
                      <div key={image.id} className="bg-gray-50 rounded-lg p-4">
                        <div className="relative mb-3 aspect-video overflow-hidden rounded">
                          <img 
                            src={image.url} 
                            alt={`Round ${round.round} - Image`}
                            className="w-full h-full object-cover"
                          />
                          <div className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                            image.is_correct ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                          }`}>
                            {image.is_correct ? '✓' : '✗'}
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-gray-800">
                            Sua escolha foi: {image.user_answer === 'ai' ? '🤖 É IA' : '👤 É Real'}
                          </p>
                          <p className={`text-sm mt-1 ${
                            image.is_ai ? 'text-red-600' : 'text-green-600'
                          }`}>
                            A foto é: {image.is_ai ? 'gerada por inteligência artificial' : 'real'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <span className={`font-bold px-4 py-2 rounded-full ${
                      round.score >= 40 ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                    }`}>
                      +{round.score} pontos
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <button
                onClick={resetGame}
                className="w-full bg-[#099CD9] text-white py-3 rounded-lg font-semibold hover:bg-[#088bc0] transition-all duration-200 flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Jogar Novamente
              </button>
            </div>
          </div>
        </div>
      );
    }
  }

  return null;
};

export default App;
