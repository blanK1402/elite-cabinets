import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQCompact: React.FC = () => {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string | null>('q0');

  // Get FAQ items from translations (now only 5 items)
  const faqs: FAQItem[] = [
    { id: 'q0', question: t('faq.items.0.question'), answer: t('faq.items.0.answer') },
    { id: 'q1', question: t('faq.items.1.question'), answer: t('faq.items.1.answer') },
    { id: 'q2', question: t('faq.items.2.question'), answer: t('faq.items.2.answer') },
    { id: 'q3', question: t('faq.items.3.question'), answer: t('faq.items.3.answer') },
    { id: 'q4', question: t('faq.items.4.question'), answer: t('faq.items.4.answer') },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-(--color-primary) font-semibold mb-2 uppercase tracking-wider text-sm">
            {t('faq.badge') || 'FAQ'}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            {t('faq.title')}
          </h2>
          <p className="text-slate-600">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-slate-200 rounded-xl overflow-hidden hover:border-(--color-primary)/30 transition-colors"
            >
              <button
                onClick={() => toggleExpand(faq.id)}
                className="w-full flex items-start justify-between gap-4 p-5 text-left bg-slate-50 hover:bg-white transition-colors"
              >
                <span className="font-semibold text-slate-900 text-base leading-snug">{faq.question}</span>
                <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                  expandedId === faq.id
                    ? 'bg-(--color-primary) text-white rotate-180'
                    : 'bg-slate-200 text-slate-600'
                }`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${expandedId === faq.id ? 'max-h-40' : 'max-h-0'}`}>
                <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More questions CTA */}
        <div className="text-center mt-10">
          <p className="text-slate-500 text-sm mb-3">
            {t('faq.more_questions') || '¿No encuentras tu respuesta?'}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-(--color-primary) font-semibold hover:underline"
          >
            {t('faq.contact_cta') || 'Contáctanos directamente'}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
