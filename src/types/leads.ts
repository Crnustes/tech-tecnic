// Tipos para el sistema de gestión de leads y requerimientos

export type LeadStatus = 
  | 'nuevo' 
  | 'contactado' 
  | 'reunion-agendada' 
  | 'en-discovery' 
  | 'propuesta-enviada' 
  | 'negociacion' 
  | 'ganado' 
  | 'perdido' 
  | 'pausado';

export type LeadSource = 
  | 'web-form' 
  | 'whatsapp' 
  | 'referido' 
  | 'linkedin' 
  | 'instagram' 
  | 'google' 
  | 'evento' 
  | 'otro';

export type ServiceType = 
  | 'desarrollo-web' 
  | 'apps-moviles' 
  | 'automatizacion-ia' 
  | 'para-agencias' 
  | 'integraciones' 
  | 'seo-geo' 
  | 'mantenimiento'
  | 'otro';

export type BudgetRange = 
  | 'menos-1k' 
  | '1k-5k' 
  | '5k-10k' 
  | '10k-25k' 
  | '25k-50k' 
  | 'mas-50k';

export type ProjectComplexity = 'baja' | 'media' | 'alta' | 'muy-alta';

export type ProjectUrgency = 'baja' | 'media' | 'alta' | 'urgente';

// Lead principal
export interface Lead {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status: LeadStatus;
  source: LeadSource;
  
  // Información de contacto
  name: string;
  email: string;
  phone?: string;
  company?: string;
  position?: string;
  
  // Información del proyecto
  service: ServiceType;
  projectTitle?: string;
  projectDescription?: string;
  budgetRange?: BudgetRange;
  timeline?: string;
  urgency?: ProjectUrgency;
  
  // Seguimiento
  meetingDate?: Date;
  proposalSentDate?: Date;
  closedDate?: Date;
  estimatedValue?: number;
  probability?: number; // 0-100%
  
  // Notas y seguimiento
  notes: Note[];
  discoveryForm?: DiscoveryForm;
  
  // Metadata
  assignedTo?: string; // Usuario que está gestionando el lead
  tags?: string[];
  lostReason?: string;
}

export interface Note {
  id: string;
  leadId: string;
  userId: string;
  userName: string;
  content: string;
  createdAt: Date;
  type: 'llamada' | 'email' | 'reunion' | 'interno' | 'otro';
}

// Formularios de Discovery específicos por servicio

export interface BaseDiscoveryForm {
  leadId: string;
  completedAt: Date;
  completedBy: string;
}

export interface DesarrolloWebDiscovery extends BaseDiscoveryForm {
  // Información General
  projectType: 'nuevo' | 'rediseno' | 'migracion' | 'mantenimiento';
  siteType: 'corporativo' | 'ecommerce' | 'landing' | 'blog' | 'portal' | 'otro';
  platform: 'wordpress' | 'nextjs' | 'custom' | 'no-definido';
  
  // Contenido y Estructura
  estimatedPages: number;
  contentReady: 'si' | 'parcial' | 'no' | 'necesita-ayuda';
  languages: string[]; // ['es', 'en', 'pt']
  needsCopywriting: boolean;
  
  // Funcionalidades
  features: {
    blog: boolean;
    contactForms: boolean;
    liveChat: boolean;
    payments: boolean;
    membership: boolean;
    ecommerce: boolean;
    booking: boolean;
    customCalculators: boolean;
    integrations: string[]; // Lista de integraciones
    multiLanguage: boolean;
    advancedSearch: boolean;
    userDashboard: boolean;
    notifications: boolean;
    geolocation: boolean;
    other: string[];
  };
  
  // Diseño
  hasDesign: 'si' | 'no' | 'parcial';
  designReferences: string[]; // URLs
  brandingAssets: {
    logo: boolean;
    colors: boolean;
    typography: boolean;
    fullGuide: boolean;
    none: boolean;
  };
  
  // SEO y Marketing
  seoPriority: 'alta' | 'media' | 'baja';
  needsAnalytics: boolean;
  hasAnalytics: boolean;
  marketingIntegrations: string[]; // ['email', 'crm', 'ads', 'social']
  
