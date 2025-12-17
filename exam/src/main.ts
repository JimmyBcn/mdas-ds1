import { DocumentProcessingFacade } from "./facades/DocumentProcessingFacade";
import { FileType } from "./models/Document/FileType";

function main(): void {
  const facade = new DocumentProcessingFacade();

  // Lista de documentos a procesar (al menos 10 casos)
  const documents = [
    { name: "contrato_servicios_2024.pdf", type: FileType.ContratoLegal, meta: { author: "Juan Pérez", version: "2.1.0", FileSize: 2  } },
    { name: "reporte_financiero_q1.xsl", type: FileType.ReporteFinanciero, meta: { author: "Jose Gomez", version: "1.0.0", FileSize: 3  } },
    { name: "propuesta_acme.doc", type: FileType.PropuestaComercial, meta: { author: "ACME", version: "0.9.1", FileSize: 1  } },
    { name: "contrato_arrendamiento.pdf", type: FileType.ContratoLegal, meta: { author: "María López", version: "1.2.0", FileSize: 4  } },
    { name: "reporte_financiero_q2.doc", type: FileType.ReporteFinanciero, meta: { author: "Ana Ruiz", version: "2.0.0", FileSize: 2  } },
    { name: "propuesta_xyz.pdf", type: FileType.PropuestaComercial, meta: { author: "XYZ Corp", version: "1.1.3", FileSize: 500 } },
    { name: "contrato_servicios_2023.xls", type: FileType.ContratoLegal, meta: { author: "Luis Ortega", version: "3.0.0", FileSize: 3  } },
    { name: "reporte_anual_2023.pdf", type: FileType.ReporteFinanciero, meta: { author: "Contabilidad", version: "2023.12", FileSize: 5  } },
    { name: "propuesta_partner.doc", type: FileType.PropuestaComercial, meta: { author: "Partner S.A.", version: "0.1.0", FileSize: 256 } },
    { name: "contrato_confidencial.pdf", type: FileType.ContratoLegal, meta: { author: "R&D", version: "0.0.1", FileSize: 2  } }
  ];

  for (const doc of documents) {
    try {
      facade.processDocument(doc.name, doc.type, doc.meta);
      facade.getReport();
    } catch (err) {
      console.error(`Error procesando ${doc.name}:`, (err as Error).message);
    }
  }
}

main();
