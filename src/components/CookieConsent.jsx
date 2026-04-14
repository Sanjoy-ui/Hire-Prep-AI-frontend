import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleChoice = (choice) => {
    // Store the choice: 'accepted' or 'rejected'
    localStorage.setItem("cookieConsent", choice);
    setIsVisible(false);

    if (choice === "accepted") {
      console.log("Enable tracking scripts (GA, Facebook Pixel, etc.)");
      // initializeAnalytics(); 
    } else {
      console.log("Disable/Don't load tracking scripts");
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-10 md:w-96 bg-white shadow-2xl rounded-2xl p-6 border border-gray-100 z-50 animate-bounce-in">
      <div className="flex items-start gap-4">
        <div className="text-3xl">🍪</div>
        <div>
          <h3 className="text-lg font-bold text-gray-800">Cookie Policy</h3>
          <p className="text-sm text-gray-600 mt-1">
            We use cookies to enhance your experience. By clicking "Accept", you agree to our use of cookies.
          </p>
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={() => handleChoice("accepted")}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2.5 rounded-lg transition-colors"
        >
          Accept All
        </button>
        <button
          onClick={() => handleChoice("rejected")}
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-bold py-2.5 rounded-lg transition-colors"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;