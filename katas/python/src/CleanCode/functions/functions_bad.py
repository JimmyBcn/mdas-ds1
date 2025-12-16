# Violación de Clean Code: Funciones Mal Diseñadas
# ❌ Problemas: Hacen muchas cosas, grandes, niveles de abstracción mezclados, efectos secundarios

from typing import Dict


class OrderProcessor:
    # ❌ Función hace MUCHAS cosas sin separación
    def process_order(self, customer_id: int, customer_name: str, customer_email: str, items: list) -> str:
        # Validación, cálculo y notificación todo junto
        if customer_id <= 0 or not customer_name or not customer_email or not items:
            return "Error: Datos de pedido inválidos"
        total = sum(item["price"] * item["qty"] for item in items)
        print(f"Procesando pedido para {customer_name} ({customer_email})")
        print(f"Total del pedido: {total}")
        return f"Pedido procesado exitosamente. Total: {total}"


class UserScoreProcessor:
    # ❌ Función hace MUCHAS cosas: calcula bonus, actualiza score, envía notificación y loguea
    # ❌ Niveles de abstracción mezclados
    def process_user_score(self, user: Dict[str, any], new_score: int, time_in_seconds: int) -> None:
        print(f"Procesando puntaje para {user['name']}...")

        # Nivel bajo: cálculo de bonus
        bonus = 0
        if time_in_seconds < 60:
            bonus = 10
            print(f"Aplica bonus de {bonus} puntos por tiempo rápido.")

        final_score = user["score"] + new_score + bonus

        # Nivel medio: actualizar el score del usuario (efecto secundario)
        user["score"] = final_score

        # Nivel bajo: enviar notificación
        print(
            f"Notificación enviada a {user['name']}: Tu nuevo puntaje es {final_score}")

        # Nivel bajo: guardar en log
        print(
            f"LOG: {user['name']} obtuvo {new_score} puntos. Puntaje final: {final_score}")


if __name__ == "__main__":
    # Uso
    print("=== Violación de Funciones en Clean Code ===")
    user = {"name": "Alex", "score": 100}
    processor = UserScoreProcessor()
    processor.process_user_score(user, 50, 30)
    print(f"Puntaje final del usuario: {user['score']}")

    # ❌ Si necesito cambiar eat() o sleep(), debo modificar 3 clases
    # ❌ Si agrego más animales, más duplicación
    # ❌ Propenso a inconsistencias
