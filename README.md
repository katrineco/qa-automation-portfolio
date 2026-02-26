# QA Automation Portfolio – Product-Oriented E2E Testing

## Overview

This repository contains end-to-end (E2E) automation tests built with Cypress and designed using a product-oriented, risk-based testing approach.

The purpose of this project is not to demonstrate basic Cypress usage, but to showcase structured automation aligned with real business impact, user behavior, and revenue-sensitive flows.

The automation coverage focuses on validating critical conversion paths of publicly accessible e-commerce websites.

---

## Test Architecture

This project follows a risk-based automation architecture designed
to reflect real-world product quality ownership.

Tests are organized by business impact rather than technical layer:

- **Smoke Tests** → validate application availability
- **Revenue-Critical Tests** → protect checkout and monetization flows
- **Resilience Tests** → validate behavior under dependency failures

This structure enables:
- risk-driven regression execution
- prioritized CI execution
- release gating decisions

---

## Product-Driven Testing Philosophy

This project prioritizes:

- High-impact user journeys
- Revenue-sensitive flows
- Navigation integrity
- Conversion entry points
- DOM stability for critical components

Instead of exhaustive UI checks, automation coverage is intentionally risk-based and business-aligned.

---

## Business Context

The tested environments simulate direct-to-consumer e-commerce scenarios where:

- Homepage = entry point & brand positioning
- Navigation = product discovery
- Product pages = conversion drivers
- CTA interactions = revenue signals

Automation ensures that core business flows remain functional and stable across UI changes.

---

## Automation Scope

### In Scope

- Homepage load validation
- Navigation flow verification
- Category rendering validation
- Product detail page validation
- CTA visibility and interaction
- URL transition validation
- DOM consistency checks for key elements

### Out of Scope

- Payment processing
- Backend validation
- Load or performance testing
- Visual regression testing
- Database verification

This separation reflects intentional, production-aware test design.

---

## Project Structure

cypress/
  e2e/
    ecommerce/
      conversion-flow/
      resilience/

Tests are organized by business domain rather than by technical type, reflecting real-world scalable automation architecture.

---

## Technical Stack

- Cypress
- JavaScript (ES6+)
- Node.js
- npm

---

## How to Run

Install dependencies:

npm install

Open Cypress Test Runner:

npx cypress open

Run in headless mode:

npx cypress run

---

## Disclaimer

All automated tests included in this repository were developed strictly for educational and portfolio purposes.

Some tests may interact with publicly accessible websites. There is no affiliation, partnership, or commercial relationship with the brands referenced.

No data is collected, stored, modified, or misused.

Automation focuses solely on UI behavior validation and user flow integrity.

---

## Author

Katrine Camarini Oyakawa  
QA Automation Engineer – Product & Risk-Oriented  
Brazil
