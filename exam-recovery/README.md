# 📝 ENUNCIADO DEL EJERCICIO - EXAMEN DE RECUPERACIÓN

## Sistema de Gestión de Paquetes de Envío

**Asignatura**: Diseño de Software I
**Tiempo**: 150 minutos
**Modalidad**: Individual

---

## Criterios de evaluación

- Legibilidad y código limpio
- Aplicación correcta de OOP y SOLID
- Uso adecuado de los patrones de diseño

**Aunque el ejercicio está propuesto con uso de Typescript, puede completarse en cualquier lenguaje de programación**

No es necesario que el entregable pueda ejecutarse.

---

## 🎯 Objetivos del Examen

Este examen evalúa:

- ✅ **Clean Code & OOP**: Nombres descriptivos, encapsulación, polimorfismo
- ✅ **SRP**: Cada clase una responsabilidad
- ✅ **OCP**: Sistema extensible sin modificar código existente
- ✅ **Herencia**: Clase base con validaciones comunes + clases específicas
- ✅ **Simple Factory**: Encapsular creación de procesadores
- ✅ **Strategy**: Algoritmos de procesamiento intercambiables
- ✅ **Facade**: Interfaz simplificada al sistema completo
- ✅ **Gestión de errores**: Excepciones personalizadas

---

## 🚫 NO Permitido

- Copiar código de compañeros
- Usar soluciones completas de internet
- Usar inteligencia artificial para generar código
- Compartir código durante el examen

---

## 📋 Descripción del Problema

Una empresa de logística necesita un sistema para gestionar diferentes tipos de paquetes que reciben para enviar a distintos destinos:

- **Paquetes Estándar** (envío terrestre nacional)
- **Paquetes Express** (envío urgente 24-48h)
- **Paquetes Internacionales** (envío fuera del país)

Cada tipo de paquete requiere:

1. **Validación** según reglas específicas
2. **Procesamiento** según su tipo
3. **Generación de reporte** con el resultado

---

## 🎯 Requisitos Funcionales

### 1. Validación de Paquetes

Cada tipo de paquete debe tener su propio validador que realice:

**Validaciones Base (comunes a todos):**

- Peso del paquete
- Dimensiones del paquete
- Código de tracking no vacío

**Validaciones Específicas por tipo:**

- **Paquetes Estándar**:
  - Máximo 25 kg
  - Dimensiones máximas: 100 x 100 x 100 cm
  - Metadatos requeridos: `senderName`, `destination`

- **Paquetes Express**:
  - Máximo 15 kg
  - Dimensiones máximas: 80 x 80 x 80 cm
  - Metadatos requeridos: `urgencyLevel`, `deliveryTime`

- **Paquetes Internacionales**:
  - Máximo 30 kg
  - Dimensiones máximas: 120 x 120 x 120 cm
  - Metadatos requeridos: `customsDeclaration`, `destinationCountry`

### 2. Procesamiento de Paquetes

Cada tipo de paquete debe tener su propio procesador que:

- Registre que está procesando el paquete
- Procese el paquete
- Retorne un resultado exitoso con la información del paquete

**IMPORTANTE**: El procesamiento debe ser **simple** (no implementar lógica compleja de cálculo de rutas o costos). El foco del ejercicio está en el diseño y los patrones, no en la funcionalidad.

- puede ser un simple `true` o `false` dependiendo de si ha habido errores
- puede ser un mensaje con el resultado del proceso
- algo un poco más elaborado, por ejemplo:

```typescript
export class StandardPackageProcessor implements IPackageProcessor {
  process(pkg: StandardPackage): ProcessResult {
    const messages: string[] = [];
    const extractedData: Record<string, any> = {};

    messages.push("Paquete estándar procesado exitosamente");
    extractedData["packageType"] = "Paquete Estándar";
    extractedData["trackingCode"] = pkg.getTrackingCode();

    return new ProcessResult(true, extractedData, messages);
  }
}
```

### 3. Interfaz Simplificada

El sistema debe proporcionar una interfaz simple (Facade) que permita:

- Procesar un paquete
- Obtener un reporte del resultado
- No requerir que el usuario conozca la complejidad interna

---

## 💡 Ejemplo de Uso Esperado

```typescript
const facade = new PackageProcessingFacade();

// Procesar un paquete estándar
const result = facade.processPackage({
  ref: "PKG-2024-001",
  type: "StandardPackage",
  weigth: 10,
  size: {
    width: 50,
    height: 50,
    depth: 50,
  },
  senderName: "María García",
  destination: "Madrid",
});

console.log(result.getReport());
```

El ejercicio incorpora ya el método `main` como ejemplo de punto de entrada a la aplicación y como pista inicial para su posible implementación.

## Notas Importantes

- **NO implementes sistema de envío real** - Este ejercicio se enfoca en patrones de diseño
- **Procesamiento simple** - Solo registrar y retornar éxito, NO lógica compleja
- **Enfócate en la arquitectura** - Lo importante son los patrones y principios SOLID
- **Un archivo por clase/tipo** - Mantén el código organizado y modular

---

## 🔧 Configuración del Proyecto (Typescript)

### Instalación

```bash
npm install
```

### Compilación

```bash
npm run build
```

### Ejecución

```bash
npm start
```

---

# 📦 Instrucciones de Entrega

## Opción 1: Pull Request en GitHub

1. Haz **Fork** del repositorio desde GitHub (botón superior derecho).
2. Clona tu fork:
   ```bash
   git clone https://github.com/<tu-usuario>/<nombre-repo>.git
   cd <nombre-repo>
   ```
3. Crea una rama nueva:
   ```bash
   git checkout -b exam-recovery
   ```
4. Realiza tus cambios, haz commit y push:
   ```bash
   git add .
   git commit -m "Examen de Recuperación - [Tu Nombre]"
   git push origin exam-recovery
   ```
5. Ve a tu fork en GitHub y crea un **Pull Request** hacia el repositorio original:
   - **Título**: "Examen de Recuperación - [Tu Nombre]"
   - **Descripción**: Breve explicación de tu implementación

---

## Opción 2: Entrega por correo

1. Comprime la carpeta `exam-recovery` en un archivo `.zip`
2. Envíalo por correo a `vinyes@outlook.com` o `jaume.vinyes@ext.salle.url.edu`
3. **Asunto**: "Examen de Recuperación - [Tu Nombre]"

---

**¡Buena suerte! 🚀**
