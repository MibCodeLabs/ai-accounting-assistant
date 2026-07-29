# Diagram Semantic Model

## 1. System Purpose

AI-powered financial reporting system that allows users to request financial reports through a chat or dashboard interface. The system interprets user reporting requirements, determines the required financial workflow, retrieves financial data, performs calculations and validations, and generates a formatted financial report.

---

# 2. Components

## User
- Type:
  - External Actor

- Role:
  - Requests financial reports through chat or dashboard interface.
  - Receives generated reports.

---

## Next.js UI
- Type:
  - Frontend Component

- Role:
  - Provides report dashboard and chat interface.
  - Collects user report requests.
  - Sends report requests to backend.

- Inputs:
  - User report request.

- Outputs:
  - API request to FastAPI Backend.

---

## FastAPI Backend
- Type:
  - Backend Service

- Technology:
  - FastAPI

- Role:
  - Provides report API endpoint.
  - Receives requests from frontend.
  - Sends reporting requests to AI Agent.

---

## AI Agent
- Type:
  - Reasoning Component

- Technology:
  - LangGraph

- Role:
  - Understands report intent.
  - Determines required reporting workflow.
  - Coordinates report generation process.

Capabilities:
- Intent understanding
- Workflow coordination
- Report generation orchestration

---

## Report Decision Engine
- Type:
  - Decision Component

- Role:
  - Determines which financial report workflow should execute.

Decision Outputs:
- Balance Sheet Report
- Profit & Loss Report

---

## Balance Sheet Generator
- Type:
  - Financial Calculation Component

- Role:
  - Generates balance sheet calculations.

Operations:
- Equity Calculation
- Liabilities Calculation
- Assets Calculation

---

## Profit & Loss Generator
- Type:
  - Financial Calculation Component

- Role:
  - Generates profit and loss calculations.

Operations:
- Revenue Calculation
- Expense Calculation
- Net Profit Calculation

---

## Expense Analysis Engine
- Type:
  - Analytics Component

- Role:
  - Performs financial analysis on generated report data.

Operations:
- Category Summary
- Spending Trends
- Monthly Comparison

---

## Monthly Audit Engine
- Type:
  - Validation Component

- Role:
  - Validates financial records before final reporting.

Operations:
- Missing Data Check
- Duplicate Detection
- Unusual Transaction Detection

---

## PostgreSQL Database
- Type:
  - Database Component

- Role:
  - Stores financial records.
  - Provides financial data required for calculations and audits.

Operations:
- Query financial records
- Return transaction data

---

## Validation & Calculation Layer
- Type:
  - Processing Component

- Role:
  - Ensures generated financial results are accurate.
  - Applies accounting rules.
  - Prepares report-ready data.

Operations:
- Verify Calculations
- Apply Accounting Rules
- Format Report Data

---

## AI Response Formatter
- Type:
  - Output Generation Component

- Role:
  - Converts validated financial information into user-friendly output.

Outputs:
- Natural Language Explanation
- Charts
- Tables
- Recommendations

---

# 3. Relationships

| From | To | Interaction |
|---|---|---|
| User | Next.js UI | Requests financial report |
| Next.js UI | FastAPI Backend | Sends API request |
| FastAPI Backend | AI Agent | Sends user reporting request |
| AI Agent | Report Decision Engine | Provides report intent |
| Report Decision Engine | Balance Sheet Generator | Selects balance sheet workflow |
| Report Decision Engine | Profit & Loss Generator | Selects profit/loss workflow |
| Balance Sheet Generator | Expense Analysis Engine | Sends calculated financial information |
| Profit & Loss Generator | Expense Analysis Engine | Sends calculated financial information |
| Expense Analysis Engine | PostgreSQL Database | Requests financial records |
| PostgreSQL Database | Expense Analysis Engine | Returns financial data |
| Expense Analysis Engine | Monthly Audit Engine | Sends analyzed financial information |
| Monthly Audit Engine | PostgreSQL Database | Performs database query |
| PostgreSQL Database | Monthly Audit Engine | Returns financial records |
| Monthly Audit Engine | Validation & Calculation Layer | Sends audited information |
| Validation & Calculation Layer | AI Response Formatter | Sends validated report data |
| AI Response Formatter | User | Returns final financial report |

---

# 4. Workflow

1. User submits a financial report request through chat or dashboard.
2. Next.js UI captures the request.
3. Next.js UI sends an API request to FastAPI Backend.
4. FastAPI Backend forwards the request to AI Agent.
5. AI Agent understands the reporting intent.
6. Report Decision Engine determines the required report workflow.
7. Selected report generator performs financial calculations:
   - Balance Sheet Generator
   - Profit & Loss Generator
8. Expense Analysis Engine performs financial analysis.
9. Required financial records are retrieved from PostgreSQL Database.
10. Monthly Audit Engine validates financial information.
11. Validation & Calculation Layer verifies calculations and applies accounting rules.
12. AI Response Formatter creates the final report format.
13. User receives the completed financial report.

---

# 5. Data

## User Report Request

Source:
- User interaction

Format:
- Natural Language Request

Purpose:
- Defines required financial report.

---

## Report Intent Data

Managed By:
- AI Agent

Contains:
- Requested report type
- User reporting requirements
- Workflow selection information

---

## Financial Data

Storage:
- PostgreSQL Database

Contains:
- Transactions
- Revenue records
- Expense records
- Financial balances

Operations:
- Query records
- Return financial information

---

## Audited Financial Data

Generated By:
- Monthly Audit Engine

Contains:
- Validation results
- Missing data checks
- Duplicate detection results
- Transaction anomaly results

---

## Validated Report Data

Generated By:
- Validation & Calculation Layer

Contains:
- Verified calculations
- Accounting-rule compliant results
- Formatted report information

---

## Final Report

Generated By:
- AI Response Formatter

Output:
- Natural Language Explanation
- Charts
- Tables
- Recommendations

---

# 6. Rules / Constraints

- All report requests must enter through the Next.js UI.
- Backend communication is handled through FastAPI API endpoints.
- AI Agent determines the required reporting workflow.
- Report Decision Engine controls report generator selection.
- Financial calculations must use available PostgreSQL data.
- Audit validation must occur before final report generation.
- Validation and accounting rules must be applied before presenting results.
- AI Response Formatter only processes validated report data.
- Database access is performed through application components.

---

# 7. System Flow Summary

User

↓

Next.js UI

↓

FastAPI Backend

↓

AI Agent (LangGraph)

↓

Report Decision Engine

↓

Financial Report Generators

↓

Expense Analysis Engine

↓

Monthly Audit Engine

↓

PostgreSQL Database

↓

Validation & Calculation Layer

↓

AI Response Formatter

↓

Final Report