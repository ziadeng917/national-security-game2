// Game State
let gameState = {
    playerName: 'Michael Reynolds',
    oracleTrust: 50, // Trust level with Oracle (0-100)
    currentScene: 'intro',
    inventory: [],
};

// Quiz Data
const quizQuestions = [
    {
        question: '1. Application of AI in physical wars includes:',
        options: [
            'A) Autonomous drones and precision weapons',
            'B) Detecting cyber threats',
            'C) AI-enhanced surveillance',
        ],
        answer: 0,
    },
    {
        question: '2. Application of AI in digital wars includes:',
        options: [
            'A) Supporting logistics and medical evacuation',
            'B) Detecting and countering cyber threats',
            'C) Guiding precision weapons',
        ],
        answer: 1,
    },
    {
        question: '3. What are ethical and legal issues raised by AI in military and national security?',
        options: [
            'A) Improved targeting accuracy',
            'B) Accountability for AI-caused harm',
            'C) Enhanced battlefield support',
        ],
        answer: 1,
    },
    {
        question: '4. What is meant by "Bias based on algorithms" in AI?',
        options: [
            'A) AI algorithms being completely neutral',
            'B) AI perpetuating biases leading to unfair treatment',
            'C) AI improving facial recognition accuracy',
        ],
        answer: 1,
    },
    {
        question: '5. What is a potential risk of over-reliance on AI?',
        options: [
            'A) Increased human oversight',
            'B) Reduced human judgment in critical situations',
            'C) Enhanced ethical decision-making',
        ],
        answer: 1,
    },
    {
        question: '6. Which of the following is a solution to challenges posed by military AI?',
        options: [
            'A) Ignoring international regulations',
            'B) Implementing robust testing and validation',
            'C) Removing human oversight',
        ],
        answer: 1,
    },
    {
        question: '7. How has AI affected the new military and national security situation globally?',
        options: [
            'A) Decreased surveillance and control',
            'B) Technological arms race among nations',
            'C) Reduced asymmetric warfare capabilities',
        ],
        answer: 1,
    },
    {
        question: '8. Which country heavily invests in AI for surveillance and unmanned vehicles?',
        options: [
            'A) United States',
            'B) Russia',
            'C) China',
        ],
        answer: 2,
    },
    {
        question: '9. What is the focus of the Five Eyes Alliance regarding AI?',
        options: [
            'A) Developing AI guidelines for defense',
            'B) Sharing AI intelligence and cybersecurity capabilities',
            'C) Countering regional threats with AI-driven defense',
        ],
        answer: 1,
    },
    {
        question: '10. What is the current international policy on AI’s application in military and national security?',
        options: [
            'A) Comprehensive binding international treaty exists',
            'B) No comprehensive binding international treaty yet',
            'C) AI is banned in military use',
        ],
        answer: 1,
    },
];

// Initialize Game
window.onload = function() {
    startGame();
};

function startGame() {
    showIntro();
}

// Scenes
function showIntro() {
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h1>Operation Silent Guardian</h1>
        <p>The year is 2035. In an age where technology evolves faster than ever, the lines between physical and digital threats have blurred. The United States faces unprecedented challenges from adversaries who wield cyber weapons capable of crippling nations without firing a single shot.</p>
        <p>You are Agent Michael Reynolds, a seasoned operative in the CIA's clandestine service. Handpicked for your expertise in cyber-operations and fieldwork, you've been assigned to a new initiative that merges human intelligence with cutting-edge artificial intelligence.</p>
        <p>Inside the fortified walls of Langley, the CIA has developed "Oracle", an advanced AI system designed to predict and neutralize threats to national security. Oracle can sift through terabytes of data in seconds, identifying patterns and connections that no human could see.</p>
        <button onclick="syncWithOracle()">Sync with Oracle</button>
    `;
}

function syncWithOracle() {
    gameState.currentScene = 'syncWithOracle';
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Syncing with Oracle</h2>
        <p>As you sit in a dimly lit operations center, surrounded by flickering screens and the hum of servers, you sync with Oracle for the first time. Streams of data cascade before your eyes—satellite images, intercepted communications, financial transactions. The AI begins to highlight anomalies and potential leads.</p>
        <button onclick="firstDecision()">Continue</button>
    `;
}

