from langgraph.graph import StateGraph, END
from typing import TypedDict

from app.ai.llm import llm
from app.ai.prompts import SYSTEM_PROMPT


class AgentState(TypedDict):
    message: str
    response: str


def agent_node(state: AgentState):

    result = llm.invoke(
        [
            ("system", SYSTEM_PROMPT),
            ("human", state["message"])
        ]
    )

    return {
        "response": result.content
    }


graph = StateGraph(AgentState)


graph.add_node(
    "agent",
    agent_node
)

graph.set_entry_point("agent")

graph.add_edge(
    "agent",
    END
)


agent_graph = graph.compile()