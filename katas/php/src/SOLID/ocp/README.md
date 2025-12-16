# Principio Abierto/Cerrado (OCP)

## 🎯 Definición del Principio

> "Las entidades de software deben estar abiertas para extensión pero cerradas para modificación"

Debes poder **agregar nueva funcionalidad** sin **modificar el código existente**.

## 📖 El problema (ocp-bad.php)

La clase `Communication` debe modificarse cada vez que agregamos un nuevo animal:

```php
class Communication {
    public function communicate($animal) {
        if ($animal instanceof Dog) {
            return $animal->makeSound();
        } elseif ($animal instanceof Cat) {
            return $animal->makeSound();
        } elseif ($animal instanceof Fox) {
            return $animal->makeSound();
        }
        // ❌ Para agregar Cow, debo modificar ESTA clase
    }
}
```

### ¿Por qué es esto malo?

- Modificar código existente puede introducir bugs
- Viola el principio de responsabilidad única
- Difícil de escalar con muchos tipos
- El código se vuelve complejo y frágil

## ✅ La solución (ocp-good.php)

Usar **interfaces** para permitir extensión sin modificación:

```php
interface Communicable {
    public function communicate();
}

class Communication {
    public function communicate(Communicable $animal) {
        return $animal->communicate(); // ✅ No cambia nunca
    }
}

// ✅ Agregar nuevos animales sin tocar Communication
class Cow implements Communicable {
    public function communicate() {
        return "moo moo";
    }
}
```

### ¿Por qué es esto mejor?

- **Extensible**: Agregar nuevos tipos sin modificar código existente
- **Seguro**: Código probado no se toca
- **Escalable**: Fácil agregar muchos tipos nuevos
- **Mantenible**: Cambios localizados en nuevas clases

## 🔧 Tu tarea

1. **Estudia** `ocp-bad.php` - identifica dónde se modifica código existente
2. **Implementa** tu solución en `ocp-exercise.php` antes de ver la propuesta
3. **Observa** `ocp-good.php` y compara con tu solución

## 🎯 Puntos clave

- Abierto para extensión (nuevas clases)
- Cerrado para modificación (código existente intacto)
- Usa abstracciones (interfaces, clases abstractas)
- Polimorfismo en lugar de condicionales

## ⏱️ Verificación rápida

Pregúntate:

- ¿Debo modificar código existente para agregar funcionalidad?
- ¿Puedo usar una interfaz o clase abstracta?
- ¿Los condicionales verifican tipos concretos?
