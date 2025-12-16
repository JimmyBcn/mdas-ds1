"""
Tests para el concepto de Functions en Clean Code
Valida tanto las implementaciones malas como las buenas
"""

import pytest
from functions_bad import OrderProcessor as OrderProcessorBad
from functions_good import OrderProcessor as OrderProcessorGood, Order


class TestFunctionsBad:
    """Tests para la implementación con malas funciones"""

    def test_process_order_valid(self):
        """Verifica el procesamiento de un pedido válido"""
        processor = OrderProcessorBad()
        result = processor.process_order(1, "John Doe", "john@email.com",
                                         [{"name": "Product", "price": 100, "qty": 2}])
        assert "Pedido procesado" in result
        assert "Total: 200" in result

    def test_process_order_invalid_customer(self):
        """Verifica el rechazo de pedidos con datos de cliente inválidos"""
        processor = OrderProcessorBad()
        result = processor.process_order(0, "", "", [])
        assert "Error" in result

    def test_process_order_empty_items(self):
        """Verifica el rechazo de pedidos sin items"""
        processor = OrderProcessorBad()
        result = processor.process_order(1, "John Doe", "john@email.com", [])
        assert "Error" in result


class TestFunctionsGood:
    """Tests para la implementación con buenas funciones"""

    def test_validate_customer_valid(self):
        """Verifica la validación de cliente válido"""
        processor = OrderProcessorGood()
        assert processor._validate_customer(
            1, "John Doe", "john@email.com") == True

    def test_validate_customer_invalid_id(self):
        """Verifica el rechazo de cliente con ID inválido"""
        processor = OrderProcessorGood()
        assert processor._validate_customer(
            0, "John Doe", "john@email.com") == False

    def test_validate_customer_empty_name(self):
        """Verifica el rechazo de cliente sin nombre"""
        processor = OrderProcessorGood()
        assert processor._validate_customer(1, "", "john@email.com") == False

    def test_validate_items_valid(self):
        """Verifica la validación de items válidos"""
        processor = OrderProcessorGood()
        items = [{"name": "Product", "price": 100, "qty": 2}]
        assert processor._validate_items(items) == True

    def test_validate_items_empty(self):
        """Verifica el rechazo de lista de items vacía"""
        processor = OrderProcessorGood()
        assert processor._validate_items([]) == False

    def test_calculate_total_single_item(self):
        """Verifica el cálculo del total con un solo item"""
        processor = OrderProcessorGood()
        items = [{"name": "Product", "price": 100, "qty": 2}]
        assert processor._calculate_total(items) == 200

    def test_calculate_total_multiple_items(self):
        """Verifica el cálculo del total con múltiples items"""
        processor = OrderProcessorGood()
        items = [
            {"name": "Product1", "price": 100, "qty": 2},
            {"name": "Product2", "price": 50, "qty": 3}
        ]
        assert processor._calculate_total(items) == 350

    def test_process_order_valid(self):
        """Verifica el procesamiento completo de un pedido válido"""
        processor = OrderProcessorGood()
        order = Order(1, "John Doe", "john@email.com",
                      [{"name": "Product", "price": 100, "qty": 2}])
        result = processor.process_order(order)
        assert "Pedido procesado" in result
        assert "Total: 200" in result

    def test_process_order_invalid_customer(self):
        """Verifica el rechazo de pedido con cliente inválido"""
        processor = OrderProcessorGood()
        order = Order(0, "", "", [{"name": "Product", "price": 100, "qty": 2}])
        result = processor.process_order(order)
        assert "Error" in result

    def test_process_order_invalid_items(self):
        """Verifica el rechazo de pedido con items inválidos"""
        processor = OrderProcessorGood()
        order = Order(1, "John Doe", "john@email.com", [])
        result = processor.process_order(order)
        assert "Error" in result


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
