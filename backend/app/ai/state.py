from typing import TypedDict, Annotated, Optional

from langgraph.graph.message import add_messages
from langchain_core.messages import BaseMessage


class AgentState(TypedDict):
    """
    State passed between LangGraph nodes.
    """

    messages: Annotated[
        list[BaseMessage],
        add_messages
    ]

    intent: Optional[str]

    selected_tool: Optional[str]

    tool_result: Optional[dict]

    response: Optional[str]

    error: Optional[str]