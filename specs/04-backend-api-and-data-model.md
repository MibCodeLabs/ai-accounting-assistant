# Backend API and Data Model Specification

## Document Information

| Field | Details |
|---|---|
| Project Name | AI-Powered Accounting Assistant |
| Document Type | Backend API and Data Model Specification |
| Methodology | Spec-Driven Development (SDD) |
| Version | 1.0 |
| Backend Framework | FastAPI |
| Database | PostgreSQL |
| Validation | Pydantic Models |

---

# 1. Introduction

## 1.1 Purpose

This document defines the backend architecture, API contracts, request/response models, database structure, and data relationships for the AI-Powered Accounting Assistant.

The purpose of this specification is to define backend behavior before implementation.

The backend acts as the communication layer between:

- Next.js frontend
- AI Agent Layer
- Accounting Tools
- PostgreSQL Database

---

# 2. Backend Architecture

## 2.1 Backend Responsibilities

The FastAPI backend is responsible for:

- Handling frontend API requests.
- Validating incoming data.
- Managing business logic.
- Communicating with AI services.
- Executing accounting tools.
- Managing database operations.
- Returning validated responses.
- Recording system activities.

---

# 3. Backend Request Flow

```
User
 |
 v
Next.js Frontend
 |
 v
FastAPI API
 |
 v
Request Validation
 |
 v
Business Logic Layer
 |
 +----------------+
 |                |
 v                v
AI Agent       Database
 |
 v
Accounting Tools
 |
 v
PostgreSQL
 |
 v
Response Validation
 |
 v
Frontend
```

---

# 4. API Design Principles

## 4.1 API Standards

The backend follows:

- REST API architecture.
- JSON request/response format.
- Pydantic validation.
- HTTP status code standards.
- Clear error responses.

---

# 5. API Endpoint Structure

Base URL:

```
/api/v1
```

---

# 6. Transaction APIs

# 6.1 Create Transaction

## Endpoint

```
POST /transactions
```

## Purpose

Creates a new income or expense transaction.

---

## Request Schema

```json
{
"type": "expense",
"description": "Office Rent",
"amount": 500,
"category": "Rent",
"transaction_date": "2026-07-01"
}
```

---

## Pydantic Model

```python
class TransactionCreate(BaseModel):

    type: str
    description: str
    amount: float
    category: str
    transaction_date: date
```

---

## Validation Rules

| Field | Rule |
|---|---|
| type | Must be income or expense |
| amount | Must be greater than zero |
| description | Required |
| category | Required |
| date | Must be valid date |

---

## Response

```json
{
"id":1,
"status":"success",
"message":"Transaction created successfully"
}
```

---

# 6.2 Get Transactions

## Endpoint

```
GET /transactions
```

---

## Purpose

Retrieves financial records.

---

## Query Parameters

| Parameter | Description |
|---|---|
| type | Filter income/expense |
| category | Filter category |
| start_date | Beginning date |
| end_date | Ending date |

---

## Response

```json
[
{
"id":1,
"type":"expense",
"description":"Rent",
"amount":500,
"category":"Office",
"transaction_date":"2026-07-01"
}
]
```

---

# 6.3 Update Transaction

## Endpoint

```
PUT /transactions/{transaction_id}
```

---

## Purpose

Updates an existing transaction.

---

## Request

```json
{
"amount":600
}
```

---

## Response

```json
{
"status":"success",
"message":"Transaction updated"
}
```

---

# 6.4 Delete Transaction

## Endpoint

```
DELETE /transactions/{transaction_id}
```

---

## Purpose

Removes or archives a transaction.

---

## Rules

- Transaction ID must exist.
- Operation must be logged.

---

# 7. AI Assistant APIs

# 7.1 AI Chat Endpoint

## Endpoint

```
POST /ai/chat
```

---

## Purpose

Processes natural language accounting requests.

---

## Request

```json
{
"message":"Add electricity bill of $100"
}
```

---

## Processing Flow

1. Receive user message.
2. Validate request.
3. Send request to LangGraph agent.
4. Detect intent.
5. Select tool.
6. Execute accounting operation.
7. Generate response.
8. Store AI history.

---

## Response

```json
{
"message":"Electricity expense added successfully.",
"tool_used":"create_transaction"
}
```

---

# 8. Financial Report APIs

# 8.1 Profit and Loss Report

## Endpoint

```
GET /reports/profit-loss
```

---

## Purpose

Generates income and expense summary.

---

## Query Parameters

```
start_date
end_date
```

---

## Calculation

```
Net Profit = Total Income - Total Expenses
```

---

## Response

```json
{
"total_income":5000,
"total_expense":3000,
"net_profit":2000
}
```

---

# 8.2 Balance Sheet Report

## Endpoint

```
GET /reports/balance-sheet
```

---

## Purpose

Generates financial position report.

---

## Response

```json
{
"assets":10000,
"liabilities":3000,
"equity":7000
}
```

