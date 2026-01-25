import { Locale } from '@/i18n';

// Tasa de cambio COP a USD (actualizar manualmente cuando sea necesario)
const COP_TO_USD_RATE = 4100;

// Markup del 5% para precios en USD
const USD_MARKUP = 1.05;

/**
 * Convierte un precio de COP a USD con markup del 5%
 */
export function convertCOPtoUSD(copAmount: number): number {
  const usdAmount = copAmount / COP_TO_USD_RATE;
  return Math.round(usdAmount * USD_MARKUP);
}

/**
 * Formatea un precio según el locale
 */
export function formatPrice(amount: number, locale: Locale): string {
  if (locale === 'es') {
    // Formato colombiano: $400.000 COP
    return `$${amount.toLocaleString('es-CO')} COP`;
  } else {
    // Formato USD: $97 USD
    const usdAmount = convertCOPtoUSD(amount);
    return `$${usdAmount.toLocaleString('en-US')} USD`;
  }
}

/**
 * Extrae el monto numérico de un string de precio
 * Ejemplos: "Desde $400.000 COP" -> 400000
 */
export function extractPriceAmount(priceString: string): number | null {
  const match = priceString.match(/\$?([\d,.]+)/);
  if (!match) return null;
  
  // Remover puntos y comas, convertir a número
  const cleanNumber = match[1].replace(/[,.]/g, '');
  return parseInt(cleanNumber, 10);
}

/**
 * Convierte un string de precio completo al formato del locale
 * Ejemplo: "Desde $400.000 COP/mes" -> "From $97 USD/month" (en inglés)
 */
export function convertPriceString(priceString: string, locale: Locale): string {
  if (locale === 'es') return priceString;
  
  const amount = extractPriceAmount(priceString);
  if (!amount) return priceString;
  
  const usdAmount = convertCOPtoUSD(amount);
  
  // Traducir partes comunes
  let converted = priceString
    .replace(/Desde/gi, 'From')
    .replace(/\/mes/gi, '/month')
    .replace(/\/año/gi, '/year');
  
  // Reemplazar el monto
  converted = converted.replace(/\$[\d,.]+\s*COP/gi, `$${usdAmount.toLocaleString('en-US')} USD`);
  
  return converted;
}
