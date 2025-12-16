# Principio de Inversión de Dependencias (DIP)

## 🎯 Definición del Principio

> "Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones"

Depende de **abstracciones** (interfaces), no de **implementaciones concretas**.

## 📖 El problema (dip-bad.php)

`OrderService` (alto nivel) depende directamente de `MySQLDatabase` (bajo nivel):

```php
class MySQLDatabase {
    public function save($data) { ... }
}

class OrderService {
    private MySQLDatabase $database; // ❌ Acoplamiento fuerte

    public function __construct(MySQLDatabase $database) {
        $this->database = $database;
    }
}
```

### ¿Por qué es esto malo?

- Difícil cambiar de base de datos
- Imposible testear sin base de datos real
- Alto acoplamiento entre módulos
- Viola el principio abierto/cerrado

## ✅ La solución (dip-good.php)

Introducir **interfaz** de la que ambos dependen:

```php
interface Database {
    public function save($data);
}

class MySQLDatabase implements Database { ... }
class PostgreSQLDatabase implements Database { ... }

class OrderService {
    private Database $database; // ✅ Depende de abstracción

    public function __construct(Database $database) {
        $this->database = $database;
    }
}
```

### ¿Por qué es esto mejor?

- **Flexible**: Fácil intercambiar implementaciones
- **Testeable**: Usar mocks en pruebas
- **Desacoplado**: Módulos independientes
- **Extensible**: Agregar nuevas bases de datos sin modificar

## 🔧 Tu tarea

1. **Estudia** `dip-bad.php` - identifica dependencias concretas
2. **Implementa** tu solución en `dip-exercise.php` antes de ver la propuesta
3. **Observa** `dip-good.php` y compara con tu solución

## 🎯 Puntos clave

- Depende de abstracciones, no concreciones
- Usa interfaces o clases abstractas
- Inyección de dependencias
- Ambos niveles dependen de abstracción

## ⏱️ Verificación rápida

Pregúntate:

- ¿Dependo de clases concretas en lugar de interfaces?
- ¿Puedo cambiar fácilmente la implementación?
- ¿Puedo testear sin dependencias reales?
