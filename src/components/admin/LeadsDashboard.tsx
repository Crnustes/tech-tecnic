'use client';

import { useState } from 'react';
import { Lead, LeadStatus, LeadSource, ServiceType, BudgetRange } from '@/types/leads';
import MagneticButton from '../animations/MagneticButton';

export default function LeadsDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filter, setFilter] = useState<LeadStatus | 'all'>('all');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  // Colores por estado
  const statusColors: Record<LeadStatus, string> = {
    'nuevo': 'bg-blue-100 text-blue-800',
    'contactado': 'bg-purple-100 text-purple-800',
    'reunion-agendada': 'bg-yellow-100 text-yellow-800',
    'en-discovery': 'bg-orange-100 text-orange-800',
    'propuesta-enviada': 'bg-indigo-100 text-indigo-800',
    'negociacion': 'bg-pink-100 text-pink-800',
    'ganado': 'bg-green-100 text-green-800',
    'perdido': 'bg-red-100 text-red-800',
    'pausado': 'bg-gray-100 text-gray-800',
  };

  const statusLabels: Record<LeadStatus, string> = {
    'nuevo': 'Nuevo',
    'contactado': 'Contactado',
    'reunion-agendada': 'Reunión Agendada',
    'en-discovery': 'En Discovery',
    'propuesta-enviada': 'Propuesta Enviada',
    'negociacion': 'En Negociación',
    'ganado': 'Ganado 🎉',
    'perdido': 'Perdido',
    'pausado': 'Pausado',
  };

  const serviceLabels: Record<ServiceType, string> = {
    'desarrollo-web': 'Desarrollo Web',
    'apps-moviles': 'Apps Móviles',
    'automatizacion-ia': 'Automatización IA',
    'para-agencias': 'Para Agencias',
    'integraciones': 'Integraciones',
    'seo-geo': 'SEO + GEO',
    'mantenimiento': 'Mantenimiento',
    'otro': 'Otro',
  };

  const filteredLeads = filter === 'all' 
    ? leads 
    : leads.filter(lead => lead.status === filter);

  // Estadísticas
  const stats = {
    total: leads.length,
    nuevo: leads.filter(l => l.status === 'nuevo').length,
    activos: leads.filter(l => !['ganado', 'perdido', 'pausado'].includes(l.status)).length,
    ganados: leads.filter(l => l.status === 'ganado').length,
    totalValue: leads.filter(l => l.status === 'ganado').reduce((sum, l) => sum + (l.estimatedValue || 0), 0),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            🎯 Gestión de Leads
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Sistema de seguimiento de contactos y oportunidades
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <StatCard
            title="Total Leads"
            value={stats.total}
            icon="📊"
            color="blue"
          />
          <StatCard
            title="Nuevos"
            value={stats.nuevo}
            icon="🆕"
            color="purple"
          />
          <StatCard
            title="Activos"
            value={stats.activos}
            icon="🔥"
            color="orange"
          />
          <StatCard
            title="Ganados"
            value={stats.ganados}
            icon="🎉"
            color="green"
          />
          <StatCard
            title="Valor Total"
            value={`$${stats.totalValue.toLocaleString()}`}
            icon="💰"
            color="emerald"
          />
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-wrap gap-2">
            <FilterButton
              active={filter === 'all'}
              onClick={() => setFilter('all')}
              label="Todos"
              count={leads.length}
            />
            {(Object.keys(statusLabels) as LeadStatus[]).map(status => (
              <FilterButton
                key={status}
                active={filter === status}
                onClick={() => setFilter(status)}
                label={statusLabels[status]}
                count={leads.filter(l => l.status === status).length}
                color={statusColors[status]}
              />
            ))}
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Cliente
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Servicio
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Valor Est.
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Fecha
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center">
                      <div className="text-gray-400 dark:text-gray-500">
                        <div className="text-6xl mb-4">📭</div>
                        <p className="text-lg font-medium">No hay leads para mostrar</p>
                        <p className="text-sm mt-2">
                          {filter === 'all' 
                            ? 'Los nuevos contactos aparecerán aquí automáticamente'
                            : `No hay leads en estado "${statusLabels[filter as LeadStatus]}"`
                          }
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map(lead => (
                    <tr 
                      key={lead.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                      onClick={() => setSelectedLead(lead)}
                    >
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {lead.name}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {lead.email}
                          </div>
                          {lead.company && (
                            <div className="text-xs text-gray-400 dark:text-gray-500">
                              {lead.company}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-900 dark:text-white">
                          {serviceLabels[lead.service]}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[lead.status]}`}>
                          {statusLabels[lead.status]}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {lead.estimatedValue 
                            ? `$${lead.estimatedValue.toLocaleString()}` 
                            : '-'
                          }
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {new Date(lead.createdAt).toLocaleDateString('es-ES')}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedLead(lead);
                          }}
                          className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                        >
                          Ver detalles →
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Lead Detail Modal */}
        {selectedLead && (
          <LeadDetailModal
            lead={selectedLead}
            onClose={() => setSelectedLead(null)}
          />
        )}
      </div>
    </div>
  );
}

// Componentes auxiliares
function StatCard({ 
  title, 
  value, 
  icon, 
  color 
}: { 
  title: string; 
  value: string | number; 
  icon: string; 
  color: string;
}) {
  const colorClasses: Record<string, string> = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    green: 'from-green-500 to-green-600',
    emerald: 'from-emerald-500 to-emerald-600',
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} rounded-xl shadow-lg p-6 text-white`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-3xl">{icon}</span>
      </div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-sm opacity-90">{title}</div>
    </div>
  );
}

function FilterButton({ 
  active, 
  onClick, 
  label, 
  count,
  color 
}: { 
  active: boolean; 
  onClick: () => void; 
  label: string; 
  count: number;
  color?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-lg font-medium text-sm transition-all
        ${active 
          ? 'bg-primary-600 text-white shadow-lg scale-105' 
          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
        }
      `}
    >
      {label} <span className="ml-1 opacity-75">({count})</span>
    </button>
  );
}

function LeadDetailModal({ lead, onClose }: { lead: Lead; onClose: () => void }) {
  const serviceLabels: Record<ServiceType, string> = {
    'desarrollo-web': 'Desarrollo Web',
    'apps-moviles': 'Apps Móviles',
    'automatizacion-ia': 'Automatización IA',
    'para-agencias': 'Para Agencias',
    'integraciones': 'Integraciones',
    'seo-geo': 'SEO + GEO',
    'mantenimiento': 'Mantenimiento',
    'otro': 'Otro',
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold mb-1">{lead.name}</h2>
              <p className="text-primary-100">{lead.email}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Información Básica */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              📋 Información Básica
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <InfoField label="Servicio" value={serviceLabels[lead.service]} />
              <InfoField label="Estado" value={lead.status} />
              {lead.company && <InfoField label="Empresa" value={lead.company} />}
              {lead.phone && <InfoField label="Teléfono" value={lead.phone} />}
              {lead.budgetRange && <InfoField label="Presupuesto" value={lead.budgetRange} />}
              {lead.timeline && <InfoField label="Timeline" value={lead.timeline} />}
            </div>
          </section>

          {/* Descripción del Proyecto */}
          {lead.projectDescription && (
            <section>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                📝 Descripción del Proyecto
              </h3>
              <p className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                {lead.projectDescription}
              </p>
            </section>
          )}

          {/* Notas */}
          {lead.notes && lead.notes.length > 0 && (
            <section>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                💬 Notas de Seguimiento
              </h3>
              <div className="space-y-3">
                {lead.notes.map(note => (
                  <div key={note.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {note.userName}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(note.createdAt).toLocaleString('es-ES')}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{note.content}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Acciones */}
          <section className="flex gap-3">
            <MagneticButton
              onClick={() => console.log('Editar lead:', lead.id)}
              className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              ✏️ Editar Lead
            </MagneticButton>
            <MagneticButton
              onClick={() => console.log('Generar cotización:', lead.id)}
              className="flex-1 bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              💰 Generar Cotización
            </MagneticButton>
          </section>
        </div>
      </div>
    </div>
  );
}

function InfoField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
      <p className="text-gray-900 dark:text-white font-medium">{value}</p>
    </div>
  );
}
