"""
Tests para el concepto de Polimorfismo en OOP
Valida tanto las implementaciones malas como las buenas
"""

import pytest
from polymorphism_bad import AnimalProcessor as AnimalProcessorBad, process_payment_bad
from polymorphism_good import Dog, Cat, Bird, AnimalProcessor as AnimalProcessorGood


class TestPolymorphismBad:
    """Tests para la implementación sin polimorfismo"""

    def test_process_payment_credit_card(self):
        """Verifica el procesamiento de pago con tarjeta de crédito"""
        result = process_payment_bad("credit_card", 100)
        assert "Procesando pago de $100 con tarjeta de crédito" in result

    def test_process_payment_paypal(self):
        """Verifica el procesamiento de pago con PayPal"""
        result = process_payment_bad("paypal", 200)
        assert "Procesando pago de $200 con PayPal" in result

    def test_process_payment_bitcoin(self):
        """Verifica el procesamiento de pago con Bitcoin"""
        result = process_payment_bad("bitcoin", 300)
        assert "Procesando pago de $300 con Bitcoin" in result

    def test_process_payment_unknown(self):
        """Verifica el manejo de métodos de pago desconocidos"""
        result = process_payment_bad("unknown", 100)
        assert "Método de pago desconocido" in result


class TestPolymorphismGood:
    """Tests para la implementación con polimorfismo"""

    def test_dog_behavior(self, capsys):
        """Verifica el comportamiento del perro"""
        dog = Dog("Rex")
        dog.introduce()
        dog.make_sound()
        dog.feed()
        dog.move()

        captured = capsys.readouterr()
        assert "Rex" in captured.out
        assert "Guau" in captured.out
        assert "croquetas" in captured.out
        assert "corriendo" in captured.out

    def test_cat_behavior(self, capsys):
        """Verifica el comportamiento del gato"""
        cat = Cat("Luna")
        cat.introduce()
        cat.make_sound()
        cat.feed()
        cat.move()

        captured = capsys.readouterr()
        assert "Luna" in captured.out
        assert "Miau" in captured.out
        assert "pescado" in captured.out
        assert "saltando" in captured.out

    def test_bird_behavior(self, capsys):
        """Verifica el comportamiento del pájaro"""
        bird = Bird("Piolín")
        bird.introduce()
        bird.make_sound()
        bird.feed()
        bird.move()

        captured = capsys.readouterr()
        assert "Piolín" in captured.out
        assert "Pío" in captured.out
        assert "semillas" in captured.out
        assert "volando" in captured.out

    def test_polymorphic_processing(self, capsys):
        """Verifica el procesamiento polimórfico de múltiples animales"""
        processor = AnimalProcessorGood()
        animals = [
            Dog("Rex"),
            Cat("Luna"),
            Bird("Piolín")
        ]

        processor.process_animals(animals)
        captured = capsys.readouterr()

        # Verifica que todos los animales fueron procesados
        assert "Rex" in captured.out
        assert "Luna" in captured.out
        assert "Piolín" in captured.out
        assert "Guau" in captured.out
        assert "Miau" in captured.out
        assert "Pío" in captured.out

    def test_extensibility(self, capsys):
        """Verifica que se pueden agregar nuevos animales sin modificar el procesador"""
        from polymorphism_good import Animal

        class Fish(Animal):
            def make_sound(self) -> None:
                print(f"{self._name} hace burbujas: glu glu")

            def feed(self) -> None:
                print(f"{self._name} está comiendo algas")

            def move(self) -> None:
                print(f"{self._name} está nadando")

        processor = AnimalProcessorGood()
        fish = Fish("Nemo")
        processor.process_animals([fish])

        captured = capsys.readouterr()
        assert "Nemo" in captured.out
        assert "glu glu" in captured.out


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
