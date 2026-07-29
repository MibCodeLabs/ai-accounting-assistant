# Diagram Semantic Model

## 1. System Purpose

AI agent workflow that converts user natural language requests into executed actions and generated responses using stored financial data.

---

## 2. Components

### User Request
- Type: Input
- Role: Provides natural language requests.

### AI Agent
- Type: Reasoning Component
- Role: Understands user intent.

### Select Tool
- Type: Decision Component
- Role: Selects required action.

### Execute Action
- Type: Execution Component
- Role: Performs system operations.
- Operations:
  - Create
  - Audit
  - Query
  - Report

### PostgreSQL
- Type: Database
- Role: Stores and retrieves financial data.

### AI Response
- Type: Output
- Role: Generates final answer.

---

## 3. Relationships

| From | To | Interaction |
|---|---|---|
| User Request | AI Agent | Sends natural language request |
| AI Agent | Select Tool | Sends detected intent |
| Select Tool | Execute Action | Selects operation |
| Execute Action | PostgreSQL | Reads/writes financial data |
| PostgreSQL | Execute Action | Returns stored data |
| Execute Action | AI Response | Provides execution result |
| AI Response | User | Returns generated answer |

---

## 4. Workflow

1. User submits a request.
2. AI agent interprets intent.
3. Tool selection identifies required operation.
4. Execution layer performs action.
5. Database is accessed for financial data.
6. AI generates response.

---

## 5. Data

### Financial Data
- Storage: PostgreSQL
- Operations:
  - Store
  - Retrieve

---

## 6. Rules / Constraints

- Actions depend on AI intent recognition.
- Execution operations interact with financial data storage.
- Responses are generated from execution results.