  // Técnico
  hasDomain: boolean;
  needsDomainHelp: boolean;
  hasHosting: boolean;
  needsHostingHelp: boolean;
  currentSiteUrl?: string;
  requiredIntegrations: string[];
  expectedTraffic: 'menos-1k' | '1k-10k' | '10k-100k' | 'mas-100k';
  
  // Notas adicionales
  additionalNotes?: string;
}

export interface AppsMovilesDiscovery extends BaseDiscoveryForm {
  // Información General
  platforms: ('ios' | 'android' | 'pwa')[];
  appType: 'nativa' | 'hibrida' | 'pwa' | 'react-native' | 'flutter';
  hasExistingApp: boolean;
  existingAppUrl?: string;
  
  // Funcionalidades Core
  features: {
    authentication: {
      email: boolean;
      social: boolean;
      biometric: boolean;
    };
    userProfile: boolean;
    pushNotifications: boolean;
    geolocation: boolean;
    camera: boolean;
    payments: boolean;
    chat: boolean;
    offlineMode: boolean;
    realTimeSync: boolean;
    arVr: boolean;
    qrScanner: boolean;
    hardwareIntegration: string[]; // bluetooth, nfc, etc
    other: string[];
  };
  
  // Backend y Datos
  needsBackend: boolean;
  hasBackend: boolean;
  database: 'firebase' | 'postgresql' | 'mongodb' | 'mysql' | 'otro';
  authProvider: string[];
  hasApi: boolean;
  apiDocumentation?: string;
  
  // Diseño y UX
  hasDesign: 'si' | 'no' | 'parcial';
  designReferences: string[];
  estimatedScreens: number;
  
  // Publicación
  needsStorePublication: boolean;
  publishBy: 'ustedes' | 'nosotros' | 'no-seguro';
  hasDeveloperAccounts: {
    apple: boolean;
    google: boolean;
  };
  
  // Usuarios
  estimatedUsers: 'menos-100' | '100-1k' | '1k-10k' | '10k-100k' | 'mas-100k';
  userType: 'b2c' | 'b2b' | 'interno';
  
  additionalNotes?: string;
}

export interface AutomatizacionIADiscovery extends BaseDiscoveryForm {
  // Problema a Resolver
  currentManualProcess: string;
  timeInvested: string;
  frequency: 'diaria' | 'semanal' | 'mensual' | 'adhoc';
  peopleInvolved: number;
  currentCost?: string;
  
  // Tipo de Automatización
  automationType: {
    repetitiveTasks: boolean;
    dataProcessing: boolean;
    systemIntegration: boolean;
    chatbot: boolean;
    dataAnalysis: boolean;
    contentGeneration: boolean;
    scraping: boolean;
    emailAutomation: boolean;
    reportGeneration: boolean;
    other: string[];
  };
  
  // Sistemas Involucrados
  currentSystems: string[];
  dataTypes: string[];
  dataFormats: ('excel' | 'pdf' | 'database' | 'api' | 'email' | 'otro')[];
  
  // Complejidad
  businessRulesComplexity: 'simples' | 'complejas' | 'muy-complejas';
  requiresAI: boolean;
  requiresModelTraining: boolean;
  
  // ROI Esperado
  expectedTimeSaved: string;
  expectedMoneySaved?: string;
  qualitativeImprovements: string;
  
  additionalNotes?: string;
}

export interface ParaAgenciasDiscovery extends BaseDiscoveryForm {
  // Tipo de Agencia
  agencyType: 'marketing' | 'diseno' | 'publicidad' | 'rrpp' | 'consultora' | 'otro';
  agencySize: string; // número de empleados
  
  // Servicio Necesitado
  serviceNeeded: {
    whiteLabelWeb: boolean;
    whiteLabelApps: boolean;
    customDevelopment: boolean;
    technicalSupport: boolean;
    maintenance: boolean;
    teamScaling: boolean;
    other: string[];
  };
  
  // Volumen de Trabajo
  projectsPerMonth: number;
  typicalProjectTypes: string[];
  typicalUrgency: 'rapida' | 'media' | 'flexible';
  
  // Modelo de Trabajo
  clientCommunication: 'directa' | 'atraves-ustedes' | 'mixta';
  branding: 'nuestro' | 'suyo-whitelabel' | 'cobranding';
  
  // Proyectos Actuales
  currentChallenges: string;
  whyOutsource: string;
  
  additionalNotes?: string;
}

