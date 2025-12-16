# 🎓 Clean Code, OOP, Principios SOLID y Patrones de Diseño en Python

Este proyecto presenta ejemplos prácticos de Clean Code, OOP, Principios SOLID y Patrones de Diseño usando Python. Cada concepto incluye ejemplos "malos" (violando principios) y "buenos" (siguiendo buenas prácticas) para facilitar el aprendizaje.

## 📚 Contenido del proyecto

### ✨ 1. Clean Code (`src/CleanCode/`)

Principios de código limpio y legible:

- **Naming** - Nombrado descriptivo (sin magic numbers, encodings)
- **Functions** - Funciones pequeñas y enfocadas (una responsabilidad)
- **Format** - Formato horizontal y vertical consistente

### 🎯 2. Programación Orientada a Objetos (`src/OOP/`)

Los 4 pilares fundamentales de OOP:

- **Abstraction** - Abstracción (ocultar detalles de implementación)
- **Encapsulation** - Encapsulamiento (proteger el estado interno)
- **Inheritance** - Herencia (reutilización de código)
- **Polymorphism** - Polimorfismo (comportamiento específico sin condicionales)

### 🔷 3. Principios SOLID (`src/SOLID/`)

Los 5 principios fundamentales de diseño orientado a objetos:

- **S** - Single Responsibility Principle (SRP) - Responsabilidad Única
- **O** - Open/Closed Principle (OCP) - Abierto/Cerrado
- **L** - Liskov Substitution Principle (LSP) - Sustitución de Liskov
- **I** - Interface Segregation Principle (ISP) - Segregación de Interfaces
- **D** - Dependency Inversion Principle (DIP) - Inversión de Dependencias

### 🏗️ 4. Patrones de Diseño (`src/Patterns/`)

Soluciones probadas para problemas comunes de diseño:

- **Factory** - Patrón creacional para creación de objetos
- **Builder** - Patrón creacional para construcción compleja (Pizza)
- **Adapter** - Patrón estructural para compatibilidad de interfaces
- **Strategy** - Patrón de comportamiento para selección de algoritmos

## 🚀 Preparativos

### Prerequisitos - Instalación desde cero

#### 1. Instalar Python

**Windows:**

```bash
# Opción A: Usando Chocolatey (recomendado)
choco install python -y

# Opción B: Descarga manual desde:
# https://www.python.org/downloads/
# IMPORTANTE: Marcar "Add Python to PATH" durante la instalación
```

**Linux/macOS:**

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install python3 python3-pip python3-venv -y

# macOS (Homebrew)
brew install python3
```

**Verificar instalación:**

```bash
python --version   # o python3 --version
# Debe mostrar 3.10 o mayor
pip --version      # Debe estar disponible
```

#### 2. Configurar entorno virtual e instalar dependencias

```bash
# Navegar a la carpeta del proyecto
cd katas/python

# Crear entorno virtual (recomendado)
python -m venv venv

# Activar entorno virtual
# Windows:
venv\Scripts\activate
# Linux/macOS:
source venv/bin/activate

# Instalar pytest y dependencias
pip install pytest

# Verificar instalación
pytest --version
```

venv\Scripts\activate

# Linux/Mac:

source venv/bin/activate

# No se requieren paquetes adicionales

````

### Ejecutar Ejemplos

```bash
# Ejecutar cualquier archivo
python src/CleanCode/naming/naming_bad.py
python3 src/SOLID/srp/srp_good.py
python src/Patterns/factory/factory_good.py
````

### Ejemplo Completo

```bash
# 1. Navegar a la carpeta y activar entorno virtual
cd katas/python
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows

# 2. Ejecutar ejemplo malo
python src/SOLID/dip/dip_bad.py

# 3. Modificar el ejercicio
code src/SOLID/dip/dip_exercise.py

# 4. Ejecutar tu solución
python src/SOLID/dip/dip_exercise.py

# 5. Ver la solución
python src/SOLID/dip/dip_good.py

# 6. Desactivar entorno virtual cuando termines
deactivate
```

## 🧪 Tests Unitarios

```bash
pytest                              # Todos los tests
pytest src/SOLID/ -v                # Tests de una categoría
pytest src/SOLID/srp/test_srp.py    # Test específico
pytest --cov=. --cov-report=html    # Con cobertura
```

## 🎯 Formato de aprendizaje (20 minutos por concepto)

Cada carpeta incluye:

