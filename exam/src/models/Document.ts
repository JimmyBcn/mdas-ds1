export interface Document {
  fileName: string;
  size: number; // in MB
  metadata: Record<string, any>;
}
