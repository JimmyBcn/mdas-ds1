import { ValidationException } from "../exceptions/ValidationException";
import { ExpressPackage } from "../packages/ExpressPackage";
import { InternationalPackage } from "../packages/InternationalPackage";
import { IPackage } from "../packages/IPackage";
import { StandardPackage } from "../packages/StandardPackage";
import { ExpressPackageProcessor } from "../processor/ExpressPackageProcessor";
import { InternationalPackageProcessor } from "../processor/InternationalPackageProcessor";
import { StandardPackageProcessor } from "../processor/StandardPackageProcessor";

class PackageProcessingFacade {
  processPackage(pkg: StandardPackage | ExpressPackage | InternationalPackage): any {
    // Validar el paquete
    if (
      !pkg.ref ||
      !pkg.type ||
      !pkg.weigth ||
      !pkg.size ||
      !pkg.senderName ||
      !pkg.destination
    ) {
      throw new ValidationException(
        "Faltan campos obligatorios en el paquete.",
      );
    }

    console.log(`Procesando paquete: ${pkg.ref} (${pkg.type})`);

    // Procesar el paquete según su tipo
    let processor;
    switch (pkg.type) {
      case "StandardPackage":
        console.log("Seleccionando procesador para paquete estándar...");
        processor = new StandardPackageProcessor();
        console.log("Procesando paquete estándar...");
        const standardPackage = new StandardPackage(
          pkg.ref,
          pkg.weigth,
          pkg.size,
          pkg.senderName,
          pkg.destination
        );
        return processor.process(standardPackage);
      // case "ExpressPackage":
      //   processor = new ExpressPackageProcessor();
      //   const expressPackage = new ExpressPackage(
      //     pkg.ref,
      //     pkg.weigth,
      //     pkg.size,
      //     pkg.senderName,
      //     pkg.destination,
      //     pkg.urgencyLevel,
      //     pkg.deliveryTime
      //   );
      //   return processor.process(expressPackage);
      // case "InternationalPackage":
      //   processor = new InternationalPackageProcessor();
      //   const internationalPackage = new InternationalPackage(
      //     pkg.ref,
      //     pkg.weigth,
      //     pkg.size,
      //     pkg.senderName,
      //     pkg.destination,
      //     pkg.customsDeclaration,
      //     pkg.destinationCountry
      //   );
      //   return processor.process(internationalPackage);
      // default:
        // throw new ValidationException(
        //   `Tipo de paquete no soportado: ${pkg.type}`,
        // );
    }
  }
}

export { PackageProcessingFacade };