1. **README.md** - Guía de aprendizaje
2. **ejemplo_bad.py** - Código que viola el principio
3. **ejemplo_exercise.py** - Archivo para tu práctica
4. **ejemplo_good.py** - Código que sigue el principio

### Cómo estudiar cada concepto

1. Lee el README del concepto
2. Ejecuta el ejemplo malo: `python src/.../ejemplo_bad.py`
3. Refactoriza en el archivo exercise
4. Ejecuta tu solución: `python src/.../ejemplo_exercise.py`
5. Compara con el ejemplo bueno: `python src/.../ejemplo_good.py`

---

## 🔍 Beneficios demostrados

### ✅ Clean Code:

- **Legibilidad**: Código fácil de entender
- **Menos Bugs**: Nombres claros reducen errores
- **Colaboración**: Otros desarrolladores entienden rápidamente
- **Mantenimiento**: Cambios futuros más simples

### ✅ OOP:

- **Abstracción**: Interfaces simples, complejidad oculta
- **Encapsulamiento**: Datos protegidos y validados
- **Herencia**: Código compartido, menos duplicación
- **Polimorfismo**: Extensible sin modificar código existente

### ✅ SOLID:

- **Mantenibilidad**: Fácil de modificar y extender
- **Testabilidad**: Clases pueden probarse aisladamente
- **Flexibilidad**: Código se adapta a cambios
- **Legibilidad**: Separación clara de responsabilidades
- **Reutilización**: Componentes reutilizables

### ✅ Patrones de Diseño:

- **Reutilización**: Soluciones probadas a problemas comunes
- **Comunicación**: Vocabulario compartido entre desarrolladores
- **Mejores Prácticas**: Enfoques probados en el tiempo
- **Flexibilidad**: Modificar comportamiento sin cambiar estructura
- **Mantenibilidad**: Código bien organizado y predecible

## 🔧 Solución de Problemas Comunes

**Problema:** `ModuleNotFoundError: No module named 'pytest'`
**Solución:** `pip install pytest`

**Problema:** Tests no se descubren
**Solución:** Asegurar que archivos empiezan con `test_` y funciones con `test_`

**Problema:** `ImportError` al ejecutar tests
**Solución:** Verificar que los archivos están en el mismo directorio o ajustar el PYTHONPATH

**Problema:** Virtual environment no se activa
**Solución:**

- Windows: `venv\Scripts\activate`
- Linux/Mac: `source venv/bin/activate`

## 🎓 Ruta de Aprendizaje Recomendada

1. **Clean Code** (60 minutos)

   - naming → functions → format

2. **OOP** (80 minutos)

   - abstraction → encapsulation → inheritance → polymorphism

3. **SOLID** (100 minutos)

   - srp → ocp → dip → isp → lsp

4. **Patterns** (80 minutos)
   - factory → strategy → builder → adapter

## 🛠️ Comandos Útiles

```bash
# Ejecutar un ejemplo específico
python src/CleanCode/naming/naming_good.py

# Ejecutar tests con verbose y mostrar prints
pytest -v -s

# Ejecutar tests y generar reporte HTML de coverage
pytest --cov=. --cov-report=html
# Abre htmlcov/index.html en el navegador

# Ejecutar solo tests que fallaron la última vez
pytest --lf

# Ejecutar hasta el primer fallo
pytest -x

# Generar reporte JUnit XML
pytest --junitxml=report.xml
```

## 📚 Recursos Adicionales

### Documentación de Frameworks

- **pytest**: https://docs.pytest.org/
- **Python**: https://docs.python.org/3/

### Tutoriales

- pytest: https://docs.pytest.org/en/stable/getting-started.html
- Python Testing: https://realpython.com/pytest-python-testing/

### Buenas Prácticas de Testing

- Arrange-Act-Assert (AAA) pattern
- Tests independientes y aislados
- Un concepto por test
- Nombres descriptivos
- Setup y Teardown cuando sea necesario

### Libros y Recursos

- **Clean Code (libro)**: Robert C. Martin
- **Design Patterns**: Gang of Four
- **PEP 8**: https://peps.python.org/pep-0008/ (Guía de estilo)

## 🐍 Características de Python Utilizadas

- **Type Hints**: Anotaciones de tipo para mejor legibilidad
- **Dataclasses**: Para clases simples de datos
- **ABC (Abstract Base Classes)**: Para clases abstractas
- **Properties**: Para encapsulamiento elegante
- **Duck Typing**: Aprovechando el polimorfismo de Python
- **List/Dict Comprehensions**: Para código más limpio

---

**¡Disfruta aprendiendo Python con buenas prácticas!** 🐍
