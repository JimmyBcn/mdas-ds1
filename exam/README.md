# 📝 ENUNCIADO DEL EJERCICIO

## Sistema de Procesamiento de Documentos Empresariales

**Asignatura**: Diseño de Software I
**Tiempo**: 150 minutos
**Modalidad**: Individual

---

## 📤 Instrucciones de entrega

- Sigue las instrucciones en ENTREGA.md

Alternativamente:

- Crea un .zip de la carpeta `exam`
- Adjunta el contenido en un correo a `vinyes@outlook.com`

---

## Criterios de evaluación

- Legibilidad y código limpio
- Aplicación correcta de OOP y SOLID.
- Uso adecuado de los patrones solicitados: **Factory**, **Strategy** y **Facade**.

---

## 🎯 Objetivos de implemantación

La evaluación del ejercicio tomará en cuenta la aplicación de los siguientes conceptos:

- **Clean Code & OOP**: Nombres descriptivos, encapsulación, polimorfismo
- **SRP**: Cada clase una responsabilidad
- **OCP**: Sistema extensible sin modificar código existente
- **Herencia**: Clase base con validaciones comunes + clases específicas
- **Simple Factory**: Encapsular creación de procesadores
- **Strategy**: Algoritmos de procesamiento intercambiables (IDocumentProcessor)
- **Facade**: Interfaz simplificada al sistema completo
- **Gestión de errores**

---

## 🚫 NO Permitido

- Copiar código de compañeros
- Usar soluciones completas de internet
- Usar inteligencia artificial para generar código
- Compartir código durante el examen

---

## 📋 Descripción del Problema

Una empresa de consultoría necesita un sistema para procesar diferentes tipos de documentos que reciben de sus clientes:

- **Contratos Legales** (archivos PDF)
- **Reportes Financieros** (archivos Excel)
- **Propuestas Comerciales** (archivos Word/PDF)

Cada tipo de documento requiere:

1. **Validación** según reglas específicas
2. **Procesamiento** según su tipo
3. **Generación de reporte** con el resultado

---

## 🎯 Requisitos Funcionales

### 1. Validación de Documentos

Cada tipo de documento debe tener su propio validador que realice:

**Validaciones Base (comunes a todos):**

- Tamaño del archivo
- Extensión del archivo
- Nombre del archivo no vacío

**Validaciones Específicas por tipo:**

- **Contratos**:

  - Máximo 3 MB
  - Solo archivos .pdf
  - Metadatos requeridos: `author`, `version`

- **Reportes Financieros**:

  - Máximo 4 MB
  - Archivos .xlsx o .xls
  - Metadatos requeridos: `fiscalYear`, `department`

- **Propuestas**:
  - Máximo 5 MB
  - Archivos .pdf o .docx
  - Metadatos requeridos: `proposalDate`, `client`

### 2. Procesamiento de Documentos

Cada tipo de documento debe tener su propio procesador que:

- Registre que está procesando el documento
- Procese el documento\*
- Retorne un resultado exitoso con la información del documento

**IMPORTANTE**: \*El procesamiento debe ser **simple** (no implementar lógica compleja de extracción de datos). El foco del ejercicio está en el diseño y los patrones, no en la funcionalidad.

- puede ser un simple `true` or `false` dependiendo de si han habido errores
- puede ser un mensaje con el resultado del proceso
- algo un poco más elaborado, por ejemplo:

```typescript
export class ContractProcessor implements IDocumentProcessor {
  process(document: Contract): ProcessResult {
    const messages: string[] = [];
    const extractedData: Record<string, any> = {};

    messages.push("Contrato procesado exitosamente");
    extractedData["documentType"] = "Contrato Legal";
    extractedData["fileName"] = document.getFileName();

    return new ProcessResult(true, extractedData, messages);
  }
}
```

### 3. Interfaz Simplificada

El sistema debe proporcionar una interfaz simple (Facade) que permita:

- Procesar un documento
- Obtener un reporte del resultado
- No requerir que el usuario conozca la complejidad interna

---

## 💡 Ejemplo de Uso Esperado

```typescript
const facade = new DocumentProcessingFacade();

// Procesar un contrato
const result = facade.processDocument("contrato_servicios.pdf", "Contract", {
  author: "Juan Pérez",
  version: "1.0",
});
console.log(result.getReport());
```

El ejercicio incorpora ya el método `main` como ejemplo de punto de entrada a la aplicación y como pista inicial para su posible implementación.

## Notas Importantes

- **NO implementes lectura real de archivos** - Este ejercicio se enfoca en patrones de diseño
- **Procesamiento simple** - Solo registrar y retornar éxito, NO lógica compleja
- **Enfócate en la arquitectura** - Lo importante son los patrones y principios SOLID
- **Un archivo por clase/tipo** - Mantén el código organizado y modular

---
