export interface Metadata {
    model_number: string;
    manufacturer: string;
    category: string;
  }
  
  export interface DataItem {
    page_number: number;
    description: string;
    category: string;
  }
  
  export interface ApplianceData {
    metadata: Metadata;
    optimal_care: DataItem[];
    support: DataItem[];
    safety: DataItem[];
    cleaning: DataItem[];
    maintenance: DataItem[];
  }
  