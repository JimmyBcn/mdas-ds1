package CleanCode.format;

import java.util.*;

// Violación de Clean Code: Mal Formato
// ❌ Problemas: Formato horizontal y vertical incorrecto

public class FormatBad {
    public static void main(String[] args) {
        System.out.println("=== Violación de Formato en Clean Code ===");
        ProductService service = new ProductService();
        Product product = service.findProductByIdAndUpdateStockAndCalculateDiscountAndSendNotification(1, 5, 0.8);
        System.out.println(product);
        
        OrderProcessor processor = new OrderProcessor();
        List<OrderItem> items = new ArrayList<>();
        items.add(new OrderItem(100, 2));
        processor.processOrder(1, items, "credit_card");
    }
}

// ❌ Líneas demasiado largas (formato horizontal malo)
class ProductService {
    private List<Product> products = new ArrayList<>();
    
    public ProductService() {
        products.add(new Product(1, "Laptop", 1200, "Electronics", 50, "TechCorp", "2 years"));
        products.add(new Product(2, "Mouse", 25, "Accessories", 200, "TechCorp", "1 year"));
    }
    
    public Product findProductByIdAndUpdateStockAndCalculateDiscountAndSendNotification(int id, int quantity, double discountRate) {
        Product product = null;
        for (Product p : products) { if (p.id == id) { product = p; break; } }
        if (product != null) { product.stock -= quantity; double discountedPrice = product.price * discountRate; System.out.println("Producto " + product.name + " actualizado. Stock: " + product.stock + ", Precio con descuento: " + discountedPrice); product.discountedPrice = discountedPrice; return product; }
        return null;
    }
}

// ❌ Sin espaciado vertical - todo junto
class OrderProcessor {
    private List<Order> orders = new ArrayList<>();
    public boolean processOrder(int customerId, List<OrderItem> items, String paymentMethod) {
        if (customerId <= 0 || items == null || items.isEmpty()) { return false; }
        double total = 0;
        for (OrderItem item : items) { total += item.price * item.quantity; }
        if (total > 100) { total = total * 0.9; }
        Order order = new Order(System.currentTimeMillis(), customerId, items, total, new Date(), "pending");
        orders.add(order);
        System.out.println("Orden procesada: $" + total);
        return true;
    }
    public List<Order> getOrders() { return orders; }
    public boolean cancelOrder(long orderId) {
        for (int i = 0; i < orders.size(); i++) { if (orders.get(i).id == orderId) { orders.remove(i); return true; } }
        return false;
    }
}

class Product {
    int id; String name; double price; String category; int stock; String supplier; String warranty; Double discountedPrice;
    Product(int id, String name, double price, String category, int stock, String supplier, String warranty) {
        this.id = id; this.name = name; this.price = price; this.category = category; this.stock = stock; this.supplier = supplier; this.warranty = warranty;
    }
}

class OrderItem { double price; int quantity; OrderItem(double price, int quantity) { this.price = price; this.quantity = quantity; } }
class Order { long id; int customerId; List<OrderItem> items; double total; Date date; String status; Order(long id, int customerId, List<OrderItem> items, double total, Date date, String status) { this.id = id; this.customerId = customerId; this.items = items; this.total = total; this.date = date; this.status = status; } }
