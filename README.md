1. Project Setup Steps

    Install Node.js (LTS version) from nodejs.org and verify:

bash
node -v
npm -v

Create a new React app:

bash
npx create-react-app my-app
cd my-app

Install React Router for navigation:

bash
npm install react-router-dom

Create the folder structure:

text
src/
├── components/
│   ├── HomeScreen.js
│   ├── LoanCalculator.js
│   ├── SipCalculator.js
│   ├── Navbar.js
│   ├── HomeScreen.css
│   ├── LoanCalculator.css
│   ├── SipCalculator.css
│   └── Navbar.css
├── App.js
└── index.js

Add code to index.js, App.js, and all component files.

Start the app:

bash
npm start


2. App Features
Home Screen

    App title: Loan & SIP Calculator

    Two navigation buttons:

        Loan Calculator

        SIP Calculator

    Clean, professional UI with gradient background and subtle matrix-style dots

    Common header (navigation bar) on all screens

Loan Calculator Screen

    Input fields:

        Loan Amount (₹)

        Interest Rate (% per annum)

        Loan Tenure (in years or months)

    Button: Calculate EMI

    Output:

        Monthly EMI

        Total Interest Payable

        Total Amount Payable

    Input validation (no empty or negative values)

    Responsive design for all screen sizes

SIP Calculator Screen

    Input fields:

        Monthly Investment Amount (₹)

        Expected Annual Return Rate (%)

        Investment Duration (years)

    Button: Calculate SIP

    Output:

        Total Invested Amount

        Estimated Returns

        Final Maturity Value

    Input validation

    Responsive design for all screen sizes

Navigation & Layout

    Stack / Tab-like navigation using React Router:

        Home → Loan Calculator

        Home → SIP Calculator

        Browser back/forward buttons work

    Common header (navigation bar) on all screens

    Consistent design:

        Clean color scheme (blue/green)

        Consistent spacing, typography, and button styles

        Responsive for mobile, tablet, and desktop

3. Screenshots (Description)
1. Home Screen

    Top navigation bar with app title “Loan & SIP Calculator” and links to Loan Calculator and SIP Calculator

    Centered large title: Loan & SIP Calculator

    Two big buttons below:

        Loan Calculator (blue button)

        SIP Calculator (green button)

    Background with a soft gradient and subtle matrix-style dots
    


2. Loan Calculator Screen

    Top navigation bar

    Card-style calculator in the center

    Three input fields:

        Loan Amount

        Interest Rate

        Loan Tenure (with dropdown: Years / Months)

    “Calculate EMI” button

    Results box below:

        Monthly EMI

        Total Interest Payable

        Total Amount Payable

3. SIP Calculator Screen

    Top navigation bar

    Card-style calculator in the center

    Three input fields:

        Monthly Investment Amount

        Expected Annual Return Rate

        Investment Duration (Years)

    “Calculate SIP” button

    Results box below:

        Total Invested Amount

        Estimated Returns

        Final Maturity Value
