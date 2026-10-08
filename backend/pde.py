from flask import Blueprint

bp = Blueprint("pde", __name__, url_prefix="/api/pde")

@bp.post("/")
def black_scholes():
    pass 

