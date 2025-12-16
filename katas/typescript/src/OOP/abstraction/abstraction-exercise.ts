// 🔧 EJERCICIO: OOP - Abstraction (Abstracción)
//
// Instrucciones:
// 1. Analiza el archivo abstraction-bad.ts e identifica los detalles expuestos
// 2. Diseña una interfaz simple que oculte la complejidad interna
// 3. Implementa tu solución aquí antes de ver abstraction-good.ts
//
// Pistas:
// - ¿Cuántos pasos debe hacer el usuario para enviar un email?
// - ¿Qué propiedades son públicas que no deberían serlo?
// - ¿Cómo podrías reducirlo a un solo método sendEmail()?
// - Usa `private` para ocultar detalles internos
//
// Objetivo: El usuario solo debe llamar a sendEmail(to, subject, body)
// Todo lo demás (conectar, autenticar, construir, desconectar) debe ser interno
//
// Cuando termines, compara tu solución con abstraction-good.ts

// Escribe tu solución aquí:

class EmailSender {
  private smtpServer: string = "smtp.gmail.com";
  private smtpPort: number = 587;
  private username: string = "cabeza e mondongo";
  private password: string = "mondongo123";
  private isConnected: boolean = false;
  private connectionAttempts: number = 0;
  private lastError: string = "";

  private connectToServer(): boolean {
    console.log(`Conectando a ${this.smtpServer}:${this.smtpPort}...`);
    this.connectionAttempts++;

    if (this.username && this.password) {
      this.isConnected = true;
      this.lastError = "";
      return true;
    } else {
      this.lastError = "Credenciales inválidas";
      this.isConnected = false;
      return false;
    }
  }

  private disconnectFromServer(): void {
    console.log("Desconectando del servidor...");
    this.isConnected = false;
  }

  private buildMessage({
    to,
    subject,
    body,
  }: {
    to: string;
    subject: string;
    body: string;
  }): string {
    return `To: ${to}\nSubject: ${subject}\n\n${body}`;
  }

  private sendRawMessage(message: string): boolean {
    if (!this.isConnected) {
      this.lastError = "No conectado al servidor";
      return false;
    }
    console.log(`Enviando mensaje:\n${message}`);
    return true;
  }

  public sendEmail({
    to,
    subject,
    body,
  }: {
    to: string;
    subject: string;
    body: string;
  }): boolean {
    let messageData = {
      to: to,
      subject: subject,
      body: body,
    };

    if (!this.connectToServer()) {
      console.log("Error de conexión:", this.lastError);
      return false;
    }
    const message = this.buildMessage(messageData);
    const sent = this.sendRawMessage(message);
    this.disconnectFromServer();
    return sent;
  }
}

// ✅ Usuario solo llama a sendEmail con los parámetros necesarios
console.log("=== Uso Correcto de Abstracción ===");
const emailSender = new EmailSender();
emailSender.sendEmail({
  to: "destinatario@gmail.com",
  subject: "Hola",
  body: "Este es el cuerpo del mensaje",
});

export { emailSender };
