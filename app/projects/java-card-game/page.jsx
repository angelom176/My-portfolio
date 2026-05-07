"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import "./wildwest.css";

const suits = ["♥", "♦", "♣", "♠"];
const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function createDeck() {
  const deck = [];

  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push(`${rank}${suit}`);
    }
  }

  return deck;
}

function shuffleDeck(deck) {
  const shuffled = [...deck];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function dealCard(deck) {
  const newDeck = [...deck];
  const card = newDeck.shift();

  return { card, newDeck };
}

function calculateHandValue(hand) {
  let value = 0;
  let aceCount = 0;

  for (const card of hand) {
    const rank = card.slice(0, -1);

    if (["J", "Q", "K"].includes(rank)) {
      value += 10;
    } else if (rank === "A") {
      value += 11;
      aceCount++;
    } else {
      value += Number(rank);
    }
  }

  while (value > 21 && aceCount > 0) {
    value -= 10;
    aceCount--;
  }

  return value;
}

function select21Cards(fullDeck) {
  return shuffleDeck(fullDeck).slice(0, 21);
}

function splitIntoRows(deck) {
  const row1 = [];
  const row2 = [];
  const row3 = [];

  deck.forEach((card, index) => {
    if (index % 3 === 0) row1.push(card);
    else if (index % 3 === 1) row2.push(card);
    else row3.push(card);
  });

  return [row1, row2, row3];
}

function reorganizeDeck(rows, chosenRow) {
  const [row1, row2, row3] = rows;

  if (chosenRow === 1) return [...row2, ...row1, ...row3];
  if (chosenRow === 2) return [...row1, ...row2, ...row3];

  return [...row1, ...row3, ...row2];
}

export default function WildWestGamePage() {
  const [screen, setScreen] = useState("menu");

  const [chips, setChips] = useState(1000);
  const [betInput, setBetInput] = useState(100);
  const [currentBet, setCurrentBet] = useState(0);
  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [message, setMessage] = useState("Welcome, stranger. Choose an option.");
  const [roundActive, setRoundActive] = useState(false);
  const [dealerRevealed, setDealerRevealed] = useState(false);

  const [trickDeck, setTrickDeck] = useState([]);
  const [trickRound, setTrickRound] = useState(1);
  const [trickFinished, setTrickFinished] = useState(false);
  const [secretCard, setSecretCard] = useState("");

  const playerScore = useMemo(() => calculateHandValue(playerHand), [playerHand]);
  const dealerScore = useMemo(() => calculateHandValue(dealerHand), [dealerHand]);

  function goToMenu() {
    setScreen("menu");
    setMessage("Welcome, stranger. Choose an option.");
  }

  function startBlackjackScreen() {
    setScreen("blackjack");
    setMessage("Place your bet and start a new round.");
  }

  function startNewRound() {
    const bet = Number(betInput);

    if (!Number.isInteger(bet) || bet <= 0) {
      setMessage("Invalid bet. Enter a whole number greater than zero.");
      return;
    }

    if (bet > chips) {
      setMessage("You cannot bet more than your current chip balance.");
      return;
    }

    let newDeck = shuffleDeck(createDeck());

    const playerCard1 = dealCard(newDeck);
    newDeck = playerCard1.newDeck;

    const playerCard2 = dealCard(newDeck);
    newDeck = playerCard2.newDeck;

    const dealerCard1 = dealCard(newDeck);
    newDeck = dealerCard1.newDeck;

    const dealerCard2 = dealCard(newDeck);
    newDeck = dealerCard2.newDeck;

    const newPlayerHand = [playerCard1.card, playerCard2.card];
    const newDealerHand = [dealerCard1.card, dealerCard2.card];

    setDeck(newDeck);
    setPlayerHand(newPlayerHand);
    setDealerHand(newDealerHand);
    setCurrentBet(bet);
    setRoundActive(true);
    setDealerRevealed(false);

    if (calculateHandValue(newPlayerHand) === 21) {
      setMessage("Blackjack! Press Stand to reveal the dealer's cards.");
    } else {
      setMessage("Round started. Hit or stand?");
    }
  }

  function hit() {
    if (!roundActive) return;

    const result = dealCard(deck);
    const newPlayerHand = [...playerHand, result.card];
    const newScore = calculateHandValue(newPlayerHand);

    setDeck(result.newDeck);
    setPlayerHand(newPlayerHand);

    if (newScore > 21) {
      setChips((previousChips) => previousChips - currentBet);
      setRoundActive(false);
      setDealerRevealed(true);
      setMessage(`Bust! You scored ${newScore}. You lose ${currentBet} chips.`);
    } else if (newScore === 21) {
      setMessage("You hit 21. Stand to finish the round.");
    } else {
      setMessage("You drew a card. Hit or stand?");
    }
  }

  function stand() {
    if (!roundActive) return;

    let newDeck = [...deck];
    let newDealerHand = [...dealerHand];
    let newDealerScore = calculateHandValue(newDealerHand);

    while (newDealerScore < 17) {
      const result = dealCard(newDeck);
      newDeck = result.newDeck;
      newDealerHand = [...newDealerHand, result.card];
      newDealerScore = calculateHandValue(newDealerHand);
    }

    const finalPlayerScore = calculateHandValue(playerHand);
    let finalMessage = "";

    if (newDealerScore > 21 || finalPlayerScore > newDealerScore) {
      setChips((previousChips) => previousChips + currentBet);
      finalMessage = `You win! Player ${finalPlayerScore} vs Dealer ${newDealerScore}. You gain ${currentBet} chips.`;
    } else if (finalPlayerScore === newDealerScore) {
      finalMessage = `Tie! Player ${finalPlayerScore} vs Dealer ${newDealerScore}. Your bet is returned.`;
    } else {
      setChips((previousChips) => previousChips - currentBet);
      finalMessage = `Dealer wins. Player ${finalPlayerScore} vs Dealer ${newDealerScore}. You lose ${currentBet} chips.`;
    }

    setDeck(newDeck);
    setDealerHand(newDealerHand);
    setRoundActive(false);
    setDealerRevealed(true);
    setMessage(finalMessage);
  }

  function resetBlackjack() {
    setChips(1000);
    setBetInput(100);
    setCurrentBet(0);
    setDeck([]);
    setPlayerHand([]);
    setDealerHand([]);
    setRoundActive(false);
    setDealerRevealed(false);
    setMessage("Game reset. Place your bet and start a new round.");
  }

  function startCardTrick() {
    const selectedCards = select21Cards(createDeck());

    setTrickDeck(selectedCards);
    setTrickRound(1);
    setTrickFinished(false);
    setSecretCard("");
    setScreen("cardTrick");
    setMessage("Hello stranger! Choose one card in your mind. Remember which row it is in.");
  }

  function chooseTrickRow(rowNumber) {
    const rows = splitIntoRows(trickDeck);
    const newDeck = reorganizeDeck(rows, rowNumber);

    if (trickRound === 3) {
      setTrickDeck(newDeck);
      setSecretCard(newDeck[10]);
      setTrickFinished(true);
      setMessage("Amazing *_* I found your card!");
      return;
    }

    setTrickDeck(newDeck);
    setTrickRound((previousRound) => previousRound + 1);
    setMessage(`Good. Round ${trickRound + 1}: which row is your card in now?`);
  }

  const visibleDealerHand = dealerRevealed
    ? dealerHand.join(" ")
    : dealerHand.length > 0
      ? `${dealerHand[0]} ??`
      : "No cards yet";

  const visibleDealerScore = dealerRevealed
    ? dealerScore
    : dealerHand.length > 0
      ? calculateHandValue([dealerHand[0]])
      : 0;

  const trickRows = splitIntoRows(trickDeck);

  return (
    <main className="wildwest-page">
      <section className="wildwest-container">
        <Link href="/projects" className="wildwest-back">
          ← Back to projects
        </Link>

        <div className="wildwest-header">
          <p>Java Project Remade in React</p>
          <h1>Wild West Gunslinger BJ</h1>
          <span>A browser version of my original Java terminal blackjack game.</span>
        </div>

        {screen === "menu" && (
          <div className="wildwest-screen">
            <pre className="wildwest-terminal">
{`________________________________
||                            ||
||                            ||   __|___|__
||                            ||    ('o_o')
||   Wild West Gunslinger BJ  ||    _\\~-~/_    ______.
||                            ||   //\\__/\\ \\ ~(_]---'
||                            ||  / )O  O( .\\/_)\\
||       1. New Game          ||   \\    / \\_/
||       2. Settings          ||  )/_|  |_\\
||       3. Exit              || // /(\\/)\\ \\
||                            || /_/      \\_\\
||       4. Card Trick ;D     ||(_||      ||_)
||                            ||  \\| |__| |/
||                            ||   | |  | |
||                            ||   |_|  |_|
||                            ||   /_\\  /_\\
||____________________________||

${message}`}
            </pre>

            <div className="wildwest-actions">
              <button className="wildwest-btn wildwest-btn-primary" onClick={startBlackjackScreen}>
                1. New Game
              </button>

              <button className="wildwest-btn" onClick={() => setMessage("Settings menu is under construction...")}>
                2. Settings
              </button>

              <button
                className="wildwest-btn"
                onClick={() => setMessage("Exiting the game. Thanks for playing! Just close this page, partner.")}
              >
                3. Exit
              </button>

              <button className="wildwest-btn wildwest-btn-green" onClick={startCardTrick}>
                4. Easter Egg
              </button>
            </div>
          </div>
        )}

        {screen === "blackjack" && (
          <div className="wildwest-screen">
            <pre className="wildwest-terminal">
{`________________________________
||   Wild West Blackjack       ||
||____________________________||

Chips: ${chips}
Current bet: ${currentBet || "-"}

Player cards: ${playerHand.length ? playerHand.join(" ") : "No cards yet"}
Player score: ${playerScore}

Dealer cards: ${visibleDealerHand}
Dealer score: ${visibleDealerScore}

Message:
${message}`}
            </pre>

            <div className="wildwest-control-panel">
              <label className="wildwest-label">
                <span>Bet amount</span>
                <input
                  type="number"
                  min="1"
                  value={betInput}
                  disabled={roundActive || chips <= 0}
                  onChange={(event) => setBetInput(event.target.value)}
                />
              </label>

              <div className="wildwest-actions">
                <button
                  className="wildwest-btn wildwest-btn-primary"
                  onClick={startNewRound}
                  disabled={roundActive || chips <= 0}
                >
                  New Round
                </button>

                <button className="wildwest-btn" onClick={hit} disabled={!roundActive}>
                  Hit
                </button>

                <button className="wildwest-btn" onClick={stand} disabled={!roundActive}>
                  Stand
                </button>

                <button className="wildwest-btn wildwest-btn-danger" onClick={resetBlackjack}>
                  Reset
                </button>

                <button className="wildwest-btn" onClick={goToMenu}>
                  Menu
                </button>
              </div>
            </div>

            {chips <= 0 && (
              <p className="wildwest-warning">You're out of chips! Press Reset to play again.</p>
            )}
          </div>
        )}

        {screen === "cardTrick" && (
          <div className="wildwest-screen wildwest-screen-wide">
            <pre className="wildwest-terminal">
{`________________________________
||   Easter Egg: Card Trick    ||
||____________________________||

Choose one card in your mind.
Do not click the card itself.
Only tell me which row your card is in.

Round: ${trickFinished ? "Finished" : trickRound + " / 3"}

${message}

${trickFinished ? `-------- Your card is: ${secretCard} --------\nAmazing *_*` : ""}`}
            </pre>

            {!trickFinished && (
              <div className="wildwest-rows">
                {trickRows.map((row, index) => (
                  <button
                    key={index}
                    className="wildwest-row-card"
                    onClick={() => chooseTrickRow(index + 1)}
                  >
                    <h2>Row {index + 1}</h2>
                    <p>{row.join("  ")}</p>
                  </button>
                ))}
              </div>
            )}

            <div className="wildwest-actions">
              <button className="wildwest-btn wildwest-btn-green" onClick={startCardTrick}>
                Restart Trick
              </button>

              <button className="wildwest-btn" onClick={goToMenu}>
                Menu
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}