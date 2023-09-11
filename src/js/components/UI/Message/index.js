import React from 'react';

export default () => {
  const motivationalMessages = [
    "Believe in Yourself!",
    "Stay Positive!",
    "You Got This!",
    "Dream Big!",
    "Never Give Up!",
    "Keep Pushing!",
    "Stay Strong!",
    "Chase Your Dreams!",
    "Stay Motivated!",
    "Success is Yours!"
  ];

  const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];

  return (
    <div className="credits">
      {randomMessage}
      <div className="sub-message">from your friend Oscar</div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@300&display=swap');

        .credits {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          z-index: 10;
          color: white;
          font-family: 'Cormorant Garamond', serif;
          font-size: 6rem;
          text-align: center;
          font-weight: 300;
          font-style: italic;
          letter-spacing: -0.02em;
          opacity: 0.5;
          transition: all 0.6s;
        }

        .sub-message {
          font-size: 1.5rem;
          margin-top: 0px;
        }

        .credits:hover {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .credits {
            font-size: 4rem;
          }
        }
      `}</style>
    </div>
  )
}
