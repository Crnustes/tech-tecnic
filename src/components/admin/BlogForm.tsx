'use client';

import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Save,
  Send,
  Eye,
  X,
  Plus,
  Tag,
  Search,
  Hash
} from 'lucide-react';
import { BlogFormData, BLOG_CATEGORIES, SUGGESTED_TAGS } from '@/types/admin';

// Schema de validación
const blogPostSchema = z.object({
  title: z.string().min(10, 'El título debe tener al menos 10 caracteres').max(100, 'El título no puede exceder 100 caracteres'),
  slug: z.string().min(3, 'El slug debe tener al menos 3 caracteres').regex(/^[a-z0-9-]+$/, 'El slug solo puede contener letras minúsculas, números y guiones'),
  category: z.string().min(1, 'Debes seleccionar una categoría'),
  tags: z.array(z.string()).min(1, 'Debes agregar al menos un tag').max(10, 'Máximo 10 tags'),
  excerpt: z.string().min(50, 'El excerpt debe tener al menos 50 caracteres').max(300, 'El excerpt no puede exceder 300 caracteres'),
  content: z.string().min(500, 'El contenido debe tener al menos 500 caracteres'),
  featuredImage: z.string().url('Debe ser una URL válida').optional().or(z.literal('')),
  seoTitle: z.string().max(60, 'El título SEO no puede exceder 60 caracteres').optional(),
  seoDescription: z.string().max(160, 'La descripción SEO no puede exceder 160 caracteres').optional(),
  seoKeywords: z.array(z.string()).max(10, 'Máximo 10 keywords').optional(),
  publishedAt: z.string().optional(),
  status: z.enum(['draft', 'published']),
});

type BlogPostFormData = z.infer<typeof blogPostSchema>;

const categories = BLOG_CATEGORIES;
const suggestedTags = SUGGESTED_TAGS;

