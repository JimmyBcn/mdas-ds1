"""
Tests para el principio OCP (Open/Closed Principle)
Valida tanto las implementaciones malas como las buenas
"""

import pytest
from ocp_bad import Dog as DogBad, Cat as CatBad, Fox as FoxBad, Communication as CommunicationBad
from ocp_good import (
    Dog as DogGood,
    Cat as CatGood,
    Fox as FoxGood,
    Cow,
    Duck,
    Communication as CommunicationGood
)


class TestOCPBad:
    """Tests para la implementación que viola OCP"""

    def test_dog_communication(self):
        """Verifica la comunicación del perro"""
        communication = CommunicationBad()
        dog = DogBad()
        assert communication.communicate(dog) == "woof woof"

    def test_cat_communication(self):
        """Verifica la comunicación del gato"""
        communication = CommunicationBad()
        cat = CatBad()
        assert communication.communicate(cat) == "meow meow"

    def test_fox_communication(self):
        """Verifica la comunicación del zorro"""
        communication = CommunicationBad()
        fox = FoxBad()
        assert communication.communicate(
            fox) == "ring-ding-ding-ding-dingeringeding"

    def test_unknown_animal_type(self):
        """Verifica que tipos desconocidos lanzan error"""
        communication = CommunicationBad()

        class Bird:
            def make_sound(self):
                return "tweet tweet"

        bird = Bird()
        with pytest.raises(ValueError):
            communication.communicate(bird)


class TestOCPGood:
    """Tests para la implementación que cumple con OCP"""

    def test_dog_communication(self):
        """Verifica la comunicación del perro"""
        communication = CommunicationGood()
        dog = DogGood()
        assert communication.communicate(dog) == "woof woof"

    def test_cat_communication(self):
        """Verifica la comunicación del gato"""
        communication = CommunicationGood()
        cat = CatGood()
        assert communication.communicate(cat) == "meow meow"

    def test_fox_communication(self):
        """Verifica la comunicación del zorro"""
        communication = CommunicationGood()
        fox = FoxGood()
        assert communication.communicate(
            fox) == "ring-ding-ding-ding-dingeringeding"

    def test_cow_communication(self):
        """Verifica la comunicación de la vaca"""
        communication = CommunicationGood()
        cow = Cow()
        assert communication.communicate(cow) == "moo moo"

    def test_duck_communication(self):
        """Verifica la comunicación del pato"""
        communication = CommunicationGood()
        duck = Duck()
        assert communication.communicate(duck) == "quack quack"

    def test_communicate_multiple(self):
        """Verifica la comunicación múltiple"""
        communication = CommunicationGood()
        animals = [DogGood(), CatGood(), FoxGood()]
        results = communication.communicate_multiple(animals)
        assert results == ["woof woof", "meow meow",
                           "ring-ding-ding-ding-dingeringeding"]

    def test_extensibility(self):
        """Verifica que se pueden agregar nuevos animales sin modificar el código existente"""
        from ocp_good import Communicable

        # Nuevo tipo de animal: Bird
        class Bird(Communicable):
            def communicate(self) -> str:
                return "tweet tweet"

        communication = CommunicationGood()
        bird = Bird()
        assert communication.communicate(bird) == "tweet tweet"


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
