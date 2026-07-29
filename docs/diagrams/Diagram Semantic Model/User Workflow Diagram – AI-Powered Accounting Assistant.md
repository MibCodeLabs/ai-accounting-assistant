# Diagram Semantic Model

# 1. System Purpose

AI-powered accounting assistant workflow that allows users to manage accounting records, ask accounting-related questions, and generate financial reports.

The system receives user actions from a Next.js frontend, validates requests through the backend, uses an AI agent to classify user intent, executes the required tools, interacts with the database, records operations, and returns finalized responses to the user interface.

---

# 2. System Actors and Components

## User

Type:
- External Actor

Role:
- Interacts with the accounting assistant.
- Authenticates into the system.
- Selects accounting workflows.
- Requests record operations.
- Sends AI queries.
- Requests financial reports.

Actions:
- Login
- View dashboard
- Manage records
- Ask AI questions
- Request reports

---

# Frontend (Next.js)

Type:
- User Interface Layer

Role:
- Provides the user interaction interface.
- Collects user inputs.
- Displays finalized responses.

Components:

## Authentication Interface

Responsibilities:
- Collect login information.
- Authenticate user access.
- Provide access to dashboard.

---

## Dashboard

Responsibilities:
- Display accounting information.
- Provide available system actions.

---

## Action Selection

Available Actions:

### Manage Records

Purpose:
- Perform accounting record management.

Operations:
- Add records
- Edit records
- Delete records
- Manage income and expense entries

---

### AI Chat

Purpose:
- Allow users to submit accounting questions.

Operations:
- Enter prompts
- Submit queries

---

### View Reports

Purpose:
- Allow users to request financial reports.

Operations:
- Select report type

Supported Reports:
- Profit & Loss
- Balance Sheet
- Audit Reports

---

# Backend

Type:
- Application Service Layer

Role:
- Receives frontend requests.
- Validates requests.
- Coordinates AI and database execution.
- Returns validated responses.

Responsibilities:

## Request Validation

Functions:
- Validate request format.
- Check required input data.
- Prepare request context.

---

## Tool Execution

Functions:
- Execute selected workflow.
- Call required tools.
- Coordinate database operations.

---

## Response Validation

Functions:
- Validate generated output.
- Prepare final response.
- Return response to frontend.

---

# AI Agent

Type:
- Reasoning and Decision Component

Role:
- Understand user intent.
- Classify requested workflow.
- Select required execution path.

Capabilities:

## Intent Understanding

Input:
- User request
- User action context

Output:
- Classified intent

---

## Intent Classification

Supported Intent Types:

### CRUD Intent

Purpose:
- Handle accounting record operations.

Operations:
- Create
- Read
- Update
- Delete

---

### AI Intent

Purpose:
- Answer accounting-related questions.

Operations:
- Analyze user query.
- Generate AI response.

---

### Report Intent

Purpose:
- Generate requested financial reports.

Operations:
- Identify report type.
- Retrieve required financial information.
- Generate report output.

---

## Tool Execution

Responsibilities:
- Select appropriate backend tools.
- Trigger required operations.
- Pass results for response generation.

---

## Output Finalization

Responsibilities:
- Combine tool results.
- Generate final response.
- Return formatted output.

---

# Database

Type:
- Data Storage Layer

Role:
- Store accounting information.
- Execute accounting transactions.
- Maintain operation history.

Components:

## Database CRUD and Transaction Operations

Responsibilities:
- Create records.
- Retrieve records.
- Update records.
- Delete records.
- Execute transactions.

Stored Data:
- Financial records
- Income and expense entries
- Accounting transactions

---

## Operation Logging

Responsibilities:
- Record executed operations.
- Maintain audit history.
- Track system activity.

---

# 3. System Relationships

| Source | Target | Interaction |
|---|---|---|
| User | Frontend | Performs login and submits actions |
| Frontend | Backend | Sends user requests |
| Frontend | Dashboard | Displays accounting information |
| Frontend | Manage Records | Sends CRUD operations |
| Frontend | AI Chat | Sends AI prompts |
| Frontend | Report Selection | Sends report requests |
| Backend | Request Validation | Validates incoming requests |
| Backend | AI Agent | Sends request context for intent analysis |
| AI Agent | Intent Classification | Determines CRUD, AI, or Report intent |
| AI Agent | Tool Execution | Selects required execution path |
| Backend | Execute Tool | Runs selected operations |
| Execute Tool | Database | Performs database operations |
| Database | Operation Logging | Stores operation history |
| AI Agent | Output Finalization | Generates final response |
| Backend | Response Validation | Validates final output |
| Backend | Frontend | Returns finalized response |
| Frontend | User | Displays results |

---

# 4. Workflow

## Authentication Workflow

1. User submits login request.
2. Frontend processes authentication.
3. User gains access to dashboard.

---

## Record Management Workflow

1. User selects Manage Records.
2. User performs Add, Edit, or Delete operation.
3. Frontend sends request to backend.
4. Backend validates request.
5. AI Agent identifies CRUD intent.
6. Tool execution performs database transaction.
7. Database logs operation.
8. Response is validated.
9. Result is displayed to user.

---

## AI Chat Workflow

1. User enters accounting question.
2. Frontend sends prompt.
3. Backend validates request.
4. AI Agent analyzes user intent.
5. AI Agent identifies AI intent.
6. Required tools are executed if needed.
7. AI Agent finalizes response.
8. Backend validates response.
9. Frontend displays result.

---

## Report Generation Workflow

1. User selects View Reports.
2. User selects report type.
3. Frontend sends report request.
4. Backend validates request.
5. AI Agent identifies Report intent.
6. Required tools retrieve financial information.
7. Database provides accounting data.
8. Report output is generated.
9. Operation is logged.
10. Response is validated.
11. Report is displayed.

---

# 5. Data Model

## User Request

Source:
- User

Contains:
- Authentication information
- Selected action
- CRUD data
- AI prompt
- Report request

---

## Accounting Data

Source:
- Database

Contains:
- Financial records
- Income and expense entries
- Transactions
- Accounting history

---

## Intent Data

Generated By:
- AI Agent

Contains:
- Detected intent type
- Selected workflow
- Required tools

---

## Response Data

Contains:
- AI-generated answer
- CRUD operation result
- Generated report
- Validation status

---

# 6. Rules and Constraints

- All frontend requests must pass backend validation.
- AI Agent determines execution workflow based on user intent.
- CRUD operations must execute through database transactions.
- Report requests must include a selected report type.
- Database operations must be logged.
- Only approved tools can be executed by the AI Agent.
- Frontend displays only validated responses.
- Backend controls communication between frontend, AI Agent, and database.

---

# 7. System Flow Summary

User

↓

Next.js Frontend

↓

Backend Validation Layer

↓

AI Agent Intent Understanding

↓

Intent Classification

(CRUD / AI / Report)

↓

Tool Execution

↓

Database Operations

↓

Operation Logging

↓

AI Output Finalization

↓

Response Validation

↓

Frontend Display

↓

User