export default function BlogForm() {
  const [isPreview, setIsPreview] = useState(false);
  const [tagInput, setTagInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isDirty },
    reset
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      title: '',
      slug: '',
      category: '',
      tags: [],
      excerpt: '',
      content: '',
      featuredImage: '',
      seoTitle: '',
      seoDescription: '',
      seoKeywords: [],
      publishedAt: new Date().toISOString().split('T')[0],
      status: 'draft'
    }
  });

  const watchedTitle = watch('title');
  const watchedTags = watch('tags');
  const watchedContent = watch('content');

  // Generar slug automáticamente desde el título
  const generateSlug = useCallback((title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }, []);

  // Actualizar slug cuando cambia el título
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setValue('title', title);
    if (!watch('slug') || watch('slug') === generateSlug(watchedTitle)) {
      setValue('slug', generateSlug(title));
    }
  };

  // Agregar tag
  const addTag = () => {
    if (tagInput.trim() && !watchedTags.includes(tagInput.trim())) {
      setValue('tags', [...watchedTags, tagInput.trim()]);
      setTagInput('');
    }
  };

  // Remover tag
  const removeTag = (tagToRemove: string) => {
    setValue('tags', watchedTags.filter(tag => tag !== tagToRemove));
  };

  // Agregar tag sugerido
  const addSuggestedTag = (tag: string) => {
    if (!watchedTags.includes(tag)) {
      setValue('tags', [...watchedTags, tag]);
    }
  };

  // Enviar formulario
  const onSubmit = async (data: BlogFormData) => {
    setIsSubmitting(true);
    try {
      // Aquí iría la lógica para guardar el artículo
      // Por ahora solo simulamos el envío
      console.log('Datos del artículo:', data);

      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 2000));

      alert('Artículo guardado exitosamente!');
      reset();
    } catch (error) {
      console.error('Error al guardar:', error);
      alert('Error al guardar el artículo');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Preview del artículo
  const renderPreview = () => (
    <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8">
      <div className="mb-6">
        <span className="px-4 py-2 bg-t_primary/20 text-t_primary rounded-full text-sm font-semibold">
          {watch('category') || 'Sin categoría'}
        </span>
      </div>

      <h1 className="text-4xl font-bold text-white mb-4">
        {watchedTitle || 'Título del artículo'}
      </h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {watchedTags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm">
            #{tag}
          </span>
        ))}
      </div>

      <p className="text-gray-300 mb-8 leading-relaxed">
        {watch('excerpt') || 'Resumen del artículo...'}
      </p>

      <div className="prose prose-lg prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{
          __html: watchedContent?.replace(/\n/g, '<br>') || 'Contenido del artículo...'
        }} />
      </div>
    </div>
  );

  if (isPreview) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">Vista Previa</h3>
          <button
            onClick={() => setIsPreview(false)}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
          >
            <X className="w-4 h-4 mr-2 inline" />
            Volver al Editor
          </button>
        </div>
        {renderPreview()}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Título y Slug */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Título del Artículo *
          </label>
          <input
            {...register('title')}
            onChange={handleTitleChange}
            className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-t_primary focus:outline-none transition-colors"
            placeholder="Ingresa el título del artículo"
          />
          {errors.title && (
            <p className="mt-1 text-red-400 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Slug/URL *
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 bg-slate-700 border border-r-0 border-white/10 rounded-l-lg text-gray-400">
              /blog/
            </span>
            <input
              {...register('slug')}
              className="flex-1 px-4 py-3 bg-slate-800/50 border border-white/10 rounded-r-lg text-white placeholder-gray-500 focus:border-t_primary focus:outline-none transition-colors"
              placeholder="titulo-del-articulo"
            />
          </div>
          {errors.slug && (
            <p className="mt-1 text-red-400 text-sm">{errors.slug.message}</p>
          )}
        </div>
      </div>

      {/* Categoría */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Categoría *
        </label>
        <select
          {...register('category')}
          className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:border-t_primary focus:outline-none transition-colors"
        >
          <option value="">Seleccionar categoría</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        {errors.category && (
          <p className="mt-1 text-red-400 text-sm">{errors.category.message}</p>
        )}
      </div>

      {/* Tags */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Tags *
        </label>

        {/* Tags actuales */}
        <div className="flex flex-wrap gap-2 mb-4">
          {watchedTags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-2 px-3 py-1 bg-t_primary/20 text-t_primary rounded-full text-sm"
            >
              <Hash className="w-3 h-3" />
              {tag}
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="hover:text-red-400 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>

        {/* Agregar nuevo tag */}
        <div className="flex gap-2 mb-4">
          <input
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
            className="flex-1 px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-t_primary focus:outline-none transition-colors"
            placeholder="Agregar tag..."
          />
          <button
            type="button"
            onClick={addTag}
            className="px-4 py-3 bg-t_primary hover:bg-t_primary/80 text-white rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Tags sugeridos */}
        <div>
          <p className="text-sm text-gray-400 mb-2">Tags sugeridos:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedTags.filter(tag => !watchedTags.includes(tag)).slice(0, 8).map(tag => (
              <button
                key={tag}
                type="button"
                onClick={() => addSuggestedTag(tag)}
                className="px-3 py-1 bg-white/5 hover:bg-white/10 text-gray-300 rounded-full text-sm transition-colors"
              >
                + {tag}
              </button>
            ))}
          </div>
        </div>

        {errors.tags && (
          <p className="mt-1 text-red-400 text-sm">{errors.tags.message}</p>
        )}
      </div>

      {/* Excerpt */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Resumen/Excerpt *
        </label>
        <textarea
          {...register('excerpt')}
          rows={3}
          className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-t_primary focus:outline-none transition-colors resize-none"
          placeholder="Breve descripción del artículo (50-300 caracteres)"
        />
        <div className="flex justify-between mt-1">
          <span className="text-xs text-gray-400">
            {watch('excerpt')?.length || 0}/300 caracteres
          </span>
          {errors.excerpt && (
            <p className="text-red-400 text-sm">{errors.excerpt.message}</p>
          )}
        </div>
      </div>

      {/* Contenido */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Contenido *
        </label>
        <textarea
          {...register('content')}
          rows={15}
          className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-t_primary focus:outline-none transition-colors font-mono text-sm"
          placeholder="Escribe el contenido del artículo en formato Markdown o HTML..."
        />
        <div className="flex justify-between mt-1">
          <span className="text-xs text-gray-400">
            {watch('content')?.length || 0} caracteres (mínimo 500)
          </span>
          {errors.content && (
            <p className="text-red-400 text-sm">{errors.content.message}</p>
          )}
        </div>
      </div>

      {/* Imagen destacada */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Imagen Destacada (URL)
        </label>
        <input
          {...register('featuredImage')}
          className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-t_primary focus:outline-none transition-colors"
          placeholder="https://ejemplo.com/imagen.jpg"
        />
        {errors.featuredImage && (
          <p className="mt-1 text-red-400 text-sm">{errors.featuredImage.message}</p>
        )}
      </div>

      {/* SEO Settings */}
      <div className="bg-slate-800/30 border border-white/10 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Search className="w-5 h-5" />
          Configuración SEO
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Título SEO (opcional)
            </label>
            <input
              {...register('seoTitle')}
              className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-t_primary focus:outline-none transition-colors"
              placeholder="Título personalizado para SEO"
            />
            <span className="text-xs text-gray-400 mt-1 block">
              {(watch('seoTitle')?.length || 0)}/60 caracteres
            </span>
            {errors.seoTitle && (
              <p className="mt-1 text-red-400 text-sm">{errors.seoTitle.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Descripción SEO (opcional)
            </label>
            <textarea
              {...register('seoDescription')}
              rows={2}
              className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-t_primary focus:outline-none transition-colors resize-none"
              placeholder="Descripción para motores de búsqueda"
            />
            <span className="text-xs text-gray-400 mt-1 block">
              {(watch('seoDescription')?.length || 0)}/160 caracteres
            </span>
            {errors.seoDescription && (
              <p className="mt-1 text-red-400 text-sm">{errors.seoDescription.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Configuración de publicación */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Fecha de Publicación
          </label>
          <input
            {...register('publishedAt')}
            type="date"
            className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:border-t_primary focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Estado
          </label>
          <select
            {...register('status')}
            className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:border-t_primary focus:outline-none transition-colors"
          >
            <option value="draft">Borrador</option>
            <option value="published">Publicado</option>
          </select>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="flex items-center justify-between pt-6 border-t border-white/10">
        <button
          type="button"
          onClick={() => setIsPreview(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
        >
          <Eye className="w-4 h-4" />
          Vista Previa
        </button>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            disabled={!isDirty}
          >
            Limpiar
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-3 bg-t_primary hover:bg-t_primary/80 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Guardando...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                Guardar Borrador
              </>
            )}
          </button>

          <button
            type="submit"
            onClick={() => setValue('status', 'published')}
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
            Publicar
          </button>
        </div>
      </div>
    </form>
  );
}