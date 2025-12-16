/**
 * Tests para el patrón Factory
 * Valida tanto las implementaciones malas como las buenas
 */

import { NotificationService as NotificationServiceBad } from "../factory-bad";
import { NotificationService as NotificationServiceGood, NotificationFactory, EmailNotification, SMSNotification, PushNotification } from "../factory-good";

describe("Factory Pattern - Bad Implementation", () => {
  let service: NotificationServiceBad;

  beforeEach(() => {
    service = new NotificationServiceBad();
  });

  test("should send email notification", () => {
    const result = service.sendNotification("email", "Hello World");
    expect(result).toBe("EMAIL: Hello World");
  });

  test("should send SMS notification", () => {
    const result = service.sendNotification("sms", "Hello World");
    expect(result).toBe("SMS: Hello World");
  });

  test("should send push notification", () => {
    const result = service.sendNotification("push", "Hello World");
    expect(result).toBe("PUSH: Hello World");
  });

  test("should throw error for unknown type", () => {
    expect(() => service.sendNotification("unknown", "Hello")).toThrow();
  });
});

describe("Factory Pattern - Good Implementation", () => {
  let service: NotificationServiceGood;

  beforeEach(() => {
    service = new NotificationServiceGood();
  });

  test("should send email notification", () => {
    const result = service.sendNotification("email", "Hello World");
    expect(result).toBe("EMAIL: Hello World");
  });

  test("should send SMS notification", () => {
    const result = service.sendNotification("sms", "Hello World");
    expect(result).toBe("SMS: Hello World");
  });

  test("should send push notification", () => {
    const result = service.sendNotification("push", "Hello World");
    expect(result).toBe("PUSH: Hello World");
  });

  test("should create email notification from factory", () => {
    const notification = NotificationFactory.create("email");
    expect(notification).toBeInstanceOf(EmailNotification);
    expect(notification.send("Test")).toBe("EMAIL: Test");
  });

  test("should create SMS notification from factory", () => {
    const notification = NotificationFactory.create("sms");
    expect(notification).toBeInstanceOf(SMSNotification);
    expect(notification.send("Test")).toBe("SMS: Test");
  });

  test("should create push notification from factory", () => {
    const notification = NotificationFactory.create("push");
    expect(notification).toBeInstanceOf(PushNotification);
    expect(notification.send("Test")).toBe("PUSH: Test");
  });

  test("should throw error for unknown type", () => {
    expect(() => NotificationFactory.create("unknown")).toThrow();
  });
});
