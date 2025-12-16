# Principio de Segregación de Interfaces (ISP) - Ejemplo

## 🎯 Objetivos de aprendizaje

- Entender qué hace que una interfaz sea "ancha" o "sobrecargada"
- Aprender a identificar implementaciones forzadas que no deberían existir
- Practicar la división de interfaces grandes en otras más pequeñas y enfocadas
- Ver cómo ISP mejora la seguridad en tiempo de compilación

## 📋 El problema: Interfaces anchas

**Regla:** _Ningún cliente debería ser forzado a implementar métodos que no usa_

### ¿Qué está mal aquí? 🚫

```typescript
// Interfaz ancha - fuerza a TODOS los dispositivos a implementar TODOS los métodos
interface Device {
  print(document: string): string;
  scan(): string;
}

// ❌ Impresora simple forzada a implementar scan()
class Printer implements Device {
  public print(document: string): string {
    return `Imprimiendo documento: ${document}`;
  }

  // ❌ Forzada a implementar scan() lanzando error
  public scan(): string {
    throw new Error("¡Esta impresora no puede escanear!");
  }
}
```

**Problemas:**

- La clase `Printer` se ve forzada a implementar `scan()` aunque no escanea
- La clase `Scanner` se ve forzada a implementar `print()` aunque no imprime
- Deben lanzar errores en métodos que no tienen sentido
- Viola el principio de interfaces limpias y enfocadas

## 🔧 Tu tarea

1. **Estudia** `isp-bad.ts` - identifica la interfaz "ancha"
2. **Implementa** tu solución en `isp-exercise.ts` antes de ver la propuesta
3. **Observa** `isp-good.ts` y compara con tu solución

## 🎯 Puntos clave

- No fuerces implementaciones innecesarias (métodos que lanzan errores)
- Divide interfaces grandes en específicas (`Printable`, `Scannable`)
- Cada clase implementa solo lo que necesita
- Los dispositivos multifunción pueden implementar múltiples interfaces
- Mejora limpieza y seguridad del código

## 💡 Solución propuesta

```typescript
// ✅ Interfaces segregadas (separadas)
interface Printable {
  print(document: string): string;
}

interface Scannable {
  scan(): string;
}

// ✅ Cada clase implementa solo lo que necesita
class SimplePrinter implements Printable {
  public print(document: string): string {
    return `Imprimiendo documento: ${document}`;
  }
}

class AdvancedPrinter implements Printable, Scannable {
  public print(document: string): string {
    return `Imprimiendo documento: ${document}`;
  }

  public scan(): string {
    return "Escaneando documento...";
  }
}
```

## ⏱️ Verificación rápida

Pregúntate:

- ¿Esta interfaz obliga a implementar métodos no usados?
- ¿Puedo dividirla en interfaces más pequeñas?
- ¿Cada clase necesita todos estos métodos?

## 🧪 Ejecutar Tests

```bash
# Ejecutar tests para este concepto
npm test -- isp

# Ejecutar todos los tests
npm test

# Ejecutar en modo watch
npm run test:watch -- isp
```