export interface IntegracionesDiscovery extends BaseDiscoveryForm {
  // Sistemas a Integrar
  systemA: {
    name: string;
    platform: string;
    hasAPI: boolean;
    apiDocumentation?: string;
  };
  systemB: {
    name: string;
    platform: string;
    hasAPI: boolean;
    apiDocumentation?: string;
  };
  otherSystems?: Array<{
    name: string;
    platform: string;
  }>;
  
  // Tipo de Integración
  integrationType: ('rest-api' | 'webhooks' | 'database' | 'files' | 'realtime' | 'scheduled' | 'otro')[];
  
  // Datos a Sincronizar
  dataTypes: string[];
  dataVolume: string;
  syncFrequency: 'realtime' | 'hourly' | 'daily' | 'weekly';
  direction: 'unidireccional' | 'bidireccional';
  
  // Seguridad
  hasSensitiveData: boolean;
  authRequired: ('oauth' | 'api-key' | 'jwt' | 'otro')[];
  complianceRequired: ('gdpr' | 'hipaa' | 'pci-dss' | 'otro')[];
  
  additionalNotes?: string;
}

export interface SEOGeoDiscovery extends BaseDiscoveryForm {
  // Situación Actual
  websiteUrl: string;
  currentRanking?: string;
  previousSEOWork: boolean;
  hasPenalties: boolean;
  
  // Objetivos SEO
  targetKeywords: string[];
  geographicTarget: string[]; // países/ciudades
  mainCompetitors: string[];
  
  // Contenido
  hasBlog: boolean;
  publishingFrequency?: string;
  needsContentCreation: boolean;
  
  // Técnico
  hasGoogleAnalytics: boolean;
  hasSearchConsole: boolean;
  hasSchemaMarkup: boolean;
  siteSpeed: 'buena' | 'regular' | 'mala' | 'no-se';
  
  // Objetivos
  monthlyTrafficGoal?: number;
  conversionGoal?: string;
  
  additionalNotes?: string;
}

// Union type para todos los formularios de discovery
export type DiscoveryForm = 
  | DesarrolloWebDiscovery 
  | AppsMovilesDiscovery 
  | AutomatizacionIADiscovery 
  | ParaAgenciasDiscovery 
  | IntegracionesDiscovery 
  | SEOGeoDiscovery;

// Cotización
export interface Quotation {
  id: string;
  leadId: string;
  createdAt: Date;
  updatedAt: Date;
  version: number; // para múltiples versiones de la misma cotización
  
  // Información básica
  projectTitle: string;
  clientName: string;
  validUntil: Date;
  
  // Desglose de costos
  items: QuotationItem[];
  subtotal: number;
  discount?: {
    percentage: number;
    reason: string;
    amount: number;
  };
  taxes?: {
    percentage: number;
    amount: number;
  };
  total: number;
  
  // Timeline
  estimatedDuration: string; // "6-8 semanas"
  startDate?: Date;
  deliveryDate?: Date;
  milestones: Milestone[];
  
  // Pagos
  paymentTerms: PaymentTerm[];
  
  // Estado
  status: 'borrador' | 'enviada' | 'aceptada' | 'rechazada' | 'expirada';
  sentDate?: Date;
  acceptedDate?: Date;
  
  // Notas
  notes?: string;
  termsAndConditions: string;
}

export interface QuotationItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
  category: 'desarrollo' | 'diseño' | 'integracion' | 'contenido' | 'seo' | 'soporte' | 'otro';
}

export interface Milestone {
  id: string;
  name: string;
  description: string;
  deliverables: string[];
  estimatedDate?: Date;
  order: number;
}

export interface PaymentTerm {
  id: string;
  name: string;
  percentage: number;
  amount: number;
  dueDate?: string; // "Al firmar contrato", "Mitad del proyecto", etc
  milestone?: string; // ID del milestone asociado
  order: number;
}

// Estadísticas y reportes
export interface LeadStats {
  totalLeads: number;
  newLeads: number;
  activeLeads: number;
  wonLeads: number;
  lostLeads: number;
  conversionRate: number;
  averageValue: number;
  totalValue: number;
  byService: Record<ServiceType, number>;
  bySource: Record<LeadSource, number>;
  byStatus: Record<LeadStatus, number>;
}
