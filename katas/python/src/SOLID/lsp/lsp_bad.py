# Violación del LSP: La subclase no puede sustituir a la clase base sin romper el comportamiento
# ❌ Problema: Penguin hereda de Bird pero no puede volar, rompiendo las expectativas


# ❌ Clase base que asume que todas las aves vuelan
class Bird:
    def __init__(self, name: str):
        self.name = name

    # ❌ Método que asume que todas las aves pueden volar
    def fly(self) -> str:
        return f"{self.name} está volando"

    def eat(self) -> str:
        return f"{self.name} está comiendo"


# ✅ Eagle puede volar - funciona bien
class Eagle(Bird):
    def fly(self) -> str:
        return f"{self.name} vuela alto en el cielo"


# ❌ Penguin NO puede volar - ¡viola LSP!
class Penguin(Bird):
    def fly(self) -> str:
        # ❌ Debe lanzar error o comportarse diferente a la clase base
        raise Exception(f"{self.name} no puede volar - ¡es un pingüino!")

    def swim(self) -> str:
        return f"{self.name} está nadando"


# ❌ Función que espera que TODAS las aves puedan volar
def make_bird_fly(bird: Bird) -> str:
    return bird.fly()  # ❌ ¡Falla con Penguin!


# Uso que demuestra la violación
if __name__ == "__main__":
    print("=== Violación del LSP ===")

    eagle = Eagle("Águila Real")
    penguin = Penguin("Pingüino Emperador")

    print(make_bird_fly(eagle))  # ✅ Funciona

    try:
        print(make_bird_fly(penguin))  # ❌ ¡Lanza error! Viola LSP
    except Exception as error:
        print(f"ERROR: {error}")

    # ❌ El código debe verificar el tipo antes de usar
    birds = [eagle, penguin]
    for bird in birds:
        print(bird.eat())  # ✅ Funciona para ambos

        # ❌ Solución temporal incorrecta: verificar tipo
        if isinstance(bird, Penguin):
            print(bird.swim())
        else:
            print(bird.fly())

# ❌ Problemas:
# 1. Penguin no puede sustituir a Bird sin romper el código
# 2. Necesitamos verificaciones de tipo (isinstance)
# 3. El polimorfismo no funciona correctamente
# 4. Violación clara del Liskov Substitution Principle
