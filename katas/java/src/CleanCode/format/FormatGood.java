package CleanCode.format;

import java.util.*;

// Cumplimiento de Clean Code: Buen Formato
// ✅ Solución: Formato horizontal y vertical correcto

public class FormatGood {
    public static void main(String[] args) {
        System.out.println("=== Cumplimiento de Formato en Clean Code ===");
        
        ProductService service = new ProductService();
        Product product = service.findProductByIdAndUpdateStockAndCalculateDiscountAndSendNotification(
            1, 
            5, 
            0.8
        );
        System.out.println(product);
        
        OrderProcessor processor = new OrderProcessor();
        List<OrderItem> items = new ArrayList<>();
        items.add(new OrderItem(100, 2));
        processor.processOrder(1, items, "credit_card");
    }
}

// ✅ Líneas cortas (idealmente max 80-120 caracteres)
// ✅ Espaciado apropiado entre operadores y elementos
class ProductService {
    private List<Product> products = new ArrayList<>();
    
    public ProductService() {
        products.add(new Product(
            1, 
            "Laptop", 
            1200, 
            "Electronics", 
            50, 
            "TechCorp", 
            "2 years"
        ));
        products.add(new Product(
            2, 
            "Mouse", 
            25, 
            "Accessories", 
            200, 
            "TechCorp", 
            "1 year"
        ));
    }
    
    // ✅ Líneas cortas, una acción por línea
    public Product findProductByIdAndUpdateStockAndCalculateDiscountAndSendNotification(
        int productId, 
        int quantity, 
        double discountRate
    ) {
        Product product = findProductById(productId);
        
        if (product == null) {
            return null;
        }
        
        product.stock -= quantity;
        double discountedPrice = calculateDiscountedPrice(
            product.price, 
            discountRate
        );
        
        System.out.println("Producto " + product.name + " actualizado. " +
            "Stock: " + product.stock + ", " +
            "Precio con descuento: " + discountedPrice);
        
        product.discountedPrice = discountedPrice;
        return product;
    }
    
    private Product findProductById(int id) {
        for (Product product : products) {
            if (product.id == id) {
                return product;
            }
        }
        return null;
    }
    
    private double calculateDiscountedPrice(double price, double discountRate) {
        return price * discountRate;
    }
}

// ✅ Espaciado vertical apropiado
// ✅ Líneas en blanco separan conceptos relacionados
// ✅ Métodos relacionados están cerca
class OrderProcessor {
    private static final double DISCOUNT_THRESHOLD = 100;
    private static final double DISCOUNT_RATE = 0.9;
    
    private List<Order> orders = new ArrayList<>();
    
    // ✅ Grupo 1: Procesamiento de órdenes
    public boolean processOrder(
        int customerId, 
        List<OrderItem> items, 
        String paymentMethod
    ) {
        if (!isValidOrder(customerId, items)) {
            return false;
        }
        
        double total = calculateTotal(items);
        Order order = createOrder(customerId, items, total);
        
        saveOrder(order);
        logOrderProcessed(total);
        
        return true;
    }
    
    private boolean isValidOrder(int customerId, List<OrderItem> items) {
        return customerId > 0 && items != null && !items.isEmpty();
    }
    
    private double calculateTotal(List<OrderItem> items) {
        double total = 0;
        for (OrderItem item : items) {
            total += item.price * item.quantity;
        }
        
        if (total > DISCOUNT_THRESHOLD) {
            total = total * DISCOUNT_RATE;
        }
        
        return total;
    }
    
    private Order createOrder(
        int customerId, 
        List<OrderItem> items, 
        double total
    ) {
        return new Order(
            System.currentTimeMillis(),
            customerId,
            items,
            total,
            new Date(),
            "pending"
        );
    }
    
    private void saveOrder(Order order) {
        orders.add(order);
    }
    
    private void logOrderProcessed(double total) {
        System.out.println("Orden procesada: $" + total);
    }
    
    // ✅ Grupo 2: Consultas de órdenes (separado por línea en blanco)
    public List<Order> getOrders() {
        return orders;
    }
    
    // ✅ Grupo 3: Cancelación de órdenes (separado por línea en blanco)
    public boolean cancelOrder(long orderId) {
        for (int i = 0; i < orders.size(); i++) {
            if (orders.get(i).id == orderId) {
                orders.remove(i);
                return true;
            }
        }
        return false;
    }
}

// ✅ Formato consistente en toda la clase
// ✅ Espaciado uniforme, indentación correcta
class Product {
    int id;
    String name;
    double price;
    String category;
    int stock;
    String supplier;
    String warranty;
    Double discountedPrice;
    
    Product(
        int id, 
        String name, 
        double price, 
        String category, 
        int stock, 
        String supplier, 
        String warranty
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.stock = stock;
        this.supplier = supplier;
        this.warranty = warranty;
    }
}

class OrderItem {
    double price;
    int quantity;
    
    OrderItem(double price, int quantity) {
        this.price = price;
        this.quantity = quantity;
    }
}

class Order {
    long id;
    int customerId;
    List<OrderItem> items;
    double total;
    Date date;
    String status;
    
    Order(
        long id, 
        int customerId, 
        List<OrderItem> items, 
        double total, 
        Date date, 
        String status
    ) {
        this.id = id;
        this.customerId = customerId;
        this.items = items;
        this.total = total;
        this.date = date;
        this.status = status;
    }
}
