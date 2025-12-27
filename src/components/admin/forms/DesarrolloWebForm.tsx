'use client';

import { useState } from 'react';
import { DesarrolloWebDiscovery } from '@/types/leads';

interface Props {
  leadId: string;
  onComplete: (data: DesarrolloWebDiscovery) => void;
  onCancel: () => void;
}

export default function DesarrolloWebForm({ leadId, onComplete, onCancel }: Props) {
  const [formData, setFormData] = useState<Partial<DesarrolloWebDiscovery>>({
    leadId,
    completedBy: 'Admin User', // Esto vendría del auth context
    projectType: 'nuevo',
    siteType: 'corporativo',
    platform: 'no-definido',
    estimatedPages: 5,
    contentReady: 'no',
    languages: ['es'],
    needsCopywriting: false,
    features: {
      blog: false,
      contactForms: true,
      liveChat: false,
      payments: false,
      membership: false,
      ecommerce: false,
      booking: false,
      customCalculators: false,
      integrations: [],
      multiLanguage: false,
      advancedSearch: false,
      userDashboard: false,
      notifications: false,
      geolocation: false,
      other: [],
    },
    hasDesign: 'no',
    designReferences: [],
    brandingAssets: {
      logo: false,
      colors: false,
      typography: false,
      fullGuide: false,
      none: true,
    },
    seoPriority: 'media',
    needsAnalytics: true,
    hasAnalytics: false,
    marketingIntegrations: [],
    hasDomain: false,
    needsDomainHelp: true,
    hasHosting: false,
    needsHostingHelp: true,
    requiredIntegrations: [],
    expectedTraffic: 'menos-1k',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete({
      ...formData,
      completedAt: new Date(),
    } as DesarrolloWebDiscovery);
  };

  const toggleFeature = (feature: keyof DesarrolloWebDiscovery['features']) => {
    setFormData(prev => ({
      ...prev,
      features: {
        ...prev.features!,
        [feature]: !prev.features![feature],
      },
    }));
  };

  const toggleBrandingAsset = (asset: keyof DesarrolloWebDiscovery['brandingAssets']) => {
    setFormData(prev => ({
      ...prev,
      brandingAssets: {
        ...prev.brandingAssets!,
        [asset]: !prev.brandingAssets![asset],
      },
    }));
  };

  return (
    <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          🌐 Formulario Discovery: Desarrollo Web
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Completa esta información durante o después de la reunión con el cliente
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Información General */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white border-b pb-2">
            📋 Información General
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Tipo de Proyecto
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value as any })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="nuevo">Nuevo</option>
                <option value="rediseno">Rediseño</option>
                <option value="migracion">Migración</option>
                <option value="mantenimiento">Mantenimiento</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Tipo de Sitio
              </label>
              <select
                value={formData.siteType}
                onChange={(e) => setFormData({ ...formData, siteType: e.target.value as any })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="corporativo">Corporativo</option>
                <option value="ecommerce">E-commerce</option>
                <option value="landing">Landing Page</option>
                <option value="blog">Blog</option>
                <option value="portal">Portal</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Plataforma Preferida
              </label>
              <select
                value={formData.platform}
                onChange={(e) => setFormData({ ...formData, platform: e.target.value as any })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="wordpress">WordPress</option>
                <option value="nextjs">Next.js</option>
                <option value="custom">Custom</option>
                <option value="no-definido">No definido / Recomienden</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Páginas Estimadas
              </label>
              <input
                type="number"
                min="1"
                value={formData.estimatedPages}
                onChange={(e) => setFormData({ ...formData, estimatedPages: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>
        </section>

        {/* Contenido */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white border-b pb-2">
            📝 Contenido y Estructura
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                ¿Contenido Listo?
              </label>
              <select
                value={formData.contentReady}
                onChange={(e) => setFormData({ ...formData, contentReady: e.target.value as any })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="si">Sí, todo listo</option>
                <option value="parcial">Parcialmente</option>
                <option value="no">No, no tienen</option>
                <option value="necesita-ayuda">Necesitan ayuda</option>
              </select>
            </div>

            <div>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.needsCopywriting}
                  onChange={(e) => setFormData({ ...formData, needsCopywriting: e.target.checked })}
                  className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Necesitan redacción de contenido
                </span>
              </label>
            </div>
          </div>
        </section>

        {/* Funcionalidades */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white border-b pb-2">
            ⚙️ Funcionalidades Requeridas
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Object.keys(formData.features || {}).filter(k => typeof (formData.features as any)[k] === 'boolean').map((feature) => (
              <label key={feature} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={(formData.features as any)[feature]}
                  onChange={() => toggleFeature(feature as any)}
                  className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {feature.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* Diseño */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white border-b pb-2">
            🎨 Diseño
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                ¿Tienen Diseño/Mockups?
              </label>
              <select
                value={formData.hasDesign}
                onChange={(e) => setFormData({ ...formData, hasDesign: e.target.value as any })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="si">Sí</option>
                <option value="no">No</option>
                <option value="parcial">Parcial</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Activos de Marca Existentes
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {Object.keys(formData.brandingAssets || {}).map((asset) => (
                  <label key={asset} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={(formData.brandingAssets as any)[asset]}
                      onChange={() => toggleBrandingAsset(asset as any)}
                      className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300 capitalize">
                      {asset.replace(/([A-Z])/g, ' $1')}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SEO y Marketing */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white border-b pb-2">
            📈 SEO y Marketing
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Prioridad SEO
              </label>
              <select
                value={formData.seoPriority}
                onChange={(e) => setFormData({ ...formData, seoPriority: e.target.value as any })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="alta">Alta</option>
                <option value="media">Media</option>
                <option value="baja">Baja</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.needsAnalytics}
                  onChange={(e) => setFormData({ ...formData, needsAnalytics: e.target.checked })}
                  className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Necesita Google Analytics
                </span>
              </label>
              
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.hasAnalytics}
                  onChange={(e) => setFormData({ ...formData, hasAnalytics: e.target.checked })}
                  className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Ya tiene Analytics configurado
                </span>
              </label>
            </div>
          </div>
        </section>

        {/* Técnico */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white border-b pb-2">
            🔧 Información Técnica
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.hasDomain}
                  onChange={(e) => setFormData({ ...formData, hasDomain: e.target.checked })}
                  className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Tiene dominio
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.needsDomainHelp}
                  onChange={(e) => setFormData({ ...formData, needsDomainHelp: e.target.checked })}
                  className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Necesita ayuda con dominio
                </span>
              </label>
            </div>

            <div className="space-y-3">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.hasHosting}
                  onChange={(e) => setFormData({ ...formData, hasHosting: e.target.checked })}
                  className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Tiene hosting
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.needsHostingHelp}
                  onChange={(e) => setFormData({ ...formData, needsHostingHelp: e.target.checked })}
                  className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Necesita ayuda con hosting
                </span>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Tráfico Esperado (visitas/mes)
              </label>
              <select
                value={formData.expectedTraffic}
                onChange={(e) => setFormData({ ...formData, expectedTraffic: e.target.value as any })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="menos-1k">&lt; 1,000</option>
                <option value="1k-10k">1,000 - 10,000</option>
                <option value="10k-100k">10,000 - 100,000</option>
                <option value="mas-100k">&gt; 100,000</option>
              </select>
            </div>

            {formData.currentSiteUrl && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  URL del Sitio Actual
                </label>
                <input
                  type="url"
                  value={formData.currentSiteUrl}
                  onChange={(e) => setFormData({ ...formData, currentSiteUrl: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="https://ejemplo.com"
                />
              </div>
            )}
          </div>
        </section>

        {/* Notas Adicionales */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white border-b pb-2">
            📝 Notas Adicionales
          </h3>
          <textarea
            value={formData.additionalNotes || ''}
            onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Cualquier información adicional relevante..."
          />
        </section>

        {/* Botones de Acción */}
        <div className="flex gap-4 pt-6 border-t">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-colors font-medium shadow-lg"
          >
            💾 Guardar Formulario Discovery
          </button>
        </div>
      </form>
    </div>
  );
}
