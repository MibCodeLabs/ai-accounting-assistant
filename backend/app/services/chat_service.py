import logging

from app.ai.agent import chat
from app.ai.guardrails import check_message


logger = logging.getLogger(__name__)


def process_chat(message: str):

    guardrail_result = check_message(message)

    if not guardrail_result["allowed"]:
        logger.warning(
            "Blocked AI request: %s",
            message
        )

        return {
            "response": guardrail_result["reason"]
        }


    logger.info(
        "AI request received"
    )


    response = chat(message)


    logger.info(
        "AI response generated"
    )


    return {
        "response": response
    }