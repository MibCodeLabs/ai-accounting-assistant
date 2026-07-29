# Diagram Semantic Model

## 1. System Purpose

AI-powered accounting application architecture that enables users to interact with a frontend interface, backend API services, AI agent capabilities, accounting tools, and financial data storage.

The system uses external AI services for language processing and reasoning while maintaining accounting operations through dedicated application-controlled tools. The architecture ensures that AI services do not directly access financial data storage and that all accounting operations are executed through controlled business logic.

---

# 2. Components

## User

- Type:
  - External Actor

- Role:
  - Initiates application requests.
  - Interacts with the frontend interface.
  - Receives processed responses.

- Constraints:
  - Does not directly communicate with backend services.
  - All communication occurs through the frontend application.

---

## Vercel Next.js Frontend

- Type:
  - Frontend Layer

- Technology:
  - Next.js
  - Vercel Hosting

- Role:
  - Provides the user interface.
  - Collects user requests.
  - Sends API requests to backend services.
  - Displays generated responses.

- Responsibilities:
  - User interaction handling.
  - Request submission.
  - Response presentation.

---

## Backend Server

- Type:
  - API Layer

- Technology:
  - FastAPI Application

- Role:
  - Acts as the main application entry point.
  - Handles communication between frontend and backend services.
  - Routes requests to AI services and application logic.

- Responsibilities:
  - API request handling.
  - Request validation.
  - Response formatting.
  - Service communication.

---

## AI Service Layer

- Type:
  - AI Orchestration Layer

- Role:
  - Manages AI-driven application behavior.
  - Coordinates agent execution.
  - Controls AI workflows and tool usage.

- Responsibilities:
  - Agent execution.
  - Prompt management.
  - Context handling.
  - Tool calling management.
  - Processing AI responses.
  - Coordinating accounting operations.

---

## External AI API

- Type:
  - AI Processing Service

- Role:
  - Provides language understanding and reasoning capabilities.

- Capabilities:
  - LLM Processing.
  - Natural language understanding.
  - Reasoning.
  - Response generation.

- Constraints:
  - Does not directly access PostgreSQL.
  - Does not execute accounting operations.
  - Communicates only through the AI Service Layer.

---

## Accounting Tools

- Type:
  - Business Logic Component

- Role:
  - Executes accounting operations requested by AI agents.

- Operations:
  - Create Transaction.
  - Update Transaction.
  - Query Records.
  - Generate Reports.
  - Run Audit.

- Responsibilities:
  - Execute validated accounting actions.
  - Read and write accounting data.
  - Communicate with PostgreSQL database.

---

## PostgreSQL Database

- Type:
  - Data Storage Component

- Role:
  - Stores application and accounting information.

- Stored Data:
  - User financial data.
  - Transactions.
  - Accounts.
  - Ledger records.
  - Financial reports.
  - Audit records.
  - AI interaction history.

- Constraints:
  - Database access occurs only through application services.
  - No direct access from frontend or external AI services.

---

## Docker Compose

- Type:
  - Deployment Environment

- Role:
  - Provides local/containerized application deployment.

- Containers:
  - Frontend Container.
  - Backend Container.
  - PostgreSQL Container.

- Responsibilities:
  - Service orchestration.
  - Container networking.
  - Local development environment management.

- Note:
  - Docker Compose represents local/self-hosted deployment.
  - Production frontend hosting may use Vercel independently.

---

# 3. Relationships

| From | To | Interaction |
|---|---|---|
| User | Vercel Next.js Frontend | Sends user requests |
| Vercel Next.js Frontend | Backend Server | Sends HTTPS REST API requests |
| Backend Server | AI Service Layer | Sends agent requests |
| AI Service Layer | External AI API | Sends AI processing requests |
| AI Service Layer | Accounting Tools | Executes tool operations |
| Accounting Tools | PostgreSQL Database | Reads and writes accounting data |
| PostgreSQL Database | Accounting Tools | Provides stored accounting information |
| Docker Compose | Frontend Container | Hosts frontend service |
| Docker Compose | Backend Container | Hosts backend service |
| Docker Compose | PostgreSQL Container | Hosts database service |

---

# 4. Workflow

1. User submits a request through the frontend application.

2. Vercel Next.js Frontend sends an HTTPS REST API request to the FastAPI Backend.

3. Backend Server validates and processes the incoming request.

4. Backend forwards the request to the AI Service Layer.

5. AI Service Layer manages:
   - Agent execution.
   - Prompt construction.
   - Context handling.
   - Tool selection.

6. AI Service Layer sends reasoning requests to the External AI API.

7. External AI API performs:
   - Language understanding.
   - Reasoning.
   - AI response generation.

8. AI Service Layer determines required accounting operations.

9. Accounting Tools execute requested operations.

10. Accounting Tools read or update PostgreSQL Database records.

11. Database results are returned back through Accounting Tools.

12. AI Service Layer processes tool results and generates the final response.

13. Backend Server returns the processed response to the frontend.

14. Frontend displays the result to the user.

---

# 5. Data

## User Request Data

- Source:
  - User interaction through frontend.

- Transport:
  - HTTPS REST API.

- Includes:
  - User messages.
  - Accounting requests.
  - Application commands.

---

## AI Processing Data

- Managed by:
  - AI Service Layer.
  - External AI API.

- Includes:
  - Prompts.
  - Agent context.
  - Reasoning requests.
  - Tool selection information.
  - Tool execution responses.

---

## Accounting Data

- Storage:
  - PostgreSQL Database.

- Managed through:
  - Accounting Tools.

- Operations:
  - Create.
  - Update.
  - Query.
  - Reporting.
  - Audit.

---

## Deployment Data

- Managed by:
  - Docker Compose.

- Includes:
  - Container configuration.
  - Service networking.
  - Environment configuration.

---

# 6. Rules / Constraints

- Frontend communicates with backend only through HTTPS REST APIs.
- Backend Server acts as the application entry point.
- AI operations are controlled through the AI Service Layer.
- External AI API provides reasoning capabilities only.
- External AI API cannot directly access financial data.
- Accounting operations must execute through Accounting Tools.
- Database operations must occur through controlled application services.
- Frontend cannot directly communicate with PostgreSQL.
- AI agents cannot directly modify database records.
- All accounting actions must pass through business logic validation.
- Deployment can use Docker Compose for local/containerized environments.
- Production hosting may separate frontend hosting from backend infrastructure.
- Application services must handle API failures, AI failures, tool execution failures, and database errors.
- Sensitive configuration values must be managed securely through environment configuration.