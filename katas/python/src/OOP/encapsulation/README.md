# OOP: Encapsulamiento - Ejemplo

## 🎯 Objetivos de aprendizaje

- Entender qué es el encapsulamiento en OOP
- Proteger el estado interno de una clase
- Usar convenciones de Python (prefijo `_`) para atributos privados
- Implementar validación en métodos públicos

## 📋 El problema: Datos sin protección

**Concepto:** _El encapsulamiento protege los datos y controla cómo se modifican_

### ¿Qué está mal aquí? 🚫

```python
class BankAccount:
    def __init__(self, account_number: str, initial_balance: float):
        self.balance = initial_balance  # ❌ Cualquiera puede modificar
        self.account_number = account_number  # ❌ Puede ser cambiado

account = BankAccount("001", 1000)

# ❌ Violaciones sin control
account.balance = -5000  # ¡Balance negativo!
account.account_number = "999"  # ¡Cambiar número de cuenta!
account.withdraw(99999)  # ¡Retiro sin validar fondos!
```

**Problemas:**

- **Sin validación**: Datos pueden ser inválidos (balance negativo)
- **Sin protección**: Estado interno puede ser corrupto
- **Sin control**: No hay reglas de negocio aplicadas
- **Inseguro**: Datos críticos están expuestos

## 🔧 Tu tarea

1. **Estudia** `encapsulation_bad.py` - identifica datos sin protección
2. **Implementa** tu solución en `encapsulation_exercise.py` antes de ver la propuesta
3. **Observa** `encapsulation_good.py` y compara con tu solución

## 🎯 Puntos clave

- Datos privados protegidos (prefijo `_`)
- Acceso controlado con getters
- Validación en métodos públicos
- Estado interno siempre válido

## ⏱️ Verificación rápida

Pregúntate:

- ¿Qué propiedades son públicas sin razón?
- ¿Cómo prevenir valores inválidos?
- ¿Qué validaciones necesito?
