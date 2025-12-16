# Gestión de Errores

## 📋 Descripción

Ejercicio para practicar la **gestión adecuada de errores** en una aplicación TypeScript con arquitectura en capas (3 niveles de abstracción).

## 🎯 Objetivos

1. Comprender la propagación de errores a través de las capas
2. Implementar gestión de errores usando try-catch
3. Crear errores personalizados heredando de `AppError`
4. Transformar errores técnicos en errores de negocio cuando sea apropiado
5. Proporcionar respuestas útiles sin exponer detalles internos

## 🔨 Tarea

### 1. Analiza el código sin gestión

Revisa `no-managed-exceptions/` y observa cómo los errores se propagan sin control.

### 2. Crea tipos de errores específicos

En la carpeta `errors/`:

- modifica `AppError` para que incluya más propiedades que ayuden a la gestión de errores
  - errorCode
  - executionContext
- crea clases que hereden de `AppError`:
  - Errores de validación
  - Errores de base de datos
  - Errores de recursos no encontrados
  - Errores de red/comunicación externa
  - Otros que consideres necesarios

### 3. Implementa gestión en `managed-exceptions/`

#### BusinessLayer.ts

- Captura errores de la capa de datos
- Transforma errores cuando aporten contexto de negocio
- Decide qué errores propagar y cuáles gestionar

#### PresentationLayer.ts

- Captura TODOS los errores
- Convierte errores en respuestas JSON apropiadas
- Asigna códigos de estado HTTP correctos
- NO expongas detalles internos al usuario
- Registra errores para debugging

## ✅ Criterios de Éxito

- [ ] No hay errores sin gestionar que rompan la aplicación
- [ ] Los errores personalizados heredan de `AppError`
- [ ] Mensajes útiles al usuario sin exponer detalles técnicos
- [ ] Códigos HTTP apropiados según el tipo de error
- [ ] Logging de errores implementado

## Ejecutar código

- cd .\katas\typescript\src\ErrorHandling\no-managed-exceptions
- npx ts-node .\PresentationLayer.ts

---

**Tip:** Analiza cada método y determina qué errores puede lanzar. Gestiónalos de manera apropiada según el nivel de abstracción.
