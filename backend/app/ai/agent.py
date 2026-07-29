from app.ai.graph import agent_graph


def chat(message: str):

    result = agent_graph.invoke(
        {
            "message": message,
            "response": ""
        }
    )

    return result["response"]