function firstDecision() {
    gameState.currentScene = 'firstDecision';
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>First Decision</h2>
        <p>Oracle suggests an immediate cyber-offensive against Black Dawn's network. Do you proceed?</p>
        <button onclick="trustOracle()">Trust Oracle</button>
        <button onclick="trustInstincts()">Trust Your Instincts</button>
    `;
}

// Decision Outcomes
function trustOracle() {
    gameState.oracleTrust += 10;
    gameState.currentScene = 'trustOracle';
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Offensive Launched</h2>
        <p>You proceed with Oracle's plan. The cyber-offensive disrupts several of Black Dawn's communication channels, but you notice some unexpected system anomalies.</p>
        <button onclick="quizQuestion(1)">Next</button>
    `;
}

function trustInstincts() {
    gameState.oracleTrust -= 10;
    gameState.currentScene = 'trustInstincts';
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Gathering Intel</h2>
        <p>You decide to gather more intelligence before acting. This cautious approach uncovers hidden layers of Black Dawn's operations, but they advance their plans meanwhile.</p>
        <button onclick="quizQuestion(1)">Next</button>
    `;
}

// Quiz Function
function quizQuestion(index) {
    const container = document.getElementById('game-container');
    const q = quizQuestions[index - 1];
    container.innerHTML = `
        <h2>Quiz Question ${index}</h2>
        <p>${q.question}</p>
        ${q.options.map((option, i) => `
            <button onclick="checkAnswer(${index}, ${i})">${option}</button>
        `).join('')}
    `;
}

function checkAnswer(questionIndex, selectedOption) {
    const q = quizQuestions[questionIndex - 1];
    const container = document.getElementById('game-container');
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    if (selectedOption === q.answer) {
        gameState.oracleTrust += 5;
        modalOverlay.innerHTML = `
            <div class="modal-content">
                <p>Correct answer! Trust with Oracle increased.</p>
                <button onclick="closeModalAndProceed(${questionIndex})">Continue</button>
            </div>
        `;
    } else {
        gameState.oracleTrust -= 5;
        modalOverlay.innerHTML = `
            <div class="modal-content">
                <p>Incorrect answer. Trust with Oracle decreased.</p>
                <button onclick="closeModalAndProceed(${questionIndex})">Continue</button>
            </div>
        `;
    }
    document.body.appendChild(modalOverlay);
}

// Add this new helper function
function closeModalAndProceed(questionIndex) {
    const modalOverlay = document.querySelector('.modal-overlay');
    modalOverlay.remove();
    proceedAfterQuiz(questionIndex);
}

function proceedAfterQuiz(questionIndex) {
    // Decide where to go next based on current scene and question index
    if (questionIndex < quizQuestions.length) {
        // Proceed to next decision or scene
        switch (questionIndex) {
            case 1:
                secondDecision();
                break;
            case 2:
                thirdDecision();
                break;
            case 3:
                biasScenario();
                break;
            case 4:
                ethicalDecision();
                break;
            case 5:
                overRelianceScenario();
                break;
            case 6:
                internationalPolicyScene();
                break;
            case 7:
                allianceScene();
                break;
            case 8:
                majorPlayersScene();
                break;
            case 9:
                finalDecision();
                break;
            case 10:
                checkEnding();
                break;
            default:
                checkEnding();
                break;
        }
    } else {
        checkEnding();
    }
}

// Next Scenes and Decisions
function secondDecision() {
    gameState.currentScene = 'secondDecision';
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Second Decision</h2>
        <p>Black Dawn is planning to attack critical infrastructure. Do you focus on protecting power grids or communication networks?</p>
        <button onclick="protectPowerGrids()">Protect Power Grids</button>
        <button onclick="protectCommunication()">Protect Communication Networks</button>
    `;
}

