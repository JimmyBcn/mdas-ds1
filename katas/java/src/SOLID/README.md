# 🎯 Principios SOLID

Ejemplos prácticos de los 5 principios SOLID de diseño orientado a objetos, diseñados para aprender en 20 minutos cada uno.

## 📚 Contenido

### 1. SRP - Single Responsibility Principle

**Carpeta:** `srp/`  
**Concepto:** Una clase debe tener una única razón para cambiar

- ❌ **Mal ejemplo:** Clase `User` maneja datos, emails y archivos
- ✅ **Buen ejemplo:** Separado en `User`, `EmailService`, `UserFileManager`

### 2. OCP - Open/Closed Principle

**Carpeta:** `ocp/`  
**Concepto:** Abierto a extensión, cerrado a modificación

- ❌ **Mal ejemplo:** Función con switch que debe modificarse para cada nuevo animal
- ✅ **Buen ejemplo:** Interfaz `Communicable` permite nuevos animales sin modificar código

### 3. LSP - Liskov Substitution Principle

**Carpeta:** `lsp/`  
**Concepto:** Los subtipos deben ser sustituibles por sus tipos base

- ❌ **Mal ejemplo:** `Penguin` hereda de `Bird` pero no puede volar
- ✅ **Buen ejemplo:** Jerarquía correcta con interfaces `Flyable` y `Swimmable`

### 4. ISP - Interface Segregation Principle

**Carpeta:** `isp/`  
**Concepto:** Los clientes no deben depender de interfaces que no usan

- ❌ **Mal ejemplo:** Interfaz grande `Worker` obliga a implementar métodos no usados
- ✅ **Buen ejemplo:** Interfaces específicas (`Workable`, `Eatable`, `Sleepable`)

### 5. DIP - Dependency Inversion Principle

**Carpeta:** `dip/`  
**Concepto:** Depender de abstracciones, no de implementaciones concretas

- ❌ **Mal ejemplo:** `OrderService` depende directamente de `MySQLDatabase`
- ✅ **Buen ejemplo:** `OrderService` depende de interfaz `Database`

## 🚀 Cómo usar este material

Cada carpeta incluye:

- `README.md` - Guía de aprendizaje
- `*Bad.java` - Violación del principio
- `*Good.java` - Cumplimiento del principio
- `*Exercise.java` - Práctica

### Ejecutar los Ejemplos

```bash
javac SOLID/srp/SrpGood.java
java SOLID.srp.SrpGood

javac SOLID/ocp/OcpGood.java
java SOLID.ocp.OcpGood
```

## 📋 Checklist de Aprendizaje

- [ ] **SRP**: ¿Puedo identificar responsabilidades múltiples en una clase?
- [ ] **OCP**: ¿Puedo extender funcionalidad sin modificar código existente?
- [ ] **LSP**: ¿Puedo diseñar jerarquías de herencia correctas?
- [ ] **ISP**: ¿Puedo dividir interfaces grandes en específicas?
- [ ] **DIP**: ¿Puedo depender de abstracciones en vez de concretos?

## 🎯 Resumen de Principios

| Principio | Pregunta Clave                                         | Señal de Violación                       | Solución                           |
| --------- | ------------------------------------------------------ | ---------------------------------------- | ---------------------------------- |
| **SRP**   | ¿Cuántas razones tiene esta clase para cambiar?        | Clase con muchos métodos no relacionados | Separar en clases enfocadas        |
| **OCP**   | ¿Puedo agregar funcionalidad sin modificar código?     | Switch/if-else para tipos                | Usar interfaces y polimorfismo     |
| **LSP**   | ¿Puedo sustituir el padre por el hijo sin problemas?   | Hijo cambia comportamiento del padre     | Revisar jerarquía de herencia      |
| **ISP**   | ¿Esta interfaz obliga a implementar métodos no usados? | Métodos vacíos o que lanzan errores      | Dividir en interfaces específicas  |
| **DIP**   | ¿Dependo de abstracciones o de concretos?              | `new ConcreteClass()` en constructores   | Inyectar dependencias por interfaz |

## 📖 Orden de estudio recomendado

1. **SRP** - El más intuitivo
2. **OCP** - Usa interfaces para extender
3. **DIP** - Invierte dependencias con interfaces
4. **ISP** - Interfaces específicas
5. **LSP** - El más sutil
