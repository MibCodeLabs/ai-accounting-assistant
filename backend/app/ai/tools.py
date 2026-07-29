from langchain_core.tools import tool


@tool
def create_transaction(
    transaction_type: str,
    description: str,
    amount: float,
    category: str
):
    """
    Creates a new financial transaction.

    Use this tool when the user wants to add
    an income or expense record.
    """

    return {
        "status": "success",
        "action": "create_transaction",
        "transaction": {
            "type": transaction_type,
            "description": description,
            "amount": amount,
            "category": category
        }
    }


@tool
def update_transaction(
    transaction_id: int,
    amount: float | None = None,
    description: str | None = None
):
    """
    Updates an existing transaction.
    """

    return {
        "status": "success",
        "action": "update_transaction",
        "transaction_id": transaction_id,
        "updated_amount": amount,
        "updated_description": description
    }


@tool
def query_transactions(
    category: str | None = None,
    transaction_type: str | None = None
):
    """
    Retrieves financial transactions.
    """

    return {
        "status": "success",
        "action": "query_transactions",
        "filters": {
            "category": category,
            "type": transaction_type
        },
        "transactions": []
    }


@tool
def generate_profit_loss(
    start_date: str,
    end_date: str
):
    """
    Generates a profit and loss report.
    """

    return {
        "status": "success",
        "action": "generate_profit_loss",
        "period": {
            "start": start_date,
            "end": end_date
        }
    }


@tool
def run_monthly_audit(
    month: str
):
    """
    Runs accounting validation checks.
    """

    return {
        "status": "success",
        "action": "run_monthly_audit",
        "month": month
    }


AVAILABLE_TOOLS = [
    create_transaction,
    update_transaction,
    query_transactions,
    generate_profit_loss,
    run_monthly_audit,
]