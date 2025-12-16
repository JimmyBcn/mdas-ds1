/**
 * Tests para el concepto de Abstraction en OOP
 * Valida tanto las implementaciones malas como las buenas
 */

import { EmailSender as EmailSenderBad } from "../abstraction-bad";
import { EmailSender as EmailSenderGood } from "../abstraction-good";

describe("Abstraction - Bad Implementation", () => {
  test("should send email successfully with valid credentials", () => {
    const sender = new EmailSenderBad("usuario@gmail.com", "password123");
    const result = sender.sendEmail("destinatario@gmail.com", "Hola", "Mensaje de prueba");
    expect(result).toBe(true);
  });

  test("should fail to send email with invalid credentials", () => {
    const sender = new EmailSenderBad("", "");
    const result = sender.sendEmail("destinatario@gmail.com", "Hola", "Mensaje de prueba");
    expect(result).toBe(false);
  });
});

describe("Abstraction - Good Implementation", () => {
  test("should send email successfully with valid credentials", () => {
    const sender = new EmailSenderGood("usuario@gmail.com", "password123");
    const result = sender.sendEmail("destinatario@gmail.com", "Hola", "Mensaje de prueba");
    expect(result).toBe(true);
  });

  test("should fail to send email with invalid credentials", () => {
    const sender = new EmailSenderGood("", "");
    const result = sender.sendEmail("destinatario@gmail.com", "Hola", "Mensaje de prueba");
    expect(result).toBe(false);
  });

  test("should handle email with special characters", () => {
    const sender = new EmailSenderGood("usuario@gmail.com", "password123");
    const result = sender.sendEmail("test@test.com", "¡Hola!", "Mensaje con ñ y acentos");
    expect(result).toBe(true);
  });
});