function protectPowerGrids() {
    gameState.currentScene = 'protectPowerGrids';
    // Adjust game state or inventory as needed
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Power Grids Secured</h2>
        <p>You allocate resources to secure the power grids. This prevents widespread blackouts, but communication networks remain vulnerable.</p>
        <button onclick="quizQuestion(2)">Next</button>
    `;
}

function protectCommunication() {
    gameState.currentScene = 'protectCommunication';
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Communication Networks Secured</h2>
        <p>You focus on safeguarding communication channels. This maintains critical lines of communication, but power grids suffer minor disruptions.</p>
        <button onclick="quizQuestion(2)">Next</button>
    `;
}

function thirdDecision() {
    gameState.currentScene = 'thirdDecision';
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>International Cooperation</h2>
        <p>NATO offers support through AI strategies for joint defense initiatives. Do you collaborate with them or proceed independently?</p>
        <button onclick="collaborateWithNATO()">Collaborate with NATO</button>
        <button onclick="proceedIndependently()">Proceed Independently</button>
    `;
}

function collaborateWithNATO() {
    gameState.oracleTrust += 5;
    gameState.currentScene = 'collaborateWithNATO';
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Alliance Formed</h2>
        <p>By collaborating with NATO, you gain access to additional resources and intelligence.</p>
        <button onclick="quizQuestion(3)">Next</button>
    `;
}

function proceedIndependently() {
    gameState.oracleTrust -= 5;
    gameState.currentScene = 'proceedIndependently';
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Going Solo</h2>
        <p>You decide to proceed without NATO's assistance, maintaining operational control but with limited resources.</p>
        <button onclick="quizQuestion(3)">Next</button>
    `;
}

// Bias Scenario
function biasScenario() {
    gameState.currentScene = 'biasScenario';
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Algorithmic Bias Detected</h2>
        <p>Oracle incorrectly profiles a group based on flawed data. Do you override Oracle's decision?</p>
        <button onclick="overrideDecision()">Override Oracle</button>
        <button onclick="acceptDecision()">Accept Oracle's Decision</button>
    `;
}

function overrideDecision() {
    gameState.oracleTrust -= 5;
    // Positive outcome
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Decision Overridden</h2>
        <p>You override Oracle's recommendation, preventing potential injustice. Trust with Oracle slightly decreases.</p>
        <button onclick="quizQuestion(4)">Next</button>
    `;
}

function acceptDecision() {
    gameState.oracleTrust += 5;
    // Negative outcome
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Decision Accepted</h2>
        <p>You accept Oracle's recommendation. Later, it's revealed that the group was innocent, causing a public relations issue.</p>
        <button onclick="quizQuestion(4)">Next</button>
    `;
}

// Ethical Decision
function ethicalDecision() {
    gameState.currentScene = 'ethicalDecision';
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Ethical Dilemma</h2>
        <p>Oracle suggests deploying mass surveillance to track suspects, potentially infringing on privacy rights. Do you authorize this action?</p>
        <button onclick="authorizeSurveillance()">Authorize Surveillance</button>
        <button onclick="declineSurveillance()">Decline Surveillance</button>
    `;
}

function authorizeSurveillance() {
    gameState.oracleTrust += 10;
    // Potential negative impact on public perception
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Surveillance Deployed</h2>
        <p>You authorize the surveillance. Oracle efficiently tracks suspects, but public outcry ensues over privacy violations.</p>
        <button onclick="quizQuestion(5)">Next</button>
    `;
}

