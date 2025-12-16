# Violación de Clean Code: Mal Formato
# ❌ Problemas: Formato horizontal y vertical incorrecto

from typing import Dict, List, Any
from datetime import datetime


# ❌ Líneas demasiado largas (formato horizontal malo)
class ProductService:
    def __init__(self):
        self.products: List[Dict[str, Any]] = [
            {"id": 1, "name": "Laptop", "price": 1200, "category": "Electronics",
                "stock": 50, "supplier": "TechCorp", "warranty": "2 years"},
            {"id": 2, "name": "Mouse", "price": 25, "category": "Accessories",
                "stock": 200, "supplier": "TechCorp", "warranty": "1 year"},
        ]

    def find_product_by_id_and_update_stock_and_calculate_discount_and_send_notification(
        self, product_id: int, quantity: int, discount_rate: float
    ) -> Dict[str, Any] | None:
        product = next(
            (p for p in self.products if p["id"] == product_id), None)
        if product:
            product["stock"] -= quantity
            discounted_price = product["price"] * discount_rate
            print(
                f"Producto {product['name']} actualizado. Stock: {product['stock']}, Precio con descuento: {discounted_price}")
            return {**product, "discounted_price": discounted_price}
        return None


# ❌ Sin espaciado vertical - todo junto
class OrderProcessor:
    def __init__(self):
        self.orders: List[Dict[str, Any]] = []

    def process_order(self, customer_id: int, items: List[Dict[str, Any]], payment_method: str) -> bool:
        if not customer_id or not items or len(items) == 0:
            return False
        total = 0
        for item in items:
            total += item["price"] * item["quantity"]
        if total > 100:
            total = total * 0.9
        order = {"id": datetime.now().timestamp(), "customer_id": customer_id,
                 "items": items, "total": total, "date": datetime.now(), "status": "pending"}
        self.orders.append(order)
        print(f"Orden procesada: ${total}")
        return True

    def get_orders(self) -> List[Dict[str, Any]]:
        return self.orders

    def cancel_order(self, order_id: float) -> bool:
        self.orders = [o for o in self.orders if o["id"] != order_id]
        return True


# ❌ Formato inconsistente y mezcla de estilos
class UserManager:
    def __init__(self):
        self.users: List[Dict[str, Any]] = []

    def add_user(self, name: str, email: str, age: int):
        user = {"name": name, "email": email,
                "age": age, "created_at": datetime.now()}
        self.users.append(user)
        return user

    def find_user(self, email: str):
        for user in self.users:
            if user["email"] == email:
                return user
        return None

    def delete_user(self, email: str):
        self.users = [u for u in self.users if u["email"] != email]


# ❌ Clase con mal formato (para tests)
class Calculator:
    def add(self,a,b):return a+b
    def subtract(self,a,b):return a-b
    def multiply(self,a,b):return a*b
    def divide(self,a,b):
        if b==0:return "Error: No se puede dividir por cero"
        return a/b


if __name__ == "__main__":
    # Uso
    print("=== Violación de Formato en Clean Code ===")
    service = ProductService()
    product = service.find_product_by_id_and_update_stock_and_calculate_discount_and_send_notification(
        1, 5, 0.8)
    print(product)
    processor = OrderProcessor()
    processor.process_order(1, [{"price": 100, "quantity": 2}], "credit_card")
