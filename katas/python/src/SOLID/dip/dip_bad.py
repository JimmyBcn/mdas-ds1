# Violación del DIP: Clase de alto nivel depende directamente de clase de bajo nivel
# ❌ Problema: OrderService está fuertemente acoplado a MySQLDatabase


# ❌ Implementación concreta de notificación
class EmailNotification:
    def send(self, message: str) -> str:
        result = f"Enviando email: {message}"
        print(result)
        return result


# ❌ Servicio acoplado a implementación concreta
class NotificationService:
    def __init__(self):
        self.notification = EmailNotification()  # ❌ Acoplamiento fuerte

    def send(self, message: str) -> str:
        return self.notification.send(message)


# Módulo de bajo nivel (implementación concreta)
class MySQLDatabase:
    def save(self, data: str) -> None:
        print(f"Guardando en base de datos MySQL: {data}")


# ❌ Módulo de alto nivel depende de módulo concreto de bajo nivel
class OrderService:
    def __init__(self, database: MySQLDatabase):
        self.database = database  # ❌ ¡Acoplamiento fuerte!

    def process_order(self, order_id: str) -> None:
        print(f"Procesando pedido {order_id}")

        # ❌ ¡Directamente ligado a MySQL - no se puede cambiar de base de datos!
        self.database.save(f"Pedido {order_id} procesado")


# ❌ Problemas con este enfoque:
# 1. No se puede cambiar fácilmente a PostgreSQL, MongoDB, etc.
# 2. Difícil de probar (no se puede hacer mock de la base de datos fácilmente)
# 3. OrderService sabe demasiado sobre los detalles de la base de datos

if __name__ == "__main__":
    database = MySQLDatabase()
    order_service = OrderService(database)
    order_service.process_order("12345")
