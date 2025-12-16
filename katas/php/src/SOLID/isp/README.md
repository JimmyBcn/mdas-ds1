# Principio de Segregación de Interfaces (ISP)

## 🎯 Definición del Principio

> "Los clientes no deberían verse forzados a depender de interfaces que no usan"

Las interfaces deben ser **pequeñas y específicas**, no grandes y generales.

## 📖 El problema (isp-bad.php)

La interfaz `Worker` fuerza a `Robot` a implementar métodos que no necesita:

```php
interface Worker {
    public function work();
    public function eat();
    public function sleep();
}

class Robot implements Worker {
    public function work() { return "Trabajando"; }

    // ❌ Forzado a implementar métodos que no usa
    public function eat() {
        throw new Exception("¡Los robots no comen!");
    }

    public function sleep() {
        throw new Exception("¡Los robots no duermen!");
    }
}
```

### ¿Por qué es esto malo?

- Implementaciones vacías o con excepciones
- Viola el principio de responsabilidad única
- Dificulta el mantenimiento
- Acoplamiento innecesario

## ✅ La solución (isp-good.php)

Dividir en **interfaces pequeñas y específicas**:

```php
interface Workable {
    public function work();
}

interface Eatable {
    public function eat();
}

interface Sleepable {
    public function sleep();
}

class Robot implements Workable {
    public function work() {
        return "Robot trabajando";
    }
    // ✅ ¡Solo implementa lo que necesita!
}
```

### ¿Por qué es esto mejor?

- **Interfaces específicas**: Cada clase implementa solo lo necesario
- **Sin implementaciones vacías**: No hay métodos dummy
- **Flexible**: Fácil combinar interfaces según necesidad
- **Desacoplado**: Dependencias mínimas

## 🔧 Tu tarea

1. **Estudia** `isp-bad.php` - identifica métodos forzados innecesarios
2. **Implementa** tu solución en `isp-exercise.php` antes de ver la propuesta
3. **Observa** `isp-good.php` y compara con tu solución

## 🎯 Puntos clave

- Interfaces pequeñas y específicas
- Clases implementan solo lo que usan
- Sin métodos dummy o excepciones
- Fácil combinación de múltiples interfaces

## ⏱️ Verificación rápida

Pregúntate:

- ¿Hay implementaciones vacías o con excepciones?
- ¿La interfaz es demasiado grande?
- ¿Puedo dividirla en interfaces más pequeñas?
