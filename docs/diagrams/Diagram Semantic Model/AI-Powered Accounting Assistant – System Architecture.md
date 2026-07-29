# Diagram Semantic Model

## 1. System Purpose

AI-powered accounting platform that allows accountants, business owners, and administrators to manage financial operations through an AI chat interface, forms, dashboards, and reports. The system uses an AI agent layer to understand requests, execute accounting actions, validate operations, and interact with a PostgreSQL database.

---

## 2. Components

### User
- Type: External Actor
- Role: Interacts with the accounting system.
- User Types:
  - Accountant
  - Business Owner
  - Admin

---

### Frontend
- Type: User Interface Layer
- Technology:
  - Next.js
  - TypeScript
- Role:
  - Provides user-facing accounting interfaces.
  - Collects user input and displays system outputs.
- Features:
  - AI Chat Interface
  - Expense/Income Forms
  - Ledger View
  - Reports Dashboard

---

### Backend API
- Type: Application Service Layer
- Technology:
  - FastAPI
- Role:
  - Handles application communication between frontend, AI layer, tools, and database.
- Responsibilities:
  - Business Logic
  - Authentication
  - Pydantic Validation

---

### AI Agent Layer
- Type: AI Reasoning Component
- Technology:
  - LangGraph
  - GPT-4.1 Mini
- Role:
  - Understands user requests.
  - Plans required tasks.
  - Selects appropriate tools.
  - Generates responses.
- Responsibilities:
  - Understand Request
  - Plan Task
  - Select Tool
  - Generate Response

---

### Accounting Tools
- Type: Domain Execution Layer
- Role:
  - Provides accounting-specific operations.
- Capabilities:

#### Transaction Management
- Operations:
  - Create
  - Update
  - View

#### Financial Reports
- Generates:
  - Profit & Loss Reports
  - Balance Sheets

#### Audit & Analysis
- Performs:
  - Financial review
  - Data analysis

---

### Validation & Security
- Type: Security Layer
- Role:
  - Ensures safe and valid system operations.
- Responsibilities:
  - Data Validation
  - Permission Checks
  - AI Action Logs

---

### PostgreSQL Database
- Type: Data Storage Layer
- Role:
  - Stores and retrieves accounting system data.
- Stored Data:
  - Users
  - Transactions
  - Accounts
  - Audit Logs

---

## 3. Relationships

| From | To | Interaction |
|---|---|---|
| User | Frontend | Provides requests and interacts with UI |
| Frontend | Backend API | Sends user actions and accounting data |
| Backend API | AI Agent Layer | Sends requests for AI processing |
| AI Agent Layer | Backend API | Returns generated responses and decisions |
| Backend API | Accounting Tools | Executes accounting operations |
| Accounting Tools | AI Agent Layer | Provides operation results |
| Accounting Tools | PostgreSQL Database | Reads and writes accounting data |
| PostgreSQL Database | Accounting Tools | Returns stored financial data |
| Backend API | Validation & Security | Performs authentication and validation |
| Validation & Security | PostgreSQL Database | Stores security and AI action logs |
| Accounting Tools | AI Agent Layer | Provides financial operation outputs |

---

## 4. Workflow

1. User accesses the accounting platform.
2. User submits a request through the frontend interface.
3. Backend API receives and validates the request.
4. AI Agent analyzes user intent.
5. AI Agent plans the required task.
6. AI Agent selects the appropriate accounting tool.
7. Accounting tools execute the requested operation.
8. Data is retrieved or updated in PostgreSQL.
9. Validation and security checks ensure safe execution.
10. AI Agent generates a response.
11. Frontend displays the result to the user.

---

## 5. Functional Areas

### User Interaction
- Interfaces:
  - AI Chat Interface
  - Expense/Income Forms
  - Ledger View
  - Reports Dashboard

### AI Processing
- Capabilities:
  - Intent understanding
  - Task planning
  - Tool selection
  - Response generation

### Accounting Operations
- Supported Features:
  - Transaction management
  - Financial reporting
  - Audit analysis

### Data Management
- Database Entities:
  - Users
  - Transactions
  - Accounts
  - Audit Logs

### Security Management
- Controls:
  - Authentication
  - Permission validation
  - Data validation
  - AI activity tracking

---

## 6. Data Flow

### User Input Data
- Source:
  - User
- Entry Point:
  - Frontend
- Processing:
  - Backend API
  - AI Agent Layer

### Accounting Data
- Source:
  - Accounting Tools
- Storage:
  - PostgreSQL Database
- Data Types:
  - Transactions
  - Accounts
  - Reports
  - Audit Logs

### Response Data
- Source:
  - AI Agent Layer
- Destination:
  - Frontend
- Output:
  - Generated accounting responses
  - Reports
  - Analysis results

---

## 7. Rules / Constraints

- All user interactions must pass through the frontend layer.
- Backend API manages communication between system layers.
- AI Agent must understand and plan requests before executing actions.
- Accounting operations must use approved accounting tools.
- Database operations must follow validation and security checks.
- User permissions determine available actions.
- AI actions must be logged for auditing purposes.