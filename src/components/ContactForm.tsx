'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

interface ContactFormProps {
  services: string[];
}

export default function ContactForm({ services }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    newsletter: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }

      setIsSubmitted(true);

      // Resetear formulario después de 3 segundos
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: '',
          newsletter: false,
        });
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al enviar el mensaje');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Nombre Completo *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-t_primary/50 focus:ring-1 focus:ring-t_primary/50"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-t_primary/50 focus:ring-1 focus:ring-t_primary/50"
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-t_primary/50 focus:ring-1 focus:ring-t_primary/50"
            placeholder="+57 300 123 4567"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Empresa</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-t_primary/50 focus:ring-1 focus:ring-t_primary/50"
            placeholder="Nombre de tu empresa"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Servicio de Interés *</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-t_primary/50 focus:ring-1 focus:ring-t_primary/50"
          >
            <option value="">Selecciona un servicio</option>
            {services.map((s) => (
              <option key={s} value={s} className="bg-slate-800">
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Presupuesto Aproximado</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-t_primary/50 focus:ring-1 focus:ring-t_primary/50"
          >
            <option value="">Selecciona un rango</option>
            <option value="<1M" className="bg-slate-800">Menos de $1M COP</option>
            <option value="1-5M" className="bg-slate-800">$1M - $5M COP</option>
            <option value="5-10M" className="bg-slate-800">$5M - $10M COP</option>
            <option value="10-20M" className="bg-slate-800">$10M - $20M COP</option>
            <option value=">20M" className="bg-slate-800">Más de $20M COP</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Mensaje *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-t_primary/50 focus:ring-1 focus:ring-t_primary/50 resize-none"
          placeholder="Cuéntanos sobre tu proyecto, objetivos, plazos y cualquier detalle relevante..."
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          name="newsletter"
          checked={formData.newsletter}
          onChange={handleInputChange}
          className="w-4 h-4 text-t_primary bg-white/5 border-white/10 rounded focus:ring-t_primary/50"
        />
        <label className="ml-2 text-sm text-gray-400">
          Quiero recibir tips y novedades sobre desarrollo web y tecnología
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-t_primary text-white rounded-lg font-semibold hover:bg-t_accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Enviando...
          </>
        ) : isSubmitted ? (
          <>
            <CheckCircle2 className="w-5 h-5" />
            ¡Mensaje Enviado!
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Enviar Mensaje
          </>
        )}
      </button>

      {/* Mensaje de Error */}
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {/* Mensaje de Éxito */}
      {isSubmitted && (
        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
          <p className="text-green-400 text-sm">
            ✓ Tu mensaje ha sido enviado correctamente. Te responderemos pronto.
          </p>
        </div>
      )}
    </form>
  );
}
