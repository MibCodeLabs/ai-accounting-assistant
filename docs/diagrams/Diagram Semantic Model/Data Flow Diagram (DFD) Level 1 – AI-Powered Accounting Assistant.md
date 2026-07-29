# Diagram Semantic Model

## 1. System Purpose

AI-powered accounting assistant system that processes user requests through a frontend interface, backend API, AI reasoning layer, validation mechanisms, accounting tools, and database operations to generate accurate financial responses.

---

## 2. Components

### User
- Type: External Actor
- Role:
  - Initiates requests.
  - Receives generated responses.

### Next.js UI
- Type: Frontend Layer
- Role:
  - Provides user interaction interface.
  - Sends user queries to backend services.

### FastAPI Backend
- Type: API Layer
- Role:
  - Receives frontend requests.
  - Validates and forwards requests to AI processing components.

### AI Agent Layer
- Type: Agent Orchestration Component
- Technology:
  - LangGraph
- Role:
  - Coordinates AI workflow execution.
  - Manages reasoning and tool execution flow.

### Intent Detection / Tool Selection
- Type: Decision Component
- Role:
  - Identifies user intent.
  - Determines required action or tool.

### AI Model
- Type: Reasoning Component
- Technology:
  - GPT-4.1 Mini
- Role:
  - Performs reasoning.
  - Generates validated actions.

### Validation Layer
- Type: Control Component
- Role:
  - Validates requested operations before execution.
- Responsibilities:
  - Pydantic Validation
  - Business Rule Validation
  - Permission Checks

### Accounting Tools
- Type: Execution Component
- Role:
  - Performs accounting-related operations.
- Operations:
  - Create Transaction
  - Update Transaction
  - Query Records
  - Generate Reports
  - Run Audit

### PostgreSQL Database
- Type: Data Storage Component
- Role:
  - Stores accounting and financial records.
  - Provides query results and execution data.

### AI Response Generator
- Type: Output Generation Component
- Role:
  - Converts execution results into natural language responses.

---

## 3. Relationships

| From | To | Interaction |
|---|---|---|
| User | Next.js UI | Sends user request/query |
| Next.js UI | FastAPI Backend | Sends REST API request |
| FastAPI Backend | AI Agent Layer | Sends validated request |
| AI Agent Layer | Intent Detection / Tool Selection | Processes request intent |
| Intent Detection / Tool Selection | AI Model | Requests reasoning and action selection |
| Intent Detection / Tool Selection | Accounting Tools | Selects required accounting operation |
| AI Model | Validation Layer | Sends validated action |
| Accounting Tools | Validation Layer | Sends action for validation |
| Validation Layer | PostgreSQL Database | Executes validated operations |
| PostgreSQL Database | AI Response Generator | Provides query and execution results |
| AI Response Generator | User | Returns natural language response |

---

## 4. Workflow

1. User submits an accounting request through the frontend interface.
2. Next.js UI sends the request to the FastAPI backend through REST API.
3. Backend validates and forwards the request to the AI Agent Layer.
4. AI Agent analyzes the request and detects user intent.
5. Tool selection determines the required accounting operation.
6. AI Model reasons about the required action.
7. Validation Layer checks:
   - Data validity.
   - Business rules.
   - User permissions.
8. Accounting Tools execute the approved operation.
9. PostgreSQL stores or retrieves accounting information.
10. AI Response Generator converts results into a natural language response.
11. Response is returned to the user.

---

## 5. Data

### Accounting Data
- Storage:
  - PostgreSQL Database
- Operations:
  - Create
  - Update
  - Query
  - Audit
  - Reporting

### Request Data
- Source:
  - User natural language input
- Processing:
  - Intent detection
  - Validation
  - Tool execution

### Response Data
- Source:
  - Execution results
  - Query results
- Format:
  - Natural language response

---

## 6. Rules / Constraints

- All accounting operations must pass validation before execution.
- User permissions must be checked before sensitive operations.
- AI Agent selects tools based on detected intent.
- Accounting operations are performed through dedicated tools.
- Database interactions occur only through validated execution flows.
- AI responses are generated from verified execution results.