---

# 8.3 Audit Report

## Endpoint

```
GET /reports/audit
```

---

## Purpose

Runs financial record checks.

---

## Response

```json
{
"status":"completed",
"issues":[
"Missing category detected",
"Possible duplicate transaction"
]
}
```

---

# 9. Database Design

## Database Technology

PostgreSQL

---

# 10. Entity Models

---

# 10.1 User Table

## Purpose

Stores application users.

---

## Fields

| Field | Type |
|---|---|
| id | UUID |
| name | String |
| email | String |
| created_at | Timestamp |

---

# 10.2 Accounts Table

## Purpose

Stores accounting categories and balances.

---

## Fields

| Field | Type |
|---|---|
| id | UUID |
| account_name | String |
| account_type | String |
| balance | Decimal |

---

# 10.3 Transactions Table

## Purpose

Stores financial activities.

---

## Fields

| Field | Type |
|---|---|
| id | UUID |
| user_id | UUID |
| account_id | UUID |
| type | String |
| description | String |
| amount | Decimal |
| category | String |
| transaction_date | Date |
| created_at | Timestamp |

---

## Rules

- Amount cannot be negative.
- Transaction must belong to user.
- Transaction must belong to account.

---

# 10.4 Ledger Entries Table

## Purpose

Maintains accounting records.

---

## Fields

| Field | Type |
|---|---|
| id | UUID |
| transaction_id | UUID |
| entry_type | String |
| debit | Decimal |
| credit | Decimal |
| entry_date | Date |

---

## Accounting Rule

```
Total Debit = Total Credit
```

---

# 10.5 Financial Reports Table

## Purpose

Stores generated report information.

---

## Fields

| Field | Type |
|---|---|
| id | UUID |
| user_id | UUID |
| report_type | String |
| total_income | Decimal |
| total_expense | Decimal |
| net_profit | Decimal |
| report_period | String |
| generated_at | Timestamp |

---

# 10.6 AI Chat History Table

## Purpose

Stores AI conversations.

---

## Fields

| Field | Type |
|---|---|
| id | UUID |
| user_id | UUID |
| user_message | Text |
| agent_response | Text |
| tool_used | String |
| created_at | Timestamp |

---

# 10.7 Audit Logs Table

## Purpose

Stores system and AI activity.

---

## Fields

| Field | Type |
|---|---|
| id | UUID |
| user_id | UUID |
| action | String |
| ai_input | Text |
| ai_output | Text |
| status | String |
| created_at | Timestamp |

---

# 11. Entity Relationships

```
USER
 |
 +---- TRANSACTIONS
 |
 +---- AI_CHAT_HISTORY
 |
 +---- FINANCIAL_REPORTS
 |
 +---- AUDIT_LOGS


ACCOUNTS
 |
 +---- TRANSACTIONS
 |
 +---- LEDGER_ENTRIES


TRANSACTIONS
 |
 +---- LEDGER_ENTRIES
```

---

# 12. Relationship Mapping

| Entity | Relationship |
|---|---|
| User → Transactions | One user has many transactions |
| User → Reports | One user generates many reports |
| User → AI History | One user has many conversations |
| User → Audit Logs | One user has many logs |
| Account → Transactions | One account has many transactions |
| Transaction → Ledger Entries | One transaction creates ledger entries |

---

# 13. AI Tool Data Flow

```
User Request
 |
 v
AI Agent
 |
 v
Intent Detection
 |
 v
Tool Selection
 |
 v
Accounting Tool
 |
 v
Validation
 |
 v
Database Operation
 |
 v
Tool Result
 |
 v
AI Response
```

---

# 14. Backend Validation Rules

## General Validation

All requests must validate:

- Required fields.
- Data types.
- Allowed values.
- Business rules.

---

## Transaction Validation

Rules:

- Amount > 0.
- Valid transaction type.
- Valid date.
- Existing account.

---

## Report Validation

Rules:

- Valid reporting period.
- Existing financial records.

---

## AI Validation

Rules:

- AI actions must use approved tools.
- AI cannot directly execute SQL.
- AI operations must be logged.

---

# 15. Error Handling

## Standard Error Response

```json
{
"error":"Invalid transaction amount",
"status_code":400
}
```

---

# Error Types

| Error | Status |
|---|---|
| Invalid request | 400 |
| Unauthorized | 401 |
| Not found | 404 |
| Server failure | 500 |

---

# 16. Backend Completion Criteria

Backend implementation is complete when:

- All endpoints are implemented.
- All schemas use Pydantic.
- Database models match specifications.
- AI tools communicate through backend.
- Validation rules are enforced.
- Errors are handled.
- Logs are created.
- API responses match defined contracts.

---

# 17. Future Backend Extensions

Planned improvements:

- Authentication service.
- Role-based permissions.
- Double-entry accounting engine.
- Bank integration APIs.
- OCR processing endpoints.
- Advanced financial analytics APIs.