function declineSurveillance() {
    gameState.oracleTrust -= 10;
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Surveillance Declined</h2>
        <p>You decide against mass surveillance. The suspects are harder to track, but privacy rights are upheld.</p>
        <button onclick="quizQuestion(5)">Next</button>
    `;
}

// Over-Reliance Scenario
function overRelianceScenario() {
    if (gameState.oracleTrust >= 80) {
        const container = document.getElementById('game-container');
        container.innerHTML = `
            <h2>Over-Reliance Consequences</h2>
            <p>Your complete trust in Oracle leads you into a trap set by Black Dawn, exploiting predictable AI patterns. Do you reassess your strategy?</p>
            <button onclick="reassessStrategy()">Reassess Strategy</button>
            <button onclick="continueWithOracle()">Continue with Oracle</button>
        `;
    } else {
        // Continue as normal
        internationalPolicyScene();
    }
}

function reassessStrategy() {
    gameState.oracleTrust -= 10;
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Strategy Reassessed</h2>
        <p>You decide to balance Oracle's recommendations with human judgment, avoiding further traps.</p>
        <button onclick="quizQuestion(6)">Next</button>
    `;
}

function continueWithOracle() {
    gameState.oracleTrust += 5;
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Full Steam Ahead</h2>
        <p>You continue relying on Oracle. While efficient, this leads to further exploitation by Black Dawn.</p>
        <button onclick="quizQuestion(6)">Next</button>
    `;
}

// International Policy Scene
function internationalPolicyScene() {
    gameState.currentScene = 'internationalPolicyScene';
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>International Policy</h2>
        <p>You are asked to participate in a UN meeting to discuss international laws on AI's military use. Do you advocate for strict regulations or flexible guidelines?</p>
        <button onclick="advocateStrict()">Advocate for Strict Regulations</button>
        <button onclick="advocateFlexible()">Advocate for Flexible Guidelines</button>
    `;
}

function advocateStrict() {
    gameState.oracleTrust -= 5;
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Strict Regulations Advocated</h2>
        <p>Your stance for strict regulations gains support but may limit future AI advancements.</p>
        <button onclick="quizQuestion(7)">Next</button>
    `;
}

function advocateFlexible() {
    gameState.oracleTrust += 5;
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Flexible Guidelines Advocated</h2>
        <p>Your advocacy for flexible guidelines encourages innovation but raises ethical concerns.</p>
        <button onclick="quizQuestion(7)">Next</button>
    `;
}

// Alliance Scene
function allianceScene() {
    gameState.currentScene = 'allianceScene';
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Forming Alliances</h2>
        <p>You consider forming alliances with other nations to enhance AI capabilities. Do you focus on collaborating with the Five Eyes Alliance or seek new partnerships?</p>
        <button onclick="joinFiveEyes()">Join Five Eyes Alliance</button>
        <button onclick="seekNewPartnerships()">Seek New Partnerships</button>
    `;
}

function joinFiveEyes() {
    gameState.oracleTrust += 5;
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Joined Five Eyes Alliance</h2>
        <p>You strengthen ties with the Five Eyes Alliance, enhancing intelligence sharing and cybersecurity capabilities.</p>
        <button onclick="quizQuestion(8)">Next</button>
    `;
}

function seekNewPartnerships() {
    gameState.oracleTrust -= 5;
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>New Partnerships Formed</h2>
        <p>You establish new alliances, but this strains relationships with traditional allies.</p>
        <button onclick="quizQuestion(8)">Next</button>
    `;
}

// Major Players Scene
function majorPlayersScene() {
    gameState.currentScene = 'majorPlayersScene';
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Global AI Landscape</h2>
        <p>Intelligence reports indicate increased AI military activity from other nations. Do you allocate resources to monitor China or Russia more closely?</p>
        <button onclick="monitorChina()">Monitor China</button>
        <button onclick="monitorRussia()">Monitor Russia</button>
    `;
}

