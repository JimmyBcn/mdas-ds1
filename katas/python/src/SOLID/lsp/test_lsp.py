"""
Tests para el principio LSP (Liskov Substitution Principle)
Valida tanto las implementaciones malas como las buenas
"""

import pytest
from lsp_bad import Bird as BirdBad, Eagle as EagleBad, Penguin as PenguinBad
from lsp_good import (
    Animal,
    FlyingBird,
    FlightlessBird,
    Eagle as EagleGood,
    Duck,
    Penguin as PenguinGood
)


class TestLSPBad:
    """Tests para la implementación que viola LSP"""

    def test_eagle_fly(self):
        """Verifica que las águilas pueden volar"""
        eagle = EagleBad("Águila")
        assert "vuela alto" in eagle.fly()

    def test_eagle_eat(self):
        """Verifica que las águilas pueden comer"""
        eagle = EagleBad("Águila")
        assert "comiendo" in eagle.eat()

    def test_penguin_lsp_violation(self):
        """Demuestra la violación de LSP: Penguin no puede sustituir a Bird"""
        penguin = PenguinBad("Pingüino")
        # Penguin hereda de Bird pero no puede volar - violación de LSP
        with pytest.raises(Exception) as exc_info:
            penguin.fly()
        assert "no puede volar" in str(exc_info.value)

    def test_penguin_swim(self):
        """Verifica que los pingüinos pueden nadar"""
        penguin = PenguinBad("Pingüino")
        assert "nadando" in penguin.swim()


class TestLSPGood:
    """Tests para la implementación que cumple con LSP"""

    def test_eagle_eat(self):
        """Verifica que las águilas pueden comer"""
        eagle = EagleGood("Águila")
        assert "Águila está comiendo" in eagle.eat()

    def test_eagle_fly(self):
        """Verifica que las águilas pueden volar"""
        eagle = EagleGood("Águila")
        assert "vuela alto en el cielo" in eagle.fly()

    def test_duck_eat(self):
        """Verifica que los patos pueden comer"""
        duck = Duck("Pato")
        assert "Pato está comiendo" in duck.eat()

    def test_duck_fly(self):
        """Verifica que los patos pueden volar"""
        duck = Duck("Pato")
        assert "vuela sobre el lago" in duck.fly()

    def test_duck_swim(self):
        """Verifica que los patos pueden nadar"""
        duck = Duck("Pato")
        assert "Pato está nadando" in duck.swim()

    def test_penguin_eat(self):
        """Verifica que los pingüinos pueden comer"""
        penguin = PenguinGood("Pingüino")
        assert "Pingüino está comiendo" in penguin.eat()

    def test_penguin_swim(self):
        """Verifica que los pingüinos pueden nadar"""
        penguin = PenguinGood("Pingüino")
        assert "Pingüino está nadando" in penguin.swim()

    def test_lsp_compliance_all_animals(self):
        """Verifica que todas las aves cumplen con LSP mediante polimorfismo"""
        animals = [
            EagleGood("Águila"),
            Duck("Pato"),
            PenguinGood("Pingüino")
        ]

        # Todos los animales pueden comer y dormir
        for animal in animals:
            assert isinstance(animal.eat(), str)
            assert isinstance(animal.sleep(), str)

    def test_flying_birds_can_fly(self):
        """Verifica que solo las aves voladoras pueden volar"""
        eagle = EagleGood("Águila")
        duck = Duck("Pato")

        assert isinstance(eagle.fly(), str)
        assert isinstance(duck.fly(), str)

    def test_swimming_birds_can_swim(self):
        """Verifica que las aves nadadoras pueden nadar"""
        duck = Duck("Pato")
        penguin = PenguinGood("Pingüino")

        assert isinstance(duck.swim(), str)
        assert isinstance(penguin.swim(), str)


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
