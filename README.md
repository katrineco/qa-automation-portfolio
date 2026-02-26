# QA Automation Portfolio — Product-Oriented E2E Testing

This repository demonstrates a product-oriented QA approach using Cypress.

Instead of organizing tests purely by feature, the structure reflects business risk and revenue impact — prioritizing what matters most for the product.

---

## Testing Philosophy

The goal is not to automate everything.

The goal is to automate what reduces business risk.

Tests are organized based on:

- Revenue impact
- Critical user journeys
- Flow integrity
- Failure prevention

This mirrors how QA operates in real product environments.

---

## Project Structure

cypress/
└── e2e/
    ├── revenue-critical/
    ├── smoke/
    └── resilience/

### revenue-critical
Tests that protect revenue-generating flows.

Examples:
- Checkout funnel
- Cart price integrity
- Checkout validation

### smoke
Fast validations to ensure the application is functional after deployments.

### resilience
Tests focused on handling unexpected behaviors and preventing system breakdowns.

---

## Architecture

This project follows:

- Page Object Model (POM)
- Separation between test logic and selectors
- Business-oriented naming conventions
- Stable selectors using data-test attributes

---

## Execution Evidence

### TC-001 — Checkout Flow Completion

Validates that users can progress from cart to checkout without blockers.

(Test execution screenshots can be added inside `/docs/images`)

---

## How to Run Locally

Install dependencies:

npm install

Open Cypress UI:

npx cypress open

Run tests in headless mode:

npx cypress run

---

## Why This Structure?

This project reflects a QA mindset aligned with Product Strategy.

Rather than focusing on test quantity, it prioritizes:

- Risk mitigation
- Business continuity
- Critical flow validation
- Sustainable automation

---

## Author

Katrine Camarini Oyakawa  
QA Automation Engineer — Product & Risk-Oriented  
Brazil