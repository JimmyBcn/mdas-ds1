"""
Tests para el concepto de Herencia en OOP
Valida tanto las implementaciones malas como las buenas
"""

import pytest
from inheritance_bad import Dog as DogBad, Cat as CatBad
from inheritance_good import Dog as DogGood, Cat as CatGood


class TestInheritanceBad:
    """Tests para la implementación con mala herencia (código duplicado)"""

    def test_dog_eat(self):
        """Verifica que el perro puede comer"""
        dog = DogBad("Firulais")
        assert dog.eat() == "Firulais está comiendo"

    def test_dog_sleep(self):
        """Verifica que el perro puede dormir"""
        dog = DogBad("Firulais")
        assert dog.sleep() == "Firulais está durmiendo"

    def test_dog_bark(self):
        """Verifica que el perro puede ladrar"""
        dog = DogBad("Firulais")
        assert dog.bark() == "Firulais dice: Guau!"

    def test_cat_eat(self):
        """Verifica que el gato puede comer"""
        cat = CatBad("Michi")
        assert cat.eat() == "Michi está comiendo"

    def test_cat_sleep(self):
        """Verifica que el gato puede dormir"""
        cat = CatBad("Michi")
        assert cat.sleep() == "Michi está durmiendo"

    def test_cat_meow(self):
        """Verifica que el gato puede maullar"""
        cat = CatBad("Michi")
        assert cat.meow() == "Michi dice: Miau!"


class TestInheritanceGood:
    """Tests para la implementación con buena herencia"""

    def test_dog_inherited_eat(self):
        """Verifica que el perro hereda el método eat de Animal"""
        dog = DogGood("Firulais")
        assert dog.eat() == "Firulais está comiendo"

    def test_dog_inherited_sleep(self):
        """Verifica que el perro hereda el método sleep de Animal"""
        dog = DogGood("Firulais")
        assert dog.sleep() == "Firulais está durmiendo"

    def test_dog_specific_bark(self):
        """Verifica que el perro tiene su método específico bark"""
        dog = DogGood("Firulais")
        assert dog.bark() == "Firulais dice: Guau!"

    def test_cat_inherited_eat(self):
        """Verifica que el gato hereda el método eat de Animal"""
        cat = CatGood("Michi")
        assert cat.eat() == "Michi está comiendo"

    def test_cat_inherited_sleep(self):
        """Verifica que el gato hereda el método sleep de Animal"""
        cat = CatGood("Michi")
        assert cat.sleep() == "Michi está durmiendo"

    def test_cat_specific_meow(self):
        """Verifica que el gato tiene su método específico meow"""
        cat = CatGood("Michi")
        assert cat.meow() == "Michi dice: Miau!"

    def test_inheritance_hierarchy(self):
        """Verifica la jerarquía de herencia"""
        from inheritance_good import Animal

        dog = DogGood("Firulais")
        cat = CatGood("Michi")

        # Ambos son instancias de Animal
        assert isinstance(dog, Animal)
        assert isinstance(cat, Animal)


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
