# Cumplimiento de Clean Code: Buen Formato
# ✅ Solución: Formato horizontal y vertical correcto

from typing import Dict, List, Any, Optional, TypedDict
from datetime import datetime


# ✅ Líneas cortas (idealmente max 80-100 caracteres)
# ✅ Espaciado apropiado entre operadores y elementos


class Product(TypedDict):
    id: int
    name: str
    price: float
    category: str
    stock: int
    supplier: str
    warranty: str
    discounted_price: Optional[float]


class ProductService:
    def __init__(self):
        self.products: List[Product] = [
            {
                "id": 1,
                "name": "Laptop",
                "price": 1200,
                "category": "Electronics",
                "stock": 50,
                "supplier": "TechCorp",
                "warranty": "2 years",
                "discounted_price": None,
            },
            {
                "id": 2,
                "name": "Mouse",
                "price": 25,
                "category": "Accessories",
                "stock": 200,
                "supplier": "TechCorp",
                "warranty": "1 year",
                "discounted_price": None,
            },
        ]

    # ✅ Líneas cortas, una acción por línea
    def find_product_by_id_and_update_stock_and_calculate_discount_and_send_notification(
        self, product_id: int, quantity: int, discount_rate: float
    ) -> Optional[Product]:
        product = self._find_product_by_id(product_id)

        if not product:
            return None

        product["stock"] -= quantity
        discounted_price = self._calculate_discounted_price(
            product["price"], discount_rate
        )

        print(
            f"Producto {product['name']} actualizado. "
            f"Stock: {product['stock']}, "
            f"Precio con descuento: {discounted_price}"
        )

        result = product.copy()
        result["discounted_price"] = discounted_price
        return result

    def _find_product_by_id(self, product_id: int) -> Optional[Product]:
        return next((p for p in self.products if p["id"] == product_id), None)

    def _calculate_discounted_price(self, price: float, discount_rate: float) -> float:
        return price * discount_rate


# ✅ Espaciado vertical apropiado
# ✅ Líneas en blanco separan conceptos relacionados
# ✅ Métodos relacionados están cerca


class OrderItem(TypedDict):
    price: float
    quantity: int


class Order(TypedDict):
    id: float
    customer_id: int
    items: List[OrderItem]
    total: float
    date: datetime
    status: str


class OrderProcessor:
    DISCOUNT_THRESHOLD = 100
    DISCOUNT_RATE = 0.9

    def __init__(self):
        self.orders: List[Order] = []

    # ✅ Grupo 1: Procesamiento de órdenes
    def process_order(
        self, customer_id: int, items: List[OrderItem], payment_method: str
    ) -> bool:
        if not self._is_valid_order(customer_id, items):
            return False

        total = self._calculate_total(items)
        order = self._create_order(customer_id, items, total)

        self._save_order(order)
        self._log_order_processed(total)

        return True

    def _is_valid_order(self, customer_id: int, items: List[OrderItem]) -> bool:
        return customer_id > 0 and items and len(items) > 0

    def _calculate_total(self, items: List[OrderItem]) -> float:
        total = sum(item["price"] * item["quantity"] for item in items)

        if total > self.DISCOUNT_THRESHOLD:
            total = total * self.DISCOUNT_RATE

        return total

    def _create_order(
        self, customer_id: int, items: List[OrderItem], total: float
    ) -> Order:
        return {
            "id": datetime.now().timestamp(),
            "customer_id": customer_id,
            "items": items,
            "total": total,
            "date": datetime.now(),
            "status": "pending",
        }

    def _save_order(self, order: Order) -> None:
        self.orders.append(order)

    def _log_order_processed(self, total: float) -> None:
        print(f"Orden procesada: ${total}")

    # ✅ Grupo 2: Consultas de órdenes (separado por línea en blanco)
    def get_orders(self) -> List[Order]:
        return self.orders

    # ✅ Grupo 3: Cancelación de órdenes (separado por línea en blanco)
    def cancel_order(self, order_id: float) -> bool:
        original_length = len(self.orders)
        self.orders = [o for o in self.orders if o["id"] != order_id]
        return len(self.orders) < original_length


# ✅ Formato consistente en toda la clase
# ✅ Espaciado uniforme, indentación correcta


class User(TypedDict):
    name: str
    email: str
    age: int
    created_at: datetime


class UserManager:
    def __init__(self):
        self.users: List[User] = []

    def add_user(self, name: str, email: str, age: int) -> User:
        user: User = {
            "name": name,
            "email": email,
            "age": age,
            "created_at": datetime.now(),
        }

        self.users.append(user)
        return user

    def find_user(self, email: str) -> Optional[User]:
        return next((u for u in self.users if u["email"] == email), None)

    def delete_user(self, email: str) -> None:
        self.users = [u for u in self.users if u["email"] != email]


# ✅ Clase simple con buen formato (para tests)
class Calculator:
    def add(self, a: float, b: float) -> float:
        return a + b

    def subtract(self, a: float, b: float) -> float:
        return a - b

    def multiply(self, a: float, b: float) -> float:
        return a * b

    def divide(self, a: float, b: float) -> float | str:
        if b == 0:
            return "Error: No se puede dividir por cero"
        return a / b


if __name__ == "__main__":
    # Uso - También con buen formato
    print("=== Cumplimiento de Formato en Clean Code ===")

    service = ProductService()
    product = service.find_product_by_id_and_update_stock_and_calculate_discount_and_send_notification(
        1, 5, 0.8
    )
    print(product)

    processor = OrderProcessor()
    items: List[OrderItem] = [{"price": 100, "quantity": 2}]
    processor.process_order(1, items, "credit_card")
