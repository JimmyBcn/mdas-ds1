# Principio de Sustitución de Liskov (LSP)

## 🎯 Definición del Principio

> "Los objetos de una clase derivada deben poder sustituir objetos de la clase base sin romper el programa"

Las clases hijas deben **cumplir el contrato** de la clase padre.

## 📖 El problema (lsp-bad.php)

`Penguin` hereda de `Bird` pero rompe la expectativa de que todos los pájaros pueden volar:

```php
class Bird {
    public function fly() {
        return "¡Volando!";
    }
}

class Penguin extends Bird {
    public function fly() {
        throw new Exception("¡Los pingüinos no pueden volar!");
    }
}

function makeBirdFly(Bird $bird) {
    return $bird->fly(); // ❌ ¡Falla con Penguin!
}
```

### ¿Por qué es esto malo?

- Viola la expectativa del tipo base
- Lanza excepciones inesperadas
- Código cliente debe saber sobre tipos concretos
- No se puede usar polimorfismo de forma segura

## ✅ La solución (lsp-good.php)

Usar **jerarquías apropiadas** e **interfaces** para capacidades:

```php
abstract class Animal {
    abstract public function eat();
}

interface Flyable {
    public function fly();
}

class Eagle extends Animal implements Flyable {
    public function fly() {
        return "¡Águila volando!";
    }
}

class Penguin extends Animal {
    // ✅ No implementa Flyable
}
```

### ¿Por qué es esto mejor?

- **Contratos correctos**: Solo promete lo que puede cumplir
- **Seguridad de tipos**: El compilador previene errores
- **Polimorfismo seguro**: Sustitución funciona correctamente
- **Diseño realista**: Refleja el comportamiento real

## 🔧 Tu tarea

1. **Estudia** `lsp-bad.php` - identifica dónde se rompe la sustitución
2. **Implementa** tu solución en `lsp-exercise.php` antes de ver la propuesta
3. **Observa** `lsp-good.php` y compara con tu solución

## 🎯 Puntos clave

- Clases derivadas cumplen el contrato del padre
- No lances excepciones en métodos heredados
- Usa interfaces para capacidades opcionales
- Jerarquías que reflejan la realidad

## ⏱️ Verificación rápida

Pregúntate:

- ¿La clase hija puede sustituir a la padre sin errores?
- ¿Hay métodos heredados que no tienen sentido?
- ¿Debería usar interfaces en lugar de herencia?
