# Format - Formato Consistente

Aprende a formatear código para máxima legibilidad.

## 🎯 Objetivo

Aplicar formato horizontal y vertical consistente al código.

## 📋 Problemas Comunes

### ❌ Mal Formato

```java
public Product find(int id,int q,double d){Product p=null;for(Product x:products){if(x.id==id){p=x;break;}}if(p!=null){p.stock-=q;double dp=p.price*d;System.out.println("Producto "+p.name+" actualizado. Stock: "+p.stock+", Precio: "+dp);p.discountedPrice=dp;return p;}return null;}
```

### ✅ Buen Formato

```java
public Product findAndUpdate(int id, int quantity, double discount) {
    Product product = findProductById(id);

    if (product == null) {
        return null;
    }

    updateProduct(product, quantity, discount);
    return product;
}
```

## 🔧 Ejercicio

1. Abre `FormatBad.java`
2. Identifica problemas de formato
3. Refactoriza en `FormatExercise.java`
4. Compara con `FormatGood.java`

## 🎯 Puntos Clave

- Líneas cortas (máximo 80-120 caracteres)
- Espaciado vertical entre bloques lógicos
- Indentación consistente
- Un statement por línea
- Parámetros alineados en llamadas largas

## ⏱️ Tiempo Estimado

20 minutos

## Ejecutar Tests

### Java

```bash
# Compilar y ejecutar tests con JUnit
javac -cp .:junit-platform-console-standalone.jar FormatTests.java
java -jar junit-platform-console-standalone.jar --class-path . --scan-class-path

# O con Maven
mvn test

# O con Gradle
gradle test
```

### PHP

```bash
# Ejecutar tests con PHPUnit
phpunit FormatTests.php

# O todos los tests
phpunit .
```

``