function monitorChina() {
    gameState.oracleTrust += 5;
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Monitoring China</h2>
        <p>You focus on China's AI developments in surveillance and unmanned vehicles, gaining valuable insights.</p>
        <button onclick="quizQuestion(9)">Next</button>
    `;
}

function monitorRussia() {
    gameState.oracleTrust += 5;
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Monitoring Russia</h2>
        <p>You keep a close eye on Russia's focus on cyber warfare and hybrid tactics, uncovering potential threats.</p>
        <button onclick="quizQuestion(9)">Next</button>
    `;
}

// Final Decision
function finalDecision() {
    gameState.currentScene = 'finalDecision';
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>The Final Move</h2>
        <p>With all the gathered intelligence, you are ready to make the final move against Black Dawn. Do you launch a coordinated cyber-physical strike or attempt diplomatic negotiations?</p>
        <button onclick="launchStrike()">Launch Strike</button>
        <button onclick="attemptDiplomacy()">Attempt Diplomacy</button>
    `;
}

function launchStrike() {
    gameState.oracleTrust += 5;
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Strike Launched</h2>
        <p>You initiate a coordinated strike, crippling Black Dawn's capabilities.</p>
        <button onclick="quizQuestion(10)">Next</button>
    `;
}

function attemptDiplomacy() {
    gameState.oracleTrust -= 5;
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Diplomatic Efforts</h2>
        <p>You attempt to negotiate with Black Dawn, but they exploit the time to fortify their defenses.</p>
        <button onclick="quizQuestion(10)">Next</button>
    `;
}

// Ending Functions
function checkEnding() {
    if (gameState.oracleTrust >= 70) {
        endingGood();
    } else if (gameState.oracleTrust >= 40) {
        endingNeutral();
    } else {
        endingBad();
    }
}

function endingGood() {
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Mission Accomplished</h2>
        <p>With a high level of trust and effective collaboration with Oracle, you successfully thwart Black Dawn's attacks and set a positive precedent for AI-human cooperation in national security.</p>
        <button onclick="restartGame()">Play Again</button>
    `;
}

function endingNeutral() {
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Partial Success</h2>
        <p>You prevented some of the attacks, but the lack of full trust between you and Oracle led to missed opportunities. The nation remains vigilant against ongoing threats.</p>
        <button onclick="restartGame()">Play Again</button>
    `;
}

function endingBad() {
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Mission Failed</h2>
        <p>The mistrust and hesitation resulted in Black Dawn executing their plans. The aftermath raises serious questions about reliance on AI in military operations and the need for better human-AI synergy.</p>
        <button onclick="restartGame()">Play Again</button>
    `;
}

function restartGame() {
    gameState.oracleTrust = 50;
    gameState.currentScene = 'intro';
    startGame();
}
// ... existing code ...

function handleAnswer(button) {
    const questionContainer = button.closest('.question-container');
    const feedbackMessage = questionContainer.querySelector('.feedback-message');
    
    // 如果还没有反馈消息div，就创建一个
    if (!feedbackMessage) {
        const newFeedback = document.createElement('div');
        newFeedback.className = 'feedback-message';
        questionContainer.appendChild(newFeedback);
    }

    const feedback = feedbackMessage || questionContainer.querySelector('.feedback-message');
    
    if (button.dataset.correct === 'true') {
        feedback.textContent = "回答正确！";
        feedback.className = 'feedback-message feedback-correct feedback-visible';
        button.style.backgroundColor = '#4caf50';
        score++;
    } else {
        feedback.textContent = "回答错误，请重试。";
        feedback.className = 'feedback-message feedback-wrong feedback-visible';
        button.style.backgroundColor = '#f44336';
    }

    // 禁用所有按钮
    const buttons = questionContainer.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.disabled = true;
    });

    // 3秒后进入下一题
    setTimeout(() => {
        button.style.backgroundColor = '';
        feedback.className = 'feedback-message';
        showNextQuestion();
    }, 3000);
}